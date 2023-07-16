import AuthBox from "../Organisms/AuthBox";

function RegisterTemplate() {
  return (
    <div className="App w-screen h-screen bg-[#FAFBFC] flex items-center justify-center">
      <div className="w-full h-full sm:w-[400px] sm:h-[550px]">
        <AuthBox formType="register" />
      </div>
    </div>
  );
}

export default RegisterTemplate;
