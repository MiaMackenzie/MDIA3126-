"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  // Implementation
  // - Pick an API
  // - Build a button component that has a fetch action
  // - Build a component that displays our data (should have an empty and fulfilled state)
  // - Build a function that will fetch some data
  // - Format and handle the data
  // - (Error handling)
  // - Style our app and create breakpoints
  // - Component for our button to sit in

  const [pictureContents, setPictureContents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for error messages

  async function fetchPictures() {
    setLoading(true);
    setError(null); // Reset error state when a new fetch begins
    try {
      const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setPictureContents(data);
    } catch (err) {
      setError(err.message); // Catch and set error message
      setPictureContents(null);
    } finally {
      setLoading(false); // Always stop loading after the fetch
    }
  }

  const Header = () => {
    return (
      <header>
        <h1>My cool Midterm submission</h1>
        <button
          disabled={loading}
          className='border-2 border-white p-2'
          onClick={fetchPictures}
        >
          Fetch 🪐
        </button>
      </header>
    );
  };

  const PictureDisplay = () => {
    if (loading) {
      return <section>🚀Loading...🚀</section>;
    }

    if (error) {
      return <section>❌ Error: {error}</section>;
    }

    if (pictureContents) {
      const pictureList = pictureContents.map((picture, i) => (
        <article key={i}>
          <img src={picture.url} alt={picture.explanation} />
          <h2>{picture.title}</h2>
          <p>{picture.explanation}</p>
          <hr />
        </article>
      ));

      return <section>{pictureList}</section>;
    }

    return <section>🔭 No pictures have been fetched 🔭</section>;
  };

  return (
    <div className="m-8">
      <Header />
      <PictureDisplay />
    </div>
  );
}