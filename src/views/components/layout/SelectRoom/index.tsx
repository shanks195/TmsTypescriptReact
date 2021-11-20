import {  fetchRooms, getRooms, isLoadedRooms, isLoadingRooms } from 'features/inforBase/store/slice';
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRoom } from 'types/models/InforBasic';
import Autocomplete, { AutocompleteRef } from 'views/components/base/Autocomplete';

export interface SelectRoomRef{
  getValue(): IRoom | undefined;
}

export interface SelectRoomProps{
  className?: string;
  label?: string;
  placeholder?: string;
  message?: string;
  onChange?(): void;
  value?: number;
  required?: boolean;
}

const SelectRoom: ForwardRefRenderFunction<SelectRoomRef, SelectRoomProps> = (props, ref) => {

  const { className, label, placeholder, message, onChange, value, required } = props;
  const RoomElement = useRef<AutocompleteRef>(null);
  const Rooms = useSelector(getRooms);
  const loading = useSelector(isLoadingRooms);
  const loaded = useSelector(isLoadedRooms);
  const dispatch = useDispatch();

  useEffect(() => {
    !Rooms.length && !loading && !loaded && dispatch(fetchRooms());
  });

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selected = RoomElement.current?.getValue()?.value ?? '';
      return Rooms.find(c => c.room_code === selected);
    }
  }));

  const options = Rooms.map(c => ({ value: c.room_code, label: c.room_name }));
  const defaultValue = options.find(o => o.value === value) ? value : undefined;

  return <Autocomplete
    ref={ RoomElement }
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

export default forwardRef(SelectRoom);