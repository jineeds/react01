
const GalleryItem = ({ item , onView }) => {
    //구조분해 
    const { thum, title, isClass, id  } = item 
    return (
        <li className={isClass ? "on":""} 
        onClick={() => onView(id)}>
           <img src={thum} alt={title} /> 
        </li>
    );
};

export default GalleryItem;