# Origin

| -           | -      | -            |
| ----------- | ------ | ------------ |
| top-left    | top    | top-right    |
| left        | center | right        |
| bottom-left | bottom | bottom-right |

# Position

| -              | -                | -               |
| -------------- | ---------------- | --------------- |
| [top, left]    | [top, center]    | [top, right]    |
| [middle, left] | [middle, center] | [middle, right] |
| [bottom, left] | [bottom, center] | [bottom, right] |

# Props

| Name       | Type       | Default   | Options                                                   |
| ---------- | ---------- | --------- | --------------------------------------------------------- |
| Appearance | Appearance | `outline` | `dashed` / `fill` / `legacy` / `outline`                  |
| Icon       | string     |           |                                                           |
| Legend     | string     |           |                                                           |
| Name       | string     |           |                                                           |
| Palette    | Palette    | `primary` | `error` / `primary` / `secondary` / `success` / `warning` |

# Emits

| Name   | Parameters                |
| ------ | ------------------------- |
| Change | (`value`, `mode`, `name`) |
| Close  | (`name`)                  |
| Open   | (`name`)                  |

# Methods

| Name   | Parameters | Return |
| ------ | ---------- | ------ |
| Toggle | ()         | `void` |
