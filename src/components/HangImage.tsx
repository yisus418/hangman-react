import image0 from "../assets/images/0.png";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import image8 from "../assets/images/8.png";
import image9 from "../assets/images/9.png";

const images: string[] = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
]

interface Props {
  imageNumber: number;
}

export function HangImage( {imageNumber}: Props ) {
  // Retorna un JSX Element
  return (
    <div className="flex justify-center">
      <img src={images[imageNumber]} alt="Image 0" style={{ width: 250 }} />
    </div>
  );
}
