<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <button v-on:click="showcontents">show abc</button>
    <button v-on:click="showcontents2">show 123</button>
    <h2 v-if="showmsg" transition="expand">{{ msg2 }}</h2>
    <h2 v-show="showmsg1" transition="bounce">{{ msg3 }}</h2>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'about page!',
      msg2: 'ABC....ABC',
      msg3: '123...123',
      showmsg: false,
      showmsg1: false
    }
  },
  methods: {
    showcontents(event){
      this.showmsg = this.showmsg ? false : true 
      console.log(this.msg)
    },
    showcontents2(event){
      this.showmsg1 = this.showmsg1 ? false : true 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.about{
  h1 {
    color: #42b983;
  }
  h2{
    color: #cc00cc;
  }
}
.expand-transition{
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background: #eee;
  overflow: hidden;
}

.expand-enter,.expand-leave{
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

.bounce-transition {
  display: block; /* 否则 scale 动画不起作用 */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>