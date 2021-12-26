const Features = () => {
  return (
    <>
      {/* features */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '22%',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <img
              src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt234df6e6b520e8c8/5eec6fff7253820a4364e1fe/ic-thumbs-up.svg"
              alt="flexible booking"
              width="40"
              height="40"
            />
          </div>
          <div
            style={{
              marginBottom: '0.5rem',
              fontWeight: '500',
              fontSize: '1.25rem',
            }}
          >
            Flexible Booking
          </div>
          <div style={{ color: '#63687A' }}>
            With free cancellation up to 24 hours before your activity, there’s
            always room for a change of plans.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '22%',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <img
              src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt56797084b4e2d295/5e6bb7d58c83c26c32eb0bfa/icon-duration.svg"
              alt="flexible booking"
              width="40"
              height="40"
            />
          </div>
          <div
            style={{
              marginBottom: '0.5rem',
              fontWeight: '500',
              fontSize: '1.25rem',
            }}
          >
            Quality experiences
          </div>
          <div style={{ color: '#63687A' }}>
            Read millions of unfiltered reviews from GetYourGuide travelers to
            help you find the best activities.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '22%',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <img
              src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt054c706d0acb19ee/5e6bb7e5b163ab6cedfa1c6d/icon-heart.svg"
              alt="flexible booking"
              width="40"
              height="40"
            />
          </div>
          <div
            style={{
              marginBottom: '0.5rem',
              fontWeight: '500',
              fontSize: '1.25rem',
            }}
          >
            Convenient support
          </div>
          <div style={{ color: '#63687A' }}>
            We’re here 24/7 to make your experience unforgettable, whether it’s
            by phone, email, or WhatsApp.
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
