import Card from './Card';
import './Homepage.css';
const Homepage = () => {
  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0249/3857/8002/files/saurav_nanda_012_3_1800x.png?v=1633683660"
            width="1450"
            alt=""
          />
        </div>
        <div>
          <div style={{ fontSize: '4rem', fontWeight: '700' }}>
            An Ecommerce site to buy <br></br>and rent books.
          </div>
          <div>
            <button
              style={{
                width: '10rem',
                height: '3rem',
                borderRadius: '1.5rem',
                fontWeight: '700',
                fontSize: '1.2rem',
              }}
            >
              SHOP NOW!
            </button>
          </div>
        </div>
      </div>

      <div>
        <Card/>
      </div>



    </div>
  );
};

export default Homepage;
