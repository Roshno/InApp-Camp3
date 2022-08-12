console.log('hello world');
import {MDCRipple} from '@material/ripple';
import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';
import {MDCDataTable} from '@material/data-table';
import {MDCSlider} from '@material/slider';


const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const radio = new MDCRadio(document.querySelector('.mdc-radio'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = radio;
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
const slider = new MDCSlider(document.querySelector('.mdc-slider'));
