import * as React from "react";

function SvgNpm(props) {
  return (
    <svg width={128} height={128} viewBox="0 0 96 96" {...props}>
      <path d="M0 30h96v34H48v6H26v-6H0zm0 0" fill="#9b59b6" />
      <path
        d="M6 58h10V42h6v16h4V36H6zm26-22v28h10v-6h10V36zm16 16h-6V42h6zm10-16v22h10V42h6v16h6V42h6v16h4V36zm0 0"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgNpm;
