const container= document.querySelector('.container');
const search= document.querySelector('.bx-search');
const weatherBox= document.querySelector('.weather-box');
const error=document.querySelector('.not-found');
const weatherDetails= document.querySelector('.weather-details');

search.addEventListener('click',()=>{
    const APIKEY='1494c8141154dc2efa8dd948498f5b54';
    const city=document.querySelector('.search-box input').value;
    if (city==''){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`).then(res=>res.json()).then(json=>{
        

        if(json.cod =='404'){
            container.style.height ='400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error.classList.add('active');
            return;
        }
            container.style.height ='555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error.classList.remove('active');

        const image=document.querySelector('.weather-img');
        const temperature=document.querySelector('.temperature');
        const description=document.querySelector('.description');
        const humidity=document.querySelector('.info-humidity');
        const wind=document.querySelector('.info-wind');

        switch(json.weather[0].main){
            case 'Clear':
                image.src='images/clear.png';
                break;
            case 'Rain':
                image.src='images/rain.png';
                break;
            case 'Snow':
                image.src='images/snow.png';
            case 'Clouds':
                image.src='images/cloud.png';
            case 'Mist':
                image.src='images/mist.png';
            case 'Haze':
                image.src='images/mist.png';
            
            default:
                image.src='images/cloud.png';
        }
        temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML=`${json.weather[0].description}`;
        humidity.innerHTML=`<span>${json.main.humidity}%</span>`;
        wind.innerHTML=`<span>${parseInt(json.wind.speed)}Km/h</span>`;
    })


})