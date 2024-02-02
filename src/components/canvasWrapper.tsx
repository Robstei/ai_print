"use client";

import { useEffect, useRef, useState } from "react";
import Canvas from "./canvas";

export function CanvasWrapper() {
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  }>();
  const ref = useRef<HTMLDivElement>(null);

  function updateDimensions() {
    if (!ref.current) {
      return;
    }

    setDimensions({
      height: ref.current.clientHeight,
      width: ref.current.clientWidth,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="grow" ref={ref}>
      {dimensions && (
        <Canvas width={dimensions.width} height={dimensions.height} />
      )}
    </div>
  );
}
