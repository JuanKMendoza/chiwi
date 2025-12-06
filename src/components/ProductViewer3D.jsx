import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Html, useProgress, Center } from '@react-three/drei';

/**
 * LOADER (Igual que antes)
 */
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

/**
 * MODELO
 * Aquí aplicamos el truco del <Center>
 */
function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return (
    // <Center> calcula la caja del modelo y lo pone EXACTAMENTE en el medio.
    // top: alinea la parte superior del modelo.
    // disableY/Z: false permite centrar en todos los ejes.
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

/**
 * VISOR PRINCIPAL
 */
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
        camera={{ fov: 45 }} // FOV un poco más cerrado para menos distorsión "ojo de pez"
        shadows 
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
            adjustCamera={1.2} // Ajusta la cámara un poco más lejos (default es 1)
            shadows="contact"
          >
            <Model modelPath={modelPath} />
          </Stage>
          
        </Suspense>
        
        {/* CONTROLES ESTRICTOS TIPO E-COMMERCE */}
        <OrbitControls 
          makeDefault 
          
          // 1. BLOQUEAR EL DESPLAZAMIENTO (Vital para que no se mueva de lugar)
          enablePan={false} 
          
          // 2. CONTROLAR LA VELOCIDAD (Para que no gire como loco)
          rotateSpeed={0.5} 
          
          // 3. LIMITAR EL ZOOM (Para que no entren dentro del gato ni se alejen al infinito)
          enableZoom={true}
          minDistance={1} 
          maxDistance={8}
          
          // 4. LIMITAR GIRO VERTICAL (Esto evita que lo volteen de cabeza)
          // Math.PI / 2 es el horizonte (suelo).
          // Lo configuramos para que solo puedan verlo desde "frente" o "un poco arriba".
          minPolarAngle={Math.PI / 4} // No mirar desde muy arriba (vista de pájaro extrema)
          maxPolarAngle={Math.PI / 1.8} // No mirar por debajo del suelo
          
          // Opcional: Si quieres que vuelva a girar solo si lo sueltan
          autoRotate={false} 
        />
      </Canvas>
    </div>
  );
}