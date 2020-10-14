import React from "react";

const Arrow=(props)=> {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.727"
      height="30.727"
      x="0"
      y="0"
      enableBackground="new 0 0 30.727 30.727"
      version="1.1"
      viewBox="0 0 30.727 30.727"
      xmlSpace="preserve"
    >
      <path fill={props.color ? props.color : 'currentcolor'} d="M29.994 10.183L15.363 24.812.733 10.184a2.5 2.5 0 113.536-3.536l11.095 11.093L26.461 6.647a2.5 2.5 0 113.533 3.536z"></path>
    </svg>
  );
}

export default Arrow;
