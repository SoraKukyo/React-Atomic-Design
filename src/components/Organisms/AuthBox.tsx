import AuthForm from "../Molecules/AuthForm";

interface AuthBoxProps {
  formType: "login" | "register";
}

function AuthBox({ formType }: AuthBoxProps) {
  return (
    <div className="bg-white px-4 w-full h-full flex flex-col items-center  justify-center sm:border-[1px] sm:rounded border-white sm:shadow-xl ">
      <div className="flex sm:items-center sm:justify-center ">
        <div className=" flex flex-row justify-start items-center  sm:justify-center w-[90%]">
          <img
            src="/assets/icons/PolliFy.svg"
            alt="logo"
            className="pb-12 w-44 "
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <AuthForm formType={formType} />
      </div>
    </div>
  );
}

export default AuthBox;
