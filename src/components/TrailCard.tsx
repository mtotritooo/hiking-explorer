type Props = {
  title: string;
  onFav: () => void;
};

const TrailCard = ({ title, onFav }: Props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16 }}>
      <h3>{title}</h3>
      <button onClick={onFav}> დაამატე ფავორიტებში</button>
    </div>
  );
};

export default TrailCard;
