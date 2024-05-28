export function Modal({ props, children }) {
  return (
    <>
      <div id="ogrenciEkle" className="modal fade" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalPopoversLabel">
                {props.title}</h5>
              <button type="button" className="close" data-dismiss="modal"
                aria-label="Close"><span
                  aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              {
                children
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn  btn-secondary"
                data-dismiss="modal">Kapat</button>
            </div>
          </div>
        </div>
      </div >
      <button type="button" className="btn btn-success btn-with-icon-text"
        data-toggle="modal" data-target="#ogrenciEkle">{props.buttonTitle}</button>
    </>
  )
}
