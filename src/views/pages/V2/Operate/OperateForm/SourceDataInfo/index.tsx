import { Grid } from '@mui/material';
// import PAGE_URL from 'app/PageURL';
import clsx from 'clsx';
import { Fragment, useMemo, useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import Steps from 'views/components/layout/Steps';
import PdfViewer from './pdfPre';
import FormDataSource from './FormDataSource';
import { FormInstallRightLayout } from './FormInstallRight';
import sourceDataStyle from './style';
import { IOperateParams } from 'types/models/templateGroups';

const LegalSteps = [
    'declare',
    'source'
];

const FormSourceDataInfo: FC = () => {

    const classes = sourceDataStyle();
    const params = useParams() as IOperateParams;
    const currentStep = LegalSteps.indexOf(params.step);
    // const navigate = useNavigate()
    const [CurrentStep, setCurrentStep] = useState<number>(!!~currentStep ? currentStep : 0);

    useEffect(() => {
        const step = !!~currentStep ? currentStep : 0;
        if (step !== CurrentStep && CurrentStep !== undefined){
            setCurrentStep(step)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ currentStep ]);

    const declareStep = useMemo(() => {
        return (
            <div>
                <div className={clsx('text-upper font-bold')} style={{whiteSpace: 'nowrap'}}>
                    Nguồn lấy dữ liệu
                </div>
            </div>
        );
    }, []);

    const sourceStep = useMemo(() => {
        return <div>
            <div className={clsx('text-upper font-bold')} style={{whiteSpace: 'nowrap'}}>
                Khai báo đầu vào
            </div>
        </div>
    }, []);

    const beforeChangeStep = (current: number, next: number) => {

        
		return true;
    }

    return (
        <Fragment>
            <Grid container className={clsx(classes.rootSour, 'wh-full')}>
                <Grid item xs={5} className="tab-col-pdf">
                    <PdfViewer pdf={ `${ process.env.PUBLIC_URL }/sample.pdf` } />
                </Grid>
               
                <Grid item xs={7} >
                    <Grid container className="tab-col-tree">
                        <Grid item xs={12} alignItems="center" className="tab-tree">
                            <Steps
                                alternative
                                active={CurrentStep}
                                className="custom-step"
                                beforeChange={beforeChangeStep}
                                items={[
                                    { node: 'A', label: declareStep },
                                    { node: 'B', label: sourceStep }
                                ]}
                            >
                                <FormDataSource />
                                <FormInstallRightLayout />
                            </Steps>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default FormSourceDataInfo;