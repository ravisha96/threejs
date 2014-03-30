/**
 * [Rendering and viewing 3D object, first example contain following object plane, cube, sphere, camera, axis]
 * @return {[function]} [description]
 */
var WebGL = (function ($) {

	function ThreeJs () {

		var scene, plane, planeGeometry, cube, cubeGeometry, sphereGeometry, sphere, camera, axis, lights, renderer, width, height;
		/**
		 * [scene variable is a container that is used to store and keep 
		 * track of all the objects that we want to render.]
		 * * @type {THREE} Scene Class
		 */
		scene = new THREE.Scene();

		height = window.innerHeight,

		width = window.innerWidth,

		/**
		 * [camera defines what we'll see when we render the scene.]
		 * @type {THREE} Camera Class
		 * @class [position camera in the scene]
		 * @property {[mess object]} [lookAt] [make sure that the camera 
		 * is looking at our objects, this will point it at the center 
		 * of our scene.]
		 */
		camera = new THREE.PerspectiveCamera( 45, width/height, 0.1, 1000 );
		camera.position = {
			x: -30,
			y: 40,
			z: 30
		};
		camera.lookAt(scene.position);

		/**
		 * [renderer responsible for calculating what the scene will 
		 * look in the browser based on camera angle.]
		 * @type {THREE} Class
		 * @class [use Graphics Card to render the scene]
		 * @property {[hexadecimal color code]} [setClearColor] [set background color]
		 * @property {[int]} [setSize] [tells renderer how large the scene needs to be rendered]
		 */
		renderer = new THREE.WebGLRenderer();

		renderer.setClearColor(0xEEEEEE);
		renderer.setSize(width, height);


		axis = new THREE.AxisHelper(20);
		scene.add(axis);

		planeGeometry = new THREE.PlaneGeometry( 60, 20);
		plane = new THREE.Mesh(planeGeometry, new THREE.LineBasicMaterial( {color: 0xcccccc, linewidth: 1} ));
		plane.rotation.x = 11;
		plane.position= {
			x : 10,
			y: 0,
			z: 0,
		};
		scene.add( plane );


		cubeGeometry = new THREE.CubeGeometry( 4, 4, 4 );
		cube = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: true} ));
		cube.position= {
			x : -4,
			y: 3,
			z: 0,
		};
		scene.add( cube );

		sphereGeometry = new THREE.SphereGeometry( 4, 20, 20 );
		sphere = new THREE.Mesh(sphereGeometry, new THREE.MeshBasicMaterial( {color: 0x7777ff, wireframe: true} ));
		sphere.position= {
			x : 20,
			y: 4,
			z: 2,
		};
		scene.add( sphere );

		$("#WebGl-output").append(renderer.domElement);

		/**
		 * @property {[scene,camera object]} [render] [we tell renderer to render the scene 
		 * using the porvided camera].
		 */
		renderer.render(scene, camera);

	}

	return new ThreeJs;

})($);