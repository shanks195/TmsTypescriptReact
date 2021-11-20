import { FunctionComponent, useRef, useState } from "react";
import PDF from "react-pdf-js";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { Button, Grid, } from "@mui/material";
import Select, { SelectRef }  from "views/components/base/Select";
import sourceDataStyle from "./style";
import clsx from 'clsx';

interface PDFPreviewInfoProps {
    pdf: string
}

interface arrNumPageInfo {
    id: number,
    code: string,
    name: string
}

interface PDFPreviewInfoComponent extends FunctionComponent<PDFPreviewInfoProps> { }

const PdfViewer: PDFPreviewInfoComponent = ({ pdf }) => {

    const [page, setPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(0);
    const [arrPage, setArrPage] = useState<arrNumPageInfo[]>([]);
    const currentRef = useRef<SelectRef>(null);

    const classes = sourceDataStyle();

    const onDocumentComplete = (numPages: number) => {
        setPages(numPages);
        const arrHandle = [];
        for (let i = 1; i < numPages + 1; i++) {
            arrHandle.push({ id: i, code: String(i), name: String(i) + "/" + String(numPages) })
        }
        setArrPage(arrHandle);
    }

    const onPage = (type: number) => {
        let newPage = type ? page + 1 : page - 1

        if (newPage > pages) {
            newPage = 1
        } else if (newPage < 1) {
            newPage = pages
        }
        currentRef.current?.setValue(newPage);
        setPage(newPage)
    }

    const onPageBegin = () => {
        setPage(1);
        currentRef.current?.setValue(1);
    }

    const onPageEnd = () => {
        currentRef.current?.setValue(pages);
        setPage(pages);
    }

    const onChangeValue = () => {
        setPage(Number(currentRef.current?.getValue()));
    }

    return (
            <Grid container className={clsx(classes.rootSour, "pdfWrapper")}>
                <Grid item xs={12} className="btn-page">
                    <Grid container>
                        <Grid item xs={1}>
                            <Button className="btn-prev-begin" style={{height:'100%'}} onClick={() => onPageBegin()}><AiOutlineDoubleLeft /></Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button className="btn-prev" style={{height:'100%'}} onClick={() => onPage(0)}><FcPrevious /></Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Select className="select-page"
                                onChange={onChangeValue}
                                value={page}
                                options={arrPage.map(item => ({
                                    value: item.id,
                                    label: item.name
                                }))}
                                ref={ currentRef }
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button className="btn-next" style={{height:'100%'}} onClick={() => onPage(1)}><FcNext /></Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button className="btn-prev-end" style={{height:'100%'}} onClick={() => onPageEnd()}><BsChevronDoubleRight /></Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="col-pdf ">
                    <PDF
                        file={pdf}
                        onDocumentComplete={onDocumentComplete}
                        page={page}
                    />
                </Grid>
            </Grid>
    )

};
export default PdfViewer;