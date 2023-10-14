import { useState } from 'react'
import { ThemeContext, themes } from "./ThemeContext";
import Button from './Button';

function UseContextEx1() {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light
    setTheme(newTheme)
    console.log()
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}
}>
      <Button />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default UseContextEx1