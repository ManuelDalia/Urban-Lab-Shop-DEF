export function Button({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 12px",
        borderRadius: 6,
        border: "1px solid #333",
        backgroundColor: "#111",
        color: "white",
        cursor: "pointer"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
