import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import Autocomplete, {  AutocompleteRef } from 'views/components/base/Autocomplete';
export interface SelectTypePropertyProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string;
  required?: boolean;
}
export interface  SelectTypePropertyRef {
  
}


const SelectTypeProperty: ForwardRefRenderFunction<SelectTypePropertyRef, SelectTypePropertyProps> =  (props)=>{
  const ElementRef = useRef<AutocompleteRef>(null);
  const { className, label, placeholder, message, onChange, value, required } = props;
  return  <Autocomplete
  ref={ ElementRef }
  className={ className }
  label={ label }
  placeholder={ placeholder }
  
  message={ message }
  onChange={ onChange }
  required={ required }
/>

}
export default SelectTypeProperty;