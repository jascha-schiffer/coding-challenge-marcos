import React, {useState} from 'react'
import * as PropTypes from 'prop-types'
import {InferPropTypes} from '../../../types/helper/react'
import InputPure, {InputPureProps} from '../input-pure'

const propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
}
const defaultProps = {
  defaultValue: '',
  onChange: undefined,
}

export type InputProps = InferPropTypes<typeof propTypes, typeof defaultProps> &
  Omit<InputPureProps, 'value' | 'onChange'>

const Input: React.FC<InputProps> = ({defaultValue, onChange, ...restProps}) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <InputPure
      value={value}
      onChange={(e, updatedValue) => {
        setValue(updatedValue)
        onChange && onChange(e, updatedValue)
      }}
      {...restProps}
    />
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
