import { Grid, Image } from 'semantic-ui-react';
import Petra from '../images/Petra.jpeg';
import CandR from '../images/CandR.jpeg';
import {Agent, Center} from '../styles/HomeStyles'
const Home = () => (
  <>
    <Center>
      <h1>Petra Winegar</h1>
        <Agent src={Petra} />
        <h2>Real Estate Agent</h2>
    </Center>
  </>
)

export default Home;