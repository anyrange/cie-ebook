import React from "react";
import Layout from "@theme/Layout";
import Iframe from "@trendmicro/react-iframe";

function App() {
  return (
    <Layout title="Chemical Glossary App">
      <Iframe
        src="https://cie-ebook-glossary-app.netlify.app"
        width="100%"
        height={850}
      />
    </Layout>
  );
}

function Hello() {
  return (
    <Layout title="Chemical Glossary App">
      <Iframe
        src="src/pages/app.html"
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

export default Hello;
