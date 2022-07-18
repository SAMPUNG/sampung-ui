import { defineComponent, onMounted, ref } from 'vue'

import { createNamespace } from '@/utils'

import type { CalendarRecord } from './calendar.interface'
import './calendar.scss'

const bem = createNamespace('calendar')

export default defineComponent({
  name: bem(),
  setup() {
    const date = ref<number>(0)
    const list = ref<CalendarRecord[]>([])
    const month = ref<number>(0)
    const time = ref<string>('')
    const today = ref<number>(0)
    const year = ref<number>(0)

    // const changeDate = (step = 0) => {
    //   // Parse Date
    //   const cursor = parseDate()
    //   cursor.setDate(cursor.getDate() + step)

    //   // Update Date
    //   date.value = cursor.getDate()
    //   month.value = cursor.getMonth() + 1
    //   year.value = cursor.getFullYear()

    //   // Update Calendar
    //   resolveCalendar()
    // }

    const changeMonth = (step = 0) => {
      // Parse Date
      const cursor = parseDate(1)
      cursor.setMonth(cursor.getMonth() + step)

      // Update Date
      date.value = cursor.getDate()
      month.value = cursor.getMonth() + 1
      year.value = cursor.getFullYear()

      // Update Calendar
      resolveCalendar()
    }
    const changeYear = (step = 0) => {
      // Parse Date
      const cursor = parseDate()
      cursor.setFullYear(cursor.getFullYear() + step)

      // Update Date
      date.value = cursor.getDate()
      month.value = cursor.getMonth() + 1
      year.value = cursor.getFullYear()

      // Update Calendar
      resolveCalendar()
    }
    const initCalendar = () => {
      // Parse Date
      const _today = new Date()

      // Update Date
      date.value = _today.getDate()
      month.value = _today.getMonth() + 1
      today.value = Math.floor(_today.getTime() / 1000) * 1000
      time.value = _today.toTimeString().replace(/\s.*/, '')
      year.value = _today.getFullYear()

      // Update Calendar
      resolveCalendar()
    }
    const parseDate = (defaultDate?: number): Date => {
      const anchor = `${year.value}-${month.value}-${
        defaultDate || date.value
      } ${time.value}`
      return new Date(anchor)
    }
    const resolveCalendar = () => {
      // Parse Date
      const cursor = parseDate(1)
      const results: CalendarRecord[] = []

      let flag = true
      // Offset
      const offset = (cursor.getDay() + 6) % 7
      cursor.setDate(cursor.getDate() - offset)
      while (flag && results.length < 42) {
        results.push({
          date: cursor.getDate(),
          month: cursor.getMonth() + 1,
          tag: resolveTag(cursor),
          time: cursor.getTime(),
          type: cursor.getTime() < today.value ? 'before' : '',
          year: cursor.getFullYear(),
        })
        if (results.length > 28) {
          const nextMonth = cursor.getMonth() === month.value % 12
          const times7 = results.length % 7 !== 0
          flag = nextMonth ? times7 : true
        }
        cursor.setDate(cursor.getDate() + 1)
      }

      // Copy Results
      list.value = results.slice()
    }
    const resolveSelected = (item: CalendarRecord) => {
      return item.date === date.value && item.month === month.value
        ? 'selected'
        : ''
    }
    const resolveTag = (date: Date) => {
      return Math.ceil(Math.random() * 31) > date.getDate() ? 'with-data' : ''
    }
    const selectDate = (selected: CalendarRecord) => {
      date.value = selected.date
      month.value = selected.month
      year.value = selected.year
    }

    onMounted(() => {
      initCalendar()
    })

    return () => (
      <div class={[bem()]}>
        <div class="header">
          <span onClick={() => changeYear(-1)}>«</span>
          <span onClick={() => changeMonth(-1)}>‹</span>
          <div class="title">
            <span class="month">{month.value}</span>
            <span class="year">{year.value}</span>
          </div>
          <span onClick={() => changeMonth(1)}>›</span>
          <span onClick={() => changeYear(1)}>»</span>
        </div>
        <div class="content">
          <ul class="day-list">
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
          </ul>
          <ul class="date-list">
            {list.value?.map((item: CalendarRecord) => (
              <li
                class={[
                  'date-cell',
                  item.type,
                  item.tag,
                  resolveSelected(item),
                ]}
                onClick={() => selectDate(item)}
              >
                <span class="tag">
                  <span>{item.date}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
})
