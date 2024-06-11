import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../components/Image";
import "./gallery.css";
import PostImagesToCategoryForm from "../components/PostImagesToCategoryForm";

const apiDomain = process.env.REACT_APP_API_DOMAIN;
const domain = process.env.REACT_APP_DOMAIN;

export default function Gallery() {
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const { category } = useParams();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  document.title = `${category} | Галерия | KR Photography`;
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", `${category} | KR Photography`);

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
      setIsLoading(false);
    }

    fetchImages();
  }, [setError, category, setImages, setIsLoading, isLoading]);

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
      {isAuthenticated ? (
        <PostImagesToCategoryForm
          category={category}
          triggerLoading={setIsLoading}
        >
          <h3>Качи снимки</h3>
          <input name="images" type="file" multiple="multiple" />
        </PostImagesToCategoryForm>
      ) : (
        ""
      )}
      <h1>{category}</h1>
      <section>
        {error && <p>{error}</p>}
        {isLoading && <p>Снимките се зареждат</p>}
        {images.length ? (
          images.map((image) => (
            <Image
              key={image.id}
              id={image.id}
              dimensions={image.dimensions}
              triggerLoading={setIsLoading}
              alt={`$снимки от категория {category}`}
              src={`${domain}${image.image}`}
              onClick={() => {
                setSelectedImage(image);
              }}
            />
          ))
        ) : isLoading ? (
          ""
        ) : (
          <p>Няма снимки в тази категория</p>
        )}
      </section>
      {selectedImage && (
        <div className="focused-image-container">
          <img src={`${domain}${selectedImage.image}`} alt={category} />
          <button className="left-arrow" onClick={previousImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="right-arrow" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button
            className="close-btn"
            onClick={() => {
              setSelectedImage(null);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
    </main>
  );
}
