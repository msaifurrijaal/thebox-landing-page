const Contact = () => {
  return (
    <section id="contact">
      <div className="w-full flex flex-wrap">
        <div className="w-full sm:w-1/2 design-bg bg-cover" />
        <div className="w-full sm:w-1/2 px-5 py-12 md:px-16 bg-slate-100  ">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Our recommendations, your decision
          </h1>
          <p className="mt-5">
            We invite you to explore our services and contact us to discuss your
            needs and ideas. We start with a detailed understanding of your
            needs, preferences and budget. We will work to create a design plan
            that reflects your unique style.
          </p>
          <p className="mt-5">• Initial Consultation</p>
          <p>• Detailed Assessment</p>
          <p>• Collaborative Ideation</p>
          <p>• Innovative Solutions</p>
          <p>• Quality Craftsmanship</p>
          <p>• Timely Execution</p>
          <p>• Budget-Friendly Options</p>
          <p>• Post-Project Support</p>
        </div>
      </div>
      <div className="container py-12 md:py-28">
        <div className="mx-auto w-10/12 md:w-4/12">
          <h4 className="text-xl md:text-4xl font-bold text-center">
            What can us do for you?
          </h4>
          <p className="text-center mt-2">
            We are ready to work on a project of any complexity, whether it's
            commercial or residential.
          </p>
        </div>
        <div className="mx-auto w-11/12 mt-6">
          <form>
            <div className="w-full lg:mx-auto lg:w-2/3">
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md bg-slate-200 p-3 text-dark mt-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md bg-slate-200 p-3 text-dark mt-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary"
                >
                  Pesan
                </label>
                <textarea
                  type="email"
                  id="email"
                  className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark mt-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button className="w-full rounded bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
