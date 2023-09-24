<template>
  
  <div
    class="flex flex-col min-h-screen font-Roboto bg-weather-primary"
  >
    <SiteNavigation />
    
    <!-- <div>
      <RouterLink to="/aaa">aaa</RouterLink>
      <RouterLink to="/bbb">bbb</RouterLink>

      <h1 @click="remove('aaa')">removeA</h1>
    </div> -->
    <RouterView class="flex-1" v-slot="{ Component }">
    <!-- <RouterView class="flex-1" v-slot="vvv"> -->
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
    
  </div>
</template>

<script setup>
import { RouterView,RouterLink } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
import router from './router/index'
const remove = (routeName)=>{
  router.removeRoute(routeName)
}
</script>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
