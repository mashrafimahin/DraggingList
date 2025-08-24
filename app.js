const search = document.querySelector('#search');
const from_value = document.querySelector('#from_data');
const to_value = document.querySelector('#to_data');
let from_icon = document.querySelector('#from_icon');
let to_icon = document.querySelector('#to_icon');
const result = document.querySelector('#result');
const btn = document.querySelector('#btn');
const loader = document.querySelector('.loadBody');

// data source 
const countries = {
    "USD": { "country": "United States", "code": "US", "flag": "US" },
    "EUR": { "country": "European Union", "code": "EU", "flag": "EU" },
    "GBP": { "country": "United Kingdom", "code": "GB", "flag": "GB" },
    "JPY": { "country": "Japan", "code": "JP", "flag": "JP" },
    "AUD": { "country": "Australia", "code": "AU", "flag": "AU" },
    "CAD": { "country": "Canada", "code": "CA", "flag": "CA" },
    "CHF": { "country": "Switzerland", "code": "CH", "flag": "CH" },
    "CNY": { "country": "China", "code": "CN", "flag": "CN" },
    "INR": { "country": "India", "code": "IN", "flag": "IN" },
    "NZD": { "country": "New Zealand", "code": "NZ", "flag": "NZ" },
    "BDT": { "country": "Bangladesh", "code": "BD", "flag": "BD" }
}

// loop 
for (const key in countries) {
    let keys = countries[key];
    let code = keys.code;
    let option = `<option value='${code}'>${code}</option>`;
    from_value.innerHTML += option;
    to_value.innerHTML += option;
}

// set default
from_icon.src = `https://flagcdn.com/us.svg`;
to_icon.src = `https://flagcdn.com/eu.svg`;
from_value.value = "US";
to_value.value = "EU";
result.textContent = 'Convertion result will be shown here';

// change event
from_value.addEventListener('change' , () => {
    let code = from_value.value.toLowerCase();
    from_icon.src = `https://flagcdn.com/${code}.svg`;
})
to_value.addEventListener('change' , () => {
    let code = to_value.value.toLowerCase();
    to_icon.src = `https://flagcdn.com/${code}.svg`;
})

// converter function
async function converter() {
    
    try {
        // amount validation
        let amount = search.value || 1;

        // Identify the exact from and to value
        let fromCurrency = Object.keys(countries).find(key => countries[key].code === from_value.value);
        let toCurrency = Object.keys(countries).find(key => countries[key].code === to_value.value);

        // fecthing data
        let URL = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;
        let fetching = await fetch(URL);
        let responseData = await fetching.json();
        console.log(responseData)

        // result pattern
        let convertedData = `${responseData.amount} ${fromCurrency} = ${responseData.rates[toCurrency]} ${toCurrency}`;

        // print 
        result.textContent = convertedData;
    }
    catch (error) {
        loader.classList.add('activate');
        setTimeout(() => {
            loader.classList.remove('activate');
            result.textContent = 'Opps! Server not responded.';
        }, 3000)
    }

}

// btn call the main function
btn.addEventListener('click' , converter);