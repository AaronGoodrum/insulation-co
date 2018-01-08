<template>
  <div class="insulatePage mt-2">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <b-container class="body-wrap">
      <p>
        Heating and cooling account for 50 to 70% of the energy used in the average American home.
         Inadequate insulation and air leakage are leading causes of energy waste in most homes.
      </p>
    
      <b-media>
        <b-row>
          <b-col md="6">
            <b-img src="../assets/Home.png" fluid alt="placeholder" />
          </b-col>
          <b-col md="6" lg="6">
          <h5 class="mt-0">Conserve Energy</h5>
          <p>
            The amount of energy you conserve will depend on several factors: your local climate; the size,
            shape, and construction of your house; the living habits of your family; the type and efficiency 
            of the heating and cooling systems; and the fuel you use. Once the energy savings have paid for the installation cost, 
            energy conserved is money saved - and saving energy will be even more important as utility rates go up.  There are many 
            other things you can do to conserve energy in your home as well. 
            You save energy by sealing air leaks, selecting more energy-efficient appliances, etc.
          </p>
          </b-col>
        </b-row>
      <b-media>
        <b-row>
          <b-col class="m-2 p-2">
            <b-img slot="aside" src="../assets/upperhome.png" fluid alt="placeholder" />
            <b-img slot="aside" src="../assets/home-wall.png" fluid alt="placeholder" />
            <b-img slot="aside" src="../assets/lower-home.png" fluid alt="placeholder" />
          </b-col>
        </b-row>
        
        <h5 class="mt-0">Insulation</h5>
        <p class="mb-0">
          Saves money and our nation's limited energy resources
        </p>
        
        <p class="mb-0">
          Makes your house more comfortable by helping to maintain a uniform temperature throughout the house, 
          and makes walls, ceilings, and floors warmer in the winter and cooler in the summer.
        </p>
      </b-media>
      </b-media>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Why-insulatePage',
  data () {
    return {
      msg: 'Why Insulate'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  margin: auto;
  border-radius: 8px;
  max-width: 100%;
  height: auto;
  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.747);
}
</style>
