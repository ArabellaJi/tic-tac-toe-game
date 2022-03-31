  /* X goes first. */
  let currentPlayer = "X";

  /*
  Write the name of current player on the button and disable the button. 
  If no one wins, change the current player.
  */
  function play(){
    if (currentPlayer == "X") {
      document.getElementById(event.srcElement.id).innerHTML = currentPlayer;
      document.getElementById(event.srcElement.id).disabled = true;
      checkWinner()
      currentPlayer = "O";
    }
    else {
      document.getElementById(event.srcElement.id).innerHTML = currentPlayer;
      document.getElementById(event.srcElement.id).disabled = true;
      checkWinner()
      currentPlayer = "X";
    }
  }

  /*
  Check if someone wins. 
  Then, declare the winner and disable all the buttons.
  */
  function checkWinner(){
    let one = document.getElementById(1).innerHTML;
    let two = document.getElementById(2).innerHTML;
    let three = document.getElementById(3).innerHTML;
    let four = document.getElementById(4).innerHTML;
    let five = document.getElementById(5).innerHTML;
    let six = document.getElementById(6).innerHTML;
    let seven = document.getElementById(7).innerHTML;
    let eight = document.getElementById(8).innerHTML;
    let nine = document.getElementById(9).innerHTML;
    if (one.length == 1 && one == two && two == three) {
      alert(one + " wins!");
      for (let i = 1; i < 10; i++) {
        document.getElementById(i).disabled = true;
      }
    } else if (four.length == 1 && four == five && five == six) {
      alert(four + " wins!");
      for (let i = 1; i < 10; i++) {
        document.getElementById(i).disabled = true;
      }
    } else if (seven.length == 1 && seven == eight && eight == nine) {
      alert(seven + " wins!");
      for (let i = 1; i < 10; i++) {
        document.getElementById(i).disabled = true;
      }
    } else if (one.length == 1 && one == four && four == seven) {
      alert(one + " wins!");
      for (let i = 1; i < 10; i++) {
        document.getElementById(i).disabled = true;
      }
    } else if (two.length == 1 && two == five && five == eight) {
      alert(two + " wins!");
      for (let i = 1; i < 10; i++) {
        document.getElementById(i).disabled = true;
      }
    } else if (three.length == 1 && three == six && six == nine) {
      alert(three + " wins!");
      for (let i = 1; i < 10; i++) {
        document.getElementById(i).disabled = true;
      }
    } else if (one.length == 1 && one == five && five == nine) {
      alert(one + " wins!");
      for (let i = 1; i < 10; i++) {
        document.getElementById(i).disabled = true;
      }
    } else if (three.length == 1 && three == five && five == seven) {
      alert(three + " wins!");
      for (let i = 1; i < 10; i++) {
        document.getElementById(i).disabled = true;
      }
    } else if (one.length == 1 && two.length == 1 && three.length == 1
                && four.length == 1 && five.length == 1 && six.length == 1
                && seven.length == 1 && eight.length == 1 && nine.length ==1) {
      alert("Draw!")
    }
  }
