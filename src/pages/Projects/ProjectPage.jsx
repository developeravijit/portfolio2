import { useEffect, useState } from "react";
import Plus from "../../components/Button/Plus";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          "https://portfolioprojectapi.onrender.com/api/show",
        );
        if (!res.ok) throw new Error("API not fetch");
        console.log(`Status Code ${res.status}`);

        const data = await res.json();
        setProjects(data.data);
      } catch (error) {
        console.log(`API Error ${error}`);
      }
    };
    fetchProject();
  }, []);

  return (
    <section className="pt-[25px] sm:pt-[50px]">
      <div className="container">
        {/* Title */}
        <div className="projectPage-title2">
          <div className="max-w-[300px] mx-auto">
            <h2 className="title2 select-none">
              <span className="hdr1">Projects</span>
              <span className="hdr2">Projects</span>
            </h2>
          </div>
        </div>
        <Plus onClick={() => navigate("/login")} />
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image (FULL CARD) */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={"/image/project1.png"}
                  alt={project.img?.[0]?.alt || ""}
                  className="w-full h-full !object-cover object-top group-hover:scale-105 transition duration-500"
                />

                {/* Top fake window dots */}
                <div className="absolute top-3 left-3 flex gap-2 z-20">
                  <span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
                </div>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                {/* CONTENT (POPUP FROM BOTTOM) */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 z-20">
                  <h3 className="projectTitle text-white text-[26px] font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
                <span className="techStack text-[17px] uppercase text-orange-400 flex items-center gap-2">
                  <span className="w-1 h-3 bg-orange-400 mr-2"></span>
                  {project.techstack}
                </span>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] text-gray-300 hover:text-white flex items-center gap-2"
                >
                  VIEW PROJECT →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
