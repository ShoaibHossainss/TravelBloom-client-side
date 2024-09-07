
import Navbar from './Navbar';
import Header from './Header';
import Tourism from './Tourism';
import TourType from './Tourtype/TourType';
import Form from '../Form';




const Home = () => {
  
    return (
        <div>
           <Navbar></Navbar>
           <Form></Form>
           <Header></Header>
           <Tourism></Tourism>
           <TourType></TourType>

           
        </div>
    );
};

export default Home;