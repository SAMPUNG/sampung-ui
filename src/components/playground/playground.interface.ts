export type PlaygroundControl = {
  legend: string
  name: string
  type: string
  value: unknown
}
export type PlaygroundControls = PlaygroundControl[]

export type PlaygroundData = {
  controls: PlaygroundControls
  source: PlaygroundSource
  target: PlaygroundTarget
}

export declare type PlaygroundEmits = {
  (event: 'reset', name?: string): void
  (event: 'submit', name?: string): void
}

export declare type PlaygroundProps = {
  target: string
}

export type PlaygroundSource = Record<string, unknown>

export type PlaygroundTarget = string
