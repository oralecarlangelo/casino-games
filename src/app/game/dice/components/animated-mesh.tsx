import { a, config, useSpring } from "@react-spring/three";
import { useLoader } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mesh, TextureLoader } from "three";
import { useDiceContext } from "../context/dice-context";

// Define the rotations for each face of the dice
const faceRotations: [number, number, number][] = [
  [0, -Math.PI / 2, 0], // 1
  [0, Math.PI / 2, 0], // 2
  [Math.PI / 2, 0, 0], // 3
  [-Math.PI / 2, 0, 0], // 4
  [0, 0, 0], // 5
  [Math.PI, 0, 0], // 6
];
const AnimatedMesh: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const { triggerShuffle, setTriggerShuffle, diceResult } = useDiceContext();
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [targetRotation, setTargetRotation] = useState<
    [number, number, number]
  >([0, 0, 0]);
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  // Load textures for dice faces
  const textures = useLoader(TextureLoader, [
    "/textures/1.png",
    "/textures/2.png",
    "/textures/3.png",
    "/textures/4.png",
    "/textures/5.png",
    "/textures/6.png",
  ]);

  // Spring animation for position and rotation
  const [props, setSpring] = useSpring<any>(() => ({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: config.default,
  }));

  const throwDice = useCallback(() => {
    // Use the dice result to select the target rotation
    const newRotation = faceRotations[diceResult - 1]; // Ensure correct indexing
    setTargetRotation(newRotation);

    // Initial random rotation and position for the throwing effect
    const initialRotation: [number, number, number] = [
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    ];
    setRotation(initialRotation);

    const initialPosition: [number, number, number] = [0, 0, 0];
    const midPosition: [number, number, number] = [0, 2, -2];
    const finalPosition: [number, number, number] = [0, 0, 0];

    // Trigger the throw animation
    setSpring.start({
      to: async (next) => {
        // Move up and forward while spinning
        await next({
          position: midPosition,
          rotation: [
            initialRotation[0] + Math.PI * 4,
            initialRotation[1] + Math.PI * 4,
            initialRotation[2] + Math.PI * 4,
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
            console.log("Dice result (face up):", diceResult);
          },
        });
      },
      from: { position: initialPosition, rotation: initialRotation },
    });
  }, [diceResult, setSpring]);

  useEffect(() => {
    if (triggerShuffle) {
      throwDice();
      setTriggerShuffle(false);
    }
  }, [triggerShuffle, setTriggerShuffle, throwDice]);

  return (
    <a.mesh ref={meshRef} position={props.position} rotation={props.rotation}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attach="material-0" map={textures[0]} />
      <meshStandardMaterial attach="material-1" map={textures[1]} />
      <meshStandardMaterial attach="material-2" map={textures[2]} />
      <meshStandardMaterial attach="material-3" map={textures[3]} />
      <meshStandardMaterial attach="material-4" map={textures[4]} />
      <meshStandardMaterial attach="material-5" map={textures[5]} />
    </a.mesh>
  );
};

export default AnimatedMesh;
