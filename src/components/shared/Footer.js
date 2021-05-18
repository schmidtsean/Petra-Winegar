import { Menu, Image } from 'semantic-ui-react'
import CandR from '../images/CandR.jpeg';
import { Link } from 'react-router-dom'

const Footer = () => (
  <Menu style={{backgroundColor: '#6E6E6E', height: '100px', opacity: '0.75'}}>
    <Image src={CandR} centered style={{height: '40px', marginTop: '20px'}}/>
  </Menu>
)

export default Footer;