import { useState } from 'react';

// 배열객체 생성
const dataList = [
  { id: 1, text: '홍길동', addr: '서울' },
  { id: 2, text: '보라돌이', addr: '미국' },
  { id: 3, text: '뚜비', addr: '일본' },
  { id: 4, text: '나나', addr: '프랑스' },
  { id: 5, text: '뽀', addr: '스웨덴' },
  { id: 6, text: '햇님', addr: '태국' },
];

const Test2 = () => {
  const [data, setData] = useState(dataList);

  const changeInput1 = (e) => {
    const { value } = e.target;
    // 넘버 순서대로 정렬
    if (value === 'id') {
      setData(
        // sort는 원본이 변하기 때문에 ...data로 표시해야함?
        [...data].sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          } else {
            return 0;
          }
        })
      );
    }

    //   if (value === 'text') {
    //     setData([...data].sort((a, b) => a.text - b.text));
    //   }
    // };
    // 이름별 정렬
    if (value === 'text') {
      setData([...data].sort((a, b) => (a.text > b.text ? 1 : -1)));
    }
    // sort는 원본을 건드리기때문에 무조건 [...data] 이렇게 복제본을 만들어서 사용해주어야한다.
    // end if
    if (value === 'addr') {
      setData([...data].sort((a, b) => (a.addr > b.addr ? 1 : -1)));
    }
  };

  // 객체.키, 객체['키']
  const changeInput = (e) => {
    const { value } = e.target;
    // if value 값이 ''아닐때
    if (value !== '') {
      setData([...data].sort((a, b) => (a[value] > b[value] ? 1 : -1)));
    }
  };
  return (
    <div>
      <div>
        <select onChange={changeInput}>
          <option value="">===정렬===</option>
          <option value="id">번호</option>
          <option value="text">이름</option>
          <option value="addr">주소</option>
        </select>
      </div>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text} /{item.addr}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test2;
