/*
 *  Copyright (c) 2021 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree. An additional intellectual property rights grant can be found
 *  in the file PATENTS.  All contributing project authors may
 *  be found in the AUTHORS file in the root of the source tree.
 */
#ifndef NET_DCSCTP_PACKET_CHUNK_INIT_ACK_CHUNK_H_
#define NET_DCSCTP_PACKET_CHUNK_INIT_ACK_CHUNK_H_
#include <stddef.h>
#include <stdint.h>

#include <string>
#include <utility>
#include <vector>

#include "absl/strings/string_view.h"
#include "api/array_view.h"
#include "net/dcsctp/packet/chunk/chunk.h"
#include "net/dcsctp/packet/parameter/parameter.h"
#include "net/dcsctp/packet/tlv_trait.h"

namespace dcsctp {

// https://tools.ietf.org/html/rfc4960#section-3.3.3
struct InitAckChunkConfig : ChunkConfig {
  static constexpr int kType = 2;
  static constexpr size_t kHeaderSize = 20;
  static constexpr size_t kVariableLengthAlignment = 1;
};

class InitAckChunk : public Chunk, public TLVTrait<InitAckChunkConfig> {
 public:
  static constexpr int kType = InitAckChunkConfig::kType;

  InitAckChunk(VerificationTag initiate_tag,
               uint32_t a_rwnd,
               uint16_t nbr_outbound_streams,
               uint16_t nbr_inbound_streams,
               TSN initial_tsn,
               Parameters parameters)
      : initiate_tag_(initiate_tag),
        a_rwnd_(a_rwnd),
        nbr_outbound_streams_(nbr_outbound_streams),
        nbr_inbound_streams_(nbr_inbound_streams),
        initial_tsn_(initial_tsn),
        parameters_(std::move(parameters)) {}

  InitAckChunk(InitAckChunk&& other) = default;
  InitAckChunk& operator=(InitAckChunk&& other) = default;

  static std::optional<InitAckChunk> Parse(rtc::ArrayView<const uint8_t> data);

  void SerializeTo(std::vector<uint8_t>& out) const override;
  std::string ToString() const override;

  VerificationTag initiate_tag() const { return initiate_tag_; }
  uint32_t a_rwnd() const { return a_rwnd_; }
  uint16_t nbr_outbound_streams() const { return nbr_outbound_streams_; }
  uint16_t nbr_inbound_streams() const { return nbr_inbound_streams_; }
  TSN initial_tsn() const { return initial_tsn_; }
  const Parameters& parameters() const { return parameters_; }

 private:
  VerificationTag initiate_tag_;
  uint32_t a_rwnd_;
  uint16_t nbr_outbound_streams_;
  uint16_t nbr_inbound_streams_;
  TSN initial_tsn_;
  Parameters parameters_;
};

}  // namespace dcsctp

#endif  // NET_DCSCTP_PACKET_CHUNK_INIT_ACK_CHUNK_H_