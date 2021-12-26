import { useEffect, useState } from 'react';

const UserData = () => {
  const [quote, setQuote] = useState('');
  const [tempQuote, setTempQuote] = useState('');

  async function populateQuote() {
    const req = await fetch('http://localhost:5000/api/quote', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });

    const data = await req.json();
    if (data.status === 'ok') {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    populateQuote();
  }, []);

  async function updateQuote(event) {
    event.preventDefault();

    const req = await fetch('http://localhost:5000/api/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quote: tempQuote,
      }),
    });

    const data = await req.json();
    if (data.status === 'ok') {
      setQuote(tempQuote);
      setTempQuote('');
    } else {
      alert(data.error);
    }
  }

  return (
    <div>
      <h1>Your quote: {quote || 'No quote found'}</h1>
      <form onSubmit={updateQuote}>
        <input
          type="text"
          placeholder="Quote"
          value={tempQuote}
          onChange={(e) => setTempQuote(e.target.value)}
        />
        <input type="submit" value="Update quote" />
      </form>
    </div>
  );
};

export default UserData;

// const UserData = () => {
//   return ( <div>u</div> );
// }

// export default UserData;
