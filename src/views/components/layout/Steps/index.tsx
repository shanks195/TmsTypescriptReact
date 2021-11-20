import { Step, StepLabel, Stepper } from '@mui/material';
import { Children, FC, Fragment, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import StepIcon from './Icon';
import stepStyle from './style';
import clsx from 'clsx';
import TabPanel from '../TabPanel';

export interface StepItem{
  label: ReactNode;
  node?: ReactNode;
  hasSub?: boolean;
}

export interface StepsProps{
  active?: number;
  className?: string;
  alternative?: boolean;
  isSub?: boolean;
  items?: StepItem[];
  beforeChange?(current: number, prev: number): boolean;
  onChange?(current: number): void;
}

const Steps: FC<StepsProps> = props => {

  const classes = stepStyle();

  const { 
    active = 0, 
    children, 
    className, 
    alternative, 
    isSub,
    items = [], 
    beforeChange, 
    onChange, 
  } = props;
  
  const [ CurrentStep, setCurrentStep ] = useState<number>(active);
  const ActiveStep = useRef<number>(active);

  useEffect(() => {
    if (CurrentStep !== undefined && CurrentStep !== ActiveStep.current){
      ActiveStep.current = CurrentStep;
      onChange && onChange(CurrentStep);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ CurrentStep ]);

  useEffect(() => {
    if (active !== CurrentStep && (!beforeChange || beforeChange(CurrentStep, active))){
      setCurrentStep(active);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ active ]);

  const childs = useMemo(() => {
    if (!children) return [];
    return Children.toArray(children);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabPanel = () => {

  }

  const handleStep = (index: number) => () => {
    if (!beforeChange || beforeChange(CurrentStep, index)){
      setCurrentStep(index);
    }
  }

  const stepClass = clsx(className, classes.root, { subSteps: isSub });

  return <Fragment>
    
    <Stepper activeStep={ CurrentStep } alternativeLabel={ alternative } className={ stepClass }>
      { items.map((item, index) => {
        const completed = index < CurrentStep;
        return <Step 
          key={ index } 
          completed={ completed } 
          onClick={ handleStep(index) }
          className={ clsx({ 
            hasSub: item.hasSub,
            active: index === CurrentStep
          }) }
        >
          <StepLabel 
            error={ false }
            StepIconComponent={ completed ? StepIcon : undefined }
            StepIconProps={{ color: "success", icon: item.node }}
          >
            { item.label }
          </StepLabel>
        </Step>
      }) }
    </Stepper>

    {(() => {

      if (!childs.length) return null;

      return <SwipeableViews  axis="x" index={ CurrentStep } onChangeIndex={ handleTabPanel }>
        {childs.map((child, index) => {
          return <TabPanel value={ CurrentStep } index={ index } key={ index } padding={ false }>
            { child }
          </TabPanel>
        })}
      </SwipeableViews>

    })()}

  </Fragment>

}

export default Steps;