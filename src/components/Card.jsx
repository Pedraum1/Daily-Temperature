export default function Card({ children }) {
  return (
    <>
      <div
        className="bg-gradient-to-br from-slate-900 to-slate-600 animate-pulse rounded-2xl h-full w-full"
      >
        {children}
      </div>
    </>
  );
}
