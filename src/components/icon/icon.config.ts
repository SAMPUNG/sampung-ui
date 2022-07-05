import type { IconRecord } from './icon.interface'
import FONT_AWSESOME from './font-awesome'
import MATERIAL_DESIGN from './material-design'
import WEATHER from './weather'

const manifest: IconRecord[] = MATERIAL_DESIGN

const resolveSymbol = (name: string): string => {
  const result = manifest.find((record: IconRecord) => record.name === name)
  return result ? String.fromCharCode(result.code) : ''
}

export default resolveSymbol
export { manifest, resolveSymbol }
