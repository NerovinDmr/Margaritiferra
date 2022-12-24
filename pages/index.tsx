import { NextPage } from 'next';
import {About, Contacts, Footer, Header, Materials} from '../components';



const Home: NextPage = () => {
  return (
    <div >
     <Header/>
      <About/>
     <Materials/>
     <Contacts/>
     <Footer/>
    </div>
  )
}
export default Home;