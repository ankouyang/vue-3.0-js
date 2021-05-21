<template>
    <teleport to="body">
        追加到body
    </teleport>
  <div class="home">
      <p>你好2</p>
      <p>你好3</p>
   <div v-for="(item,index) in state.list" :key="index">
         {{item.name}}
   </div>
   <div v-for="(item,index) in state.dataArr" :key="index">
         {{item}}
   </div>

     <p>这是父组件传递过来数据:{{value}}</p>
      <p>{{app}}</p>
      <p>这是computed属性   <span> {{twiceApp}}</span> </p>
    <button @click="add2($event),add($event)">切换</button>
  </div>
  <div>
    组件终于支持多个节点了
  </div>
</template>

<script>

/*这里说一下reactive和ref
reactive是什么？监听复杂类型变量
      是vue3.0提供得实现响应式数据得方法
      在vue2.0的时候是通过Obejct.definedProperty来实现
      在vue3.0的时候是通过ES6的Proxy来实现的
reactive注意点
      参数必须是对象(JSON/arr)
      默认情况下修改对象不会触发界面更新
      想更新就必须重新赋值

ref 监听简单类型
    ref和reactive一样都是实现响应式数据的方法
    reactive必须传一个对象，所以一个变量想实现响应式就比较麻烦，所以ref帮助我们实现变量的响应式
    ref本质还是一个reactive，系统会自动根据我们给ref传入的值将他转换
    ref(xx)=>reactive({value:xxx})
ref 注意点
    在vue模板中使用ref的值不需要value获取
    js中使用或者赋值必须使用ref.value
*/
import {
    reactive,
    ref,
    toRefs,
    watch,
    isRef,
    computed,
    inject,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue'
import {LIST} from "../../server";
export default {
  name: "Home",
  emits:['change'],
  props:{
      value:{
          type:String,
          default:''
      }
  },
  setup(props,context){
      const {value} = toRefs(props)
      const name = inject('name')
      console.log(name.value);
      const updateName = inject('updateName')
      console.log(isRef(value));
      console.log(value);
      const a = {
        a:1,
        list:[],
        dataArr:[2,3,4]
    }
    const  state = reactive(a)

    let app = ref(11)
    let  twiceApp = computed(()=>{
            return  app.value*2
    })
      watch(state.dataArr,()=>{
        console.log(state)
    })

    onMounted(async ()=>{
      await LIST().then(res=>{
          if(res.status === 200){
              state.list = res.data
          }else {
             alert('有错误')
          }

      })

    })
    onBeforeMount(()=>{
        console.log('onBeforeMount')
    })
    onBeforeUpdate(()=>{
        console.log('onBeforeUpdate')
    })
    onUpdated(()=>{
        console.log('onUpdated')
    })
    onBeforeUnmount(()=>{
        console.log('onBeforeUnmount')
      })
    onUnmounted(()=>{
         console.log('onUnmounted')
      })
    const add = ()=>{
      app.value =3
      a.a = 520
      state.dataArr[0] = 1
      state.dataArr[1] = 2
      state.dataArr[2] = 3
      context.emit('change','20')
        updateName('你大爷的')
    }
    const add2 =()=>{
          alert('add2')
    }
    return {
       state,
       app,
       twiceApp,
       add,
       add2
    }
  },

};
</script>
