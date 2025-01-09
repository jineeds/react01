import Itemuser from './Itemuser';

const ListUser = ({ data, onDel, onEdit }) => {
  return (
    <div>
      <h2 className="users">출연진 리스트</h2>
      <table>
        <colgroup>
          <col className="w1" />
          <col className="w2" />
          <col className="w3" />
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Itemuser key={item.id} item={item} onDel={onDel} onEdit={onEdit} />
          ))}
          {/*             
          <Itemuser /> */}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
