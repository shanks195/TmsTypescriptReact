
import { fetchMetadataGroups, getMetadataGroups, isLoadedMetadataGroups, isLoadingMetadataGroups } from 'features/metadata-group/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMetadataGroups } from 'types/models/MetadataList';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectMetadataGroupsRef{
  getValue(): IMetadataGroups | undefined;
}

export interface SelectMetadataGroupsProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: string | number;
  required?: boolean;
}

const SelectMetadataGroups: ForwardRefRenderFunction<SelectMetadataGroupsRef, SelectMetadataGroupsProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const ElementRef = useRef<AutocompleteRef>(null);
  const metadataGroups = useSelector(getMetadataGroups);
  const loading = useSelector(isLoadingMetadataGroups);
  const loaded = useSelector(isLoadedMetadataGroups);
  const dispatch = useDispatch();

  useEffect(() => {
    !metadataGroups.length && !loading && !loaded && dispatch(fetchMetadataGroups());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = ElementRef.current?.getValue()?.value ?? '';
      return metadataGroups.find(c => c.id === selected);
    }
  }));

  const options = metadataGroups.map(c => ({ value: c.id, label: c.name }));
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

export default forwardRef(SelectMetadataGroups);