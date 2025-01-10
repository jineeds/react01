import { useEffect, useState } from 'react';

// 배열객체 생성
const dataList = [
  { id: 1, text: '홍길동', addr: '서울' },
  { id: 2, text: 'bora', addr: '미국' },
  { id: 3, text: '뚜비', addr: '일본' },
  { id: 4, text: 'nana', addr: '일본' },
  { id: 5, text: '뽀', addr: '스웨덴' },
  { id: 6, text: 'sunshine', addr: '태국' },
  { id: 7, text: '권지용', addr: '한국' },
  { id: 8, text: 'NANA', addr: '한국' },
  { id: 9, text: 'RARA', addr: '이집트' },
  { id: 10, text: 'rara', addr: '이집트' },
];

const Test3 = () => {
  const [data, setData] = useState(dataList);
  const [text, setText] = useState('');

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };
  // 검색했을 때 값이 나오게 함
  const onSearch = () => {
    // setData(data.filter((item) => item.text.indexOf(text) !== -1)); 소문자 / 대문자 구별해서 검색이 됨
    setData(data.filter((item) => item.text.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) !== -1));
    // 대소문자 상관없이 모두다 구별되어서 검색이됨. toLocalelowerCase()

    setData(data.filter((item) => item.text.toLowerCase().includes(text.toLowerCase())));
  };
  // 바로 위에꺼랑 비교해서 사용하기

  // indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환합니다.
  // setData(data.filter((item) => item.addr.indexOf(text) !== -1));

  // 실시간 검색
  // 한글은 초성때문에 문제가 생기는데 이건 해결하려 하지 않고 sql에서 해결 가능하니까 sql로 해야함. 여기서 안됨
  useEffect(() => {
    setData(dataList.filter((item) => item.text.toLowerCase().includes(text.toLowerCase())));
  }, [text]);

  // setData(여기에 data라고만 들어가면 실시간 검색이 안됨.filter((item) => item.text.toLowerCase().includes(text.toLowerCase())));
  // 검색된 데이터 내역에서 또 검색하자니 없는 결과값으로 나오니 data가 아닌 datalist로 영역을 잡아줌

  return (
    <div>
      <p>
        <input type="text" value={text} onChange={changeInput} />
        <button onClick={onSearch}>검색</button>
      </p>
      <input type="text" />
      <hr />
      <ul>
        {data.map(({ id, text, addr }) => (
          <li key={id}>
            {id} / {text} /{addr}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test3;
