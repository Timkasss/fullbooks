"use client"
import { useStoreFavourites } from "@/app/lib/store";
import styles from "./favouritesBut.module.scss";
import { useState } from "react";


export default function FavouritesBut({ author }) {

   const authorID = author._id;

   const addfavourites = useStoreFavourites((state) => state.addInFavourites)
   const deletefavourites = useStoreFavourites((state) => state.deleteFromFavourites)
   const status = useStoreFavourites((state) => state.favouriteStatus[authorID])


   const handleFavour = () => {
      if (!status) {
         addfavourites(author)
      } else {
         deletefavourites(author)
      }
   }

   return (
      <div className={styles.favorites} onClick={handleFavour}>
         <div className={status ? styles.active : styles.favoritesButton}></div>
         В избранном у 37933 человек
      </div>
   )
} 7