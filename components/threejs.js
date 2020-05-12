import * as THREE from 'three'
// passed in container id within which this animation will be shown
export function createBoxRotationContext(container) {
const ace = new Object()
ace.init = function init() {
    ace.container = container;
    ace.camera = new THREE.PerspectiveCamera(70, ace.container.clientWidth/ace.container.clientHeight, 0.01, 10);
    ace.camera.position.z = 5;

    ace.scene = new THREE.Scene();
    ace.scene.background = new THREE.Color( 0x1A1C1D );

    // instantiate a loader
    var loader = new THREE.ImageLoader();

    // load a image resource
    loader.load(
        // resource URL
        './assets/AI-logo.png',

        // onLoad callback
        function ( image ) {
            // use the image, e.g. draw part of it on a canvas
            var canvas = document.createElement( 'canvas' );
            var context = canvas.getContext( '2d' );
            context.drawImage( image, 100, 100 );
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        function () {
            console.error( 'An error happened.' );
        }
    );

    ace.dice = new THREE.Mesh(
        new THREE.BoxGeometry( 50, 50, 50),
        new THREE.MeshBasicMaterial({
             map: THREE.ImageUtils.loadTexture('../assets/AI-logo.png')
          })
        );
    ace.dice.material.side = THREE.DoubleSide;
    ace.scene.add( ace.dice );

    let geometry = new THREE.BoxGeometry(2, 2, 2);
    let material = new THREE.MeshNormalMaterial();
    ace.box = new THREE.Mesh(geometry, material);

    // ace.scene.add(ace.box);

    ace.renderer = new THREE.WebGLRenderer({antialias: true});
    ace.renderer.setSize(ace.container.clientWidth, ace.container.clientHeight);
    ace.container.appendChild(ace.renderer.domElement);
},
ace.animate = function animate() {
    requestAnimationFrame(animate);
    ace.dice.rotation.x += 0.01;
    ace.dice.rotation.y += 0.02;
    ace.renderer.render(ace.scene, ace.camera);
}
return ace;
};