import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

//  https://jsonplaceholder.typicode.com/todos
const Test1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //   useEffect => props가 변경될때 또는 state 변경, 시간(settime,setout?), 초기 비어있는 값 체크, 비동기 처리시 필수로 사용해야함.
  //   *한번만 처리
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const getData = async () => {
      try {
        // 코드 실행
        const res = await axios.get(url);
        setData(res.data);
        setLoading(true);
        setError(null);
      } catch (e) {
        // 에러 핸들링
        setError(e);
        setLoading(false);
      } finally {
        // 항상실행 (무조건적으로!!!)
        setLoading(false);
      }
    };
    getData();
  }, []);
  // 함수
  if (loading)
    return (
      <div>
        <h2>로딩중...</h2>
      </div>
    );
  if (error)
    return (
      <div>
        <h2>주소를 찾을 수 없음...</h2>
      </div>
    );

  //   return 안에는 jsx 영역
  if (data.length > 0)
    return (
      <div>
        <h2>비동기</h2>
        {data.map((item) => (
          <p key={item.id}>
            {item.id} /{item.title}
          </p>
        ))}
      </div>
    );
};

export default Test1;
