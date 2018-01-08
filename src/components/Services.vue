<template>
  <div class="servicesPage">
    <h1>{{ msg }}</h1>
    <h3>Insulate Co. can take care of all your Crawl Space, Attic, and Walls</h3>
    
    <b-container>
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body title="ATTIC" active>
          <b-card />
          <b-card-img bottom src="https://lorempixel.com/600/200/abstract/" />
          <b-list-group>
            <b-list-group-item>Blown in | fiberglass, cellulose, vacuum removal</b-list-group-item>
            <b-list-group-item>Batt | fiberglass, roxul at non-ic can lights, bagged removal, Lay in</b-list-group-item>
            <b-list-group-item>Ventilation | baffles (cardboard and foam), foam penetrations</b-list-group-item>
            <b-list-group-item>Spray mold treatment on wood sheathing and studs</b-list-group-item>
            <b-list-group-item>Ducts | wrapping, removal and replacement, mastic seal</b-list-group-item>
            <b-list-group-item>Skylights/Knee walls</b-list-group-item>
            <b-list-group-item>Sprinkler tenting</b-list-group-item>
            <b-list-group-item>Exclusion at attic vents and foam attic penetrations to living space</b-list-group-item>
            <b-list-group-item>Access Lid | weather stripping and insulating</b-list-group-item>
            <b-list-group-item>Attic rulers to measure blown in r-value for owner/inspector</b-list-group-item>
          </b-list-group>
          <b-card-footer>Attic Ducts</b-card-footer>
        </b-tab>

        <b-tab no-body title="CRAWL SPACE">
          <b-card-img bottom src="https://lorempixel.com/600/200/abstract/" />
            <b-list-group>
              <b-list-group-item>Ducts | wrapping, removal and replacement, mastic seal</b-list-group-item>
              <b-list-group-item>Skylights/Knee walls</b-list-group-item>
              <b-list-group-item>Sprinkler tenting</b-list-group-item>
            </b-list-group>
          <b-card-footer>Crawl Space</b-card-footer>
        </b-tab>

        <b-tab no-body title="WALLS">
          <b-card-img bottom src="https://lorempixel.com/600/200/abstract/" />
            <b-list-group>
              <b-list-group-item>Ducts | wrapping, removal and replacement, mastic seal</b-list-group-item>
              <b-list-group-item>Skylights/Knee walls</b-list-group-item>
              <b-list-group-item>Sprinkler tenting</b-list-group-item>
            </b-list-group>
          <b-card-footer>Insulation Walls</b-card-footer>
        </b-tab>
        <b-tab title="Air Seal / Prep">
          <h5>many different insulation products and solutions, including spray foam insulation. Spray foam insulation systems reaches
            all the places you can’t: behind wires, inside cracks, gaps, exterior nail penetrations, you name it. It’s perfect for
            irregularly shaped areas, and is often used for retrofits. In addition, spray foam insulation leaves you with a virtually
            perfect air barrier. Not only does it give you a higher R-value per square inch, it also has multiple applications.
            Compared to traditional insulation products, spray foam insulation enables you to lower your heating and cooling energy 
            usage by as much as 50-60% for the life of your home, making it the most energy efficient product you can have installed.
          </h5>
        </b-tab>
      </b-tabs>
    </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ServicePage',
  data () {
    return {
      msg: 'Service PAGE'
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
