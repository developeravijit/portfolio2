import { saveAs } from "file-saver";
import resume from "../../../public/resume/Avijit_Roy_Resume.pdf";
const SecondaryBtn = ({ name }) => {
  const downloadCv = () => {
    saveAs(resume);
  };
  return (
    <div className="buttonBox flex justify-center">
      <button className="btn secondary-btn" onClick={downloadCv}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="24px"
          viewBox="0 0 25 24"
          className="arr-2"
        >
          <path
            fill="#D1D1D1"
            d="m11.672 13.63l-1.373-1.372a.75.75 0 0 0-1.06 1.061l2.64 2.638a.75.75 0 0 0 1.11-.026l2.613-2.612a.75.75 0 0 0-1.06-1.06l-1.37 1.369V8.56a.75.75 0 0 0-1.5 0z"
            strokeWidth={0.3}
            stroke="#D1D1D1"
          ></path>
          <path
            fill="#D1D1D1"
            fillRule="evenodd"
            d="M2.422 12c0-5.522 4.477-9.999 10-9.999S22.42 6.478 22.42 12s-4.477 10-10 10s-10-4.478-10-10m10-8.499a8.5 8.5 0 1 0 0 16.999a8.5 8.5 0 0 0 0-16.999"
            clipRule="evenodd"
            strokeWidth={0.3}
            stroke="#D1D1D1"
          ></path>
        </svg>
        <span className="text">{name}</span>
        <span className="text2">{name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="24px"
          viewBox="0 0 25 24"
          className="arr-1"
        >
          <path
            fill="#D1D1D1"
            d="m11.672 13.63l-1.373-1.372a.75.75 0 0 0-1.06 1.061l2.64 2.638a.75.75 0 0 0 1.11-.026l2.613-2.612a.75.75 0 0 0-1.06-1.06l-1.37 1.369V8.56a.75.75 0 0 0-1.5 0z"
            strokeWidth={0.3}
            stroke="#D1D1D1"
          ></path>
          <path
            fill="#D1D1D1"
            fillRule="evenodd"
            d="M2.422 12c0-5.522 4.477-9.999 10-9.999S22.42 6.478 22.42 12s-4.477 10-10 10s-10-4.478-10-10m10-8.499a8.5 8.5 0 1 0 0 16.999a8.5 8.5 0 0 0 0-16.999"
            clipRule="evenodd"
            strokeWidth={0.3}
            stroke="#D1D1D1"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SecondaryBtn;
