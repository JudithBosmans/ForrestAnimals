import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import mainStyles from "../index.css";
import styles from "../styles/App.css";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AmbientLight, DirectionalLight, PointLight } from "three";

import { motion } from "framer-motion";

const Porschemodel = () => {
  const { scene } = useGLTF("./models/Porsche.glb");

  return <primitive object={scene} />;
};

const DynamicModel = ({ url }) => {
  const { scene } = useGLTF(url, () => setLoading(false));
  const [isLoading, setLoading] = useState(true);
  return <primitive object={scene} />;
};

const models = [
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

const App = () => {
  const handleStartClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="main-container">
        <div id="titleHome">
          <h1 id="title">Porsche</h1>
          <p id="undertitle">A short history of a beautiful car</p>
          <div className="twoButtons">
            <button id="buttonStart" onClick={handleStartClick}>
              Start
            </button>
          </div>
          {/* <Link id="buttonToGame" to="Scene">
            Mini Game
          </Link> */}
        </div>
        <div id="nav">
          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <p>Home</p>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <p>Porsche 911</p>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <p>Porsche Carrera 4S</p>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <p>Porsche Carrera GT</p>
          </motion.div>
        </div>
        <div id="peepeepoopoo">
          <Canvas
            camera={{ position: [10, 1, 0], fov: 25 }}
            gl={{ alpha: true }}
            id="origamiModel"
          >
            <ambientLight intensity={20} />
            <directionalLight intensity={6} position={[0, 2, 0]} />
            <pointLight intensity={6} position={[0, 2, 0]} />

            <OrbitControls
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI - Math.PI / 6}
            />

            <Porschemodel />
          </Canvas>
        </div>
      </div>

      {/* ----------------------
      3D PAGES
       ---------------------- */}

      <div className="container2">
        {models.map((card, index) => (
          <div className="model1Container" key={index}>
            <div className="TreedContainer">
              <h2 className="ThreeTitle" id={`title${index}`}>
                {card.title}
              </h2>
              <h2 className="ThreeUndertitle" id={`subtitle${index}`}>
                {card.subTitle}
              </h2>
              <p className="ThreeText">{card.text}</p>
              <p className="ThreeInstruct">{card.instructions}</p>
            </div>
            <Link to={`/Three?model=${card.title}`}>
              <div className="ThreeModel">
                <Canvas
                  camera={{ position: [10, 1, 0], fov: 20 }}
                  gl={{ alpha: true }}
                >
                  <ambientLight intensity={1} />
                  <directionalLight position={[-1, 2, 4]} intensity={10} />
                  <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                  />
                  <DynamicModel url={card.url} />
                </Canvas>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
