#ifndef RJSWRAPPEROBJ_H
#define RJSWRAPPEROBJ_H

#include <QQmlEngine>

#include "RJSWrapper.h"

/**
 * Base class for all JS wrapper classes that are not based on QObject.
 */
class RJSWrapperObj : public QObject, public RJSWrapper {
    Q_OBJECT
    QML_INTERFACE

    Q_PROPERTY(int wrappedType READ getWrappedType)

public:
    RJSWrapperObj(RJSApi& h) : RJSWrapper(h) {}
    virtual ~RJSWrapperObj() = default;
};

#endif
