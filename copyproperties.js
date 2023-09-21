print("copyproperties.js");

/**
 * Swaps the current prototype of obj with the new prototype wrapper and makes sure all
 * additional JavaScript properties are copied over to wrapper.
 */
function copyProperties(obj, wrapper, clazz) {
    var oldProto, pns, i;
    var err;

    // copy all functions and members of the old prototype over to the new one (wrapper):
    oldProto = Object.getPrototypeOf(obj);
    pns = Object.getOwnPropertyNames(oldProto);
    if (wrapper!=null) {
        for (i=0; i<pns.length; i++) {
            //qDebug("copyProperties 1: " + pns[i]);
            try {
                Object.defineProperty(
                    wrapper, pns[i],
                    {
                        configurable: true,
                        writable: true,
                        value: oldProto[pns[i]]
                    }
                );
            }
            catch (err) {
                qDebug("Cannot assign property: " + err);
            }
        }
    }


    // copy all functions and members of the JS class to proto:
    oldProto = clazz.prototype;
    pns = Object.getOwnPropertyNames(oldProto);
    if (wrapper!=null) {
        for (i=0; i<pns.length; i++) {
            //qDebug("copyProperties 2: " + pns[i]);
            try {
                Object.defineProperty(
                    wrapper, pns[i],
                    {
                        configurable: true,
                        writable: true,
                        //enumerable : true,
                        value: oldProto[pns[i]]
                    }
                );
            } catch (err) {
                qDebug("Cannot assign property: " + err);
            }
        }
    }

    // backup all functions and members of this (function and member overrides in a derived JS class):
    //pns = [];
    pns = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
    //qDebug("copying propertyies of this...");
    // TODO: this calls some properties:
//    try {
        //qDebug("Object.getOwnPropertyNames(obj.prototype):" + Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));
//        for (var k in Object.getPrototypeOf(obj)) {
//            qDebug("k: " + k);
//        }

//        for (var k in obj) {
//            if (k==="objectNameChanged") {
//                qDebug("\n=================\nthis property: " + k + "\n========================");
//            }
//        }
        //for (var k in ["toString", "paintEvent", "test"]) {
//        for (var k in Object.getOwnPropertyNames(Object.getPrototypeOf(obj))) {
            //qDebug("copying property of this:" + k);
//            pns.push(k);
            //qDebug("copying property: DONE");
//        }
//    }
//    catch (err) {
//        qDebug("TODO: what causes this...");
//    }
    //qDebug("copying propertyies of this: DONE");

    // store functions of this:
    var fns = {};
    for (i=0; i<pns.length; i++) {
        //qDebug("copyProperties store 3: " + pns[i]);
        //fns[pns[i]] = obj[pns[i]];
        fns[pns[i]] = Object.getPrototypeOf(obj)[pns[i]];
    }

    // change prototype to instance of wrapper class:
    //if (!isNull(wrapper)) {
        Object.setPrototypeOf(obj, wrapper);
    //}

    // restore functions and members of this (function and member overrides in a derived JS class):
    for (i=0; i<pns.length; i++) {
        //qDebug("copyProperties restore 4: " + pns[i]);
        try {
            Object.defineProperty(
                obj, pns[i],
                {
                    configurable: true,
                    writable: true,
                    //enumerable : true,
                    value: fns[pns[i]]
                }
            );
        } catch (err) {
            qDebug("Cannot assign property: " + err);
        }
    }

//    i = 0;
//    var o = obj;
//    while(Object.getPrototypeOf(o)!=undefined) {
//        i++;
//        o = Object.getPrototypeOf(o);
//    }
//    if (i>10) {
//        qDebug("more than 10 prototypes in chain................");
//    }
}
