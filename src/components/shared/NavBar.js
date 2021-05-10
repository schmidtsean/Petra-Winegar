import { Image, Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import CandR from '../images/CandR.jpeg';
import { Img, Center, LinkItem, Links } from '../styles/NavbarStyle';
const Navbar = () => {
  return (
    <Center>
    <Img src={CandR} />
    <Menu>
      <LinkItem>
        <Links to="/">
          Home
        </Links>
      </LinkItem>
      <LinkItem>
        <Links to="/about">
          About Me
        </Links>
      </LinkItem>
      <LinkItem>
        <Links to="/mortgagecalculator" >
          Mortgage Calculator
        </Links>
      </LinkItem>

    </Menu>
    </Center>
  )
}

export default withRouter(Navbar);