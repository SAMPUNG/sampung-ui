export declare type ClockHour = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export declare type ClockHourExtra = 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 0

// export declare type ClockTick = 'Ⅰ' | 'Ⅱ' | 'Ⅲ' | 'Ⅳ' | 'Ⅴ' | 'Ⅵ' | 'Ⅶ' | 'Ⅷ' | 'Ⅸ' | 'Ⅹ' | 'Ⅺ' | 'Ⅻ'

export declare type ClockTick = '|' | '‖'

export declare type ClockHourTick = {
  legend: ClockTick
  name: ClockHour
}
