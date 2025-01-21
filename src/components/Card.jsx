export default function Card({ children }) {
    return (
      <>
        <div className="bg-slate-700 rounded-2xl h-full w-full flex flex-col justify-center items-center">
          {children}
        </div>
      </>
    );
  }
  