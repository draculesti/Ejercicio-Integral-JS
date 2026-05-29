import { hadleAvailable } from './handleAvailable.js';
import { handlerLikes } from './likesFuction.js';
import {renderNavbar} from './navbarComponent.js'
import { handleDescription } from './showProdDescription.js';



document.addEventListener('DOMContentLoaded', ()=>{
  renderNavbar();
  handlerLikes();
  handleDescription();
  hadleAvailable()
});


