#include "RJSTypeEnum.h"

int RJSTypeEnum::idCounter = 0;
QMap<int, RJSTypeEnum*> RJSTypeEnum::allTypes;

int RJSTypeEnum::reserve(RJSTypeEnum* obj) {
    int id = idCounter++;
    allTypes.insert(id, obj);
    return id;
}

RJSTypeEnum* RJSTypeEnum::getById(int id) {
    RJSTypeEnum* ret = allTypes.value(id, NULL);
    if (ret==NULL) {
        qWarning() << "unkown type ID: " << id;
    }
    return ret;
}
