import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Globe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<{ scene: THREE.Scene; camera: THREE.PerspectiveCamera; renderer: THREE.WebGLRenderer; globe: THREE.Mesh } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for WebGL support
    if (!THREE.WEBGL.isWebGLAvailable()) {
      const warning = THREE.WEBGL.getWebGLErrorMessage();
      containerRef.current.appendChild(warning);
      return;
    }

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false
      });
      
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Create globe
      const geometry = new THREE.SphereGeometry(2, 64, 64);
      const material = new THREE.MeshPhongMaterial({
        color: 0x0066FF,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      
      const globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Add point light
      const pointLight = new THREE.PointLight(0x0066FF, 1);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      camera.position.z = 5;

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.002;
        renderer.render(scene, camera);
      };

      animate();

      globeRef.current = { scene, camera, renderer, globe };

      // Cleanup
      return () => {
        if (containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (error) {
      console.error('Error initializing WebGL:', error);
      if (containerRef.current) {
        const errorMessage = document.createElement('div');
        errorMessage.innerHTML = 'Unable to initialize 3D globe. Please ensure your browser supports WebGL.';
        errorMessage.style.color = 'white';
        errorMessage.style.padding = '20px';
        containerRef.current.appendChild(errorMessage);
      }
    }
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !globeRef.current) return;

      const { camera, renderer } = globeRef.current;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div ref={containerRef} className="w-full h-[500px]" />;
};