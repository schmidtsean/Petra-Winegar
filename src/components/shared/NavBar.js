import { Image, Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import CandR from '../images/CandR.jpeg';
import { Img, Center } from '../styles/NavbarStyle';
const Navbar = () => {
  return (
    <Center>
    <Img src={CandR} />
    <Menu>
      <Link to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
      <Link to="/about">
        <Menu.Item>
          About Me
        </Menu.Item>
      </Link>
      <Link to="/mortgagecalculator">
        <Menu.Item>
          Mortgage Calculator
        </Menu.Item>
      </Link>
    </Menu>
    </Center>
  )
}

export default withRouter(Navbar);