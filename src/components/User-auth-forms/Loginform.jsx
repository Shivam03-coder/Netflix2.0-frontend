import React, { useEffect } from "react";
import { FaKey } from "react-icons/fa";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../app/redux_slices/Api/Userapiquery.slice";
import { setcredentials } from "../../app/redux_slices/Authstate.slice";
import { toast } from "react-toastify";
import { Opensignupform } from "../../app/redux_slices/Appstate.slice";

// LOGIN FORM COMPONENET
function Loginform() {
  // REACT-FORM-HOOK

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const [login, { isLoading, isError }] = useLoginMutation();

  const { User } = useSelector((state) => state.auth);

  // LOGGING IN USER

  const HandleLoginform = async ({ username, email, password }) => {
    try {
      const res = await login({ username, email, password }).unwrap();
      dispatch(setcredentials({ ...res?.data?.user }));
      toast.success(res?.message);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  // ACTION TO CHANGE FORM TO SIGNUP FORM

  const changeAuthform = () => {
    dispatch(Opensignupform());
  };

  // NAVIGATE ON LOGIN && RESET FORM

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }

    if (User) {
      setTimeout(() => {
        Navigate("/movies");
      }, 2000);
    }
  }, [isSubmitSuccessful, User]);

  return (
    <section className="bg-darken rounded-2xl mx-auto pt-10 pb-24 text-white">
      <form
        onSubmit={handleSubmit(HandleLoginform)}
        className="flex flex-col justify-center items-center space-y-7"
        noValidate
      >
        <h1 className="text-4xl font-Popins font-semibold">LOG IN</h1>
        <div className="fullname">
          <label className="inputboxes input  flex items-center gap-2">
            <i>
              <MdAccountCircle />
            </i>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="grow"
              placeholder="Name"
            />
          </label>
          <h1 className="text-xl mt-2 text-danger">
            {errors.username?.message}
          </h1>
        </div>
        <div className="email">
          <label className="inputboxes input  flex items-center gap-2">
            <i>
              <MdEmail />
            </i>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="grow"
              placeholder="Email"
            />
          </label>
          <h1 className="text-xl mt-2 text-danger">{errors.email?.message}</h1>
        </div>
        <div className="password">
          <label className="input inputboxes  flex items-center gap-2">
            <i>
              <FaKey />
            </i>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="grow"
              placeholder="*******"
            />
          </label>
          <h1 className="text-xl mt-2 text-danger">
            {errors.password?.message}
          </h1>
        </div>
        <button
          type="submit"
          className="btn w-72 btn-success text-lg font-bold"
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            "LOG IN"
          )}
        </button>
        <h1 className="text-xl hover:underline">
          <a href="#">forgot password ?</a>
        </h1>
        <div className="flex flex-col w-[80%] space-y-5">
          <h1 className="text-base font-Popins">
            New to Netfix?{" "}
            <a
              onClick={changeAuthform}
              className="hover:underline text-cyan cursor-pointer"
            >
              Sign up now.
            </a>
          </h1>
          <h1 className="text-[15px] ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Link className="text-cyan underline">Learn more.</Link>
          </h1>
        </div>
      </form>
    </section>
  );
}

export default Loginform;
