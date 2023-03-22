const todoTemplate = document.createElement('div')
todoTemplate.classList.add('todo_template')
todoTemplate.innerHTML =
    `
                        <div class = "date_panel">
                            <h4 class = "date_label>Date :</h4>
                            <p class = "mounth">January 14</p>
                        </div>
                        `
export default todoTemplate