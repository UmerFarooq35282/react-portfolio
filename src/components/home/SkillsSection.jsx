function SkillsSection() {
  return (
    <>
      <section
        id="skills"
        class="py-20 bg-white flex items-center justify-center"
      >
        <div class="container mx-auto px-6 lg:px-24">
          <h2 class="text-4xl font-bold text-indigo-700 mb-10 text-center">
            My Skills
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-3">
                  <i data-lucide="code" class="w-6 h-6 text-indigo-600"></i>
                  <h3 class="text-xl font-semibold text-gray-800">
                    HTML / CSS
                  </h3>
                </div>
                <span class="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                  70%
                </span>
              </div>
              <p class="text-gray-600 text-sm mb-4">
                Core structure and design of all websites. Clean layout,
                responsiveness, and styling expertise.
              </p>
              <div class="bg-gray-200 h-2 rounded-full">
                <div
                  class="bg-indigo-600 h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-3">
                  <i
                    data-lucide="file-code"
                    class="w-6 h-6 text-yellow-500"
                  ></i>
                  <h3 class="text-xl font-semibold text-gray-800">
                    JavaScript
                  </h3>
                </div>
                <span class="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  50%
                </span>
              </div>
              <p class="text-gray-600 text-sm mb-4">
                Adds interactivity to web pages. I'm comfortable with logic,
                loops, and DOM manipulation.
              </p>
              <div class="bg-gray-200 h-2 rounded-full">
                <div
                  class="bg-yellow-500 h-2 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-3">
                  <i data-lucide="server" class="w-6 h-6 text-green-600"></i>
                  <h3 class="text-xl font-semibold text-gray-800">Node.js</h3>
                </div>
                <span class="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  40%
                </span>
              </div>
              <p class="text-gray-600 text-sm mb-4">
                Server-side JavaScript. I use it to create REST APIs and backend
                logic for web apps.
              </p>
              <div class="bg-gray-200 h-2 rounded-full">
                <div
                  class="bg-green-600 h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-3">
                  <i data-lucide="layout" class="w-6 h-6 text-blue-500"></i>
                  <h3 class="text-xl font-semibold text-gray-800">React</h3>
                </div>
                <span class="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Beginner
                </span>
              </div>
              <p class="text-gray-600 text-sm mb-4">
                Component-based frontend framework. I'm currently learning how
                to build dynamic UIs using React.
              </p>
              <div class="bg-gray-200 h-2 rounded-full">
                <div
                  class="bg-blue-500 h-2 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-3">
                  <i data-lucide="smartphone" class="w-6 h-6 text-cyan-600"></i>
                  <h3 class="text-xl font-semibold text-gray-800">Flutter</h3>
                </div>
                <span class="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                  Intermediate
                </span>
              </div>
              <p class="text-gray-600 text-sm mb-4">
                Google's mobile UI toolkit for crafting natively compiled apps
                for mobile, web, and desktop.
              </p>
              <div class="bg-gray-200 h-2 rounded-full">
                <div
                  class="bg-cyan-600 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center gap-3">
                  <i data-lucide="network" class="w-6 h-6 text-purple-600"></i>
                  <h3 class="text-xl font-semibold text-gray-800">
                    Express / API
                  </h3>
                </div>
                <span class="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  Intermediate
                </span>
              </div>
              <p class="text-gray-600 text-sm mb-4">
                Lightweight backend framework for Node.js, perfect for REST APIs
                and fast backend architecture.
              </p>
              <div class="bg-gray-200 h-2 rounded-full">
                <div
                  class="bg-purple-600 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
