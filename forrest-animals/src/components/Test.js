import React, { useRef } from "react";
import styles from "../styles/Test.css";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AmbientLight, DirectionalLight, PointLight } from "three"; // Import lights

import { motion } from "framer-motion";

const Porschemodel = () => {
  const { scene } = useGLTF("./models/Porsche.glb");

  return <primitive object={scene} />;
};

const Test = () => {
  return (
    <div>
      <div id="titleHome">
        <h1 id="title">Porshe</h1>
        <p id="undertitle">A short history of a beautifull car</p>
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
          <p>Tiger</p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <p>Snake</p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <p>Rat</p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <p>Dragon</p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <p>Monkey</p>
        </motion.div>
      </div>
      <div style={{ height: "60vh", width: "80vh" }} id="peepeepoopoo">
        <Canvas
          camera={{ position: [0, 2, 0], fov: 60 }} // Updated camera position
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
  );
};

export default Test;
