"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navSections = [
  {
    title: "Leadership",
    items: [
      "SwayamSutra",
      "Expressions Theatre Club",
      "Social Service and Interact",
      "Business Studies Society",
      "TaxCity",
    ],
  },
  {
    title: "Awards",
    items: ["Academics", "Extra Curricular"],
  },
  {
    title: "Publication",
    items: ["Research Paper", "Poetry Book"],
  },
  {
    title: "Programs",
    items: [
      "YLAC",
      "UnHackathon",
      "Regional Science Exhibition",
      "Harvard Youth Lead Change",
      "Ashoka Young Scholars Programme",
      "Young CEO Program",
      "Tie Young Entrepreneurs",
      "Wharton Global High School Investment Competition",
      "Online Courses",
      "Virtual Internships",
    ],
  },
  {
    title: "Community",
    items: [],
  },
];

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    window.open("/OMISAA_BANSAL_CV.pdf", "_blank");
  };

  const formatLink = (section: string, item?: string) => {
    // generate clean slugs like /leadership/swayamsutra
    if (item) {
      return `/${section.toLowerCase().replace(/\s+/g, "-")}/${item
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
    }
    return `/${section.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 px-4 py-4 sm:px-8 sm:py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-white">
          Omisaa Bansal
        </a>

        <div className="flex items-center gap-8">
          {navSections.map((section) => (
            <div key={section.title} className="relative group">
              {section.items.length > 0 ? (
                <>
                  <button className="text-sm font-medium text-white hover:text-white/80 flex items-center gap-2 transition-colors">
                    {section.title}
                    <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute left-0 mt-0 w-52 bg-black/95 border border-white/20 backdrop-blur-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {section.items.map((item) => (
                      <a
                        key={item}
                        href={formatLink(section.title, item)}
                        className="block px-4 py-3 text-sm text-white hover:bg-white/10 first:rounded-t-md last:rounded-b-md transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={formatLink(section.title)}
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                >
                  {section.title}
                </a>
              )}
            </div>
          ))}

          <button
            onClick={handleResumeClick}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            Resume
          </button>

       <Button
          variant="secondary"
          className="bg-white text-black hover:bg-white/90"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=omisaabansal2009@gmail.com",
              "_blank"
            )
          }
        >
          Contact Me
        </Button>

        <Button
          variant="secondary"
          className="bg-white text-black hover:bg-white/90"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/omisaa-bansal/",
              "_blank"
            )
          }
        >
          LinkedIn
        </Button>


        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center justify-between">
        <a href="/" className="text-lg font-semibold text-white">
          Omisaa Bansal
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="flex flex-col p-4 space-y-1">
            <button
              onClick={handleResumeClick}
              className="px-4 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-md text-left"
            >
              Resume
            </button>

            {navSections.map((section) => (
              <div key={section.title} className="space-y-1">
                {section.items.length > 0 ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMenu(
                          openMenu === section.title ? null : section.title
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-md"
                    >
                      {section.title}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMenu === section.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openMenu === section.title && (
                      <div className="pl-4 space-y-1">
                        {section.items.map((item) => (
                          <a
                            key={item}
                            href={formatLink(section.title, item)}
                            className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 rounded-md"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={formatLink(section.title)}
                    className="block px-4 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-md"
                  >
                    {section.title}
                  </a>
                )}
              </div>
            ))}

            <Button
              asChild
              variant="secondary"
              className="bg-white text-black hover:bg-white/90 mt-4"
            >
              <a href="mailto:omisaabansal2009@gmail.com">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
