export function TrueFalseComponent({ props }) {
  return (
    <div class="question ml-sm-5 pl-sm-5 pt-2">
      <div class="py-2 h5"><b>5. Soru: Dogru Yanlis</b></div>
      <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
        <label class="options">Dogru
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="options">Yanlis
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
