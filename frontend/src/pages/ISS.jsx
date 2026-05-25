import { useEffect, useState } from "react";

function ISS() {
  const [issData, setIssData] = useState(null);

  useEffect(() => {

    const fetchISS = () => {
      fetch(`${import.meta.env.VITE_API_URL}/iss`)
        .then((response) => response.json())
        .then((data) => setIssData(data))
        .catch((error) => console.error(error));
    };

    fetchISS();

    const interval = setInterval(fetchISS, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="page-card">
      <h1>🛰 ISS Live Tracker</h1>

      {issData ? (
        <div style={{ marginTop: "30px" }}>
          <h2>
            Latitude: {issData.iss_position.latitude}
          </h2>

          <h2 style={{ marginTop: "20px" }}>
            Longitude: {issData.iss_position.longitude}
          </h2>

          <p style={{ marginTop: "30px", color: "#aaa" }}>
            Updates every 5 seconds
          </p>
        </div>
      ) : (
        <p>Loading ISS location...</p>
      )}
    </div>
  );
}

export default ISS;