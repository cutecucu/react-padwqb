import React from "react";
import "./style.css";
function Header(){
  return <h1>메이크메이트:)</h1>
}
function Nav(){
  return <nav>
    <ol>
      <li><a>html</a></li>
      <li><a>css</a></li>
      <li><a>js</a></li>
    </ol>
  </nav>
}

function Article(){
  return <article>
    <h2>Welcom</h2>
    Hello, WEB
  </article>
}
export default function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
