import React, { useState, useEffect } from "react";

export default function ScreenInfo() {
  const [info, setInfo] = useState({
    cssWidth: window.innerWidth,
    cssHeight: window.innerHeight,
    dpr: window.devicePixelRatio,
    physicalWidth: Math.round(window.innerWidth * window.devicePixelRatio),
    physicalHeight: Math.round(window.innerHeight * window.devicePixelRatio),
  });

  useEffect(() => {
    const update = () => {
      setInfo({
        cssWidth: window.innerWidth,
        cssHeight: window.innerHeight,
        dpr: window.devicePixelRatio,
        physicalWidth: Math.round(window.innerWidth * window.devicePixelRatio),
        physicalHeight: Math.round(window.innerHeight * window.devicePixelRatio),
      });
    };

    update(); // run once on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: "10px",
      right: "10px",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "8px",
      fontSize: "14px",
      fontFamily: "monospace",
      zIndex: 9999
    }}>
      <div><b>Viewport:</b> {info.cssWidth} × {info.cssHeight}</div>
      <div><b>DPR:</b> {info.dpr}</div>
      <div><b>Physical:</b> {info.physicalWidth} × {info.physicalHeight}</div>
    </div>
  );
}