<template>
  <footer class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <span></span>
        <p>主页</p>
      </router-link>
      <router-link to="/live" tag="li">
        <span></span>
        <p>直播</p>
      </router-link>
      <router-link to="/service" tag="li">
        <span></span>
        <p>客服</p>
      </router-link>
      <router-link to="/notice" tag="li">
        <span></span>
        <p>通知</p>
      </router-link>
      <router-link to="/user" tag="li">
        <span></span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<style lang="scss">
  .footer {
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.router-link-active {
          color: #f66;
        }
        span {
          font-size: 0.28rem;
        }
        p {
          font-size: 0.12rem;
        }
      }
    }
  }
</style>
