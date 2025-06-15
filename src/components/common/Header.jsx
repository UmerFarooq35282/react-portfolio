function Header() {
  return (
    <>
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-6 lg:px-24">
          <div class="flex justify-between h-16">
            <div class="flex items-center justify-center">
              <a
                href="#"
                class="flex items-center space-x-2 text-2xl font-bold text-indigo-700"
              >
                <div class="bg-gradient-to-r from-indigo-300 to-indigo-700 text-white rounded-full px-4 py-2 text-sm font-extrabold shadow-md">
                  UF
                </div>
                <span>Umer Farooq</span>
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                class="text-gray-700 hover:text-indigo-600 font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                class="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Projects
              </a>
              <a
                href="#skills"
                class="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Skills
              </a>
              <a
                href="#contact"
                class="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Contact
              </a>
            </div>
            <div class="md:hidden flex items-center">
              <button id="menu-toggle" class="text-gray-700 focus:outline-none">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile-menu" class="md:hidden hidden px-6 pb-4">
          <a
            href="#about"
            class="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            class="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            Projects
          </a>
          <a
            href="#skills"
            class="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            Skills
          </a>
          <a
            href="#contact"
            class="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
