import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //*? using useEffect for avoiding error msg (render update)
  //* user pawa gele jekhan theke asce sekhane pathay dewa
  useEffect(() => {
    // console.log(user || gUser);
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  let signInError;

  if (error || gError) {
    gError = (
      <p className="text-red-500 ">{error?.message || gError?.message}</p>
    );
  }
  // * passing true for showing loading always [styling purpose]
  // if (true || loading || gLoading) {
  //   return <Loading />;
  // }
  if (loading || gLoading) {
    return <h1>Loading...</h1>;
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="register-form">
      <h2>Login</h2>
      {/* 
          //* ================= login form =================
          */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 
          //* ==================== Email ======================
*/}
        <div>
          <label>
            <span>Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: {
                value: true,
                message: "email required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "provide a valid email",
              },
            })}
          />
          <label>
            {errors.email?.type === "required" && (
              <span>{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>{errors.email.message}</span>
            )}
          </label>
        </div>

        {/* 
//* ==================== Password ======================
*/}
        <div>
          <label>
            <span>Password</span>
          </label>
          <input
            type="password"
            placeholder="Your password"
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 6,
                message: "must be 6 characters or longer",
              },
            })}
          />
          <label>
            {errors.password?.type === "required" && (
              <span>{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>{errors.password.message}</span>
            )}
          </label>
        </div>

        {signInError}

        <input type="submit" value="Login" />
      </form>
      <p>
        New to Doctor Portal?
        <Link to="/register">Create New Account</Link>
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "50%", height: "3px", background: "#000" }}></div>
        <p style={{ margin: "0 1rem" }}>Or</p>
        <div style={{ width: "50%", height: "3px", background: "#000" }}></div>
      </div>

      {/* 
          //* ============== Google sign in ===============
          */}
      <button
        style={{ padding: "1rem", margin: "1rem  auto", display: "block" }}
        onClick={() => signInWithGoogle()}
      >
        Continue with google
      </button>
    </div>
  );
};

export default Login;
