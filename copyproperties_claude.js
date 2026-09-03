/**
 * Swaps the current prototype of obj with the new prototype wrapper and makes sure all
 * additional JavaScript properties are copied over to wrapper.
 */
function copyProperties(obj, wrapper, clazz) {
    var i, names;

    // obj's current prototype. For a plain `new Clazz()` this is identical to
    // clazz.prototype; it only differs when obj is an instance of a derived JS class,
    // whose prototype may carry method/member overrides we must preserve below.
    var origProto = Object.getPrototypeOf(obj);
    var origNames = Object.getOwnPropertyNames(origProto);

    // Reused data-property descriptor: defineProperty copies these fields internally and
    // does not retain the object, so mutating .value and reusing it avoids allocating a
    // fresh descriptor for every single property.
    var desc = { configurable: true, writable: true, value: undefined };

    if (wrapper != null) {
        var clazzProto = clazz.prototype;

        // copy all functions and members of the original prototype over to the wrapper:
        for (i = 0; i < origNames.length; i++) {
            try {
                desc.value = origProto[origNames[i]];
                Object.defineProperty(wrapper, origNames[i], desc);
            } catch (err) {
                qDebug("Cannot assign property: " + err);
            }
        }

        // copy all functions and members of the JS class to the wrapper.
        // In the common (non-subclass) case origProto IS clazz.prototype, so the loop
        // above already copied exactly these properties and this can be skipped.
        if (origProto !== clazzProto) {
            names = Object.getOwnPropertyNames(clazzProto);
            for (i = 0; i < names.length; i++) {
                try {
                    desc.value = clazzProto[names[i]];
                    Object.defineProperty(wrapper, names[i], desc);
                } catch (err) {
                    qDebug("Cannot assign property: " + err);
                }
            }
        }
    }

    // change prototype to instance of wrapper class:
    Object.setPrototypeOf(obj, wrapper);

    // restore functions and members of the original prototype as own properties on obj
    // (function/member overrides in a derived JS class must shadow the wrapper).
    // origProto is still a valid reference after setPrototypeOf, so read straight from it
    // rather than building a separate snapshot.
    for (i = 0; i < origNames.length; i++) {
        try {
            desc.value = origProto[origNames[i]];
            Object.defineProperty(obj, origNames[i], desc);
        } catch (err) {
            qDebug("Cannot assign property: " + err);
        }
    }
}
