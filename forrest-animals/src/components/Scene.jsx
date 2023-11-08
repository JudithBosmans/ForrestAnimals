import React from "react";
import styles from "../styles/Scene.css";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

const Scene = () => {
  return (
    <Canvas
      id="canvas"
      style={{ width: "100%", height: "100%", margin: "0", overflow: "hidden" }}
    >
      <Suspense fallback={null}>
        <Environment files="./pics/envmap.hdr" background />

        <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
        <OrbitControls target={[-2.64, -0.71, 0.03]} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
