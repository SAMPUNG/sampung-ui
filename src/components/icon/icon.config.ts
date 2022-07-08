import FONT_AWSESOME from './configs/font-awesome'
import MATERIAL_DESIGN from './configs/material-design'
import WEATHER from './configs/weather'
import type { IconRecord, IconRecordsMap } from './icon.interface'

const manifest: IconRecordsMap = {
  'font-awesome': FONT_AWSESOME,
  'material-design': MATERIAL_DESIGN,
  weather: WEATHER,
}

const resolveSymbol = (name: string, font: string): string => {
  const result = manifest[font].find(
    (record: IconRecord) => record.name === name
  )
  return result ? String.fromCharCode(result.code) : ''
}

export default resolveSymbol
export { manifest, resolveSymbol }
