/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package org.mozilla.fenix.home

import android.content.Context
import io.mockk.every
import io.mockk.mockk
import io.mockk.spyk
import io.mockk.verify
import mozilla.components.browser.state.search.SearchEngine
import mozilla.components.browser.state.state.BrowserState
import mozilla.components.browser.state.state.SearchState
import mozilla.components.browser.state.store.BrowserStore
import mozilla.components.feature.top.sites.TopSite
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Test
import org.mozilla.fenix.FenixApplication
import org.mozilla.fenix.HomeActivity
import org.mozilla.fenix.components.Core
import org.mozilla.fenix.ext.application
import org.mozilla.fenix.ext.components
import org.mozilla.fenix.home.HomeFragment.Companion.AMAZON_SPONSORED_TITLE
import org.mozilla.fenix.home.HomeFragment.Companion.EBAY_SPONSORED_TITLE
import org.mozilla.fenix.utils.Settings

class HomeFragmentTest {

    private lateinit var settings: Settings
    private lateinit var context: Context
    private lateinit var core: Core
    private lateinit var homeFragment: HomeFragment
    private lateinit var activity: HomeActivity

    @Before
    fun setup() {
        settings = mockk(relaxed = true)
        context = mockk(relaxed = true)
        core = mockk(relaxed = true)
        activity = mockk(relaxed = true)

        val fenixApplication: FenixApplication = mockk(relaxed = true)

        homeFragment = spyk(HomeFragment())

        every { context.application } returns fenixApplication
        every { homeFragment.context } answers { context }
        every { context.components.settings } answers { settings }
        every { context.components.core } answers { core }
        every { homeFragment.binding } returns mockk(relaxed = true)
        every { homeFragment.viewLifecycleOwner } returns mockk(relaxed = true)
    }

    @Test
    fun `WHEN getTopSitesConfig is called THEN it returns TopSitesConfig with non-null frecencyConfig`() {
        every { settings.topSitesMaxLimit } returns 10

        val topSitesConfig = homeFragment.getTopSitesConfig()

        assertNotNull(topSitesConfig.frecencyConfig)
    }

    @Test
    fun `GIVEN a topSitesMaxLimit WHEN getTopSitesConfig is called THEN it returns TopSitesConfig with totalSites = topSitesMaxLimit`() {
        val topSitesMaxLimit = 10
        every { settings.topSitesMaxLimit } returns topSitesMaxLimit

        val topSitesConfig = homeFragment.getTopSitesConfig()

        assertEquals(topSitesMaxLimit, topSitesConfig.totalSites)
    }

    @Test
    fun `GIVEN the selected search engine is set to eBay WHEN getTopSitesConfig is called THEN providerFilter filters the eBay provided top sites`() {
        val searchEngine: SearchEngine = mockk()
        val browserStore = BrowserStore(
            initialState = BrowserState(
                search = SearchState(
                    regionSearchEngines = listOf(searchEngine),
                ),
            ),
        )

        every { core.store } returns browserStore
        every { searchEngine.name } returns EBAY_SPONSORED_TITLE

        val eBayTopSite = TopSite.Provided(1L, EBAY_SPONSORED_TITLE, "eBay.com", "", "", "", 0L)
        val amazonTopSite = TopSite.Provided(2L, AMAZON_SPONSORED_TITLE, "Amazon.com", "", "", "", 0L)
        val firefoxTopSite = TopSite.Provided(3L, "Firefox", "mozilla.org", "", "", "", 0L)
        val providedTopSites = listOf(eBayTopSite, amazonTopSite, firefoxTopSite)

        val topSitesConfig = homeFragment.getTopSitesConfig()

        val filteredProvidedSites = providedTopSites.filter {
            topSitesConfig.providerConfig?.providerFilter?.invoke(it) ?: true
        }
        assertTrue(filteredProvidedSites.containsAll(listOf(amazonTopSite, firefoxTopSite)))
        assertFalse(filteredProvidedSites.contains(eBayTopSite))
    }

    @Test
    fun `WHEN configuration changed THEN menu is dismissed`() {
        val homeMenuView: HomeMenuView = mockk(relaxed = true)
        val toolbarView = ToolbarView(mockk(), mockk(), homeFragment, mockk())
        toolbarView.homeMenuView = homeMenuView
        homeFragment.toolbarView = toolbarView

        homeFragment.onConfigurationChanged(mockk(relaxed = true))

        verify(exactly = 1) { homeMenuView.dismissMenu() }
    }

    fun `GIVEN the user is in normal mode WHEN checking if should enable wallpaper THEN return true`() {
        val activity: HomeActivity = mockk {
            every { themeManager.currentTheme.isPrivate } returns false
        }
        every { homeFragment.activity } returns activity

        assertTrue(homeFragment.shouldEnableWallpaper())
    }

    @Test
    fun `GIVEN the user is in private mode WHEN checking if should enable wallpaper THEN return false`() {
        val activity: HomeActivity = mockk {
            every { themeManager.currentTheme.isPrivate } returns true
        }
        every { homeFragment.activity } returns activity

        assertFalse(homeFragment.shouldEnableWallpaper())
    }

    @Test
    fun `WHEN isMicrosurveyEnabled is true GIVEN a call to initializeMicrosurveyFeature THEN messagingFeature is initialized`() {
        assertNull(homeFragment.messagingFeatureMicrosurvey.get())

        homeFragment.initializeMicrosurveyFeature(isMicrosurveyEnabled = true)

        assertNotNull(homeFragment.messagingFeatureMicrosurvey.get())
    }

    @Test
    fun `WHEN isMicrosurveyEnabled is false GIVEN a call to initializeMicrosurveyFeature THEN messagingFeature is not initialized`() {
        assertNull(homeFragment.messagingFeatureMicrosurvey.get())

        homeFragment.initializeMicrosurveyFeature(isMicrosurveyEnabled = false)

        assertNull(homeFragment.messagingFeatureMicrosurvey.get())
    }

    @Test
    fun `WHEN not default browser and prompt supported THEN promptToSetAsDefaultBrowser is called`() {
        every { settings.setAsDefaultBrowserPromptForExistingUsersEnabled } returns true
        every { settings.numberOfSetAsDefaultPromptShownTimes } returns 0
        every { settings.lastSetAsDefaultPromptShownTimeInMillis } returns 0L
        every { settings.coldStartsBetweenSetAsDefaultPrompts } returns 5

        homeFragment.showSetAsDefaultBrowserPrompt()

        verify { settings.setAsDefaultPromptCalled() }
    }

    @Test
    fun `WHEN showSetAsDefaultBrowserPrompt is called GIVEN the conditions to show a prompt are not met THEN setAsDefaultPromptCalled is not called`() {
        every { settings.setAsDefaultBrowserPromptForExistingUsersEnabled } returns false
        every { settings.numberOfSetAsDefaultPromptShownTimes } returns 0
        every { settings.lastSetAsDefaultPromptShownTimeInMillis } returns System.currentTimeMillis()
        every { settings.coldStartsBetweenSetAsDefaultPrompts } returns 5

        if (settings.shouldShowSetAsDefaultPrompt) {
            homeFragment.showSetAsDefaultBrowserPrompt()
        }

        // Because we should not be showing the default browser prompt in this case
        // showSetAsDefaultBrowserPrompt() is never called.
        verify(exactly = 0) { homeFragment.showSetAsDefaultBrowserPrompt() }
    }

    @Test
    fun `WHEN showSetAsDefaultBrowserPrompt is called GIVEN the prompt has been shown maximum times THEN setAsDefaultPromptCalled is not called`() {
        every { settings.setAsDefaultBrowserPromptForExistingUsersEnabled } returns true
        every { settings.numberOfSetAsDefaultPromptShownTimes } returns 3 // Maximum number of times the prompt can be shown based on the design criteria
        every { settings.lastSetAsDefaultPromptShownTimeInMillis } returns 0L
        every { settings.coldStartsBetweenSetAsDefaultPrompts } returns 5

        if (settings.shouldShowSetAsDefaultPrompt) {
            homeFragment.showSetAsDefaultBrowserPrompt()
        }

        verify(exactly = 0) { homeFragment.showSetAsDefaultBrowserPrompt() }
    }

    @Test
    fun `WHEN showSetAsDefaultBrowserPrompt is called GIVEN the time since last prompt is too short THEN setAsDefaultPromptCalled is not called`() {
        every { settings.setAsDefaultBrowserPromptForExistingUsersEnabled } returns true
        every { settings.numberOfSetAsDefaultPromptShownTimes } returns 1
        every { settings.lastSetAsDefaultPromptShownTimeInMillis } returns System.currentTimeMillis() - 1000
        every { settings.coldStartsBetweenSetAsDefaultPrompts } returns 5

        if (settings.shouldShowSetAsDefaultPrompt) {
            homeFragment.showSetAsDefaultBrowserPrompt()
        }

        verify(exactly = 0) { homeFragment.showSetAsDefaultBrowserPrompt() }
    }

    @Test
    fun `WHEN showSetAsDefaultBrowserPrompt is called GIVEN not enough cold starts THEN setAsDefaultPromptCalled is not called`() {
        every { settings.setAsDefaultBrowserPromptForExistingUsersEnabled } returns true
        every { settings.numberOfSetAsDefaultPromptShownTimes } returns 1
        every { settings.lastSetAsDefaultPromptShownTimeInMillis } returns 0L
        every { settings.coldStartsBetweenSetAsDefaultPrompts } returns 1

        if (settings.shouldShowSetAsDefaultPrompt) {
            homeFragment.showSetAsDefaultBrowserPrompt()
        }

        verify(exactly = 0) { homeFragment.showSetAsDefaultBrowserPrompt() }
    }
}