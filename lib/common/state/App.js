/* jshint node: true, strict: true, undef: true */
/* globals Computer, is_empty */


// === Examples:
// App()
// App(..args for underlying Computer)

function App() {

  if (!App._computer) {
    App._computer = new Computer();
  }

  return App._computer.apply(null, arguments);
}

funcs.App = App;
