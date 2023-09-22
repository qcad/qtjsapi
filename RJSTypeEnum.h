#ifndef RJSTYPEENUM_H
#define RJSTYPEENUM_H

#include <QObject>
#include <QQmlEngine>

/**
 * Extendable enum class.
 */
class RJSTypeEnum : public QObject {
    Q_OBJECT
    QML_INTERFACE

public:
    virtual ~RJSTypeEnum() = default;

    virtual int getV() const = 0;

    operator int() const {
        return getV();
    }

    static int reserve();

private:
    static int vCounter;
};

#endif
