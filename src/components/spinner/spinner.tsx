import './spinner.css';

type SpinnerProps = {
  size: number;
}


function Spinner({size}: SpinnerProps) {
  return(
    <div className="spinner" style={{ width: size, height: size }} />
  );
}

export default Spinner;
