import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../components/Image";
import "./gallery.css";

const apiDomain = process.env.REACT_APP_API_DOMAIN;
const domain = process.env.REACT_APP_DOMAIN;

export default function Gallery() {
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { category } = useParams();

  document.title = `${category} | Галерия | KR Photography`;

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `${apiDomain}get-images/?category=${category}`
      );
      if (!response.ok) {
        setError('Couldn"t fetch images');
        return;
      }
      const responseData = await response.json();
      const images = responseData.images;
      setImages(images);
    }

    fetchImages();
  }, [setError, category, setImages]);

  function nextImage() {
    const currentIndex = images.indexOf(selectedImage);
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    } else {
      setSelectedImage(images[0]);
    }
  }

  function previousImage() {
    const currentIndex = images.indexOf(selectedImage);
    if (currentIndex === 0) {
      setSelectedImage(images[images.length - 1]);
    } else {
      setSelectedImage(images[currentIndex - 1]);
    }
  }

  return (
    <main className="gallery-main">
      <h1>{category}</h1>
      <section>
        {error && <p>{error}</p>}
        {images.length ? (
          images.map((image) => (
            <Image
              key={image}
              alt={`$снимки от категория {category}`}
              src={`${domain}${image}`}
              onClick={() => {
                setSelectedImage(image);
              }}
            />
          ))
        ) : (
          <p>Няма снимки в тази категория</p>
        )}
      </section>
      {selectedImage && (
        <div className="focused-image-container">
          <img
            onClick={() => {
              setSelectedImage(null);
            }}
            src={`${domain}${selectedImage}`}
            alt={category}
          />
          <button className="left-arrow" onClick={previousImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="right-arrow" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </main>
  );
}
