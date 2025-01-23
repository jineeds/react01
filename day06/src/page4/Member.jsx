import { Link, useNavigate } from 'react-router-dom';

const Member = ({ item }) => {
  const { id, name, email } = item;
  const navigatie = useNavigate();
  const onGo = () => {
    navigatie(`/member/${id}`);
  };
  const css = {
    border: '1px solid tomato',
    padding: 20,
    margin: 20,
  };

  return (
    <div style={css}>
      <p>ID : {id}번</p>
      <p>이름 : {name}</p>
      <p>이메일 : {email}</p>
      <br />
      <hr />
      <p>
        <Link to={`/member/${id}`}>상세페이지</Link>
      </p>
      <p>
        <button>바로가기</button>
        {/* 바로가기 누르면 멤버 디테일 넘길것 */}
      </p>
    </div>
  );
};

export default Member;
