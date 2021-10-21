<!-- Please remove this file from your project -->
<template>
  <main class="main--">
    <div class="main--banner">
      <!-- banner -->
      <b-card
        overlay
        img-src="~/static/img/banner2.jpg"
        img-alt="产品介绍"
        text-variant="white"
        :title="categoryDetail.name || '产品介绍'"
      >
        <b-card-text>
          {{
            categoryDetail.description ||
              "相比其他浏览器，我们简化了浏览处理功能，搭配内置广告拦截功能，实现更快速的网页加载体验。"
          }}
        </b-card-text>
      </b-card>
    </div>

    <!-- 面包屑 -->
    <div class="main--breadcrumb">
      <nav aria-label="breadcrumb">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </nav>
    </div>

    <div class="row">
      <div class="col-12 col-md-3">
        <product-category />
      </div>
      <div class="col">
        <b-card :title="listTitle">
          <div class="row product--list">
            <div class="col-md-6" v-for="(item, index) in list" :key="index">
              <b-card
                :title="item.name"
                :img-src="staticHost + item.pic"
                :img-alt="item.name"
                img-top
                tag="article"
              >
                <b-button
                  :to="{
                    name: 'products-detail-id',
                    params: { id: item.route || item.id }
                  }"
                  variant="primary"
                  >查看详情</b-button
                >
              </b-card>
            </div>
          </div>

          <b-pagination-nav
            v-if="list.length > 0"
            v-model="currentPage"
            :link-gen="linkGen"
            :number-of-pages="pages"
            use-router
          ></b-pagination-nav>

          <b-jumbotron
            v-if="list.length <= 0"
            header="抱歉"
            lead="暂没有，您可以"
          >
            <b-button
              variant="primary"
              :to="{
                path: '/products'
              }"
              >查看全部</b-button
            >
          </b-jumbotron>
        </b-card>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCategory from "./ProductCategory.vue";
export default {
  components: { ProductCategory },
  data: () => ({
    list: [],
    pages: 1,
    currentPage: 1,
    perPage: 3,
    category: "",
    items: [
      {
        text: "首页",
        href: "/"
      },
      {
        text: "产品展示",
        active: true
      }
    ],
    listTitle: "产品列表",
    categoryDetail: {}
  }),
  head() {
    return {
      title: this.categoryDetail.name || this.listTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.categoryDetail.description || "默认产品描述"
        }
      ]
    };
  },
  async fetch() {
    const { category = "", page = 1, keyword = "" } = this.$route.params;
    this.currentPage = page;
    this.category = category;
    let limit = 6;

    let categoryId = category;
    if (category) {
      const categoryDetail = await this.$http.$get(
        `api/product-categories/${category}`
      );

      const { id, name: categoryName } = categoryDetail;
      this.categoryDetail = categoryDetail;
      categoryId = id || "";
      this.items.push({
        text: categoryName,
        active: true
      });
      this.listTitle = categoryName;
    }

    if (keyword) {
      this.listTitle = `搜索：${keyword}`;
      limit = 1000;
    }

    const { total = 0, data = [] } = await this.$http.$get(`api/products`, {
      searchParams: { category: categoryId, limit, page, keyword }
    });

    this.list = data.map(v => {
      const pic = v.pic;

      if (pic) {
        v.pic = pic.replace("public/", "/");
      }
      return v;
    });
    const pages = Math.ceil(total / limit);
    this.pages = pages >= 1 ? pages : 1;
  },
  computed: {
    staticHost() {
      return this.$store.state.staticHost;
    }
  },
  created() {},
  methods: {
    linkGen(pageNum) {
      const path = this.category
        ? pageNum === 1
          ? `/products/categories/${this.category}`
          : `/products/categories/${this.category}/page/${pageNum}`
        : pageNum === 1
        ? `/products`
        : `/products/page/${pageNum}`;

      return { path };
    }
  }
};
</script>
