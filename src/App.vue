<template>
  <div id="app">
    <sui-container>
      <sui-header dividing>Image uploader</sui-header>
      <UploadForm/>
      <sui-header dividing>Gallery (uploaded images)</sui-header>
      <Gallery/>
    </sui-container>
  </div>
</template>

<script>
import UploadForm from "./components/UploadForm";
import Gallery from "@/components/Gallery";

export default {
  name: 'App',
  components: {
    UploadForm,
    Gallery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
