import React, {useState} from 'react'
// import * as PropTypes from 'prop-types'
import {InferPropTypes} from '../../types/helper/react'
import {Input} from '../../components/form-inputs'
import {SubmitButton} from './styles'

const propTypes = {}
const defaultProps = {}

type PageBProps = InferPropTypes<typeof propTypes, typeof defaultProps>

const PageB: React.FC<PageBProps> = () => {
  const [formData, setFormData] = useState({} as Record<string, string>)

  const submitForm = () => {
    // eslint-disable-next-line no-alert
    alert(`Submitting form: ${JSON.stringify(formData)}`)
  }

  return (
    <>
      <h1>Page B</h1>
      <br />
      <Input
        name="some-input"
        defaultValue={formData['some-input'] || ''}
        onChange={(e, value) => {
          setFormData(state => ({...state, 'some-input': value}))
        }}
      />
      <br />
      <br />
      <Input
        name="another-input"
        defaultValue={formData['another-input'] || ''}
        onChange={(e, value) => {
          setFormData(state => ({...state, 'another-input': value}))
        }}
      />
      <br />
      <br />
      <Input
        name="a"
        defaultValue={formData.a || ''}
        onChange={(e, value) => {
          setFormData(state => ({...state, a: value}))
        }}
      />
      <br />
      <br />
      <Input
        name="b"
        defaultValue={formData.b || ''}
        onChange={(e, value) => {
          setFormData(state => ({...state, b: value}))
        }}
      />
      <br />
      <br />
      <Input
        name="c"
        defaultValue={formData.c || ''}
        onChange={(e, value) => {
          setFormData(state => ({...state, c: value}))
        }}
      />
      <br />
      <br />
      <SubmitButton type="button" onClick={submitForm}>
        Submit
      </SubmitButton>
    </>
  )
}

PageB.propTypes = propTypes
PageB.defaultProps = defaultProps

export default PageB
