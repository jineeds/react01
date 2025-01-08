import { useRef, useState } from 'react';
const dataList = [
  { id: 1, text: '송혜교' },
  { id: 2, text: '홍길동' },
  { id: 3, text: '강호동' },
  { id: 4, text: '유재석' },
  { id: 5, text: '전지현' },
];
const Test3 = () => {
  const [data, setData] = useState(dataList);
  //uuid 설치 - 고유번호
  const no = useRef(data.length + 1);
  //삭제
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  //추가
  const onAdd1 = (name) => {
    setData([
      ...data,
      {
        id: no.current++,
        text: name,
      },
    ]);
  };
  const onAdd = (text) => {
    setData([
      ...data,
      {
        id: no.current++,
        text,
      },
    ]);
  };
  //수정
  const onEdit = (id) => {
    setData(
      data.map((item) => {
        //함수 {} 안에는 반드시 return 이 필수
        if (item.id === id) {
          //변경
          return {
            ...item,
            text: '전지현',
          };
        } else {
          return item;
        }
      })
    );
  };

  // 수정 - 삼항연산자
  const onMod = (id) => {
    setData(data.map((item) => (item.id === id ? { ...item, text: '가나다' } : item)));
  };
  return (
    <div>
      <h2> 삭제, 추가, 수정 암기 </h2>
      <h3> 삭제 </h3>
      <p>
        <button onClick={() => onDel(1)}>1번</button>
        <button onClick={() => onDel(2)}>2번</button>
        <button onClick={() => onDel(3)}>3번</button>
      </p>
      <hr />
      <h3> 추가 </h3>
      <p>
        <button onClick={() => onAdd('임수정')}>임수정</button>
        <button onClick={() => onAdd('박연진')}>박연진</button>
        <button onClick={() => onAdd('이도현')}>이도현</button>
      </p>
      <hr />
      <h3> 수정 </h3>
      <p>
        <button onClick={() => onEdit(1)}>1번 수정</button>
        <button onClick={() => onEdit(2)}>2번 수정</button>
      </p>
      <hr />
      <h3> 출력 </h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}/{item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Test3;
