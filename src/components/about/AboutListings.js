import Listing1 from '../images/Listing1.jpg';
import {Card, Button, Icon, Image, Grid} from 'semantic-ui-react'
import {DivWrap, Header, Header1, GridListing} from '../styles/AboutStyles'

const AboutListings = () => {
  return (
    <DivWrap>
      <Header>Petra's</Header>
      <Header1>Listings</Header1>
      <GridListing>
        <Grid.Column>
          <Card.Group style={{textAlign: 'center'}}>
            <Card>
            <Image src={Listing1} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Price</Card.Header>
              <Card.Meta>
                <span className='date'>Location</span>
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={Listing1} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Price</Card.Header>
              <Card.Meta>
                <span className='date'>Location</span>
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src={Listing1} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Price</Card.Header>
              <Card.Meta>
                <span className='date'>Location</span>
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>
          
        </Card.Group>
      </Grid.Column>
    </GridListing>
  </DivWrap>
  )
}


export default AboutListings;