import * as PropTypes from 'prop-types'

type InferPropTypes<PT, DPTypes = Record<string, unknown>, PTTypes = PropTypes.InferProps<PT>> = {
  [Key in keyof PTTypes]: Key extends keyof DPTypes
    ? NonNullable<PTTypes[Key]> | DPTypes[Key]
    : PTTypes[Key]
}
