import { useState } from "react";
import PropTypes from "prop-types";
import { clss } from "@/utils/clss";

export function Svg({
  variant = "solid",
  draw = [],
  viewBox,
  width,
  height,
  strokeDark,
  stroke,
  fillDark,
  fill,
  fillHovered,
  className,
  children,
  hasChildren = false,
}) {
  const [hover, setHover] = useState(false);
  const darkMode = false;

  const handleHover = (hover) => fillHovered && setHover(hover);

  const strokeColor = darkMode ? strokeDark || stroke : stroke;
  const fillColor = darkMode ? fillDark || fill : fill;
  const fillHover = hover ? fillHovered : fillColor;
  const strokeHover = hover ? fillHovered : strokeColor;
  const xmlns = "http://www.w3.org/2000/svg";
  const view = variant === "custom" ? viewBox : "0 0 24 24";

  return (
    <svg
      xmlns={xmlns}
      fill={variant !== "outline" ? fillHover : "none"}
      viewBox={view}
      stroke={variant === "outline" ? strokeHover : undefined}
      strokeWidth={variant === "outline" ? 1.5 : undefined}
      width={width}
      height={height}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      aria-hidden="true"
      className={clss(className, "pointer-events-none transition-all duration-300 ease-linear")}
    >
      {hasChildren ? (
        children
      ) : (
        draw.map((d) => (
          <path
            key={d}
            d={d}
            strokeLinecap="round"
            strokeLinejoin="round"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        ))
      )}
    </svg>
  );
}

Svg.propTypes = {
  variant: PropTypes.oneOf(["outline", "solid", "custom"]),
  draw: PropTypes.array,
  viewBox: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  strokeDark: PropTypes.string,
  stroke: PropTypes.string,
  fillDark: PropTypes.string,
  fill: PropTypes.string,
  fillHovered: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  hasChildren: PropTypes.bool
}
