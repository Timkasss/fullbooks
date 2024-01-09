import Education from '../components/education/Education';
import News from '../components/news/News';
import Person from '../components/person/Person';
import Popular from '../components/popular/Popular';
import Video from '../components/video/Video';
import Whatread from '../components/whatread/Whatread';

function Home() {
   return (
      <>
         <Popular />
         <Video />
         <Whatread />
         <Person />
         <News />
         <Education />

      </>
   );
}

export default Home;
