[**multilingual-react-mui-starter v0.0.0**](../../../../README.md)

***

[multilingual-react-mui-starter](../../../../modules.md) / [components/mui/ThemeSwitcher](../README.md) / default

# Function: default()

> **default**(`props`): `Element`

A component that switches between light, dark, and system color modes.
It displays an icon corresponding to the current theme and allows the user
to change the theme via a dropdown menu.

This component uses Material UI's `useColorScheme` hook to determine the
current color mode and provides options to switch between light, dark, or system default mode.
The icon changes based on the selected theme and a menu is shown when the icon is clicked,
allowing the user to select the theme they want to apply.

## Parameters

### props

`IconButtonOwnProps`

Props passed to the `IconButton` component (e.g., onClick, size).

## Returns

`Element`

A button that opens a menu to switch between themes and displays the corresponding icon.

## Example

```ts
return (
  <ThemeSwitcher />
)
```

## Defined in

[src/components/mui/ThemeSwitcher.tsx:32](https://github.com/mjleb/multilingual-react-mui-starter/blob/b578c9d042c584a379011e38acda43905c126b81/src/components/mui/ThemeSwitcher.tsx#L32)
