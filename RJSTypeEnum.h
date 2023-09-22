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

    virtual int getId() const = 0;
    virtual QString getName() const = 0;
    //virtual RJSTypeEnum* create() = 0;

    operator int() const {
        return getId();
    }

    static int reserve(RJSTypeEnum* obj);

    static RJSTypeEnum* getById(int id);

private:
    static int idCounter;
    static QMap<int, RJSTypeEnum*> allTypes;
};

#endif
