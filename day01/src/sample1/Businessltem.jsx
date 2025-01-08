const Businessltem = ({ item }) => {
  // 구조분해
  const { id, imgurl, kor, eng, desc } = item;

  return (
    <li>
      <a href="#">
        <div>{imgurl}</div>
        <h3>
          {kor}
          <span>{eng}</span>
        </h3>
        <p>{desc}</p>
      </a>
    </li>
  );
};

export default Businessltem;
