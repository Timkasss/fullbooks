
export async function loadBooks() {
   const data = await fetch('http://localhost:4000/books');

   if (!data.ok) {
      throw new Error('Failed to fetch data')
   }
   const response = data.json();
   return response;
}

export async function loadBook(id) {
   const data = await fetch(`http://localhost:4000/books/${id}`);

   if (!data.ok) {
      throw new Error('Failed to fetch data')
   }
   const response = data.json();
   return response;
}


export async function loadAuthors() {
   const data = await fetch('http://localhost:4000/authors');

   if (!data.ok) {
      throw new Error('Failed to fetch data')
   }

   const response = data.json();
   return response;
}

export async function loadAuthor(id) {
   const data = await fetch(`http://localhost:4000/authors/${id}`);

   if (!data.ok) {
      throw new Error('Failed to fetch data')
   }
   const response = data.json();
   return response;
}

export async function deleteAuthor(id) {
   const data = await fetch(`http://localhost:4000/authors/${id}`, {
      method: 'DELETE'
   });

   if (!data.ok) {
      throw new Error('Failed to delete data')
   }
   const response = data.json();
   return response;
}

export async function addAuthor(newAuthor) {

   const data = await fetch(`http://localhost:4000/authors`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAuthor)
   });

   if (!data.ok) {
      throw new Error('Failed to add data')
   }
}