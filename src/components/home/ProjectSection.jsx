import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "../common/ProjectCard";

function ProjectSection() {
  const projectData = [
    {
      projectImage: "assets/images/PortfolioImage.PNG",
      projectName: "Portfolio Website",
      projectDesc:
        "A fully responsive developer portfolio built with HTML, Tailwind CSS, and JavaScript. Clean UI and modern layout.",
      projectLink: "https://umerfarooqportfolio.web.app",
      githubLink: "https://github.com/UmerFarooq35282/Professional-Porfolio",
    },
    {
      projectImage: "assets/images/bookApp.png",
      projectName: "Bookstore App (Flutter)",
      projectDesc:
        "A full-stack bookstore app with React frontend and Express + MongoDB backend. Includes search, CRUD, and user auth.",
      projectLink: "https://your-bookstore-app.com",
      githubLink: "https://github.com/UmerFarooq35282/FlutterBookAppProject",
    },
    {
      projectImage: "assets/images/project3.png",
      projectName: "Chat App (Socket.IO)",
      projectDesc:
        "Real-time chat app using Node.js, Socket.IO, and Tailwind. Features private rooms and instant messaging.",
      projectLink: "#",
      githubLink: "#",
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="py-20 bg-white flex items-center justify-center"
      >
        <div className="container mx-auto px-6 lg:px-24">
          <h2 className="text-4xl font-bold text-indigo-700 mb-12 text-center">
            Projects
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
