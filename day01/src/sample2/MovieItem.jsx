const MovieItem = () => {
  // 구조분해
  const { actor, date, director, id, imgurl, title } = item;
  return (
    <article>
      <div className="left">
        <img src={imgurl} alt="{title}" />
      </div>
      <div className="rigth">
        <h3>{title}</h3>
        <ul>
          <li>출연진 : {director}</li>
          <hr />
          <li>감독 : {director}</li>
          <hr />
          <li>개봉일 : {date}</li>
        </ul>
        <button onClick={() => onDel(1)}>삭제</button>
      </div>
    </article>
  );
};

export default MovieItem;
