<template>
    <div class="list">
        <h2 class="list_title">Registrations</h2>
        <h2 class="list_description">Total: {{countUsers}}</h2>
        <hr/>
        <div class="list_content">
            <div class="list_content__item" v-for="user in registeredUsers" :key="user.id">
                <span>{{user.name}}</span>
                <button class="list-not-register" @click="unregisterUser(user)">UnRegister</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
        name: "ListNotRegister",
        computed: mapGetters(['registeredUsers', "countUsers"]),
        methods: mapActions(['unregisterUser']),
    }
</script>

<style lang="scss">
.list {
    width: 40%;
    padding: 20px;
    margin: 10%;
    border: 1px solid gray;
    &_title{
        text-align: center;
        margin: 10px 0;
    }
    &_content{
        margin: 10px 0;
        &__item{
            display: flex;
            justify-content: space-between;
            height: auto;
            padding: 5px 0;
            & span{
                font-weight: 500;
            }
            & button.list-not-registers {
                padding: 0 10px ;
            color: rgb(219, 104, 104);
            }
        }
    }
}
</style>