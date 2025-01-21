import Box from "./components/Box";
import Graph from "./components/Graph";
import Temperature from "./components/Temperature";
import Humidity from "./components/Humidity";
function App() {
  return (
    <>
      <main
        className="bg-gradient-to-br from-red-800 to-slate-800 h-screen text-slate-100"
      >
        <Box>
          <section className="">
            <h1 className="text-5xl mb-3">Daily Temperature</h1>
            <h5 className="text-xl">
              Track your room's daily temperature and humidity and compare to
              see if it is a furnace or a refrigerator
            </h5>
          </section>
          <section className="flex-grow grid grid-cols-3 grid-rows-3 gap-4 h-full">
            <Temperature Climate={"cloudy"} Temperature={27} />
            <Humidity/>
            <Graph/>
          </section>
        </Box>
      </main>
    </>
  );
}

export default App;
