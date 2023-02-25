import { statusHeaderInputs } from "./interfaces";

export default function StatusHeader({
  Status,
  imgPath,
  StatusValue,
  customStyle,
  customClassName,
  customImageStyle,
}: statusHeaderInputs) {
  return (
    <div className="py-2 flex text-sm flex-1 border bg-white rounded-lg justify-center items-center">
      <img src={`${imgPath}`} alt={Status} className={customImageStyle} />
      <span className="m-2 text-sm">{Status} </span>
      <span className={customClassName} style={customStyle}>
        {StatusValue}
      </span>
    </div>
  );
}
