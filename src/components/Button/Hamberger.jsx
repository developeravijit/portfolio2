const Hamberger = ({ open, setOpen }) => {
  return (
    <button
      className={`menu-btn ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      aria-label="Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamberger;
