
//sidebar functionalities
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function loadNavBar(){
  String navbar_code_str = '<nav><div>
  .sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 50px;
  }

  .sidebar a{
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidebar a:hover{
    color: #f1f1f1;
  }

  .sidebar .closebtn{
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  .openbtn{
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
  }

  .openbtn:hover{
    background-color: #444;
  }

  #main{
    transition: margin-left .5s;
    padding: 16px
  }

  @media screen and (max-height: 450px){
    .sidebar {padding-top: 15px;}
    .sidebar a{font-size: 18px;}
  }
  </nav></div>'
  $('body').append(navbar_code_str);
}
