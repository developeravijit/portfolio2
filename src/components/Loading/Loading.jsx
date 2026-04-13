const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="cube div">
        <div className="top div"></div>

        <div className="div">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="span" style={{ "--i": i }}>
              <p>loading..</p>
              <p>loading..</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
