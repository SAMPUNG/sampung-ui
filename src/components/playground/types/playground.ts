export type PlaygroundControls = Record<string, unknown>[]
export type PlaygroundSource = Record<string, unknown>
export type PlaygroundTarget = string

export type PlaygroundData = {
  controls: PlaygroundControls
  source: PlaygroundSource
  target: PlaygroundTarget
}
