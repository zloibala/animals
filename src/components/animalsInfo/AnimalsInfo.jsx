import React, { useState } from "react";
import lionImg from "../../assets/images/lion.png";
import "./animalsInfo.style.css";

const animalImages = [
  {
    name: "zebra",
    src: "https://www.meme-arsenal.com/memes/f58461a7a10158453d63d047b10dbbe2.jpg",
    alt: " Zebra is black and white",
    text: " Zebra is black and white lika a panda",
  },
  {
    name: "lion",
    src: lionImg,
    alt: "Lion is the kink of Safari",
    text: "I am king of safari",
  },
];

const AnimalsInfo = () => {
  const [currentImageInfo, setCurrentImageInfo] = useState("");
  const imageOnClick = (e) => {
    const { name, accessKey } = e.target;
    console.log(name, ":", accessKey);
    setCurrentImageInfo(animalImages[accessKey].text);
  };

  const showAllImages = animalImages.map((animal, index) => {
    return (
      <img
        accessKey={index}
        src={animal.src}
        name={animal.name}
        key={index}
        alt={animal.alt}
        onClick={imageOnClick}
      />
    );
  });

  //   const showInfo= () => (

  //   );
  return (
    <>
      <h1> Animals World</h1>
      {showAllImages}
      {currentImageInfo}

      {/* <div className="animals">
        <img
          src="https://www.meme-arsenal.com/memes/f58461a7a10158453d63d047b10dbbe2.jpg"
          onClick={imageOnClick}
        />
        {showText && <p> Zebra baby</p>}
        <img src={lionImg} onClick={imageOnClick} />
        {showText && <p> Lion baby</p>}
        <img
          src="https://vignette.wikia.nocookie.net/jadensadventures/images/b/b7/Madagascar-dreamworks-gloria4g.jpg/revision/latest?cb=20120908220950"
          onClick={imageOnClick}
        />
        {showText && <p> Hippo mama</p>}
        <img src="https://i.pinimg.com/originals/3b/4b/18/3b4b18dd3b8e74de41286133ba7fa122.png" />
        <img src="https://en.wikifur.com/w/images/thumb/3/3a/Madagasca_Penguins.jpg/800px-Madagasca_Penguins.jpg" />
      </div> */}
    </>
  );
};

export default AnimalsInfo;
