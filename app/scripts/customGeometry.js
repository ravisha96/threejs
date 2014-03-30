var customGeometry = (function () {

	function Geometry () {

		var scene, camera, light, plane, planeGeometry, width, height, renderer, spotLight, axis;

		this.init = function () {			

			width = window.innerWidth;
			height = window.innerHeight;

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera( 85, width/height, 0.1, 1000 );
			camera.position = {
				x: 20,
				y: 70,
				z: 10
			};
			camera.lookAt(scene.position);
	
			axis = new THREE.AxisHelper(20);
			scene.add(axis);

			renderer = new THREE.WebGLRenderer();
			renderer.setClearColor(0xFFFFFF);
			renderer.setSize(width, height);

			spotLight = new THREE.SpotLight(0xFFFFFF);

			// planeGeometry = new THREE.PlaneGeometry( 60, 60 );

			// plane = new THREE.Mesh(planeGeometry, new THREE.LineBasicMaterial( {color: 0xcccccc} ));
			// plane.position = {
			// 	x: -20,
			// 	y: 40,
			// 	z: 10				
			// }
			// scene.add(plane);
			

			planeGeometry = new THREE.PlaneGeometry( 60, 60 );
			plane = new THREE.Mesh(planeGeometry, new THREE.LineBasicMaterial( {color: 0xcccccc} ));
			plane.rotation.x = 11;
			plane.position= {
				x : 10,
				y: 0,
				z: 0,
			};
			scene.add( plane );

			$("#WebGl-output").append(renderer.domElement);

			renderer.render(scene, camera);

		};

		return this.init();

	}

	return new Geometry;

})();