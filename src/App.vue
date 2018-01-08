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

div {

transition-property:width;
-moz-transition-property: width; /* Firefox 4 */
-webkit-transition-property:width; /* Safari and Chrome */
-o-transition-property:width; /* Opera */

transition-duration: 2s;
-moz-transition-duration: 2s; /* Firefox 4 */
-webkit-transition-duration: 2s; /* Safari and Chrome */
-o-transition-duration: 2s; /* Opera */

transition-timing-function: linear;
-moz-transition-timing-function: linear; /* Firefox 4 */
-webkit-transition-timing-function: linear; /* Safari and Chrome */
-o-transition-timing-function: linear; /* Opera */

transition-delay: .5s;
-moz-transition-delay: .5s; /* Firefox 4 */
-webkit-transition-delay: .5s; /* Safari and Chrome */
-o-transition-delay: .5s; /* Opera */

}
.navbar-header{
  background-color: #da1212e1;
  box-shadow: 0 5px 30px -5px rgba(0, 0, 0, .5);
}

.social-link{
  text-align: left;
}

</style>
