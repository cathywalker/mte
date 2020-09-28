import React from "react";
import { useForm } from "react-hook-form";

export function Login() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit"
  });

  const onSubmit = data => console.log(data);

  const errorMessage = "Please fill out this field";

  return (
    <div className="base-container">
      <div className="header" id="header">
        Welcome Back!
      </div>

      <div className="content">
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                aria-invalid={errors.email ? "true" : "false"}
                name="email"
                ref={register({ required: true })}
                id="emailLogin"
                className={errors.email ? "input-error" : ""}
                placeholder="Email Address"
              />

              <div className="placeholder">
                <span>*</span>
              </div>
              {!errors.firstName && !errors.lastName && errors.email && (
                <div className="popup">
                  <span className="popuptext">{errorMessage}</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                aria-invalid={errors.password ? "true" : "false"}
                name="password"
                ref={register({ required: true })}
                id="passwordLogin"
                className={errors.password ? "input-error" : ""}
                placeholder="Password"
              />
              <div className="placeholder">
                <span>*</span>
              </div>
              {!errors.firstName &&
                !errors.lastName &&
                !errors.email &&
                errors.password && (
                  <div className="popup">
                    <span className="popuptext">{errorMessage}</span>
                  </div>
                )}
            </div>
            <div className="forgot-password">
              <a href="#forgotpassword">Forgot Password?</a>
            </div>
            <input type="submit" value="LOGIN" className="btn btn-submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
