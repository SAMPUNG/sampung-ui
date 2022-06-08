import { defineComponent, ref, type Ref } from 'vue'
import Namespace from '@/utils/namespace'
import type { Style } from '@/types/component'
import './clock.scss'
import { ClockHour, ClockHourExtra, ClockHourTick, ClockTick } from './clock.interface'

const clock = new Namespace('clock')

const CLOCK_HOUR_TICKS: ClockHourTick[] = []
// const CLOCK_TICKS: ClockTick[] = [
//   'Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ',
//   'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ', 'Ⅺ', 'Ⅻ'
// ]
// CLOCK_TICKS.forEach((tick: ClockTick, index: number) => {
//   CLOCK_HOUR_TICKS.push({
//     legend: tick,
//     name: (index + 1) as ClockHour
//   })
// })
for (let i = 1; i < 13; i++) {
  CLOCK_HOUR_TICKS.push({
    legend: i % 3 === 0 ? '‖' : '|',
    name: i as ClockHour
  })
}

const clockProps = {
  modelValue: {
    default: () => new Date(),
    required: false,
    type: [Date, Number, String]
  }
}

export default defineComponent({
  name: clock.name,
  props: clockProps,
  setup(props) {
    const moment: Date = new Date(props.modelValue)
    const hour: Ref<number> = ref(moment.getHours())
    const minute: Ref<number> = ref(moment.getMinutes())
    const second: Ref<number> = ref(moment.getSeconds())
    let timer: NodeJS.Timer | null = null

    const dispose = (): void => {
      timer && clearTimeout(timer)
    }

    const resolveAngle = (value: number, base: 12 | 60): Style => {
      // deg = value / base * 360
      const deg: number = value / base * 360
      return {
        transform: `rotate(${deg}deg)`
      }
    }

    const resolveLabel = (value: number): string => {
      return value < 10 ? `0${value}` : `${value}`
    }

    const resolveClock = (): void => {
      timer = setInterval(() => {
        moment.setSeconds(moment.getSeconds() + 1)
        updateClock()
      }, 1000)
    }

    const updateClock = (): void => {
      hour.value = moment.getHours()
      minute.value = moment.getMinutes()
      second.value = moment.getSeconds()
    }

    return {
      dispose,
      hour,
      minute,
      resolveAngle,
      resolveLabel,
      resolveClock,
      second
    }
  },
  render() {
    return (
      <div class={clock.bem()}>
        <div class={clock.bem('field')}>
          <span>{this.resolveLabel(this.hour)}</span>
          <span>:</span>
          <span>{this.resolveLabel(this.minute)}</span>
          <span>:</span>
          <span>{this.resolveLabel(this.second)}</span>
        </div>
        <ul class={clock.bem('dial')}>
          {
            CLOCK_HOUR_TICKS.map(({ legend, name }) => (
              <li class={clock.bem('tick')}>{ legend }</li>
            ))
          }
        </ul>
        <ul class={clock.bem('hands')}>
          <li class={clock.bem('hour-hand')} style={this.resolveAngle(this.hour, 12)} />
          <li class={clock.bem('minute-hand')} style={this.resolveAngle(this.minute, 60)} />
          <li class={clock.bem('second-hand')} style={this.resolveAngle(this.second, 60)} />
        </ul>
      </div>
    )
  },
  mounted() {
    this.resolveClock()
  },
  destroyed() {
    this.dispose()
  }
})
