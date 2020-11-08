import Project from "./Project";

const projects = [
  {
    id: 1,
    name: "Nose In A Day",
    client: "Rocks & Ropes of Tucson",
    marginTop: 50,
    description:
      "The “Nose In A Day” fundraiser supports the Tucson Climbing Project in providing team dues and competition fees for athletes on the Rocks & Ropes Youth Climbing Team. The “Nose” refers to the middle route up El Capitan in Yosemite, and the event held by TCP recreates the route in the gym. This design was an ode to the first 3 climbers to complete the route in under 24 hours back in 1975. We chose to use a retro type and color palette to enhance the visual.",
    photos: [
      {
        location: "/NIAD_photo_forsite.jpg",
        width: 400,
        height: 400,
      },
      { location: "/NIAD19_forsite.jpg", width: 400, height: 400 },
    ],
  },
  {
    id: 2,
    name: "Summer Camp T-Shirts",
    client: "Rocks & Ropes of Tucson",
    marginTop: 50,
    description:
      "The local climbing gym was looking for fun and unique designs for their summer camp t-shirts. These shirts would be given to campers, worn by staff, and used as promotional materials. We have worked together for four years to go beyond the typical summer camp imagery to make one color screen prints that capture the fun of camp and represent the exciting world of rock climbing.",
    photos: [
      {
        location: "/2018 summer camp shirt.jpg",
        width: 400,
        height: 400,
      },
      {
        location: "/summer camp 2017_forsite.jpg",
        width: 400,
        height: 400,
      },
      {
        location: "/summer camp 2019_forsite.jpg",
        width: 400,
        height: 400,
      },
    ],
  },
  // {
  //   id: 3,
  //   name: "test3",
  //   description: "lorem ipsum totum nuctum",
  //   photos: ["one", "two", "three", "four"],
  // },
];

const Projects = () => {
  return projects.map((item, key) => <Project item={item} key={key} />);
};
export default Projects;
