import { useEffect, useState } from "react";

function Weather() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = () => {

      fetch(`${import.meta.env.VITE_API_URL}/weather`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setWeather(data);
        })
        .catch((error) => console.error(error));

    };

    fetchWeather();

    const interval = setInterval(fetchWeather, 10000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="page-card">

      <h1>🌌 Live Space Weather</h1>

      {weather ? (

        <div style={{ marginTop: "30px" }}>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "20px",
            }}
          >

            <h2>
              Geomagnetic K-Index:
            </h2>

            <p
              style={{
                fontSize: "40px",
                marginTop: "15px",
                color: "#4da6ff",
              }}
            >
              {weather.kp_index}
            </p>

          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "20px",
            }}
          >

            <h3>Storm Level</h3>

            <p style={{ marginTop: "10px" }}>

              {weather.kp_index < 4
                ? "🟢 Calm"
                : weather.kp_index < 6
                ? "🟡 Moderate"
                : "🔴 Strong Storm"}

            </p>

          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "20px",
            }}
          >

            <h3>Last Updated</h3>

            <p style={{ marginTop: "10px" }}>
              {weather.time_tag}
            </p>

          </div>

        </div>

      ) : (

        <p>Loading space weather...</p>

      )}

    </div>
  );
}

export default Weather;