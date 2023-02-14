const myGlobal = 0;
function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interno
      const inner = 2;
      console.log(myNumber, myGlobal);

      function child() { // function interno
      console.log(inner, myNumber, myGlobal);
      }
      return child();
  }
  return parent();
}

myFunction();