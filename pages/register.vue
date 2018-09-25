<template>
  <div class="container top">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <form @submit.prevent="registerUser">
              <div class="form-group row">
                <label 
                  for="name" 
                  class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input 
                    v-model="userForm.name" 
                    type="text" 
                    class="form-control" 
                    required 
                    autofocus>
                  <span 
                    class="invalid-feedback" 
                    role="alert">
                    <strong/>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label 
                  for="email" 
                  class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input 
                    v-model="userForm.email" 
                    type="email" 
                    class="form-control" 
                    required>
                  <span 
                    class="invalid-feedback" 
                    role="alert">
                    <strong/>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label 
                  for="password" 
                  class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <input 
                    v-model="userForm.password" 
                    type="password" 
                    class="form-control" 
                    required>
                  <span 
                    class="invalid-feedback" 
                    role="alert">
                    <strong/>
                  </span>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button 
                    type="submit" 
                    class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      var res = await this.$axios.post("auth/signup", {
        email: this.userForm.email,
        name: this.userForm.name,
        password: this.userForm.password,
        password_confirmation: this.userForm.password
      });
      this.$auth
        .login({
          data: {
            email: this.userForm.email,
            name: this.userForm.name,
            password: this.userForm.password,
            password_confirmation: this.userForm.password
          }
        })
        .then(res => console.log(res));
      console.log(res);
      //   this.$router.push({
      //     path: "/"
      //   });
    }
  }
};
</script>

<style>
.top {
  margin-top: 80px;
}
</style>