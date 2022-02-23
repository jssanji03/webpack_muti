//import js套件
import "bootstrap";
import 'jquery';

//import 共用scss檔
import '@fortawesome/fontawesome-free/js/all'
import './scss/index.scss'; 

//import 共用js
import './js/sidebar'
import { sidebar } from './pages/menu';
sidebar()

if (module.hot) {
//    module.hot.accept('./pages/sideBar', function() {
//      console.log('Accepting the updated printMe module!');
//      sidebar();
//    })
    module.hot.accept();
}