<template>
  <div>
    <nav class="navbar navbar-expand-lg" :class="{'active':isToggle}">
      <div class="container py-2">
        <a class="navbar-brand text-primary d-flex align-items-center" href="javascript:;">
          <div class="brand-logo"></div>
          <h1 class="h5 ml-4 m-0">口罩即時查</h1>
        </a>
        <button class="navbar-toggler" type="button" @click="isToggle=!isToggle">
          <!-- <span class="navbar-toggler-icon"></span> -->
          <div class="header__menu" :class="{'hamburger--open':isToggle}">
            <a id="header__button" class="hamburger" href="javascript:;">
              <div class="hamburger__inner"></div>
            </a>
          </div>
        </button>
        <div class="navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li
              class="nav-item mr-3 d-none d-lg-flex"
              :class="{'border-bottom-primary':currentRouter==='口罩供給現況'}"
              @click="changeRouter('口罩供給現況')"
            >
              <a class="nav-link text-primary" href="javascript:;">
                口罩供給現況
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li
              class="nav-item d-none d-lg-flex"
              :class="{'border-bottom-primary':currentRouter==='口罩怎麼買'}"
              @click="changeRouter('口罩怎麼買')"
            >
              <a class="nav-link text-primary" href="javascript:;">
                口罩怎麼買
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar-dropdown-links" :class="{'active':isToggle}">
      <ul class>
        <li
          class="nav-item d-flex d-lg-none text-center justify-content-center"
          @click="checkToggle('口罩供給現況',false)"
        >
          <a class="nav-link text-white" href="javascript:;">
            口罩供給現況
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li
          class="nav-item d-flex d-lg-none text-center justify-content-center"
          @click="checkToggle('口罩怎麼買',false)"
        >
          <a class="nav-link text-white" href="javascript:;">
            口罩怎麼買
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    currentRouter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isToggle: false
    };
  },
  methods: {
    checkToggle(router, isFocus) {
      let vm = this;
      vm.isToggle = !vm.isToggle;
      this.$emit("checkToggle", { router, isFocus });
    },
    changeRouter(router) {
      this.$emit("changeRouter", router);
    }
  }
};
</script>

<style>
</style>