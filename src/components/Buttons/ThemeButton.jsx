import { Button } from "@/components/Buttons/Button";
import { Svg } from "@/components/Optimizing/Svg";
import { useTheme } from "@/context/ThemeProvider";

export function ThemeButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      rounded
      aria-label={`Change website theme to ${darkMode ? "Light" : "Dark"} mode`}
      className="absolute top-8 right-8 size-8"
    >
      {darkMode ? (
        <Svg
          variant="outline"
          width={18}
          height={18}
          draw={["M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"]}
        />
      ) : (
        <Svg
          variant="outline"
          width={18}
          height={18}
          draw={["M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"]}
        />
      )}
    </Button>
  );
}