import { Container, Grid, Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const Contain = styled(Container)`
color: white;
text-align: center;
`

export const ImageWrap = styled.div`
height: 86.5vh;
padding-left: 3%;
position: absolute;
`

export const Img = styled.img`
height: 100%;
width: absolute;

`

export const GridStyle = styled.div`
background-color: #782020;
height: 50vh;
width: 115%;
min-height: 625px;
overflow: hidden;
margin-left: -7%;
`

export const AboutBorder = styled.div`
border-style: outset;
color: white;
margin-top: 3%;
height: 80vh;
width: 58%;
margin-left: 38%;
`

export const BorderGrid = styled(Grid)`
`

export const Header = styled.h1`
font-size: 50px;
text-align: center;
font-family: Apple Chancery;
padding-top: 10%;
`

export const Header1 = styled.h1`
font-size: 20px;
text-align: center;
`

export const Header2 = styled.h1`
font-size: 20px;
text-align: center;
padding-bottom: 5px;
line-height: 0px;

`

export const Paragraph = styled.p`

`

export const EButton = styled.div`
text-align: center;
padding-top: 5%;
`

export const Button1 = styled(Button)`
border-style: outset !important;
background-color: #782020 !important;
color: white !important;

&:hover {
  background: white !important;
  color: black !important;
}
`

export const DivWrap = styled.div`
  background-color: #FFF9DD;
  height: 50vh;
  width: 115%;
  min-height: 625px;
  overflow: hidden;
  margin-left: -7%;
`

export const GridListing = styled(Grid)`
padding-left: 15% !important;
`