const Contact = () => {
  return (
    <section id="contact">
      <div className="container pb-12 md:pb-36">
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
