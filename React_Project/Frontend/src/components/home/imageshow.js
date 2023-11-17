import ImageSlider from "./imageslider";
import bake1 from "../images/bake1.jpg";
import bake2 from "../images/bake2.jpg";
import bake3 from "../images/bake3.jpg";
import bake4 from "../images/bake4.jpg";
import bake5 from "../images/bake5.jpg";

function ImageShow() {
  const images = [
    bake1,
    bake2,
    bake3,
    bake4,
    bake5,
  ];
  return(
    <>
      <div style={{padding: "10px"}}>
        <ImageSlider images={images} />
      </div>
    </>
  );
}

export default ImageShow;