import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import React Icons

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <nav
      style={{
        backgroundColor: isDarkMode ? "#2D3748" : "#ffffff",
        padding: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: isDarkMode ? "#ffffff" : "#2D3748",
          }}
        >
          Webcraft
        </div>

        {/* Search Bar */}
        <div
          style={{
            position: "relative",
            width: "33%",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: "100%",
              padding: "8px 16px",
              border: "1px solid #e2e8f0",
              borderRadius: "9999px",
              backgroundColor: isDarkMode ? "#4A5568" : "#edf2f7",
              color: isDarkMode ? "#ffffff" : "#2D3748",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: isDarkMode ? "#ffffff" : "#718096",
              width: "20px",
              height: "20px",
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5a6 6 0 016 6v3a6 6 0 11-12 0V11a6 6 0 016-6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 19l4 4m0 0l-4-4m4 4l-4-4"
            />
          </svg>
        </div>

        {/* Navbar Right Section (Login and Dark/Light Toggle) */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Login Button */}
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#4299e1",
              color: "#ffffff",
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#3182ce")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4299e1")}
          >
            Login
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              padding: "12px",
              borderRadius: "9999px",
              backgroundColor: isDarkMode ? "#2D3748" : "#edf2f7",
              transition: "background-color 0.3s",
            }}
          >
            {isDarkMode ? (
              <FaSun style={{ color: "#f6ad55", fontSize: "24px" }} />
            ) : (
              <FaMoon style={{ color: "#2D3748", fontSize: "24px" }} />
            )}
          </button>

          {/* Our Games Button */}
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#9b56c1",
              color: "#ffffff",
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#7e4ea3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#9b56c1")}
          >
            Our Games
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
