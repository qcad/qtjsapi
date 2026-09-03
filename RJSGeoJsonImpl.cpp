#include <QtGlobal>

#ifdef QT_LOCATION_LIB

// private Qt Location API (QGeoJson is not part of the public headers):
#include <QtLocation/private/qgeojson_p.h>
#include <QJsonDocument>
#include <QString>
#include <QVariantList>

namespace RJSGeoJsonImpl {

QVariantList importGeoJson(const QJsonDocument& doc) {
    return QGeoJson::importGeoJson(doc);
}

QJsonDocument exportGeoJson(const QVariantList& list) {
    return QGeoJson::exportGeoJson(list);
}

QString toString(const QVariantList& importedGeoJson) {
    return QGeoJson::toString(importedGeoJson);
}

}

#endif
