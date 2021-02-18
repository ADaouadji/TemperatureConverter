const celciusInput = document.querySelector('#celcius');
const farenheitInput = document.querySelector('#fahrenheit');
const kelvinInput = document.querySelector('#kelvin');
const temperatureInput = document.querySelectorAll("input");

temperatureInput.forEach(function (input) {
    input.addEventListener("input", function (e) {
            let temperatureValue = parseInt(e.target.value);
            let inputName = e.target.name;
            
            if(e.target.value == ''){
                farenheitInput.value = null;
                celciusInput.value = null;
                kelvinInput.value = null;

                return;
            };

            if(inputName === 'celcius') {
                farenheitInput.value = temperatureValue * 1.8 + 32;
                kelvinInput.value = temperatureValue + 273.15;
            }else if (inputName === 'fahrenheit') {
                celciusInput.value = (temperatureValue - 32) / 1.8;
                kelvinInput.value = (temperatureValue - 32) / 1.8 + 273.15;
            }else if (inputName === 'kelvin') {
                celciusInput.value = (temperatureValue - 273.15);
                farenheitInput.value = (temperatureValue - 273.15) * 1.8 + 32;
            };
      });
  });