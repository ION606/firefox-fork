/* Copyright (c) 2006, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/* minidump_exception_mac.h: A definition of exception codes for Mac
 * OS X
 *
 * (This is C99 source, please don't corrupt it with C++.)
 *
 * Author: Mark Mentovai
 * Split into its own file: Neal Sidhwaney */


#ifndef GOOGLE_BREAKPAD_COMMON_MINIDUMP_EXCEPTION_MAC_H__
#define GOOGLE_BREAKPAD_COMMON_MINIDUMP_EXCEPTION_MAC_H__

#include <stddef.h>

#include "google_breakpad/common/breakpad_types.h"

/* For (MDException).exception_code.  Breakpad minidump extension for Mac OS X
 * support.  Based on Darwin/Mac OS X' mach/exception_types.h.  This is
 * what Mac OS X calls an "exception", not a "code". */
typedef enum {
  /* Exception code.  The high 16 bits of exception_code contains one of
   * these values. */
  MD_EXCEPTION_MAC_BAD_ACCESS      = 1,  /* code can be a kern_return_t */
      /* EXC_BAD_ACCESS */
  MD_EXCEPTION_MAC_BAD_INSTRUCTION = 2,  /* code is CPU-specific */
      /* EXC_BAD_INSTRUCTION */
  MD_EXCEPTION_MAC_ARITHMETIC      = 3,  /* code is CPU-specific */
      /* EXC_ARITHMETIC */
  MD_EXCEPTION_MAC_EMULATION       = 4,  /* code is CPU-specific */
      /* EXC_EMULATION */
  MD_EXCEPTION_MAC_SOFTWARE        = 5,
      /* EXC_SOFTWARE */
  MD_EXCEPTION_MAC_BREAKPOINT      = 6,  /* code is CPU-specific */
      /* EXC_BREAKPOINT */
  MD_EXCEPTION_MAC_SYSCALL         = 7,
      /* EXC_SYSCALL */
  MD_EXCEPTION_MAC_MACH_SYSCALL    = 8,
      /* EXC_MACH_SYSCALL */
  MD_EXCEPTION_MAC_RPC_ALERT       = 9,
      /* EXC_RPC_ALERT */
  MD_EXCEPTION_MAC_RESOURCE        = 11,
      /* EXC_RESOURCE */
  MD_EXCEPTION_MAC_GUARD           = 12,
      /* EXC_GUARD */
  MD_EXCEPTION_MAC_SIMULATED       = 0x43507378
      /* Fake exception code used by Crashpad's SimulateCrash ('CPsx'). */
} MDExceptionMac;

/* For (MDException).exception_flags.  Breakpad minidump extension for Mac OS X
 * support.  Based on Darwin/Mac OS X' mach/ppc/exception.h and
 * mach/i386/exception.h.  This is what Mac OS X calls a "code". */
typedef enum {
  /* With MD_EXCEPTION_BAD_ACCESS.  These are relevant kern_return_t values
   * from mach/kern_return.h. */
  MD_EXCEPTION_CODE_MAC_INVALID_ADDRESS    =  1,
      /* KERN_INVALID_ADDRESS */
  MD_EXCEPTION_CODE_MAC_PROTECTION_FAILURE =  2,
      /* KERN_PROTECTION_FAILURE */
  MD_EXCEPTION_CODE_MAC_NO_ACCESS          =  8,
      /* KERN_NO_ACCESS */
  MD_EXCEPTION_CODE_MAC_MEMORY_FAILURE     =  9,
      /* KERN_MEMORY_FAILURE */
  MD_EXCEPTION_CODE_MAC_MEMORY_ERROR       = 10,
      /* KERN_MEMORY_ERROR */
  MD_EXCEPTION_CODE_MAC_CODESIGN_ERROR     = 50,
      /* KERN_CODESIGN_ERROR */

  /* With MD_EXCEPTION_SOFTWARE */
  MD_EXCEPTION_CODE_MAC_BAD_SYSCALL  = 0x00010000,  /* Mach SIGSYS */
  MD_EXCEPTION_CODE_MAC_BAD_PIPE     = 0x00010001,  /* Mach SIGPIPE */
  MD_EXCEPTION_CODE_MAC_ABORT        = 0x00010002,  /* Mach SIGABRT */
  /* Custom values */
  MD_EXCEPTION_CODE_MAC_NS_EXCEPTION = 0xDEADC0DE,  /* uncaught NSException */

  /* With MD_EXCEPTION_MAC_BAD_ACCESS on arm */
  MD_EXCEPTION_CODE_MAC_ARM_DA_ALIGN = 0x0101,  /* EXC_ARM_DA_ALIGN */
  MD_EXCEPTION_CODE_MAC_ARM_DA_DEBUG = 0x0102,  /* EXC_ARM_DA_DEBUG */

  /* With MD_EXCEPTION_MAC_BAD_INSTRUCTION on arm */
  MD_EXCEPTION_CODE_MAC_ARM_UNDEFINED = 1,  /* EXC_ARM_UNDEFINED */

  /* With MD_EXCEPTION_MAC_BREAKPOINT on arm */
  MD_EXCEPTION_CODE_MAC_ARM_BREAKPOINT = 1, /* EXC_ARM_BREAKPOINT */

  /* With MD_EXCEPTION_MAC_BAD_ACCESS on ppc */
  MD_EXCEPTION_CODE_MAC_PPC_VM_PROT_READ = 0x0101,
      /* EXC_PPC_VM_PROT_READ */
  MD_EXCEPTION_CODE_MAC_PPC_BADSPACE     = 0x0102,
      /* EXC_PPC_BADSPACE */
  MD_EXCEPTION_CODE_MAC_PPC_UNALIGNED    = 0x0103,
      /* EXC_PPC_UNALIGNED */

  /* With MD_EXCEPTION_MAC_BAD_INSTRUCTION on ppc */
  MD_EXCEPTION_CODE_MAC_PPC_INVALID_SYSCALL           = 1,
      /* EXC_PPC_INVALID_SYSCALL */
  MD_EXCEPTION_CODE_MAC_PPC_UNIMPLEMENTED_INSTRUCTION = 2,
      /* EXC_PPC_UNIPL_INST */
  MD_EXCEPTION_CODE_MAC_PPC_PRIVILEGED_INSTRUCTION    = 3,
      /* EXC_PPC_PRIVINST */
  MD_EXCEPTION_CODE_MAC_PPC_PRIVILEGED_REGISTER       = 4,
      /* EXC_PPC_PRIVREG */
  MD_EXCEPTION_CODE_MAC_PPC_TRACE                     = 5,
      /* EXC_PPC_TRACE */
  MD_EXCEPTION_CODE_MAC_PPC_PERFORMANCE_MONITOR       = 6,
      /* EXC_PPC_PERFMON */

  /* With MD_EXCEPTION_MAC_ARITHMETIC on ppc */
  MD_EXCEPTION_CODE_MAC_PPC_OVERFLOW           = 1,
      /* EXC_PPC_OVERFLOW */
  MD_EXCEPTION_CODE_MAC_PPC_ZERO_DIVIDE        = 2,
      /* EXC_PPC_ZERO_DIVIDE */
  MD_EXCEPTION_CODE_MAC_PPC_FLOAT_INEXACT      = 3,
      /* EXC_FLT_INEXACT */
  MD_EXCEPTION_CODE_MAC_PPC_FLOAT_ZERO_DIVIDE  = 4,
      /* EXC_PPC_FLT_ZERO_DIVIDE */
  MD_EXCEPTION_CODE_MAC_PPC_FLOAT_UNDERFLOW    = 5,
      /* EXC_PPC_FLT_UNDERFLOW */
  MD_EXCEPTION_CODE_MAC_PPC_FLOAT_OVERFLOW     = 6,
      /* EXC_PPC_FLT_OVERFLOW */
  MD_EXCEPTION_CODE_MAC_PPC_FLOAT_NOT_A_NUMBER = 7,
      /* EXC_PPC_FLT_NOT_A_NUMBER */

  /* With MD_EXCEPTION_MAC_EMULATION on ppc */
  MD_EXCEPTION_CODE_MAC_PPC_NO_EMULATION   = 8,
      /* EXC_PPC_NOEMULATION */
  MD_EXCEPTION_CODE_MAC_PPC_ALTIVEC_ASSIST = 9,
      /* EXC_PPC_ALTIVECASSIST */

  /* With MD_EXCEPTION_MAC_SOFTWARE on ppc */
  MD_EXCEPTION_CODE_MAC_PPC_TRAP    = 0x00000001,  /* EXC_PPC_TRAP */
  MD_EXCEPTION_CODE_MAC_PPC_MIGRATE = 0x00010100,  /* EXC_PPC_MIGRATE */

  /* With MD_EXCEPTION_MAC_BREAKPOINT on ppc */
  MD_EXCEPTION_CODE_MAC_PPC_BREAKPOINT = 1,  /* EXC_PPC_BREAKPOINT */

  /* With MD_EXCEPTION_MAC_BAD_INSTRUCTION on x86, see also x86 interrupt
   * values below. */
  MD_EXCEPTION_CODE_MAC_X86_INVALID_OPERATION = 1,  /* EXC_I386_INVOP */

  /* With MD_EXCEPTION_MAC_ARITHMETIC on x86 */
  MD_EXCEPTION_CODE_MAC_X86_DIV       = 1,  /* EXC_I386_DIV */
  MD_EXCEPTION_CODE_MAC_X86_INTO      = 2,  /* EXC_I386_INTO */
  MD_EXCEPTION_CODE_MAC_X86_NOEXT     = 3,  /* EXC_I386_NOEXT */
  MD_EXCEPTION_CODE_MAC_X86_EXTOVR    = 4,  /* EXC_I386_EXTOVR */
  MD_EXCEPTION_CODE_MAC_X86_EXTERR    = 5,  /* EXC_I386_EXTERR */
  MD_EXCEPTION_CODE_MAC_X86_EMERR     = 6,  /* EXC_I386_EMERR */
  MD_EXCEPTION_CODE_MAC_X86_BOUND     = 7,  /* EXC_I386_BOUND */
  MD_EXCEPTION_CODE_MAC_X86_SSEEXTERR = 8,  /* EXC_I386_SSEEXTERR */

  /* With MD_EXCEPTION_MAC_BREAKPOINT on x86 */
  MD_EXCEPTION_CODE_MAC_X86_SGL = 1,  /* EXC_I386_SGL */
  MD_EXCEPTION_CODE_MAC_X86_BPT = 2,  /* EXC_I386_BPT */

  /* With MD_EXCEPTION_MAC_BAD_INSTRUCTION on x86.  These are the raw
   * x86 interrupt codes.  Most of these are mapped to other Mach
   * exceptions and codes, are handled, or should not occur in user space.
   * A few of these will do occur with MD_EXCEPTION_MAC_BAD_INSTRUCTION. */
  /* EXC_I386_DIVERR    =  0: mapped to EXC_ARITHMETIC/EXC_I386_DIV */
  /* EXC_I386_SGLSTP    =  1: mapped to EXC_BREAKPOINT/EXC_I386_SGL */
  /* EXC_I386_NMIFLT    =  2: should not occur in user space */
  /* EXC_I386_BPTFLT    =  3: mapped to EXC_BREAKPOINT/EXC_I386_BPT */
  /* EXC_I386_INTOFLT   =  4: mapped to EXC_ARITHMETIC/EXC_I386_INTO */
  /* EXC_I386_BOUNDFLT  =  5: mapped to EXC_ARITHMETIC/EXC_I386_BOUND */
  /* EXC_I386_INVOPFLT  =  6: mapped to EXC_BAD_INSTRUCTION/EXC_I386_INVOP */
  /* EXC_I386_NOEXTFLT  =  7: should be handled by the kernel */
  /* EXC_I386_DBLFLT    =  8: should be handled (if possible) by the kernel */
  /* EXC_I386_EXTOVRFLT =  9: mapped to EXC_BAD_ACCESS/(PROT_READ|PROT_EXEC) */
  MD_EXCEPTION_CODE_MAC_X86_INVALID_TASK_STATE_SEGMENT = 10,
      /* EXC_INVTSSFLT */
  MD_EXCEPTION_CODE_MAC_X86_SEGMENT_NOT_PRESENT        = 11,
      /* EXC_SEGNPFLT */
  MD_EXCEPTION_CODE_MAC_X86_STACK_FAULT                = 12,
      /* EXC_STKFLT */
  MD_EXCEPTION_CODE_MAC_X86_GENERAL_PROTECTION_FAULT   = 13,
      /* EXC_GPFLT */
  /* EXC_I386_PGFLT     = 14: should not occur in user space */
  /* EXC_I386_EXTERRFLT = 16: mapped to EXC_ARITHMETIC/EXC_I386_EXTERR */
  MD_EXCEPTION_CODE_MAC_X86_ALIGNMENT_FAULT            = 17
      /* EXC_ALIGNFLT (for vector operations) */
  /* EXC_I386_ENOEXTFLT = 32: should be handled by the kernel */
  /* EXC_I386_ENDPERR   = 33: should not occur */
} MDExceptionCodeMac;

// The following definitions were taken from  Darwin/XNU kernel sources.
// See https://github.com/apple/darwin-xnu/blob/main/osfmk/kern/exc_resource.h

typedef enum MDMacExcResourceType {
  MD_MAC_EXC_RESOURCE_TYPE_CPU     = 1,
  MD_MAC_EXC_RESOURCE_TYPE_WAKEUPS = 2,
  MD_MAC_EXC_RESOURCE_TYPE_MEMORY  = 3,
  MD_MAC_EXC_RESOURCE_TYPE_IO      = 4,
  MD_MAC_EXC_RESOURCE_TYPE_THREADS = 5
} MDMacExcResourceType;

typedef enum MDMacExcResourceFlavorCpu {
  MD_MAC_EXC_RESOURCE_FLAVOR_CPU_MONITOR       = 1,
  MD_MAC_EXC_RESOURCE_FLAVOR_CPU_MONITOR_FATAL = 2
} MDMacExcResourceFlavorCpu;

typedef enum MDMacExcResourceFlavorWakeup {
  MD_MAC_EXC_RESOURCE_FLAVOR_WAKEUPS_MONITOR = 1,
} MDMacExcResourceFlavorWakeup;

typedef enum MDMacExcResourceFlavorMemory {
  MD_MAC_EXC_RESOURCE_FLAVOR_HIGH_WATERMARK = 1,
} MDMacExcResourceFlavorMemory;

typedef enum MDMacExcResourceIOFlavor {
  MD_MAC_EXC_RESOURCE_FLAVOR_IO_PHYSICAL_WRITES = 1,
  MD_MAC_EXC_RESOURCE_FLAVOR_IO_LOGICAL_WRITES = 2,
} MDMacExcResourceIOFlavor;

typedef enum MDMacExcResourceThreadsFlavor {
  MD_MAC_EXC_RESOURCE_FLAVOR_THREADS_HIGH_WATERMARK = 1,
} MDMacExcResourceThreadsFlavor;

// See https://github.com/apple/darwin-xnu/blob/main/osfmk/kern/exc_guard.h

typedef enum MDMacExcGuardType {
  MD_MAC_EXC_GUARD_TYPE_NONE        = 0x0,
  MD_MAC_EXC_GUARD_TYPE_MACH_PORT   = 0x1,
  MD_MAC_EXC_GUARD_TYPE_FD          = 0x2,
  MD_MAC_EXC_GUARD_TYPE_USER        = 0x3,
  MD_MAC_EXC_GUARD_TYPE_VN          = 0x4,
  MD_MAC_EXC_GUARD_TYPE_VIRT_MEMORY = 0x5
} MDMacExcGuardType;

// See https://github.com/apple/darwin-xnu/osfmk/mach/port.h

typedef enum MDMacExcGuardMachPortFlavor {
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_DESTROY              = 1u << 0,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_MOD_REFS             = 1u << 1,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_SET_CONTEXT          = 1u << 2,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_UNGUARDED            = 1u << 3,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_INCORRECT_GUARD      = 1u << 4,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_IMMOVABLE            = 1u << 5,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_STRICT_REPLY         = 1u << 6,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_MSG_FILTERED         = 1u << 7,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_INVALID_RIGHT        = 1u << 8,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_INVALID_NAME         = 1u << 9,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_INVALID_VALUE        = 1u << 10,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_INVALID_ARGUMENT     = 1u << 11,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_RIGHT_EXISTS         = 1u << 12,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_KERN_NO_SPACE        = 1u << 13,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_KERN_FAILURE         = 1u << 14,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_KERN_RESOURCE        = 1u << 15,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_SEND_INVALID_REPLY   = 1u << 16,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_SEND_INVALID_VOUCHER = 1u << 17,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_SEND_INVALID_RIGHT   = 1u << 18,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_RCV_INVALID_NAME     = 1u << 19,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_RCV_GUARDED_DESC     = 1u << 20,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_MOD_REFS_NON_FATAL   = 1u << 21,
  MD_MAC_EXC_GUARD_MACH_PORT_FLAVOR_GUARD_EXC_IMMOVABLE_NON_FATAL  = 1u << 22,
} MDMacExcGuardMachPortFlavor;

// See https://github.com/apple/darwin-xnu/blob/main/bsd/sys/guarded.h

typedef enum MDMacExcGuardFDFlavor {
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_CLOSE      = 1u << 0,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_DUP        = 1u << 1,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_NOCLOEXEC  = 1u << 2,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_SOCKET_IPC = 1u << 3,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_FILEPORT   = 1u << 4,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_MISMATCH   = 1u << 5,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_WRITE      = 1u << 6
} MDMacExcGuardFDFlavor;


typedef enum MDMacExcGuardVNFlavor {
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_RENAME_TO   = 1u << 0,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_RENAME_FROM = 1u << 1,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_UNLINK      = 1u << 2,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_WRITE_OTHER = 1u << 3,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_TRUNC_OTHER = 1u << 4,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_LINK        = 1u << 5,
  MD_MAC_EXC_GUARD_FD_FLAVOR_GUARD_EXC_EXCHDATA    = 1u << 6,
} MDMacExcGuardVNFlavor;

// See https://github.com/apple/darwin-xnu/osfmk/mach/vm_statistics.h

typedef enum MDMacExcGuardVirtMemoryFlavor {
  MD_MAC_EXC_GUARD_VIRT_MEMORY_FLAVOR_GUARD_EXC_DEALLOC_GAP = 1u << 0
} MDMacExcGuardVirtMemoryFlavor;

#endif  /* GOOGLE_BREAKPAD_COMMON_MINIDUMP_EXCEPTION_MAC_OSX_H__ */