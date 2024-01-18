import { useRef, useEffect } from "react";

const Navbar = () => {
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const fixNav = header.offsetTop;

      if (window.pageYOffset > fixNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    const handleToggle = (e) => {
      const hamburger = hamburgerRef.current;
      const navMenu = navMenuRef.current;

      if (
        e.target === navMenu ||
        e.target === hamburger ||
        navMenu.contains(e.target) ||
        hamburger.contains(e.target)
      ) {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
      } else {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleToggle);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleToggle);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-white top-0 left-0 w-full flex items-center z-10"
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="flex items-center py-2">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="mr-2 max-h-11"
              />
              <p className="font-bold text-lg text-primary">
                <span className="italic">The</span>Box
              </p>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              ref={hamburgerRef}
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              ref={navMenuRef}
              className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="font-normal text-base text-dark py-2 mx-8 flex group-hover:text-secondary"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="font-normal text-base text-dark py-2 mx-8 flex group-hover:text-secondary"
                  >
                    About Us
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#services"
                    className="font-normal text-base text-dark py-2 mx-8 flex group-hover:text-secondary"
                  >
                    Services
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#projects"
                    className="font-normal text-base text-dark py-2 mx-8 flex group-hover:text-secondary"
                  >
                    Projects
                  </a>
                </li>

                <li className="group">
                  <a
                    href="#contact"
                    className="font-normal text-base text-dark py-2 mx-8 flex group-hover:text-secondary"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
