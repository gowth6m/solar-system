"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Planet from '@/components/planet';


export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef && containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(0, 0, 0);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const planet1 = new Planet('white', 1, 0.001, 0.01);
    scene.add(planet1.mesh);

    const planet2 = new Planet('white', 2, 0.002, 0.02);
    scene.add(planet2.mesh);

    const planet3 = new Planet('white', 3, 0.003, 0.03);
    scene.add(planet3.mesh);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      planet1.animate();
      planet2.animate();
      planet3.animate();

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw'
  };

  return <>
    <div ref={containerRef} style={containerStyle} ></div>
    <div className='z-10 text-4xl fixed top-24 left-[50%] font-mono text-opacity-20 rotate-6 font-black'>Spin Spin Spin</div>
  </>;
}
