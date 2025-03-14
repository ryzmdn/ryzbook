import PropTypes from "prop-types";
import { Link } from "react-router";
import { clss } from "@/utils/clss";

const variantStyles = {
  primary: "bg-pink-600 text-gray-50 hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:text-gray-500 disabled:bg-gray-400 dark:disabled:bg-gray-800",
  secondary: "text-gray-950 dark:text-gray-50 bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-700",
  soft: "bg-gray-50/10 hover:bg-gray-50/20 text-gray-950 dark:text-gray-50",
  text: "bg-transparent text-gray-950 dark:text-gray-50",
};

export function Button({
  variant = "primary",
  defaultStyle = true,
  shadow = true,
  type = "button",
  rounded = false,
  children,
  className,
  ...props
}) {
  const combinedClassName = clss(
    defaultStyle ? "text-sm font-semibold py-2 px-3" : "",
    variantStyles[variant],
    className,
    shadow ? "shadow-sm" : "shadow-none",
    rounded ? "rounded-full" : "rounded-md",
    "inline-flex justify-center items-center gap-x-2 cursor-pointer"
  );

  if ("to" in props) {
    return (
      <Link
        className={combinedClassName}
        {...(props)}
      >
        {children}
      </Link>
    );
  }

  if ("href" in props && typeof props.href === "string") {
    const isExternalLink =
      props.href.startsWith("http://") || props.href.startsWith("https://");
    return (
      <a
        className={combinedClassName}
        {...(props)}
        {...(isExternalLink
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      {...(props)}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "text"]),
  defaultStyle: PropTypes.bool,
  shadow: PropTypes.bool,
  rounded: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
};
