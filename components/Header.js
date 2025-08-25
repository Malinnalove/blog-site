'use client';
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Header(){
  const { status, data } = useSession();
  const isAuthed = status === "authenticated";
  const [open, setOpen] = useState(false);

  return (
    <header className="reveal" style={{["--delay"]:"120ms"}}>
      <a className="brand" href="#home" id="brand" aria-label="Go to home">
        <span className="avatar" title="About"><img id="avatarImg" alt=""/></span>
        <span className="brand-name">A Quiet Corner</span>
      </a>
      <nav>
        <a className="nav-link is-active" data-route="home" href="#home"><span className="num">01</span>home</a>
        <a className="nav-link" data-route="writing" href="#writing"><span className="num">02</span>writing</a>

        {/* add / Admin（放在 about 前） */}
        {!isAuthed ? (
          <a className="nav-link" href="#" onClick={(e)=>{e.preventDefault(); signIn("github");}}>
            add
          </a>
        ) : (
          <div style={{position:"relative"}}>
            <a className="nav-link" href="#" onClick={(e)=>{e.preventDefault(); setOpen(o=>!o);}}>
              Admin ▾
            </a>
            {open && (
              <div style={{position:"absolute",top:"2.2rem",right:0,background:"#fff",border:"1px solid #ddd",borderRadius:10,boxShadow:"0 10px 24px rgba(0,0,0,.08)",padding:6,minWidth:160}}>
                <div style={{padding:"6px 10px"}}><Link href="/admin" onClick={()=>setOpen(false)}>Admin Home</Link></div>
                <div style={{padding:"6px 10px"}}>
                  <a href="#" onClick={(e)=>{e.preventDefault(); setOpen(false); signOut();}}>Sign out</a>
                </div>
              </div>
            )}
          </div>
        )}

        <a className="nav-link" data-route="about" href="#about"><span className="num">03</span>about</a>
      </nav>
    </header>
  );
}
