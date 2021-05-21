<template>
  <div id="nav" ref="root">
      <p> {{`这是传递给子组件中的数据:${name}`}}</p>
      <router-view :value ='name' @change="updateData"/>

  </div>
</template>
<script>
    import {ref,provide,readonly,onMounted} from 'vue'
    export default {
        name:'app',
        setup(){
            const  root = ref(null)
            const  name = ref('你好')
            const  updateData =(e)=>{
                   name.value = e
            }
            const  updateName =(newValue)=>{
                   name.value = newValue
            }
            provide('name',readonly(name))
            provide('updateName',updateName)
            onMounted(()=>{
                console.log(root.value);
            })
            return {
                name,
                root,
                updateData
            }
        }
    }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
