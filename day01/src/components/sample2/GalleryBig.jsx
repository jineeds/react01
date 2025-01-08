const GalleryBig = ({ current, onOpen }) => {
  const { id, title, imgurl } = current;

  return (
    <div className="bigimg " onClick={onOpen}>
      <h2> {title} </h2>
      <img src={imgurl} alt={title} />
    </div>
  );
};

export default GalleryBig;
