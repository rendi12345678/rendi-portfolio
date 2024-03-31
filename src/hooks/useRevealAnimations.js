import { useEffect } from "react";

function useRevealAnimations() {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 120;

      if (revealTop > windowHeight - revealPoint)
        return reveal.classList.remove("show-animation");

      return reveal.classList.add("show-animation");
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);
}

export default useRevealAnimations;
