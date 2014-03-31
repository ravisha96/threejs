var scene, camera, particles, renderer, material, i, j;

// Scene instance
scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 150;
camera.lookAt(scene.position);

axis = new THREE.AxisHelper();
scene.add(axis);

renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xFFFFFF);

// genrate particles in the canvas
function createParticles() {
	var geometry = new THREE.Geometry();

    var material = new THREE.ParticleBasicMaterial({size: 4, vertexColors: true, color: 0xFFFFFF});

    for (var x = -5; x < 5; x++) {

        for (var y = -5; y < 5; y++) {

            var particle = new THREE.Vector3( x * 10, y * 10, 0 );

            geometry.vertices.push( particle );

            geometry.colors.push( new THREE.Color(Math.random() * 0x00FFFF) );

        }
    }

    var system = new THREE.ParticleSystem( geometry, material);
    
    scene.add(particle);
}

createParticles();


$("#WebGl-output").append(renderer.domElement);

renderer.render(scene, camera);