import { clss } from "@/utils/clss";
import PropTypes from "prop-types";

function Label({ htmlFor, className, text }) {
  return (
    <label htmlFor={htmlFor} className={clss(className, "text-shadow-1")}>
      {text}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
}

function Field({
  id,
  name,
  className,
  type = "text",
  variant = "input",
  value,
  onChange,
  maxLength,
  placeholder = "",
  readonly,
  required = false
}) {
  if (variant === "textarea") {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-describedby={id}
        className={clss(className, "block w-full rounded-md bg-white px-3 py-1.5 text-sm/6 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600")}
        autoComplete="off"
        spellCheck={false}
        maxLength={maxLength}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      aria-describedby={id}
      className={clss(className, "block w-full rounded-md bg-white px-3 py-1.5 text-sm/6 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600")}
      autoComplete="off"
      spellCheck={false}
      maxLength={maxLength}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
    />
  );
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["text", "search"]),
  variant: PropTypes.oneOf(["input", "textarea"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool
}

export { Label, Field };
