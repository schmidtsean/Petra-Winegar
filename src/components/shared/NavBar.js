import { Link, withRouter } from 'react-router-dom';
import CandR from '../images/CandR.jpeg';
import { Img, NavDiv, LinkItem, Links, ImgWrap, MenuWrap, TopNav } from '../styles/NavbarStyle';
import { Menu, Image, Input } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <>
    {/* <NavDiv>
      <ImgWrap>
        <Img src={CandR} />
      </ImgWrap>
      
      <MenuWrap position='right'>
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
    </NavDiv> */}
    <Menu secondary style={{height: '100px', backgroundColor: '#400D32'}}>
      <Menu secondary>
        <Link to='/'>
          <Image src={CandR} centered style={{height: '70px'}}/>
        </Link>
      </Menu>
        <Menu.Menu position='right'>
          <Link to="/">
            <Menu.Item 
              name='home'
            />
          </Link>
          <Link to='/about'>
            <Menu.Item 
              name='about'
            />
          </Link>
          <Link>
            <Menu.Item 
              name='mortgageCalculator'
            />
          </Link>
        </Menu.Menu>
    </Menu>
    </>
  )
}

export default withRouter(Navbar);