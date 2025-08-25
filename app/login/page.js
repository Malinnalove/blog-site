'use client';
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const [err, setErr] = useState("");

  async function onSubmit(e){
    e.preventDefault();
    setErr("");
    const res = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/",
      username, password
    });
    // 使用 redirect: true，NextAuth 会自动跳转；失败会回到 /login?error=CredentialsSignin
  }

  return (
    <main style={{maxWidth:480,margin:"40px auto",padding:16}}>
      <h1 style={{fontSize:24,fontWeight:700,marginBottom:12}}>Admin Login</h1>
      <form onSubmit={onSubmit} style={{display:"grid",gap:12}}>
        <input placeholder="Username" value={username} onChange={e=>setU(e.target.value)} className="input"/>
        <input placeholder="Password" type="password" value={password} onChange={e=>setP(e.target.value)} className="input"/>
        <button className="btn primary" type="submit">Sign in</button>
      </form>
      {err && <p style={{color:"crimson"}}>{err}</p>}
    </main>
  );
}
