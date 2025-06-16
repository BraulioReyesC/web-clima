<template>
  <div id="app" class="container bg-white mt-5 mb-5 rounded-5 shadow-sm  overflow-hidden" >
    <div class="row h-100">
      <div class="col-md-4 shadow-sm p-5 pt-5">
        <div class="input-group flex-nowrap align-items-center position-relative">
          <span class="material-symbols-outlined me-1">search</span>
          <input type="text" class="form-control rounded-5 ps-3 pe-3 pt-2 pb-2" placeholder="Select city ..." aria-label="Username" aria-describedby="addon-wrapping" v-model="searchLocation">
          <ul class="list-group position-absolute top-100 w-100">
            <li role="button" class="list-group-item list-group-item-action ms-4" v-for="location in listLocations" :key="location.lat + '/' + location.lon" @click="setCoordinates(location.lat,location.lon, location.name + (location.state.length == 0?'':', ') + location.state + ', ' + location.country )">{{location.name}}<span v-show="location.state">, </span>{{location.state}}, {{location.country}}</li>
          </ul>
        </div>
        <img src="../src/assets/weather-sun.png" alt="Clima soleado">
        <div class="d-flex align-items-start mt-2 mb-2">
          <span style="font-size: 80px;">{{weather.main.temp}}<sup>o</sup></span><span style="font-size: 60px;" class="ms-2 mt-2" v-if="units == 'metric'">C</span><span v-else style="font-size: 60px;" class="ms-2 mt-2">F</span>
        </div>
        <span class="fw-bold">{{dayName}},</span><span class="text-secondary">{{localTime}}</span>
        <hr class="mt-4 mb-4">
        <p><span class="material-symbols-outlined align-middle me-2">location_on</span>{{coordinates.location}}</p>
        <p><span class="material-symbols-outlined align-middle me-2">cloud</span>{{descriptionWeather}}</p>
      </div>
      <div class="col-md-8 bg-light p-5 pt-5">
        <ul class="nav d-flex align-items-center mb-4">
          <li class="nav-item">
            <a class="nav-link active" href="#">Pronóstico Semanal</a>
          </li>
          <div :class="{'circle me-0 ms-auto me-3 small':true, 'active':(units == 'metric')}" @click="units = 'metric';fetchWeather();fetchForecast();">
            <sup>o</sup>C
          </div>
          <div :class="{'circle me-3 small':true, 'active':(units == 'imperial')}" @click="units = 'imperial';fetchWeather();fetchForecast()">
            <sup>o</sup>F
          </div>
          <div style="height: 55px; width: 55px;" class=" rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
            <img src="../src/assets/foto_perfil1.jpg" alt="" class="h-100">
          </div>
        </ul>
        <div class="row m-1">
          <div class="col p-0 pt-1 pe-1 h-100" v-for="item in agrupacionSemana" :key="item.id">
            <div class="bg-white rounded-4 text-center p-1 pt-2 h-100 cursor-pointer shadow-sm">
              <span class="fw-bold">{{item.name}}</span>
              <img src="../src/assets/weather-sunny.png" alt="" style="height: 80px">
              <p class="small mb-0">Máx {{item.max.main.temp_max}}<sup>o</sup>
              </p>
              <p class="small">Mín {{item.min.main.temp_min}}<sup>o</sup>
              </p>
            </div>
          </div>
         
        </div>
        <h5 class="text-secondary mt-5 mb-4">Medidas de Hoy</h5>
        <div class="row bg-white rounded-4 ps-5 pe-5 pt-4 pb-5 m-1 shadow-sm">
          <div class="w-100 d-flex align-items-center mb-4" >
            <div class="btn btn-dark rounded-5 me-0 ms-auto" v-show="false">See More</div>
          </div>
          <div class="row opacity-75">
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">thermostat</h1>
              <p class="text-secondary">Sensación Térmica
                <br>
                {{weather.main.feels_like}} <sup>o</sup>
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">air</h1>
              <p class="text-secondary">Viento
                <br>
                {{weather.wind.speed}} km/h
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">wb_twighlight</h1>
              <p class="text-secondary">Amanecer
                <br>
                {{hourSunrise}} (hora local)
              </p>
            </div>
          </div>
          <div class="row opacity-75 mt-4">
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">wb_twilight</h1>
              <p class="text-secondary">Atardecer
                <br>
                {{hourSunset}} (hora local)
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">thermostat</h1>
              <p class="text-secondary">Rango Término
                <br>
                Min. {{weather.main.temp_max}} <sup>o</sup>
                <br>
                Max. {{weather.main.temp_min}} <sup>o</sup>
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">water_drop</h1>
              <p class="text-secondary">Humedad Relativa
                <br>
                {{weather.main.humidity}} %
              </p>
            </div>
          </div>
          <div class="row opacity-75 mt-4">
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">waves</h1>
              <p class="text-secondary">Presión Atmosférica
                <br>
                {{weather.main.pressure}} hPa
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">waves</h1>
              <p class="text-secondary">Presión del suelo
                <br>
                {{weather.main.grnd_level}} hPa
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">waves</h1>
              <p class="text-secondary">Presión al nivel del mar
                <br>
                {{weather.main.sea_level}} hPa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'App'
  ,data(){
    return {
      listLocations: [],
      searchLocation: '',
      searchLocationTimeExecution: new Date(),
      coordinates: { "lat": -33.4377756, "lon": -70.6504502, "location": "Santiago, Santiago Metropolitan Region, CL" },
      units:'metric',
      forecast: [],
      weather:{
          "coord": {
              "lon": 0,
              "lat": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "base": "stations",
          "main": {
              "temp": 0,
              "feels_like": 15.56,
              "temp_min": 15.26,
              "temp_max": 16.18,
              "pressure": 998,
              "humidity": 83
          },
          "visibility": 7000,
          "wind": {
              "speed": 0,
              "deg": 0
          },
          "clouds": {
              "all": 100
          },
          "dt": 1717295896,
          "sys": {
              "type": 2,
              "id": 2037860,
              "country": "PE",
              "sunrise": 0,
              "sunset": 0
          },
          "timezone": -18000,
          "id": 3930376,
          "name": "Rímac",
          "cod": 200
      },
      agrupacionSemana:{}
    };
  }
  ,created(){
    //this.fetchLocation()
  }
  ,mounted(){
    this.fetchWeather()
  }
  ,methods:{
    async fetchLocation(){
      if(this.searchLocation.length != 0){
        var searchLocationTimeExecution = new Date()
        var response = await fetch(`/api/location?city_name=${this.searchLocation}`)
        if(searchLocationTimeExecution > this.searchLocationTimeExecution){
          this.searchLocationTimeExecution = searchLocationTimeExecution
          this.listLocations =[]
          this.listLocations = await response.json()
        }
      }else{
        this.listLocations =[]
      }
    },
    setCoordinates(lat,lon, location){
      const coordinates = {
        lat: lat,
        lon: lon,
        location: location
      }
      this.coordinates = coordinates
      this.searchLocation=''
    },
    async fetchWeather(){
      var response = await fetch(`/api/weather?lat=${this.coordinates.lat}&lon=${this.coordinates.lon}&units=${this.units}`)
      this.weather = await response.json()
      this.fetchForecast()
    },
    async fetchForecast(){
      var response = await fetch(`/api/forecast?lat=${this.coordinates.lat}&lon=${this.coordinates.lon}&units=${this.units}`)
      this.forecast = await response.json()
      console.log({...this.forecast})
      this.agruparDias()
    },
    agruparDias(){
      this.agrupacionSemana = {}
      if(this.forecast.list.length > 0){
        this.forecast.list.forEach((elemento) =>{
          const day = this.obtenerDiaSemana(elemento.dt_txt)
          if(!this.agrupacionSemana[day.numero]){
            this.agrupacionSemana[day.numero]= { name: day.name, id: day.id}
            this.agrupacionSemana[day.numero].list = []
          }
          this.agrupacionSemana[day.numero].list.push(elemento)
        })
      }

      var array_agrupacionSemana = []
      for(var i = 0;i<7;i++){
        let diaSemana = this.agrupacionSemana[i]
        if(diaSemana != undefined){
          array_agrupacionSemana.push({max:0, min: 0, ...diaSemana})
        }
      }
      array_agrupacionSemana.sort((a,b)=>{return a.id - b.id})  
      this.agrupacionSemana = array_agrupacionSemana

      this.agrupacionSemana.forEach((item)=>{
        item.max = item.list.reduce((maximo, valor)=> valor.main.temp_max > maximo.main.temp_max ? valor : maximo, item.list[0])
        item.min = item.list.reduce((minimo, valor)=> valor.main.temp_max < minimo.main.temp_max ? valor : minimo, item.list[0])
      })
    },
    obtenerDiaSemana(fecha_texto){
      var fecha = new Date(fecha_texto);
      var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      var year = fecha.getFullYear();
      var month = fecha.getMonth();
      var day = fecha.getDate();
      var numeroDiaSemana = fecha.getDay();
      var nombreDiaSemana = diasSemana[numeroDiaSemana];
      return {name : nombreDiaSemana, numero: numeroDiaSemana, id: parseInt(year.toString() + (month < 10 ? '0' + month : month).toString() + (day < 10 ? '0' + day : day).toString())};
    }
  }
  ,watch:{
    searchLocation: {
      handler() {
        this.fetchLocation();
      },
      immediate: true 
    },
    coordinates:{
      handler(){
        this.fetchWeather()
      },
      inmediate: true
    }
  },
  computed: {
    descriptionWeather(){
      return this.weather.weather.map(function(element){
        return element.description
      }).join('/')
    },
    hourSunrise(){
      const fecha = new Date(this.weather.sys.sunrise * 1000);
      return fecha.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    },
    hourSunset(){
      const fecha = new Date(this.weather.sys.sunset * 1000);
      return fecha.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    },
    localTime(){
      const fecha = new Date(this.weather.dt * 1000);
      return fecha.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    },
    dayName(){

      const date = new Date( this.weather.dt * 1000); // Multiplicamos por 1000 porque JS usa milisegundos
      const options = { weekday: 'long', timeZone: 'America/Santiago' }; // Chile
      const dia = date.toLocaleDateString('es-CL', options);

      return (dia); 
    }
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
@import url('https://fonts.googleapis.com/css2?family=Material+Icons');
</style>
<style>
body{
 background-color: #6DC6F9 !important; 
}
</style>
<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 200,
  'GRAD' -25,
  'opsz' 48
}
.cursor-pointer{
  cursor: pointer;
}

</style>