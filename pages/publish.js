import Link from "next/link";

export default function Publish() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/categories">Categories</Link> |{" "}
        <Link href="/books">Books</Link> |{" "}
        <Link href="/pricing">Pricing</Link> |{" "}
        <Link href="/publish">Publish</Link>
      </nav>

      <h1>Publish with Lexoryya</h1>

      <p>
        Lexoryya — Knowledge Without Borders is an academic platform where
        authors, educators, and professionals can publish textbooks and
        educational resources for a global audience.
      </p>

      <h2>Why Publish with Lexoryya?</h2>
      <ul>
        <li>You keep full copyright ownership</li>
        <li>Reach international students</li>
        <li>No upfront publishing fees</li>
        <li>Transparent commission-based earnings</li>
      </ul>

      <h2>Revenue Sharing</h2>
      <ul>
        <li>eBooks: 70% Author / 30% Lexoryya</li>
        <li>Audiobooks: 60% Author / 40% Lexoryya</li>
      </ul>

      <p>
        📩 Author onboarding will be available soon.
      </p>
    </div>
  );
}
