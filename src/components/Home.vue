<template>
  <div class="homePage">
    <div style="background-color: rgba(34,117,183,1);">
      <div class="header-image py-3">
        <h1>{{ msg }}</h1>
        <h2>THE CRAWL SPACE &amp; ATTIC INSULATION PROS</h2>
      </div>

      <b-container class="body-wrap">
        <div class="videoWrapper mt-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yaemJGEFxMQ?showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </div>
    
        <div class="m-4">
          <h3 id="new-header">An Insulation Contractor You Can Trust</h3>
        </div>
      
        <p class="pb-3">Insulation Co. specializes in attic & crawl space insulation install, removal, crawl access doors, heat duct sealing, drill & fill for walls/ceilings
          and clean outs. We offer blown-in, batt, cellulose, foam board and roxul for crawl spaces, attics, walls, remodels, additions, garages / shops and new construction. 
        </p>
      </b-container>
    </div>
    
    <h2>Servicing Counties:</h2> 
    <h3>Snohomish, King, Pierce and Skagit in WA</h3>
    
    <div class="p-4">
      <b-btn size="lg" variant="primary" :href="'mailto:' + urlEmail">{{urlEmail}}</b-btn>
      <b-btn size="lg" variant="success" :href="'tel:'+ phoneNum">Call Us @ {{phoneNum}}</b-btn>
    </div>

    <b-container class="review-icon">
      <img src="https://www.homeadvisor.com/images/sp-badges/soap.png">
      <img src="https://static.wixstatic.com/media/7d786c_85103c4d2c7440e098c98495c407f1a4~mv2.png/v1/fill/w_125,h_55,al_c/7d786c_85103c4d2c7440e098c98495c407f1a4~mv2.png">
      <img src="https://www.homeadvisor.com/images/sp-badges/20reviews.png" >
    </b-container>

    <div>
      <b-btn style="width: 100%;" v-b-toggle.form-collapse variant="primary">Free Estimate Request</b-btn>
      <b-collapse id="form-collapse" class="" style="width: 100%;">
        <b-card>
          <p class="card-text">Estimate Request Form</p>
          <b-container class="text-center mx-auto" style="max-width: 650px;">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="text-center mx-auto">
              <b-form-group id="estimateInputGroup1"
                    label="Email address:"
                    label-for="emailInput1"
                    description="We'll never share your email with anyone else.">
                <b-form-input id="emailInput1"
                    type="email"
                    v-model="form.email"
                    required
                    placeholder="Enter email">
                </b-form-input>
              </b-form-group>
              <b-form-group id="fullNameInputGroup2"
                    label="Your Name:"
                    label-for="nameInput2">
                <b-form-input id="nameInput2"
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="Enter name">
                </b-form-input>
                <b-form-input id="nameLastInput2"
                    type="text"
                    v-model="form.lastName"
                    required
                    placeholder="Enter Last name">
                </b-form-input>
              </b-form-group>
             <b-form-group id="telInputGroup3"
                    label="Your Phone Number:"
                    label-for="telInput3">
                <b-form-input id="telInput3"
                    type="tel"
                    v-model="form.tel"
                    required
                    placeholder="Phone Number">
                </b-form-input>  
              </b-form-group>
              <div>
                <b-form-textarea id="textarea1"
                            v-model="form.textarea"
                            placeholder="Describe your Project"
                            :rows="3"
                            :max-rows="6">
                </b-form-textarea>
              </div>
              <div class="mt-3">
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </div>
            </b-form>
          </b-container>
        </b-card>
      </b-collapse>
    </div>

    <div class="footer">
      <p>***Savings on Energy Bills vary. Higher R-values mean greater insulation power.
          Licensed, Bonded, Insured. Copyright © 2015 Insulation Co. LLC. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'INSULATION CO',
      urlEmail: 'Sales@InsulationCo.com',
      phoneNum: '4259036453',
      form:{
        email:'',
        name:'',
        lastName:'',
        tel:'',
        textarea:''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.lastName = '';
      this.form.tel = '';
      this.form.textarea = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
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

.header-image{
  background-image: url(../assets/insulation-truck.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  color: white;
}

.body-wrap{
  max-width: 750px;
}

#new-header{
  font-size: 35px;
  color: whitesmoke;
}

.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.review-icon img{
  padding: 10px;
}

.footer{
  padding: 1em;
  background-color: #da1212e1;
  color: white;
}

</style>
