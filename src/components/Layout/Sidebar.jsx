import { useEffect } from "react";
import PropTypes from "prop-types";
import { Form } from "@/components/Form";
import { clss } from "@/utils/clss";

export function Sidebar({ open, close }) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className="fixed top-0 left-0 size-full z-45 bg-gray-900/90" />

      <aside aria-labelledby="message-sidebar" className="pointer-events-none fixed top-0 left-0 z-50 flex flex-1 max-w-full h-full bg-zinc-200">
        <span id="message-sidebar" className="sr-only">Sidebar for message form</span>
        <div
          className={clss(
            open ? "translate-x-0" : "translate-x-full",
            "pointer-events-auto w-screen transition-transform ease-in-out duration-500 sm:max-w-md sm:duration-700"
          )}
        >
          <Form open={open} close={close} />
        </div>
      </aside>
    </>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};
