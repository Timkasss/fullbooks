export async function loadSignUp(FormData) {
  const data = await fetch("http://localhost:4000/auth/signup", {
    method: "POST",
    body: FormData,
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  // const response = data.json();
  // return response;
}

export async function loadSignIn(FormData) {
  const data = await fetch("http://localhost:4000/auth/signin", {
    method: "POST",
    body: FormData,
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
}

export async function loadBooks() {
  const data = await fetch("http://localhost:4000/books");

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = data.json();
  return response;
}

export async function loadBook(id) {
  const data = await fetch(`http://localhost:4000/books/${id}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = data.json();
  return response;
}
export async function deleteBook(id) {
  const data = await fetch(`http://localhost:4000/books/${id}`, {
    method: "DELETE",
  });

  if (!data.ok) {
    throw new Error("Failed to delete data");
  }
  const response = data.json();
  return response;
}

export async function addBookForm(FormData) {
  const data = await fetch(`http://localhost:4000/books`, {
    method: "POST",
    body: FormData,
  });

  if (!data.ok) {
    throw new Error("Failed to add data");
  }
}

export async function loadAuthors() {
  const data = await fetch(`http://localhost:4000/authors/`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = data.json();
  return response;
}

export async function loadAuthor(id) {
  const data = await fetch(`http://localhost:4000/authors/${id}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = data.json();
  return response;
}

export async function deleteAuthor(id) {
  const data = await fetch(`http://localhost:4000/authors/${id}`, {
    method: "DELETE",
  });

  if (!data.ok) {
    throw new Error("Failed to delete data");
  }
  const response = data.json();
  return response;
}

export async function addAuthor(FormData) {
  const data = await fetch(`http://localhost:4000/authors`, {
    method: "POST",
    body: FormData,
  });

  if (!data.ok) {
    throw new Error("Failed to add data");
  }
}
