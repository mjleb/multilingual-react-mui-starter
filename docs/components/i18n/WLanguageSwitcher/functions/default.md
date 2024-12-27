[**multilingual-react-mui-starter v0.0.0**](../../../../README.md)

***

[multilingual-react-mui-starter](../../../../modules.md) / [components/i18n/WLanguageSwitcher](../README.md) / default

# Function: default()

> **default**(): `Element`

The `WLanguageSwitcher` component allows users to switch between available languages.
It displays the current language and provides buttons to change the language.
This component is integrated with the `i18next` module for language management.

It fetches the current language from the `i18n` instance and shows the available languages as buttons.
The current language is highlighted, and when a user clicks a button, the language changes accordingly.

## Returns

`Element`

Returns JSX that displays the current language and a set of buttons for changing the language.

## Example

```ts
<WLanguageSwitcher />
```

## See

[https://www.i18next.com/](https://www.i18next.com/) for more information about i18next.

## Defined in

[src/components/i18n/WLanguageSwitcher.tsx:30](https://github.com/mjleb/multilingual-react-mui-starter/blob/685e468572dd042d91659159187443f6029a31f1/src/components/i18n/WLanguageSwitcher.tsx#L30)
