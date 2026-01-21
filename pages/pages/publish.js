import Link from "next/link";

export default function Publish() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/categories">Categories</Link> |{" "}
        <Link href="/books">Books</Link> |{" "}
        <Link href="/pricing">Pricing</Link> |{" "}
        <Link href="/publish">Publish with Lexoryya</Link>
      </nav>

      <h1>Publish with Lexoryya</h1>

      <p>
        Lexoryya — Knowledge Without Borders is an academic platform that allows
        authors, educators, and professionals to publish and sell their
        educational content globally.
      </p>

      <h2>Why Publish with Lexoryya?</h2>
      <ul>
        <li>You retain full copyright of your work</li>
        <li>Reach international students</li>
        <li>Earn through a transparent commission-based model</li>
        <li>No upfront publishing fees</li>
      </ul>

      <h2>Revenue Sharing</h2>
      <ul>
        <li>eBooks: 70% Author / 30% Lexoryya</li>
        <li>Audiobooks: 60% Author / 40% Lexoryya</li>
      </ul>

      <h2>How to Get Started</h2>
      <ol>
        <li>Prepare your academic content</li>
        <li>Contact us to onboard as an author</li>
        <li>Upload your book after approval</li>
      </ol>

      <p>
        📩 Contact: <strong>publish@lexoryya.com</strong> (coming soon)
      </p>
    </div>
  );
}
