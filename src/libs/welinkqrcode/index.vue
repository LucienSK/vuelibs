<template>
  <div class="welink-qrcode">
    <VueBarcode v-if="value !== '' && isbarcode" class="welink-barcode" :value='value'></VueBarcode>
    <img src="" class="welink-qrcode" id="welinkQrcode">
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueBarcode from 'vue-barcode'
  import QRCode from 'qrcode'
  Vue.component('VueBarcode', VueBarcode)
  export default {
    name: 'welinqrcode',
    data () {
      return {
        options: {
          errorCorrectionLevel: 'Q',
          type: 'image/' + this.type,
          rendererOpts: {
            quality: 0.8
          },
          color: {
            dark: this.colordark,
            light: this.colorlight
          },
          margin: 2,
          scale: this.scale
        }
      }
    },
    mounted () {
      this.initQRCode()
    },
    methods: {
      initQRCode () {
        if (this.isqrcode && this.value !== '') {
          this.qrcode = QRCode.toDataURL(this.value, this.options, function (error, url) {
            if (error) console.error(error)
            document.getElementById('welinkQrcode').src = url
          })
        }
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'jpeg'
      },
      scale: {
        type: Number,
        default: 6
      },
      colordark: {
        type: String,
        default: '#000000'
      },
      colorlight: {
        type: String,
        default: '#ffffff'
      },
      isqrcode: {
        type: Boolean,
        default: true
      },
      isbarcode: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      value (val) {
        this.value = val
        this.initQRCode()
      },
      type (val) {
        this.options.type = val
        this.initQRCode()
      },
      scale (val) {
        this.options.scale = val
        this.initQRCode()
      },
      colordark (val) {
        this.options.colordark = val
        this.initQRCode()
      },
      colorlight (val) {
        this.options.colorlight = val
        this.initQRCode()
      },
      isqrcode (val) {
        this.isqrcode = val
        this.initQRCode()
      },
      isbarcode (val) {
        this.isbarcode = val
        this.initQRCode()
      }
    }
  }
</script>
<style>
.welink-qrcode{
  text-align: center;
}
</style>
