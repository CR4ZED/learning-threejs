import * as THREE from 'three';

const scene = new THREE.Scene();


const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 'red' }));
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 'green' }));
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 'blue' }));

cube2.position.x = 2;
cube3.position.x = -2;

const group = new THREE.Group();

group.add(cube1, cube2, cube3);

scene.add(group);

const axis = new THREE.AxesHelper(5);


scene.add(axis);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 1;
camera.position.x = 1;

camera.lookAt(group.position);

const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);


function animate() {
  requestAnimationFrame(animate);
  group.rotation.x += 0.01;
  group.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();