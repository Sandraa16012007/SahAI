import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider.jsx";
import { FloatingChatbotWidget } from "./components/FloatingChatbotWidget";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <FloatingChatbotWidget />
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
