<template>
  <div class="aboutPage p-4">
    <h1>{{ msg }}</h1>

  <b-jumbotron>
    <b-container class="wrapper">
    <h2>Our Story</h2>
    
      <div class="mb-3">
        <b-img fluid rounded src="../assets/joEstrade.png" alt="Jo Estrade Family" />
      </div>
    
    

      Jo Estrada (Founder) began his Insulation training at the age of 10 (weekends and summers). 
      Training with the best began to mold him into one of the most prominent Insulation installers in Washington.
    
    <hr class="my-4">
      <p>
        For the past 20 years, Jo has been committed to improving the mechanics of Insulation through hard work and education. Technology has helped Insulation Co. 
        turbo-charge application speed, project estimation, precision, planning, quality and efficiency. Our Staff is hand picked and go through rigorous training, 
        screening and background checks before they can be sent out into the field. Our team is dedicated to working with you to implement simple solutions to meet your needs and budget.
      </p>
    <b-btn variant="primary" :href="'mailto:' + urlEmail">Email Us</b-btn>
    <b-btn variant="success" :href="'tel:'+ phoneNum">Call Us</b-btn>

    </b-container>
  </b-jumbotron>

  </div>
</template>

<script>


export default {
  name: 'AboutPage',
  data () {
    return {
      msg: 'About Insulation Co',
      urlEmail: 'Sales@InsulationCo.com',
      phoneNum: '4259036453'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
h2 {  
  font-size: 3em;
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
  max-width: 800x;
}

</style>
