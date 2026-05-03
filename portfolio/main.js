// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Three.js Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Create Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 2000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    // Spread particles across a wide area
    posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Create a nice glowing material for particles
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.15,
    color: 0x00ffcc,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Add some geometric shapes floating around (representing Android/Clean Architecture blocks)
const group = new THREE.Group();

const shapes = [];
const geometries = [
    new THREE.TorusGeometry(3, 1, 16, 100),
    new THREE.OctahedronGeometry(2),
    new THREE.IcosahedronGeometry(2.5),
    new THREE.BoxGeometry(3, 3, 3)
];

const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffcc,
    wireframe: true,
    transparent: true,
    opacity: 0.15
});

for(let i = 0; i < 8; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const mesh = new THREE.Mesh(geometry, wireframeMaterial);
    
    mesh.position.x = (Math.random() - 0.5) * 60;
    mesh.position.y = (Math.random() - 0.5) * 60;
    mesh.position.z = (Math.random() - 0.5) * 40 - 10;
    
    // Add random rotation speeds to custom properties
    mesh.userData = {
        rotX: (Math.random() - 0.5) * 0.01,
        rotY: (Math.random() - 0.5) * 0.01,
        rotZ: (Math.random() - 0.5) * 0.01
    };
    
    shapes.push(mesh);
    group.add(mesh);
}

scene.add(group);

// Mouse interaction
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Scroll interaction
let scrollY = 0;
document.addEventListener('scroll', () => {
    scrollY = window.scrollY;
});

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const elapsedTime = clock.getElapsedTime();

    // Rotate particles slowly
    particlesMesh.rotation.y = elapsedTime * 0.05;
    particlesMesh.rotation.x = elapsedTime * 0.02;

    // Rotate geometric shapes
    shapes.forEach(shape => {
        shape.rotation.x += shape.userData.rotX;
        shape.rotation.y += shape.userData.rotY;
        shape.rotation.z += shape.userData.rotZ;
    });

    // Parallax effect based on mouse and scroll
    // Move the group based on mouse movement
    group.position.x += (mouseX * 5 - group.position.x) * 0.05;
    group.position.y += (mouseY * 5 - group.position.y) * 0.05;
    
    // Move camera slightly based on scroll
    camera.position.y = -scrollY * 0.01;

    renderer.render(scene, camera);
}

animate();

// Handle Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
