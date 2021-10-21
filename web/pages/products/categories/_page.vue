<template>
  <div class="container">
    <product-category />

    <ProductList />
  </div>
</template>

<script>
import ProductCategory from "../../../components/ProductCategory.vue";
export default {
  components: { ProductCategory },
  head: {
    title: "产品展示",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "相比其他浏览器，我们简化了浏览处理功能，搭配内置广告拦截功能，实现更快速的网页加载体验。"
      }
    ]
  }
};
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41b883;
}
</style>
