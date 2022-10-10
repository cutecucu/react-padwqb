import React from "react";
import "./style.css";
function Header(props){
  return <h1>{props.title}</h1>
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
      <Header title="리액트독학"></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
