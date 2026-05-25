import { useEffect, useState } from "react";

function APOD() {

  const [apod, setApod] = useState(null);

  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/apod`)
      .then((response) => response.json())
      .then((data) => setApod(data))
      .catch((error) => console.error(error));

  }, []);

  return (
    <div className="page-card">

      <h1>NASA Astronomy Picture of the Day</h1>

      {apod ? (

        <div style={{ textAlign: "center" }}>

          <h2 style={{ marginBottom: "20px" }}>
            {apod.title}
          </h2>

          {apod.media_type === "image" ? (

            <img
              src={apod.url}
              alt={apod.title}
              style={{
                width: "100%",
                maxWidth: "900px",
                borderRadius: "20px",
                marginBottom: "25px",
              }}
            />

          ) : (

            <video
              controls
              style={{
                width: "100%",
                maxWidth: "900px",
                borderRadius: "20px",
                marginBottom: "25px",
              }}
            >
              <source
                src={apod.url}
                type="video/mp4"
              />
            </video>

          )}

          <p
            style={{
              lineHeight: "1.8",
              color: "#ddd",
              marginTop: "20px",
            }}
          >
            {apod.explanation}
          </p>

        </div>

      ) : (

        <p>Loading NASA data...</p>

      )}

    </div>
  );
}

export default APOD;