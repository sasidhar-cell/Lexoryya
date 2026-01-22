import { useState } from "react";
import Layout from "../components/Layout";
import { getSupabaseClient } from "../lib/supabaseClient";


export default function Publish() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const supabase = getSupabaseClient();
 
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const file = form.file.files[0];

    if (!file) {
      setMessage("Please select a PDF file");
      setLoading(false);
      return;
    }

    const filePath = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("books")
      .upload(filePath, file);

    if (uploadError) {
      setMessage("File upload failed");
      setLoading(false);
      return;
    }

    const { data: authorData, error: authorError } = await supabase
      .from("authors")
      .insert([{ name, email }])
      .select()
      .single();

    if (authorError) {
      setMessage("Author save failed");
      setLoading(false);
      return;
    }

    const { error: bookError } = await supabase.from("books").insert([
      {
        title,
        file_url: filePath,
        author_id: authorData.id
      }
    ]);

    if (bookError) {
      setMessage("Book save failed");
      setLoading(false);
      return;
    }

    setMessage("✅ Book submitted successfully!");
    setLoading(false);
    form.reset();
  }

  return (
    <Layout>
      <h1>Publish with Lexoryya</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <input name="name" placeholder="Author name" required />
        </p>
        <p>
          <input name="email" type="email" placeholder="Email" required />
        </p>
        <p>
          <input name="title" placeholder="Book title" required />
        </p>
        <p>
          <input name="file" type="file" accept="application/pdf" required />
        </p>

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Submit Book"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </Layout>
  );
}
