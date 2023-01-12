import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Info from "./Info";
import Weather from "./Weather";
function App() {
  const [cityName, setCityName] = useState("");
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState("");
  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd20d14798c81ad1ecb0c2d5be70b497&units=metric`
      );
      setIcon(data.weather[0].icon);
      setInfo(data);
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
      });
      setLoading(false);
    }
  };

  const parseDate = (timeStamp) =>
    new Date(timeStamp * 1000)
      .toLocaleDateString("fa", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .split("،")[1];

  return (
    <div className="App">
      <Weather setCityName={setCityName} getData={getData} cityName={cityName}>
        <Info icon={icon} info={info} loading={loading} parseDate={parseDate} />
      </Weather>
    </div>
  );
}

export default App;
