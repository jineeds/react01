import { useNavigate, useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';

const MemberDetail = () => {
  const { memberID } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${memberID}`;
  //   $제이슨형식 meberid 불러오는 방법
  const { state: data } = useAxios(url);
  //   console.log 어떤타입인지 콘솔로 확인함 = 문자로 확임된
  console.log(typeof memberID);
  //   const thisMember = data.find((item) => item.id === meberID);
  const { name, username, email, phone, website } = data;

  const navigatie = useNavigate();
  const onGo = () => {
    navigatie('/');
  };
  // const onBack = () => {
  //   navigatie('/-1');
  // };

  const css = {
    border: '1px solid skyblue',
    padding: 20,
    margin: 20,
    fontSize: 30,
  };

  return (
    <div style={css}>
      <p>회원번호: {memberID} 번 </p>
      <p>name: {name}</p>
      <p>username: {username}</p>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <p>website: {website}</p>
      <br />
      <br />
      <button onClick={onGo}>뒤로가기</button>
      {/* <button onClick={onBack}>첫페이지</button> */}
    </div>
  );
};

export default MemberDetail;
