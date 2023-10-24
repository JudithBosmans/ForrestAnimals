import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

const Models = [
  { title: "Cat", url: "./models/cat.glb" },
  { title: "Butterfly", url: "./models/Butterfly.glb" },
];

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function Three() {
  const { title } = useControls({
    title: {
      options: Models.map(({ title }) => title),
    },
  });

  return (
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
          <Model url={Models[Models.findIndex((m) => m.title === title)].url} />
        </group>
        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
      {/* <span id="info">The {title} is selected.</span> */}
    </div>
  );
}
