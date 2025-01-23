import styled from 'styled-components';

const HomeCon = styled.div`
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  button {
    width: 150px;
    height: 50px;
    cursor: pointer;
  }
`;

const Home = () => {
  return (
    <HomeCon style={{ textAlign: 'left', height: 800 }}>
      <div className="inner">
        <h2> Home Page입니다.</h2>
      </div>
    </HomeCon>
  );
};

export default Home;
