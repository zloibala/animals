import "./animalsInfo.style.css";

const AnimalsInfo = () => {
  const [info, setInfo] = useState(0);
  setInfo("Zebraa");
  const zebraOnClick = () => {};

  return (
    <div className="animals">
      <h3>Zebra</h3>
      <img
        src="https://www.meme-arsenal.com/memes/f58461a7a10158453d63d047b10dbbe2.jpg"
        onClick={zebraOnClick}
      />
      <h3> Lion </h3>
      <img src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/1900-01918-002_Madagascar_Flexing_Alex_RealBig_002_PROD.jpg?v=1620681690&width=1946" />
      <h3> Hippo </h3>
      <img src="https://vignette.wikia.nocookie.net/jadensadventures/images/b/b7/Madagascar-dreamworks-gloria4g.jpg/revision/latest?cb=20120908220950" />
      <h3> Giraffe </h3>
      <img src="https://i.pinimg.com/originals/3b/4b/18/3b4b18dd3b8e74de41286133ba7fa122.png" />
      <h3> Pinguin </h3>
      <img src="https://en.wikifur.com/w/images/thumb/3/3a/Madagasca_Penguins.jpg/800px-Madagasca_Penguins.jpg" />
    </div>
  );
};

export default AnimalsInfo;
