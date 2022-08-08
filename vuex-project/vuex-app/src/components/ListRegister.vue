<template>
    <div class="list">
        <h2 class="list_title">Register here</h2>
        <hr/>
        <div class="list_content">
            <div class="list_content__item" v-for="user in newUsers" :key="user.id">
                <span>{{user.name}}</span>
                <button @click="registerUser(user)">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
        name: "ListRegister",
        computed: mapGetters(['newUsers']),
        methods: mapActions(['registerUser']),
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
            & button {
                padding: 0 10px ;
                background-color: rgb(117, 219, 104);
            }
        }
    }
}
</style>