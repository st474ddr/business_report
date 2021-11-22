import toastr from 'toastr'
import 'toastr/toastr.scss'

export default function () {

    // global toastr setting
    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.timeOut = 1000;
    toastr.options.fadeOut = 250;
    toastr.options.fadeIn = 250;
}