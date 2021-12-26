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

const Card = ({ item, price, beforePrice, discount }) => {
  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const data = await fetch(
      'https://razorpay-hackathon-backend.herokuapp.com/razorpay',
      {
        method: 'POST',
      }
    ).then((t) => t.json());

    console.log('dataaa', data);

    const options = {
      key: 'rzp_test_7NFjEzrn3WQR0c',
      currency: data.currency,
      amount: price.toString(),
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
        name: '',
        email: '',
        phone_number: '',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
        justifyContent: 'space-between',
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
          background: '#B82051',
          marginLeft: '1rem',
          marginTop: '0.5rem',
          width: '10rem',
          lineHeight: '1.5rem',
          borderRadius: '1rem',
          color: '#fff',
        }}
      >
        {item.genre}
      </div>
      <div
        onClick={displayRazorpay}
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
