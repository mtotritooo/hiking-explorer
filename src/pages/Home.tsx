import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Modal from "../components/Modal";
import type { Trail } from "../api/trails";
import { fetchTrails } from "../api/trails";
import "../styles/home.scss";

function Home() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTrail, setSelectedTrail] = useState<Trail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadTrails = async () => {
      try {
        setLoading(true);
        const data = await fetchTrails();
        setTrails(data);
      } catch (err) {
        setError("Failed to load trails");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTrails();
  }, []);

  const handleTrailClick = (trail: Trail) => {
    setSelectedTrail(trail);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTrail(null), 300);
  };

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <img src="/images/hero.jpg" alt="Hiking Hero" />
        <div className="hero-text">
          <h1>აღმოაჩინე საუკეთესო სალაშქრო ბილიკები</h1>
          <p>Discover nature, mountains and unforgettable paths</p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles">
        {loading && <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading trails...</p>}
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {!loading && trails.map((trail) => (
          <div
            key={trail.id}
            onClick={() => handleTrailClick(trail)}
            style={{ cursor: "pointer" }}
          >
            <ArticleCard
              title={trail.title}
              description={trail.description}
              image={trail.image}
            />
          </div>
        ))}
      </section>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedTrail?.title || "Trail Details"}
      >
        {selectedTrail && (
          <div>
            <img
              src={selectedTrail.image}
              alt={selectedTrail.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Description:</strong> {selectedTrail.description}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Difficulty:</strong> {selectedTrail.difficulty}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Distance:</strong> {selectedTrail.distance}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Elevation:</strong> {selectedTrail.elevation}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Rating:</strong>  {selectedTrail.rating}/5
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Location:</strong>  {selectedTrail.location}
            </p>
          </div>
        )}
      </Modal>
    </main>
  );
}

export default Home;
