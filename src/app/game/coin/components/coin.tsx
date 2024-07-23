import { Canvas } from "@react-three/fiber";
import AnimatedCoin from "./animated-coin";

interface CoinProps {
  onAnimationComplete: () => void;
}

const Coin: React.FC<CoinProps> = ({ onAnimationComplete }) => {
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
        <AnimatedCoin
          initialFace="heads"
          onAnimationComplete={onAnimationComplete}
        />
      </Canvas>
    </div>
  );
};

export default Coin;
