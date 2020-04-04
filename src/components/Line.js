import React, { useState } from "react";

const Line = ({ title, symbol }) => {
  const [hoverLine, setHoverLine] = useState(false);
  return (
    <div
      className="line"
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      //React copy to clipboard
      onClick={() => navigator.clipboard.writeText(symbol)}
    >
      <span>
        {" "}
        {symbol} {title}
      </span>
      {hoverLine && <span className="copy-span">Cliquez pour copier</span>}
    </div>
  );
};

export default Line;
