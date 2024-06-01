<template>
  <div id="app" class="container bg-white mt-5 mb-5 rounded-5 shadow-sm  overflow-hidden" >
    <div class="row h-100">
      <div class="col-md-4 shadow-sm p-5 pt-5">
        <div class="input-group flex-nowrap align-items-center">
          <span class="material-symbols-outlined me-1">search</span>
          <input type="text" class="form-control rounded-5 ps-3 pe-3 pt-2 pb-2" placeholder="Select city ..." aria-label="Username" aria-describedby="addon-wrapping">
        </div>
        <img src="../src/assets/weather-sun.png" alt="Clima soleado">
        <div class="d-flex align-items-start mt-2 mb-2">
          <span style="font-size: 80px;">20<sup>o</sup></span><span style="font-size: 60px;" class="ms-2 mt-2">C</span>
        </div>
        <span class="fw-bold">Monday,</span><span class="text-secondary">16:00</span>
        <hr class="mt-4 mb-4">
        <p><span class="material-symbols-outlined align-middle me-2">cloud</span>Mostly Cloudy</p>
        <p><span class="material-symbols-outlined align-middle me-2">rainy</span>Rain - 60%</p>
        <div class="mt-5 justify-content-center w-100 text-white rounded-4 d-flex align-items-center custom-background" style="height: 90px;">
          <span>Raiput, Chattisgarthsrc</span>
        </div>
      </div>
      <div class="col-md-8 bg-light p-5 pt-5">
        <ul class="nav d-flex align-items-center mb-5">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Today</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Week</a>
          </li>
          <div class="circle me-0 ms-auto active me-3 small">
            <sup>o</sup>C
          </div>
          <div class="circle me-3 small">
            <sup>o</sup>F
          </div>
          <div style="height: 55px; width: 55px;" class=" rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
            <img src="../src/assets/foto_perfil1.jpg" alt="" class="h-100">
          </div>
        </ul>
        <div class="row m-1">
          <div class="col p-0 pt-1 pe-1 h-100">
            <div class="bg-white rounded-4 text-center p-1 pt-2 h-100">
              <span>Sun</span>
              <img src="../src/assets/weather-sunny.png" alt="" style="height: 80px">
              <p class="d-flex align-items-start justify-content-center">
                <span>27<sup>o</sup></span>
                <span class="text-secondary small ms-1">27<sup>o</sup></span>
              </p>
            </div>
          </div>
          <div class="col p-0 pt-1 pe-1 h-100">
            <div class="bg-dark text-white rounded-4 text-center p-1 pt-2 h-100">
              <span>Mon</span>
              <img src="../src/assets/weather-sun.png" alt="" style="height: 80px">
              <p class="d-flex align-items-start justify-content-center">
                <span>27<sup>o</sup></span>
                <span class="text-secondary small ms-1">27<sup>o</sup></span>
              </p>
            </div>
          </div>
          <div class="col p-0 pt-1 pe-1">
            <div class="bg-white rounded-4 text-center p-1 pt-2">
              <span>Tue</span>
              <img src="../src/assets/weather-rain.png" alt="" style="height: 80px">
              <p class="d-flex align-items-start justify-content-center">
                <span>27<sup>o</sup></span>
                <span class="text-secondary small ms-2">27<sup>o</sup></span>
              </p>
            </div>
          </div>
          <div class="col p-0 pt-1 pe-1">
            <div class="bg-white rounded-4 text-center p-1 pt-2">
              <span>Wed</span>
              <img src="../src/assets/weather-rain.png" alt="" style="height: 80px">
              <p class="d-flex align-items-start justify-content-center">
                <span>27<sup>o</sup></span>
                <span class="text-secondary small ms-2">27<sup>o</sup></span>
              </p>
            </div>
          </div>
          <div class="col p-0 pt-1 pe-1">
            <div class="bg-white rounded-4 text-center p-1 pt-2">
              <span>Thu</span>
              <img src="../src/assets/weather-clear.png" alt="" style="height: 80px">
              <p class="d-flex align-items-start justify-content-center">
                <span>27<sup>o</sup></span>
                <span class="text-secondary small ms-2">27<sup>o</sup></span>
              </p>
            </div>
          </div>
          <div class="col p-0 pt-1 pe-1">
            <div class="bg-white rounded-4 text-center p-1 pt-2">
              <p class="mb-0">Fri</p>
              <img src="../src/assets/weather-clear.png" alt="" style="height: 80px">
              <p class="d-flex align-items-start justify-content-center">
                <span>27<sup>o</sup></span>
                <span class="text-secondary small ms-2">27<sup>o</sup></span>
              </p>
            </div>
          </div>
          <div class="col p-0 pt-1">
            <div class="bg-white rounded-4 text-center p-1 pt-2">
              <p class="mb-0">Sat</p>
              <img src="../src/assets/weather-rain.png" alt="" style="height: 80px">
              <p class="d-flex align-items-start justify-content-center">
                <span>27<sup>o</sup></span>
                <span class="text-secondary small ms-2">27<sup>o</sup></span>
              </p>
            </div>
          </div>
        </div>
        <h5 class="text-secondary mt-5 mb-4">Today's Highlight</h5>
        <div class="row bg-white rounded-4 ps-5 pe-5 pt-5 pb-5 m-1">
          <div class="w-100 d-flex align-items-center mb-4">
            <span class="text-secondary fs-5">Air Condition</span>
            <div class="btn btn-dark rounded-5 me-0 ms-auto">See More</div>
          </div>
          <div class="row opacity-75">
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">thermostat</h1>
              <p class="text-secondary">Real Feel
                <br>
                30
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">air</h1>
              <p class="text-secondary">Wind
                <br>
                0.2 km/h
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">wb_twighlight</h1>
              <p class="text-secondary">Sun rise
                <br>
                5:45 AM
              </p>
            </div>
          </div>
          <div class="row opacity-75 mt-4">
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">water_drop</h1>
              <p class="text-secondary">Chance of rain
                <br>
                0 %
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">star</h1>
              <p class="text-secondary">UV Index 
                <br>
                3
              </p>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <h1 class="material-icons text-secondary fs-50-custom me-2">wb_twilight</h1>
              <p class="text-secondary">Sun set
                <br>
                18:15 PM
              </p>
            </div>
          </div>
        </div>
        <h5 class="text-secondary mt-5 mb-4">Time-wise update</h5>
        <div class="row bg-white rounded-4 p-4 m-1">
          <div class="w-100 d-flex align-items-center mb-4">
            <span class="text-secondary fs-5">Time Wise Updation</span>
          </div>
          <div class="row">
            <div class="col">
              <div class="text-center border rounded-4 pt-4 pb-4 fs-4">
                <span class="d-block mb-3">13:00</span>
                <span class="d-block">30 <sup>o</sup>C</span>
              </div>
            </div>
            <div class="col">
              <div class="text-center border rounded-4 pt-4 pb-4  fs-4">
                <span class="d-block mb-3">14:00</span>
                <span class="d-block">30 <sup>o</sup>C</span>
              </div>
            </div>
            <div class="col">
              <div class="text-center border rounded-4 pt-4 pb-4  fs-4">
                <span class="d-block mb-3">15:00</span>
                <span class="d-block">30 <sup>o</sup>C</span>
              </div>
            </div>
            <div class="col">
              <div class="text-center border rounded-4 pt-4 pb-4  fs-4 bg-dark text-white fw-bold">
                <span class="d-block mb-3">16:00</span>
                <span class="d-block">30 <sup>o</sup>C</span>
              </div>
            </div>
            <div class="col">
              <div class="text-center border rounded-4 pt-4 pb-4  fs-4">
                <span class="d-block mb-3">17:00</span>
                <span class="d-block">30 <sup>o</sup>C</span>
              </div>
            </div>
            <div class="col">
              <div class="text-center border rounded-4 pt-4 pb-4  fs-4">
                <span class="d-block mb-3">17:00</span>
                <span class="d-block">30 <sup>o</sup>C</span>
              </div>
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
</style>
<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
