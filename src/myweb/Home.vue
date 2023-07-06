<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
import Navmenu from "@/components/Navmenu.vue"
// example components
import AboutUsOption from "@/views/LandingPages/Coworking/Components/AboutUsOption.vue";
// example component
import DefaultBackgroundCard from "@/examples/cards/backgroundCards/DefaultBackgroundCard.vue";

// local component
import ListItem from "@/views/Support/HelpCenter/Components/ListItem.vue";
import MaterialAlert from "@/components/MaterialAlert.vue";

// images
import bg1 from "@/assets/img/examples/color1.jpg";

import SimpleBlogCard from "../examples/cards/blogCards/SimpleBlogCard.vue";

//Vue Material Kit 2 Pro components
import MaterialBadge from "../components/MaterialBadge.vue";

import { useRouter } from 'vue-router'
import DetailedFooter from "@/examples/footers/FooterDetailed.vue";

const footerContent = {
  brand: {
    name: "3D SMARTHEALTHCARE",
  },
 
  menus: [
    {
      name: "Introduction",
      items: [
       
      ],
    },
    {
      name: "Pages",
      items: [
        { name: "login", href: "https://www.creative-tim.com" },
        { name: "register", href: "https://www.creative-tim.com" },
        
      ],
    },
    {
      name: "Privacy",
      items: [
        { name: "faq", href: "https://www.creative-tim.com" },
       
      ],
    },
    {
      name: "resources",
      items: [
        { name: "blog", href: "https://www.creative-tim.com" },
        { name: "services", href: "https://www.creative-tim.com" },
     
      ],
    },
  ],
  copyright: "Material Design by Creative Tim.",
};

  // 获取路由实例
  const router = useRouter()

  // 定义点击事件处理程序
  function handleClick() {
    router.push({ name: 'platform' })
  }
</script>
<template>
 <div>
  <header>
    <Navmenu />
    <div class="page-header min-vh-100"
      id = "head"
      loading="lazy">
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 class="text-white mb-4">3D智慧医疗</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              -------基于百度padlepadle平台的cv分析平台
            </p>
            <div class="buttons">
              <MaterialButton color="white" class="mt-4"
                @click="handleClick">快速开始</MaterialButton>
              <!-- <MaterialButton color="none" class="text-white shadow-none mt-4"
                >Read more</MaterialButton> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- 内容介绍 -->
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
  <div id="section4">
   <section class="py-9" id = "section2">
    <div class="container">
      <!-- <MaterialAlert color="secondary" fontWeight="bold"> -->
      <div class="row">
        <div class="col-lg-6 my-auto">
          <h3>为什么要创建该平台？</h3>
          <p class="pe-5">
            3D智慧医疗平台可以利用人工智能技术，对医学影像进行快速、准确的诊断。相比传统的2D医学影像，3D医学影像可以提供更多的信息，帮助医生更准确地诊断和制定治疗方案。
          </p>
          <a href="javascript:;" class="text-success icon-move-right"
            >了解更多
            <i class="fas fa-arrow-right text-sm ms-1"></i>
          </a>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="3D智慧医疗平台可以实现自动化诊断，减少医生的劳动强度，提高诊断效率。"
          />
          <AboutUsOption
            icon="settings_overscan"
            content="3D医学影像可以通过云平台进行共享，让医生、患者和医疗机构之间更加紧密地联系起来。"
          />

          <AboutUsOption
            icon="token"
            content="通过3D智慧医疗平台，可以实现医学影像的数字化管理，降低医疗成本。"
          />
        </div>
      </div>
      <!-- </MaterialAlert> -->
    </div>
     <div class="container" id="gallery1">

      	<div class="gallery">

      		<div class="gallery-item">
      			<img class="gallery-image" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer">
      		</div>

      		<div class="gallery-item">
      			<img class="gallery-image" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop" alt="sunset behind San Francisco city skyline">
      		</div>

      		<div class="gallery-item">
      			<img class="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan">
      		</div>
      	</div>

      </div>
  </section>
  <!-- 图片展示 -->
  
  <!-- 简述使用方法 -->
   <MaterialAlert color="light" fontWeight="bold">
  <section class="py-7" id="section3">
    <div class="container" >
      <div class="row">
        <div class="col-lg-5 col-10 ms-auto me-auto text-center">
          <div class="p-3 info-hover-warning">
            <div
              class="icon icon-shape bg-gradient-success shadow icon-shape-circle text-success"
            >
              <i class="fa fa-cogs"></i>
            </div>
          </div>
          <h3 class="mt-4">如何使用该平台</h3>
          <p class="read">
            首先你必须有一个属于自己的账户，还没有
            <a
                        href="../register"
                        class="text-success text-gradient font-weight-bold"
                        >注册</a
                      >
            ？
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 ms-auto my-auto">
          <DefaultBackgroundCard
            :image="bg1"
            label="Website visitors"
            title="想要了解更多功能？"
            description="想要了解更多的功能可以点击下方的按钮快速跳转功能介绍页面，里面有更详细的功能介绍！可以帮你更加快速的了解本平台"
          />
        </div>
        <div class="col-md-5 me-auto my-auto ms-md-5">
          <ListItem title="1. 选择需要分析的图片" class="read">
             导入数据：图像支持格式包含nii、nii.gz、mhd、raw、dcm 等常见格式。
          </ListItem>
          <ListItem title="2. 对图片的结果进行分析" class="read">
             三视图展示原图和标签显示，每个视图支持鼠标拖动进行切片切换、鼠标拖动带动3D原点的变化，视图支持缩放和窗宽窗位调整。
          </ListItem>
          <ListItem title="3. 生成最终的报告" class="read">
            根据各类分割及分析结果，自动生成高质量病例报告。
          </ListItem>
        </div>
      </div>
    </div>
  </section>
  </MaterialAlert>
  </div>
  <!-- 功能简介 -->
  <section class="features-3 py-4">
      <div class="container">
        <div class="row text-center justify-content-center">
          <div class="col-lg-6">
            <MaterialBadge class="mb-2" color="success" rounded
              >padlepadle</MaterialBadge
            >
            <h2>原理简介</h2>
            <p>
              下面简单阐述了各个功能的实现的原理，帮助你更了解本平台，同时也可以帮助相关人员快速学习
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 mb-lg-0 mb-4">
            <SimpleBlogCard
              image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
              title="Campus 6"
              description="Website visitors today demand a frictionless user expericence.
                Applies to mobile applications too."
              :action="{ color: 'dark', label: 'Find more' }"
            />
          </div>
          <div class="col-lg-4 mb-lg-0 mb-4">
            <SimpleBlogCard
              image="https://images.unsplash.com/photo-1498677231914-50deb6ba4217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
              title="Cozy Spots"
              description="If you’re more passionate about founding a business than the
                business itself technology."
            />
          </div>
          <div class="col-lg-4">
            <SimpleBlogCard
              image="https://images.unsplash.com/photo-1587578932405-7c740a762f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
              title="Home Office"
              description="Website visitors today demand a frictionless user expericence —
                especially when using search."
            />
          </div>
        </div>
      </div>
    </section>
    <!-- 装饰 -->
    <section class="py-4 position-relative">
      <div class="container-fluid mt-8 mt-sm-2">
        <div class="row">
          <div class="col-10 mx-auto bg-gradient-dark border-radius-lg">
            <div class="row py-5">
              <div class="col-xl-4 col-md-6 px-5 position-relative">
                <img
                  class="img border-radius-md max-width-300 w-100 position-relative z-index-2 mt-n7"
                  src="https://images.unsplash.com/photo-1521668576204-57ae3afee860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                  loading="lazy"
                  alt="card image"
                />
              </div>
              <div
                class="col-xl-4 col-md-5 z-index-2 position-relative px-md-3 px-5 my-md-auto mt-4"
              >
                <i class="material-icons text-white text-5xl">format_quote</i>
                <p class="text-lg text-white">
                  Decisions: If you can’t decide, the answer is no. If two equally
                  difficult paths, choose the one more painful in the short term
                  (pain avoidance is creating an illusion of equality). Choose the
                  path that leaves you more equanimous in the long term.
                </p>
                <p class="text-white font-weight-bold text-sm">
                  Michael -
                  <span class="text-xs font-weight-normal">Writter</span>
                </p>
                <hr class="vertical start-100 ms-n5 d-xl-block d-none" />
              </div>
              <div class="col-1"></div>
              <div class="col-xl-2 col-12 px-xl-0 px-5 my-xl-auto">
                <h3 class="text-white mt-xl-0 mt-5">1,679,700 +</h3>
                <p class="text-sm text-white opacity-8">
                  Developers and Companies around the world using our products.
                </p>
                <a href="javascript:;" class="text-white icon-move-right text-sm"
                  >See all products
                  <i class="fas fa-arrow-right text-xs ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
 
    <DetailedFooter v-bind="footerContent" />
  
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:500);
#head{
  background-image: url('../assets/own/bg.jpg');
}
#section3{
  /* background-image: url('../assets/own/bg5.png');  */
}
.read{
  color: #000;
}
#gallery1{
  padding: 40px;
  height: 350px;
}
:root {
	/* Base font size */
	font-size: 10px;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	min-height: 100vh;
	background-color: #fafafa;
}

.container1 {
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
}

.heading {
	font-family: "Montserrat", Arial, sans-serif;
	font-size: 4rem;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
	padding: 3.5rem 0;
	color: #1a1a1a;
}

.heading span {
	display: block;
}

.gallery {
	display: flex;
	flex-wrap: wrap;
	/* Compensate for excess margin on outer gallery flex items */
	margin: -1rem -1rem;
}

.gallery-item {
	/* Minimum width of 24rem and grow to fit available space */
	flex: 1 0 24rem;
	/* Margin value should be half of grid-gap value as margins on flex items don't collapse */
	margin: 1rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
}

.gallery-image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 400ms ease-out;
}

.gallery-image:hover {
	transform: scale(1.15);
}

/*

The following rule will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox styling. 

*/

@supports (display: grid) {
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
		grid-gap: 2rem;
	}

	.gallery,
	.gallery-item {
		margin: 0;
	}
}

</style>