# Props

| Name       | Type       | Default     | Options                                                                     |
| ---------- | ---------- | ----------- | --------------------------------------------------------------------------- |
| Appearance | Appearance | `outline` | `dashed` / `fill` / `legacy` / `outline` / `text`                 |
| Icon       | string     |             |                                                                             |
| Legend     | string     |             |                                                                             |
| Mode       | ButtonMode | `normal`  | `diode` / `disabled` / `knob` / `loading` / `normal` / `switch` |
| Name       | string     |             |                                                                             |
| Palette    | Palette    | `primary` | `error` / `primary` / `secondary` / `success` / `warning`         |
| Type       | ButtonType | `button`  | `button` / `reset` / `submit`                                         |

# Emits

| Name   | Parameters                      |
| ------ | ------------------------------- |
| Change | (`value`, `mode`, `name`) |
| Click  | (`name`)                      |

# Methods

| Name   | Parameters | Return   |
| ------ | ---------- | -------- |
| Click  | ()         | `void` |
| Toggle | ()         | `void` |
