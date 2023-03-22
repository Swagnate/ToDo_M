import '@/styles/index.scss'
import todoTemplate from './js/components/datePanel'
import navigator from './js/components/PageTitle'
import cheekTheWeek from './js/components/check_the_week'
import dailyShedule from './js/components/dailyShedule'
import notes from './js/components/notes'
import smile from './js/components/smile'
import water from './js/components/water'

const app = document.querySelector('root')
app.append(navigator)
app.append(todoTemplate)

const app2 = document.querySelector('todo_template')
app2.append(cheekTheWeek)

const app3 = document.querySelector('left_section')
app3.append(dailyShedule)
app3.append(notes)

const app4 = document.querySelector('right_section')
app4.append(smile)
app4.append(water)
/*
// Test import of a JavaScript module
import { example } from '@/js/example'

 // Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'


// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imagePublic)
*/