const Step2 = ({ user, changeInput, onNext, onPrev }) => {
  // 구조분해
  const { job, email, gender, inter } = user;
  return (
    <>
      <p>
        <label htmlFor="">직업</label>
        <input type="text" name="job" value={job} id="" onChange={changeInput} />
      </p>
      <p>
        <label htmlFor="">이메일</label>
        <input type="text" name="email" value={email} id="" onChange={changeInput} />
      </p>
      <p>
        <label htmlFor="">성별</label>
        <input type="text" name="gender" value={gender} id="" onChange={changeInput} />
      </p>
      <p>
        <label htmlFor="">관심분야</label>
        <input type="text" name="inter" value={inter} id="" onChange={changeInput} />
      </p>
      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
};

export default Step2;
