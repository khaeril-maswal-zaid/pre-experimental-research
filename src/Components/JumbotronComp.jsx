const JumbotronComp = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Data Collaction Pre Experimental
          </span>
          &nbsp;Research
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          eligendi saepe dolor excepturi harum molestias! Dolorum repudiandae
          officiis vero laboriosam neque maxime ex labore doloremque laudantium
          veniam, suscipit delectus quo.
        </p>

        <div className="flex flex-row justify-center space-y-0">
          <a
            href="/pre-experimental-research/"
            className="max-w- inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default JumbotronComp;
