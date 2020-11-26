import React from "react";
import Layout from "@theme/Layout";
import Iframe from "@trendmicro/react-iframe";

function App() {
  return (
    <Layout className="layout-body" title="Chemical Glossary App">
      <Iframe
        src="https://cie-ebook-glossary-app.netlify.app"
        width="100%"
        height={850}
      />
    </Layout>
  );
}

export default App;
