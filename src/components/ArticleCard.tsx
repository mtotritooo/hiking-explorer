type Props = {
  title: string;
  description: string;
  image: string;
};

function ArticleCard({ title, description, image }: Props) {
  return (
    <div className="article-card">
      <img src={image} alt={title} />
      <div className="article-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
