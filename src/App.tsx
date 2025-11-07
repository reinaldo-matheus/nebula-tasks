import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash.svg?react";
import PlusIcon from "./assets/icons/Plus.svg?react";
import PensilIcon from "./assets/icons/Pencil.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/XIcon.svg?react";
import Icon from "./components/icons";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";

export default function App() {
  return (
    <div className="grid gap-3">
      <div>
        <Text>Hello Nebula Tasks!</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={PlusIcon} />
        <Icon svg={PensilIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} className="fill-red-base" />
      </div>

      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>

      <div className="flex gap-2">
        <ButtonIcon icon={TrashIcon} variant="primary" />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>
    </div>
  );
}
