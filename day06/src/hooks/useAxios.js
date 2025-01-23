import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (initVal = '') => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(initVal)
      .then((res) => {
        setState(res.data);
        setLoading(true);
        setError(null);
      })
      .catch((e) => {
        setState([]);
        setLoading(false);
        setError('주소를 찾을 수 없다.');
      });
  }, [initVal]);
  return { state, setState, loading, error };
};
//git에서 customer hook 검색
