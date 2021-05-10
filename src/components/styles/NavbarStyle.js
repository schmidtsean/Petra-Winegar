import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

export const Img = styled(Image)`
width: 10% !important;
height: 50% !important;
`

export const Links = styled(Link)`
color: white;
`

export const LinkItem = styled.li`
  z-index: 3;
  order: 3;
  padding: 1em 0%;
  list-style: none;
  padding: 6px;
  text-align: center;
  color: white;
  display: inline;
`

export const Center = styled.div`
background-color: black;
height: 80px;
margin-top: -80;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
`