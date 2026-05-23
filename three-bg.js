// ===============================
// SaaS Dashboard - Three.js Background
// ===============================

// Scene setup
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Add canvas to background
document.body.appendChild(renderer.domElement);
renderer.domElement.style.position = "fixed";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
renderer.domElement.style.zIndex = "-1";

// ===============================
// Floating Particles (Data feel)
// ===============================

const geometry = new THREE.BufferGeometry();
const count = 80;

const positions = [];

for (let i = 0; i < count; i++) {
  positions.push(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  );
}

geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(positions, 3)
);

// Material
const material = new THREE.PointsMaterial({
  color: 0x38bdf8,
  size: 0.05
});

// Points system
const points = new THREE.Points(geometry, material);
scene.add(points);

// ===============================
// Animation loop
// ===============================

function animate() {
  requestAnimationFrame(animate);

  points.rotation.y += 0.001;
  points.rotation.x += 0.0005;

  renderer.render(scene, camera);
}

animate();

// ===============================
// Responsive handling
// ===============================

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});