#include "RJSGeoJson.h"

#ifdef QT_LOCATION_LIB

#include <QGeoCircle>
#include <QGeoCoordinate>
#include <QGeoPath>
#include <QGeoPolygon>
#include <QGeoRectangle>
#include <QGeoShape>
#include <QVariantMap>

// implemented in RJSGeoJsonImpl.cpp (includes the private Qt Location header
// which declares the namespace QGeoJson, conflicting with the class name):
namespace RJSGeoJsonImpl {
    QVariantList importGeoJson(const QJsonDocument& doc);
    QJsonDocument exportGeoJson(const QVariantList& list);
    QString toString(const QVariantList& importedGeoJson);
}

namespace {

QVariant coordinatesToList(const QList<QGeoCoordinate>& coordinates) {
    QList<double> ret;
    ret.reserve(coordinates.size()*2);
    for (int i=0; i<coordinates.size(); i++) {
        ret.append(coordinates[i].latitude());
        ret.append(coordinates[i].longitude());
    }
    return QVariant::fromValue(ret);
}

QVariantMap shapeToPlain(const QGeoShape& shape) {
    QVariantMap ret;

    QGeoRectangle bb = shape.boundingGeoRectangle();
    QList<double> bbox;
    bbox << bb.bottomLeft().latitude() << bb.bottomLeft().longitude()
         << bb.topRight().latitude() << bb.topRight().longitude();
    ret["bbox"] = QVariant::fromValue(bbox);

    switch (shape.type()) {
    case QGeoShape::PathType: {
        QGeoPath path(shape);
        ret["shape"] = "Path";
        ret["coordinates"] = coordinatesToList(path.path());
        ret["width"] = path.width();
        break;
    }
    case QGeoShape::PolygonType: {
        QGeoPolygon polygon(shape);
        ret["shape"] = "Polygon";
        ret["coordinates"] = coordinatesToList(polygon.perimeter());
        QVariantList holes;
        for (int i=0; i<polygon.holesCount(); i++) {
            holes.append(coordinatesToList(polygon.holePath(i)));
        }
        ret["holes"] = holes;
        break;
    }
    case QGeoShape::CircleType: {
        QGeoCircle circle(shape);
        ret["shape"] = "Circle";
        ret["coordinates"] = coordinatesToList(QList<QGeoCoordinate>() << circle.center());
        ret["radius"] = circle.radius();
        break;
    }
    case QGeoShape::RectangleType: {
        QGeoRectangle rect(shape);
        ret["shape"] = "Rectangle";
        ret["coordinates"] = coordinatesToList(QList<QGeoCoordinate>() << rect.topLeft() << rect.bottomRight());
        break;
    }
    default:
        ret["shape"] = "Unknown";
        break;
    }

    return ret;
}

}

QVariantList RJSApiLocation::QGeoJson::importGeoJson(const QJsonDocument& doc) {
    return RJSGeoJsonImpl::importGeoJson(doc);
}

QVariantList RJSApiLocation::QGeoJson::importGeoJsonPlain(const QJsonDocument& doc) {
    return toPlain(RJSGeoJsonImpl::importGeoJson(doc)).toList();
}

QVariant RJSApiLocation::QGeoJson::toPlain(const QVariant& v) {
    int t = v.userType();

    if (t==QMetaType::QVariantMap) {
        QVariantMap map = v.toMap();
        for (QVariantMap::iterator it=map.begin(); it!=map.end(); ++it) {
            it.value() = toPlain(it.value());
        }
        return map;
    }

    if (t==QMetaType::QVariantList) {
        QVariantList list = v.toList();
        for (int i=0; i<list.size(); i++) {
            list[i] = toPlain(list[i]);
        }
        return list;
    }

    if (t==qMetaTypeId<QGeoShape>() ||
        t==qMetaTypeId<QGeoRectangle>() ||
        t==qMetaTypeId<QGeoCircle>() ||
        t==qMetaTypeId<QGeoPath>() ||
        t==qMetaTypeId<QGeoPolygon>()) {
        return shapeToPlain(v.value<QGeoShape>());
    }

    if (t==qMetaTypeId<QGeoCoordinate>()) {
        return coordinatesToList(QList<QGeoCoordinate>() << v.value<QGeoCoordinate>());
    }

    return v;
}

QJsonDocument RJSApiLocation::QGeoJson::exportGeoJson(const QVariantList& list) {
    return RJSGeoJsonImpl::exportGeoJson(list);
}

QString RJSApiLocation::QGeoJson::toString(const QVariantList& importedGeoJson) {
    return RJSGeoJsonImpl::toString(importedGeoJson);
}

#endif
