import AuthBox from "../Organisms/AuthBox";

function LoginTemplate() {
  return (
    <div className="App w-screen h-screen bg-[#FAFBFC] flex items-center justify-center">
      <div className="w-full h-full sm:w-[400px] sm:h-[500px]">
        <AuthBox formType="login" />
      </div>
    </div>
  );
}

export default LoginTemplate;
