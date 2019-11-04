<template>
  <section id="campaign">
    <nav class="navBar">
      <img class="logo" src="../../assets/LogoBrandMe.png" alt>
      <router-link class="navItem active" to="/campaigns">Campañas</router-link>
      <router-link class="navItem" to="/login">Cerrar Sesión</router-link>
      <div class="navItem">
        <article class="pp"></article>
      </div>
    </nav>
    <h1>{{ $route.params.campaignName}}</h1>
  </section>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      to;
      from;
    }
  },
  created() {}
};
</script>

<style lang="scss">
    @import './Campaign.scss';
</style>


