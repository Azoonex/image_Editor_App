let $ = document
const imageFileInput = $.querySelector('#imageFileInput')

const brightnessInput = $.querySelector('#brightness')
const saturationInput = $.querySelector('#saturation')
const blurInput = $.querySelector('#blur')
const inversionInput = $.querySelector('#inversion')

const canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d');


let setting = {}
let image = null

function resteSetting() {
    setting.brightness = "100"
    setting.saturation = "100"
    setting.blur = "0"
    setting.inversion = "0"

    brightnessInput.value = setting.brightness
    saturationInput.value = setting.saturation
    blurInput.value = setting.blur
    inversionInput.value = setting.inversion


}

function updateSetting(key, value) {
    if (image) {
        setting[key] = value
        console.log(key,value);
        renderImage()
    }
    
}

function geberateFilter() { }

function renderImage() {
    canvas.width = image.width
    canvas.height = image.height

    context.drawImage(image, 0, 0);

}

brightnessInput.addEventListener('input', () => {
    updateSetting('brightness',brightnessInput.value)
})
saturationInput.addEventListener('input', () => {
    updateSetting('saturation',saturationInput.value)
})
blurInput.addEventListener('input', () => {
    updateSetting('blur',blurInput.value)
})
inversionInput.addEventListener('input', () => {
    updateSetting('inversion',inversionInput.value)
})

imageFileInput.addEventListener('change', () => {

    image = new Image()
    image.addEventListener('load', () => {
        renderImage()
    })

    image.src = URL.createObjectURL(imageFileInput.files[0])
})

window.addEventListener('load', resteSetting)