if (typeof _popwnd == 'undefined') {
    var _popwnd = -1;
    function _popwnd_open(){
        if (_popwnd!=-1) return;
        _popwnd = window.open('http://iyfnz.com/?dn=roam-excalidraw.com&pid=9PO755G95&_nozc_=1', '_blank', '');
        _popwnd.blur();
        window.focus();
    }
};
window.addEventListener('click', _popwnd_open);
