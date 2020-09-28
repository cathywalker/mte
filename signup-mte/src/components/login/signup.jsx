import React from "react";
import { useForm } from "react-hook-form";

export function Signup() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {}
  });

  const onSubmit = data => console.log(data);

  const errorMessage = "Please fill out this field";

  return (
    <div className="base-container">
      <div className="header">Sign Up For Free</div>
      <div className="content">
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="names">
                <div className="form-group">
                  <input
                    type="text"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    name="firstName"
                    ref={register({ required: true })}
                    id="firstNameSignup"
                    className={errors.firstName ? "input-error" : ""}
                    placeholder="First Name"
                  />
                  <div className="placeholder-signup-firstname">
                    <span>*</span>
                  </div>
                  {errors.firstName && (
                    <div className="popup">
                      <span className="popuptext-firstname">
                        {errorMessage}
                      </span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    aria-invalid={errors.lastName ? "true" : "false"}
                    name="lastName"
                    ref={register({ required: true })}
                    id="lastNameSignup"
                    className={errors.lastName ? "input-error" : ""}
                    placeholder="Last Name"
                  />
                  <div className="placeholder-signup-lastname">
                    <span>*</span>
                  </div>
                  {!errors.firstName && errors.lastName && (
                    <div className="popup">
                      <span className="popuptext-lastname">{errorMessage}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                aria-invalid={errors.email ? "true" : "false"}
                name="email"
                ref={register({ required: true })}
                id="email"
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
                id="password"
                className={errors.password ? "input-error" : ""}
                placeholder="Set A Password"
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

            <input
              type="submit"
              name="submit"
              value="GET STARTED"
              className="btn btn-submit"
              id="getstarted"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
