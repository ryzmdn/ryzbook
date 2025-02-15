import PropTypes from "prop-types";
import { Link } from "react-router";
import { clss } from "@/utils/clss";

const variantStyles = {
  primary: "bg-zinc-200 text-gray-700 text-shadow-1 disabled:bg-zinc-200 disabled:text-gray-400",
  secondary: "text-gray-700 bg-zinc-200 text-shadow-1",
  text: "bg-transparent text-gray-800 text-shadow-1",
};

export function Button({
  variant = "primary",
  defaultStyle = true,
  circle = false,
  children,
  className,
  shadow = true,
  disabled,
  type = "button",
  href,
  onClick,
  ...props
}) {
  const buttonShadow = circle ? "box-shadow-3" : "box-shadow-1";

  const combinedClassName = clss(
    variantStyles[variant],
    defaultStyle ? "text-sm font-semibold py-2 px-3" : "",
    className,
    variant === "text" ? "shadow-none" : "",
    shadow ? buttonShadow : "shadow-none",
    circle ? "rounded-full" : "rounded-md",
    disabled ? "cursor-not-allowed hover:bg-zinc-200" : "cursor-pointer",
    "inline-flex justify-center items-center gap-x-2 transition-all duration-300 ease-linear"
  );

  if (href) {
    const isExternalLink = href.startsWith("http://") || href.startsWith("https://");
    
    return isExternalLink ? (
      <a
        className={combinedClassName}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ) : (
      <Link className={combinedClassName} to={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "text"]),
  defaultStyle: PropTypes.bool,
  shadow: PropTypes.bool,
  circle: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
};
