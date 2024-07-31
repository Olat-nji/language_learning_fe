"use client";

const CheckboxList = ({
  onChange,
  checked,
}: {
  onChange: () => void;
  checked: boolean;
}) => {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <label className="flex cursor-pointer items-center text-lg">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`form-checkbox mr-2 h-7 w-7 rounded border-gray-300 ${
            checked ? "accent-slate-950" : "accent-gray-300"
          } focus:ring-accent-slate-950 focus:outline-none focus:ring-0 active:accent-slate-950`}
        />
        Remember Me
      </label>
    </div>
  );
};

export default CheckboxList;
