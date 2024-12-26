[**multilingual-react-mui-starter v0.0.0**](../../../README.md)

***

[multilingual-react-mui-starter](../../../modules.md) / [pages/routes](../README.md) / usePagesRoutes

# Function: usePagesRoutes()

> **usePagesRoutes**(): `Element`

A custom hook that defines the routing configuration for the application.

This component renders a set of routes using `react-router-dom`. It maps the root path (`/`) to the `PMain` component
and any unknown paths (`*`) to the `PNotFound` component. The `Routes` component handles the routing logic
by rendering the appropriate component based on the current path.

## Returns

`Element`

The routes configuration for the application.

## Example

```ts
// Usage in a React component:
// <usePagesRoutes />
```

## Defined in

[src/pages/routes.tsx:17](https://github.com/mjleb/multilingual-react-mui-starter/blob/76e05b925fd2fa28fa57c7afd68d00a071acaf64/src/pages/routes.tsx#L17)
