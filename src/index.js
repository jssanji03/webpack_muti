//import js套件
import "bootstrap";
import 'jquery';


//import scss
import '@fortawesome/fontawesome-free/js/all'
import './scss/index.scss';

//import 其他 js
import './js/sidebar'
import { sidebar } from './pages/menu';
import { addForm } from './pages/addTable';
sidebar()
addForm()



if (module.hot) {
//    module.hot.accept('./pages/sideBar', function() {
//      console.log('Accepting the updated printMe module!');
//      sidebar();
//    })
     module.hot.accept();
 }