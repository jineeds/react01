import { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {
  const [data, setData] = useState([]);

  /*비동처리, 시간, props, state에 의해 업데이트 : useEffect
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((json) => setData(json));
    },[]);*/

  /*useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => setData(res.data));
  },[]);*/

  //   useEffect(() => {}, []);

  //   useEffect(() => {
  //     const getData = () => {};
  //     getData();
  //   }, []);

  /*useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await res.json();
      setData(json);
    };
    getData();
  }, []);*/

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get();
      setData(res.data);
    };
    getData();
  }, []);

  // +예외처리 필수

  return (
    <div>
      <ul>
        {data &&
          data.length !== 0 &&
          data.map((item) => (
            <li key={item.id}>
              {item.id}/{item.title}
              {/* 넘버/내용 */}
            </li>
          ))}
        {/* 데이터가 존재하면(&&) 데이터length가 0이 아니면 처리하고 맵처리?*/}
      </ul>
    </div>
  );
};

export default Test1;
