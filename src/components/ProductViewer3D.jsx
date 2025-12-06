import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Html, useProgress } from '@react-three/drei';

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
  // VOLVEMOS A LO SIMPLE: Sin <Center>, sin trucos. 
  // Dejamos el modelo puro para que el Stage lo manipule.
  return <primitive object={scene} />;
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
        // MANTENEMOS LA OPTIMIZACIÓN DE VELOCIDAD
        dpr={[1, isMobile ? 1.5 : 2]} 
        camera={{ fov: 50 }} 
        shadows 
        frameloop="demand"
        gl={{ 
          preserveDrawingBuffer: true, 
          antialias: !isMobile, 
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={<Loader />}>
          
          {/* 
             AQUÍ ESTÁ EL SECRETO: 
             El Stage arregla el centrado automáticamente.
             shadows="contact" mantiene el rendimiento alto.
          */}
          <Stage 
            environment="city" 
            intensity={0.6}
            adjustCamera 
            shadows="contact"
          >
            <Model modelPath={modelPath} />
          </Stage>
          
        </Suspense>
        
        {/* CONTROLES SUAVES */}
        <OrbitControls 
          makeDefault 
          enablePan={false} // Mantener bloqueado el paneo para que no lo saquen de pantalla
          enableZoom={true}
          minDistance={1} 
          maxDistance={8}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.8}
          
          // Inercia para que se sienta fluido
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={1.0}
        />
      </Canvas>
    </div>
  );
}