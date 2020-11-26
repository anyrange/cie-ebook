import React from "react";
import Layout from "@theme/Layout";
import Iframe from "@trendmicro/react-iframe";

function App() {
  return (
    <Layout title="Chemical Glossary App">
      <Iframe
        src="https://cie-ebook-glossary-app.netlify.app"
        style={{
          height: "calc(100vh - 100%)",
          width: "100%",
          minHeight: "calc(100vh - 70px)",
        }}
      />
    </Layout>
  );
}

export default App;
