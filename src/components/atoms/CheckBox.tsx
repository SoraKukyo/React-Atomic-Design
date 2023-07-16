import { ChangeEvent } from "react";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <div>
      <label className="flex flex-row items-center space-x-2 text-secondary text-sm">
        <input
          className=" w-[18px] h-[18px] mr-3
           text-blue-600 bg-gray-100 border-secondary
           focus:ring-gray-400  focus:ring-1"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
