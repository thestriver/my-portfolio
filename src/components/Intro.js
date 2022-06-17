export const Intro = () => {
  return (
    <div>
      <section className="">
        <div className="container flex flex-col items-center px-4 pt-16 pb-4 mx-auto xl:flex-row">
          <div className="flex flex-col mt-6 xl:items-start xl:py-10">
            <h className="text-3xl font-medium tracking-tight text-white xl:text-5xl">
              Hi! <span>👋🏾</span> It's a pleasure to have you here.
            </h>

            <p className="block lg:max-w-6xl font-normal mt-5 text-3xl text-gray-200 tracking-wide">
              I'm Mahmud Adeleye - a{" "}
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                software developer
              </span>{" "}
              with a passion for creating awesome products that matter. 🚀
            </p>

            <div className="flex text-white space-x-5 text-xl pt-5">
              <a
                className="underline cursor-pointer"
                href="https://github.com/thestriver"
              >
                GitHub
              </a>
              <a
                className="underline cursor-pointer"
                href="http://adeleyemahmud.com/wp-content/uploads/2022/06/Frontend_Engineer_Resume_Mahmud-1.pdf"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
