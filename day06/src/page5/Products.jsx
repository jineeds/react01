import { Link } from 'react-router-dom';
import data from './data';

const Products = () => {
  //   const { id, name, photo } = item;
  //   const navigate = useNavigate();
  //   const onGo = () => {
  //     navigate(`/Products/${id}`);
  //   };
  return (
    <div className="proList">
      <div className="inner">
        <div className="products">
          <h2> 운동화 제품 리스트 </h2>
          <div>
            {data.map((item) => (
              <article key={item.id}>
                <Link to={`/Products/${item.id}`}>
                  <h3>{item.name}</h3>
                  <p>
                    <img src={item.photo} alt={item.name} />
                  </p>
                </Link>
              </article>
            ))}
            {/* <article>
              <a>
                <h3>xx</h3>
                <p>
                  <img src="" alt="" />
                </p>
              </a>
            </article> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
