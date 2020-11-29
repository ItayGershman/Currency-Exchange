import { Link } from 'react-router-dom';
import { HeaderFixed } from '../../styledComponents';
const Header = () => {
  return (
    <HeaderFixed>
      <Link to={'/'}>
        <img src='https://inboundjunction.com/wp-content/uploads/2018/03/logo.png'></img>
      </Link>
    </HeaderFixed>
  );
};

export default Header;
