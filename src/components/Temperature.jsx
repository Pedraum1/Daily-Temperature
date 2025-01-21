import Card from "./Card";
import LoadCard from "./LoadCard";
import WeatherIcon from "./WeatherIcon";

export default function Temperature({ Temperature, Climate }) {
  return (
    <>
      <div className="col-span-2 row-span-2">
        {Temperature != null ? (
          <Card>
            <div className="flex items-center gap-x-4 pb-3">
              <WeatherIcon climate={Climate} />{" "}
              <h2 className="text-4xl font-semibold">{Temperature + "°C"}</h2>
            </div>
            <h3 className="font-semibold text-2xl">
              Clima atual: <span className="font-bold">{Climate}</span>
            </h3>
          </Card>
        ) : (
          <LoadCard />
        )}
      </div>
    </>
  );
}
