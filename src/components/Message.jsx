import PropTypes from "prop-types";
import { Time } from "@/components/Optimizing/Time";
import { formatDate } from "@/utils/helpers";

export function Message({
  text,
  username,
  timestamp,
}) {
  const getInitials = (name) => {
    const names = name.split(' ');
    const initials = names.map(char => char.charAt(0).toUpperCase()).slice(0, 2).join('');
    return initials;
  }

  return (
    <li className="pt-8 sm:inline-block sm:w-full sm:px-4">
      <figure className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 shadow-lg ring-1 -ring-offset-1 ring-gray-200 dark:ring-gray-800">
        <blockquote className="text-gray-700 dark:text-gray-300">
          <p>{`“${text}”`}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
          <div className="relative shrink-0 flex justify-center items-center size-10 text-gray-50 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full">
            <span>{getInitials(username)}</span>
          </div>
          <div className="w-full">
            <p className="text-sm font-semibold text-pink-600 dark:text-pink-400">
              {username}
            </p>
            <Time date={new Date(timestamp).toISOString().slice(0, 19)} className="text-xs text-gray-700 dark:text-gray-300">{formatDate(timestamp)}</Time>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
}
