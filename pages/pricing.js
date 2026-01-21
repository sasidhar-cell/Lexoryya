import Link from "next/link";

export default function Pricing() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/categories">Categories</Link> |{" "}
        <Link href="/books">Books</Link> |{" "}
        <Link href="/pricing">Pricing</Link>
      </nav>

      <h1>Pricing Plans</h1>

      <h2>Student Plans</h2>
      <p><strong>Basic Plan</strong></p>
      <ul>
        <li>Unlimited access to all eBooks</li>
        <li>Cloud-based reading</li>
        <li>₹499 / month</li>
        <li>₹4,999 / year</li>
      </ul>

      <p><strong>Premium Plan</strong></p>
      <ul>
        <li>Access to eBooks and Audiobooks</li>
        <li>Early access to new content</li>
        <li>₹799 / month</li>
        <li>₹7,999 / year</li>
      </ul>

      <h2>For Authors</h2>
      <ul>
        <li>No upfront fees</li>
        <li>70% revenue share on eBooks</li>
        <li>60% revenue share on Audiobooks</li>
      </ul>
    </div>
  );
}
