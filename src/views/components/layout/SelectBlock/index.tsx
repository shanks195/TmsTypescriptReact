import { getBlock } from 'features/block/store/slice';
import { fetchBlock, isLoadedBlock, isLoadingBlock } from 'features/block/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IBlock } from 'types/models/block';

import Autocomplete, {  AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectBlockRef{
  getValue(): IBlock | undefined;
}

export interface SelectBlockProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: number;
  required?: boolean;
}

const SelectBlock: ForwardRefRenderFunction<SelectBlockRef, SelectBlockProps> = (props, ref) => {
  const ElementRef = useRef<AutocompleteRef>(null);
  const { className, label, placeholder, message, onChange, value, required } = props;
  const Block = useSelector(getBlock);
  const LoadingBlock = useSelector(isLoadingBlock);
  const LoadedBlock = useSelector(isLoadedBlock);
  const dispatch = useDispatch();



  useEffect(() => {
    !Block.length && !LoadingBlock && !LoadedBlock && dispatch(fetchBlock());
  });
  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = ElementRef.current?.getValue()?.value;
      return Block.find(c => c.id === selected);
    }
  }));

  const options = Block.map(c => ({ value: c.id, label: c.name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;


  return <Autocomplete
  ref={ ElementRef }
  className={ className }
  label={ label }
  placeholder={ placeholder }
  options={ options }
  message={ message }
  value={ defaultValue }
  onChange={ onChange }
  required={ required }
/>

}

export default forwardRef(SelectBlock);