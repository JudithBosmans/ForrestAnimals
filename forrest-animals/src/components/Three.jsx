import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import app from "./App.js";
import styles from "../styles/App.css";

const Models = [
  {
    title: "Porsche 356 C",
    subTitle: "1964",
    text: "In model year 1964, the 356 C replaced the 356 B. The range of engines was reduced to three and the existing 60 hp variant was discontinued. Instead, the 75 hp engine of the B 1600 Super represented the entry-level engine. The top-of-the-range engine in the 356 C 2000 GS Carrera delivered a power output of 130 hp.",
    instructions: "CLICK ON THE MODEL TO SEE",
    url: "./models/porsche_3.glb",
  },
  {
    title: "Porsche 911 RAUH-Welt",
    subTitle: "1993",
    text: "RWB/RAUH-Welt BEGRIFF is a Porsche tuner located in Japan. RWB has combined Japanese and Euro tuning elements, creating the distinct RWB style for Porsche chassis. Starting off as a small countryside body-shop in Chiba-Ken, RAUH-Welt 911’s are now a common sight on both the streets and racing circuits of Japan.",
    instructions: "CLICK ON THE MODEL TO SEE",
    url: "./models/porsche_1.glb",
  },
  {
    title: "Porsche 911 Carrera 4S",
    subTitle: "2002",
    text: "At Porsche, the 'S' has always stood for 'sport' and enhanced performance. For the 911, this means increased engine output, sporty chassis design and large brakes and wheels. 4S. The combination of all-wheel drive and increased performance characterises the Porsche '4S' models.",
    instructions: "CLICK ON THE MODEL TO SEE",
    url: "./models/porsche_2.glb",
  },
  {
    title: "Porsche 718 Boxster S",
    subTitle: "2017",
    text: "Since the introduction of the fourth generation in 2016, the two models have been marketed as the Porsche 718 Boxster and Porsche 718 Cayman. The nameplate Boxster is a portmanteau of boxer, a reference to its flat or boxer engine, and roadster, a reference to the body style.",
    instructions: "CLICK ON THE MODEL TO SEE",
    url: "./models/porsche_5.glb",
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
      title: "Porsche 356 C",
      url: "./models/porsche_3.glb",
    },
    {
      title: "Porsche 911 RAUH-Welt",
      url: "./models/porsche_1.glb",
    },
    {
      title: "Porsche 911 Carrera 4S",
      url: "./models/porsche_2.glb",
    },
    {
      title: "Porsche 718 Boxster S",
      url: "./models/porsche_5.glb",
    },
  ];

  const selectedModel = models.find((model) => model.title === modelTitle);
  return (
    <div className="parentContainer">
      <div className="containerButton">
        <Link id="goBack" to="/">
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
        </Canvas>
      </div>
    </div>
  );
}
