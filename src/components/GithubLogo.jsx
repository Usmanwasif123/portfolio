import { useGLTF } from '@react-three/drei';
import { BASE_PATH } from '../utils/basepath'
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const GithubLogo = (props) => {
  const { nodes, materials } = useGLTF(`${BASE_PATH}models/github.glb`);

  const logoRef = useRef();

  useGSAP(() => {
    gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    }).to(logoRef.current.rotation, {
      x: `-=${Math.PI * 2}`,   // flip forward/back like the ring
      duration: 2.5,
      ease: "none",
    });
  });

  return (
    <group {...props} dispose={null}>
      <group
        ref={logoRef}
        position={[-0.055, 2.945, 6.336]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={28.364}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve021.geometry}
          material={materials.glossy_putih}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve021_1.geometry}
          material={materials.github}
        />
      </group>
    </group>
  );
};

useGLTF.preload(`${BASE_PATH}models/github.glb`);
export default GithubLogo;
