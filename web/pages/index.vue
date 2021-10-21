<template>
  <div class="container">
    <main class="main--">
      <div class="home--banner">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide
            v-for="(item, index) in banner"
            :key="index"
            :caption="item.name"
            :text="item.intro"
            :img-src="staticHost + item.pic"
          ></b-carousel-slide>
        </b-carousel>
      </div>

      <div class="home--feature">
        <b-card v-for="(item, index) in feature" :key="index">
          <b-row no-gutters>
            <template v-if="index % 2 === 0">
              <b-col md="6">
                <div class="card-text">
                  <h4>{{ item.name }}</h4>
                  <p>
                    {{ item.intro }}
                  </p>
                </div>
              </b-col>
              <b-col md="6">
                <b-card-img
                  :src="staticHost + item.pic"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
            </template>

            <template v-else>
              <b-col md="6">
                <b-card-img
                  :src="staticHost + item.pic"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>

              <b-col md="6">
                <div class="card-text">
                  <h4>{{ item.name }}</h4>
                  <p>
                    {{ item.intro }}
                  </p>
                </div>
              </b-col>
            </template>
          </b-row>
        </b-card>
      </div>

      <b-card class="home--product">
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
                  params: { id: item.id }
                }"
                variant="primary"
                >查看详情</b-button
              >
            </b-card>
          </div>
        </div>
      </b-card>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    slide: 0,
    feature: [],
    banner: [],
    list: []
  }),
  async fetch() {
    const { data = [] } = await this.$http.$get(`api/home`);

    this.feature = data.map(v => {
      v.pic = v.pic ? v.pic.replace("public/", "") : "";
      return v;
    });

    const { data: bannerList = [] } = await this.$http.$get(`api/banner`);

    this.banner = bannerList.map(v => {
      v.pic = v.pic ? v.pic.replace("public/", "") : "";
      return v;
    });

    const { data: productData = [] } = await this.$http.$get(`api/products`, {
      searchParams: { limit: 4 }
    });

    this.list = productData.map(v => {
      const pic = v.pic;

      if (pic) {
        v.pic = pic.replace("public/", "/");
      }
      return v;
    });
  },
  computed: {
    staticHost() {
      return this.$store.state.staticHost;
    }
  }
};
</script>
