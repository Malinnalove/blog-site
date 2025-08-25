'use client';
import { signIn } from "next-auth/react";
export default function Login() {
  return (
    <main style={{maxWidth:480,margin:"40px auto",padding:16}}>
      <h1 style={{fontSize:24,fontWeight:700,marginBottom:12}}>Admin Login</h1>
      <button onClick={()=>signIn("github")} style={{padding:"8px 14px",background:"#000",color:"#fff",borderRadius:6}}>
        Sign in with GitHub
      </button>
    </main>
  );
}
