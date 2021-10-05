<template>
<main>
<div class='navbar'>
    <div class="row">
        <div class="col1">
             <img src ="../assets/logo.png" class="img"> </div>
        <div class="col2">
            <input type="text" placeholder="Search or jump to..." v-model="user"  @enter="search()" @type="onType">
             <button class="search-button" @click="search">Search
      </button>
            </div>
</div>
</div><br><br><br>
<div class="box" v-if="userDetails.length">
    <div class="row">
        <div class="column1" v-if="userDetails.length">
            <!-- <div class="column1row1"> -->
                <!-- <img src="../assets/logo.png" class="image"> -->
                 <img class="image" v-if="userDetails[0].avatar_url" :src="userDetails[0].avatar_url"/>
            <!-- </div> -->
        </div>
        <div class="column2">
            <div class="column2row1" v-if="userDetails.length">
            <h1>{{userDetails[0].name}}</h1> </div>
            <div class="column2row2">
                <div class="row2col1" v-if="userDetails.length">
                <h3>{{userDetails[0].followers}} Followers</h3></div>
                <div class="row2col2" v-if="userDetails.length">
                <h3>{{userDetails[0].following}} Following</h3></div>
                </div>
            </div>
        </div>
        <hr v-if="userDetails.length">
        <h3 v-if="userDetails.length">User Details</h3><hr v-if="userDetails.length">
        <table>
            <tr>
                <td v-if="userDetails.length"><h3> ID: </h3></td>
                <td v-if="userDetails.length"> {{userDetails[0].id}} </td>
            </tr>
            <tr>
                <td v-if="userDetails.length"><h3> Number of public repositories: </h3></td>
                <td v-if="userDetails.length"> {{userDetails[0].public_repos}}</td>
            </tr>
            <tr>
                <td v-if="userDetails.length"><h3> Number of public gists: </h3></td>
                <td v-if="userDetails.length"> {{userDetails[0].public_gists}} </td>
            </tr>
            </table>
</div>
</main>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default {
  data () {
    return {
      userDetails: [],
      user: ''
    }
  },
  watch: {
    user: function (val) {
      return this.search()
    }
  },
  methods: {

    search () {
      axios.get('https://api.github.com/users/' + this.user)
        .then((res) => {
          console.log(res.data)
          this.userDetails = [res.data]
          console.log(res.data)
        })
    },
    onType (e) {
      if (e.key === '') {
        this.search()
      }
    }
  }

}
</script>

<style scoped>
.navbar{
    margin-left: 0px;
     background-color: #24292f;
    padding: 5px;
    width: 100%;
}
.img{
    height: 50px;
}
.col1{
    width: 30%;
    float: left;
}
.col2{
    width:70%;
    float: left;
    margin-top: 12px;
}
.column1{
    width: 30%;
    float: left;
    margin-left: 10%;
    margin-top: 10px;
}
.column2{
    width:50%;
    float: left;
}
.row2col1{
    width:25%;
    float: left;
}
.row2col2{
    width:25%;
    float: left;
}
.row:after{
    content: "";
  display: table;
  clear: both;
}
input[type="text"]
{
    width: 40%;
    padding: 7px;
    border: 2px solid rgb(243, 241, 241);
    border-style:outset;
    border-radius: 5px;
}
.search-button{
    padding: 7px;
}
.image{
border-radius: 300px;
width: 70%;
}
.box{
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     transition: 0.3s;
     width: 80%;
     padding: 20px;
     margin-left: 10%;
     border-radius: 20px;
     background-color: rgb(252, 252, 252);
}
table{
            /* border: 1px solid black; */
            /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
            width: 50%;
            padding:auto;
            border-collapse: collapse;
        }
        td{
            margin-top: 10%;
            margin-left:25%;
            padding:0px;
            width:150px;
            text-align:center;
            /* border:1px solid rgb(207, 206, 206); */
            padding:5px
            }
            /* tr:nth-child(odd){
                background-color: rgb(226, 232, 236);
            }
            tr:nth-child(even){
                background-color: rgb(252, 252, 252);
            } */
</style>
