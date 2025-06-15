import emailjs from "emailjs-com";
import { useRef } from "react";
import Swal from "sweetalert2";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.senderName.value.trim();
    const email = form.current.senderEmail.value.trim();
    const message = form.current.senderMessage.value.trim();

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Please fill in all fields!",
        confirmButtonColor: "#6366F1",
      });
      return;
    }

    if (!nameRegex.test(name)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Name must be 2–50 characters and only letters/spaces.",
        confirmButtonColor: "#EF4444",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#EF4444",
      });
      return;
    }

    if (message.length < 10) {
      Swal.fire({
        icon: "error",
        title: "Message Too Short",
        text: "Please write a message with at least 10 characters.",
        confirmButtonColor: "#EF4444",
      });
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICEID,
        import.meta.env.VITE_EMAIL_SERVICE_TEMPLATEID,
        form.current,
        import.meta.env.VITE_EMAIL_SERVICE_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for contacting me. I’ll respond soon.",
          confirmButtonColor: "#6366F1",
        });
        form.current.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Sending Failed",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#EF4444",
        });
      });
  };
  return (
    <>
      <section
        id="contact"
        class="py-20 bg-white flex items-center justify-center"
      >
        <div class="container mx-auto px-6 lg:px-24">
          <h2 class="text-4xl font-bold text-indigo-700 mb-12 text-center">
            Contact Me
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contactForm"
              class="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-md"
            >
              <div>
                <label class="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="submitterName"
                  name="senderName"
                />
                <p id="nameError" class="text-red-500 text-sm mt-1 hidden">
                  Please enter your name.
                </p>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  placeholder="you@example.com"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="submitterEmail"
                  name="senderEmail"
                />
                <p id="emailError" class="text-red-500 text-sm mt-1 hidden">
                  Please enter a valid email address.
                </p>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  id="submitterMessage"
                  name="senderMessage"
                ></textarea>
                <p id="messageError" class="text-red-500 text-sm mt-1 hidden">
                  Please enter your message.
                </p>
              </div>
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />
              <button
                type="submit"
                class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                Send Message
              </button>
            </form>

            <div class="bg-white p-8 rounded-2xl shadow-md space-y-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h3>

              <div class="space-y-3 text-gray-700 text-base">
                <p>
                  <strong>Location:</strong>
                  <br />
                  Street 19, Sector E, Manzoor Colony
                </p>
                <p>
                  <strong>City:</strong> Karachi
                </p>
                <p>
                  <strong>Country:</strong> Pakistan
                </p>
                <p>
                  <strong>Phone:</strong> 0322-1035282
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:umerfarooq2821035@gmail.com"
                    class="text-indigo-600 hover:underline"
                  >
                    umerfarooq2821035@gmail.com
                  </a>
                </p>
              </div>

              <div class="pt-4">
                <a
                  href="https://wa.me/923221035282"
                  target="_blank"
                  class="inline-flex items-center space-x-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 fill-current"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339-3.2 256.5-23.5 177.3 10.8 103.5 43 52.2 120.4 56.1 202.3c3.1 67.3 37.5 124.2 91.1 161.4l-10.7 59.1c-2.3 12.5 8.5 22.5 20.5 19.2l64.3-19.1c46.3 12.6 96.3 5.9 136.2-21.4 70.6-45.3 95.8-141.2 53.4-216.7zm-34.1 179.3c-5.8 13.1-16.8 29.2-32.9 45.2-34.6 33.8-83.1 46.2-129 35.1l-9.4-2.2-38.1 11.3 6.1-34.1-8.3-7.3c-21.9-19.2-35.6-46.4-37.6-75.4-4.6-67.6 47.7-124.9 115.3-129.5 68.2-4.6 126 48.3 129.7 116.4 1.2 20.9-1.6 40.9-11.1 60.5z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
