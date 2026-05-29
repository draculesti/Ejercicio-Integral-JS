const availableBtn   = document.getElementById('changeStatus');
const availableLabel = document.getElementById('statusBadge');
const statusDisplay = document.getElementById('statusTxt');

let availableToogle = true;

export const hadleAvailable = () =>{
  availableBtn.addEventListener('click', ()=>{
    if(availableToogle){
      availableToogle= false;
      availableLabel.innerText = 'No disponible';
      availableLabel.style.color="var(--color-danger)";
      availableLabel.style.background ='var(--color-danger-light)';
      statusDisplay.style.color="var(--color-danger)";
      statusDisplay. innerText = 'No disponible';
      return;
    }
    availableLabel.innerText = 'Disponible';
    availableLabel.style.color="var(--color-success)";
    statusDisplay.innerText  = 'Disponible';
    availableLabel.style.color="var(--color-success)";
    availableLabel.style.background ='var(--color-success-light)';
    statusDisplay.style.color="var(--color-success)"
    availableToogle = true;
    return;

  });
};