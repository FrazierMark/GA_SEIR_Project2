import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// const objectPath = document.getElementById('helper').getAttribute('data-name');
const featuredProductURL = 'https://www.img.wfrcdn.com/docresources/44316/205/2057050.glb'

//Create Scene
const scene = new THREE.Scene()

// Create Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 2.5
camera.position.y = 1

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xffffff, 0);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement)
const controls = new OrbitControls(camera, renderer.domElement)


// Lighting
const hemiLight = new THREE.HemisphereLight(0xFEFAEB, 0x080820, 1);
scene.add(hemiLight);
const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
scene.add(ambientLight)
const light = new THREE.SpotLight(0xffa95c, 1);
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
    featuredProductURL,
    (gltf) => {
        model = gltf.scene
        model.scale.set(1.0, 1.0, 1.0)
        model.traverse(n => {
            if (n.isMesh) {
                n.castShadow = true;
                n.receiveShadow = true;
                if (n.material.map) n.material.map.anisotropy = 16;
            }
        });
        scene.add(model)
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

    // model.rotation.x += 0.01
    if (model) {
        model.rotation.y += 0.007
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

