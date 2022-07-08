export const debounce = (callback: Function, wait: number): Function => {
  let timer: NodeJS.Timer | null = null
  return (...params: unknown[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback(...params)
    }, wait)
  }
}
