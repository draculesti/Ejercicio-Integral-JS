const showBtnElement = document.getElementById('showDescription');
const descriptionDisplay = document.getElementById('description');
let activeBtn = false;

 export const handleDescription = () =>{
  showBtnElement.addEventListener('click', ()=>{
    if(!activeBtn){
      showBtnElement.innerText= 'Mostrar menos';
      descriptionDisplay.innerHTML = `
        Kit básico para el cuidado de la piel. Uso diario.
        <div id="fullDescription">
          <ul>
            <li>Crema corporal humectante.</li>
            <li>Jabón limpiador de impurezas.</li>
            <li>Protector solar de espectro amplio.</li>
            <li>Loción corporal con aroma refrescante.</li>
          </ul>
        </div>
        <strong>* Este kit ha sido probado en diferentes tipos de piel, mostrando resultados bastante positivos *</strong>
      `;
      activeBtn = true;
      return;
    }
    activeBtn = false;
    showBtnElement.innerText= 'Mostrar más...';
    descriptionDisplay.innerHTML = 'Kit básico para el cuidado de la piel. Uso diario.';

  })
}