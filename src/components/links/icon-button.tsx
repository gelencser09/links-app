import { Create, Edit, Delete, Close, Copy } from "../icons";

export function IconButton({
  type,
  onClick,
}: {
  type: "create" | "edit" | "delete" | "close" | "copy";
  onClick?: () => void;
}) {
  let icon;
  switch (type) {
    case "create":
      icon = <Create />;
      break;
    case "edit":
      icon = <Edit />;
      break;
    case "delete":
      icon = <Delete />;
      break;
    case "close":
      icon = <Close />;
      break;
    case "copy":
      icon = <Copy />;
  }

  return (
    <button
      onClick={onClick}
      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm p-0.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      <span className="sr-only">{`${type} icon`}</span>
      {icon}
    </button>
  );
}
