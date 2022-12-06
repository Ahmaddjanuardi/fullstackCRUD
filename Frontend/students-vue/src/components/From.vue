<template>
   <div class="">
      <div class="d-flex justify-content-center my-5">
          <div class="col-md-8">
            <form
              action=""
              class="shipping p-5"
              id="formShipping"
              style="border: 3px solid pink"
            >
              <h1 style="text-align: center">Add Student</h1>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="first name">Student Name</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter name"
                    id=""

                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="phone number">Soft Skills</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter soft skills"
                    id=""
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label for="last name">Student Age</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter age"
                    id=""
                    
                  />
                </div>
                <div class="mb-3 col-md-3">
                    <label for="exampleFormControlSelect1">Gender</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option selected></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="hard_skills">Hard Skills</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter hard skills"
                    id=""
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="first name">Student Email</label>
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Enter email"
                    id="email"
                  />
                </div>
                <div class="mb-3 col-md-6">
                    <label for="exampleFormControlSelect1">Interest</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option selected></option>
                        <option value="data_science">Data Science</option>
                        <option value="network">Network</option>
                        <option value="web_frontend">Web Frontend</option>
                        <option value="web_backend">Web Backend</option>
                        <option value="mobile_apps">Mobile Apps</option>
                    </select>
                </div>
                <div class="mb-3 col md-12">
                    <label for="">Self Description</label>
                    <div class="input-group">
                      <textarea
                        class="form-control"
                        name=""
                        id=""
                        placeholder="Enter address"
                      ></textarea>
                </div>
                <div class="p-3 col-md-6">
                    <button
                    type="submit"
                    class="btn"
                    style="background-color: pink"
                    id="btnSubmitShipping"
                    >
                    <!-- {{buttonValue}} -->submit
                </button>
            </div>
        </div>
              </div>
            </form>
            <!-- Success Section -->
            <!-- <SuccessForm v-show="success"></SuccessForm> -->
          </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'fromPage', 
}
</script>

<style>

</style>