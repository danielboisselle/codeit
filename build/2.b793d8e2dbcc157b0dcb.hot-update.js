webpackHotUpdate(2,{

/***/ 89:
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("function ourLog(value){\n  const ourConsole = document.getElementById('console');\n  ourConsole.innerHTML = ourConsole.innerHTML + (value + '<br>');\n}\nfunction runCode(e) {\n  const ourConsole = document.getElementById('console');\n  ourConsole.innerHTML = '';\n\n  let codeToRun = document.getElementById(\"code-pane\").value;\n  codeToRun = codeToRun.replace(/console.log/g,'ourLog');\n  try {\n    eval(codeToRun);\n  } catch (e) {\n    // Make sure we can put errors on console as well\n    ourLog(`<span class=\"red\">Error: ${e.message}</span>`);\n}\n}\ndocument.getElementById(\"runButton\").addEventListener(\"click\", runCode);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYmFja2dyb3VuZC5qcz83OThmIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG91ckxvZyh2YWx1ZSl7XG4gIGNvbnN0IG91ckNvbnNvbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc29sZScpO1xuICBvdXJDb25zb2xlLmlubmVySFRNTCA9IG91ckNvbnNvbGUuaW5uZXJIVE1MICsgKHZhbHVlICsgJzxicj4nKTtcbn1cbmZ1bmN0aW9uIHJ1bkNvZGUoZSkge1xuICBjb25zdCBvdXJDb25zb2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGUnKTtcbiAgb3VyQ29uc29sZS5pbm5lckhUTUwgPSAnJztcblxuICBsZXQgY29kZVRvUnVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlLXBhbmVcIikudmFsdWU7XG4gIGNvZGVUb1J1biA9IGNvZGVUb1J1bi5yZXBsYWNlKC9jb25zb2xlLmxvZy9nLCdvdXJMb2cnKTtcbiAgdHJ5IHtcbiAgICBldmFsKGNvZGVUb1J1bik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgY2FuIHB1dCBlcnJvcnMgb24gY29uc29sZSBhcyB3ZWxsXG4gICAgb3VyTG9nKGA8c3BhbiBjbGFzcz1cInJlZFwiPkVycm9yOiAke2UubWVzc2FnZX08L3NwYW4+YCk7XG59XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bkJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcnVuQ29kZSk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2JhY2tncm91bmQuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})