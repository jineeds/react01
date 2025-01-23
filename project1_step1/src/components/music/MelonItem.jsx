import { FcLikePlaceholder, FcLike, FcVideoCall, FcUp, FcDown, FcMinus } from 'react-icons/fc';
import { PiVideoCamera } from 'react-icons/pi';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { GoHeart } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';

const MelonItem = ({ item }) => {
  const { title, album, singer, id, like, poster } = item;
  return (
    <tr>
      <td>{id}</td>
      <td className="img">
        <img src={poster} alt={title} width="60" />
        <p className="img">
          <span>{title}</span>
          {singer}
        </p>
      </td>
      <td>{album}</td>
      <td className="like">
        <i>
          <BiSolidLike />
          {/* <BiLike /> */}
        </i>
        {/* 정규표현식 : xxx.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') */}
        like : {like}
      </td>
      <td>
        <i>
          <PiVideoCamera />
        </i>
      </td>
      <td>
        <FcUp style={{ color: 'red' }} />
        {/* <FcMinus color="blue" /> 
                 <FcDown />  */}

        <span style={{ marginLeft: 10 }}>state</span>
      </td>
      <td className="like">
        <span>
          <i>
            {/* <FcLikePlaceholder /> */}
            <GoHeart />
            {/* <FcLike />  */}
          </i>
        </span>
      </td>
    </tr>
  );
};

export default MelonItem;
