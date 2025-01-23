import { useDispatch, useSelector } from 'react-redux';
import { MelonModalBox } from './style';
import { SlClose } from 'react-icons/sl';

const MelonModal = () => {
    return (
        <MelonModalBox className="Modal">
            <div className="bg"></div>
            <div className="popup">
                <h2>곡: </h2>
                <div>
                    <iframe
                        width="1268"
                        height="713"
                        src={`https://www.youtube.com/embed/해당키`}
                        frameborder="0"
                    ></iframe>
                </div>
                <p>가수 : </p>
                <span>
                    <i>
                        <SlClose />
                    </i>
                </span>
            </div>
        </MelonModalBox>
    );
};

export default MelonModal;
