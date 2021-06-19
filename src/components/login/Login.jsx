import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { emailRegex, passwordRegex } from "../utils/Regex";
import { checkIfUserExists } from "../../hooks/isAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();

  const onSubmit = async (data) => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    checkIfUserExists(email, password);
    history.push("/");
  };

  return (
    <section className="login_registration">
      <div className="login_registration_container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="base_form_styles registration-forms">
            <div className="title">
              <h1 className="f-size-h7 f-weight-bl">რეგისტრაცია</h1>
            </div>
            <div className="registration-grid grid_base_styles">
              <div className="base_input_styles email">
                <div className="heading">
                  <h1 className="f-size-p6 f-weight-b">ელექტრონული ფოსტა</h1>
                </div>

                <input
                  name="email"
                  width="100%"
                  type="email"
                  placeholder="Your Email:"
                  color="white"
                  {...register("email", {
                    required: "აუცილებლად მიუთითეთ თქვენი ელექტრონული ფოსტა",
                    pattern: {
                      value: emailRegex,
                      message: "სწორად ჩაწერეთ თქვენი ელექტრონული ფოსტა",
                    },
                  })}
                />

                {errors.email && (
                  <p className="form_errors f-size-p6 f-weight-r">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="base_input_styles password">
                <div className="heading">
                  <h1 className="f-size-p6 f-weight-b">Your Password:</h1>
                </div>

                <input
                  name="password"
                  width="100%"
                  type="password"
                  placeholder="Your Password"
                  color="white"
                  {...register("password", {
                    required: "აუცილებლად მიუთითეთ თქვენი პაროლი",
                    minLength: {
                      value: 5,
                      message: "თქვენი პაროლი 5 სიმბოლოზე პატარაა",
                    },
                    pattern: {
                      value: passwordRegex,
                      message: "თქვენი პაროლი არ არის საკმარისად ძლიერი",
                    },
                  })}
                />

                {errors.password && (
                  <p className="form_errors f-size-p6 f-weight-r">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="submit_btn">
                <button type="submit">
                  <p>რეგისტრაცია</p>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
