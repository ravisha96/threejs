var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 300;
camera.position.y = 30;
camera.position.x = -20;

var $container = $("#WebGl-output");

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFFFFFF);

// add elements to scene
scene.add(camera);

var axis = new THREE.AxisHelper(100);
scene.add(axis);

$container.append(renderer.domElement);

var sphere = new THREE.CubeGeometry( 40, 40, 40);
var material = new THREE.MeshLambertMaterial( {color: 0xCC0000} );
var mesh = new THREE.Mesh(sphere, material);
scene.add(mesh);

var light = new THREE.PointLight( 0xFFFFFF, 0.8);
light.position = {x: 180, y: 180, z: 130};
scene.add(light);

light = new THREE.PointLight( 0xFFFFFF, 1);
light.position = {x: -50, y: -50, z: 130};

scene.add(light);

renderer.render(scene, camera);

document.addEventListener('mousedown', splitMesh, false);

function splitMesh () {
    
    material = new THREE.ParticleBasicMaterial({size: 60,vertexColors: false, color: 0xCCCEEE});

    mesh = new THREE.Mesh(sphere, material);

    // Particles
    particleSystem = new THREE.ParticleSystem( sphere, material);

    console.log(particleSystem.geometry.vertices[0].x=100);
    particleSystem.position.y = 100;

    scene.add( particleSystem );

    // WebGl render
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );

    $("#WebGl-output").appendChild(renderer.domElement);

    renderer.setClearColor(0xFFFFFF);

}
