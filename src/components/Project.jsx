const Project = () => {
  return (
    <section id="projects">
      <div className="container py-12 md:py-24">
        <div className="w-full">
          <div className="mx-auto text-center">
            <h4 className="text-xl md:text-4xl font-bold">Projects</h4>
          </div>
        </div>
        <div className="w-full mt-12 px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
            <div className="bg-primary">
              <img
                src="/images/projects/wildstone.jpg"
                alt="Wildstone project"
                className="w-full"
              />
              <div className="px-4 py-2">
                <h3 className="font-semibold text-lg text-white mb-1">
                  Wildstone Infra Hotel
                </h3>
                <p className="mt-2 text-white">
                  2715 Ash Dr. San Jose, South Dakota
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
            <div className="bg-primary">
              <img
                src="/images/projects/parkinston.png"
                alt="Parkinston project"
                className="w-full"
              />
              <div className="px-4 py-2">
                <h3 className="font-semibold text-lg text-white mb-1">
                  Mr. Parkinston's House
                </h3>
                <p className="mt-2 text-white">
                  3517 W. Gray St. Utica, Pennsylvania
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-6 mb-4 sm:mb-10 cursor-pointer hover:scale-105 transition duration-300">
            <div className="bg-primary">
              <img
                src="/images/projects/horizon.jpg"
                alt="Infinity Horizon Villas projetc"
                className="w-full"
              />
              <div className="px-4 py-2">
                <h3 className="font-semibold text-lg text-white mb-1">
                  Infinity Horizon Villas
                </h3>
                <p className="mt-2 text-white">
                  2972 Westheimer Rd. Ana, Illinois
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
