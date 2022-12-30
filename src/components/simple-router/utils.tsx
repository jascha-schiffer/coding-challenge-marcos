import React, {ElementType} from 'react'

export const withLayout = <
  T extends {component: ElementType | string; layout?: ElementType | string | null | undefined}
>(
  route: T,
  defaultLayout: ElementType | string
): T => {
  const ScopedComponent: React.FC<any> = props => {
    const FinalLayout = route.layout || defaultLayout
    const Component = route.component
    return (
      <FinalLayout>
        <Component {...props} />
      </FinalLayout>
    )
  }

  return {
    ...route,
    component: ScopedComponent,
  }
}
