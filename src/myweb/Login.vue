<script setup>
import { onMounted,ref} from "vue";
import axios from 'axios';
// example components
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Navmenu from "@/components/Navmenu.vue"

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});


const email = ref('');
const password = ref('');
const errorMessage = ref('');

const isEmailValid = ref(null);
const isPasswordValid = ref(null);
const rememberPassword = ref(false);
async function submitForm() {

  if (isEmailValid.value !== true || isPasswordValid.value !== true) {
    // errorMessage.value = "输入有误，请检查并修正。";
    // alert(errorMessage.value);
    return;

  }
  try {
    console.log(password.value)
    console.log(email.value)
    const response = await axios.post('https://mock.apifox.cn/m1/2693064-0-default/login', {
      username: email.value,
      password: password.value,
    });
    const token = response.data.token;
    if (token) {
      localStorage.setItem('token', token);
      console.log(token);
      console.log(response);
      window.location.href = '/platform';
    } else {
      errorMessage.value = '用户名或密码错误，请重试。';
      alert(errorMessage.value);
      // 重置表单
      email.value = '';
      password.value = '';
    }
  } catch (error) {
    errorMessage.value = '服务器错误，请稍后再试。';
    alert(errorMessage.value);
    console.error(error);
  }
}

</script>
<template>
  <div>
  <Navmenu />
  <!-- <DefaultNavbar transparent /> -->
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(/bg9.jpg)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    登 陆
                  </h4>
                  <div color="text-white" id="text">
                    <!-- <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div> -->
                    欢迎来到3D智慧医疗平台！
                  </div>
                </div>
              </div>
              <div class="card-body pb-3">
                <form role="form" class="text-start" @submit.prevent="submitForm">
                  <MaterialInput
                    ref="emailInput"
                    id="email"
                    class="input-group-outline my-3"
                    :label="{ text: 'Email', class: 'form-label' }"
                    type="email"
                    required
                    v-model="email"
                    @validation="isEmailValid = $event"
                  />
                  <MaterialInput
                    ref="passwordInput"
                    id="password"
                    class="input-group-outline mb-3"
                    :label="{ text: 'Password', class: 'form-label' }"
                    type="password"
                    minlength="6"
                    maxlength="18"
                    pattern="^(?=.*[a-zA-Z])(?=.*\d).{6,}$" 
                    required
                    v-model="password"
                    @validation="isPasswordValid = $event"
                  />
                  <MaterialSwitch
                    class="d-flex align-items-center mb-3"
                    id="rememberMe"
                    labelClass="mb-0 ms-3"
                    v-model:checked="rememberPassword"
                    >记住密码</MaterialSwitch
                  >

                  <div class="text-center">
                    <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                      >登 陆</MaterialButton
                    >
                  </div>
                  <p class="mt-4 text-sm text-center">
                    没有账户?
                    <a
                      href="../register"
                      class="text-success text-gradient font-weight-bold"
                      >注册</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
</div>
</template>
<style>
#text{
  text-align: center;
  padding-left: 0px;
  color: aliceblue;
  font-weight: 100;
}
</style>
