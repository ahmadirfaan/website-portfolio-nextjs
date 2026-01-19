export function Container({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="max-w-6xl mx-auto" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)' }}>
        {children}
      </div>
    );
  }
  