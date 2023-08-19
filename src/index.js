import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return <Container />;
}
function Container() {
  return (
    <div className="container">
      <Image />
      <Content />
      <Footer />
      <Skill />
    </div>
  );
}

function Image() {
  return (
    <img
      className="image"
      src="https://image-us.24h.com.vn/upload/3-2023/images/2023-07-09/Than-hinh-muot-muon-muot-cua-gai-xinh-xu-Han-co-trieu-fan-han-kyung-1688907525-217-width1440height1728.jpeg"
      alt="girlxinh"
    ></img>
  );
}

function Content() {
  return (
    <div className="content">
      <h2>Gai xinh lam do</h2>
      <p>
        Full-stack developer and teacher on Native. When not coding or
        preparing...
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <Skill className="blue" skillName="HTML+CSS" />
      <Skill className="yellow" skillName="Javascript" />
      <Skill className="green" skillName="Web Design" />
      <Skill className="red" skillName="Git and Github" />
      <Skill className="bluelight" skillName="React" />
      <Skill className="red" skillName="NodeJs" />
    </div>
  );
}

function Skill(props) {
  return <p className={props.className}>{props.skillName}</p>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
