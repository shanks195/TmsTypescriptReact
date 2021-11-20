import { 
    ChangeEvent,
    forwardRef,
    ForwardRefRenderFunction, 
    ReactNode,
    useEffect,
    useImperativeHandle,
    useRef,
    useState
} from "react";
import clsx from "clsx";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextAreaStyle from "./style";

export interface TextAreaRef {
    getValue(): string;
    setValue(value: string): void;
}

export interface TextAreaProps {
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    label?: ReactNode;
    onChange?(): void;
    placeholder?: string;
    prefix?: ReactNode;
    required?: boolean;
    suffix?: ReactNode;
    value?: string;
    maxRows?: number | string;
    minRows?: number | string;
}

export type TextAreaComponent = ForwardRefRenderFunction<TextAreaRef,TextAreaProps>;

const TextArea: TextAreaComponent = (props, ref) => {
    const classes = TextAreaStyle()

    const {
        className,
        fullWidth = true,
        value,
        disabled,
        label,
        onChange,
        placeholder,
        required
    } = props;

    const [defaultValue, setDefaultValue] = useState<string>(value ?? "");

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const currentValue = useRef(value);

    useEffect(() => {
        if (defaultValue !== currentValue.current ) {
            currentValue.current = defaultValue;
            onChange && onChange();
        }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValue]);
    
    useEffect(()=>{
        
        if(value && value !== defaultValue){
            setDefaultValue(value)
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])
    useImperativeHandle(ref, () => ({
        getValue: () => defaultValue,
        setValue: (val) => val === defaultValue || setDefaultValue(val)
    }));

    const textAreaClass = clsx("mscb-input", className,classes.root);

    const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDefaultValue(e.target.value);
    };

    return (
        <FormControl className={textAreaClass} fullWidth={ fullWidth }>
            {!!label && (
                <InputLabel shrink required={required}>
                    {label}
                </InputLabel>
            )}
    
            <TextareaAutosize
                disabled={disabled}
                placeholder={placeholder}
                ref={textAreaRef}
                onChange={changeTextArea}
                value={defaultValue}
                style={{ maxWidth: '100%', maxHeight: '250px', minHeight: '100px' }}
            />
        </FormControl>
    );
}

export default forwardRef(TextArea);