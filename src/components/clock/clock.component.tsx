import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

import { createNamespace } from '@/utils'

import { ClockHour, ClockHourTick } from './clock.interface'
import './clock.scss'

const bem = createNamespace('clock')

const CLOCK_HOUR_TICKS: ClockHourTick[] = []

for (let i = 1; i < 13; i++) {
  CLOCK_HOUR_TICKS.push({
    legend: i % 3 === 0 ? '‖' : '|',
    name: i as ClockHour,
  })
}

const clockProps = {
  modelValue: {
    default: () => new Date(),
    required: false,
    type: [Date, Number, String],
  },
}

export default defineComponent({
  name: bem(),
  props: clockProps,
  setup(props) {
    const moment: Date = new Date(props.modelValue)
    const hour = ref<number>(moment.getHours())
    const minute = ref<number>(moment.getMinutes())
    const second = ref<number>(moment.getSeconds())
    let timer: NodeJS.Timer | null = null

    const dispose = (): void => {
      timer && clearTimeout(timer)
    }

    const onHover = (event: MouseEvent): void => {
      console.warn(event)
    }

    const resolveAngle = (value: number, base: 12 | 60) => {
      // deg = value / base * 360
      const deg: number = (value / base) * 360
      return {
        transform: `rotate(${deg}deg)`,
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

    onMounted(resolveClock)
    onUnmounted(dispose)

    return () => (
      <div class={bem()}>
        <div class={bem('field')}>
          <span>{resolveLabel(hour.value)}</span>
          <span>:</span>
          <span>{resolveLabel(minute.value)}</span>
          <span>:</span>
          <span>{resolveLabel(second.value)}</span>
        </div>
        <ul
          class={bem('dial')}
          onMouseenter={onHover}
        >
          {CLOCK_HOUR_TICKS.map(({ legend }) => (
            <li class={bem('tick')}>{legend}</li>
          ))}
        </ul>
        <ul class={bem('hands')}>
          <li
            class={bem('hour-hand')}
            style={resolveAngle(hour.value, 12)}
          />
          <li
            class={bem('minute-hand')}
            style={resolveAngle(minute.value, 60)}
          />
          <li
            class={bem('second-hand')}
            style={resolveAngle(second.value, 60)}
          />
        </ul>
      </div>
    )
  },
})
