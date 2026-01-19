export function Container({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {children}
      </div>
    );
  }
  