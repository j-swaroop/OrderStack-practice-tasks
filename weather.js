const capitalizeOfCloudCondtion = (cloudCondition) => {
  cloudCondition = cloudCondition.split(" ");

  let cloudConditionArr = [];
  for (let i of cloudCondition) {
    cloudConditionArr.push(i.replace(i[0], i[0].toUpperCase()));
  }

  return cloudConditionArr.join(" ");
};

const fetchWeather = async (cityNames) => {
  const apiKey = "c965927c0f19842ae76ebe882fce0792";

  for (let city of cityNames) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data)
    if (data.cod === 200) {
      const { name } = data;
      const { temp, feels_like, humidity } = data.main;
      const { speed } = data.wind;

      const temperature = (temp - 273).toFixed(2);
      const feelsLike = (feels_like - 273).toFixed(2);

      const cloudCondition = data.weather[0].description;
      const capilizeCloudConditionStr =
        capitalizeOfCloudCondtion(cloudCondition);

      let output = `Forecast for ${name} ****
            \nPresent temperature is ${temperature}° C and feels like ${feelsLike}° C with cloud condition is ${capilizeCloudConditionStr}
            \nand wind speed of ${speed} km/hr.`;
      console.log(output);
      console.log("--".repeat(20));
    } else {
      console.log(`${data.message}!`);
    }
  }
};

let cities = ["Hyderabad", "Bangalore", "Mumbai", "Delhi"];
fetchWeather(cities);
