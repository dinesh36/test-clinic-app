<!-- Please remove this file from your project -->
<template>
  <h1>
    Dynamic Page With slug - {{ this.slug }}
  </h1>
</template>

<script>
export default {
  name: 'Dynmaic1',
  data(){
    return {
      slug: ''
    }
  },
  mounted () {
    this.slug = this.$route.params.slug;
  }
}
</script>
