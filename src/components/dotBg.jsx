export const DotBg = () => {
  const dots = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.random() * 10}s`,
    delay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#ee82ee",
            left: dot.left,
            top: dot.top,
            animation: `slow-drift ${dot.duration} ease-in-out infinite`,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};