<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";

const loading = ref(false);
const email = ref("");

const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <form class="form" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Your own personal management APP</h1>
      <p class="description">
        Sign in through generated link with your email below
      </p>
      <div>
        <input
          class="inputField"
          required
          type="email"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>

<style>
.header {
  color: white;
}

.form {
  background: lightblue;
  width: 50%;
  border-radius: 2rem;
  text-align: center;
}
.background--custom {
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  z-index: -2;
  top: 0;
  left: 0;
}
canvas#canvas {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 60%;
  transform: rotate(-12deg) scale(2) translateY(-30%);
  --gradient-color-1: #b026ad;
  --gradient-color-2: #3442d8;
  --gradient-color-3: #d184e3;
  --gradient-color-4: #25f77f;
  --gradient-speed: 0.000006;
}
</style>
