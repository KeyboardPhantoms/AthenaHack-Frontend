import { Link } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '1.5rem',
        color: '#fff !imp',
        height: '10vh',
        textDecoration: 'none',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'wheat',
          fontSize: '2rem',
          fontWeight: '700',
        }}
      >
        {/* <img
          src={logo}
          alt="logo"
          width="50"
          height="50"
          style={{ marginTop: '1rem' }}
        />
        &nbsp; */}
        Bookie Bits
      </Link>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '3rem' }}>
          <Link
            to="/register"
            style={{
              textDecoration: 'none',
              color: 'wheat',
              fontSize: '2rem',
              fontWeight: '700',
            }}
          >
            Login/Register
          </Link>
        </div>
        <div>
          <Link
            to="/about"
            style={{
              textDecoration: 'none',
              color: 'wheat',
              fontSize: '2rem',
              fontWeight: '700',
            }}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
