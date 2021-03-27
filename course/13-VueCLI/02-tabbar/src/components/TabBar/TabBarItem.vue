<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>

    <!-- <div :style="activeStyle" class="itemTextDef" :class="{textActive: isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
        required: true,
      },
      activeColor: {
        type: String,
        // default: 'red'
      },
      activeFontWeit: {
        type: String,
        // default: '600'
      }
    },
    data() {
      return {
        // isActive: false,
      }
    },
    computed: {
      isActive() {
        // console.log(this.$route.path == this.$router.path);
        // console.log(this.$router.path);
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? { color: this.activeColor, fontWeight: this.activeFontWeit } : {}
      }
    },
    methods: {
      itemClick() {
        // this.isActive = !this.isActive
        this.$router.replace(this.path)
      }
    },
  }
</script>
<style scope>
  @import url(../../assets/css/base.css);

  .tab-bar-item {
    font-size: var(--fontSize);
    line-height: var(--fontSize);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
  }

  .textActive {
    font-weight: 600;
    color: black !important;
  }

  .itemTextDef {
    color: #666;
  }
</style>