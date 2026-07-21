"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveals() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.globalTimeline.timeScale(50);
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
