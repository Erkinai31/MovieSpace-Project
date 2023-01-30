import "./FormInput.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormInput = ({ title, handleClick}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    handleClick(data.email, data.password);
  }

  return (
    <div className="form">
      <div className="form_content">
        <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__login">
            <input
              type="email"
              required={true}
              {...register("email", {
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "The email you entered is incorrect",
                },
              })}
              placeholder="email"
            />
            <div>
              {errors?.email && (
                <p style={{ color: "red" }}>{errors?.email?.message}</p>
              )}
            </div>
            
            <input
              type="password"
              required={true}
              {...register("password", {
                required: "password must not be empty",
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/,
                  message: "the password must have at least one upper and lowercase letter and number and be more than 8 values",
                },
              })}
              placeholder="password"
            />
            <div>
              {errors?.password && (
                <p style={{ color: "red" }}>{errors?.password?.message}</p>
              )}
            </div>
            <Button type="submit" style={{ color: "white" }} className='btn-lg' data-toggle="button" aria-pressed="false" autocomplete="off">
              {title}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { FormInput };
