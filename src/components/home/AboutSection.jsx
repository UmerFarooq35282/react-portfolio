function AboutSection() {
  return (
    <>
      <section
        id="about"
        class="py-20 bg-white h-screen flex items-center justify-center"
      >
        <div class="container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-10">
          <div class="lg:w-1/2 hidden lg:block">
            <div class="w-72 h-72 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-indigo-100">
              <img
                src="assets/images/aboutImage.png"
                alt="Umer Farooq"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <div class="lg:w-1/2">
            <h2 class="text-4xl font-bold text-indigo-700 mb-4">About Me</h2>
            <p class="text-gray-700 text-lg mb-6">
              I'm <span class="font-semibold">Umer Farooq</span>, a passionate
              and dedicated Full Stack Developer based in Pakistan. I specialize
              in creating full-featured, scalable web applications and elegant
              user experiences.
            </p>
            <p class="text-gray-600 mb-6">
              With <strong>2 years of experience in frontend</strong> and
              <strong>1 year in backend development</strong>, I’ve worked with
              modern technologies including React, Node.js, Express, and
              Flutter. I aim to build fast, accessible, and user-friendly
              applications that solve real-world problems.
            </p>

            <div class="flex gap-4 mt-6">
              <a
                href="assets/pdfs/Resume.pdf"
                download
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                class="border border-indigo-600 text-indigo-600 hover:bg-indigo-100 px-6 py-2 rounded-full transition"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
