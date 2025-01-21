export default function LoadCard({ children }) {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-slate-600 animate-pulse rounded-2xl h-full w-full flex justify-center items-center">
        {children}
      </div>
    </>
  );
}
