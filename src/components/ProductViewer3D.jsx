import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Html, useProgress, Center } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
        <div className="w-10 h-10 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin mb-2"></div>
        <p className="text-xs font-bold text-gray-600">
          Cargando {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return (
    // <Center> ayuda, pero recuerda arreglar el gato en gltf.report si sigue fallando
    <Center top> 
      <primitive object={scene} />
    </Center>
  );
}

export default function ProductViewer3D({ modelPath }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing bg-gray-50 rounded-3xl touch-none">
      <Canvas 
        dpr={[1, isMobile ? 1.5 : 2]} 
        camera={{ fov: 45 }} 
        shadows 
        // CAMBIO IMPORTANTE: "demand" a veces corta la inercia. 
        // OrbitControls maneja esto bien, pero si sientes lag, cambia a "always" (gasta más batería).
        frameloop="demand" 
        gl={{ 
          preserveDrawingBuffer: true, 
          antialias: !isMobile, 
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={<Loader />}>
          <Stage 
            environment="city" 
            intensity={0.6}
            adjustCamera={1.2} 
            shadows="contact"
          >
            <Model modelPath={modelPath} />
          </Stage>
        </Suspense>
        
        <OrbitControls 
          makeDefault 
          
          // 1. FLUIDEZ (INERCIA)
          // Esto hace que "patine" suavemente al soltarlo
          enableDamping={true}
          dampingFactor={0.05}
          
          // 2. VELOCIDAD
          // Lo subí un poco porque con damping se siente más lento
          rotateSpeed={1.0} 
          
          // 3. RESTRICCIONES
          enablePan={false} 
          enableZoom={true}
          minDistance={1} 
          maxDistance={8}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.8} 
          
          // 4. AUTO-ROTACIÓN SUAVE (Opcional)
          // Si quieres que gire lento cuando nadie lo toca, descomenta esto:
          // autoRotate={true}
          // autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
} 