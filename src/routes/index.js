import AboutMe from 'views/AboutMe/AboutMe.js';
import Home from 'views/Home/Home.js';
import Projects from 'views/Projects/Projects.js';
import Resume from 'views/Resume/Resume.js';

const routes = [
  { path: "/about", name: "About Me", component: AboutMe },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/resume", name: "Resume", component: Resume },
  { path: "/", name: "Home", component: Home },
];

export default routes;
