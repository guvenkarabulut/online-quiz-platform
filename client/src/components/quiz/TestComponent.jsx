export function TestComponent({ props }) {
  return (
    <div class="question ml-sm-5 pl-sm-5 pt-2">
      <div class="py-2 h5"><b>1. Soru: Test</b></div>
      <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
        <label class="options">Cevap 1
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="options">Cevap 2
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="options">Cevap 3
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="options">Cevap 4
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="options">Cevap 5
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
