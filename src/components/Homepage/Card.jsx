const Card = ({ item, price }) => {
  return (
    <div
      style={{
        marginTop: '2rem',
        padding: '1rem 0rem 2rem 0rem',
        background: '#fff',
        width: '12rem',
        borderRadius: '1rem',
        textAlign: 'center',
        color: '#000',
      }}
    >
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsSnT-G8xFU4-VJHwLxogDJfjRA1nmabC3wxHDfZR&usqp=CAE&s"
          alt=""
        />
      </div>
      <div style={{ fontSize: '1.25rem' }}>{item.name}</div>
      <div>{price}</div>
      <div>{item.author}</div>
      <div>{item.genre}</div>
    </div>
  );
};

export default Card;
