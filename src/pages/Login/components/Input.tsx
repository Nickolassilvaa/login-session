import { ComponentType, HTMLInputTypeAttribute } from "react";

interface InputProps {
  id: HTMLInputTypeAttribute;
  icon: ComponentType;
  register?: unknown;
}

export default function Input({ icon: Icon, id, register }: InputProps) {
  return (
    <div className="flex justify-start items-center overflow-hidden pl-2 gap-1 bg-[#f2f2f2] w-full rounded focus-within:outline focus-within:outline-1 focus-within:outline-offset-2">
      <div className="text-black text-[18px]">
        <Icon />
      </div>
      <input
        type={id}
        {...(register ?? {})}
        className="placeholder:text-sm focus:outline-none focus:border-none placeholder:text-zinc-500"
      />
    </div>
  );
}
