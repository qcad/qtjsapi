#ifndef RJSTYPEENUMEXAMPLE_H
#define RJSTYPEENUMEXAMPLE_H

#include "RJSTypeEnum.h"


class RJSTypeEnumExample : public RJSTypeEnum {
    Q_OBJECT
    QML_INTERFACE

public:
    int getV() const {
        return RJSTypeEnumExample::getValue();
    }

    static int getValue() {
        if (v<0) {
            v = RJSTypeEnum::reserve();
        }
        return v;
    }

private:
    static int v;
};

#endif
