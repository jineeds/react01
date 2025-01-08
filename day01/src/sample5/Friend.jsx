import { useRef, useState } from 'react';
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import dataList from './friendData';
import './style.css';

const Friend = () => {
  const [data, setData] = useState(dataList);
  const [isShow, setIsShow] = useState(false);
  //   const no = useRf(data.length + 1);
  const no = useRef(data.length + 1);
  // 삭제 filter
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  //   모두삭제
  const onAllDel = () => {
    setData([]);
  };
  //   모두복구
  const onResore = () => {
    setData(dataList);
  };

  //   추가(등록)
  //   const onAdd = (name, age, image) => {
  //     setData([...data, { id: no.current++, name, age, image }]);
  //   };

  const onAdd1 = (name, age, image) => {
    setData([...data, { id: no.current++, name, age, image }]);
  };
  // ?? 고민 => input => 15개?
  const onAdd = (obj) => {
    obj.id = no.current++;
    console.log(obj);
    setData([...data, obj]);
  };

  const changeInput = (e) => {
    const { checked } = e.target;
    setIsShow(checked);
  };

  return (
    <div className="wrap">
      <h1>친구들 총인원 :</h1>
      <p className="chk">
        <input type="checkbox" checked={isShow} onChange={changeInput} />
        <span>추가</span>
      </p>
      <FriendList data={data} onDel={onDel} />
      <p className="btn">
        <button onClick={onAllDel}>모두 삭제</button>
        <button onClick={onResore}>초기 복구</button>
      </p>
      {isShow && <FriendInput onAdd={onAdd} />}
      {/* <FriendInput onAdd={onAdd} /> */}
    </div>
  );
};

export default Friend;
