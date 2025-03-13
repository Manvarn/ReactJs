function Student({ name, age, bio }) {
  return (
    <div>
      <h2>Hello Props</h2>
      <h3>Name : {name}</h3>
      <p>Age : {age}</p>
      <p>bio : {bio}</p>
    </div>
  );
}

export function Books({ bookname, author }) {
  return (
    <div>
      <h3>Hello Books</h3>
      <p>bookname : {bookname}</p>
      <p>author : {author}</p>
    </div>
  );
}

export function Car() {
  return (
    <div>
      <h3>Hello Cars</h3>
    </div>
  );
}
export default Student;
