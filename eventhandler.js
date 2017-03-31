var eventHandler = {
    // 添加句柄
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    // 删除句柄
    removerHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function (event) {
        // 非IE:event,IE:window.event
        return event ? event : window.event;
    },
    getType: function (event) {
        // 非IE与IE相同
        return event.type;
    },
    getElement: function (event) {
        // 非IE:event.target，IE:event.srcElement
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault(); // 非IE方法处理
        } else {
            event.returnValue = false; // IE方法处理
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation(); // 非IE方法处理
        } else {
            event.cancelBubble = true; // IE方法处理
        }
    }
}