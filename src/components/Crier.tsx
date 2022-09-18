type Props = {
  cry: string | null;
  resetCry: () => void;
};

function Crier(props: Props) {
  const { cry, resetCry } = props;

  //If there is a cry, show cry and reset on animationEnd
  if (cry) {
    return (
      <div className="crier" onAnimationEnd={resetCry}>
        <h1>{cry}</h1>
      </div>
    );
  }
  return null;
}

export default Crier;
