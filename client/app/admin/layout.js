import HeaderAd from "../ui/admin/headerAd/HeaderAd";
import NavAdmin from "../ui/admin/nav-admin/NavAdmin";
import PaginationAd from "../ui/admin/paginationAd/PaginationAd";
import SearchSort from "../ui/admin/searchSort/SearchSort";

export default function Layout({ children }) {
   return (
      <div className="wrapper-admin__container">
         <div className="wrapper-admin">
            <NavAdmin />
            <div className="wrapper-content-admin">
               <HeaderAd />
               <SearchSort />
               {children}
               <PaginationAd />
            </div>

         </div>
      </div>
   )
}