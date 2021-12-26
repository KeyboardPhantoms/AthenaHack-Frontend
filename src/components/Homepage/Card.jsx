const Card = ({ item, price, beforePrice, discount }) => {
  return (
    <div
      style={{
        marginTop: '2rem',
        padding: '1rem 0rem 1rem 0rem',
        background: '#fff',
        width: '12rem',
        borderRadius: '1rem',
        textAlign: 'center',
        color: '#000',
        position: 'relative',
        marginRight: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <div>
        <div
          style={{
            position: 'absolute',
            right: '0',
            color: '#fff',
            fontWeight: '700',
            background: 'red',
            borderRadius: '50%',
            width: '2.5rem',
            lineHeight: '2.5rem',
          }}
        >
          {discount}
        </div>
        <img src={item.image} alt="" width="135" height="180" />
      </div>
      <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>{item.name}</div>
      <div style={{ fontWeight: '500' }}>
        <strike>{beforePrice}</strike>&nbsp;
        <span style={{ color: '#bc3232' }}>{price}</span>
      </div>
      <div style={{ fontWeight: '500' }}>{item.author}</div>
      <div
        style={{
          fontWeight: '500',
          //background: '#B82051',
          marginLeft: '1rem',
          marginTop: '0.5rem',
          width: '10rem',
          lineHeight: '1.5rem',
          borderRadius: '1rem',
          //color: '#fff',
        }}
      >
        {item.genre}
      </div>
      <div
        onClick={() => console.log('button clicked')}
        style={{
          fontWeight: '500',
          background: '#33C8E2',
          marginLeft: '1rem',
          marginTop: '0.75rem',
          width: '10rem',
          lineHeight: '1.5rem',
          borderRadius: '1rem',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Buy Now!
      </div>
    </div>
  );
};

export default Card;
