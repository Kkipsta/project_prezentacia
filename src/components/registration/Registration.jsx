import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import "./registration.css";

import { emailRegex, passwordRegex } from "../utils/Regex";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();

  const onSubmit = async (data) => {
    localStorage.setItem("name_surname", data.name_surname);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    localStorage.setItem("isAuth", true);
    history.push("/");
  };

  return (
    <>
      <section className="login_registration">
        <div className="login_registration_container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="base_form_styles registration-forms">
              <div className="title">
                <h1 className="f-size-h7 f-weight-bl">რეგისტრაცია</h1>
              </div>
              <div className="registration-grid grid_base_styles">
                <div className="base_input_styles full_name">
                  <div className="heading">
                    <h1 className="f-size-p6 f-weight-b">სახელი და გვარი</h1>
                  </div>

                  <input
                    name="full_name"
                    type="text"
                    placeholder="your name"
                    {...register("name_surname", {
                      required: "აუცილებლად მიუთითეთ თქვენი სახელი და გვარი",
                      minLength: {
                        value: 2,
                        message: "თქვენი სახელი 2 ასოზე პატარაა?",
                      },
                      maxLength: {
                        value: 30,
                        message: "თქვენი სახელი 30 ასოზე დიდია?",
                      },
                    })}
                  />

                  {errors.name_surname && (
                    <p className="form_errors f-size-p6 f-weight-r">
                      {errors.name_surname.message}
                    </p>
                  )}
                </div>

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
    </>
  );
};

export default Registration;
