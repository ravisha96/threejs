var scene, camera, light, plane, planeGeometry, width, height, renderer, spotLight, axis;

this.init = function () {			

	width = window.innerWidth;
	height = window.innerHeight;

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 150, width/height, 0.1, 1000 );
	camera.position = {
		x: 0,
		y: 0,
		z: 10
	};
	camera.lookAt(scene.position);

	axis = new THREE.AxisHelper(20);
	scene.add(axis);

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xFFFFFF);
	renderer.setSize(width, height);

	spotLight = new THREE.SpotLight(0xFFFFFF);

	
	this.createPlaneGeometry = function () {
		planeGeometry = new THREE.PlaneGeometry( 20, 20 );
		// assign two material
		var material = new THREE.MeshNormalMaterial();
		material.side = THREE.DoubleSide;

		var wireframeMaterial = new THREE.MeshNormalMaterial();
		wireframeMaterial.wireframe = true;		

		// create a multi material
		var mesh = THREE.SceneUtils.createMultiMaterialObject(planeGeometry, [wireframeMaterial, material]);

		scene.add( mesh );

		return mesh;
	};

	this.createPlaneGeometry();

	$("#WebGl-output").append(renderer.domElement);

	renderer.render(scene, camera);
};

init();




