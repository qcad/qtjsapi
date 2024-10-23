#ifndef RJSWRAPPEROBJ_H
#define RJSWRAPPEROBJ_H

#include "qtjsapi_global.h"

#include <QQmlEngine>

#include "RJSWrapper.h"

/**
 * Base class for all JS wrapper classes that are not based on QObject.
 */
class QTJSAPI_EXPORT RJSWrapperObj : public QObject, public RJSWrapper {
    Q_OBJECT
    //QML_INTERFACE

    Q_PROPERTY(int wrappedType READ getWrappedType)

public:
    RJSWrapperObj(RJSApi& h);
    virtual ~RJSWrapperObj();
};

#endif
