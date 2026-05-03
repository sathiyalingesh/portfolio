// Globals
let scene, camera, renderer;
let phoneGroup, ringsGroup, particlesMesh, floatingObjectsGroup;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

// Colors matching the prompt
const colors = {
    bgDark: 0x050816,
    androidGreen: 0x3DDC84,
    neonCyan: 0x00E5FF,
    deepBlack: 0x02030A,
    white: 0xFFFFFF
};

// Initialization function
function initScene() {
    // 1. Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(colors.bgDark);
    scene.fog = new THREE.FogExp2(colors.bgDark, 0.015);

    // 2. Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 30);

    // 3. Renderer setup
    const canvas = document.querySelector('#webgl-canvas');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(colors.androidGreen, 2, 50);
    pointLight.position.set(10, 0, 10);
    scene.add(pointLight);

    const cyanLight = new THREE.PointLight(colors.neonCyan, 1.5, 50);
    cyanLight.position.set(-10, 10, 10);
    scene.add(cyanLight);

    // 5. Build the Scene
    createPhone();
    createRings();
    createParticles();
    createFloatingObjects();
    createFloorGrid();

    // 6. Event Listeners
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);

    // 7. Start Animation Loop
    animate();
}

// Create Central Floating Phone (using simple geometries)
function createPhone() {
    phoneGroup = new THREE.Group();

    // Phone casing (Glass-like Box)
    const caseGeo = new THREE.BoxGeometry(8, 16, 0.8);
    const caseMat = new THREE.MeshPhysicalMaterial({
        color: 0x111111,
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.8,
        transmission: 0.5,
        clearcoat: 1.0
    });
    const phoneCase = new THREE.Mesh(caseGeo, caseMat);

    // Phone screen (Glowing inner part)
    const screenGeo = new THREE.PlaneGeometry(7.2, 15);
    const screenMat = new THREE.MeshStandardMaterial({
        color: 0x000000,
        emissive: 0x050816,
        emissiveIntensity: 0.5,
        roughness: 0.2
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.z = 0.41; // Slightly in front of case

    // Add UI lines/widgets to screen using Planes
    const uiGroup = new THREE.Group();
    
    // UI Header
    const headerGeo = new THREE.PlaneGeometry(6, 0.5);
    const headerMat = new THREE.MeshBasicMaterial({ color: colors.androidGreen, transparent: true, opacity: 0.6 });
    const header = new THREE.Mesh(headerGeo, headerMat);
    header.position.set(0, 6.5, 0.01);
    uiGroup.add(header);

    // App Widgets
    for(let i=0; i<3; i++) {
        const widgetGeo = new THREE.PlaneGeometry(6, 2.5);
        const widgetMat = new THREE.MeshBasicMaterial({ color: colors.neonCyan, transparent: true, opacity: 0.3 });
        const widget = new THREE.Mesh(widgetGeo, widgetMat);
        widget.position.set(0, 3 - (i * 3.5), 0.01);
        uiGroup.add(widget);
    }
    
    // Code lines (tiny green lines)
    for(let i=0; i<5; i++) {
        const lineGeo = new THREE.PlaneGeometry(Math.random() * 4 + 1, 0.1);
        const lineMat = new THREE.MeshBasicMaterial({ color: colors.androidGreen });
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.position.set((Math.random() - 0.5) * 2, -6 + (i * 0.5), 0.01);
        uiGroup.add(line);
    }

    screen.add(uiGroup);
    phoneGroup.add(phoneCase);
    phoneGroup.add(screen);
    
    // Position phone slightly to the right to balance the HTML overlay
    phoneGroup.position.x = 10;
    scene.add(phoneGroup);
}

// Create Holographic Rings
function createRings() {
    ringsGroup = new THREE.Group();
    
    const ringGeometries = [
        new THREE.TorusGeometry(12, 0.1, 16, 100),
        new THREE.TorusGeometry(14, 0.05, 16, 100),
        new THREE.TorusGeometry(16, 0.2, 16, 100)
    ];

    const materials = [
        new THREE.MeshBasicMaterial({ color: colors.androidGreen, transparent: true, opacity: 0.5 }),
        new THREE.MeshBasicMaterial({ color: colors.neonCyan, transparent: true, opacity: 0.3 }),
        new THREE.MeshBasicMaterial({ color: colors.androidGreen, transparent: true, opacity: 0.1 })
    ];

    ringGeometries.forEach((geo, index) => {
        const ring = new THREE.Mesh(geo, materials[index]);
        ring.rotation.x = Math.PI / 2 + (Math.random() * 0.5);
        ring.rotation.y = Math.random() * Math.PI;
        
        // Custom animation speed data
        ring.userData = {
            rotSpeedX: (Math.random() - 0.5) * 0.01,
            rotSpeedY: (Math.random() - 0.5) * 0.01,
            rotSpeedZ: (Math.random() - 0.5) * 0.01
        };
        
        ringsGroup.add(ring);
    });

    ringsGroup.position.x = 10;
    scene.add(ringsGroup);
}

// Create Particle Field (700-1200 particles)
function createParticles() {
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colorsArr = new Float32Array(particleCount * 3);

    const colorChoice = [
        new THREE.Color(colors.androidGreen),
        new THREE.Color(colors.neonCyan),
        new THREE.Color(colors.white)
    ];

    for(let i = 0; i < particleCount; i++) {
        // Spread particles
        positions[i*3] = (Math.random() - 0.5) * 100;
        positions[i*3+1] = (Math.random() - 0.5) * 100;
        positions[i*3+2] = (Math.random() - 0.5) * 100;

        // Mix colors randomly
        const c = colorChoice[Math.floor(Math.random() * colorChoice.length)];
        colorsArr[i*3] = c.r;
        colorsArr[i*3+1] = c.g;
        colorsArr[i*3+2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorsArr, 3));

    const material = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);
}

// Create Floating 3D Objects
function createFloatingObjects() {
    floatingObjectsGroup = new THREE.Group();
    
    const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.OctahedronGeometry(1),
        new THREE.TetrahedronGeometry(1),
        new THREE.SphereGeometry(0.8, 16, 16)
    ];

    const wireframeMat = new THREE.MeshBasicMaterial({
        color: colors.neonCyan,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });

    const solidMat = new THREE.MeshStandardMaterial({
        color: colors.androidGreen,
        roughness: 0.2,
        metalness: 0.8
    });

    for(let i = 0; i < 20; i++) {
        const isWireframe = Math.random() > 0.5;
        const geo = geometries[Math.floor(Math.random() * geometries.length)];
        const mesh = new THREE.Mesh(geo, isWireframe ? wireframeMat : solidMat);

        mesh.position.set(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40 - 10
        );

        // Store unique animation speeds for each object
        mesh.userData = {
            rotX: (Math.random() - 0.5) * 0.02,
            rotY: (Math.random() - 0.5) * 0.02,
            floatSpeed: Math.random() * 0.02,
            initialY: mesh.position.y
        };

        floatingObjectsGroup.add(mesh);
    }

    scene.add(floatingObjectsGroup);
}

// Create 3D Floor Grid
function createFloorGrid() {
    const gridHelper = new THREE.GridHelper(200, 50, colors.androidGreen, 0x111111);
    gridHelper.position.y = -20;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;
    scene.add(gridHelper);
}

// Handlers
function handleMouseMove(event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
}

function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Parallax Target Calculation
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    // Smooth Camera Movement (Parallax)
    camera.position.x += (mouseX * 0.01 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.01 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    // Animate Phone Group
    if(phoneGroup) {
        phoneGroup.position.y = Math.sin(elapsedTime * 0.5) * 2;
        phoneGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.2 + targetX;
        phoneGroup.rotation.x = Math.cos(elapsedTime * 0.4) * 0.1 + targetY;
    }

    // Animate Rings
    if(ringsGroup) {
        ringsGroup.position.y = Math.sin(elapsedTime * 0.5) * 2;
        ringsGroup.children.forEach(ring => {
            ring.rotation.x += ring.userData.rotSpeedX;
            ring.rotation.y += ring.userData.rotSpeedY;
            ring.rotation.z += ring.userData.rotSpeedZ;
        });
    }

    // Animate Particles
    if(particlesMesh) {
        particlesMesh.rotation.y = elapsedTime * 0.02;
        particlesMesh.rotation.x = elapsedTime * 0.01;
    }

    // Animate Floating Objects
    if(floatingObjectsGroup) {
        floatingObjectsGroup.children.forEach(obj => {
            obj.rotation.x += obj.userData.rotX;
            obj.rotation.y += obj.userData.rotY;
            // Bob up and down
            obj.position.y = obj.userData.initialY + Math.sin(elapsedTime * 2 + obj.position.x) * 1.5;
        });
    }

    renderer.render(scene, camera);
}

// Execute
initScene();
