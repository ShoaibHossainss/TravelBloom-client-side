
import Navbar from './Navbar';
import Header from './Header';
import Tourism from './Tourism';
import TourType from './Tourtype/TourType';
import TouristStory from '../../TouristStory/TouristStory';





const Home = () => {
  
    return (
        <div>
           <Navbar></Navbar>
           <Header></Header>
           <Tourism></Tourism>
           <TourType></TourType>
           <TouristStory></TouristStory>

           
        </div>
    );
};

export default Home;