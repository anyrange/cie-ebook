import React from "react";
import Layout from "@theme/Layout";
import Frame from "@site/src/components/Frame";

function App() {
  return (
    <Layout title="Test your English">
      <Frame
        src="https://www.cambridgeenglish.org/test-your-english/"
        height="calc(100vh - 100%)"
        width="100%"
        style={{
          minHeight: "calc(100vh - 70px)",
          border: "none",
        }}
      />
    </Layout>
  );
}

export default App;
