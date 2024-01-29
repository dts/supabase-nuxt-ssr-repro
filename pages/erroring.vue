<template>
  <div>
    User {{ user?.email || 'null' }}

    <div v-if="user">
      <button @click="triggerError">Try to trigger SSR Error</button>
    </div>
    <LoginForm v-else />
  </div>
</template>
<script lang="ts" setup>
const user = useSupabaseUser();


function triggerError() {
  document.cookie = 'sb-access-token=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'sb-refresh-token=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  console.log(document.cookie)
  document.location.reload();
}

</script>