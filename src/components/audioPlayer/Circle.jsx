// import React from 'react'

// const Circle = ({ color, percentage, size, strokeWidth }) => {
//     const radius = size / 2 - 10;
//     const circ = 2 * Math.PI * radius - 20;
//     const strokePct = (100 - Math.round(percentage) * circ) / 100;
  
//     return (
//       <circle
//         r={radius}
//         cx="50%"
//         cy="50%"
//         fill="transparent"
//         stroke={strokePct !== circ ? color : ""}
//         strokeWidth={strokeWidth}
//         strokeDasharray={circ}
//         strokeDashoffset={percentage ? strokePct : 0}
//         strokeLinecap="round"
//       ></circle>
//     );
//   };
  
//   export default Circle ;
  
import React from 'react'

const Circle = ({ color, percentage, size, strokeWidth }) => {
  console.log("CIRCLE")
  console.log("color " , color);
  console.log("percentage" , percentage);
  console.log("size"  , size);
  console.log("stokeWidth " , strokeWidth);
    const radius = size / 2 - 10;
    const circ = 2 * Math.PI * radius - 15;
    const strokePct = ((100 - Math.round(percentage)) * circ) / 100;
  
    return (
      <circle
        r={radius}
        cx="50%"
        cy="50%"
        fill="transparent"
        stroke={strokePct !== circ ? color : ""}
        strokeWidth={strokeWidth}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
        strokeLinecap="round"
      ></circle>
    );
  };
  
  export default Circle;
