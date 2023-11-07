import React, { useRef } from "react";
import styles from "../styles/Model1.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

const Porschemodel = () => {
  const { scene } = useGLTF("./models/porsche_1.glb");

  return <primitive object={scene} />;
};

const Model1 = () => {
  return (
    <div id="model1Container">
      <motion.div
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Model1;
