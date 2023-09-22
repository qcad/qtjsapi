#include "RJSTypeEnum.h"

int RJSTypeEnum::vCounter = 0;

int RJSTypeEnum::reserve() {
    return vCounter++;
}
