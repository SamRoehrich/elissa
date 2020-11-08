import Project from "./Project";

const projects = [
  {
    id: 1,
    name: "Nose In A Day",
    description:
      "The “Nose In A Day” fundraiser supports the Tucson Climbing Project in providing team dues and competition fees for athletes on the Rocks & Ropes Youth Climbing Team. The “Nose” refers to the middle route up El Capitan in Yosemite, and the event held by TCP recreates the route in the gym. This design was an ode to the first 3 climbers to complete the route in under 24 hours back in 1975. We chose to use a retro type and color palette to enhance the visual.",
    photos: ["one", "two", "three", "four"],
  },
  {
    id: 2,
    name: "test2",
    description: "lorem ipsum totum nuctum",
    photos: ["one", "two", "three", "four"],
  },
  {
    id: 3,
    name: "test3",
    description: "lorem ipsum totum nuctum",
    photos: ["one", "two", "three", "four"],
  },
];

const Projects = () => {
  return projects.map((item, key) => <Project item={item} key={key} />);
};
export default Projects;
