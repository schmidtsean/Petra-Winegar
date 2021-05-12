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

export const Center = styled.div`
background-color: #400D32;
height: 80px;
margin-top: -80;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.25rem;
position: sticky;
top: 0;
`

export const ImgWrap = styled.div`
height: 175%;
width: 300%;
padding-top: 3.15%;
padding-left: 5%;
position: absoulte;
`

export const MenuWrap = styled(Menu)`
align-items: center;
display: flex;
padding-right: 20%;

`