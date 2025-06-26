import { useEffect } from "react";
import NavBar from "./NavBar"
function Home() {
    const bg = getComputedStyle(document.body).backgroundColor;
  return (
    <div>
      <NavBar />
      <aside className="menu mt-4 ml-5 " style={{ width: "200px" }}>
  <p className="menu-label"><strong>TEMPLATES AND TASKS</strong></p>
  <ul className="menu-list">
    <li><a className="p-1 m-1 is-size-7 has-text-weight-medium">Dashboard</a></li>
    <li>
      {/* <input className="p-1 m-1 is-size-7 has-text-weight-medium">xxxxxxxxxxxxxxxxxxxxxxxxx-Customers</input> */}
      <input className="p-1 m-1 is-size-7 has-text-weight-medium " onFocus={(e) => {
    e.currentTarget.style.outline = 'none';
    e.currentTarget.style.boxShadow = 'none';
  }} style={{ border: 'none', boxShadow: 'none', backgroundColor: bg, color: 'white'  }} value="xxxxxxxxxxxxxxxxxxxxxxxxx-Customers"/>
      <ul>
        <li><a className="p-0 m-1 is-size-7 has-text-weight-medium">Plugins</a></li>
        <li><a className="p-0 m-1 is-size-7 has-text-weight-medium">Add a member</a></li>
      </ul>
    </li>
  </ul>
</aside>
</div>
  ) 
}
export default Home