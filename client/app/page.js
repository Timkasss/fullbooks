import Education from "./ui/education/Education";
import News from "./ui/news/News";
import Person from "./ui/person/Person";
import Popular from "./ui/popular/Popular";
import Video from "./ui/video/Video";
import Whatread from "./ui/whatread/Whatread";


export default function Home() {
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
