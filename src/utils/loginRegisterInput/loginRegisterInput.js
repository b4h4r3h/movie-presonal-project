import { useState } from "react"
import { LoginRegisterInputStyle } from "./loginRegisterInputStyle"

const LoginRegisterInput = ({ value, pattern, label, type, placeholder, error, onChange }) => {
    const [focused, setFocused] = useState(false)
    const handleBlur = () => {
        setFocused(true)
    }
    return (
        <LoginRegisterInputStyle>
            <label>{label}</label>
            <input
                value={value}
                pattern={pattern}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                focused={focused.toString()}
                onBlur={handleBlur}
            />
            <span>{error}</span>
        </LoginRegisterInputStyle>
    )
}
export default LoginRegisterInput