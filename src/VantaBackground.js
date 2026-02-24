import React, { useEffect, useRef } from "react";

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let retryTimer = null;

    const initVanta = () => {
      if (!mounted) return;
      if (!effectRef.current && window.VANTA && window.VANTA.RINGS && vantaRef.current) {
        effectRef.current = window.VANTA.RINGS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          backgroundColor: 0x191a1a, // dark gray/navy background
          color: 0x2563eb           // bright blue rings
        });
      } else if (!effectRef.current) {
        // Retry a few times if Vanta script isn't loaded yet
        retryTimer = setTimeout(initVanta, 400);
      }
    };

    initVanta();

    return () => {
      mounted = false;
      if (retryTimer) clearTimeout(retryTimer);
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed", // always full screen
          top: 0,
          left: 0,
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </>
  );
}
