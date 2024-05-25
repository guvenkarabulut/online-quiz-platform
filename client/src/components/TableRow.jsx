export function TableRow({ children, rows }) {
  return (
    <tr>
      {
        rows.map((row, index) => (
          <td key={index}>{row}</td>
        ))
      }
      <td>
        {children}
      </td>
    </tr>
  )
}
