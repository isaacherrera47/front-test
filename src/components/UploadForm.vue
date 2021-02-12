<template>
  <sui-form enctype="multipart/form-data" v-bind:loading="isLoading"
            v-on:submit="handleSubmit" v-bind:error="showError" v-bind:success="showSuccess">
    <sui-form-field>
      <label>Please, select the images you want to upload</label>
      <input required type="file" multiple accept="image/png" v-on:change="onChangeFiles"/>
    </sui-form-field>
    <sui-button type="submit" secondary>Post images</sui-button>
    <sui-message success>
      <sui-message-header>Images uploaded</sui-message-header>
      <p>
        Yay! Images were uploaded successfully.
      </p>
    </sui-message>
    <sui-message error>
      <sui-message-header>There was an error!</sui-message-header>
      <p>
        It seems one or more images aren't png or are too big.
      </p>
    </sui-message>
  </sui-form>
</template>

<script>
import axios from "axios";
import ImageStorage from "@/services/ImageStorage";

export default {
  name: "UploadForm",
  data: function () {
    return {
      filesUploaded: [],
      isLoading: false,
      showSuccess: false, //Added due nullish issue
      showError: false
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.showError = false;
      this.showSuccess = false;
      this.isLoading = true;
      console.log(this.filesUploaded);
      axios.post('https://yukarf10.api.stdlib.com/fronttest@dev/', {files: this.filesUploaded})
          .then(({data}) => {
            this.showSuccess = true;
            ImageStorage.storeData(data);
            this.$root.$emit('onUpdateImages', data);
          })
          .catch(() => this.showError = true)
          .finally(() => this.isLoading = false);
    },
    onChangeFiles({target}) {
      this.filesUploaded = [...target.files].map((v) => ({type: v.type, name: Date.now()}));
    }
  }
}
</script>

<style scoped>

</style>