const Service = () => {
  return (
    <section id="services" className="pt-14 lg:pt-16">
      <div className="bg-slate-100 py-12 md:py-24">
        <div className="container">
          <div className="w-full">
            <div className="mx-auto text-center">
              <h4 className="text-xl md:text-4xl font-bold">Services</h4>
            </div>
          </div>
          <div className="w-full mt-12 px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center bg-white rounded py-12 px-4">
                <img
                  src="/images/services/construction.png"
                  alt="Construction image"
                  className="max-h-10 max-w-10 block"
                />
                <div className="h-0.5 w-16 mt-4 mb-2 bg-light-gray"></div>
                <h3 className="font-bold text-xl text-primary mb-1">
                  Construction
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center bg-primary rounded py-12 px-4">
                <img
                  src="/images/services/renovation.png"
                  alt="Renovation image"
                  className="max-h-10 max-w-10 block"
                />
                <div className="h-0.5 w-16 mt-4 mb-2 bg-light-gray"></div>
                <h3 className="font-bold text-xl text-white mb-1">
                  Renovation
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center bg-white rounded py-12 px-4">
                <img
                  src="/images/services/consultation.png"
                  alt="Consultation image"
                  className="max-h-10 max-w-10 block"
                />
                <div className="h-0.5 w-16 mt-4 mb-2 bg-light-gray"></div>
                <h3 className="font-bold text-xl text-primary mb-1">
                  Consultation
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center bg-primary rounded py-12 px-4">
                <img
                  src="/images/services/repair.png"
                  alt="Repair image"
                  className="max-h-10 max-w-10 block"
                />
                <div className="h-0.5 w-16 mt-4 mb-2 bg-light-gray"></div>
                <h3 className="font-bold text-xl text-white mb-1">
                  Repair Services
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center bg-white rounded py-12 px-4">
                <img
                  src="/images/services/architecture.png"
                  alt="Architecture image"
                  className="max-h-10 max-w-10 block"
                />
                <div className="h-0.5 w-16 mt-4 mb-2 bg-light-gray"></div>
                <h3 className="font-bold text-xl text-primary mb-1">
                  Architecture
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
              <div className="flex flex-col items-center bg-primary rounded py-12 px-4">
                <img
                  src="/images/services/electric.png"
                  alt="Electric image"
                  className="max-h-10 max-w-10 block"
                />
                <div className="h-0.5 w-16 mt-4 mb-2 bg-light-gray"></div>
                <h3 className="font-bold text-xl text-white mb-1">Electric</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center w-full consul-bg"
      >
        <div className="p-24 px-4 flex flex-wrap justify-between items-center xl:w-10/12 xl:mx-auto">
          <div className="w-full mb-6 text-center sm:text-start sm:w-2/3 sm:mb-0">
            <h1 className="text-xl md:text-4xl font-semibold text-white">
              Free consultation with exceptional quality
            </h1>
            <p className="text-white mt-3">
              Just one call away:{" "}
              <a href="" className="underline">
                +84 1102 2703
              </a>
            </p>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
            <a
              href="#"
              className="inline-block rounded py-2 px-4 text-sm text-center text-white border-2 border-white hover:opacity-80"
            >
              Get your consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
