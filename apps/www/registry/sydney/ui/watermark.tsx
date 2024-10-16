import React, { CSSProperties, ReactNode } from "react"

interface WatermarkProps {
  content: string
  children: ReactNode
  count: number
  fontSize: number
  opacity: number
}

const Watermark: React.FC<WatermarkProps> = ({
  content,
  children,
  count,
  fontSize,
  opacity,
}) => {
  const containerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
  }

  const watermarkStyle: CSSProperties = {
    position: "absolute",
    fontSize: `${fontSize}px`,
    opacity: opacity,
    pointerEvents: "none",
    transform: "rotate(-30deg)",
  }

  const step = 100
  const columnWidth = 200
  const columns = 3

  const watermarkElements = []
  for (let i = 0; i < count; i++) {
    const column = Math.floor(i / columns)
    const row = i % columns

    watermarkElements.push(
      <div
        key={i}
        style={{
          ...watermarkStyle,
          top: `${row * step}px`,
          left: `${column * columnWidth}px`,
        }}
      >
        {content}
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      {watermarkElements}
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </div>
  )
}

export default Watermark
