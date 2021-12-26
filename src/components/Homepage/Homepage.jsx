import data from '../../data';
import Card from './Card';
import Features from './Features';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Homepage = () => {
  async function displayRazorpaySale() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const data = await fetch(
      'https://razorpay-hackathon-backend.herokuapp.com/razorpay/sale',
      {
        method: 'POST',
      }
    ).then((t) => t.json());


    const options = {
      key: 'rzp_test_7NFjEzrn3WQR0c',
      currency: data.currency,
      amount: 499,
      order_id: data.id,
      name: 'Order now',
      description: 'Thank you for time. Your order is on its way.',
      image: 'https://i.imgur.com/3g7nmJC.png',
      handler: function (response) {
        alert('Payment Successful');
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        method: 'upi',
        name: 'John Doe',
        email: 'abc@gmail.com',
        contact: '+919999999999',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const saleBook = data.slice(0, 10);
  return (
    <div>
      <div style={{ padding: '1rem 2rem 2rem 2rem' }}>
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
          {/* <div>
            <Link to="#buy">
              {' '}
              <button
                style={{
                  width: '10rem',
                  height: '3rem',
                  borderRadius: '1.5rem',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                }}
              >
                SHOP NOW!
              </button>
            </Link>
          </div> */}
        </div>

        <Features />

        {/* books */}
        <div style={{ padding: '1rem 0rem 1rem 0rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>
            Set of 10 books @just ₹499! SALE! SALE! SALE!
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: '2rem',
              width: '80rem',
              height: '27rem',
              color: '#000',
              padding: '1rem',
              marginTop: '1rem',
            }}
          >
            <div style={{ fontSize: '3rem', fontWeight: '700' }}>
              Set of 10 Books!
            </div>
            <div
              style={{ fontSize: '2rem', fontWeight: '600', color: '#1E5BB8' }}
            >
              (BRAND NEW) Set of 10 Books | Mixed Genres Mostly Fiction | FREE
              Bookmarks | FREE Delivery | Condition: NEW | Save 60%
            </div>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', color: '#606060' }}
            >
              {saleBook.map((item, index) => {
                return (
                  <h3 key={index} style={{ margin: '0.5rem' }}>
                    {index + 1}.{item.name}
                  </h3>
                );
              })}
            </div>
            <div
              onClick={displayRazorpaySale}
              style={{
                fontWeight: '500',
                background: '#33C8E2',
                marginLeft: '1rem',
                marginTop: '0.75rem',
                width: '15rem',
                lineHeight: '2.5rem',
                borderRadius: '1rem',
                color: '#fff',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              Buy Now!
            </div>
          </div>
        </div>

        {/* rent books */}
        <div style={{ padding: '1rem 0rem 1rem 0rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: '700' }}>
            Rent any book @just ₹99 a month!
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
                  item={item}
                  price="₹99"
                  beforePrice="₹149"
                  discount="50%"
                  type="Rent"
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
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
                  item={item}
                  price="₹399"
                  beforePrice="₹499"
                  discount="20%"
                  type="Buy"
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
