import { useEffect, useState } from "react";

function News() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/news`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));

  }, []);

  return (
    <div className="page-card">

      <h1>📰 Space News</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px",
          marginTop: "30px",
        }}
      >

        {articles.map((article) => (

          <div
            key={article.id}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >

            <img
              src={article.image_url}
              alt={article.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>

              <h2
                style={{
                  fontSize: "20px",
                  marginBottom: "15px",
                }}
              >
                {article.title}
              </h2>

              <p
                style={{
                  color: "#bbb",
                  lineHeight: "1.6",
                }}
              >
                {article.summary.slice(0, 140)}...
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  color: "#4da6ff",
                  textDecoration: "none",
                }}
              >
                Read More →
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default News;