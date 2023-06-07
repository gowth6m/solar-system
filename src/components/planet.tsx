"use client"

import * as THREE from 'three';

class Planet {
    mesh: THREE.Mesh;
    distance: number;
    orbitSpeed: number;
    rotationSpeed: number;

    constructor(color: string, distance: number, orbitSpeed: number, rotationSpeed: number) {
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshPhongMaterial({ color });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(distance, 0, 0);
        this.distance = distance;
        this.orbitSpeed = orbitSpeed;
        this.rotationSpeed = rotationSpeed;
    }

    animate() {
        this.mesh.rotation.y += this.rotationSpeed;
        this.mesh.position.x = Math.sin(Date.now() * this.orbitSpeed) * this.distance;
        this.mesh.position.z = Math.cos(Date.now() * this.orbitSpeed) * this.distance;
    }
}

export default Planet;
