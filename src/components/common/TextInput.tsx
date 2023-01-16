interface InputProps {
  type: string;
  category: string;
  value: string;
  onUserInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  type,
  category,
  value,
  onUserInfoChange,
}: InputProps) {
  return (
    <div className="flex flex-col mb-10 items-center justify-center">
      <div className="flex">
        <label
          htmlFor={category}
          className="block w-24 text-gray-200 font-bold text-lg mr-5"
        >
          {category}
        </label>
        <input
          type={type}
          id={category}
          name={category}
          value={value}
          onChange={onUserInfoChange}
          className="rounded-md py-1 px-3"
        />
      </div>
    </div>
  );
}
