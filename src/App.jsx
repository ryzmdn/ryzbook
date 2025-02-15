import { useState } from "react";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { ScrollButton } from "@/components/Button/ScrollButton";
import { FilterBar } from "@/components/Filters";
import { NotFound } from "@/components/NotFound";
import { Message } from "@/components/Message";
import { useMessages } from "@/hooks/useMessage";

export default function App() {
  const [openForm, setOpenForm] = useState(false);

  const {
    messages,
    filterMessage,
    setFilterMessage,
    searchQuery,
    setSearchQuery,
  } = useMessages();

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  return (
    <div className="relative isolate text-gray-600 h-full bg-inherit pt-10 sm:pt-5">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <section className="overflow-hidden rounded-lg space-y-6 my-3 p-3 box-shadow-1 sm:px-6">
          <FilterBar
            filterMessage={filterMessage}
            setFilterMessage={setFilterMessage}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            open={handleOpenForm}
          />
        </section>

        <section className="w-full mt-10 mb-20">
          {messages.length > 0 ? (
            <ul className="sm:-mx-4 sm:columns-2 lg:columns-3">
              {messages.map((message) => (
                <Message
                  key={message.id}
                  text={message.text}
                  username={message.username}
                  timestamp={message.timestamp}
                />
              ))}
            </ul>
          ) : (
            <NotFound />
          )}
        </section>
      </div>

      <Sidebar open={openForm} close={() => setOpenForm(false)} />
      <ScrollButton />

      <Footer />
    </div>
  );
}
