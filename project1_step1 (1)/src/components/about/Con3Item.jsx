import 'swiper/css';

const Con3Item = ({ item }) => {
    const { imgurl, id, desc } = item;
    return (
        <>
            <img src={imgurl} alt='' />
        </>
    );
};

export default Con3Item;
