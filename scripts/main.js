let API_key = '46328ad92c021e6aea74dfd00146a214'


let list = document.getElementById('cities'),
    weatherSpan = document.getElementById('weather'),
    descriptionSpan = document.getElementById('description'),
    temperatureSpan = document.getElementById('temperature'),
    pressureSpan = document.getElementById('pressure'),
    windSpan = document.getElementById('wind')

let xhr = new XMLHttpRequest()