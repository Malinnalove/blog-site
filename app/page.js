import Header from "@/components/Header";
import Script from "next/script";

export default function Page(){
  return (
    <div className="site">
      <div className="backdrop" aria-hidden="true"></div>

      <Header />

      <main>
        {/* HOME */}
        <section className="view active" id="view-home">
          <section className="card hero reveal" style={{["--delay"]:"220ms"}}>
            <p className="hello">HELLO, THIS IS A QUIET PROFILE</p>
            <h1>I am <span className="soft-underline">22</span> & enjoy quiet mornings.</h1>
            <p className="lead">A tiny personal page to gift a friend — minimal, warm, and gentle.</p>
          </section>
          <section className="card section reveal" style={{["--delay"]:"360ms"}}>
            <h2>About the person</h2>
            <ul className="text" style={{margin:0, paddingLeft:"1rem"}}>
              <li>Age: <strong>22</strong></li>
              <li>Hobbies: films, coffee, little walks, writing short notes</li>
              <li>Goal: keep a simple diary & collect small moments</li>
            </ul>
            <p className="text" style={{marginTop:6}}>Tip: click the avatar in the header to see <em>About</em>.</p>
          </section>
        </section>

        {/* WRITING */}
        <section className="view" id="view-writing">
          <section className="card section reveal" style={{["--delay"]:"220ms"}}>
            <h2>Writing</h2>
            <p className="text">Previous notes appear below. Use the side button to write a new one.</p>
            <div className="list" id="list"></div>
          </section>
        </section>

        {/* ABOUT */}
        <section className="view" id="view-about">
          <section className="card hero reveal" style={{["--delay"]:"220ms"}}>
            <div className="profile">
              <div className="avatar-lg"><img id="avatarLgImg" alt=""/></div>
              <div>
                <h2 className="name" id="aboutName">Your Name</h2>
                <p className="lead" id="aboutLead">This site is a small, gentle space to collect moments — notes, tiny thoughts, and a soft record of days.</p>
                <div className="about-actions">
                  {/* 仅管理员可见 */}
                  <button className="mini-btn admin-only" id="editAbout">✏️ Edit About</button>
                  <button className="mini-btn admin-only" id="changeAvatar">🖼️ Change Avatar</button>
                  <input type="file" id="avatarInput" accept="image/*" hidden />
                </div>
              </div>
            </div>
          </section>
          <section className="card section reveal" style={{["--delay"]:"360ms"}}>
            <h2>About this site</h2>
            <p className="text" id="aboutSite">Built as a gift: minimal, warm, and private by default. No login, no pressure — just words.</p>
          </section>
          <section className="card section reveal" style={{["--delay"]:"480ms"}}>
            <h2>Life timeline</h2>
            <ol className="timeline text" id="aboutTimeline">
              <li><strong>2003</strong> — Born somewhere calm.</li>
              <li><strong>2018–2021</strong> — Discovered films, coffee, and morning walks.</li>
              <li><strong>2022</strong> — Started writing small notes.</li>
              <li><strong>2024–Now</strong> — Keeping a quiet diary online.</li>
            </ol>
          </section>
        </section>
      </main>

      <footer className="reveal" style={{["--delay"]:"520ms"}}>
        © <span id="y"></span> A Quiet Corner — calm colors & quiet code.
      </footer>

      {/* Compose Drawer (Writing) */}
      <div className="drawer" id="drawer" aria-hidden="true" role="dialog" aria-label="Compose">
        <div className="drawer-panel">
          <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"}}>
            <strong id="composeTitle">Write a note</strong>
            <button className="btn" id="closeCompose" aria-label="Close composer">Close</button>
          </header>
          <div style={{display:"grid",gap:"12px"}}>
            <label className="field">
              <span>Title</span>
              <input id="title" className="input" placeholder="A tiny title" />
            </label>
            <label className="field">
              <span>Content</span>
              <textarea id="content" className="area" placeholder="Write something gentle..."></textarea>
            </label>
          </div>
          <footer style={{display:"flex",justifyContent:"flex-end",gap:"10px"}}>
            <button className="btn" id="clearDraft">Clear</button>
            <button className="btn primary admin-only" id="save">Save</button>
          </footer>
        </div>
      </div>

      {/* About Drawer */}
      <div className="drawer" id="aboutDrawer" aria-hidden="true" role="dialog" aria-label="Edit About">
        <div className="drawer-panel">
          <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"}}>
            <strong>Edit About</strong>
            <button className="btn" id="closeAbout" aria-label="Close about editor">Close</button>
          </header>
          <div style={{display:"grid",gap:"12px"}}>
            <label className="field"><span>Name</span><input id="aboutNameInput" className="input" placeholder="Your Name" /></label>
            <label className="field"><span>Lead (short bio)</span><textarea id="aboutLeadInput" className="area" placeholder="A short line about you..."></textarea></label>
            <label className="field"><span>About this site</span><textarea id="aboutSiteInput" className="area" placeholder="What this site is for..."></textarea></label>
            <label className="field"><span>Timeline (one item per line)</span><textarea id="aboutTimelineInput" className="area" placeholder={`YYYY — A thing\nYYYY–YYYY — Another thing`}></textarea></label>
          </div>
          <footer style={{display:"flex",justifyContent:"flex-end",gap:"10px"}}>
            <button className="btn admin-only" id="resetAbout">Reset</button>
            <button className="btn primary admin-only" id="saveAboutBtn">Save</button>
          </footer>
        </div>
      </div>

      {/* Reader Overlay */}
      <div className="overlay" id="overlay" aria-hidden="true" role="dialog" aria-label="Reader">
        <div className="reader">
          <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"}}>
            <div>
              <div id="readTitle" style={{fontWeight:800}}></div>
              <div id="readMeta" className="meta"></div>
            </div>
            <button className="btn" id="closeReader" aria-label="Close reader">Close</button>
          </header>
          <main><article id="readBody" className="text" style={{whiteSpace:"pre-wrap"}}></article></main>
        </div>
      </div>

      {/* Side compose button —— 仅管理员可见 */}
      <button className="compose admin-only" id="composeBtn" style={{display:"none"}}>✍️ Compose</button>
      <Script src="/app.js" strategy="afterInteractive" />
    </div>
  );
}
