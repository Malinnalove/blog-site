'use client';
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Header(){
  const { data: session } = useSession();
  const isAuthed = !!session;

  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav">
        <Link className="nav-link" href="/">home</Link>
        <Link className="nav-link" href="/writing">writing</Link>
        <Link className="nav-link" href="/about">about</Link>

        {!isAuthed ? (
          <Link className="nav-link nav-manage" href="/login">manage</Link>
        ) : (
          <div className="admin-wrap">
            <button
              className="nav-link nav-manage"
              onClick={() => setOpen(v => !v)}
              aria-expanded={open}
              aria-haspopup="menu"
            >
              manage
            </button>

            {open && (
              /* 用 portal 可彻底避免被画布盖住；此处简化为绝对定位 + 高 z-index */
              <div className="admin-menu" role="menu">
                <Link className="admin-item" href="/new">New post</Link>
                <Link className="admin-item" href="/drafts">Drafts</Link>
                <button className="admin-item danger" onClick={() => signOut({ callbackUrl: "/" })}>
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
