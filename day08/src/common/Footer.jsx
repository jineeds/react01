import styled from 'styled-components';

const FooterCon = styled.footer`
  background: #000;
  width: 100%;
  border-top: 2px solid #000;
  color: #fff;
  .inner {
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <FooterCon>
      <div className="inner">
        <address>서울시 서초동</address>
      </div>
    </FooterCon>
  );
};

export default Footer;
