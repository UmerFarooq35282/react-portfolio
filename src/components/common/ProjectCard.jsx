function ProjectCard({
  projectName,
  projectImage,
  projectDesc,
  githubLink,
  projectLink,
}) {
  return (
    <>
      <div class="swiper-slide bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6">
        <img
          src={projectImage}
          alt={projectName}
          class="rounded-xl mb-4 w-full h-48 object-cover"
        />
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{projectName}</h3>
        <p class="text-gray-600 text-sm mb-4">{projectDesc}</p>
        <div class="flex items-center space-x-4">
          <a
            href={projectLink}
            target="_blank"
            class="text-indigo-600 font-medium hover:underline"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            class="text-gray-600 hover:text-indigo-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
