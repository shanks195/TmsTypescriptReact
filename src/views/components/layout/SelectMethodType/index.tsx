import {
    forwardRef,
    ForwardRefRenderFunction,
    ReactNode,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { SelectOption, SelectRef } from 'views/components/base/Select';
import { IMethodType } from 'types/models/MethodType';
import { 
  fetchMethodType, 
  getfetchMethodType, 
  isFetched, 
  isFetching 
} from 'features/method-type/store/slice';


export interface SelectMethodTypeRef{
    getValue(): IMethodType | undefined;
    setValue(value: string): void;
}

export interface SelectMethodTypeProps{
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    label?: ReactNode;
    message?: string;
    onChange?(): void;
    placeholder?: string;
    required?: boolean;
    value?: string;
}

export interface SelectMethodTypeComponent extends
    ForwardRefRenderFunction<SelectMethodTypeRef, SelectMethodTypeProps>{}

const SelectMethodType: SelectMethodTypeComponent = (props, ref) => {

    const { className, fullWidth, label, message, onChange, placeholder, required, value, disabled } = props;

    const elementRef = useRef<SelectRef>(null);
    const MethodType = useSelector(getfetchMethodType);
    const fetching = useSelector(isFetching);
    const fetched = useSelector(isFetched);
    const dispatch = useDispatch();

    const [ CurrentValue, setCurrentValue ] = useState<string|undefined>(value);
    const Current = useRef<string|undefined>(value);

    useEffect(() => {
        Current.current = value;
        if (value !== CurrentValue){
            setCurrentValue(value);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ value ]);

    useEffect(() => {
        !MethodType.length
        && !fetched
        && !fetching
        && dispatch(fetchMethodType());
    });

    useEffect(() => {
        if (CurrentValue !== Current.current){
            Current.current = CurrentValue;
            onChange && onChange();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ CurrentValue ]);

    useImperativeHandle(ref, () => ({
        getValue: () => MethodType.find( m => m.id.toString() === CurrentValue),
        setValue: val => {
            val !== CurrentValue && setCurrentValue(val);
        }
    }))

    const handleChange = () => {
        const selected = elementRef.current?.getValue();
        setCurrentValue(selected?.toString())
    }

    const options: SelectOption[] = MethodType.map(c => ({ value: c.id, label: c.name }));

    return <Select
        ref={ elementRef }
        className={ className }
        fullWidth={ fullWidth }
        label={ label }
        message={ message }
        onChange={ handleChange }
        options={ options }
        placeholder={ placeholder }
        required={ required }
        value={ CurrentValue}
        disabled= { disabled }
    />

}

export default forwardRef(SelectMethodType);