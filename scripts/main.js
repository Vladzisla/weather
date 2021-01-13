
let API_key = '46328ad92c021e6aea74dfd00146a214'


let list = document.getElementById('cities'),
    weatherSpan = document.getElementById('weather'),
    descriptionSpan = document.getElementById('description'),
    temperatureSpan = document.getElementById('temperature'),
    pressureSpan = document.getElementById('pressure'),
    windSpan = document.getElementById('wind')


axios.get('https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json')
    .then(response => {
        let a = response.data[0]

        for(let region of a.regions){

            let option = document.createElement('option')
            option.text = '---' + region.name + '---'
            option.disabled = 'disabled'
            list.append(option)

            for(let city of region.cities){
                let option = document.createElement('option')
                option.value = city.name
                option.text = city.name
                option.dataset.lat = city.lat
                option.dataset.lng = city.lng
                list.append(option)
            }
        }
    })

function getWeather() {
    let lat = list.options[list.selectedIndex].dataset.lat,
        lon = list.options[list.selectedIndex].dataset.lng
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)
        .then(response => {
            weatherSpan.innerText = response.data.weather[0].main
            temperatureSpan.innerText = 'Temperature: ' + response.data.main.temp + '℃'
            pressureSpan.innerText = 'Pressure: ' + response.data.main.pressure + 'hPa'
            windSpan.innerText = 'Wind speed: ' + response.data.wind.speed + 'm/s'
        })
}