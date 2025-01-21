export default function Box({ children }) {
  return (
    <>
      <div className="absolute w-3/5 h-[90%] bg-slate-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl flex flex-col p-8 gap-y-5">
        {children}
      </div>
    </>
  );
}
