import React, { useState } from 'react'
import { Name } from './Name'
import { Band } from './Band'
import { Color } from './Color'
import '../styles/style.css';



export const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    favoriteColor: '',
    favoriteBand: '',

  })

  const [currentStep, setCurrentStep] = useState(1)
  const [submittedData, setSubmittedData] = useState(null)

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }))
  }


  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const submitForm = () => {
    console.log(formData)
    const formattedData = `
    Name: ${formData.name}
    Favorite color: ${formData.favoriteColor}
    Favorite band: ${formData.favoriteBand}
    `
    setSubmittedData(formattedData)
  }

  console.log(currentStep)

  return (

    <div>
      {/* If data is submittedData display the submitted data */}
      {submittedData ? (
        <div class='submitted-form'>
          <p>Your form has been submitted:</p>
          <pre>{submittedData}</pre>
          <pre>Thank you!</pre>
        </div>
      ) : (
        /* If submittedData is null display the form */
        <div>
          {currentStep === 1 && (<Name value={formData.name} updateFormData={updateFormData} />)}
          {currentStep === 2 && (<Color value={formData.favoriteColor} updateFormData={updateFormData} />)}
          {currentStep === 3 && (<Band value={formData.favoriteBand} updateFormData={updateFormData} />)}

          <div className='multi-step-Form'>
            {currentStep > 1 && <button onClick={prevStep}>Back</button>}
            {currentStep < 3 ? <button onClick={nextStep}>Next</button> : <button onClick={submitForm}>Submit</button>}

          </div>
        </div>
      )}
    </div>
  )
}
