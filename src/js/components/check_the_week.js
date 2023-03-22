const cheekTheWeek = document.createElement('div')
cheekTheWeek.classList.add('check_the_week')
cheekTheWeek.innerHTML =
    `
    <div class="checkbox">
          <label class="custom_label" for="monday">mon</label>
          <input type="radio" class="custom_checkbox" name="week_1" id="monday">
        </div>
        <div class="checkbox">
          <label class="custom_label" for="tuesday">tue</label>
          <input type="radio" class="custom_checkbox" name="week_2" id="tuesday">
        </div>
        <div class="checkbox">
          <label class="custom_label" for="wednesday">wed</label>
          <input type="radio" class="custom_checkbox" name="week_3" id="wednesday">
        </div>
        <div class="checkbox">
          <label class="custom_label" for="thursday">thu</label>
          <input type="radio" class="custom_checkbox" name="week_4" id="thursday">
        </div>
        <div class="checkbox">
          <label class="custom_label" for="friday">fri</label>
          <input type="radio" class="custom_checkbox" name="week_5" id="friday">
        </div>
        <div class="checkbox">
          <label class="custom_label" for="saturday">sat</label>
          <input type="radio" class="custom_checkbox" name="week_6" id="saturday">
        </div>
        <div class="checkbox">
          <label class="custom_label" for="sunday">sun</label>
          <input type="radio" class="custom_checkbox" name="week_7" id="sunday">
        </div>
 `
export default cheekTheWeek