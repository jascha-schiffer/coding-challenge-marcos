import React from 'react'
import * as PropTypes from 'prop-types'
import {omit} from 'ramda'
import ms from 'ms'
import {InferPropTypes} from '../../../types/helper/react'
import {StyledInput} from './styles'
import {wasteCycles} from '../../../utils/some-random-helpers'

/**
 * some noop validation function which is simply taking some time to have a result
 * @param value
 */
const validate = (value: string | undefined): undefined | string => {
  wasteCycles(ms('10ms'))
  return value === '123' ? 'Do not enter 123' : undefined
}

const propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
const defaultProps = {
  value: '',
}

export type InputPureProps = InferPropTypes<typeof propTypes, typeof defaultProps> &
  Omit<React.ComponentProps<'div'>, 'onChange'>

const InputPure: React.FC<InputPureProps> = ({name, value, onChange, ...restProps}) => {
  const inputIsValid = validate(value)

  return (
    <StyledInput
      name={name}
      value={value}
      onChange={e => {
        onChange(e, e.target.value)
      }}
      $isValid={typeof inputIsValid === 'undefined'}
      {...omit(['ref'], restProps)}
    />
  )
}

InputPure.propTypes = propTypes
InputPure.defaultProps = defaultProps

export default InputPure
