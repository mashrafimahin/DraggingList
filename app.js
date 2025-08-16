const input = document.querySelector('#city');
const btn = document.querySelector('#search');
const temp = document.querySelector('#temperature');
const city = document.querySelector('#city-name');
const speed = document.querySelector('#speed');
const hud = document.querySelector('#hud');

btn.addEventListener('click' , async () => {
    // input value collection
    let inputValue = input.value.trim().toLowerCase();

    // validation
    if (!inputValue) {
        alert('plase input city name.');
        return
    }
    
    // create link or url
    const search = `https://nominatim.openstreetmap.org/search?city=${inputValue}&format=json&limit=1`;


    // run functionality
    try {
        const data = await fetch(search);
        const response = await data.json();
        console.log(response)

        // second url
        const search2 = `https://api.open-meteo.com/v1/forecast?latitude=${response['0'].lat}&longitude=${response['0'].lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`;

        const data2 = await fetch(search2);
        const response2 = await data2.json();

        console.log(response2)

        // temperature
        temp.textContent = response2.current.temperature_2m + '°C';

        // city
        city.textContent = response['0'].display_name;

        // speed
        speed.textContent = response2.current.wind_speed_10m + 'km/h';

        // humidity
        hud.textContent = response2.current.relative_humidity_2m + '%';
    }

    // catch errors
    catch (error) {
        console.log('Sorry, Information not found!')
    }
})