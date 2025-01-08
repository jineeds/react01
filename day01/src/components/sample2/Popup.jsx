import { RiCloseLargeFill } from 'react-icons/ri';

const Popup = ({ onClose, current }) => {
  const { imgurl, title } = current;
  return (
    <>
      <div className="bg"></div>
      <div className="popup">
        <RiCloseLargeFill className="close" onClick={onClose} />
        <img src="" alt="" />
        <h2>xxx</h2>
      </div>
    </>
  );
};

export default Popup;
