import { MelonForm, MelonList } from '../../components';
import { MelonContainer } from './style';
import { useDispatch, useSelector } from 'react-redux';

const Music = () => {
  // 컴포넌트 뮤직파일
  return (
    <MelonContainer>
      <div className="inner">
        <h3> xxx </h3>
        <MelonForm />
        <MelonList />
        {/* <MelonModal />  */}
      </div>
    </MelonContainer>
  );
};

export default Music;
