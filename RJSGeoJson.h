#ifndef RJSGEOJSON_H
#define RJSGEOJSON_H

#include <QtGlobal>

#ifdef QT_LOCATION_LIB

#include <QJsonDocument>
#include <QString>
#include <QVariantList>

#include "qtjsapi_global.h"

/**
 * Script accessible stand-in for the QGeoJson namespace of Qt Location.
 *
 * QGeoJson is a namespace (and private API) in Qt Location and can therefore
 * not be bound directly. This class exposes the same static functions under
 * the same name and forwards all calls to Qt (see RJSGeoJsonImpl.cpp, which
 * is the only translation unit that includes the private Qt header).
 *
 * importGeoJson returns a QVariantList as documented for QGeoJson: a list
 * with one QVariantMap per GeoJSON object with the keys "type" (e.g.
 * "Point", "LineString", "Polygon", "Feature", "FeatureCollection", ...),
 * "data" (QGeoCircle for points, QGeoPath for line strings, QGeoPolygon for
 * polygons, QVariantList for multi geometries and collections),
 * "properties" and "id" (features only) and "bbox" (if present).
 *
 * importGeoJsonPlain returns the same structure, but every geo shape is
 * replaced by a plain QVariantMap that converts to script values without
 * wrapper objects (orders of magnitude faster for large files):
 * - "shape": "Path", "Polygon", "Circle" (points) or "Rectangle"
 * - "coordinates": flat list of doubles lat0, lon0, lat1, lon1, ...
 *   (path, polygon perimeter, circle center, rectangle top left / bottom right)
 * - "holes": list of flat coordinate lists (polygons only)
 * - "radius": circle radius in meters (circles only, -1 if not set)
 * - "bbox": minLat, minLon, maxLat, maxLon
 * QGeoCoordinate values are replaced by lists lat, lon.
 */
// The class lives in a namespace so that its static functions do not share
// the mangled symbol names of the functions in Qt's namespace QGeoJson
// (which would make the forwarding calls in RJSGeoJsonImpl.cpp bind to
// themselves). The using declaration makes it visible as QGeoJson for the
// generated wrappers.
namespace RJSApiLocation {

class QTJSAPI_EXPORT QGeoJson {
public:
    static QVariantList importGeoJson(const QJsonDocument& doc);
    static QVariantList importGeoJsonPlain(const QJsonDocument& doc);
    static QVariant toPlain(const QVariant& v);
    static QJsonDocument exportGeoJson(const QVariantList& list);
    static QString toString(const QVariantList& importedGeoJson);
};

}

using RJSApiLocation::QGeoJson;

#endif

#endif
