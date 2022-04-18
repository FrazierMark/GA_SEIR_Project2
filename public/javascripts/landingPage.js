import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const objectPath = document.getElementById('helper').getAttribute('data-name');
// console.log(objectPath)
//Create Scene
const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.x = -2.5
camera.position.y = 0
camera.position.z = -.5

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

//Materials & Textures
// const material = new THREE.MeshMatcapMaterial;
// const matcapTexture = new THREE.TextureLoader().load('https://makio135.com/matcaps/64/B6B8B1_994A24_315C81_927963-64px.png')
// material.matcap = matcapTexture
// const geometry = new THREE.SphereGeometry(.5, 70, 70)
// const sphere = new THREE.Mesh(geometry, material)
// sphere.position.x = 5.
// sphere.position.y = 1.
// sphere.position.z = -2.58
// scene.add(sphere)

// Lighting
const hemiLight = new THREE.HemisphereLight(0xFEFAEB, 0x080820, 2.2);
scene.add(hemiLight);
const ambientLight = new THREE.AmbientLight(0x404040, 3);
scene.add(ambientLight)
const light = new THREE.SpotLight(0xffa95c, 2);
light.position.set(-50, 50, 50);
light.castShadow = true;
light.shadow.bias = -0.0001;
light.shadow.mapSize.width = 1024 * 4;
light.shadow.mapSize.height = 1024 * 4;
scene.add(light);

// Load Furniture
const gltfLoader = new GLTFLoader();
let model;

gltfLoader.load(
    '../models/tv3.glb',
    (gltf) => {
        model = gltf.scene
        model.scale.set(.0002, .0002, .0002)
        model.traverse(n => {
            if (n.isMesh) {
                n.material.metalness = 0.45
                n.castShadow = false;
                n.receiveShadow = false;
                if (n.material.map) n.material.map.anisotropy = 16;
            }
        });
        scene.add(model)
        model.position.y = -.5
        model.rotation.y = 3.6
    }
)

window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    },
    false
)

function animate() {
    requestAnimationFrame(animate)
    if (model) {
        model.rotation.y += 0.005
    }

    controls.update()
    light.position.set(
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 10,
    )
    render()
    // stats.update()
}

function render() {
    renderer.render(scene, camera)
}

animate()

