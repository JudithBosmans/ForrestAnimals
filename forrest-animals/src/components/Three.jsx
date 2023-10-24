import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import app from "./App";

const Models = [
  {
    title: "Cat",
    subTitle: "Felix domesticus",
    text: "Blablabla",
    pic: "https://i.ibb.co/Bwws9KP/sub-bts-one-shots-who-s-your-daddy-PJM.gif",
    url: "./models/cat.glb",
  },
  {
    title: "Butterfly",
    subTitle: "Anglais Urticae",
    text: "Blablabla",
    pic: "https://i.ibb.co/gtfLwGr/A-garota-das-borboletas.gif",
    url: "./models/Butterfly.glb",
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
      title: "Cat",
      url: "./models/cat.glb",
    },
    {
      title: "Butterfly",
      url: "./models/Butterfly.glb",
    },
  ];

  const selectedModel = models.find((model) => model.title === modelTitle);
  return (
    <div>
      <Link to={app}>Go Back id</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "150vh",
        }}
      >
        <Canvas camera={{ position: [0, 1, 3], near: 0.025 }}>
          <Environment files="./models/background.hdr" background />
          <group>
            <Model url={selectedModel.url} />
          </group>
          <OrbitControls autoRotate />
          <Stats />
        </Canvas>
      </div>
    </div>
  );
}
