import Petra from '../images/Petra.jpeg';
import {Card, Button, Icon, Image} from 'semantic-ui-react'

const AboutListings = () => {
  return (
    <Card.Group>
      <Card>
      <Image src='' wrapped ui={false} />
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
  )
}


export default AboutListings;