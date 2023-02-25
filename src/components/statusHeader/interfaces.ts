import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface statusHeaderInputs {
  Status: string;
  imgPath?:
    | string
    | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    | undefined;
  StatusValue?: String | number;
  customStyle?: Object;
  customClassName: string;
  customImageStyle?: string;
}
