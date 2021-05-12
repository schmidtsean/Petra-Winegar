import { Link, withRouter } from 'react-router-dom';
import CandR from '../images/CandR.jpeg';
import { Img, Center, LinkItem, Links, ImgWrap, MenuWrap } from '../styles/NavbarStyle';
const Navbar = () => {
  return (
    <Center>
      <ImgWrap>
        <Img src={CandR} />
      </ImgWrap>
      
      <MenuWrap>
        <LinkItem>
          <Links to="/">
            Home
          </Links>
        </LinkItem>
        <LinkItem>
          <Links to="/about">
            About
          </Links>
        </LinkItem>
        <LinkItem>
          <Links to="/mortgagecalculator" >
            Calculator
          </Links>
        </LinkItem>
      </MenuWrap>
    </Center>
  )
}

export default withRouter(Navbar);