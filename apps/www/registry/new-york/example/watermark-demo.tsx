import React from "react"

import Watermark from "@/registry/default/ui/watermark"

const WatermarkNormal = () => (
  <Watermark content=" Watermark" count={9} fontSize={28} opacity={0.1}>
    <div style={{ height: "200px" }} />
  </Watermark>
)

export default WatermarkNormal
