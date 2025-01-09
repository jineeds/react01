import { useEffect, useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';

import './style.scss';

// 추가와 수정 컴포넌트를 두개로 만들 때 관리

const dataList = [
  { id: 1, name: '가', addr: '서울' },
  { id: 2, name: '나', addr: '중국' },
  { id: 3, name: '다', addr: '미국' },
  { id: 4, name: '라', addr: '영국' },
  { id: 5, name: '마', addr: '일본' },
];

const Customer = () => {
  // const [data, setData] = useState(dataList);
  //   밑에 중요 정보처리!!!
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || dataList);
  const [isEdit, setEdit] = useState(false);
  const [current, setCurrent] = useState();
  //   고유번호
  const no = useRef(data.length + 1);
  // 삭제 ★filter
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  //   추가
  const onAdd = (user) => {
    // setData{[...data, {id : no.current++, name:user.name, addr:user.addr}]}\
    setData([...data, { id: no.current++, ...user }]);
  };
  //   user.id=no.current++ setData([...data, user])

  // 수정

  const onEdit = (user) => {
    setEdit(true);
    // setEdit(!isEdit);
    setCurrent(user);
  };
  // 수정내용 업데이트
  const onUpdate = (user) => {
    setEdit(false);
    setData(data.map((item) => (item.id === user.id ? user : item)));
  };

  //   업데이트 데이터 저장처리
  useEffect(() => {
    // localStorage.setItem('KEY', '값-문자형식');
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <div className="Customer">
      {/* <EditUser /> */}
      {isEdit ? <EditUser current={current} onUpdate={onUpdate} setEdit={setEdit} /> : <AddUser onAdd={onAdd} />}
      {/* <AddUser onAdd={onAdd} /> */}
      <ListUser data={data} onDel={onDel} onEdit={onEdit} />
    </div>
  );
};

export default Customer;
