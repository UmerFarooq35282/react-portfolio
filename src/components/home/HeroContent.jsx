function HeroContent() {
  return (
    <>
      <section class="min-h-screen flex items-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <div class="container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl lg:text-5xl font-bold text-indigo-700 leading-tight mb-4">
              Hi, I Am Umer Farooq
              <br />
              <span class="text-gray-900">Full Stack Developer</span>
            </h1>
            <p class="text-lg text-gray-600 mb-6">
              I'm passionate about building scalable web applications, writing
              clean code, and continuously learning new technologies. With
              experience in both frontend and backend, I create full-featured
              applications from scratch.
            </p>
            <div class="flex space-x-4">
              <a
                href="assets/images/mainImage.png"
                target="_blank"
                class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
              >
                View CV
              </a>
              <a
                href="#contact"
                class="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div class="flex justify-center">
            <div class="w-72 h-72 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src="assets/images/mainImage.png"
                alt="Umer Farooq"
                class="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroContent;
