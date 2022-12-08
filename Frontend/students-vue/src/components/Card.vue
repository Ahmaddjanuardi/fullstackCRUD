<template>
    <div class="">
        <router-link to="/add" v-show="!success">
        <button type="button" class="btn btn-primary m-5">Add Data</button>
        </router-link>
        <div class="row d-flex">
            <div class="card m-5 border" v-for="item in studentsData" :key="item.id" style="border-radius:20px;"  v-show="!success">
                <div class="card-body">
                  <h5 class="card-title">{{ item.nama }}, {{ item.umur }} Year Old</h5>
                  <h3>{{item.deskripsi_diri}}</h3>
                  <table class="" width="100%">
                  <tr>
                      <td>Email</td>
                      <td width="100%">:{{item.email}}</td>
                  </tr>
                  <tr>
                      <td>Soft Skill</td>
                      <td>:{{item.soft_skill}}</td>
                  </tr>
                  <tr>
                      <td>Hard Skill</td>
                      <td>:{{item.hard_skill}}</td>
                      
                  </tr>
                  <tr>
                      <td>Interest</td>
                      <td>:{{item.interest}}</td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>
                          <router-link :to="{ path: '/update/' + item.id }">
                               <button type="button" class="btn btn-primary m-2">Update</button>
                           </router-link>
                          
                          </td>
                      <td>
                          <router-link to="/">
                              <button type="button" class="btn btn-danger" @click="deleteStudentsFunc(item.id)">Delete</button>
                          </router-link>
                      </td>
                      <td></td>
                      <td> <img v-if="item.jenis_kelamin == 'Male'" src="@/assets/img/male.png" alt="" width="30px">
                           <img v-else :class="item.jenis_kelamin" src="@/assets/img/female.png" alt="" width="25px"></td>
                  </tr>
              </table>
                </div>
            </div>
            <div class="succesDelete">
                <SuccessFormVue v-show="success"></SuccessFormVue>
            </div>
          </div>
    </div>

</template>

<script>
import SuccessFormVue from './SuccessForm.vue';
import studentsService from '@/service/service'
export default {
    name: 'cardPage',
    components :{
        SuccessFormVue
    },
    methods : {
        getStudents(){
            studentsService.getAll()
                .then(response => {
                    this.studentsData = response.data;
                    console.log(this.studentsData);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        deleteStudentsFunc(id){
            if (confirm("Apakah anda yakin ingin menghapus data ini?")) {
                studentsService.deleteStudents(id)
                .then(response=> {
                    console.log(response.data);
                    this.success= true;
                })
                .catch(e=>{
                    console.log(e);
                });

            }else{
                alert("Hapus dibatalkan!")
            }
        }
    },
    mounted(){
        this.getStudents();
    },
    data(){
        return{
            studentsData : null,
            success : false,
        }
    }
}
</script>

<style scoped>

img{
    margin: 20px;
}
.succesDelete{
    width: 761px;
    height: 158px;
    margin-left: 200px;
    margin-top: 200px;
    margin-bottom: 100px;
}
</style>