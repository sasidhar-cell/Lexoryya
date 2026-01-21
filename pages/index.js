import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/categories">Categories</Link> |{" "}
        <Link href="/books">Books</Link>
      </nav>

      <h1>Lexoryya — Knowledge Without Borders</h1>
      <p>Welcome to Lexoryya. This is the beta version.</p>
    </div>
  );
}
