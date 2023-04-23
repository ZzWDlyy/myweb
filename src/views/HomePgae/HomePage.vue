<template>
    <div>
         <NavMenu/>
         <HomeMain1/>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue';
import HomeMain1 from './HomeMain1.vue';
export default {
    components: {
            HomeMain1,
            NavMenu
        }
    }
</script>

<style lang="scss" scoped>

</style>