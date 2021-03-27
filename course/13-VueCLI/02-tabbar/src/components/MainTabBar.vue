<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="home" activeFontWeit="600" activeColor="black">
        <template #item-icon>
          <svg-icon icon-class="Main" class-name="black-icon" />
        </template>
        <template #item-icon-active>
          <svg-icon icon-class="MainActive" class-name="black-icon" />
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="category" activeFontWeit="600" activeColor="black">
        <template #item-icon>
          <svg-icon icon-class="Classify" class-name="black-icon" />
        </template>
        <template #item-icon-active>
          <svg-icon icon-class="ClassifyActive" class-name="black-icon" />
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="cart" activeFontWeit="600" activeColor="black">
        <template #item-icon>
          <svg-icon icon-class="CartEmpty" class-name="black-icon" />
        </template>
        <template #item-icon-active>
          <svg-icon icon-class="CartFull" class-name="black-icon" />
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="profile" activeFontWeit="600" activeColor="black">
        <template #item-icon>
          <svg-icon icon-class="Profile" class-name="black-icon" />
        </template>
        <template #item-icon-active>
          <svg-icon icon-class="ProfileActive" class-name="black-icon" />
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBarItem from "./TabBar/TabBarItem.vue"
import TabBar from "./TabBar/TabBar.vue"
export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar,
  },
}
</script>
<style></style>
