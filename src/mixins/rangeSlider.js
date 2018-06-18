import vueSlider from 'vue-slider-component'

export const rangeSlider = {
  components: {
    vueSlider
  },
  data () {
    return {
      options: {
        width: '90%',
        dotSize: 20,
        min: 0,
        max: 1000,
        disabled: false,
        show: true,
        tooltip: 'always',
        tooltipDir: ['bottom', 'bottom'],
        piecewise: true,
        style: {
          'marginBottom': '30px',
          'marginLeft': 'auto',
          'marginRight': 'auto'
        },
        lazy: true,
        interval: 100
      }
    }
  }
}
