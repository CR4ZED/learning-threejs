import * as THREE from "three";
import gsap from "gsap";

const scene = new THREE.Scene();

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow" })
);

scene.add(cube);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

scene.background = new THREE.Color("lightblue");
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const clock = new THREE.Clock();

// function animate() {
//     cube.position.y = Math.sin(clock.getElapsedTime()) * 2
//     cube.position.x = Math.cos(clock.getElapsedTime()) * 2;
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }
// animate();

gsap.to(cube.position, {
  duration: 2,
  x: 2,
  repeat: -1,
  ease: "power1.inOut",
  yoyo: true,
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
