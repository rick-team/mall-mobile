<template>
  <div id="app" class="page">
    <router-view/>
  </div>
</template>

<script>
function getRequest(url) {
  const requestData = {};
  if (url.indexOf("?") != -1) {
    let str = url.substr(1);
    let strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      requestData[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return requestData;
}

export default {
  name: "App",
  created() {
    const locationBar = getRequest(location.search)
    locationBar.token && this.$store.commit('saveToken', locationBar.token)
    const CHINA = '3'
    const lang = parseInt(locationBar.lang || CHINA)
    this.$store.commit('saveLang', lang)
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
