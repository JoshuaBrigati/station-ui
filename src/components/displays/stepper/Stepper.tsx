import { useEffect, useMemo, useState } from "react"
import styles from "./Stepper.module.scss"
import { FlexColumn } from "components"

type StepperFunction<T> = (currentStep: number, nextStep?: () => void) => T

export type StepperProps = {
  steps: number
  currentStep?: number
  renderIcon?: StepperFunction<React.ReactNode>
  renderTitle?: StepperFunction<string>
  renderDescription?: StepperFunction<string>
  renderBody: StepperFunction<React.ReactNode>
}

const StepTab = (props: { active: boolean }) => {
  return (
    <div className={`${props.active && styles.active} ${styles.tab}`} />
  )
}

const Stepper = (props: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const tabs = useMemo(() => {
    const currentTabs = []
    for (let i = 0; i < props.steps; i++)
      currentTabs.push(i)
    return currentTabs
  }, [props.steps])

  useEffect(()=> {
    // If there is no current step defined just skip animation
    if (props.currentStep === undefined) return

    // If the current step is the same as the current step 
    // in the component just skip animation
    if (props.currentStep === currentStep) return


    if (props.currentStep >= 0 && props.currentStep <= (props.steps - 1)) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep(props.currentStep ?? 0)
        setIsAnimating(false)
      }, 200)
    }
  }, [props.currentStep]);


  const nextStep = () => {
    if (currentStep !== undefined && currentStep + 1 === props.steps ) return

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentStep(step => step + 1)
      setIsAnimating(false)
    }, 200)
  }

  return (
    <div className={styles.stepper}>
      <div className={styles.stepper__header}>
        {tabs.map(tab => <StepTab key={tab} active={tab <= currentStep} />)}
      </div>
      <div className={`${isAnimating ? styles.animateOut : styles.animateIn} ${styles.stepper__container}`}>
        <div className={styles.stepper__container__header}>
          {props.renderIcon && props.renderIcon(currentStep)}
          <FlexColumn gap={8}>
            {props.renderTitle && <h3>{props.renderTitle(currentStep)}</h3>}
            {props.renderDescription && <h6>{props.renderDescription(currentStep)}</h6>}
          </FlexColumn>
        </div>
        <div className={styles.stepper__container__body}>
          {props.renderBody(currentStep, nextStep)}
        </div>
      </div>
    </div>
  )
}

export default Stepper