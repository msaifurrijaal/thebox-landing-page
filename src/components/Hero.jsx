const Hero = () => {
  return (
    <section id="home" className="pb-8 lg:pb-16">
      <div className="py-5 lg:py-40 bg-cover bg-center hero-image">
        <div className="container px-8 py-24 flex flex-wrap">
          <h1 className="w-full self-center font-bold text-4xl md:text-7xl lg:w-1/2">
            Building things is our mission.
          </h1>
        </div>
      </div>

      <div className="container pt-16 lg:pt-24">
        <div className="w-full">
          <div className="mx-auto text-center">
            <h4 className="text-xl md:text-4xl font-bold">Our Reputation</h4>
          </div>
        </div>
        <div className="w-full mt-12 lg:mt-16 px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-2">
            <div className="border-2 rounded-md border-slate-100 py-8 px-4">
              <img
                src="/images/headpone.png"
                alt=""
                width="w-full"
                className="max-h-10 max-w-10"
              />
              <h3 className="font-bold text-xl text-dark mb-1">
                Best Services
              </h3>
              <p className="font-normal text-base text-gray">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-2">
            <div className="border-2 rounded-md border-slate-100 py-8 px-4">
              <img
                src="/images/headpone.png"
                alt=""
                width="w-full"
                className="max-h-10 max-w-10"
              />
              <h3 className="font-bold text-xl text-dark mb-1">Best Teams</h3>
              <p className="font-normal text-base text-gray">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-2">
            <div className="border-2 rounded-md border-slate-100 py-8 px-4">
              <img
                src="/images/headpone.png"
                alt=""
                width="w-full"
                className="max-h-10 max-w-10"
              />
              <h3 className="font-bold text-xl text-dark mb-1">Best Designs</h3>
              <p className="font-normal text-base text-gray">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
