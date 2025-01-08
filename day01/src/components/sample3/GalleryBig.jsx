const GalleryBig = ({ current }) => {
  const { id, title, imgurl } = current;
  return (
    <div className="bigimg">
      <h2>{title}</h2>
      <img src={imgurl} alt={title} />
    </div>
  );
};

export default GalleryBig;
