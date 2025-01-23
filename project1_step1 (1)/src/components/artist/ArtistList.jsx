import { useSelector } from 'react-redux';
import ArtistItem from './ArtistItem';
import { CardListBox } from './style';

const ArtistList = () => {
    return (
        <CardListBox>
            <ArtistItem />
        </CardListBox>
    );
};

export default ArtistList;
