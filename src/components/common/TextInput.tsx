interface InputProps {
  type: string;
  category: string;
  value: string;
  marginBottom: number;
  onUserInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  type,
  category,
  value,
  marginBottom,
  onUserInfoChange,
}: InputProps) {
  const containerCSS = `flex flex-col items-center justify-center mb-${marginBottom}`;

  return (
    <div className={containerCSS}>
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
