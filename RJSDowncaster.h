#ifndef RJSDOWNCASTER_H
#define RJSDOWNCASTER_H

#include <QDebug>
#include <QJSEngine>
#include <QJSValue>
#include <QQmlEngine>

#include "RJSType.h"
#include "RJSApi.h"

/**
 * Base class for all JS wrapper classes.
 */
class RJSDowncaster {
public:
    RJSDowncaster() {}
    virtual ~RJSDowncaster() = default;

    

public:
    RJSApi& handler;
};


#endif
