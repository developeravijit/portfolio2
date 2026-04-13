import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/create-project");
  };

  return (
    <section className="my-[100px]">
      <div className="container">
        <div className="wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <span className="title">Login</span>
            <div className="input-container">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient-stroke"
                    x1={0}
                    y1={0}
                    x2={24}
                    y2={24}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="black" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                </defs>
                <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                  <path d="M21.6365 5H3L12.2275 12.3636L21.6365 5Z" />
                  <path d="M16.5 11.5L22.5 6.5V17L16.5 11.5Z" />
                  <path d="M8 11.5L2 6.5V17L8 11.5Z" />
                  <path d="M9.5 12.5L2.81805 18.5002H21.6362L15 12.5L12 15L9.5 12.5Z" />
                </g>
              </svg>
              <input className="input" type="text" placeholder="Email" />
            </div>
            <div className="input-container">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                  <path d="M3.5 15.5503L9.20029 9.85L12.3503 13L11.6 13.7503H10.25L9.8 15.1003L8 16.0003L7.55 18.2503L5.5 19.6003H3.5V15.5503Z" />
                  <path d="M16 3.5H11L8.5 6L16 13.5L21 8.5L16 3.5Z" />
                  <path d="M16 10.5L18 8.5L15 5.5H13L12 6.5L16 10.5Z" />
                </g>
              </svg>
              <input className="input" type="password" placeholder="Password" />
            </div>
            <div className="login-button">
              <input className="input" type="submit" defaultValue="Login" />
            </div>
            <div className="texture" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
