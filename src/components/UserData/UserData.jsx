import { useEffect, useState } from 'react';

const UserData = () => {
  const [bookList, setBookList] = useState(['no book' ]);
  // const [tempQuote, setTempQuote] = useState('');

  async function populateQuote() {
    const req = await fetch('http://localhost:5000/api/book', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });

    const data = await req.json();
    if (data.status === 'ok') {
      setBookList(data.bookList);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    populateQuote();
  }, []);

  // async function updateBook(event) {
  //   event.preventDefault();

  //   const req = await fetch('http://localhost:5000/api/quote', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-access-token': localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({
  //       book: tempQuote,
  //     }),
  //   });

  //   const data = await req.json();
  //   if (data.status === 'ok') {
  //     setBookList(tempQuote);
  //     setTempQuote('');
  //   } else {
  //     alert(data.error);
  //   }
  // }

  return (
    <div>
      <h1>Your books: {bookList || 'No books! Please purchase some'}</h1>
      {bookList.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </div>
  );
};

export default UserData;

// const UserData = () => {
//   return ( <div>u</div> );
// }

// export default UserData;
