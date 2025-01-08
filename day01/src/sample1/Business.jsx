import BusinessList from './BusinessList';
import data from '../assets/api/busiData';
// import 사용자명 from "./컴포넌트경로, 파일명"
import './style.scss';

const Business = () => {
  return (
    <>
      <section className="business">
        <div className="inner">
          <h2>BUSINESS</h2>
          <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

          <BusinessList data={data} />

          <p className="more">
            <a href="#">View More</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Business;
