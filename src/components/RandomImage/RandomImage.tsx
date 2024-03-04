import { useState } from "react";
import styles from "./RandomImage.module.scss";
import { PiDogLight } from "react-icons/pi";

interface Image {
  message: string;
}

const RandomImage = () => {
  const initialImage: Image = {
    message:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  const [image, setImage] = useState<Image>(initialImage);

  const fetchImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response) {
      throw new Error("Could not fetch your image");
    }

    const imageSrc = await response.json();

    setImage(imageSrc);
  };

  return (
    <div>
      <h2> 4. Dog Image Generator</h2>
      <div className={styles.container}>
        <img className={styles.image} src={image.message} />
        <button className={styles[`search-button`]} onClick={fetchImage}>
          Generate Random Dog Image <PiDogLight className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
export default RandomImage;
