export default function WeatherIcon({ climate = "" }) {
  return (
    <>
      {climate != null && climate != "" ? (
        <img src="/cloudy.png" className="" />
      ) : (
        ""
      )}
    </>
  );
}
