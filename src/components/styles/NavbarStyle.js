import { Link } from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";
import styled from "styled-components";

export const Img = styled(Image)`
width: 15% !important;
height: 57% !important;
text-align: left !important;
`

export const Links = styled(Link)`
color: white;
`

export const LinkItem = styled.li`
  padding: 1em 0%;
  list-style: none;
  padding: 5%;
  color: white;
`

export const NavDiv = styled.div`
background-color: #6E6E6E;
z-index: 1;
`

export const ImgWrap = styled.div`
height: 150%;
width: 300%;
padding-top: 2.5%;
padding-left: 0.5%;
position: absoulte;
`

export const MenuWrap = styled(Menu)`
align-items: center;
display: flex;
padding-right: 10%;
`

export const TopNav = styled.div`
background-color: #6E6E6E;
height: 80px;
margin-top: -80;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.25rem;
position: sticky;
top: 0;
`

export const MenuItem = styled(Menu.Item)`
color: white;
font-size: 16px;
`