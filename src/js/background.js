function ourLog(value){
  const ourConsole = document.getElementById('console');
  ourConsole.innerHTML = ourConsole.innerHTML + (value + '<br>');
}
function runCode(e) {
  const ourConsole = document.getElementById('console');
  ourConsole.innerHTML = '';

  let codeToRun = document.getElementById("code-pane").value;
  codeToRun = codeToRun.replace(/console.log/g,'ourLog');
  try {
    eval(codeToRun);
  } catch (e) {
    // Make sure we can put errors on console as well
    ourLog(`<span class="red">Error: ${e.message}</span>`);
}
}
document.getElementById("runButton").addEventListener("click", runCode);

