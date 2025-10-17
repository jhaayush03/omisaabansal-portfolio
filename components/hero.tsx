"use client";

import { Navigation } from "@/components/navigation";
import { ChevronDown, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Photo Collage Background */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
        <div className="relative overflow-hidden">
          <img
            src="/banner1st.jpg"
            alt="Conference presentation"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i15.jpg"
            alt="Business school"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i1.jpg"
            alt="Financial summit"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i2.jpg"
            alt="Professional photo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i3.jpg"
            alt="Business meeting"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i4.jpg"
            alt="Research"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i5.jpg"
            alt="Business forum"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i6.jpg"
            alt="Award ceremony"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i11.jpg"
            alt="Teaching"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i12.jpg"
            alt="Consultation"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i9.jpg"
            alt="Policy discussion"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/i10.jpg"
            alt="Networking"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <h1 className="text-balance text-center font-sans text-6xl font-bold text-white md:text-7xl lg:text-8xl">
          OMISAA BANSAL
        </h1>

        {/* Contact Info */}
        <div className="absolute bottom-12 left-8 flex flex-col gap-2 text-white">
          <a
            onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=omisaabansal2009@gmail.com",
              "_blank"
            )}
            className="text-sm hover:underline"
          >
            omisaabansal2009@gmail.com
          </a>
          {/*<a href="tel:+15551234567" className="text-sm hover:underline">
            {"T: +1 (555) 123-4567"}
          </a> */}
          <a
            href="https://www.linkedin.com/in/omisaa-bansal/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-12 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </button>
      </div>
    </section>
  );
}
