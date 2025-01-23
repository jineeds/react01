import { useNavigate, useParams } from 'react-router-dom';
import data from './data';

const Project = () => {
  const { name } = useParams();
  const Navigate = useNavigate();
  console.log(name);
  //   뒤로가기 설정
  const onGO = () => {
    //Navigate('path', 1, 2, -1, -2)
    Navigate('/profile');
    //Navigate(-1);
    //Navigate('/');
  };
  return (
    <div>
      <h2> Project page </h2>
      {data
        .filter((item) => item.title === name)
        .map((item) => (
          <div key={item.id}>
            <h3>타이틀 : {item.title}</h3>
            <h3>인포 : {item.info}</h3>
          </div>
        ))}
      {/* <div>
        <h3>타이틀</h3>
        <h3>인포</h3>
      </div> */}
      <button onClick={onGO}>뒤로가기</button>
    </div>
  );
};

export default Project;
