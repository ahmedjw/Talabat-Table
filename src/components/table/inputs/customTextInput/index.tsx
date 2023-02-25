import textInputProps from "./interfaces";

export default function CustomTextInput({ content, Color }: textInputProps) {
  return (
    <td className="py-4 flex-1 flex items-center">
      <span
        className={`inline-flex lg:px-4 lg:py-2 items-center  rounded-lg  border px-1 py-1 lg:text-sm font-semibold leading-3 xl:leading-6`}
        style={
          window.innerWidth < 1000
            ? {
                fontSize: "0.625rem",
                color: `${Color}`,
                borderColor: `${Color}`,
                backgroundColor: "#A6C44A26",
                borderRadius: "10",
                opacity: 1,
              }
            : {
                color: `${Color}`,
                borderColor: `${Color}`,
                backgroundColor: "#A6C44A26",
                borderRadius: "10",
                opacity: 1,
              }
        }
      >
        {content}
      </span>
    </td>
  );
}
