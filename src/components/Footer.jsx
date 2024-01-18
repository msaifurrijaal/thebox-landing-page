const Footer = () => {
  return (
    <footer className="bg-primary pt-14">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h2 className="mb-5 text-4xl font-bold text-white">TheBox</h2>
            <h3 className="mb-2 text-2xl font-bold">Contact Us</h3>
            <p>thebox@gmail.com</p>
            <p>New York</p>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-white">
              Service Category
            </h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Construction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Renovation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Repair Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Electric
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-white">Link</h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="mb-3 inline-block text-base hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
