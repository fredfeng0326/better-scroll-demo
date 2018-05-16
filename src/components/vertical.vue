<template>
  <div class="vertical" ref="scroll_item">
      <div>
        <ul>
          <li v-for='(item, index) in list' :key='index' >
            <div class="icon">
              <img width="60" height="60" :src="item.img">
            </div>
            <div class="text">
              <span>{{item.name}}</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'horizontal',
  data () {
    return {
      list: [
        {
          'img': '../static/list/1.jpg',
          'name': '联想(Lenovo)拯救者R720'
        },
        {
          'img': '../static/list/2.jpg',
          'name': '小米(MI)Pro 15.6英寸'
        },
        {
          'img': '../static/list/3.jpg',
          'name': '联想(Lenovo)小新潮7000 13.3英寸'
        },
        {
          'img': '../static/list/4.jpg',
          'name': '戴尔DELL灵越游匣GTX1050 15.6英寸'
        },
        {
          'img': '../static/list/5.jpg',
          'name': '华硕(ASUS) 飞行堡垒四代FX63VD 15.6英寸'
        },
        {
          'img': '../static/list/6.jpg',
          'name': '联想(Lenovo)拯救者R720 15.6英寸'
        },
        {
          'img': '../static/list/7.jpg',
          'name': '戴尔DELL成就5000不凡银13.3英寸'
        },
        {
          'img': '../static/list/8.jpg',
          'name': '小米(MI)Air 13.3英寸金属'
        },
        {
          'img': '../static/list/9.jpg',
          'name': '联想ThinkPad 翼480（0VCD）14英寸'
        },
        {
          'img': '../static/list/10.jpg',
          'name': '联想(Lenovo)拯救者R720 15.6英寸'
        }
      ]
    }
  },
  methods: {
    _initS () {
      console.log('start')
      let scroll = new BScroll(this.$refs.scroll_item, {
        scrollY: true,
        click: false,
        probeType: 3,
        stopPropagation: true
      })
      scroll.on('scroll', (pos) => {
        console.log(`Now position is x: ${pos.x}, y: ${pos.y}`)
      })
    }
  },
  created () {
    this.$nextTick(() => {
      setTimeout(() => {
        this._initS()
      }, 20)
    })
  }
}
</script>

<style scoped>

</style>
