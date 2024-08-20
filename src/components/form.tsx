export function TextInput({
  type = "text",
  name,
  label,
  placeholder = label,
  errors,
  icon,
}: {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  errors?: string[];
  icon: React.ReactNode;
}) {
  const withIcon = !!icon;

  const cn = `bg-gray-50 border border-gray-300 text-gray-900 text-sm ${
    withIcon ? "rounded-e-lg" : "rounded-lg"
  } focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;

  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="flex">
        {withIcon && (
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            {icon}
          </span>
        )}
        <input
          type={type}
          id={name}
          name={name}
          className={cn}
          placeholder={placeholder}
          required
        />
      </div>
      {errors
        ? errors.map((error: string, idx: number) => (
            <p
              key={"username-error" + idx}
              className="mt-2 text-sm text-red-600 dark:text-red-500"
            >
              {error}
            </p>
          ))
        : null}
    </div>
  );
}

export function SubmitButton({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {children || "Submit"}
    </button>
  );
}
