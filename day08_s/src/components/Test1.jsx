import styles from './Test1.module.css';

const Test1 = () => {
  return (
    <div className={styles.box}>
      <article>1</article>
      <article>2</article>
      <article>3</article>
    </div>
  );
};

export default Test1;

/* 파일명.module.css 
import styles from './파일명.module.css'; 
<태그 className={사용자정의명.클래스}>콘텐츠</태그>;


1. 유지보수 할떄 많이 사용한다. css의 중복이름을 피하기 위해서
2. 처음부터 클래스명의 중복떄문에 작성하는 사람도 많다.
클래스명 안에는 태그명 가능
클래스명 안에는 클래스를 사용할 수 없다.
공식홈페이지 : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

f12 -> 개발모드 확인할 때 [filename]\_[classname]\_\_[hash].
*/
