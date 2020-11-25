import React from "react";
import Layout from "@theme/Layout";
import Iframe from "react-iframe";
import './style.css';

function App() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Iframe
          url="src/pages/index.html"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </Layout>
  );
}

export default App;
