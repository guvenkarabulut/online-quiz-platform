export function Table({ children, columns }) {
  return (
    <div>
      <table className="table table-striped table-bordered table-hover zero-configuration">
        <thead>
          <tr>
            {
              columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}
