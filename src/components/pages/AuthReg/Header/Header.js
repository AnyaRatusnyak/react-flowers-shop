import { Link } from 'react-router-dom';

import homeIcon from '../../../../assets/img/homeIcon.svg'

import './Header.css'

function Header({ type }) {

  return (
    <div className="Header">
      <Link to='/'>
        <div className='BackToHome'>
          <img src={homeIcon} alt='homeIcon' />
          <div className='txtB'>Back to home</div>
        </div>
      </Link>

      <div className="h1" style={{ marginTop: type === 'reg' ? 30 : 33 }}>{type === 'reg' ? 'Register' : 'Login'}
      </div>
      <div className='h2'>{type === 'reg' ? 'Register and help us help you' : 'Login and have more fun'}
      </div>
    </div>
  );
}

export default Header;