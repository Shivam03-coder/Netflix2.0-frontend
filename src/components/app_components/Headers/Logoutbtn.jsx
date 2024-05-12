import { useLogoutMutation } from "../../../app/redux_slices/Api/Userapiquery.slice";
import { clearcredentials } from "../../../app/redux_slices/Authstate.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdLogOut } from "react-icons/io";
import { useMediaQuery } from "@uidotdev/usehooks";

function Logoutbtn() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const [logoutuser, { isLoading }] = useLogoutMutation();

  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const LogoutUser = async () => {
    try {
      const resp = await logoutuser().unwrap();
      dispatch(clearcredentials());
      toast.success(resp.message);
      setTimeout(() => {
        Navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={LogoutUser} className="btn btn-accent">
      {isLoading ? (
        <span className="loading loading-dots loading-lg" />
      ) : isSmallDevice ? (
        <i className="text-3xl text-black">
          <IoMdLogOut />
        </i>
      ) : (
        "LOG OUT"
      )}
    </button>
  );
}

export default Logoutbtn;
