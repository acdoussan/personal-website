import LandingPage from 'views/LandingPage/LandingPage.js';
import AboutMe from 'views/AboutMe/AboutMe.js';

const routes = [
  { path: "/about", name: "About", component: AboutMe },
  { path: "/", name: "LandingPage", component: LandingPage },
];

export default routes;
