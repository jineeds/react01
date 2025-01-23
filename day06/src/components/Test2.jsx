import axios from 'axios';
import { useEffect, useState } from 'react';

const Test2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(true);
        setError(null);
      })
      .catch((e) => {
        setData([]);
        setLoading(false);
        setError('주소를 찾을 수 없다.');
      })
      .finally();
  });
  return (
    <div>
      {loading && data.length === 0 && <h2>로딩중...</h2>}
      {loading &&
        data.length > 0 &&
        data.map((item) => (
          <p key={item.id}>
            {item.id} /{item.title}
          </p>
        ))}
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default Test2;
