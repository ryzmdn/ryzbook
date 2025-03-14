import { useEffect, useState } from "react";
import { Button } from "@/components/Button/Button";
import { Svg } from "@/components/Optimizing/Svg";

export function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <Button
        onClick={scrollToTop}
        variant="secondary"
        rounded={true}
        aria-label="Button to scroll to the top"
        className="fixed right-7 bottom-7 z-40 size-9 backdrop-blur cursor-pointer"
      >
        <Svg
          variant="outline"
          stroke="#374151"
          strokeDark="#d1d5db"
          width={30}
          height={30}
          draw={["M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"]}
        />
      </Button>
    )
  );
}
