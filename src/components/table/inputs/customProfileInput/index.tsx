import profileInputProps from "./interfaces";

export default function CustomProfileInput({
  userName,
  Email,
  ImageUrl,
}: profileInputProps) {
  return (
    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
      <div className="relative h-10 w-10">
        <img
          className="h-full w-full rounded-full object-cover object-center"
          src={`${ImageUrl}`}
          alt=""
        />
        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
      </div>
      <div className="text-sm">
        <div className="font-medium text-gray-700">{userName}</div>
        <div className="text-gray-400">{Email}</div>
      </div>
    </th>
  );
}
