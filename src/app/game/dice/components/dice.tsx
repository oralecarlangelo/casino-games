import { Canvas } from "@react-three/fiber";
import AnimatedMesh from "./animated-mesh";

const Dice: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Canvas
        className="w-[300px] h-[300px]"
        style={{
          width: 500,
          height: 500,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <AnimatedMesh />
        {/* <ReusableDice initialFace={5} /> */}
      </Canvas>
    </div>
  );
};

export default Dice;
