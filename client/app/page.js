import Education from "./ui/education/Education";
import News from "./ui/news/News";
import Person from "./ui/person/Person";
import Popular from "./ui/popular/Popular";
import Video from "./ui/video/Video";
import Whatread from "./ui/whatread/Whatread";

import { loadBooks } from "./lib/load-date";

export default async function Home() {

  const books = await loadBooks();

  return (
    <>
      <Popular books={books} />
      {/* <Video /> */}
      <Whatread books={books} />
      <Person />
      <News />
      <Education books={books} />
    </>
  );
}
