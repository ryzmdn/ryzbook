import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useMemo } from "react";

export function Time({
  date,
  children,
  locale = "en-US",
  options = { year: "numeric", month: "long", day: "numeric" },
  relative = false,
  tooltip = true,
  ...props
}) {
  const [formattedDate, setFormattedDate] = useState("");
  const [relativeTime, setRelativeTime] = useState("");

  const parsedDate = useMemo(() => {
    return typeof date === "string" ? new Date(date) : date;
  }, [date]);

  const formatRelativeTime = useCallback(
    (seconds) => {
      const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

      const units = [
        { unit: "year", value: 31536000 },
        { unit: "month", value: 2592000 },
        { unit: "day", value: 86400 },
        { unit: "hour", value: 3600 },
        { unit: "minute", value: 60 },
        { unit: "second", value: 1 },
      ];

      for (const { unit, value } of units) {
        if (Math.abs(seconds) >= value || unit === "second") {
          return rtf.format(
            Math.floor(seconds / value),
            unit
          );
        }
      }
      return "";
    },
    [locale]
  );

  useEffect(() => {
    setFormattedDate(
      new Intl.DateTimeFormat(locale, options).format(parsedDate)
    );

    if (relative) {
      const diffInSeconds = Math.floor(
        (new Date().getTime() - parsedDate.getTime()) / 1000
      );
      setRelativeTime(formatRelativeTime(diffInSeconds));
    }
  }, [parsedDate, formatRelativeTime, locale, options, relative]);

  return (
    <time
      dateTime={parsedDate.toISOString()}
      title={tooltip ? formattedDate : undefined}
      {...props}
    >
      {children || (relative ? relativeTime : formattedDate)}
    </time>
  );
}

Time.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  children: PropTypes.node,
  locale: PropTypes.string,
  options: PropTypes.object,
  relative: PropTypes.bool,
  tooltip: PropTypes.bool,
};
