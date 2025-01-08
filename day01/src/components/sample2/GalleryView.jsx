const GalleryView = ({ current }) => {
  const { id, title, desc } = current;

  return (
    <article className="view">
      <h2>{title}</h2>
      <p>{desc}</p>
    </article>
  );
};

export default GalleryView;
