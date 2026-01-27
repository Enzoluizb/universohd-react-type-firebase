import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <div
      className="flex items-center justify-center bg-gray-50"
      style={{ minHeight: "calc(100vh - 6rem)" }}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Acesso ao Marketplace
        </h1>

        <LoginForm />
      </div>
    </div>
  );
}
