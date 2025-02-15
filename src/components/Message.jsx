import PropTypes from "prop-types";
import { Time } from "@/components/Optimizing/Time";
import BlankPicture from "@/assets/blank.jpeg";
import { formatDate } from "@/utils/helpers";

Message.propTypes = {
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
}

export function Message({
  text,
  username,
  timestamp,
}) {
  return (
    <li className="pt-8 sm:inline-block sm:w-full sm:px-4">
      <figure className="rounded-2xl bg-zinc-200 p-6 box-shadow-1">
        <blockquote className="text-gray-700 text-shadow-2">
          <p>{`“${text}”`}</p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-x-4">
          <div className="relative flex justify-between items-center rounded-full">
            <img
              src={BlankPicture}
              alt={`${username}'s message blank profile`}
              width={44}
              height={44}
              className="pointer-events-none shrink-0 rounded-full object-cover box-shadow-3"
            />
          </div>
          <div className="w-full">
            <p className="text-sm font-semibold text-gray-900 text-shadow-2">
              {username}
            </p>
            <Time date={new Date(timestamp).toISOString().slice(0, 19)} className="text-xs text-gray-700 text-shadow-2">{formatDate(timestamp)}</Time>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
