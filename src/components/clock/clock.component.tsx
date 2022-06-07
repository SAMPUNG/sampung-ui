import { defineComponent, ref, type Ref } from 'vue'
import Namespace from '@/utils/namespace'
import type { Style } from '@/types/component'
import './clock.scss'
import { ClockHour, ClockHourExtra, ClockHourTick, ClockTick } from './clock.interface'

const clock = new Namespace('clock')

const CLOCK_HOUR_TICKS: ClockHourTick[] = []
const CLOCK_TICKS: ClockTick[] = [
  'Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ',
  'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ', 'Ⅺ', 'Ⅻ'
]
CLOCK_TICKS.forEach((tick: ClockTick, index: number) => {
  CLOCK_HOUR_TICKS.push({
    legend: tick,
    name: (index + 1) as ClockHour
  })
})

export default defineComponent({
  name: clock.name,
  setup() {
    const hour: Ref<ClockHour | ClockHourExtra> = ref(5)
    const minute: Ref<number> = ref(43)
    const second: Ref<number> = ref(21)

    const resolveAngle = (value: ClockHour | ClockHourExtra): Style => {
      // deg = (value % 12) / 12 * 360
      const deg: number = (value % 12) * 30
      return {
        transform: `rotate(${deg}deg)`
      }
    }

    return {
      hour,
      minute,
      resolveAngle,
      second
    }
  },
  render() {
    return (
      <div class={clock.bem()}>
        {
          CLOCK_HOUR_TICKS.map(({ legend, name }) => (
            <span class={clock.bem('tick')}>{ legend }</span>
          ))
        }
      </div>
    )
  }
})
