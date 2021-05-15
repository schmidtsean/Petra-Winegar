import { Link, withRouter } from 'react-router-dom';
import CandR from '../images/CandR.jpeg';
import { Img, NavDiv, LinkItem, Links, ImgWrap, MenuWrap, TopNav, MenuItem } from '../styles/NavbarStyle';
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
    <div style={{textAlign: 'right', backgroundColor: '#400D32'}}>
      <br/>
      <p style={{paddingRight: '20px', color: 'white'}}>Mobile: (801) 949-1009  |  Email: petra@chapmanrichards.com</p>
    <Menu secondary style={{height: '50px', backgroundColor: '#400D32'}}>
      <Menu.Menu secondary>
          <Image src={CandR} centered style={{height: '70px', position: 'fixed', top: '15px', left: '15px'}}/>
        <Link to='/'>
        </Link>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Link to="/">
          <MenuItem 
            name='home'
            style={{
              color: 'white'
            }}
            />
        </Link>
        <Link to='/about'>
          <MenuItem 
            name='about'
            style={{
              color: 'white'
            }}
            />
        </Link>
        <Link to='/mortgageCalculator'>
          <MenuItem 
            name='mortgageCalculator'
            style={{
              color: 'white'
            }}
            />
        </Link>
      </Menu.Menu>
    </Menu>
    </div>
    </>
  )
}

export default withRouter(Navbar);