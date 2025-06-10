import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';

// Mock data to simulate API responses for the movie list
const mockMovies = [
  {
    id: 1,
    title: "The Silent Witness",
    poster: "https://placehold.co/400x600/1a202c/e2e8f0?text=Movie+1",
    genre: "Thriller",
    year: "2023",
    rating: 8.5,
    description: "A gripping psychological thriller about a detective racing against time to uncover the truth behind a series of mysterious disappearances in a secluded town. Filled with unexpected twists and turns, this film keeps you on the edge of your seat until the very end. The cinematography captures the eerie atmosphere of the remote setting perfectly, adding to the suspense.",
    director: "Jane Doe",
    cast: ["John Smith", "Emily White", "David Lee"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=fLqS_c1aB3XvFhJv" // Dummy YouTube link
  },
  {
    id: 2,
    title: "Cosmic Odyssey",
    poster: "https://placehold.co/400x600/1a202c/e2e8f0?text=Movie+2",
    genre: "Sci-Fi",
    year: "2024",
    rating: 9.1,
    description: "An epic space adventure following a crew of astronauts on a perilous journey to save humanity from an impending cosmic disaster. Stunning visual effects and a compelling narrative make this a must-watch for sci-fi enthusiasts. The philosophical undertones add depth to the action-packed storyline.",
    director: "Richard Roe",
    cast: ["Alice Brown", "Bob Green", "Charlie Day"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=fLqS_c1aB3XvFhJv"
  },
  {
    id: 3,
    title: "Whispers of the Past",
    poster: "https://placehold.co/400x600/1a202c/e2e8f0?text=Movie+3",
    genre: "Drama",
    year: "2022",
    rating: 7.8,
    description: "A poignant drama exploring themes of memory, loss, and redemption through the eyes of an elderly artist revisiting her childhood home. The film's emotional depth and powerful performances resonate long after the credits roll. A beautifully shot and sensitively told story.",
    director: "Sarah Connor",
    cast: ["Michael Stone", "Olivia Dale", "Paul Rudd"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=fLqS_c1aB3XvFhJv"
  },
  {
    id: 4,
    title: "Cybernetic City",
    poster: "https://placehold.co/400x600/1a202c/e2e8f0?text=Movie+4",
    genre: "Action",
    year: "2025",
    rating: 8.9,
    description: "In a dystopian future, a lone hacker uncovers a conspiracy that threatens to plunge the entire cybernetic city into chaos. High-octane action sequences blend seamlessly with thought-provoking themes about technology and control. A visual spectacle with a thrilling plot.",
    director: "Alex Turner",
    cast: ["Chris Evans", "Scarlett Johansson", "Samuel L. Jackson"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=fLqS_c1aB3XvFhJv"
  },
  {
    id: 5,
    title: "Enchanted Forest",
    poster: "https://placehold.co/400x600/1a202c/e2e8f0?text=Movie+5",
    genre: "Fantasy",
    year: "2023",
    rating: 7.5,
    description: "A magical tale of a young adventurer who stumbles upon a hidden enchanted forest, home to mythical creatures and ancient secrets. A charming and whimsical journey for all ages, filled with breathtaking landscapes and heartwarming characters. Perfect for a family movie night.",
    director: "Emma Watson",
    cast: ["Daniel Radcliffe", "Tom Felton", "Bonnie Wright"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=fLqS_c1aB3XvFhJv"
  },
  {
    id: 6,
    title: "The Last Frontier",
    poster: "https://placehold.co/400x600/1a202c/e2e8f0?text=Movie+6",
    genre: "Adventure",
    year: "2021",
    rating: 8.2,
    description: "A group of explorers embarks on a perilous journey to the last unexplored corners of Earth, facing untamed wilderness and ancient mysteries. An exhilarating adventure that showcases the beauty and danger of nature, pushing the limits of human endurance.",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=fLqS_c1aB3XvFhJv"
  },
  {
    id: 7,
    title: "Echoes of Time",
    poster: "https://placehold.co/400x600/1a202c/e2e8f0?text=Movie+7",
    genre: "Mystery",
    year: "2020",
    rating: 7.9,
    description: "A detective unravels a complex mystery spanning decades, connected by a series of unsettling echoes from the past. A intricate plot with a satisfying conclusion, keeping viewers guessing until the final reveal. Atmospheric and well-acted.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Cillian Murphy"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=fLqS_c1aB3XvFhJv"
  },
  {
    id: 8,
    title: "Urban Rhapsody",
    poster: "https://placehold.co/400x600/1a202c/e2e8f0?text=Movie+8",
    genre: "Musical",
    year: "2019",
    rating: 8.7,
    description: "A vibrant musical journey through the bustling streets of a diverse city, celebrating dreams, love, and the pursuit of passion. Energetic performances and memorable songs make this an uplifting cinematic experience. A true celebration of art and community.",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone"],
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=fLqS_c1aB3XvFhJv"
  }
];


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with a delay
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      try {
        setMovies(mockMovies);
      } catch (err) {
        setError("Failed to fetch movies. Please try again later.");
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    }, 1000); // Simulate network delay

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="homepage">
      <h1 className="page-title">Featured Movies</h1>
      <div className="movie-list-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;