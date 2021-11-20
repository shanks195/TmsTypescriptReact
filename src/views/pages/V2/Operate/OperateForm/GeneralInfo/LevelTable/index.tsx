import { ForwardRefRenderFunction, forwardRef, Fragment,
    useImperativeHandle, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TiEyeOutline } from 'react-icons/ti';
import TableLevelStyle from './style';
import { fetchVersion, getVersion, isLoadedVersion, isLoadingVersion } from 'features/version/store/slice';
import { useDispatch, useSelector } from 'react-redux';
export interface ILevelData {
    numberDoc: string,
    nameDoc: string,
    levelDoc: string,
    activeDoc: string,
    expDoc: string,
    userUp: string
}

export interface ILevelDataRef {
    getValue(): ILevelData[]
    setValue(value: ILevelData[]): void
}

interface ILevelTableProps {
    data?: ILevelData[];
}

const defaultLevelData = [
    {
        numberDoc: "VB-12345100",
        nameDoc: "Biểu mẫu khai báo thông...",
        levelDoc: "4.2",
        activeDoc: "10/05/2020",
        expDoc: "03/10/2020",
        userUp: "Nguyễn Thị Cẩm"
    },
    {
        numberDoc: "VB-12345101",
        nameDoc: "Biểu mẫu khai báo 01",
        levelDoc: "3.1",
        activeDoc: "10/10/2019",
        expDoc: "22/10/2019",
        userUp: "Cao Văn Sơn Thông"
    },
    {
        numberDoc: "VB-12345102",
        nameDoc: "Biểu mẫu người chính chủ",
        levelDoc: "2.0",
        activeDoc: "02/01/2019",
        expDoc: "30/01/2019",
        userUp: "Đoàn Thanh"
    },
    {
        numberDoc: "VB-12300698",
        nameDoc: "Biểu mẫu khai báo 02",
        levelDoc: "1.3",
        activeDoc: "03/12/2018",
        expDoc: "10/01/2018",
        userUp: "Nguyễn Thị Cẩm"
    },
    {
        numberDoc: "VB-12300600",
        nameDoc: "Biểu mẫu khai báo 003",
        levelDoc: "1.0",
        activeDoc: "02/12/2018",
        expDoc: "03/12/2018",
        userUp: "Nguyễn Thị Cẩm"
    },
]


export type LevelTableComponent = ForwardRefRenderFunction<ILevelDataRef, ILevelTableProps>

const LevelTable: LevelTableComponent = (props, ref) => {
    const Version = useSelector(getVersion);
    const LoadingVersion = useSelector(isLoadingVersion);
    const LoadedVersion = useSelector(isLoadedVersion);
    const dispatch = useDispatch();
    const { data } = props;
    const classes = TableLevelStyle();
    const { t } = useTranslation();

    const [levelData, setLevelData] = useState<ILevelData[]>(defaultLevelData);

    useImperativeHandle(ref, () => ({
        getValue: () => levelData,
        setValue: (value) => { setLevelData(value) }
    }));
    useEffect(() => {
        !Version.length && !LoadingVersion && !LoadedVersion && dispatch(fetchVersion)
    })
    useEffect(() => {
        if (data) {
            setLevelData(data);
        }
    }, [data]);

    const THeader = () => {
        return (
            <TableRow>
                <TableCell align="center">{t('Pages.Layout.EForm.TInfor.ModalSTT')}</TableCell>
                <TableCell align="center">{t('Pages.Layout.EForm.TInfor.ModalSVB')}</TableCell>
                <TableCell align="center">{t('Pages.Layout.EForm.TInfor.ModalTVB')}</TableCell>
                <TableCell align="center">{t('Pages.Layout.EForm.TInfor.ModalPB')}</TableCell>
                <TableCell align="center">{t('Pages.Layout.EForm.TInfor.ModalNHL')}</TableCell>
                <TableCell align="center">{t('Pages.Layout.EForm.TInfor.ModalNHHL')}</TableCell>
                <TableCell align="center">{t('Pages.Layout.EForm.TInfor.ModalNCN')}</TableCell>
                <TableCell align="center">{t('Pages.Layout.EForm.TInfor.ModalTT')}</TableCell>
            </TableRow>
        )
    }

    const handleMainLevel = () => {

    }

    return <TableContainer component={Paper}>
        <Table className={classes.table}>
            <TableHead className="table__header">
                <THeader />
            </TableHead>
            <TableBody className="table__body">
            {Version.map((item, index) => (<Fragment key={index}>
                    <TableRow>
                        <TableCell align="center" component="th" scope="row">
                            {index + 1}
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">{item.code}</TableCell>
                        <TableCell align="center" component="th" scope="row">{item.name}</TableCell>
                        <TableCell align="center" component="th" scope="row">{item.version}</TableCell>
                        <TableCell align="center" component="th" scope="row">{item.start_date}</TableCell>
                        <TableCell align="center" component="th" scope="row">{item.end_date}</TableCell>
                        <TableCell align="center" component="th" scope="row">{item.updated_by}</TableCell>
                        <TableCell align="center" component="th" scope="row">
                            <label
                                htmlFor={item.code + (index + 1).toString()}
                                onClick={handleMainLevel}
                                >
                                    <TiEyeOutline
                                        color='var(--mscb-primary)'
                                        className="action-level"
                                        size='25px'
                                    />
                            </label>
                        </TableCell>
                    </TableRow>
                </Fragment>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default forwardRef(LevelTable);
