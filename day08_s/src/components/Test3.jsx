import styled from 'styled-components';

const ConBox = styled.div`
  width: 500px;
  border: 1px solid #000;
  margin: auto;
  h2 {
    font-size: 30px;
  }
`;
const Box1 = styled.article`
  width: 100%;
  padding: 10px 0;
  background-color: blue;
  transition: 0.3s;
  margin-bottom: 10px;
  &:hover {
    background-color: yellow;
  }
`;
const Box2 = styled.section``;
const Box3 = styled('div')``;

const Button = styled.button``;

const Test3 = () => {
  return (
    <ConBox>
      <h2>타이틀 태그</h2>
      <Box1>xx</Box1>
      <Box2>xxx</Box2>
      <Box3>xxxx</Box3>
      <Button>하2루</Button>
    </ConBox>
  );
};

export default Test3;

/**
 * const 스타일 컴포넌트 = styled.태그 ``
 *  const 스타일 컴포넌트 = styled('태그') ``
 */
