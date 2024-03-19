"use client"

// import { write } from "./books-data";


// export async function author() {
//    try {
//       const authorPromises = write.map(async (item) => {
//          const formData = new FormData();
//          let imag = await fetch(item.image);
//          let blob = await imag.blob();
//          formData.append('fullname', item.fullname);
//          formData.append('birthday', item.birthday);
//          formData.append('placeofbirth', item.placeofbirth);
//          formData.append('deathdate', item.deathdate);
//          formData.append('placeofdeath', item.placeofdeath);
//          formData.append('typeactivity', item.typeactivity);
//          formData.append('direction', item.direction);
//          formData.append('genre', item.genre);
//          formData.append('languageworks', item.languageworks);
//          formData.append('image', blob);
//          console.log(formData.get('image'))

//          let response = await fetch('http://localhost:4000/authors', {
//             cache: 'no-store',
//             method: 'POST',
//             body: formData

//          });
//          if (response.ok) {
//             console.log('Данные об авторах успешно отправлены');
//          } else {
//             console.error('Ошибка при отправке данных об авторах:', response.status, response.statusText);
//          }
//       });
//       await Promise.all(authorPromises);
//    } catch (error) {
//       console.error('Произошла ошибка:', error);
//    }
// }
