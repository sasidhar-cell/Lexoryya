import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: "Arial" }}>
      {/* Navigation */}
      <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/categories">Categories</Link> |{" "}
        <Link href="/books">Books</Link> |{" "}
        <Link href="/pricing">Pricing</Link> |{" "}
        <Link href="/publish">Publish</Link>
      </nav>

      {/* Page Content */}
      <main style={{ padding: "40px" }}>{children}</main>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          padding: "20px",
          borderTop: "1px solid #ccc",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <p>
          © {new Date().getFullYear()} Lexoryya — Knowledge Without Borders
        </p>
        <p>
          Educational content platform for students and authors worldwide.
        </p>
      </footer>
    </div>
  );
}
