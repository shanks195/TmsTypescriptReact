import { closeBackdrop, getBackdropMessage, getBackdropShow, getBackdropStatic } from "features/app/store/slice";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";

const BackdropComponent: FC = () => {

  const dispatch = useDispatch();

  const message = useSelector(getBackdropMessage);
  const show = useSelector(getBackdropShow);
  const isStatic = useSelector(getBackdropStatic);

  const onClick = () => {
    if(isStatic) return;

    dispatch(closeBackdrop());

  }

  if(!show) return null;

  return <div className="mscb-backdrop flex-center" onClick={onClick}>
    {
      !!message ? <div className="mscb-backdrop-message">
        {message}
      </div> : <Loading />
    }
  </div>

};

export default BackdropComponent;