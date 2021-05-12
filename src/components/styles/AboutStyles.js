import { Container, Grid, Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const Contain = styled(Container)`
width:60% !important;
color: white;
float: right;
padding-right: 20%;
`

export const Contain1 = styled.div`

`

export const ImageWrap = styled.div`
height: 100px;
padding-left: 5%;
position: absolute;
`

export const Img = styled.img`
height: 800%;
width: absolute;

`

export const GridStyle = styled(Grid)`
background-color: #782020;
height: 50em;
`

export const AboutBorder = styled.div`
border-style: outset;
color: white;
padding-top: 5%;
width: 60%;
height: 30%;
float: right;

`

export const BorderGrid = styled(Grid)`
padding-right: 3%;
padding-top: 2.5%;
height: 250%;
`

export const Header = styled.h1`
font-size: 50px;
text-align: center;
font-family: Apple Chancery;
`

export const Header1 = styled.h1`
font-size: 25px;
text-align: center;

`

export const Paragraph = styled.p`

`

export const EButton = styled.div`
text-align: center;
padding-top: 5%;
`

export const Button1 = styled(Button)`
border-style: outset;
background-color: #782020;

&:hover {
  background: white;
  color: black;
}
`