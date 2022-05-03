import React from 'react';
import { getSmoothStepPath , getMarkerEnd } from 'react-flow-renderer';

export default function Customedge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  label,
  arrowHeadType='arrow',
  markerEndId, 
}) {
  const edgePath = getSmoothStepPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition,label });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);

  return (
    <>
      <path id={id} style={style} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />
      <text>
        <textPath href={`#${id}`} style={{ fontSize: '12px' }} startOffset="50%" textAnchor="middle">
          {data.text}
          {console.log("dtat:",data.text)}
        </textPath>
      </text>
    </>
  );
}