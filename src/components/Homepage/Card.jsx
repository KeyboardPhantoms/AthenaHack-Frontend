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
          src={item.image}
          alt=""
          width="135"
          height="180"
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
