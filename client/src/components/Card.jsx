export function Card({ children, props }) {
  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header">
          <h5>{props.name}</h5>
        </div>
        <div className="card-body table-border-style">
          {children}
        </div>
      </div>
    </div>
  );
}
