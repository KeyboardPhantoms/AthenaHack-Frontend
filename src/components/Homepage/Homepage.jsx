import data from '../../data';
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
            style={{ borderRadius: '1rem' }}
          />
        </div>
        <div>
          <div
            style={{ fontSize: '4rem', fontWeight: '700', marginTop: '1rem' }}
          >
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

        {/* books */}
        <div style={{ padding: '1rem 0rem 1rem 0rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>
            Set of 10 books @just ₹499! SALE! SALE! SALE!
          </div>
          <div></div>
        </div>

        {/* rent books */}
        <div style={{ padding: '1rem 0rem 1rem 0rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>
            Rent any book @just ₹99 a month!
          </div>
          <div>
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
                  item={item}
                  price="₹99"
                  beforePrice="₹149"
                  discount="50%"
                />
              );
            })}
          </div>
        </div>

        {/* buy book */}
        <div style={{ padding: '1rem 0rem 1rem 0rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>
            Buy any book @just ₹399!
          </div>
          <div>
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
                  item={item}
                  price="₹399"
                  beforePrice="₹499"
                  discount="20%"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
