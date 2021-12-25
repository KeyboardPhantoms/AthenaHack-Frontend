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
        color: '#fff',
        height: '10vh',
        textDecoration: 'none',
      }}
    >
      <Link to="/" style={{textDecoration: 'none'}}>Bookie Bits
        <img
          src={logo}
          alt="logo"
          width="70"
          height="70"
          style={{ borderRadius: '50%' }}
        />
      </Link>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '3rem' }}>
          <Link to="/login" style={{textDecoration: 'none' }}>Login</Link>
        </div>
        <div>
          <Link to="/about" style={{textDecoration: 'none' }}>About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;