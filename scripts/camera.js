import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import gsap from 'gsap';


const scene = new THREE.Scene();

const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 'red' }));
scene.add(cube);


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// gsap.to(cube.rotation, {
//     y: Math.PI * 2,
//     duration: 5,
//     ease: "linear",
//     repeat: -1,
// });

// camera.position.set(2, 2, 2);

// gsap.to(camera, {
//     duration: 2,
//     fov: 140,
//     ease: "linear",
//     repeat: -1,
//     yoyo: true,
//     onUpdate: () => {
//         camera.updateProjectionMatrix(); // You must call this after changing fov
//     }
// });



camera.lookAt(cube.position);


// window.addEventListener('mousemove', (e) => {
//     const x = (e.clientX / window.innerWidth) * 2 - 1;
//     const y = -(e.clientY / window.innerHeight) * 2 + 1; 

//     camera.position.x = x * 5;
//     camera.position.y = y * 5;

//     camera.lookAt(cube.position);
// });


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();