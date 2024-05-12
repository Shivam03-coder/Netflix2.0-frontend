import React, { useEffect } from "react";
import { FaKey } from "react-icons/fa";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../app/redux_slices/Api/Userapiquery.slice";
import { CloseSignupform } from "../../app/redux_slices/Appstate.slice";

// SIGN UP FORM COMPONENET

function Signupform() {
  // REACT-FORM-HOOK

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm();

  const [RegisterUser, { isLoading }] = useRegisterMutation();

  const dispatch = useDispatch();

  // SIGNING IN USER

  const HandleSignupForm = async ({ username, email, password }) => {
    try {
      const resp = await RegisterUser({ username, email, password }).unwrap();
      toast.success(resp?.message);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  // NAVIGATE TO LOGIN PAGE && RESET FORM

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setTimeout(() => {
        dispatch(CloseSignupform());
      }, 3000);
    }
  }, [isSubmitSuccessful]);

  return (
    <section className="bg-darken mx-auto pt-10 py-10 text-white rounded-2xl">
      <form
        onSubmit={handleSubmit(HandleSignupForm)}
        className="flex flex-col justify-center items-center space-y-7"
        noValidate
      >
        <h1 className="text-4xl font-Popins font-semibold">USER REGISTER</h1>
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
            <span className="loading loading-spinner loading-lg" />
          ) : (
            "REGSITER"
          )}
        </button>
      </form>
    </section>
  );
}

export default Signupform;
