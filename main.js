
import * as THREE from 'three';
//import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { CSS3DObject } from './src/CSS3DRenderer.js';
import { MindARThree} from 'mindar-image-three';


//const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new MindARThree({
      container: document.body,
      imageTargetSrc: './assets/targets2.mind',
    });
    const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    const obj = new CSS3DObject(document.querySelector("#ar-div"));
    const cssAnchor = mindarThree.addCSSAnchor(0);
    cssAnchor.group.add(obj);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  }
  start();
});

