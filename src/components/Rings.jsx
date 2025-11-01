import { useGSAP } from '@gsap/react';
import { useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { BASE_PATH } from '../utils/basepath'
import { useCallback, useRef, useEffect } from 'react';

const Rings = ({ position }) => {
  const groupRef = useRef();
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture(`${BASE_PATH}textures/rings.png`);

  // 🌀 Animate rotation
  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      }).to(
        refList.current.map((r) => r.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: {
            each: 0.15,
          },
        }
      );
    },
    []
  );

  // ✅ Apply the position dynamically (reacts to props)
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(...position);
    }
  }, [position]);

  return (
    <group ref={groupRef} scale={0.5}>
      {Array.from({ length: 4 }, (_, index) => (
        <mesh key={index} ref={getRef}>
          <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

export default Rings;
