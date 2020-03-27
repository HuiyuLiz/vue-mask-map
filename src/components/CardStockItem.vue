<template>
  <div class="card-md p-3 rounded" style="position:relative" :class="status.bg">
    <div class="h6 pb-2 text-white font-weight-light">{{maskType}}口罩數量</div>
    <div class="h4 mb-0 font-weight-bold text-white">
      {{mask}}
      <span class="h7">片</span>
      <div class="icon-container">
        <img :src="this.publicPath+status.icon" alt style="width:48px;height:48px;display:block" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardStockItem",
  props: {
    mask: {
      type: Number,
      required: true
    },
    maskType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      stock_status: {
        full: {
          bg: "bg-success",
          icon: "icon/ic_stock_full@2x@2x.png"
        },
        few: {
          bg: "bg-warning",
          icon: "icon/ic_stock_few@2x@2x.png"
        },
        none: {
          bg: "bg-secondary",
          icon: "icon/ic_stock_none@2x@2x.png"
        }
      }
    };
  },
  computed: {
    status() {
      let status;
      if (this.mask === 0) {
        return this.stock_status.none;
      } else if (this.mask <= 20) {
        return this.stock_status.few;
      } else if (this.mask > 20) {
        return this.stock_status.full;
      }
      return status;
    },
    publicPath() {
      return process.env.BASE_URL;
    }
  }
};
</script>

<style>
</style>