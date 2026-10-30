import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", type: "route" },
    { name: "Hearing Aid", href: "/hearingAidTrial", type: "route" },
    { name: "Blog", href: "/blog", type: "route" },
    { name: "Services", href: "#services", type: "hash" },
    { name: "About", href: "#about", type: "hash" },
    { name: "Testimonials", href: "#testimonials", type: "hash" },
    { name: "Contact", href: "#contact", type: "hash" },
  ];

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");

    if (location.pathname === "/") {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${href}`);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-white bg-opacity-90 backdrop-blur-sm shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center space-x-2"
          >
            <img
              src="/images/Logo.png-removebg.png"
              className="w-20 h-20 object-contain"
              alt="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.href === "/" ? handleHomeClick : () => setMobileMenuOpen(false)}
                  className="text-clinic-accent hover:text-clinic-primary font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className="text-clinic-accent hover:text-clinic-primary font-medium transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <a
              href="#appointment"
              onClick={(e) => handleHashClick(e, "#appointment")}
              className="button-primary cursor-pointer"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-clinic-accent hover:text-clinic-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 overflow-hidden glass",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navItems.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-clinic-accent hover:text-clinic-primary font-medium"
                onClick={item.href === "/" ? handleHomeClick : () => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-clinic-accent hover:text-clinic-primary font-medium cursor-pointer"
                onClick={(e) => handleHashClick(e, item.href)}
              >
                {item.name}
              </a>
            )
          )}

          <a
            href="#appointment"
            className="block w-full text-center button-primary mt-4 cursor-pointer"
            onClick={(e) => handleHashClick(e, "#appointment")}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
