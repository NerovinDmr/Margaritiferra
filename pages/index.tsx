import { NextPage } from 'next';
import {About, Header, Materials} from '../components';



const Home: NextPage = () => {
  return (
    <div >
     <Header/>
      <About/>
     <Materials/>
    </div>
  )
}
export default Home;