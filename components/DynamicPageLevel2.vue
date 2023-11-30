<!-- Please remove this file from your project -->
<template>
  <div>
    <h1>
      Dynamic Page With slug1 - {{ this.slug1 }} <br/>
      Dynamic Page With slug2 - {{ this.slug2 }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Dynmaic2',
  data(){
    return {
      slug1: '',
      slug2: ''
    }
  },
  mounted () {
    this.slug1 = this.$route.path.split('/')[1];
    this.slug2 = this.$route.path.split('/')[2];
  }
}
</script>
