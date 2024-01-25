<template>
    <div class="navbar">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">Контакты</router-link>
        <router-link to="/store">VUEX</router-link>
    </div>
</template>
  
<script>


export default {


}
</script>
  
<style  scoped>
.navbar {
    gap: 20px;
    height: 50px;
    display: flex;
    background-color: lightgray;
    align-items: center;
    justify-content: start;
    padding: 20px;
}
</style>
  
