<!-- Please remove this file from your project -->
<template>
  <b-card header="产品分类">
    <b-list-group>
      <b-list-group-item
        v-for="(item, index) in list"
        :key="index"
        :to="{
          name: 'products-categories-category',
          params: { category: item.route || item.id }
        }"
        :active="
          categoryId && (item.route === categoryId || item.id === categoryId)
        "
        >{{ item.name }}</b-list-group-item
      >
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  data: () => ({
    list: [],
    categoryId: ""
  }),
  async fetch() {
    const { category = "" } = this.$route.params;
    this.categoryId = category;
    const { data = [] } = await this.$http.$get("api/product-categories");
    this.list = data;
  }
};
</script>
