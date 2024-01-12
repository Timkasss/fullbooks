import './pagination.scss';
import { usePagination, DOTS } from './usePagination';
const Pagination = props => {
   const {
      onPageChange,
      totalCount,
      currentPage,
      pageSize,
   } = props;
   const paginationRange = usePagination({
      totalCount,
      pageSize,
      currentPage
   });



   if (currentPage === 0 || paginationRange.length < 2) {
      return null;
   }
   const nextPage = () => {
      if (currentPage < paginationRange.length) {
         onPageChange(currentPage + 1)
      }
   }
   const backPage = () => {
      if (currentPage > 1) {
         onPageChange(currentPage - 1)
      }

   }

   return (

      <div className="pagination">
         <ol className="pagination__list">
            <span className="pagination__arrow-prev" onClick={backPage}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 15" fill="none">
                  <path d="M0.663086 6.7929C0.272562 7.18342 0.272562 7.81659 0.663086 8.20711L7.02705 14.5711C7.41757 14.9616 8.05074 14.9616 8.44126 14.5711C8.83179 14.1805 8.83179 13.5474 8.44126 13.1569L2.78441 7.5L8.44126 1.84315C8.83178 1.45262 8.83178 0.819458 8.44126 0.428934C8.05073 0.0384098 7.41757 0.0384098 7.02705 0.428934L0.663086 6.7929ZM30.8057 6.5L1.37019 6.5L1.37019 8.5L30.8057 8.5L30.8057 6.5Z" fill="white" />
               </svg>
            </span>
            {
               paginationRange.map((pageNumber, index) => {
                  if (pageNumber === DOTS) {
                     return <span className="pagination__pointers" key={index} >...</span>
                  }
                  return (
                     <li className="pagination__item" key={index} onClick={() => onPageChange(pageNumber)}>
                        <div className={`pagination__link ${pageNumber === currentPage ? 'pagination_link-active' : ''}`}>
                           {pageNumber}
                        </div>
                     </li>
                  );
               })
            }
            <span className="pagination__arrow-next" onClick={nextPage}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 15" fill="none">
                  <path d="M30.3369 8.20711C30.7274 7.81658 30.7274 7.18342 30.3369 6.79289L23.973 0.428932C23.5824 0.0384078 22.9493 0.0384078 22.5587 0.428932C22.1682 0.819457 22.1682 1.45262 22.5587 1.84315L28.2156 7.5L22.5587 13.1569C22.1682 13.5474 22.1682 14.1805 22.5587 14.5711C22.9493 14.9616 23.5824 14.9616 23.973 14.5711L30.3369 8.20711ZM0.194336 8.5L29.6298 8.5V6.5L0.194336 6.5L0.194336 8.5Z" fill="white" />
               </svg>
            </span>
         </ol>
      </div>
   )
}
export default Pagination;