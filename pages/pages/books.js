export default function Books() {
  const books = [
    {
      title: "Clinical Pharmacology Basics",
      category: "Pharmacy",
      author: "Dr. A. Kumar"
    },
    {
      title: "Human Anatomy for MBBS",
      category: "Medical Sciences",
      author: "Dr. R. Sharma"
    },
    {
      title: "Fundamentals of Engineering Mathematics",
      category: "Engineering",
      author: "Prof. S. Rao"
    }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Books</h1>
      <p>Explore academic textbooks on Lexoryya.</p>

      <ul>
        {books.map((book, index) => (
          <li key={index} style={{ margin: "15px 0" }}>
            <strong>{book.title}</strong><br />
            Category: {book.category}<br />
            Author: {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
