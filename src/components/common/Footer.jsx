import React from "react";

function Footer() {
  return (
    <>
      <footer class="bg-indigo-900 text-indigo-100 py-12">
        <div class="container mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Umer Farooq</h3>
            <p class="text-indigo-300 mb-4">
              Full Stack Developer passionate about building scalable web
              applications and clean code.
            </p>
            <div class="flex space-x-4 text-indigo-400">
              <a
                href="mailto:umerfarooq2821035@gmail.com"
                aria-label="Email"
                class="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a
                href="https://github.com/UmerFarooq35282"
                target="_blank"
                aria-label="GitHub"
                class="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.236-3.22-.123-.3-.536-1.515.117-3.16 0 0 1.008-.32 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.137 3.002.404 2.29-1.55 3.296-1.23 3.296-1.23.655 1.645.243 2.86.12 3.16.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .315.216.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/umer-farooq-861ba9342"
                target="_blank"
                aria-label="LinkedIn"
                class="hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.038-1.85-3.038-1.852 0-2.136 1.447-2.136 2.94v5.666h-3.554v-11.47h3.414v1.569h.05c.476-.9 1.637-1.85 3.368-1.85 3.604 0 4.271 2.37 4.271 5.455v6.296zM5.337 8.433c-1.144 0-2.07-.926-2.07-2.07s.926-2.07 2.07-2.07c1.144 0 2.07.926 2.07 2.07s-.926 2.07-2.07 2.07zm1.776 12.019h-3.553v-11.47h3.553v11.47zM22.225 0h-20.451c-.98 0-1.775.795-1.775 1.776v20.451c0 .98.795 1.775 1.775 1.775h20.451c.98 0 1.775-.795 1.775-1.775v-20.451c0-.98-.795-1.776-1.775-1.776z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-indigo-300">
              <li>
                <a href="#about" class="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" class="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" class="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" class="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4">Contact Info</h3>
            <p class="text-indigo-300 mb-2">
              <strong>Location:</strong> Street 19, Sector E, Manzoor Colony,
              Karachi, Pakistan
            </p>
            <p class="text-indigo-300 mb-2">
              <strong>Phone:</strong> 0322-1035282
            </p>
            <p class="text-indigo-300 mb-4">
              <strong>Email:</strong>
              <a
                href="mailto:umerfarooq2821035@gmail.com"
                class="hover:text-white transition"
              >
                umerfarooq2821035@gmail.com
              </a>
            </p>
            <form
              class="flex space-x-2"
              onsubmit="event.preventDefault(); alert('Subscribed!')"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                class="w-full px-3 py-2 rounded-lg text-indigo-900 focus:outline-none"
              />
              <button
                type="submit"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div class="border-t border-indigo-700 mt-12 pt-6 text-center text-indigo-400 text-sm">
          &copy; 2025 Umer Farooq. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
