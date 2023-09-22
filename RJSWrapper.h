#ifndef RJSWRAPPER_H
#define RJSWRAPPER_H

#include <QDebug>
#include <QJSEngine>
#include <QJSValue>
#include <QQmlEngine>

#include "RJSType.h"
#include "RJSApi.h"

/**
 * Base class for all JS wrapper classes.
 */
class RJSWrapper {
public:
    RJSWrapper(RJSApi& h) : handler(h) {}
    virtual ~RJSWrapper() = default;

    virtual /*RJSType ID*/ int getWrappedType() const {
        return -1;
    }

    virtual bool isCppOwnership() const = 0;

    QJSValue getSelf() {
        return handler.getEngine()->evaluate("self");
    }

    virtual void* getWrappedVoid() { return nullptr; }

public:
    RJSApi& handler;
};


#endif
