<template>
  <form @submit.stop.prevent="login">
    <input v-model="email" placeholder="email">
    <input v-model="password" placeholder="password">
    <button>Sign In</button>
  </form>
</template>
<script lang=ts setup>
const client = useSupabaseClient();

const email = ref();
const password = ref();

function login() {
  client.auth.signInWithPassword({ email: email.value, password: password.value })
}

</script>