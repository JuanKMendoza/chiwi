import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Html, useProgress } from '@react-three/drei';

/**
 * COMPONENTE DE CARGA (LOADER)
 * Muestra un spinner y el porcentaje mientras descarga el modelo.
 * Usa <Html center> para centrarlo perfectamente en el canvas.
 */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
        {/* Spinner animado color Naranja Chiwi */}
        <div className="w-10 h-10 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin mb-2"></div>
        <p className="text-xs font-bold text-gray-600">
          Cargando {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}

/**
 * COMPONENTE DEL MODELO
 * Carga el archivo .glb optimizado
 */
function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

/**
 * VISOR PRINCIPAL
 */
export default function ProductViewer3D({ modelPath }) {
  // Estado para detectar si es celular
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar el ancho de la pantalla
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    // Ejecutar al inicio
    checkMobile();
    
    // Escuchar cambios de tamaño (por si giran el celular)
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full cursor-move bg-gray-50 rounded-3xl touch-none">
      <Canvas 
        // 1. OPTIMIZACIÓN CLAVE: Pixel Ratio (DPR)
        // Celulares: Máximo 1.5 (HD). Escritorio: Máximo 2 (Retina).
        // Esto evita que el celular intente renderizar en 4K y se trabe.
        dpr={[1, isMobile ? 1.5 : 2]} 
        
        camera={{ fov: 50 }} 
        
        // 2. SOMBRAS
        // Las activamos, pero usaremos "contact" en el Stage que es más barato.
        shadows 
        
        // 3. RENDIMIENTO
        // "demand": Solo calcula frames cuando el usuario mueve el modelo. Ahorra batería.
        frameloop="demand"
        
        // 4. CONFIG WEBGL
        gl={{ 
          preserveDrawingBuffer: true, // Evita parpadeos en algunos Androids
          antialias: !isMobile,        // Desactivar antialias en móvil libera mucha potencia GPU
          powerPreference: "high-performance"
        }}
      >
        {/* Suspense maneja la carga asíncrona y muestra el Loader */}
        <Suspense fallback={<Loader />}>
          
          {/* STAGE: Configuración de estudio automática */}
          <Stage 
            environment="city" // Iluminación genérica bonita
            intensity={0.6}    // Intensidad de la luz
            adjustCamera       // Centra el modelo automáticamente
            shadows="contact"  // Sombra falsa en el piso (mucho más rápida que la real)
          >
            <Model modelPath={modelPath} />
          </Stage>
          
        </Suspense>
        
        {/* CONTROLES DE CÁMARA */}
        <OrbitControls 
          makeDefault 
          autoRotate={false} 
          enableZoom={true} 
          enablePan={false} // No dejar que saquen el objeto del centro
          minPolarAngle={Math.PI / 4} // Limita rotación vertical (para que no vean por debajo)
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}