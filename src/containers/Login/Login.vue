<template>
    <section id="login">
        <img class="bg" src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bg">
        <form action="" method="post">
            <img src="../../assets/LogoBrandMe.png" alt="">
            <label for="email">E-mail</label>
            <input type="email" name="email">
            <label for="password">Password</label>
            <input type="password" name="password">
            <router-link class="button" to="/campaigns" type="submit">Entrar</router-link>
        </form>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import './Login.scss';
</style>



