import styled from 'styled-components'

export const StyledInput = styled.input<{$isValid: boolean}>`
  ${({$isValid}): string => ($isValid ? '' : 'border-color: red;')}
`
