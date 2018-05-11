<template>
　　<div>
　　　　 <AcceptAndRefuse @showCityName="updateCity" message="hello!"></AcceptAndRefuse>
        {{toCity}}
　　</div>

</template>

<script>
import AcceptAndRefuse from "@/components/study/AcceptAndRefuse";

export default {
  name: "index",
  data() {
    return {
      toCity: "北京"
    };
  },
  components: {
    AcceptAndRefuse
  },
  methods: {
    updateCity(inputValue) {
      //触发子组件的事件
      this.toCity = inputValue; //改变了父组件的值
      console.log("toCity:" + this.toCity);
    }
  }
};
</script>

<style>

</style>