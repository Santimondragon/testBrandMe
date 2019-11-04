<template>
  <section id="campaigns">
    <nav class="navBar">
      <img class="logo" src="../../assets/LogoBrandMe.png" alt>
      <router-link class="navItem active" to="/campaigns">Campañas</router-link>
      <router-link class="navItem" to="/login">Cerrar Sesión</router-link>
      <div class="navItem">
        <article class="pp"></article>
      </div>
    </nav>
    <h1 class="title">Campañas</h1>
    <p class="description">En esta sección encontrarás todas la campañas disponibles, podrás entrar y participar</p>
    <div class="campaigns">
      <CampaignItem :campaign="campaign" :key="campaign.id" v-for="campaign in campaigns"/>
    </div>
  </section>
</template>

<script>
import CampaignItem from "../../components/CampaignItem/CampaignItem";
export default {
  computed: {
    campaigns() {
      return this.$store.state.campaigns;
    }
  },
  components: {
    CampaignItem
  }
};
</script>

<style lang="scss">
    @import "./Campaigns.scss";
</style>



