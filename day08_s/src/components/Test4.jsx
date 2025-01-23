import styled, { css } from 'styled-components';
/* width:${props(모든속성받기) => props.속성} */
const ConBox = styled.div`
  width: ${(props) => props.ww};
  width: ${(props) => (props.ww ? props.ww : '400px')};
  border: 1px solid #000;
  background-color: ${(props) => (props.bg ? props.bg : 'yellow')};
  padding: 15px;
`;
const Box = styled.article`
  width: ${(props) => (props.width ? props.width : '100px')};
  background: ${(props) => (props.bg ? props.bg : 'skyblue')};
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background: 'blue';
  }
`;
const Button = styled.button`
  background-color: ${(props) => props.bg};
  width: 150px;
  height: 50px;
  ${(props) =>
    props.primary &&
    css`
      width: 200px;
      background: #000;
      color: #fff;
      &:hover {
        background: skyblue;
      }
    `}
`;
const Test4 = () => {
  return (
    <ConBox ww="600px" bg="pink">
      <Box width="120px" bg="yellow">
        test
      </Box>
      <Box bg="red">test</Box>
      <Box width="150px" bg="hotpink">
        test
      </Box>
      <Box width="160px">test</Box>
      <Button bg="pink">확인</Button>
      <Button primary>확인</Button>
    </ConBox>
  );
};
export default Test4;
