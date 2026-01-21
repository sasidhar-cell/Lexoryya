import Layout from "../components/Layout";

export default function Pricing() {
  return (
    <Layout>
      <h1>Pricing Plans</h1>

      <h2>Student Plans</h2>
      <ul>
        <li>Basic: ₹499 / month — eBooks access</li>
        <li>Premium: ₹799 / month — eBooks + Audiobooks</li>
      </ul>

      <h2>For Authors</h2>
      <ul>
        <li>eBooks: 70% Author / 30% Lexoryya</li>
        <li>Audiobooks: 60% Author / 40% Lexoryya</li>
      </ul>
    </Layout>
  );
}
