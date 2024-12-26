[**multilingual-react-mui-starter v0.0.0**](../../../README.md)

***

[multilingual-react-mui-starter](../../../modules.md) / [app/ErrorBoundary](../README.md) / default

# Class: default

A React component that acts as an error boundary to catch JavaScript errors
in the component tree and display a fallback UI instead of crashing the application.

## Template

The props for the ErrorBoundary component.

## Template

The state for the ErrorBoundary component.

## Examples

```ts
// Usage with a fallback UI
<ErrorBoundary fallback={<h1>Something went wrong</h1>}>
  <MyComponent />
</ErrorBoundary>
```

```ts
// Usage without a fallback UI (default fallback will be used)
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

## Extends

- `Component`\<[`ErrorBoundaryProps`](../interfaces/ErrorBoundaryProps.md), [`ErrorBoundaryState`](../interfaces/ErrorBoundaryState.md)\>

## Constructors

### new default()

> **new default**(`props`): [`default`](default.md)

ErrorBoundary component constructor that initializes the state.

#### Parameters

##### props

[`ErrorBoundaryProps`](../interfaces/ErrorBoundaryProps.md)

The props for the ErrorBoundary component.

#### Returns

[`default`](default.md)

#### Overrides

`Component<ErrorBoundaryProps, ErrorBoundaryState>.constructor`

#### Defined in

src/app/ErrorBoundary.tsx:52

## Methods

### componentDidCatch()

> **componentDidCatch**(`error`, `errorInfo`): `void`

Invoked after an error has been thrown in a descendant component. Can be used for logging
error details or performing side effects.

#### Parameters

##### error

`Error`

The error thrown by a descendant component.

##### errorInfo

`ErrorInfo`

Additional error details including component stack trace.

#### Returns

`void`

#### Overrides

`Component.componentDidCatch`

#### Defined in

src/app/ErrorBoundary.tsx:76

***

### render()

> **render**(): `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `Element` \| `Iterable`\<`ReactNode`\>

Renders the fallback UI if an error has been caught. Otherwise, renders the child components.

#### Returns

`undefined` \| `null` \| `string` \| `number` \| `boolean` \| `Element` \| `Iterable`\<`ReactNode`\>

The rendered UI based on the error state.

#### Overrides

`Component.render`

#### Defined in

src/app/ErrorBoundary.tsx:84

***

### getDerivedStateFromError()

> `static` **getDerivedStateFromError**(`error`): [`ErrorBoundaryState`](../interfaces/ErrorBoundaryState.md)

This method is called when an error is caught in a child component.
It updates the component's state to reflect that an error has occurred.

#### Parameters

##### error

`Error`

The error that was thrown by the child component.

#### Returns

[`ErrorBoundaryState`](../interfaces/ErrorBoundaryState.md)

The new state of the component, indicating an error has occurred.

#### Defined in

src/app/ErrorBoundary.tsx:66
