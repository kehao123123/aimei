<template>
  <div class="container">
    <!-- <div class="box">
      <header class="header">header</header>
      <div class="content">content</div>
    </div> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
* { padding: 0; margin: 0; list-style: none; text-decoration: none;}
html, body, .container { width: 100%;height: 100%;}

html {
  font-size: 26.67vw;
}
@media screen and (min-width: 639px) {
  html {
    font-size: 100px;
  }
}
.container {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .box {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .header {
      height: 0.44rem;
      background-color: #f66;
    }
    .content {
      flex: 1;
      overflow: auto;
    }
  }
  .footer {
    height: 0.5rem;
    background-color: #efefef;
  }
}
</style>
