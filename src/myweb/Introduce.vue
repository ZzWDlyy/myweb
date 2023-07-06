<script setup>
    import Navmenu from "@/components/Navmenu.vue";
    import Header from "../examples/Header.vue";

//image
    import image from "../assets/own/bg5.png";

//sections
    import Information from "../views/Blogs/SingleArticle/Sections/SingleArticleInformation.vue";
    // import OurEffort from "../views/Blogs/SingleArticle/Sections/SingleArticleOurEffort.vue";
    // import Features from "../views/Blogs/SingleArticle/Sections/SingleArticleFeatures.vue";
    // import Posts from "../views/Blogs/SingleArticle/Sections/SingleArticlePosts.vue";
    // import Support from "../views/Blogs/SingleArticle/Sections/SingleArticleSupport.vue";
</script>
<template>
  <div>
    <Navmenu />
    <Header
    minHeight="min-vh-85"
    :image="image"
    mask="mask bg-gradient-dark opacity-8"
    :title="{ variant: 'h1', text: '平台功能介绍', class: 'mb-0' }"
    :description="{
      text: '本页面将会介绍本平台的各种功能，包括预测展示，数据分析',
      class: 'pe-sm-5 me-sm-5  opacity-8',
    }"
  >
    <h5 class="mt-3 text-white"></h5>

    <!-- <div class="d-flex justify-content-start">
      <a href="javascript:;"
        ><i class="fab fa-facebook text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-instagram text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-twitter text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-google-plus text-white text-lg"></i
      ></a>
    </div> -->
  </Header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <section class="py-5 mt-5">
      <Information />
    </section>
    <div
      class="page-header min-height-300 mx-n3"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1585975438803-350463f9c9b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80)',
        backgroundPosition: 'bottom',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
    </div>
  </div>
  </div>
</template>

<style lang="scss"></style>