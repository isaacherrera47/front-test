<template>
  <div>
    <h2 is="sui-header" disabled v-if="images.length === 0">
      Upload an image to show it here
    </h2>
    <sui-grid :columns="3">
      <sui-grid-column :key="index" v-for="(image, index) in images">
        <sui-card class="fluid">
          <sui-image :src="image" />
          <sui-card-content>
            <sui-card-header>{{ image }}</sui-card-header>
          </sui-card-content>
        </sui-card>
      </sui-grid-column>
    </sui-grid>
  </div>
</template>

<script>
import ImageStorage from "@/services/ImageStorage";

export default {
  name: "Gallery",
  data: function () {
    return {
      loading: false,
      images: []
    }
  },
  mounted() {
    this.loading = false;
    this.images = ImageStorage.getData();
    this.$root.$on('onUpdateImages', () => {
      this.images = ImageStorage.getData();
    });
  }
}
</script>

<style scoped>

</style>