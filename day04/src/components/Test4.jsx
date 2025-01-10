import { useState } from 'react';

const dataList = [
  { id: 1, name: 'chk2', text: '(필수) 종합계좌약관', isChk: false },
  { id: 2, name: 'chk3', text: '(필수) 미니 금고 서비스 이용약관', isChk: false },
  { id: 3, name: 'chk4', text: '(필수) 금융거래 필수 확인서', isChk: false },
  { id: 4, name: 'chk5', text: ' 이벤트 뉴스 알림 받기', isChk: false },
];

const Test4 = () => {
  const [data, setData] = useState(dataList);

  const changeInput = (e) => {
    const { checked, name } = e.target;
    if (name === 'all') {
      setData(data.map((item) => ({ ...item, isChk: checked })));
    } else {
      setData(data.map((item) => (item.name === name ? { ...item, isChk: checked } : item)));
      // 내가 선택한 애들만 값을 넘기고 그렇지 않은 애들은 그냥 무시해 이런 뜻?
      // 아무튼 개별체크 되도록 활성화 해준 것!
    }
  };
  // 체크했을때 전체선택 또는 전체해제

  // 위 내용 :  name이 트루면 모두 다 체크하도록 해!

  return (
    <div>
      <p>
        <input
          type="checkbox"
          name="all"
          id=""
          onChange={changeInput}
          checked={data.filter((item) => item.isChk !== true).length < 1}
        />
        <label htmlFor="">약관 전체 동의</label>
      </p>
      <hr />
      {/* map 활용 */}
      {data.map((item) => (
        <p>
          <input type="checkbox" name={item.name} id="" checked={item.isChk} onChange={changeInput} />
          <label htmlFor="">{item.text}</label>
        </p>
      ))}
    </div>
  );
};

// 이 밑에 내용을 위에처럼 map으로 함축해서 적용시킴! 복습해서 이해하도록
//   return (
//     // <div>
//       {/* <p>
//         <input type="checkbox" name="all" id="" onChange={changeInput} />
//         <label htmlFor="">약관 전체 동의</label>
//       </p>
//       <hr /> */}

//       {/* <p>
//         <input type="checkbox" name={data[0].name} id="" checked={data[0].isChk} onChange={changeInput} />
//         <label htmlFor="">(필수) 종합계좌약관</label>
//       </p>
//       <p>
//         <input type="checkbox" name={data[1].name} id="" checked={data[1].isChk} onChange={changeInput} />
//         <label htmlFor="">(필수) 미니 금고 서비스 이용약관</label>
//       </p>
//       <p>
//         <input type="checkbox" name={data[2].name} id="" checked={data[2].isChk} onChange={changeInput} />
//         <label htmlFor="">(필수) 금융거래 필수 확인서</label>
//       </p>
//       <p>
//         <input type="checkbox" name={data[3].name} id="" checked={data[3].isChk} onChange={changeInput} />
//         <label htmlFor=""> 이벤트 뉴스 알림 받기 </label>
//       </p> */}
//     {/* </div> */}
//   );
// };
export default Test4;
