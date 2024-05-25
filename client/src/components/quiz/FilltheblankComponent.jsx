export function FilltheblankComponent({ props }) {
  return (
    <div class="question ml-sm-5 pl-sm-5 pt-2">
      <div class="py-2 h5"><b>3. Soru: Boslugu Doldur</b></div>
      <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
        <div>
          <p>
            Soruda bulunan boslugu uygun sekilde doldurunuz.
          </p>

          <label for="exampleFormControlInput1">Bosluk</label>
          <input type="text" className="form-control"
            id="exampleFormControlInput1" />
        </div>
      </div>
    </div>
  );
}
