import { Create, Edit, Delete, Close } from "../icons";

export function IconButton({
  type,
  onClick,
}: {
  type: "create" | "edit" | "delete" | "close";
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
  }

  return <button onClick={onClick}>{icon}</button>;
}
