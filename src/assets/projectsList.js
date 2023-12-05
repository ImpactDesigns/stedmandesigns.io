import mobileDesktopSceneImg from "../images/desktop-sm-x2.png";
import boxMoverDemoImage from "../images/box-mover-demo.jpg";

const projectsList = [
  {
    title: "Project one",
    previewImage: mobileDesktopSceneImg,
    description:
      "Lorem ipsum dolor sit amet. Orci amet risus neque porta donec sagittis morbi leo. Leo. Lorem ipsum dolor sit amet consectetur. Orci amet risus neque porta donec sagittis morbi leo. Leo.",
    projectPath: "/design-projects/vaxx-overflow",
    projectLinks: [
      {
        label: "Live",
        path: "https://test-wax-breaker-proj.onrender.com",
      },
      {
        label: "Github",
        path: "http://www.github.com",
      },
      {
        label: "Figma",
        path: "https://www.figma.com/file/YGwZ3yWfASh9zgcn3MSxGK/v2?type=design&node-id=23%3A5275&mode=design&t=egRCrqIzmNs7JbMP-1",
      },
    ],
  },
  {
    title: "BoxMover",
    previewImage: boxMoverDemoImage,
    description:
      "A small project to test out Zustand state management. Move the highlighted box by using for directions.",
    projectPath: "/dev-projects/box-mover",
    projectLinks: [
      {
        label: "Live",
        path: "https://steadys-projs-boxmover.netlify.app/",
      },
      {
        label: "Github",
        path: "https://github.com/recon-designs-practice/box-mover",
      },
    ],
  },
];

export default projectsList;
