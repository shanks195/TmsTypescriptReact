import { FunctionComponent } from "react";
import clsx from "clsx";
import inlineStyle from "./style";

interface CardInlineProps {
  className?: string;
  title:string;
  clsContent?: string;
}

interface CardInlineComponent extends FunctionComponent<CardInlineProps> {}

const CardInline: CardInlineComponent = (props) => {
  const classes = inlineStyle();

  const { className,title,children, clsContent } = props;

  const cardInlineClass = clsx(
    classes.root,
    "mscb-inline-card",
    className
  );
  return (
    <div className={cardInlineClass}>
      <fieldset className="inline-card">
        {title ? <legend className="legend-title">{title}</legend> : null}
        <div className={"legend-content " + clsContent}>{children}</div>
      </fieldset>
    </div>
  );
};

export default CardInline;
