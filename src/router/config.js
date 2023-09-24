
import Aaa from '../views/Aaa.vue'
import Bbb from '../views/Bbb.vue'
const obj = [{
    path: "/aaa",
        name: "aaa",
        component: Aaa,
        meta: {
          title: "aaa",
        },
  },{
    path: "/bbb",
        name: "bbb",
        component: Bbb,
        meta: {
          title: "bbb",
        },
  }]
export const getObj = async ()=>{
    const obj2 = await obj
    return obj2
}