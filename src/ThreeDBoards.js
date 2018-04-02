import React, { Component } from 'react';

class Three extends Component {
  componentDidMount(){
    var scene = new window.THREE.Scene();
    var camera = new window.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var renderer = new window.THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xffffff, 0);
    renderer.shadowMapEnabled = true;
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 100;
    camera.lookAt(new window.THREE.Vector3(0, 0, -100));

    // add spotlight for the shadows
    var spotLight = new window.THREE.SpotLight(0xffffff);
    spotLight.position.set(500, 500, 500);
    scene.add(spotLight);
    var spotLight2 = new window.THREE.SpotLight(0xffffff);
    spotLight2.position.set(-500, 500, -500);
    scene.add(spotLight2);
    var spotLight3 = new window.THREE.SpotLight(0xffffff);
    spotLight3.position.set(500, -500, 500);
    scene.add(spotLight3);
    var spotLight4 = new window.THREE.SpotLight(0xffffff);
    spotLight4.position.set(-500, -500, -500);
    scene.add(spotLight4);

    this.box.appendChild( renderer.domElement );


    var loader = new window.THREE.STLLoader();
    var group = new window.THREE.Object3D();
    loader.load('roe-graham.STL',  (geometry) => {
        console.log(geometry);
        var mat = new window.THREE.MeshLambertMaterial({color: 0x7777ff});
        group = new window.THREE.Mesh(geometry, mat);
        // group.rotation.x = -0.5 * Math.PI;
        // group.rotation.x = -0.5 * Math.PI;
        group.scale.set(0.2, 0.2, 0.2);
        console.log(group);
        group.position.y = -100;
        scene.add(group);
    });

    var controls = new window.THREE.OrbitControls( camera );
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    // controls.panningMode = window.THREE.HorizontalPanning; // default is THREE.ScreenSpacePanning
    controls.minDistance = 500;
    controls.maxDistance = 900
    controls.maxPolarAngle = Math.PI / 2;

    // camera.position.z = 5;
    function animate() {
      requestAnimationFrame( animate );
      controls.update();
      renderer.render( scene, camera );
    }
    animate();
  }
  // https://storage.googleapis.com/blacktuna/roe.STL

  render() {
    return (
       <div ref={(x)=>{this.box = x}}>

       </div>
    );
  }
}

export default Three;
