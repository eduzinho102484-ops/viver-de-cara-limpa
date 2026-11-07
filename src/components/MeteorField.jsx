export default function MeteorField() {
  return (
    <div className="meteor-field" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => <i className="meteor" key={index} />)}
    </div>
  );
}
