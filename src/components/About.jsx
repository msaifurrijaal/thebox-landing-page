const About = () => {
  return (
    <section id="about" className="py-8 lg:py-12">
      <div className="container">
        <div className="flex flex-wrap items-center sm:relative">
          <div className="w-full px-8 mb-2 md:w-2/3 lg:w-3/4 lg:scale-y-[0.9]">
            <img src="/images/about.png" alt="About Image" />
          </div>
          <div className="w-full px-8 mb-2 md:absolute md:w-2/3 md:end-0 lg:absolute lg:end-0 lg:ps-0 lg:w-2/5 xl:w-2/6">
            <div className="w-full bg-primary p-6">
              <h4 className="font-bold text-white text-xl md:text-4xl">About Us</h4>
              <p className="mt-8 md:text-lg text-white">
                For more than 30 years we have been delivering world-className
                construction and we`&apos;`ve built many lasting relationships along
                the way.
              </p>
              <p className="mt-6 md:text-lg text-white">
                We`&apos;`ve matured into an industry leader and trusted resource for
                those seeking quality, innovation and reliability when building
                in the U.S.
              </p>
              <a
                href="#"
                className="inline-block rounded bg-white py-2 px-4 mt-8 text-sm font-medium text-primary hover:opacity-80"
              >
                More on Our History
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
