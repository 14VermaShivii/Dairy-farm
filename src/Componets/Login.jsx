import { useFormik } from "formik"
import { loginschema } from "./index";
import { NavLink } from "react-router-dom"
export function Login(){
    const initialValues = {
        email: "",
        password: ""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =

        useFormik({
            initialValues: initialValues,
            validationSchema: loginschema,
        })
    return (
        <form onSubmit={handleSubmit} action="">
        <h1>Login</h1>
        <div className="input-box">
            <input
                type="text"
                placeholder="Email"
                
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {/* <FontAwesomeIcon icon={faUser} /> */}
        </div>
        {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
        ) : null}
        <div className="input-box">

            <input
                type="Password"
                placeholder="Password"
                
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {/* <FontAwesomeIcon icon={faLock} /> */}
        </div>
        {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
        ) : null}

        <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <NavLink to="/Forgotpassword">Forgot Password ?</NavLink>
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
            <p>Don't have a account ?<NavLink to="/Signup">signup</NavLink></p>
        </div>
    </form>
    )
}