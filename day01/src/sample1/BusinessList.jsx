import Businessltem from './Businessltem';

const BusinessList = ({ data }) => {
  return (
    <>
      <ul className="list">
        {data.map((item) => (
          <Businessltem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default BusinessList;
