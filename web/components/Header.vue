<template>
  <header class="header--  shadow-sm_ position-fixed">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
        <b-navbar-brand href="/">GiiBee</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">首页</b-nav-item>
            <b-nav-item href="/products">产品展示</b-nav-item>
            <b-nav-item href="/about">关于我们</b-nav-item>
            <b-nav-item href="/contact">联系我们</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="md"
                v-model="keyword"
                placeholder="请输入关键字"
              ></b-form-input>
              <b-button size="md" type="submit" @click="onSearch"
                >搜索</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>
<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    onSearch(e) {
      e.preventDefault();
      this.$router.push({
        path: `/products/search/${this.keyword}`
      });
    }
  }
};
</script>
