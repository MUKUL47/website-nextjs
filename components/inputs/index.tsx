import React, { InputHTMLAttributes } from "react";
interface Props extends InputHTMLAttributes<any> {
  inputType?: InputFieldTypes;
  label?: string;
}
export enum InputFieldTypes {
  TEXT,
  TEXT_AREA,
}
function Input({ inputType, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name} className="text-xs font-bold text-gray-600">
        {props.label || props.placeholder}
      </label>
      <input
        className="form-inp p-2 rounded-md border bg-gray-400 focus:outline-none placeholder:text-gray-600"
        {...props}
      />
    </div>
  );
}
function TextArea({
  ...props
}: React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name} className="text-xs font-bold text-gray-600">
        {props.label || props.placeholder}
      </label>
      <textarea
        {...props}
        className="form-inp p-2 rounded-md border bg-gray-400 focus:outline-none  placeholder:text-gray-600"
      ></textarea>
    </div>
  );
}
export { Input, TextArea };
