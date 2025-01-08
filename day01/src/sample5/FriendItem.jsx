const FriendItem = ({ item, onDel }) => {
  const { id, name, age, image } = item;
  return (
    <li>
      <p>
        <img src={image} alt={name} />
      </p>
      <div>
        <strong>이름 : {name}</strong>
        <span>나이 : {age}</span>
      </div>
      <button onClick={() => onDel(item.id)}>삭제</button>
    </li>
  );
};

export default FriendItem;
