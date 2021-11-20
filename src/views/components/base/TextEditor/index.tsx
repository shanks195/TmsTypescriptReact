import { 
    useRef, 
    useEffect, 
    useImperativeHandle, 
    CSSProperties, 
    ForwardRefRenderFunction, 
    forwardRef} from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import clsx from "clsx";

import textEditorStyle from "./styles";

export interface TextEditorRef {
    setValue(value: string): void;
    getValue(): string;
}

interface ITextEditorProps {
    value?: string;
    width?: string | number;
    height?: string | number;
    onChange?(value: string): void;
}

export interface TextEditorBaseComponent extends ForwardRefRenderFunction<TextEditorRef, ITextEditorProps> {}

const TextEditorBase: TextEditorBaseComponent = (props, ref) => {

    const classes = textEditorStyle();
    const { value = '', onChange, width = '100%', height = '100%' } = props;
    const { quill, quillRef } = useQuill();
    const QuillBox = useRef<HTMLDivElement>(null);

    const textEditorClass = clsx(classes.root, "mscb-texteditor-root");

    useImperativeHandle(ref, () => ({
        getValue: () => quill?.root.innerHTML ?? '',
        setValue: (val: string) => quill?.clipboard.dangerouslyPasteHTML(val)
    }));

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(value);
            quill.on('text-change', () => onChange && onChange(quill.root.innerHTML));

            const toolbars = QuillBox.current?.querySelector('ql-toolbar')?.querySelectorAll('button, select');
            toolbars && Array.from(toolbars).map(t => 
                t.setAttribute('tabindex', '-1')
            );
        }
    }, [quill, value, onChange]);

    const wrapperCss: CSSProperties = {
        width: width
    };

    return (
        <div className={textEditorClass} style={ wrapperCss } ref={ QuillBox }>
            <div style={{ minHeight: height }} ref={quillRef} />
        </div>
    );
}

export default forwardRef(TextEditorBase);
