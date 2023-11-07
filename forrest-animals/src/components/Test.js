import React, { useRef } from "react";
import { Link } from "react-router-dom";

import mainStyles from "../index.css";
import styles from "../styles/Test.css";
import Model1 from "./Model1";

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
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

const models = [
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

const Test = () => {
  return (
    <div>
      <div className="main-container">
        <div id="titleHome">
          <h1 id="title">Porshe</h1>
          <p id="undertitle">A short history of a beautiful car</p>
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
            </div>
            <Link to={`/Three?model=${card.title}`}>
              <div className="ThreeModel">
                <Canvas
                  camera={{ position: [10, 1, 0], fov: 20 }}
                  gl={{ alpha: true }}
                >
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 0]} />
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

export default Test;
