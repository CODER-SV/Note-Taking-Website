import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
var React = require("react");

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
