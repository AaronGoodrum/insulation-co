<template>
  <div id="app">
<!-- vue-bootstrap -->
<div class="top-social">
  <b-container>
    <b-row>
      <b-col>
        <ul class="social-link">
        <!-- Explicit prefix - Vue bind shorthand because uses an array: -->
        <!-- v-bind: "[fab = brand,  fas = solid]" -->
          <b-row>
            <b-col>
              <a href="#" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
              </a>
            </b-col>
            <b-col>
              <a href="#" target="_blank">
                <font-awesome-icon :icon="['fab', 'yelp']" size="2x" />
              </a>
            </b-col>
          </b-row>
        </ul>
      </b-col>
      <b-col>
        <a :href="'mailto:' + urlEmail"><font-awesome-icon :icon="['fas', 'envelope']" /> {{ urlEmail }}
        </a> 
        <br>
        <a :href="'tel:'+ phoneNum"><font-awesome-icon :icon="['fas', 'phone']" /> Call or Text @ {{ phoneNum }}
        </a>
      </b-col>
    </b-row>
  </b-container>
</div>
  <!-- Main NavBar -->
    <b-navbar class="navbar-header" toggleable="md" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <router-link to="/">
        <img id="joLogo" width="70" height="50" src="./assets/logo.png" alt="joe Logo"></router-link>
    
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item><router-link class="nav-link" to="/services">Services</router-link></b-nav-item>
          <b-nav-item><router-link class="nav-link" to="/about">About</router-link></b-nav-item>
          <b-nav-item><router-link class="nav-link" to="/why-insulate">Why Insulate?</router-link></b-nav-item>
          <b-nav-item><router-link class="nav-link" to="/cleanouts">Cleanouts</router-link></b-nav-item>
          <b-nav-item><router-link class="nav-link" to="/products">Products</router-link></b-nav-item>
          <b-nav-item><router-link class="nav-link" to="/contact">Contact</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

  <!-- /MainNavbar -->
    <router-view/>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'app',
  data () {
    return {
      urlEmail: 'Sales@InsulationCo.com',
      phoneNum: '4259036453'
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Slab', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

body{
    font-size: 21px;
    text-align: center;

    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
         -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.navbar-header{
  background-color: rgba(218, 18, 18, 0.882);
  box-shadow: 0 5px 30px -5px rgba(0, 0, 0, .5);
}

.social-link{
  text-align: left;
}

</style>
