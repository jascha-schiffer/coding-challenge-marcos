import React from 'react'
import * as PropTypes from 'prop-types'
import {InferPropTypes} from '../../types/helper/react'
import {wasteCycles} from '../../utils/some-random-helpers'

const propTypes = {
  duration: PropTypes.number.isRequired,
}
const defaultProps = {}

type WasteCyclesProps = InferPropTypes<typeof propTypes, typeof defaultProps>

const WasteCycles: React.FC<WasteCyclesProps> = ({duration}) => {
  wasteCycles(duration)
  return null
}

WasteCycles.propTypes = propTypes
WasteCycles.defaultProps = defaultProps

export default WasteCycles
