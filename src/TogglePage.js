    import React, { useContext } from "react";
    import { ThemeContext } from "./Themecontext";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
    import "./Mode.css";

    const ToggleTheme = () => {
        const { theme, toggleTheme } = useContext(ThemeContext);

        return (
            <div>
                <a className="ad" onClick={toggleTheme}>
                    <FontAwesomeIcon  icon={theme === "light" ? faMoon : faSun} />
                </a>
            </div>
        );
    };

    export default ToggleTheme;
