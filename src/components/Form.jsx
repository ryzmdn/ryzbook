import { useEffect, useState } from "react";
import { Button } from "@/components/Button/Button";
import { Field, Label } from "@/components/Field";
import { Svg } from "@/components/Optimizing/Svg";
import { MessageService } from "@/lib/messages";
import { generateAnonymousUsername, generateDeviceId } from "@/utils/helpers";
import { clss } from "@/utils/clss";
import PropTypes from "prop-types";

const rules = [
  "You can send the message again if it's been 1 hour since you sent the message.",
  "Messages cannot be edited and deleted.",
  "Your message can be seen by anyone who visits this website.",
  "Username is optional. If you decide not to use a name, the web automatically uses the default name to display in the message.",
  "The total number of characters to send messages is a maximum of 500 only.",
  "All orders here are a maximum of 100. If it is more than that, the old message will be automatically deleted.",
  "Each message only lasts a maximum of 1 year, if it is more than that, the message is automatically deleted."
];

export function Form({
  open,
  close,
}) {
  const [username, setUsername] = useState("");
  const [messageText, setMessageText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [canSendMessage, setCanSendMessage] = useState(true);

  const MAX_TEXTAREA = 500;
  const LOCAL_STORAGE_KEY = "lastMessageSentTime";
  const COOLDOWN_TIME = 3600000;

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  useEffect(() => {
    const lastSentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (lastSentTime) {
      const elapsedTime = Date.now() - parseInt(lastSentTime, 10);
      if (elapsedTime < COOLDOWN_TIME) {
        setCanSendMessage(false);
        setTimeout(() => setCanSendMessage(true), COOLDOWN_TIME - elapsedTime);
      }
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!messageText.trim() || isLoading || !canSendMessage) return;

    setIsLoading(true);
    const deviceId = generateDeviceId();

    try {
      const newMessage = {
        username: username.trim() || generateAnonymousUsername(),
        text: messageText.trim(),
        timestamp: Date.now(),
        deviceId,
      };

      await MessageService.addMessage(newMessage);

      setMessageText("");
      setUsername("");
      setCanSendMessage(false);

      localStorage.setItem(LOCAL_STORAGE_KEY, Date.now().toString());

      setTimeout(() => setCanSendMessage(true), COOLDOWN_TIME);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextarea = (
    event
  ) => {
    const value = event.target.value;
    if (value.length <= MAX_TEXTAREA) {
      setMessageText(value);
    }
  };

  const handleSubmitButton = () => {
    if (canSendMessage) {
      return (
        <>
          <Svg width={16} height={16} fill="#f9fafb" draw={["M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"]} className="-rotate-45 -translate-y-0.5" />
          Send message
        </>
      );
    } else {
      return (
        <>
          <Svg width={16} height={16} fill="#6b7280" draw={["M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"]} className="-rotate-45" />
          Please wait 1 hour
        </>
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 sm:px-6">
        <header
          aria-labelledby="sidebar-header"
          className="flex items-center justify-between"
        >
          <h3
            id="sidebar-header"
            className="text-base text-gray-900 dark:text-gray-100 font-semibold"
          >
            New Message
          </h3>
          <div className="ml-3 flex h-7 items-center">
            <Button
              onClick={close}
              defaultStyle={false}
              shadow={false}
              variant="text"
              aria-label="Close sidebar button"
            >
              <Svg width={20} height={20} fill="#4b5563" draw={["M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"]} />
            </Button>
          </div>
        </header>
        <div className="mt-1">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Send any message here anonymously or under your name.
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between divide-y divide-gray-200 dark:divide-gray-800 px-4 sm:px-6">
        <div className="space-y-6 pb-5 pt-6">
          <div>
            <div className="flex justify-between">
              <Label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-800 dark:text-gray-200"
                text="Username"
              />
              <span id="username-optional" className="text-xs/6 text-gray-500">
                Optional
              </span>
            </div>
            <div className="mt-2">
              <Field
                id="username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                maxLength={125}
                placeholder={isLoading || !canSendMessage ? "Please wait in 1 hour" : "Your name (optional)"}
                readonly={isLoading || !canSendMessage}
                className={clss(
                  isLoading || !canSendMessage
                    ? "cursor-not-allowed"
                    : "focus:outline-pink-600",
                  "rounded-md font-medium"
                )}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <Label
                htmlFor="message"
                className="block text-sm/6 font-medium text-gray-800 dark:text-gray-200 after:ml-0.5 after:text-pink-500 after:content-['*']"
                text="Message"
              />
              <span
                id="username-optional"
                className={clss(
                  messageText.length === MAX_TEXTAREA
                    ? "text-pink-500"
                    : "text-gray-500",
                  "text-xs/6"
                )}
              >
                {messageText.length} / {MAX_TEXTAREA} Characters
              </span>
            </div>
            <div className="mt-2">
              <Field
                variant="textarea"
                id="message"
                name="message"
                value={messageText}
                onChange={handleTextarea}
                className={clss(
                  isLoading || !canSendMessage
                    ? "cursor-not-allowed focus:ring-gray-400"
                    : "focus:outline-pink-600",
                  "field-sizing-content resize-none rounded-md"
                )}
                maxLength={MAX_TEXTAREA}
                placeholder={isLoading || !canSendMessage ? "Please wait in 1 hour" : "What message do you want to send? jokes, motivations, quotes, criticism, advice or anything else?"}
                readonly={isLoading || !canSendMessage}
                required
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-2">
          <h3 className="text-sm/6 font-medium text-gray-900 dark:text-gray-100">Rules for sending messages</h3>

          <ol className="box-shadow-2 custom-scrollbar text-sm mt-2 p-4 max-h-52 overflow-y-auto list-decimal marker:text-gray-600 dark:marker:text-gray-400 text-shadow-3 space-y-4 pl-8 rounded-l-lg">
            {rules.map(rule => (
              <li key={rule} className="text-gray-600 dark:text-gray-400">{rule}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="fixed left-0 bottom-0 flex justify-end items-center gap-x-4 w-full p-4 bg-transparent border-t border-gray-300 dark:border-gray-700">
        <Button
          type="button"
          onClick={close}
          variant="secondary"
          aria-label="Cancel create message"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          aria-label="Submit your message"
          disabled={isLoading || !canSendMessage}
        >
          {isLoading ? "Sending..." : handleSubmitButton()}
        </Button>
      </div>
    </form>
  );
}

Form.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
}
