<template>
    <router-link :to="{ name: 'campaignName', params: { campaignName: campaign.name }}" :campaign="campaign" class="campaignItem">
        <img class="cover" :src="campaign.cover" alt="Cover">
        <div class="logo" ><img :src="campaign.logo" alt="Logo"></div>
        <div class="info">
            <div class="social">
                <div class="svg" :key="social" v-for="social in campaign.social">
                    <img :src="social" alt="social">
                </div>
            </div>
            <h1 class="name">{{campaign.name}}</h1>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ["campaign"]
}
</script>

<style lang="scss" scoped>
    @import './CampaignItem.scss';
</style>


