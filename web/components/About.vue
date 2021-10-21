<!-- Please remove this file from your project -->
<template>
  <main class="main--">
    <div class="main--banner">
      <!-- banner -->
      <b-card
        overlay
        :img-src="staticHost + detail.banner.replace('public/', '')"
        :img-alt="detail.name"
        text-variant="white"
        :title="detail.name"
      >
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
        <b-list-group>
          <b-list-group-item href="/about" :active="category === 'about'"
            >关于我们</b-list-group-item
          >
          <b-list-group-item href="/contact" :active="category === 'contact'"
            >联系我们</b-list-group-item
          >
        </b-list-group>
      </div>
      <div class="col">
        <b-card :title="detail.name" class="main--rich__text">
          <b-card-text v-html="detail.content"></b-card-text>
        </b-card>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: function() {
        return "about";
      }
    }
  },
  data: () => ({
    detail: {},
    items: [
      {
        text: "首页",
        href: "/"
      },
      {
        text: "关于我们",
        active: true
      }
    ]
  }),
  head() {
    return {
      title: this.detail.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.detail.description
        }
      ]
    };
  },
  async fetch() {
    const detail = await this.$http.$get(`api/about/${this.category}`);
    const { name } = detail;
    this.items[1].text = name;
    this.detail = detail;
  },
  computed: {
    staticHost() {
      return this.$store.state.staticHost;
    }
  },
  created() {}
};
</script>
