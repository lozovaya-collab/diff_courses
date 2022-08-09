<template>
  <div class="list">
    <h2 class="list_title">Registrations</h2>
    <h2 class="list_description">Total: {{ countUsers }}</h2>
    <hr />
    <div class="list_content" v-if="registeredUsers.length > 0">
      <div class="list_content__item" v-for="user in registeredUsers" :key="user.id">
        <span>{{ user.name }}</span>
        <button class="list-not-register" @click="unregisterUser(user)">
          UnRegister
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListNotRegister",
  computed: mapGetters(["registeredUsers", "countUsers"]),
  methods: mapActions(["unregisterUser"]),
};
</script>

<style lang="scss">
.list {
  &_content {
    &__item {
      & button.list-not-register {
        padding: 0 10px;
        color: rgb(219, 104, 104);
      }
    }
  }
}
</style>
