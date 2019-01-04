import AboutMe from 'views/AboutMe/AboutMe.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import Projects from 'views/Projects/Projects.js';
import Resume from 'views/Resume/Resume.js';

const routes = [
  { path: "/about", name: "About Me", component: AboutMe },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/resume", name: "Resume", component: Resume },
  { path: "/", name: "Landing Page", component: LandingPage },
];

export default routes;
