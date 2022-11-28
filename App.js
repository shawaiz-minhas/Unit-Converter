let feet = 3.281;
let gallon = 0.264;
let pound = 2.204;

let input_value = document.getElementById("input-value");

let button = document.getElementById("btn");

let original_length = document.getElementById("original_length");
let original_volume = document.getElementById("original_volume");
let original_mass = document.getElementById("original_mass");

button.addEventListener("click", function () {
  let values = input_value.value;
  values = Number(values);
  let Length = `${values} meters =  ${(values * feet).toFixed(
    2
  )} feet | ${values} feet = ${(values / feet).toFixed(2)} meters`;
  let Volume = `${values} liters =  ${(values * gallon).toFixed(
    2
  )} gallons | ${values} gallon = ${(values / gallon).toFixed(2)} liters`;
  let Mass = `${values} killos =  ${(values * pound).toFixed(
    2
  )} pounds | ${values} pounds = ${(values / pound).toFixed(2)} kilos`;

  original_length.innerHTML = Length;
  original_volume.innerHTML = Volume;
  original_mass.innerHTML = Mass;
});
