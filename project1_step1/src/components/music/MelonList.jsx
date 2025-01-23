import { useDispatch, useSelector } from 'react-redux';
import { MelonListContainer } from './style';
import MelonItem from './MelonItem';
import { useEffect } from 'react';
import { getMusic } from '../../store/modules/getThunk';

const MelonList = () => {
  const { musicData } = useSelector((state) => state.musicR);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMusic());
  }, []);
  return (
    <MelonListContainer className="MelonList">
      <table>
        <colgroup>
          <col className="w1" />
          <col className="w2" />
          <col className="w3" />
          <col className="w4" />
          <col className="w5" />
          <col className="w6" />
          <col className="w7" />
        </colgroup>
        <thead>
          <tr>
            <th>순위</th>
            <th>곡(가수)</th>
            <th>앨범</th>
            <th>좋아요</th>
            <th>동영상</th>
            <th>상승/하락</th>
            <th>관심</th>
          </tr>
        </thead>
        <tbody>
          {musicData.map((item) => (
            <MelonItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </MelonListContainer>
  );
};

export default MelonList;
