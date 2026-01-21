export default function Categories() {
  const categories = [
    "Pharmacy",
    "MBBS / Medical Sciences",
    "Homeopathy",
    "Dental",
    "Nursing & Allied Health",
    "Engineering",
    "Science & Life Sciences",
    "Management & Commerce",
    "Education & Teaching",
    "Computer Applications",
    "Other Educational Categories"
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Browse Categories</h1>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}
