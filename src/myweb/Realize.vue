<script setup>
// example components
import Header from "../examples/Header.vue";
import Navmenu from "@/components/Navmenu.vue"

// sections
// import Profile from "../views/Blogs/Author/Sections/AuthorProfile.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
    <Header>
        <Navmenu />
        <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
            <span class="mask bg-gradient-dark opacity-8"></span>
        </div>
         <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6"></div>
    </Header>
  
</template>
