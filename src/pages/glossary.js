import React from "react";
import Layout from "@theme/Layout";
import Iframe from "@trendmicro/react-iframe";

function App() {
  return (
    <Layout title="Hello">
      <Iframe
        src="src/pages/index.html"
        onLoad={({ event, iframe }) => {
          if (!(iframe && iframe.contentDocument)) {
            return;
          }

          const target = iframe.contentDocument.body;
          const nextHeight = target.offsetHeight;
          iframe.style.height = `${nextHeight}px`;

          const observer = new ResizeObserver((entries) => {
            const target = iframe.contentDocument.body;
            const nextHeight = target.offsetHeight;
            iframe.style.height = `${nextHeight}px`;
          });
          observer.observe(target);
        }}
      />
    </Layout>
  );
}

export default App;
