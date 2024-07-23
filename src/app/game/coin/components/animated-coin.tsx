import { a, config, useSpring } from "@react-spring/three";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { useCoinContext } from "../context/coin-context";

// Define the rotations for each face of the coin
const faceRotations: [number, number, number][] = [
  [0, 0, 0], // heads
  [Math.PI, 0, 0], // tails
];

interface AnimatedCoinProps {
  initialFace: "heads" | "tails";
  onAnimationComplete: () => void;
}

const AnimatedCoin: React.FC<AnimatedCoinProps> = ({
  initialFace,
  onAnimationComplete,
}) => {
  const meshRef = useRef<Mesh>(null);
  const { triggerFlip, setTriggerFlip, coinResult } = useCoinContext();

  // Set initial rotation based on the initialFace prop
  const initialRotation = faceRotations[initialFace === "heads" ? 0 : 1];

  // Load textures for coin faces
  const textures = useLoader(TextureLoader, [
    "/textures/heads.png",
    "/textures/tails.png",
  ]);

  useEffect(() => {
    if (triggerFlip) {
      flipCoin();
      setTriggerFlip(false);
    }
  }, [triggerFlip]);

  const flipCoin = () => {
    // Use the coin result to select the target rotation
    const newRotation = faceRotations[coinResult === "heads" ? 0 : 1];

    // Random rotation for the flipping effect
    const randomRotation: [number, number, number] = [
      Math.random() * Math.PI * 4,
      Math.random() * Math.PI * 4,
      Math.random() * Math.PI * 4,
    ];

    const initialPosition: [number, number, number] = [0, 0, 0];
    const midPosition: [number, number, number] = [0, 2, -2];
    const finalPosition: [number, number, number] = [0, 0, 0];

    // Trigger the flip animation
    setSpring.start({
      to: async (next) => {
        // Move up and forward while spinning
        await next({
          position: midPosition,
          rotation: [
            randomRotation[0] + Math.PI * 4,
            randomRotation[1] + Math.PI * 4,
            randomRotation[2] + Math.PI * 4,
          ],
          config: { duration: 1000 },
        });
        // Move down and settle on the final rotation
        await next({
          position: finalPosition,
          rotation: newRotation,
          config: { duration: 1000 },
          onRest: () => {
            console.log("Final rotation:", newRotation);
            console.log("Coin result (face up):", coinResult);
            onAnimationComplete(); // Notify the parent component that the animation is complete
          },
        });
      },
      from: { position: initialPosition, rotation: randomRotation },
    });
  };

  // Spring animation for position and rotation
  const [props, setSpring] = useSpring<any>(() => ({
    position: [0, 0, 0],
    rotation: initialRotation,
    config: config.default,
  }));

  return (
    <a.mesh ref={meshRef} position={props.position} rotation={props.rotation}>
      <boxGeometry args={[2, 2, 0.1]} />
      <meshStandardMaterial
        attach="material-0"
        transparent={true}
        opacity={0}
      />
      <meshStandardMaterial
        attach="material-1"
        transparent={true}
        opacity={0}
      />
      <meshStandardMaterial
        attach="material-2"
        transparent={true}
        opacity={0}
      />
      <meshStandardMaterial
        attach="material-3"
        transparent={true}
        opacity={0}
      />
      <meshStandardMaterial
        attach="material-4"
        map={textures[0]}
        transparent={true}
      />
      <meshStandardMaterial
        attach="material-5"
        map={textures[1]}
        transparent={true}
      />
    </a.mesh>
  );
};

export default AnimatedCoin;
