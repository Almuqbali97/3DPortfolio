import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    // </mesh>
    // <primitive object={computer.scene} scale={1} position-y={-4} position-x={0} position-z={0} rotation-y={0} />
    // <primitive
    //   object={computer.scene}
    //   scale={isMobile ? 0.7 : 0.75}
    //   position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    //   rotation={[-0.01, -0.2, -0.1]}
    // />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // <Canvas
    //   frameloop='demand'

    //   shadows
    //   dpr={[1, 2]}
    //   camera={{ position: [20, 3, 5], fov: 25 }}
    //   gl={{ preserveDrawingBuffer: true }}
    // >
    //   <Suspense fallback={<CanvasLoader />}>
    //     <OrbitControls
    //       enableZoom={false}
    //       enablePan={false}
    //       maxPolarAngle={Math.PI / 2}
    //       minPolarAngle={Math.PI / 2}
    //     />
    //     <Computers isMobile={isMobile} />
    //   </Suspense>

    //   <Preload all />
    // </Canvas>
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        // near: 0.1,
        // far: 200,
        position: [20, 3, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;