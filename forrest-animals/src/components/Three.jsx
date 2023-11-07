import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import app from "./App.js";
import styles from "../styles/Test.css";

const Models = [
  {
    title: "Porsche 911",
    subTitle: "RAUH-Welt",
    text: "RWB/RAUH-Welt BEGRIFF is a Porsche tuner located in Japan. RWB has combined Japanese and Euro tuning elements, creating the distinct RWB style for Porsche chassis. Starting off as a small countryside body-shop in Chiba-Ken, RAUH-Welt 911’s are now a common sight on both the streets and racing circuits of Japan.",
    pic: "https://i.ibb.co/Bwws9KP/sub-bts-one-shots-who-s-your-daddy-PJM.gif",
    url: "./models/porsche_1.glb",
  },
  {
    title: "Porsche Carrera",
    subTitle: "911",
    text: "RWB/RAUH-Welt BEGRIFF is a Porsche tuner located in Japan. RWB has combined Japanese and Euro tuning elements, creating the distinct RWB style for Porsche chassis. Starting off as a small countryside body-shop in Chiba-Ken, RAUH-Welt 911’s are now a common sight on both the streets and racing circuits of Japan.",
    pic: "https://i.ibb.co/Bwws9KP/sub-bts-one-shots-who-s-your-daddy-PJM.gif",
    url: "./models/porsche_2.glb",
  },
];

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function Three() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modelTitle = queryParams.get("model");

  const models = [
    {
      title: "Porsche 911",
      url: "./models/porsche_1.glb",
    },
  ];

  const selectedModel = models.find((model) => model.title === modelTitle);
  return (
    <div className="parentContainer">
      <div className="containerButton">
        <Link id="goBack" to={app}>
          Go Back
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "150vh",
        }}
      >
        <Canvas camera={{ position: [10, 2, 0], fov: 35 }}>
          <group>
            <Model url={selectedModel.url} />
          </group>
          <OrbitControls autoRotate />
          <Environment files="./pics/pic.hdr" background />
          <Stats />
        </Canvas>
      </div>
    </div>
  );
}
