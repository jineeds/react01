// 연습장
// 사용자 정의 훅 => 함수
// use+사용자명 (이렇게 쓰임 함수명임.)

import { useState } from 'react';

// 재사용할떄 많이 쓰임
export const useCounter = (init = 10) => {
  // 초기값, 함수 정의
  // 여기서 만든 값은 다 내보내기 가능함.
  const [state, setState] = useState(init);
  const onUp = () => setCnt(state + 1);
  const onDown = () => setCnt(state - 1);
  return {
    state,
    onUp,
    onDown,
    setState,
  };
};
