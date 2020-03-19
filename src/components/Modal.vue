<template>
  <div class="modal" style="background-color: rgba(52, 73, 94, 0.9)" ref="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content rounded-0">
        <button
          type="button"
          class="close text-right text-white px-3"
          @click="changeRouter('口罩供給現況')"
        >
          <span class="text-white">×</span>
        </button>
        <div class="modal-body p-0">
          <div class="d-flex justify-content-center px-3">
            <img
              :src="this.publicPath +'jpg/policy.png'"
              class="img-fluid"
              style="height:80vh;object-fit:contain;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    currentRouter: {
      type: String,
      required: true
    }
  },

  data() {
    return {};
  },
  watch: {
    currentRouter(val) {
      let vm = this;
      if (val === "口罩供給現況") {
        setTimeout(() => {
          vm.$refs.modal.className = "modal fade d-flex";
        }, 300);
        setTimeout(() => {
          vm.$refs.modal.className = "modal ";
        }, 800);
      } else {
        vm.$refs.modal.className = "modal fade show d-flex";
      }
    }
  },
  computed: {
    publicPath() {
      return process.env.BASE_URL;
    }
  },
  methods: {
    changeRouter(router) {
      this.$emit("changeRouter", router);
    }
  }
};
</script>

