<template>
  <v-app>
    <v-main>
      <list-register></list-register>
      <list-not-register></list-not-register>
    </v-main>
  </v-app>
</template>

<script>
import ListRegister from './components/ListRegister';
import ListNotRegister from '@/components/ListNotRegister'

export default {
  name: 'App',
  components: {
    "list-register": ListRegister,
    "list-not-register": ListNotRegister,
  },
};
</script>
