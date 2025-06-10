import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import {
  FaBrain, FaMusic, FaSlidersH, FaKeyboard,
  FaCloud, FaMagic, FaBolt
} from 'react-icons/fa';

const features = [
  {
    icon: <FaBrain size={26} className="text-purple-400" />,
    title: 'AI-система нового поколения',
    desc: 'Контент создаётся в коллаборации музыканта и AI—ты только вдохновляйся.',
  },
  {
    icon: <FaMusic size={26} className="text-purple-400" />,
    title: 'Piano Roll без компромиссов',
    desc: 'Pixel-precision редактирование нот и velocity, прямо в браузере.',
  },
  {
    icon: <FaSlidersH size={26} className="text-purple-400" />,
    title: 'Mixer & FX студийного уровня',
    desc: 'WebAudio‑микширование с эффектами, автоматизацией и routing.',
  },
  {
    icon: <FaKeyboard size={26} className="text-purple-400" />,
    title: 'MIDI & WebAudio паттерн',
    desc: 'Нулевая задержка, реакция как в родных VST.',
  },
  {
    icon: <FaCloud size={26} className="text-purple-400" />,
    title: 'Проекты в облаке',
    desc: 'Храни, делись и работай отовсюду — никаких “я забыл сохранить”.',
  },
  {
    icon: <FaMagic size={26} className="text-purple-400" />,
    title: 'AI‑генерация одним кликом',
    desc: 'Создай трек-идею, барабан или мелодию — всё в твоем стиле.',
  },
  {
    icon: <FaBolt size={26} className="text-purple-400" />,
    title: 'Мгновенное впечатление',
    desc: 'Запускается быстрее, чем Discord, без установки и пустых обещаний.',
  },
  {
    icon: <FaBolt size={26} className="text-purple-400" />,
    title: 'Отцы пишут только в MagistrGod.AI',
    desc: 'Пишется быстрее,чем твоя бывшая девушка.',
  },
];

function AudioVisualizer({ audioUrl }) {
  const mount = useRef();
  useEffect(() => {
    const container = mount.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(4, 32);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_freq: { value: 0 },
      },
      vertexShader: `
        uniform float u_time, u_freq;
        varying vec3 vNormal;
        void main() {
          vNormal = normal;
          vec3 pos = position + normal * (sin(u_time + position.x * 2.0) * u_freq / 256.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }`,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = dot(normalize(vNormal), vec3(1.0));
          gl_FragColor = vec4(0.6, 0.2, 1.0, 1.0) * intensity;
        }`,
      wireframe: true,
    });

    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    camera.position.z = 10;

    const listener = new THREE.AudioListener();
    camera.add(listener);
    const audio = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    loader.load(audioUrl, (buffer) => {
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.play();
    });

    const analyser = new THREE.AudioAnalyser(audio, 32);
    const clock = new THREE.Clock();

    const animate = () => {
      mat.uniforms.u_time.value = clock.getElapsedTime();
      mat.uniforms.u_freq.value = analyser.getAverageFrequency();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [audioUrl]);

  return (
    <div ref={mount} className="absolute inset-0 w-full h-full pointer-events-none" />
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Полупрозрачный градиент на фоне */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-purple-900 opacity-60" />

      {/* Контент поверх */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 text-amber-50"
        >
          Почему MagistrGod .AI — новый уровень DAW
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl mb-16 text-amber-50"
        >
          Объединили AI, midi‑редактор, микширование, cloud-хранение и zero‑install
          в одной web‑DAW. Остальные DAW просто дрейфуют позади.
        </motion.p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-black/70 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transition-all transform duration-300 ring-1 ring-purple-600/30 border border-purple-800/30"
            >
              <div className="text-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-purple-300">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
