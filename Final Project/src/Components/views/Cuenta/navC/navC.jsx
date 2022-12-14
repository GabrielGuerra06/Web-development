import React from 'react';

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const SideNav = (props) => {
return (
  <>
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>

  </>
  );
};
export default SideNav;