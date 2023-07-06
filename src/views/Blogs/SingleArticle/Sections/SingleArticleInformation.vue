<script setup></script>
<template>
  <div class="container">
    <div class="row">
      <!-- <div class="col-lg-8 ms-auto me-auto">
        <h6 class="opacity-7 text-uppercase font-weight-bolder text-sm">
          The Idea
        </h6>
        <h3 class="title mb-4">
          Create a design system that can be used in any product available
        </h3>
        <p class="text-dark">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
          Remember that by this time, the user is curious, otherwise he wouldn't
          scroll to get here. Add a button if you want the user to see more. We
          are here to make life better.
          <br />
          <br />
          And now I look and look around and there’s so many Kanyes I've been
          trying to figure out the bed design for the master bedroom at our
          Hidden Hills compound... and thank you for turning my personal jean
          jacket into a couture piece.
          <br />
          <br />
          The way to survive in modern society is to be an ascetic. It is to
          retreat from society. There’s too much society everywhere you go…The
          only solution is turn it off.
        </p>
      </div> -->
    </div>
    <section class="py-7 position-relative">
      <div id="carousel-testimonials" class="carousel slide carousel-team">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-5 ms-lg-auto">
                  <div class="p-3">
                    <img
                      class="w-100 border-radius-xl max-height-600 fadeIn2 fadeInBottom"
                      src="https://images.unsplash.com/photo-1609365635346-524d0024684f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                      alt="First slide"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="col-md-5 me-lg-auto position-relative">
                  <h6
                    class="opacity-7 text-uppercase font-weight-bolder text-sm fadeIn4 fadeInBottom"
                  >
                    First
                  </h6>
                  <h1
                    class="text-dark display-3 font-weight-bolder fadeIn2 fadeInBottom"
                  >
                    数据读取与推理
                  </h1>
                  <p class="my-4 lead text-dark fadeIn2 fadeInBottom">
                    基于现有模型分析输入图片，作出预测并且输出图片的标签
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-5 ms-lg-auto">
                  <div class="p-3">
                    <img
                      class="w-100 border-radius-xl max-height-600 fadeIn2 fadeInBottom"
                      src="https://images.unsplash.com/photo-1602781975725-cab34bd38d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                      alt="Second slide"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="col-md-5 me-lg-auto position-relative">
                  <h6
                    class="opacity-7 text-uppercase font-weight-bolder text-sm fadeIn4 fadeInBottom"
                  >
                    Second
                  </h6>
                  <h1
                    class="text-dark display-3 font-weight-bolder fadeIn2 fadeInBottom"
                  >
                    预测展示
                  </h1>
                  <p class="my-4 lead text-dark fadeIn2 fadeInBottom">
                    三视图展示原图和标签显示，每个视图支持鼠标拖动进行切片切换、鼠标拖动带动3D原点的变化，视图支持缩放和窗宽窗位调整。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-5 ms-lg-auto">
                  <div class="p-3">
                    <img
                      class="w-100 border-radius-xl max-height-600 fadeIn2 fadeInBottom"
                      src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=974&q=80"
                      alt="Third slide"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="col-md-5 me-lg-auto position-relative">
                  <h6
                    class="opacity-7 text-uppercase font-weight-bolder text-sm fadeIn4 fadeInBottom"
                  >
                    Third 
                  </h6>
                  <h1
                    class="text-dark display-3 font-weight-bolder fadeIn2 fadeInBottom"
                  >
                   数据分析
                  </h1>
                  <p class="my-4 lead text-dark fadeIn2 fadeInBottom">
                    ① 测量：基于spacing等参数，获取测量分割目标在x, y, z切面上的直径、面积和目标体积等结果；
                    <br>
                    ② 计数：基于现有分割结果，统计不同类别数据的个数，例如某类病灶的计数；
                    <br>
                    ③ 自定义数据分析：基于用户上传的后处理脚本返回结果进行合理的展示和分析（可以规定后处理的返回内容和方式）；
                    <br>
                    ④ 统计结果展示：针对用户上传的所有医疗数据进行上述分析，并对分析结果进行图标展示；并支持显示所有符合筛选要求的数据索引；
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-5 ms-lg-auto">
                  <div class="p-3">
                    <img
                      class="w-100 border-radius-xl max-height-600 fadeIn2 fadeInBottom"
                      src="https://images.unsplash.com/photo-1579523616974-c2b09289c27e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
                      alt="Fourth slide"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="col-md-5 me-lg-auto position-relative">
                  <h6
                    class="opacity-7 text-uppercase font-weight-bolder text-sm fadeIn4 fadeInBottom"
                  >
                    Fourth
                  </h6>
                  <h1
                    class="text-dark display-3 font-weight-bolder fadeIn2 fadeInBottom"
                  >
                    生成报告
                  </h1>
                  <p class="my-4 lead text-dark fadeIn2 fadeInBottom">
                    如根据各类分割及分析结果，自动生成高质量病例报告。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="position-relative mt-n6">
          <a
            class="carousel-control-prev text-dark position-absolute bottom-0 end-0 ms-auto"
            href="#carousel-testimonials"
            role="button"
            data-bs-slide="prev"
          >
            <i
              class="fas fa-2x fa-chevron-left position-absolute start-0 ms-3 mt-7 mt-md-0 ms-n5 ms-md-0"
            ></i>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next text-dark position-absolute bottom-0 end-0 ms-auto ms-4"
            href="#carousel-testimonials"
            role="button"
            data-bs-slide="next"
          >
            <i class="fas fa-2x fa-chevron-right mt-7 mt-md-0"></i>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="row mt-10">
        <div class="col-lg-3 col-6 mb-lg-0 mb-4 text-center">
          <a
            href="javascript:;"
            class="text-lg text-gradient text-success h3 ps-3 active"
            data-bs-target="#carousel-testimonials"
            data-bs-slide-to="0"
          >
            <span>01</span>
            <span class="ms-2">数据读取与推理</span>
          </a>
        </div>
        <div class="col-lg-3 col-6 mb-lg-0 mb-4 text-center">
          <a
            href="javascript:;"
            class="text-lg text-gradient text-success h3"
            data-bs-target="#carousel-testimonials"
            data-bs-slide-to="1"
          >
            <span>02</span>
            <span class="ms-2">预测展示</span>
          </a>
        </div>
        <div class="col-lg-3 col-6 mb-lg-0 mb-4 text-center">
          <a
            href="javascript:;"
            class="text-lg text-gradient text-success h3"
            data-bs-target="#carousel-testimonials"
            data-bs-slide-to="2"
          >
            <span>03</span>
            <span class="ms-2"> 数据分析</span>
          </a>
        </div>
        <div class="col-lg-3 col-6 mb-lg-0 mb-4 text-center">
          <a
            href="javascript:;"
            class="text-lg text-gradient text-success h3"
            data-bs-target="#carousel-testimonials"
            data-bs-slide-to="3"
          >
            <span>04</span>
            <span class="ms-2"> 生成报告</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
