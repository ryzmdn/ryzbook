import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { MessageService } from "@/lib/messages";

export function useMessages() {
  const [messages, setMessages] = useState([]);
  const [filterMessage, setFilterMessage] = useState("all-time");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      MessageService.getMessagesQuery(),
      (snapshot) => {
        const newMessages = snapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() })
        );
        setMessages(newMessages);
      }
    );

    return () => unsubscribe();
  }, []);

  const filterMessages = () => {
    const currentDate = new Date();

    return messages.filter((message) => {
      const timestampMessage = new Date(message.timestamp);

      const matchedMessage = () => {
        switch (filterMessage) {
          case "last-hour":
            return (
              currentDate.getTime() - timestampMessage.getTime() <=
              60 * 60 * 1000
            );
          case "last-day":
            return (
              currentDate.getTime() - timestampMessage.getTime() <=
              24 * 60 * 60 * 1000
            );
          case "last-7-days":
            return (
              currentDate.getTime() - timestampMessage.getTime() <=
              7 * 24 * 60 * 60 * 1000
            );
          case "last-30-days":
            return (
              currentDate.getTime() - timestampMessage.getTime() <=
              30 * 24 * 60 * 60 * 1000
            );
          case "all-time":
          default:
            return true;
        }
      };

      const matchesMessage = message.username
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesMessage && matchedMessage();
    });
  };

  return {
    messages: filterMessages(),
    filterMessage,
    setFilterMessage,
    searchQuery,
    setSearchQuery,
  };
};
