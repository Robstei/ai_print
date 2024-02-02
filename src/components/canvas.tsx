import { he } from "date-fns/locale";
import { useRef } from "react";
import { Stage, Layer, Circle, Rect } from "react-konva";

type Props = {
  width: number;
  height: number;
};

function Canvas({ width, height }: Props) {
  console.log(width, height);
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect fill="white" x={0} y={0} width={width} height={height} />
        <Circle x={200} y={100} radius={50} fill="green" />
      </Layer>
    </Stage>
  );
}

export default Canvas;
