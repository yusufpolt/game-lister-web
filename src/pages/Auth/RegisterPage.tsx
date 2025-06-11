import auth_bg from "@/assets/img/auth_bg.png";
import background from "@/assets/img/background.png";
import Google from "@/assets/img/google.png";
import Steam from "@/assets/img/steam.png";
import { Button } from "@/components/ui/button";

function RegisterPage() {
  return (
    <div
      className="flex min-h-screen bg-[#090909] bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full gap-4 max-w-md">
          <h1 className="text-3xl text-center font-bold uppercase text-white mb-8">
            Kaydol
          </h1>

          {/* Form içeriği buraya gelecek */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <AuthInput label="NICK" placeholder="yunusemre" />
            <AuthInput label="EMAIL" placeholder="yunusemre@email.com" />
            <AuthInput label="ŞİFRE" placeholder="******" />
            <AuthInput label="TEKRAR ŞİFRE" placeholder="*****" />
          </div>
          <Button className="bg-[#5739F2] w-full mt-4 px-8  py-8 hover:bg-[#5739F2]/80 cursor-pointer">
            Kayıt Ol
          </Button>
          <div className="flex flex-row justify-center items-center my-10">
            <div className="w-[110px] h-[1px] bg-white/80" />
            <span className="bg-white/80 rounded-2xl px-4 py-2 text-xs">
              Steam veya Google
            </span>
            <div className="w-[110px] h-[1px] bg-white/80" />
          </div>
          <button className="flex flex-row mb-6 justify-center items-center gap-2 bg-[#E3F3FB] rounded-full  py-4 text-base w-full cursor-pointer">
            <img src={Google} alt="google" className="w-6 h-6" />
            <span>Google ile giriş yap</span>
          </button>
          <button className="flex flex-row justify-center items-center gap-2 bg-[#0E4774] rounded-full  py-4 text-base w-full cursor-pointer">
            <img src={Steam} alt="steam" className="w-6 h-6" />
            <span className="text-white">Steam ile giriş yap</span>
          </button>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${auth_bg})` }}
        />
      </div>
    </div>
  );
}

const AuthInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="flex flex-col bg-white px-4 py-3 rounded-xl">
      <label className="text-xs text-[#616161] mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className=" placeholder:text-[#BDBDBD] text-base outline-none border-none"
      />
    </div>
  );
};

export default RegisterPage;
