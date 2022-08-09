<template>
  <v-app>
    <div class="main">
      <div class="registration">
        <list-register></list-register>
        <list-not-register></list-not-register>
      </div>
      <form-add-user></form-add-user>
    </div>
  </v-app>
</template>

<script>
import ListRegister from "./components/ListRegister";
import ListNotRegister from "@/components/ListNotRegister";
import FomAddUser from "./components/FomAddUser";

export default {
  name: "App",
  components: {
    "list-register": ListRegister,
    "list-not-register": ListNotRegister,
    "form-add-user": FomAddUser,
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.registration {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
