import React from "react";

// Components
import Event from "./Event";

// Assets
import Arrow from "/arrow.png";
import uOttaHack1 from "/uOttaHack1.png";
import uOttaHack2 from "/uOttaHack2.png";
import uOttaHack3 from "/uOttaHack3.png";
import uOttaHack4 from "/uOttaHack4.png";
import uOttaHack5 from "/uOttaHack5.png";
import uOttaHack6 from "/uOttaHack6.png";

const eventDataLeft = [
  {
    name: "uOttaHack 1",
    date: "2018",
    description: "uOttaHack launched in 2018 bringing together a group of learners and innovators.",
    image: uOttaHack1,
    marginTop: "40px"
  },
  {
    name: "uOttaHack 3",
    date: "2020",
    description: "uOttaHack3 was very cool idk what to write for the descriptions lol",
    image: uOttaHack3,
    marginTop: "180px"
  },
  {
    name: "uOttaHack 5",
    date: "2022",
    description: "uOttaHack 5 was also cool and i also dk what to write",
    image: uOttaHack5,
    marginTop: "180px"
  }
];

const eventDataRight = [
  {
    name: "uOttaHack 2",
    date: "2019",
    description: "uOttaHack 2 with 1300+ hacker applicants, and over 6 thousand dollars in prizes.",
    image: uOttaHack2,
    marginTop: "220px"
  },
  {
    name: "uOttaHack 4",
    date: "2021",
    description: "uOttaHack 4 Description goes right here but I dont really now what to write",
    image: uOttaHack4,
    marginTop: "180px"
  },
  {
    name: "uOttaHack 6",
    date: "2023",
    description: "uOttaHack 6 with lots of stuff going on and yeah ford had cool cars outside",
    image: uOttaHack6,
    marginTop: "180px"
  }
];

const History = () => {
  return (
    <div className="w-full flex flex-row justify-center mt-[10vw] gap-6">
      {/* Left Side */}
      <div className="flex-col flex">
        {eventDataLeft.map((event, index) => (
          <div key={index} style={{ marginTop: event.marginTop }}>
            <Event 
              name={event.name} 
              date={event.date} 
              description={event.description} 
              image={event.image} 
            />
          </div>
        ))}
      </div>

      {/* Center Image */}
      <div className="min-w-[200px]">
        <img src={Arrow} alt="Center Arrow" />
      </div>

      {/* Right Side */}
      <div className="flex-col flex">
        {eventDataRight.map((event, index) => (
          <div key={index} style={{ marginTop: event.marginTop }}>
            <Event 
              name={event.name} 
              date={event.date} 
              description={event.description} 
              image={event.image} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
