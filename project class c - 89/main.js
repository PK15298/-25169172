function adduser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
   // localStorage.setItem("1", player1name);
   // localStorage.setItem("2", player2name);
    window.location = "index2.html";
}