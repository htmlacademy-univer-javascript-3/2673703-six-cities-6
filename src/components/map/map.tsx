

type MapProps = {
  chosenId: string | null;
};

function Map({chosenId}: MapProps) {
  return (
    <div className="cities__right-section">
      <section className={`cities__map map ${chosenId}`}></section>
    </div>
  );
}

export default Map;
