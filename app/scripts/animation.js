/**
 * @description [updating scene with animation, ]
 * @return {[Class]} [single instance]
 */
var WebGL = (function ($) {

	function ThreeJs () {

		var scene, plane, planeGeometry, cube, cubeGeometry, sphereGeometry, 
		sphere, camera, axis, lights, renderer, width, height, spotLight, 
		stats, gui, that = this, step = 0;

		this.init = function () {

			this.framRateCount();

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
			camera = new THREE.PerspectiveCamera( 65, width/height, 0.1, 1000 );
			camera.position = {
				x: -30,
				y: 30,
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
			 * @property {[boolean]} [shadowMapEnabled] [enabling shadows]
			 */
			renderer = new THREE.WebGLRenderer();

			renderer.setClearColor(0xEEEEEE, 0.5);
			renderer.setSize(width, height);

			renderer.shadowMapEnabled = true;

			/**
			 * [axis will create graphical coordinates with xyz handle like Autodesk Maya]
			 * @type {THREE} Cass
			 */
			axis = new THREE.AxisHelper(20);
			scene.add(axis);

			/**
			 * [planeGeometry create a plane geometry]
			 * @type {THREE} Class
			 * @property {[int]} [rotation] [rotation value of plane]
			 * @property {[int]} [position] [position value of plane]
			 * @property {[boolean]} [receive shadow] [base object will only receive shadow]
			 */
			planeGeometry = new THREE.PlaneGeometry( 60, 20);
			plane = new THREE.Mesh(planeGeometry, new THREE.MeshLambertMaterial( {color: 0xFFFFFF} ));
			plane.rotation.x = 11;
			plane.position= {
				x : 10,
				y: -2,
				z: 0,
			};
			plane.receiveShadow = true;

			/**
			 * @description [adding the created geometry to scene]
			 */
			scene.add( plane );

			/**
			 * [cubeGeometry cube geometry]
			 * @property {[boolean]} [castShadow] [object will cast shadow]
			 */
			cubeGeometry = new THREE.CubeGeometry( 4, 4, 4 );
			cube = new THREE.Mesh(cubeGeometry, new THREE.MeshLambertMaterial( {color: 0xff0000} ));
			cube.position= {
				x : -4,
				y: 3,
				z: 0,
			};
			cube.castShadow = true;
			scene.add( cube );

			sphereGeometry = new THREE.SphereGeometry( 4, 20, 20 );
			sphere = new THREE.Mesh(sphereGeometry, new THREE.MeshLambertMaterial( {color: 0x7777ff} ));
			sphere.position= {
				x : 20,
				y: 4,
				z: 2,
			};
			sphere.castShadow = true;
			scene.add( sphere );



			/**
			 * [spotLight method illuminated our scene from its position]
			 * @property {[boolean]} [castShadow] [in order to see shadow, we need to enable cast shadow 
			 * features for the light. ]
			 */
			 spotLight = new THREE.SpotLight(0xffffff);
			 spotLight.position.set(-40, 90, 10);
			 spotLight.castShadow = true;
			 scene.add(spotLight);

			gui = new dat.GUI();
			gui.add(that.controls, 'rotationSpeed', 0, 5);
			gui.add(that.controls, 'bouncingSpeed', 0, 5);

			$("#WebGl-output").append(renderer.domElement);
			this.renderScene();
		};

		this.renderScene = function () {
			/**
			 * @description [yu can specify a function that is called at an interval defined by the
			 *  browser. ]
			 */
			stats.update (); // this reset stats object by telling we are in a new render cycle.

			cube.rotation.x += that.controls.rotationSpeed;
			cube.rotation.y += that.controls.rotationSpeed;
			cube.rotation.z += that.controls.rotationSpeed;


			step += that.controls.bouncingSpeed; // determines the speed
			sphere.position.x = 10*( Math.cos(step) );
			sphere.position.y = 10*( Math.sin(step) );
			sphere.position.z = 20*( Math.sin(step) );

			requestAnimationFrame(that.renderScene);
			renderer.render(scene, camera);
		};

		this.framRateCount = function () {

			stats = new Stats();
			stats.setMode(0);	// 0: fps, 1:rendering time

			stats.domElement.style.position = 'absolute';
			stats.domElement.style.left = '0px';
			stats.domElement.style.top = '0px';
			
			$("#stats-current-frame-rate").append(stats.domElement);

			return stats;
		};

		this.controls = new function () {
			this.rotationSpeed = 0.02;
			this.bouncingSpeed = 0.02;
		};

		return this.init();
	}



	return new ThreeJs;

})($);