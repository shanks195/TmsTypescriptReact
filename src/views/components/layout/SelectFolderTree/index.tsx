import { getFolderTree } from 'features/folderTree/store/slice';
import { fetchFolderTree, isLoadedFolderTree, isLoadingFolderTree } from 'features/folderTree/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFolderTree } from 'types/models/FolderTree';
// import { IFolder } from 'types/models/InforBasic';
import Autocomplete, { AutocompleteOption, AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectFolderTreeRef {
  getValue(): IFolderTree | undefined;
}

export interface SelectFolderTreeProps {
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: number;
  required?: boolean;
}

const SelectFolderTree: ForwardRefRenderFunction<SelectFolderTreeRef, SelectFolderTreeProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, required, value } = props;
  const FolderTree = useSelector(getFolderTree);
  const LoadingFolderTree = useSelector(isLoadingFolderTree);
  const LoadedFolderTree = useSelector(isLoadedFolderTree);
  const dispatch = useDispatch();
  const ElementRef = useRef<AutocompleteRef>(null);
  const selected = () => ElementRef.current?.getValue()?.value ?? '';



  useEffect(() => {
    !FolderTree.length && !LoadingFolderTree && !LoadedFolderTree && dispatch(fetchFolderTree('1'));
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return FolderTree.find(c => c.id === selected());
    }
  }));

  const generateOptions = (data: IFolderTree[], dept = 0): AutocompleteOption[] => {
    let rs: AutocompleteOption[] = [];

    data.map(item => {
      rs.push({
        label: item.name,
        value: item.id,
        className: dept ? `foldertree-chidren-${dept}` : undefined
      });

      if (item.child?.length) {
        rs = rs.concat(generateOptions(item.child, dept + 1));
      }

      return null;
    });

    return rs;
  }
  const options = FolderTree.map(c => ({ value: c.id, label: c.name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

  return <Autocomplete
    ref={ElementRef}
    className={className}
    label={label}
    placeholder={placeholder}
    options={generateOptions(FolderTree)}
    message={message}
    value={defaultValue}
    onChange={onChange}
    required={required}
  />

}

export default forwardRef(SelectFolderTree);