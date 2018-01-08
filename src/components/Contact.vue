<template>
  <div class="contactPage">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <div class="p-4">
      <b-btn size="lg" variant="primary" :href="'mailto:' + urlEmail">{{urlEmail}}</b-btn>
      <b-btn size="lg" variant="success" :href="'tel:'+ phoneNum">Call Us @ {{phoneNum}}</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data () {
    return {
      msg: 'CONTACT PAGE',
      urlEmail: 'Sales@InsulationCo.com',
      phoneNum: '4259036453'
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
</style>
