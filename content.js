document.body.id = 'extension'

const h4 = document.querySelectorAll('h4')
const name = h4[0].innerText.replace('Hi, ', '').replace(' Logout', '')

const productiveHours = h4[1].innerHTML

const logout = document.querySelector('a')

const date = document.querySelector('h3').innerHTML.replace('Date : ', '')

const task = document.querySelector('textarea')
task.rows = 5
const project = document.querySelector('select')

const inputs = document.querySelectorAll('input')

const form = document.querySelector('form')

const csrf = inputs[0]

const startTime = inputs[1]
const endTime = inputs[2]

const submit = inputs[3]
const reset = inputs[4]

submit.classList.remove('btn-primary')
submit.classList.add('btn-outline-success', 'w-100')

reset.classList.remove('btn-warning')
reset.classList.add('btn-outline-danger', 'w-100')

const table = document.querySelector('table')

table.classList.add('table-dark', 'table-hover')

tbody = table.querySelector('tbody')
if (tbody.querySelectorAll('tr').length == 0) {
  const tr = document.createElement('tr')
  tr.innerHTML = `<td colspan="100%" class="text-center py-3 disabled text-muted">No tasks added</td>`
  tbody.append(tr)
}

const container = document.querySelector('.container')

const nav = document.createElement('nav')
nav.classList.add('navbar', 'mb-4')
nav.innerHTML = `
    <div class="container px-4">
      <div>
        Hi, ${name}
      </div>
      <div class="ml-auto">
        <a href="${logout}" role="button" class="btn text-danger">Logout</a>
      </div>
    </div>
    `

container.innerHTML = ''

const statusCard = document.createElement('div')
statusCard.classList.add('status-card', 'p-3', 'mb-4')
statusCard.innerHTML = `
    <div class="me-auto">${date}</div><div>${productiveHours}</div>
    `

document.body.prepend(nav)

const containerFluid = document.createElement('div')
containerFluid.classList.add('container', 'px-4')

containerFluid.append(statusCard)

form.innerHTML = ''
form.append(csrf)

let formGroup = document.createElement('div')
formGroup.classList.add('form-group', 'mb-4')
let formLabel = document.createElement('label')

formLabel.innerText = 'Task'
formGroup.append(formLabel)
formGroup.append(task)

form.append(formGroup)

let row = document.createElement('div')
row.classList.add('row')

let column = document.createElement('div')
column.classList.add('col-lg-4')

column = column.cloneNode()
formGroup = formGroup.cloneNode()
formLabel = formLabel.cloneNode()
formLabel.innerText = 'Project'
formGroup.append(formLabel)
formGroup.append(project)
column.append(formGroup)
row.append(column)

column = column.cloneNode()
column.classList.add('col-md-6')
formGroup = formGroup.cloneNode()
formLabel = formLabel.cloneNode()
formLabel.innerText = 'Start Time'
formGroup.append(formLabel)
formGroup.append(startTime)
column.append(formGroup)
row.append(column)

column = column.cloneNode()
formGroup = formGroup.cloneNode()
formLabel = formLabel.cloneNode()
formLabel.innerText = 'End Time'
formGroup.append(formLabel)
formGroup.append(endTime)
column.append(formGroup)
row.append(column)

form.append(row)

row = row.cloneNode()
row.classList.add('justify-content-center', 'mt-1')

column = document.createElement('div')
column.classList.add('col-lg-2', 'col-md-4', 'col-6')

column.append(reset)
row.append(column)

column = column.cloneNode()
column.append(submit)
row.append(column)

form.append(row)

containerFluid.append(form)

const tableContainer = document.createElement('div')
tableContainer.classList.add('table-responsive', 'mt-5')

tableContainer.append(table)

containerFluid.append(tableContainer)

document.body.append(containerFluid)
