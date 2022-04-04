import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

const Button = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return <div>
    Active Theme: ({theme}) <br/>
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>;
  
}

// export default Button;

// import {useTheme} from "./context/ThemeContext"  ####custom context kullanıldıbir bakıma kendi hook umuzu yazıyoruz

// const Button = () => {
//   const {theme, setTheme} = useTheme()
//   return <div>
//     Active Theme: ({theme}) <br/>
//     <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
//     </div>;
  
// }

// export default Button;