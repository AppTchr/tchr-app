import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Link href="/auth/forgot-password">Esqueceu sua senha ?</Link>
      </div>
      <div>
        <Link href="/auth/register">Criar sua conta</Link>
      </div>
    </div>
  );
}
