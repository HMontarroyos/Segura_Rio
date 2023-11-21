export const clarityEvent = (message, content) => {
    if (typeof window.clarity === "function") {
      window.clarity("set", message, content);
    }
  };