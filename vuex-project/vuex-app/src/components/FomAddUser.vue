<template>
  <div class="form-adding">
    <h2 class="form-adding_title">Add New User</h2>
    <hr />
    <div class="form-adding_content">
      <v-text-field v-model="name" label="Name" hide-details="auto"></v-text-field>
      <button type="submit" @click="addNewUser()">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FormAddUser",
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name() {
      this.$store.state.addUser.nameNewUser = this.name;
    },
    nameUser() {
      this.name = this.nameUser;
    },
  },
  computed: mapGetters(["nameUser"]),
  methods: mapActions(["addNewUser"]),
};
</script>

<style lang="scss">
.form-adding {
  width: 40%;
  height: 400px;
  overflow: auto;
  padding: 20px;
  margin: 50px;
  border: 1px solid gray;
  &_title {
    text-align: center;
    margin: 10px 0;
  }
  &_content {
    margin: 10px 0;
    padding: 40px;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & button {
      font-size: 20px;
      color: white;
      padding: 18px 0;
      background-color: rgb(0, 140, 255);
      font-weight: bold;
      text-transform: uppercase;
      &:hover {
        background-color: rgb(75, 164, 236);
      }
    }
  }
}
</style>
