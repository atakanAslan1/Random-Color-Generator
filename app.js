const colorContainer = document.querySelector('.color-container');
const generateBtn = document.querySelector('.generate-colorBtn');
const body = document.querySelector('body');   
const deleteBtn = document.querySelector('.delete-colors');





 //convert hex to rgb
const hexToRgb = (hex) => {
    let r = parseInt(hex.substring(1,3), 16);
    let g = parseInt(hex.substring(3,5), 16);
    let b = parseInt(hex.substring(5,7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

//generate random hex and append to the colorContainer
generateBtn.addEventListener('click', () => {
    
    const randHexElements = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += randHexElements[Math.floor(Math.random() * 16)];
            
                
        }
    let newColor = document.createElement('div');
    newColor.style.position = 'relative';
    
    
    newColor.classList.add('hex-color');
    newColor.style.backgroundColor = hex;
    newColor.style.textDecoration = 'underline';
    colorContainer.appendChild(newColor);
    newColor.addEventListener('mousemove', (e) => {
        e.target.textContent = hex;
        newColor.onmouseleave = () => {
            e.target.textContent = '';
        }
        newColor.onclick = () => {
            navigator.clipboard.writeText(e.target.textContent);
            let copied = document.createElement('div');
            colorContainer.appendChild(copied);
            copied.textContent = 'copied';
            copied.style.color = 'white';
            copied.classList.add('copied');
            setTimeout(() => {
                copied.remove();
            }, 2000);


            
           


            
        }
    })
    
})

deleteBtn.addEventListener('click', () => {
    colorContainer.innerHTML = '';
});
