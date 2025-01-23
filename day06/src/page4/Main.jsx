import { useAxios } from '../hooks/useAxios';
import Member from './Member';

const Main = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const { state: data, setState, loading, error } = useAxios(url);

  return (
    <div>
      <h2> 회원수 : {data.length} 명 </h2>
      {data && loading && data.length > 0 && data.map((item) => <Member key={item.id} item={item} />)}
    </div>
  );
};

export default Main;
