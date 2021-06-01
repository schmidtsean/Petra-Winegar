import { Link, withRouter } from 'react-router-dom';
import CandR from '../images/CandR.jpeg';
import { Img, NavDiv, LinkItem, Links, ImgWrap, MenuWrap, TopNav, MenuItem } from '../styles/NavbarStyle';
import { Menu, Image, Input } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <>
    <NavDiv style={{textAlign: 'right', backgroundColor: '#6E6E6E'}}>
      <br/>
      <p style={{paddingRight: '20px', color: 'white'}}>Mobile: (801) 949-1009  |  Email: petra@chapmanrichards.com</p>
    <Menu secondary style={{height: '50px', backgroundColor: '#6E6E6E'}}>
      <Menu.Menu secondary>
        <Link to='/'>
          <Image src={CandR} centered style={{height: '70px', position: 'fixed', top: '15px', left: '15px'}}/>
        </Link>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Link to="/">
          <MenuItem 
            name='listings'
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
    </NavDiv>
    </>
  )
}

export default withRouter(Navbar);