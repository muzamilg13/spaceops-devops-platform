import { useEffect, useState } from "react";

function Launches() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/launches`)
      .then((response) => response.json())
      .then((data) => setLaunches(data))
      .catch((error) => console.error(error));

  }, []);

  return (
    <div className="page-card">

      <h1>🚀 Upcoming SpaceX Launches</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {launches.map((launch) => (

          <div
            key={launch.id}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "15px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >

            <h2>{launch.name}</h2>

            <p style={{ marginTop: "15px", color: "#bbb" }}>
              Launch Date:
            </p>

            <p>
              {new Date(launch.net).toUTCString()}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Launches;