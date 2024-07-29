import { useState, useEffect } from "react";
import axios from "axios";

const ProjectsAPI = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/Shashan-k08/repos"
      );
      const data = response.data;
      setProjects(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const ProjectsData = projects.filter(function (project) {
    return project.stargazers_count > 0;
  });

  return ProjectsData;
};

export default ProjectsAPI;
