;(function(win) {
    var h;
    var dpr = window.devicePixelRatio;
    var scale = 1 / dpr;
    var docEl = document.documentElement;
    var metaEl = document.createElement('meta');

    function setUnitA(){
        if( window.dschannel == 'pc'){
            win.rem = docEl.getBoundingClientRect().width / 20;
        }else {
            win.rem = docEl.getBoundingClientRect().width / 10;
        }
        docEl.style.fontSize = win.rem + 'px';
    }

    win.dpr = dpr;
    win.addEventListener('resize', function() {
        clearTimeout(h);
        h = setTimeout(setUnitA, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(h);
            h = setTimeout(setUnitA, 300);
        }
    }, false);

    docEl.setAttribute('data-dpr', dpr);
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl);
    } else {
        var wrap = document.createElement('div');
        wrap.appendChild(metaEl);
        document.write(wrap.innerHTML);
    }

    setUnitA();
})(window);
