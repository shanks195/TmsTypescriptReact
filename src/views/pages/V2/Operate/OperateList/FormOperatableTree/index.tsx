import { Grid } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import clsx from "clsx";

import FormOperatableTreeStyle from "./styles";

import OperateTree, { OperateTreeRef } from '../OperateTree';
import OperateTable from '../OperateTable';
import { useParams } from 'react-router-dom';
interface IParams{
  id:string
}
const FormOperatableTree: FC = () => {

  const classes = FormOperatableTreeStyle();
  const FormReviewClass = clsx(classes.root);
  // const {id} = useParams() as IParams;

  const treeRef = useRef<OperateTreeRef>(null)
  const [folderId, setFolderId] = useState<number>(5);
  useEffect(() => {
    const value = Number(treeRef.current?.getValue()) ?? 0;
    value !== folderId && setFolderId(value);
    console.log("==================n", folderId);
  })


  return <Grid container spacing={3} className={FormReviewClass}> 
    <Grid item xs={ 3 }>
      <OperateTree ref={treeRef}/>
    </Grid>
    <Grid item xs={ 9 }>
      <OperateTable folderId={folderId}/>
    </Grid>
  </Grid>

}

export default FormOperatableTree;