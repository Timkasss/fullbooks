
import Poster from '../popular/poster/Poster';
import './whatread.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';

import { BooksContext } from '../context';
import { useContext } from 'react';
import Slider from '../slider/Slider';
function Whatread() {

   const { dataBooks, setDataBooks } = useContext(BooksContext);

   const slide = dataBooks.slice(0, 9);
   return (
      <section className="what-read">
         <div className="what-read__container">
            <h1 className="what-read__title section_title">Що почитати?</h1>
            <Slider books={slide} />
         </div>
      </section>
   )
}
export default Whatread;