<template>
  <div class="cleanoutsPage p-4">
    <h1>{{ msg }}</h1>
    <div class="wrapper image-bg">
      <b-container fluid class="p-2">
        <h2 class="p-2"> BEFORE WITH DEBRIS AND DAMAGE </h2>
        <b-row>
          <b-col class="nopadding">
            <b-img rounded fluid src="../assets/cleanout/cleanout1.png" alt="Thumbnail" />
          </b-col>
          <b-col class="nopadding">
            <b-img rounded fluid src="../assets/cleanout/cleanout2.png" alt="Thumbnail" />
          </b-col>
          <b-col class="nopadding">
            <b-img rounded fluid src="../assets/cleanout/cleanout3.png" alt="Thumbnail" />
          </b-col>
          <b-col class="nopadding">
            <b-img rounded fluid src="../assets/cleanout/cleanout4.png" alt="Thumbnail" />
          </b-col>  
        </b-row>
        <p class="pt-2">Our crawl space cleaning team will go into your crawl space and eradicate all of those problems.</p>
      </b-container>
    </div>
    <div class="wrapper image-bg">
      <b-container fluid class="p-2">
        <h2 class="p-2"> AFTER CLEANED AND SEALED </h2>
        <b-row>
          <b-col class="nopadding">
            <b-img rounded fluid src="../assets/cleanout/cleaned1.png" alt="Thumbnail" />
          </b-col>
          <b-col class="nopadding">
            <b-img rounded fluid src="../assets/cleanout/cleaned2.png" alt="Thumbnail" />
          </b-col>
          <b-col class="nopadding">
            <b-img rounded fluid src="../assets/cleanout/cleaned3.png" alt="Thumbnail" />
          </b-col>
          <b-col class="nopadding">
            <b-img rounded fluid src="../assets/cleanout/cleaned4.png" alt="Thumbnail" />
          </b-col>
          <p class="pt-2">A correctly installed vapor barrier is one of the most important aspects of your home.</p>
        </b-row>
      </b-container>
    </div>
  <div>
    <div class="p-4">
      <b-btn size="lg" variant="primary" :href="'mailto:' + urlEmail">{{urlEmail}}</b-btn>
      <b-btn size="lg" variant="success" :href="'tel:'+ phoneNum">Call Us @ {{phoneNum}}</b-btn>
    </div>
  </div>  


  </div>
</template>

<script>
export default {
  name: 'CleanoutsPage',
  data () {
    return {
      msg: 'Crawl Space Cleaning Cleanouts',
      urlEmail: 'Sales@InsulationCo.com',
      phoneNum: '4259036453',
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
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
b-btn{
  color: whitesmoke;
}
.wrapper{
  margin: auto;
  max-width: 100%;
  padding: 0 !important;
}
.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}
.image-bg{
  box-shadow: 0 5px 20px -10px rgba(0, 0, 0, .5);
}
img{
  max-width: 250px;
  max-height: 253px;
  padding: 1px;
  box-shadow: 0 5px 20px -10px rgba(0, 0, 0, .5);
}

@media screen and (min-width: 580px) {
  .wrapper{
    margin: auto;
    max-width: 70%;
    padding: 0 !important;
  }
}
</style>
