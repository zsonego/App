<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        created(){
            this.getLunbotu();
            console.log('ok')
        },
        methods: {
            getLunbotu(){
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                    console.log(result.body);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: skyblue;
            }
            &:nth-child(2) {
                background-color: goldenrod;
            }
            &:nth-child(3) {
                background-color: salmon;
            }
        }
    }
</style>