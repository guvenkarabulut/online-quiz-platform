export function Breadcrumb({ props }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Anasayfa</a></li>
        {
          props.childs.map((child) => {
            return <li class="breadcrumb-item"><a href="#">{child}</a></li>
          })
        }
      </ol>
    </nav>

  )
}
