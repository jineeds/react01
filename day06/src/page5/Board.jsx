import { useAxios } from '../hooks/useAxios';
import BoardList from './Board.List';
import BoardPaging from './BoardPaging';

/*
posts : 데이터 , 
postsPerPage = 페이지에 보여줄 개수
currentPage = 현재 페이지
firstPost = 0, 10, 20 ..  시작번호
lastPost  =10, 20, 30,  - 끝번호
postMod = 한페이지에 보여줄개수  -> 남은개수 
                     115개 데이터가 있으면 10개씩 보여줄때 남은 데이터가 5개

pageNumber  = 페이징의 a의 개수 
http://61.107.76.13/Li/04_25.html
*/

const Board = () => {
  const url = `https://jsonplaceholder.typicode.com/posts/`;
  //   url은 위에서 정의해야지 받아 볼러옴.
  const { state: data, setState, loading, error } = useAxios(url);

  //   console.log(typeof productID);

  return (
    <div className="board">
      <div className="inner">
        <h2>운동화 게시판 </h2>

        <table>
          <caption>게시판</caption>
          <colgroup>
            <col className="id" />
            <col className="title" />
            <col className="body" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>타이틀</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data.map((item) => (
              <BoardList key={item.id} item={item} />
            ))}
          </tbody>
        </table>

        <p className="paging">
          <BoardPaging />
        </p>
      </div>
    </div>
  );
};

export default Board;
