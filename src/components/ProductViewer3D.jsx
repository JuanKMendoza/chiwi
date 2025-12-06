import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

function Model({ modelPath }) {
  // useGLTF maneja automáticamente la descompresión Draco
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

export default function ProductViewer3D({ modelPath }) {
  return (
    <div className="w-full h-full cursor-move bg-gray-50">
      {/* frameloop="demand" es CLAVE: solo consume batería si lo mueves */}
      <Canvas dpr={[1.5, 2]} gl={{ preserveDrawingBuffer: true, antialias: true }} camera={{ fov: 50 }} shadows frameloop="demand">
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} adjustCamera>
            <Model modelPath={modelPath} />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault autoRotate={false} />
      </Canvas>
    </div>
  );
}