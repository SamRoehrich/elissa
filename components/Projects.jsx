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
      {
        location: "/shirt_forsite.jpg",
        width: 400,
        height: 400,
      },
    ],
  },
  {
    id: 3,
    name: "Soccer Tournament Shirt",
    client: "UNC Chapel Hill Women’s Soccer",
    marginTop: 50,
    description:
      "Lars Van Dam was a women’s soccer coach at UNC Chapel Hill who passed in 2019 due to complications with his ongoing cancer battle. Early in 2019, before his death, the women of the team wanted to celebrate him and his career by renaming their annual soccer tournament after him. This shirt was made quickly but lovingly so that Lars would receive one. We used the school colors and classic iconography to make a clean and timeless design that would continue to be used by the school.",
    photos: [
      {
        location: "/LVD 2.jpg",
        width: 400,
        height: 618,
      },
    ],
  },
  {
    id: 4,
    name: "Fire Department Patch & Sticker",
    client: "Sonoita-Elgin Fire Department",
    marginTop: 50,
    description:
      "The SEFD in Southern Arizona has mascots for each shift. They represent the familial energy of fire department crews and are a way to show pride. The C-Shift wanted to create a custom patch and sticker for their crew that would showcase their mascot (the fighting cobras) and that would be highly visible and easy to translate into many different sizes.",
    photos: [
      {
        location: "/snek-color.jpg",
        width: 400,
        height: 400,
      },
    ],
  },
  {
    id: 5,
    name: "Kickball Event",
    client: "Youth Recovery Organization",
    marginTop: 50,
    description:
      "(Text redacted for anonymity) A local recovery group was holding a kickball tournament in Yuma, AZ to raise funds for a large conference. We wanted to emulate an old town western/southwestern feel, but with a kickball twist. The hand drawn illustration allowed this design to stand out and leave room for enough text for event information, and a black and white alternative was presented for inexpensive printing options.",
    photos: [
      {
        location: "/YUMA COLOR.svg",
        width: 400,
        height: 400,
      },
      {
        location: "/YUMA BW with text_forsite.jpg",
        width: 400,
        height: 484,
      },
    ],
  },
];

const Projects = () => {
  return projects.map((item, key) => <Project item={item} key={key} />);
};
export default Projects;
