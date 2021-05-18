import { Contain, ImageWrap, Img, GridStyle, AboutBorder, BorderGrid, Header, Header1, Paragraph, EButton, Button1, Contain1, GridListings } from "../styles/AboutStyles";
import Petra from '../images/Petra.jpeg';
import { Card, Grid } from "semantic-ui-react";
import AboutListings from "./AboutListings";

const About = () => (
   <> 
    <GridStyle>
      <ImageWrap>
        <Img src={Petra} />
      </ImageWrap>
      <BorderGrid>
        <AboutBorder>
          <Contain>
            <Contain1>
              <Header>Petra Winegar</Header>
                <Header1>Real Estate Agent - (801) 949-1009 petra@chapmanrichards.com</Header1>
               
                <Paragraph style={{textAlign: 'center'}}>As a Business Executive of 20 years, I have had the privilege of associating with several top companies throughout the world. It is, therefore, both a pleasure and an honor to work with the most respected and dedicated real estate company in Salt Lake City.

                  Throughout my business endeavors, I have built my business on three guiding principles; a deep sense of respect and honesty in all my communications with my clients, a tenacious and focused demeanor with all my negotiations, and a strong commitment to integrity, honor and pride towards the real estate profession and the colleagues with whom I serve.

                  Originally from Augsburg, Germany, I moved to Salt Lake City in 1990 and have called the Wasatch Front my home for 25 years. I know and respect this city. I am active in the community and sensitive to both the growing pains and future development of our City and State.

                  With a vested interest in ensuring all our continued prosperity, I offer my personal and professional commitment to each client I have the honor to serve, my sincere dedication, industry knowledge and professionalism.
                </Paragraph>
                  <EButton>
                    <a href="mailto:petra@chapmanrichards.com">
                      <Button1>Email Petra</Button1>
                    </a>
                  </EButton>
                </Contain1>
          </Contain>
        </AboutBorder>
      </BorderGrid>
    </GridStyle>
    <GridListings>
      <AboutListings />
    </GridListings>
  </>

)

export default About;