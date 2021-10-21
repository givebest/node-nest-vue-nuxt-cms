<template>
  <div class="container">
    <main class="main--">
      <!-- 面包屑 -->
      <div class="main--breadcrumb">
        <nav aria-label="breadcrumb">
          <b-breadcrumb :items="items"></b-breadcrumb>
        </nav>
      </div>

      <b-card class="main--rich__text">
        <h1>{{ detail.name }}</h1>
        <p class="detail--pic">
          <img
            class="rich--img__wide"
            :src="staticHost + detail.pic"
            :alt="detail.name"
          />
        </p>
        <b-card-text v-html="detail.content"></b-card-text>
      </b-card>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    detail: {},
    items: [
      {
        text: "首页",
        href: "/"
      },
      {
        text: "产品展示",
        active: true
      }
    ]
  }),
  async fetch() {
    const { id = "" } = this.$route.params;
    const detail = await this.$http.$get(`api/products/${id}`);
    const { name, pic } = detail;
    detail.pic = pic.replace("public/", "");
    this.items.push({
      text: name,
      active: true
    });
    this.detail = detail;
  },
  head() {
    return {
      title: this.detail.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.detail.info
        }
      ]
    };
  },
  computed: {
    staticHost() {
      return this.$store.state.staticHost;
    }
  }
};
</script>
