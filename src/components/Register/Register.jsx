import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  if (error || gError || updateError) {
    signInError = <p>{error?.message || gError?.message}</p>;
  }

  if (loading || gLoading || updating) {
    return <h1>Loading...</h1>;
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
    navigate("/home");
  };
  return (
    <div>
      <div className="register-form">
        {/* 
          //* ================= reg. form ===============
          */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 
          //* ==================== name ======================
*/}
          <div>
            <label>
              <span>Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "name required",
                },
              })}
            />
            <label>
              {errors.name?.type === "required" && (
                <span>{errors.name.message}</span>
              )}
            </label>
          </div>
          {/* 
          //* ==================== email ======================
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

          <input type="submit" value="register" />
        </form>
        <p>
          already a member?
          <Link to="/login">Login</Link>
        </p>
        {/* 
        //* divider
        */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ width: "50%", height: "3px", background: "#000" }}
          ></div>
          <p style={{ margin: "0 1rem" }}>Or</p>
          <div
            style={{ width: "50%", height: "3px", background: "#000" }}
          ></div>
        </div>

        {/* 
          //* ============== Google sign in ===============
          */}
        <button onClick={() => signInWithGoogle()}>Continue with google</button>
      </div>
    </div>
  );
};

export default Register;
