import React from 'react';
import Select from 'react-select';
import { themeOptions } from '../Utils/themeOptions';
import { useTheme } from '../Context/ThemeContext';
const Footer = () => {

    
    const { setTheme,theme} = useTheme();

    const handleChange = (e) => {
       setTheme(e.value);
       
       localStorage.setItem("theme", JSON.stringify(e.value));


    }
    return (
        <div className='footer'>
            <div className="links">
                <a href='https://github.com/sanatab' target='_blank'> <img className="icon" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" /> </a>
                <a href='https://www.linkedin.com/in/sana-tabassum-3279781ab/?originalSubdomain=in' target='_blank'>  <img className="icon" src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" /> </a>
                <a href='https://instagram.com/_sana__tabassum_' target='_blank'> <img  className="icon" src="https://wallpapers-clan.com/wp-content/uploads/2022/01/black-3d-instagram-icon-aesthetic.png" /> </a>
            </div>
            <div className="themeButton">

                  <Select  
                    onChange={handleChange}
                    options={themeOptions}
                    menuPlacement='top'
                     defaultValue={{label: theme.label, value: theme}}
                    styles = {{
                        control: (styles, state) => ({...styles,
                             borderColor: state.isFocused ? theme.color : theme.typeBoxtext,
                            backgroundColor: theme.typeBoxtext,
                             color: "white"
                            }),

                        menu: styles =>({...styles, backgroundColor: theme.background }),

                        option : ( styles, {isFocused}) =>{
                            return {
                                ...styles,
                                backgroundColor : (!isFocused) ? theme.background : theme.textColor ,
                                color: (!isFocused) ? theme.textColor : theme.background, 
                                cursor : 'pointer'
                            }
                        }
                    }}
                 />
            </div>
        </div>

    )
}

export default Footer