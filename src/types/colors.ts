export const bootstrapColorNames = [
  'primary',
  'primary-subtle',
  'secondary',
  'secondary-subtle',
  'success',
  'success-subtle',
  'danger',
  'danger-subtle',
  'warning',
  'warning-subtle',
  'info',
  'info-subtle',
  'light',
  'light-subtle',
  'dark',
  'dark-subtle',
  'body-secondary',
  'body-tertiary',
  'body',
  'black',
  'white',
  'transparent',
] as const

export type BSColor = typeof bootstrapColorNames[number]

export type AlertColor  = `alert-${BSColor}`
export type BgColor     = `bg-${BSColor}` 
export type ButtonColor = `btn-${BSColor}`
export type TextColor   = `text-${BSColor}`