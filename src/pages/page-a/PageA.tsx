import React from 'react'
// import * as PropTypes from 'prop-types'
import {InferPropTypes} from '../../types/helper/react'

const propTypes = {}
const defaultProps = {}

type PageAProps = InferPropTypes<typeof propTypes, typeof defaultProps>

const PageA: React.FC<PageAProps> = () => <h1>Page A</h1>

PageA.propTypes = propTypes
PageA.defaultProps = defaultProps

export default PageA
