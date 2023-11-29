let $ = document
const imageFileInput = $.querySelector('#imageFileInput')

const brightness = $.querySelector('#brightness')
const saturation = $.querySelector('#saturation')
const blur = $.querySelector('#blur')
const inversion = $.querySelector('#inversion')

const canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d');


let setting = {}
let image = null

function resteSetting(){}

function updateSetting(key,value){}

function geberateFilter(){}

function renderImage (){}

brightness.addEventListener('input',()=>{

})
saturation.addEventListener('input',()=>{

})
blur.addEventListener('input',()=>{

})
inversion.addEventListener('input',()=>{

})

imageFileInput.addEventListener('change',()=>{

})

window.addEventListener('load',resteSetting)