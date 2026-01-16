import ArticleCard from "../components/ArticleCard";
import "../styles/home.scss";

function Favorites() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <img src="/images/trail4.jpg" alt="Favorite Trails" />
        <div className="hero-text">
          <h1>favorite ბილიკი</h1>
          <p>ბილიკი რომელიც ყველამ უნდა ნახოს</p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles">
        <ArticleCard
          title="დამალული კანიონის ბილიკი"
          description="ხალხის საყვარელი ბილიკი. ერთ-ერთი, რომელიც მიგიყვანს კანიონებისს ხედზე."
          image="/images/trail4.jpg"
        />
      </section>
    </main>
  );
}

export default Favorites;
