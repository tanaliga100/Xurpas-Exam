export default function Palyn() {
  function checkPalyndrome(args) {
    const splitter = args.split("");
    const handleReverse = splitter.reverse();
    const toCheck = handleReverse.join("");

    if (args === toCheck) {
      console.log("Correct  ! that is a palyndrome");
      return;
    } else {
      console.log("Wrong ! that is not palyndrome");
      return;
    }
  }
  const args = prompt("Enter a string: ");

  checkPalyndrome(args);

  return <div>PalynDrome</div>;
}

