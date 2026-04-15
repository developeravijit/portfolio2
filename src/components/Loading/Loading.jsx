import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loading = ({ onComplete }) => {
  const loaderRef = useRef();
  const textRef = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // 🚫 LOCK SCROLL
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const letters = textRef.current.children;

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        onComplete();
      },
    });

    // 🔥 STEP 1: letters come from bottom
    tl.fromTo(
      letters,
      { y: 700, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
      },
    );

    // 🔥 small pause
    tl.to({}, { duration: 0.4 });

    // 🔥 STEP 2: curtain goes up (TEXT WILL BE CUT)
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#05000A] to-[#1A002B]"
    >
      <h1
        ref={textRef}
        className="text-white/80 font-medium flex tracking-tight text-[60px] md:text-[80px]"
      >
        {"AVIJIT ROY".split("").map((char, i) => (
          <span
            key={i}
            className={`inline-block ${char === " " ? "mx-2" : ""}`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Loading;
