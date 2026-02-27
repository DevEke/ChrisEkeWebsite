"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackdrop() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
        fullScreen: { enable: true, zIndex: 0 },

        fpsLimit: 60,
        detectRetina: true,

        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: false },
            resize: { enable: true },
          },
          mode: {
            grab: { distance: 140, links: { opacity: 1 } }
          }
        },

        particles: {
          number: {
            value: 120,
            density: { enable: true, area: 900 },
          },

          color: { value: ["#0a6e87", "#084251", "#181818", "#272727"] },

          opacity: {
            value: 0.7,
            animation: {
              enable: true,
              speed: 0.25,
              minimumValue: 0.05,
            },
          },

          size: {
            value: { min: 1, max: 2 },
          },

          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: "out" },
          },

          links: {
            enable: true,
            distance: 140,
            color: "#202020",
            opacity: 1,
            width: 1,
          },
        },
      }),
    []
  );

  if (!ready) return null;

  return <Particles
            id="tsparticles"
            options={options}
            className="particlesBackdrop"
        />;
}
