<template>
  <div id="welinkqr">
    <WelinkQrcode :value="tel"></WelinkQrcode>
  </div>
</template>
<script>
  import WelinkQrcode from '@/libs/welinkqrcode/'
  export default {
    name: 'welinkqr',
    components: {
      WelinkQrcode
    },
    data () {
      return {
        tel: '13854865485'
      }
    }
  }
</script>
