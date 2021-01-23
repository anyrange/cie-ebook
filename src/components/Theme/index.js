import { createGlobalStyle, css } from "styled-components";

const Theme = createGlobalStyle`
    ${(props) =>
      props.introduction &&
      css`
        .markdown h1 {
          color: #fff;
          background: #00aeef;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #00aeef;
          font-size: 24px;
        }
      `}
    ${(props) =>
      props.atomicStructure &&
      css`
        .markdown h1 {
          color: #fff;
          background: #0072bc;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #00aeef;
        }
        .QUASM {
          color: red;
        }
      `}
    ${(props) =>
      props.periodicity &&
      css`
        .markdown h1 {
          color: #fff;
          background: #b12a29;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #b12a29;
        }
      `}
    ${(props) =>
      props.bonding &&
      css`
        .markdown h1 {
          color: #fff;
          background: #00a54f;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #00a54f;
        }
      `}
    ${(props) =>
      props.energetics &&
      css`
        .markdown h1 {
          color: #fff;
          background: #a2238e;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #a2238e;
        }
      `}
    ${(props) =>
      props.kinetics &&
      css`
        .markdown h1 {
          color: #fff;
          background: #2e3092;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #2e3092;
        }
      `}
    ${(props) =>
      props.equilibrium &&
      css`
        .markdown h1 {
          color: #fff;
          background: #00a2ad;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #00a2ad;
        }
      `}
    ${(props) =>
      props.alkanes &&
      css`
        .markdown h1 {
          color: #fff;
          background: #ec1163;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #ec1163;
        }
      `}
    ${(props) =>
      props.alkenes &&
      css`
        .markdown h1 {
          color: #fff;
          background: #a79137;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #a79137;
        }
      `}
    ${(props) =>
      props.alcohols &&
      css`
        .markdown h1 {
          color: #fff;
          background: #753e98;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #753e98;
        }
      `}
    ${(props) =>
      props.halogenoalkanes &&
      css`
        .markdown h1 {
          color: #fff;
          background: #71bf44;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #71bf44;
        }
      `}
    ${(props) =>
      props.analyticalTechniques &&
      css`
        .markdown h1 {
          color: #fff;
          background: #ab5796;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #ab5796;
        }
      `}
    ${(props) =>
      props.theRedoxReactions &&
      css`
        .markdown h1 {
          color: #fff;
          background: #504fa1;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #504fa1;
        }
      `}
    ${(props) =>
      props.halogens &&
      css`
        .markdown h1 {
          color: #fff;
          background: #f79559;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #f79559;
        }
      `}
    ${(props) =>
      props.theAlkalineEarthElements &&
      css`
        .markdown h1 {
          color: #fff;
          background: #009c94;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #009c94;
        }
      `}
    ${(props) =>
      props.thermodynamics &&
      css`
        .markdown h1 {
          color: #fff;
          background: #f17091;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #f17091;
        }
      `}
    ${(props) =>
      props.chemicalCalculations &&
      css`
        .markdown h1 {
          color: #fff;
          background: #6c6d70;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #6c6d70;
        }
      `}
    ${(props) =>
      props.appendix1 &&
      css`
        .markdown h1 {
          color: #fff;
          background: #009c94;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #009c94;
        }
      `}
    ${(props) =>
      props.appendix2 &&
      css`
        .markdown h1 {
          color: #fff;
          background: #71bf44;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #71bf44;
        }
        .markdown h3 {
          color: #71bf44;
        }
      `}
    ${(props) =>
      props.appendix2_1 &&
      css`
        .markdown h1 {
          color: #fff;
          background: #009c94;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #009c94;
        }
        .markdown h3 {
          color: #009c94;
        }
      `}
    ${(props) =>
      props.appendix3 &&
      css`
        .markdown h1 {
          color: #fff;
          background: #00aeef;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #00aeef;
        }
      `}
    ${(props) =>
      props.appendix4 &&
      css`
        .markdown h1 {
          color: #fff;
          background: #00b5ac;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #00b5ac;
        }
      `}
    ${(props) =>
      props.appendix5 &&
      css`
        .markdown h1 {
          color: #fff;
          background: #71bf44;
          padding: 2px 2px 5px 10px;
          font-size: 36px;
        }
        .markdown h2 {
          color: #71bf44;
        }
      `}
  }
`;

export default Theme;
