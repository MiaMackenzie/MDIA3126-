"use client";
import { useState } from "react";

export default function StylesPage() {
  // State hooks to store bear images and loading status
  const [bearImages, setBearImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchedUrls, setFetchedUrls] = useState(new Set()); // To track previously fetched image URLs

  // Function to fetch bear images without repeating
  async function fetchBearImages() {
    setLoading(true); // Set loading to true when starting the fetch
    
    try {
      const newImages = [];
      while (newImages.length < 5) {  // Fetch 5 unique bear images
        const width = 200 + Math.floor(Math.random() * 100); // Random width between 200-300
        const height = 300 + Math.floor(Math.random() * 100); // Random height between 300-400
        const imageUrl = `https://placebear.com/${width}/${height}`;

        // Check if the image URL has already been fetched
        if (!fetchedUrls.has(imageUrl)) {
          newImages.push(imageUrl);  // Add unique image URL to the list
          setFetchedUrls(new Set(fetchedUrls.add(imageUrl)));  // Add it to the set of fetched URLs
        }
      }
      
      setBearImages(newImages); // Update the state with the newly fetched unique images
    } catch (error) {
      console.error("Error fetching bear images:", error); // Log any error that occurs
      alert("Failed to fetch bear images. Please try again later."); // Display alert if there's an error
    } finally {
      setLoading(false); // Set loading to false once the fetch is complete
    }
  }

  // Header component with a button to trigger the image fetch
  const Header = () => {
    return (
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Want To See Some Cute Bears?</h1>
        <button
          disabled={loading} // Disable the button while loading
          className="bg-[#419D78] text-white p-4 px-6 text-xl rounded-lg border-2 border-white hover:bg-[#357C5B] disabled:bg-gray-400"
          onClick={fetchBearImages} // Call fetchBearImages when button is clicked
        >
          {loading ? "Loading..." : "Fetch Bears 🐻"}
        </button>
      </header>
    );
  };

  // Component to display fetched bear images or a message when no images are fetched
  const PictureDisplay = () => {
    if (loading) {
      return <section>Loading...</section>; // Display loading message while images are being fetched
    }

    if (bearImages.length > 0) {
      return (
        <section className="flex flex-wrap justify-center">
          {/* Loop through the bear images array and display each image in a card */}
          {bearImages.map((image, index) => (
            <div key={index} className="card">
              <img src={image} alt={`Placeholder bear ${index + 1}`} /> {/* Display the image */}
              <h2 className="title">Bear {index + 1}</h2> {/* Display bear title */}
              <p className="description">Pick me as a placeholder!</p> {/* Description for each image */}
            </div>
          ))}
        </section>
      );
    }

    // Display this message when no images are fetched
    return <section className="flex justify-center items-center h-full mt-5">No bear images fetched yet</section>;
  };

  return (
    <div className="m-8">
      <Header /> {/* Render the Header component */}
      <PictureDisplay /> {/* Render the PictureDisplay component */}
    </div>
  );
}