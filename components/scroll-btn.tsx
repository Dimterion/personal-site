"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function ScrollBtn() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleScroll() {
    setShowScrollBtn(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-3 right-3 z-10 flex size-6 items-center justify-center rounded-lg bg-muted font-bold text-foreground opacity-50 shadow-lg hover:opacity-100 ${
        showScrollBtn ? "block" : "hidden"
      }`}
      aria-label="Scroll to top"
      onClick={() => scrollToTop()}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollBtn;
