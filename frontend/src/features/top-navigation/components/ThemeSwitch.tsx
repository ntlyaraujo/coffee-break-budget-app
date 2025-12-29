import { useSwitch, VisuallyHidden } from "@heroui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../../context";
const ThemeSwitch = (props: any) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { Component, slots, getBaseProps, getInputProps, getWrapperProps } =
    useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: ["w-8 h-8 rounded-md"],
          })}
          onClick={toggleTheme}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
