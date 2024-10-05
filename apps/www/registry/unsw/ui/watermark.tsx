import React, { CSSProperties } from "react";

const Watermark = ({ content, children, count, fontSize, opacity }) => {
  const containerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const watermarkStyle: CSSProperties = {
    position: "absolute",
    fontSize: `${fontSize}px`, // Use the fontSize prop
    opacity: opacity, // Use the opacity prop
    pointerEvents: "none",
    transform: "rotate(-30deg)", // Rotate the watermark
  };

  const step = 100;
  const columnWidth = 200; // Width of each column
  const columns = 3; // Number of columns

  const watermarkElements = [];
  for (let i = 0; i < count; i++) {
    const column = Math.floor(i / columns); // Calculate the column index
    const row = i % columns; // Calculate the row index

    watermarkElements.push(
      <div
        key={i}
        style={{
          ...watermarkStyle,
          top: `${row * step}px`,
          left: `${column * columnWidth}px`, // Adjust left position
        }}
      >
        {content}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {watermarkElements}
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </div>
  );
};

export default Watermark;
