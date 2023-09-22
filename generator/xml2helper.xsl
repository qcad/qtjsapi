<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:qsrc="http://qcad.org/namespaces/src" 
    xmlns:qc="http://qcad.org/namespaces/xsl"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:func="http://exslt.org/functions"
    xmlns:date="http://exslt.org/dates-and-times"
    xmlns:str="http://exslt.org/strings"
    xmlns:com="http://exslt.org/common"
    extension-element-prefixes="func date str com">

<xsl:include href="string.xsl" />

<xsl:output method="text" />

<xsl:param name="mode" />
<xsl:param name="typeidbase" />

<xsl:template match="text()" />

<xsl:template match="/">
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="types">
  // Automatically generated, do not edit
  <xsl:choose>
    <xsl:when test="$mode='h'">
      #ifndef RJSHELPER_H
      #define RJSHELPER_H

      #include &lt;QtCore&gt;
      #include &lt;QtGui&gt;
      #include &lt;QtWidgets&gt;
      #include &lt;QtXml&gt;
      #include &lt;QtQuick&gt;
      #include &lt;QtQuickWidgets&gt;
      #include &lt;QtPrintSupport&gt;
      #include &lt;QtCore5Compat&gt;
      #include &lt;QtSvg&gt;
      #include &lt;QtUiTools&gt;

      #include "RJSWrapper.h"

      <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@downcast='true']">
        class RJSDowncaster_<xsl:value-of select="@name" /> {
        public:
          virtual QJSValue downcast(RJSApi&amp; handler, <xsl:value-of select="@name" />* o) = 0;
        };
      </xsl:for-each>


      QVariant getWrapperProperty(RJSApi&amp; handler, const QObject&amp; obj);
      void setWrapperProperty(RJSApi&amp; handler, QObject&amp; obj, const QVariant&amp; wrapper);
      
      QJSValue getWrapperQJSValue(const QJSValue&amp; v);
      QObject* getWrapperQObject(const QJSValue&amp; v);
      RJSWrapper* getWrapperRJSWrapper(const QJSValue&amp; v);

      /**
       * \return Wrapper in given type T for the given QJSValue.
       */
      template&lt;typename T&gt;
      T* getWrapper(const QJSValue&amp; v) {
          return dynamic_cast&lt;T*&gt;(getWrapperQObject(v));
      }


      class RJSHelper {

      public:

       
       
        //
        // custom types (manual implementation):
        //
       
        static QJSValue cpp2js_bool(RJSApi&amp; handler, bool v);
        static bool js2cpp_bool(RJSApi&amp; handler, const QJSValue&amp; v);
        static bool is_bool(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
       
        static QString js2cpp_char_ptr(RJSApi&amp; handler, const QJSValue&amp; v);
        static bool is_char_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
       
        static QJSValue cpp2js_char(RJSApi&amp; handler, const char* v);
       
        static QJSValue cpp2js_QVariant(RJSApi&amp; handler, const QVariant&amp; v);
        static QVariant js2cpp_QVariant(RJSApi&amp; handler, const QJSValue&amp; v);
        static bool is_QVariant(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
       
        static QJSValue cpp2js_QObjectList(RJSApi&amp; handler, const QList&lt;QObject*&gt;&amp; v);
        static QList&lt;QObject*&gt; js2cpp_QObjectList(RJSApi&amp; handler, const QJSValue&amp; v);
       
        static QJSValue cpp2js_QObject(RJSApi&amp; handler, QObject* v);
        static QObject* js2cpp_QObject_ptr(RJSApi&amp; handler, const QJSValue&amp; v);
        static bool is_QObject_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
       
        static QJSValue cpp2js_QWidget(RJSApi&amp; handler, QWidget* v);
        static QWidget* js2cpp_QWidget_ptr(RJSApi&amp; handler, const QJSValue&amp; v);
        static bool is_QWidget_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
       
        static QJSValue cpp2js_QDomDocument_ParseResult(RJSApi&amp; handler, QDomDocument::ParseResult v);
       
        static QJSValue cpp2js_QList_QPair_QString_QString(RJSApi&amp; handler, const QList&lt;QPair&lt;QString,QString&gt; &gt;&amp; v);
        static QList&lt;QPair&lt;QString,QString&gt; &gt; js2cpp_QList_QPair_QString_QString(RJSApi&amp; handler, const QJSValue&amp; v);
        static bool is_QList_QPair_QString_QString(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
       
        <xsl:apply-templates />
       
        // more dummy implementations
        static QJSValue cpp2js_QList_QAction(RJSApi&amp; handler, const QList&lt;QAction*&gt;&amp; v);
       
        static QList&lt;QAction*&gt; js2cpp_QList_QAction(RJSApi&amp; handler, const QJSValue&amp; v);

      
        <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@downcast='true']">
          // allow downcasting for type <xsl:value-of select="@name" />:
          private:
            static QList&lt;RJSDowncaster_<xsl:value-of select="@name"/>*&gt; downcasters_<xsl:value-of select="@name"/>;

          public:
            static void registerDowncaster_<xsl:value-of select="@name"/>(RJSDowncaster_<xsl:value-of select="@name"/>* dc) {
              downcasters_<xsl:value-of select="@name"/>.append(dc);
            }
        </xsl:for-each>
      };

      #endif
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      #include "RJSHelper.h"

      #include "header_cpp.h"

      <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@downcast='true']">
        QList&lt;RJSDowncaster_<xsl:value-of select="@name" />*&gt; RJSHelper::downcasters_<xsl:value-of select="@name" />;
      </xsl:for-each>

      /**
       * \return existing wrapper object for the given object in the context of the given engine.
       */
      QVariant getWrapperProperty(RJSApi&amp; handler, const QObject&amp; obj) {
          QJSEngine* engine = handler.getEngine();
          return obj.property((const char*)QString("%1__wrapper__").arg(engine-&gt;objectName()).toUtf8());
      }

      /**
       * Attaches the script wrapper to the original QObject as a property in the context of the given engine.
       */
      void setWrapperProperty(RJSApi&amp; handler, QObject&amp; obj, const QVariant&amp; wrapper) {
          QJSEngine* engine = handler.getEngine();
          obj.setProperty((const char*)QString("%1__wrapper__").arg(engine-&gt;objectName()).toUtf8(), wrapper);
      }

      QJSValue getWrapperQJSValue(const QJSValue&amp; v) {
          if (v.prototype().hasOwnProperty("__WRAPPER__")) {
              return v.prototype();
          }
          else {
              return v;
          }
      }

      QObject* getWrapperQObject(const QJSValue&amp; v) {
          QJSValue w = getWrapperQJSValue(v);
          if (!w.isQObject()) {
              return nullptr;
          }
          return w.toQObject();
      }

      RJSWrapper* getWrapperRJSWrapper(const QJSValue&amp; v) {
          return dynamic_cast&lt;RJSWrapper*&gt;(getWrapperQObject(v));
      }

      //
      // custom types (manual implementation):
      //

      QJSValue RJSHelper::cpp2js_bool(RJSApi&amp; handler, bool v) {
          return QJSValue(v);
      }

      bool RJSHelper::js2cpp_bool(RJSApi&amp; handler, const QJSValue&amp; v) {
          if (!v.isBool() &amp;&amp; !v.isNumber()) {
              return false;
          }
          return v.toBool();
      }

      bool RJSHelper::is_bool(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }

          // 20221122: don't allow numbers in test to distinguish between bool / int in function overrides (e.g. RAddObjectsOperation::addObject):
          // || v.isNumber();

          return v.isBool();
      }

      QString RJSHelper::js2cpp_char_ptr(RJSApi&amp; handler, const QJSValue&amp; v) {
          if (v.isNumber() &amp;&amp; v.toInt()==0) {
              // JS can pass 0 for null string:
              return QString();
          }

          return v.toString();
      }

      bool RJSHelper::is_char_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          // accept 0 for char pointer (null string):
          return v.isString() || (v.isNumber() &amp;&amp; v.toInt()==0);
      }

      QJSValue RJSHelper::cpp2js_char(RJSApi&amp; handler, const char* v) {
          return QJSValue(*v);
      }

      QJSValue RJSHelper::cpp2js_QVariant(RJSApi&amp; handler, const QVariant&amp; v) {
          if (v.isNull()) {
              return QJSValue();
          }

          if (v.userType()==QMetaType::QVariantList) {
              // convert QVariant list to QJSValue array:
              QList&lt;QVariant&gt; vList = v.toList();
              QJSEngine* engine = handler.getEngine();
              QJSValue ret = engine-&gt;newArray();
              for (int i=0; i&lt;vList.length(); i++) {
                  QVariant vItem = vList[i];
                  ret.setProperty(i, RJSHelper::cpp2js_QVariant(handler, vItem));
              }
              return ret;
          }

          //QVariant_Wrapper* ret = new QVariant_Wrapper(handler, new QVariant(v), true);
          //QVariant* v = ret-&gt;getWrapped();
          //if (v!=nullptr) {
              switch (v.userType()) {
              case QMetaType::Bool:
                  return QJSValue(v.toBool());
              case QMetaType::Int:
                  return QJSValue(v.toInt());
      //        case QMetaType::LongLong:
      //            return QJSValue(v.toLongLong());
              case QMetaType::UInt:
                  return QJSValue(v.toUInt());
      //        case QMetaType::ULongLong:
      //            return QJSValue(v.toULongLong());
              case QMetaType::Double:
                  return QJSValue(v.toDouble());
              case QMetaType::QString:
                  return QJSValue(v.toString());

              case QMetaType::QByteArray:
                  return RJSHelper::cpp2js_QByteArray(handler, v.toByteArray());
              case QMetaType::QChar:
                  return RJSHelper::cpp2js_QChar(handler, v.toChar());
              case QMetaType::QDate:
                  return RJSHelper::cpp2js_QDate(handler, v.toDate());
              case QMetaType::QDateTime:
                  return RJSHelper::cpp2js_QDateTime(handler, v.toDateTime());
              case QMetaType::QEasingCurve:
                  return RJSHelper::cpp2js_QEasingCurve(handler, v.toEasingCurve());
      //        case QMetaType::QJsonArray:
      //            return RJSHelper::cpp2js_QJsonArray(handler, v.toJsonArray());
      //        case QMetaType::QJsonDocument:
      //            return RJSHelper::cpp2js_QJsonDocument(handler, v.toJsonDocument());
      //        case QMetaType::QJsonObject:
      //            return RJSHelper::cpp2js_QJsonObject(handler, v.toJsonObject());
      //        case QMetaType::QJsonValue:
      //            return RJSHelper::cpp2js_QJsonValue(handler, v.toJsonValue());
              case QMetaType::QLine:
                  return RJSHelper::cpp2js_QLine(handler, v.toLine());
              case QMetaType::QLineF:
                  return RJSHelper::cpp2js_QLineF(handler, v.toLineF());
      //        case QMetaType::QVariantList:
      //            return RJSHelper::cpp2js_QVariantList(handler, v.toList());
              case QMetaType::QLocale:
                  return RJSHelper::cpp2js_QLocale(handler, v.toLocale());
              case QMetaType::QModelIndex:
                  return RJSHelper::cpp2js_QModelIndex(handler, v.toModelIndex());
      //        case QMetaType::QPersistentModelIndex:
      //            return RJSHelper::cpp2js_QPersistentModelIndex(handler, v.toPersistentModelIndex());
              case QMetaType::QPoint:
                  return RJSHelper::cpp2js_QPoint(handler, v.toPoint());
              case QMetaType::QPointF:
                  return RJSHelper::cpp2js_QPointF(handler, v.toPointF());
              case QMetaType::QRect:
                  return RJSHelper::cpp2js_QRect(handler, v.toRect());
              case QMetaType::QRectF:
                  return RJSHelper::cpp2js_QRectF(handler, v.toRectF());
              case QMetaType::QRegularExpression:
                  return RJSHelper::cpp2js_QRegularExpression(handler, v.toRegularExpression());
              case QMetaType::QSize:
                  return RJSHelper::cpp2js_QSize(handler, v.toSize());
              case QMetaType::QSizeF:
                  return RJSHelper::cpp2js_QSizeF(handler, v.toSizeF());
              case QMetaType::QTime:
                  return RJSHelper::cpp2js_QTime(handler, v.toTime());
              case QMetaType::QUrl:
                  return RJSHelper::cpp2js_QUrl(handler, v.toUrl());
              case QMetaType::QColor:
                  return RJSHelper::cpp2js_QColor(handler, v.value&lt;QColor&gt;());
              case QMetaType::QPalette:
                  return RJSHelper::cpp2js_QPalette(handler, v.value&lt;QPalette&gt;());
      //        case QMetaType::QUuid:
      //            return RJSHelper::cpp2js_QUuid(handler, v.toUuid());

              // TODO: add more conversions:
              default:
                  break;
              }
          //}

          if (v.canConvert&lt;QFont&gt;()) {
              return RJSHelper::cpp2js_QFont(handler, v.value&lt;QFont&gt;());
          }

          if (v.canConvert&lt;QPushButton*&gt;()) {
              return RJSHelper::cpp2js_QPushButton(handler, v.value&lt;QPushButton*&gt;());
          }

          if (v.canConvert&lt;QList&lt;double&gt; &gt;()) {
              return RJSHelper::cpp2js_QList_double(handler, v.value&lt;QList&lt;double&gt; &gt;());
          }
          if (v.canConvert&lt;QStringList&gt;()) {
              return RJSHelper::cpp2js_QStringList(handler, v.value&lt;QStringList&gt;());
          }
          if (v.canConvert&lt;QKeySequence&gt;()) {
              return RJSHelper::cpp2js_QKeySequence(handler, v.value&lt;QKeySequence&gt;());
          }

          qWarning() &lt;&lt; "RJSHelper::cpp2js_QVariant: unhandled variant type: " &lt;&lt; v.userType() &lt;&lt; " / " &lt;&lt; v.metaType().name();

          QJSEngine* engine = handler.getEngine();
          // wrapper takes ownership of QVariant object:
          QVariant_Wrapper* ret = new QVariant_Wrapper(handler, new QVariant(v), true);
          //return engine-&gt;newQObject(ret);

          // JS: new QVariant('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("QVariant");
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine-&gt;newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine-&gt;globalObject().setProperty("wrapper", engine-&gt;newQObject(ret));
          //QJSValue r = engine-&gt;evaluate("new QVariant('__GOT_WRAPPER__', wrapper);");

          if (r.isError()) {
              qWarning()
                      &lt;&lt; "Uncaught exception in new QVariant(wrapper)"
                      &lt;&lt; ":" &lt;&lt; r.toString();
          }
          return r;
      }

      bool RJSHelper::is_QVariant(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              // make sure a missing parameter is not counted as a valid variant:
              // e.g. QComboBox::addItem(icon, text, userData) != QComboBox::addItem(text, userData)
              return acceptUndefined;
          }

          return true;
      }

      QVariant RJSHelper::js2cpp_QVariant(RJSApi&amp; handler, const QJSValue&amp; v) {
          if (v.isNumber()) {
              // value is number:
              return QVariant(v.toNumber());
          }
          if (v.isBool()) {
              // value is bool:
              return QVariant(v.toBool());
          }
          if (v.isString()) {
              // value is string:
              return QVariant(v.toString());
          }
          if (v.isArray()) {
              // value is an array:
              QList&lt;QVariant&gt; variantList;
              const int length = v.property("length").toInt();
              for (int i = 0; i &lt; length; ++i) {
                  variantList.append(RJSHelper::js2cpp_QVariant(handler, v.property(i)));
              }
              return QVariant(variantList);
          }

          RJSWrapper* wrapper = getWrapperRJSWrapper(v);
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "RJSHelper::js2cpp_QVariant: no wrapper";
              return QVariant();
          }

          // value is QSize, QUrl, ...:

          switch (wrapper-&gt;getWrappedType()) {
      //    case RJSType::QPersistentModelIndex_Type:
      //        return QVariant(RJSHelper::js2cpp_QPersistentModelIndex(handler, v));
          case RJSType::QModelIndex_Type:
              return QVariant(RJSHelper::js2cpp_QModelIndex(handler, v));
      //    case RJSType::QJsonDocument_Type:
      //        return QVariant(RJSHelper::js2cpp_QJsonDocument(handler, v));
      //    case RJSType::QJsonArray_Type:
      //        return QVariant(RJSHelper::js2cpp_QJsonArray(handler, v));
      //    case RJSType::QJsonObject_Type:
      //        return QVariant(RJSHelper::js2cpp_QJsonObject(handler, v));
      //    case RJSType::QJsonValue_Type:
      //        return QVariant(RJSHelper::js2cpp_QJsonValue(handler, v));
          case RJSType::QUrl_Type:
              return QVariant(RJSHelper::js2cpp_QUrl(handler, v));
      //    case RJSType::QUuid_Type:
      //        return QVariant(RJSHelper::js2cpp_QUuid(handler, v));
      //    case RJSType::QEasingCurve_Type:
      //        return QVariant(RJSHelper::js2cpp_QEasingCurve(handler, v));
          case RJSType::QRegularExpression_Type:
              return QVariant(RJSHelper::js2cpp_QRegularExpression(handler, v));
          case RJSType::QLocale_Type:
              return QVariant(RJSHelper::js2cpp_QLocale(handler, v));
          case RJSType::QRectF_Type:
              return QVariant(RJSHelper::js2cpp_QRectF(handler, v));
          case RJSType::QRect_Type:
              return QVariant(RJSHelper::js2cpp_QRect(handler, v));
          case RJSType::QLineF_Type:
              return QVariant(RJSHelper::js2cpp_QLineF(handler, v));
          case RJSType::QLine_Type:
              return QVariant(RJSHelper::js2cpp_QLine(handler, v));
          case RJSType::QPointF_Type:
              return QVariant(RJSHelper::js2cpp_QPointF(handler, v));
          case RJSType::QPoint_Type:
              return QVariant(RJSHelper::js2cpp_QPoint(handler, v));
          case RJSType::QSizeF_Type:
              return QVariant(RJSHelper::js2cpp_QSizeF(handler, v));
          case RJSType::QSize_Type:
              return QVariant(RJSHelper::js2cpp_QSize(handler, v));
      //    case RJSType::QHash&lt;QString, QVariant&gt;_Type:
      //        return QVariant(RJSHelper::js2cpp_QHash&lt;QString, QVariant&gt;(handler, v));
      //    case RJSType::QMap&lt;QString, QVariant&gt;_Type:
      //        return QVariant(RJSHelper::js2cpp_QMap&lt;QString, QVariant&gt;(handler, v));
      //    case RJSType::QList&lt;QVariant&gt;_Type:
      //        return QVariant(RJSHelper::js2cpp_QList&lt;QVariant&gt;(handler, v));
          case RJSType::QDateTime_Type:
              return QVariant(RJSHelper::js2cpp_QDateTime(handler, v));
          case RJSType::QTime_Type:
              return QVariant(RJSHelper::js2cpp_QTime(handler, v));
          case RJSType::QDate_Type:
              return QVariant(RJSHelper::js2cpp_QDate(handler, v));
      //    case RJSType::QChar_Type:
      //        return QVariant(RJSHelper::js2cpp_QChar(handler, v));
      //    case RJSType::QStringList_Type:
      //        return QVariant(RJSHelper::js2cpp_QStringList(handler, v));
      //    case RJSType::QLatin1String_Type:
      //        return QVariant(RJSHelper::js2cpp_QLatin1String(handler, v));
      //    case RJSType::QString_Type:
      //        return QVariant(RJSHelper::js2cpp_QString(handler, v));
      //    case RJSType::QBitArray_Type:
      //        return QVariant(RJSHelper::js2cpp_QBitArray(handler, v));
          case RJSType::QByteArray_Type:
              return QVariant(RJSHelper::js2cpp_QByteArray(handler, v));

          case RJSType::QWidget_Type:
              return QVariant::fromValue(RJSHelper::js2cpp_QWidget_ptr(handler, v));
          case RJSType::QToolBar_Type:
              return QVariant::fromValue(RJSHelper::js2cpp_QToolBar_ptr(handler, v));
          case RJSType::QPushButton_Type:
              return QVariant::fromValue(RJSHelper::js2cpp_QPushButton_ptr(handler, v));

          case RJSType::QPalette_Type:
              return QVariant::fromValue(RJSHelper::js2cpp_QPalette(handler, v));

          case RJSType::QKeySequence_Type:
              return QVariant::fromValue(RJSHelper::js2cpp_QKeySequence(handler, v));
          case RJSType::QFont_Type:
              return QVariant::fromValue(RJSHelper::js2cpp_QFont(handler, v));

          case RJSType::QVariant_Type:
              {
                  QVariant var = *(QVariant*)wrapper-&gt;getWrappedVoid();
                  qDebug() &lt;&lt; "variant:" &lt;&lt; var;
                  return var;
              }

          default:
              {
                  QVariant var = *(QVariant*)wrapper->getWrappedVoid();
                  if (var.canConvert&lt;QList&lt;QKeySequence&gt; &gt;()) {
                      return QVariant::fromValue(var.value&lt;QList&lt;QKeySequence&gt; &gt;());
                  }
              }

              qWarning() &lt;&lt; "unhandled QVariant type:" &lt;&lt; wrapper-&gt;getWrappedType();
              handler.trace();
              return *(QVariant*)wrapper-&gt;getWrappedVoid();


              // converting QVariant in QJSValue to QJSValue converts to QJSValue with type bool, int, etc.:
              // recursion:
      //        QJSValue v2 = RJSHelper::cpp2js_QVariant(engine, v.toVariant());
      //        if (v2.isVariant()) {
      //            qWarning() &lt;&lt; "RJSHelper::js2cpp_QVariant: cannot convert variant to appropriate type";
      //            return QVariant();
      //        }
      //        else {
      //            // convert this new QJSValue to a variant:
      //            return RJSHelper::js2cpp_QVariant(engine, v2);
      //        }

          }

      }

      QJSValue RJSHelper::cpp2js_QObjectList(RJSApi&amp; handler, const QList&lt;QObject*&gt;&amp; v) {
          return RJSHelper::cpp2js_QList_QObject_ptr(handler, v);
      }

      QList&lt;QObject*&gt; RJSHelper::js2cpp_QObjectList(RJSApi&amp; handler, const QJSValue&amp; v) {
          return RJSHelper::js2cpp_QList_QObject_ptr(handler, v);
      }

      QJSValue RJSHelper::cpp2js_QObject(RJSApi&amp; handler, QObject* v) {
          if (v==nullptr) {
              return QJSValue(QJSValue::UndefinedValue);
          }

          if (v-&gt;isWidgetType()) {
              QWidget* o = qobject_cast&lt;QWidget*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QWidget(handler, o);
              }
          }
          {
              QAction* o = qobject_cast&lt;QAction*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QAction(handler, o);
              }
          }
          {
              QFile* o = qobject_cast&lt;QFile*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QFile(handler, o);
              }
          }

          {
              QButtonGroup* o = qobject_cast&lt;QButtonGroup*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QButtonGroup(handler, o);
              }
          }
          {
              QLayout* o = qobject_cast&lt;QLayout*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QLayout(handler, o);
              }
          }

          // don't return wrapper objects to prevent wrappers from being deleted in scripts (e.g. while destroying children):
          {
              RJSWrapperObj* o = qobject_cast&lt;RJSWrapperObj*&gt;(v);
              if (o!=nullptr) {
                  return QJSValue(QJSValue::UndefinedValue);
              }
          }
          // TODO: add more QObject but not QWidget or QLayout types

          if (v->metaObject()->className()!="QPropertyAnimation" &amp;&amp; v->metaObject()->className()!="QFormInternal::TranslationWatcher") {
              qWarning() &lt;&lt; "RJSHelper::cpp2js_QObject: not wrapping object:" &lt;&lt; v->objectName() &lt;&lt; " class: " &lt;&lt; v->metaObject()->className();
          }

          //QObject_Wrapper* ret = new QObject_Wrapper(handler, v, false);
          //return handler-&gt;newQObject(ret);

          /*
          QObject_Wrapper* ret = new QObject_Wrapper(handler, v, false);
          QJSEngine* engine = handler.getEngine();

          // JS: new QObject('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("QObject");
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine-&gt;newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine-&gt;globalObject().setProperty("__wrapper__", engine-&gt;newQObject(ret));
          //QJSValue r = engine-&gt;evaluate("new QObject('__GOT_WRAPPER__', __wrapper__);");

          if (r.isError()) {
              qWarning()
                      &lt;&lt; "Uncaught exception in new QObject(wrapper)"
                      &lt;&lt; ":" &lt;&lt; r.toString();
          }
          return r;
          */

          return QJSValue(QJSValue::UndefinedValue);
      }

      QObject* RJSHelper::js2cpp_QObject_ptr(RJSApi&amp; handler, const QJSValue&amp; v) {
          QJSValue jwrapper = getWrapperQJSValue(v);
          if (jwrapper.isNumber() &amp;&amp; jwrapper.toInt()==0) {
              // 0 is allowed for pointers (null ptr):
              return nullptr;
          }
          if (!jwrapper.isQObject()) {
              //qWarning() &lt;&lt; "RJSHelper::js2cpp_QObject: not a QObject";
              return nullptr;
          }
          QObject* obj = jwrapper.toQObject();
          //QObject_Wrapper* wrapper = qobject_cast&lt;QObject_Wrapper*&gt;(obj);
          RJSWrapper* wrapper = dynamic_cast&lt;RJSWrapper*&gt;(obj);
          //QObject_Wrapper* wrapper = (QObject_Wrapper*)obj;
          //QObject_Wrapper* wrapper = getWrapper&lt;QObject_Wrapper&gt;(v);
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "RJSHelper::js2cpp_QObject: no wrapper";
              return nullptr;
          }
          //return (QObject*)wrapper-&gt;getWrappedVoid();
          return QObject_Wrapper::getWrappedBase(wrapper);

          //return wrapper-&gt;getWrapped();
      }

      bool RJSHelper::is_QObject_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isObject() || (v.isNumber() &amp;&amp; v.toInt()==0);
      }

      QJSValue RJSHelper::cpp2js_QWidget(RJSApi&amp; handler, QWidget* v) {
          {
              QDockWidget* o = qobject_cast&lt;QDockWidget*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QDockWidget(handler, o);
              }
          }


          // QComboBox:
          {
              QFontComboBox* o = qobject_cast&lt;QFontComboBox*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QFontComboBox(handler, o);
              }
          }
          {
              QComboBox* o = qobject_cast&lt;QComboBox*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QComboBox(handler, o);
              }
          }

          // QLineEdit:
          {
              QLineEdit* o = qobject_cast&lt;QLineEdit*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QLineEdit(handler, o);
              }
          }


          {
              QSpinBox* o = qobject_cast&lt;QSpinBox*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QSpinBox(handler, o);
              }
          }

          {
              QMenu* o = qobject_cast&lt;QMenu*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QMenu(handler, o);
              }
          }

          {
              QLabel* o = qobject_cast&lt;QLabel*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QLabel(handler, o);
              }
          }
          {
              QToolButton* o = qobject_cast&lt;QToolButton*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QToolButton(handler, o);
              }
          }
          {
              QToolBar* o = qobject_cast&lt;QToolBar*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QToolBar(handler, o);
              }
          }
          {
              QPushButton* o = qobject_cast&lt;QPushButton*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QPushButton(handler, o);
              }
          }
          {
              QGroupBox* o = qobject_cast&lt;QGroupBox*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QGroupBox(handler, o);
              }
          }
          {
              QDialogButtonBox* o = qobject_cast&lt;QDialogButtonBox*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QDialogButtonBox(handler, o);
              }
          }
          {
              QSplitter* o = qobject_cast&lt;QSplitter*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QSplitter(handler, o);
              }
          }
          {
              QMdiSubWindow* o = qobject_cast&lt;QMdiSubWindow*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QMdiSubWindow(handler, o);
              }
          }
          {
              QMdiArea* o = qobject_cast&lt;QMdiArea*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QMdiArea(handler, o);
              }
          }
          {
              QScrollBar* o = qobject_cast&lt;QScrollBar*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QScrollBar(handler, o);
              }
          }
          {
              QPlainTextEdit* o = qobject_cast&lt;QPlainTextEdit*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QPlainTextEdit(handler, o);
              }
          }
          {
              QScrollArea* o = qobject_cast&lt;QScrollArea*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QScrollArea(handler, o);
              }
          }
          {
              QCheckBox* o = qobject_cast&lt;QCheckBox*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QCheckBox(handler, o);
              }
          }
          {
              QRadioButton* o = qobject_cast&lt;QRadioButton*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QRadioButton(handler, o);
              }
          }

          // QTreeWidget:
          {
              QTreeWidget* o = qobject_cast&lt;QTreeWidget*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QTreeWidget(handler, o);
              }
          }

          // QListWidget:
          {
              QListWidget* o = qobject_cast&lt;QListWidget*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QListWidget(handler, o);
              }
          }

          // QTextEdit:
          {
              QTextBrowser* o = qobject_cast&lt;QTextBrowser*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QTextBrowser(handler, o);
              }
          }
          {
              QTextEdit* o = qobject_cast&lt;QTextEdit*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QTextEdit(handler, o);
              }
          }

          {
              QTabWidget* o = qobject_cast&lt;QTabWidget*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QTabWidget(handler, o);
              }
          }
          {
              QSlider* o = qobject_cast&lt;QSlider*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QSlider(handler, o);
              }
          }



          {
              QFrame* o = qobject_cast&lt;QFrame*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QFrame(handler, o);
              }
          }
          {
              QDialog* o = qobject_cast&lt;QDialog*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QDialog(handler, o);
              }
          }

          {
              QStatusBar* o = qobject_cast&lt;QStatusBar*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QStatusBar(handler, o);
              }
          }

          {
              QProgressBar* o = qobject_cast&lt;QProgressBar*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QProgressBar(handler, o);
              }
          }

          {
              QTabBar* o = qobject_cast&lt;QTabBar*&gt;(v);
              if (o!=nullptr) {
                  return RJSHelper::cpp2js_QTabBar(handler, o);
              }
          }

          for (int i=0; i&lt;downcasters_QWidget.length(); i++) {
              QJSValue dc = downcasters_QWidget[i]-&gt;downcast(handler, v);
              if (!dc.isUndefined()) {
                  return dc;
              }
          }

          // TODO: add more QWidget types

          //QWidget_Wrapper* ret = new QWidget_Wrapper(handler, v, false);
          //return handler-&gt;newQObject(ret);



          QWidget_Wrapper* ret = nullptr;
          if (v) {
              // look up existing wrapper:
              QVariant var = getWrapperProperty(handler, *v);
              //qDebug() &lt;&lt; "existing wrapper QVariant:" &lt;&lt; var;
              ret = var.value&lt;QWidget_Wrapper*&gt;();
              if (ret==nullptr) {
                  if (var.isValid()) {
                      qWarning() &lt;&lt; "RJSHelper::cpp2js_QWidget: invalid wrapper attached to QObject: " &lt;&lt; var.typeName();
                      QObject_Wrapper* ow = var.value&lt;QObject_Wrapper*&gt;();
                      delete ow;
                  }
                  // create new wrapper:
                  //qDebug() &lt;&lt; "creating new wrapper for " &lt;&lt; (unsigned long long int)v;
                  ret = new QWidget_Wrapper(handler, v, false);
                  QVariant varNew = QVariant::fromValue(ret);
                  setWrapperProperty(handler, *v, varNew);
              }
          }
          else {
              // wrapper for nullptr:
              ret = new QWidget_Wrapper(handler, nullptr, false);
          }



          //QWidget_Wrapper* ret = new QWidget_Wrapper(handler, v);
          QJSEngine* engine = handler.getEngine();

          // JS: new QWidget('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("QWidget");
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine-&gt;newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine-&gt;globalObject().setProperty("wrapper", engine-&gt;newQObject(ret));
          //QJSValue r = engine-&gt;evaluate("new QWidget('__GOT_WRAPPER__', wrapper);");
          if (r.isError()) {
              qWarning()
                      &lt;&lt; "Uncaught exception in new QObject(wrapper)"
                      &lt;&lt; ":" &lt;&lt; r.toString();
          }
          return r;
      }

      QWidget* RJSHelper::js2cpp_QWidget_ptr(RJSApi&amp; handler, const QJSValue&amp; v) {
          QJSValue jwrapper = getWrapperQJSValue(v);
          if (jwrapper.isNumber() &amp;&amp; jwrapper.toInt()==0) {
              // 0 is allowed for pointers (null ptr):
              return nullptr;
          }
          if (!jwrapper.isQObject()) {
              //qWarning() &lt;&lt; "RJSHelper::js2cpp_QWidget: not a QObject";
              return nullptr;
          }
          QObject* obj = jwrapper.toQObject();
          RJSWrapper* wrapper = dynamic_cast&lt;RJSWrapper*&gt;(obj);
          //QWidget_Wrapper* wrapper = qobject_cast&lt;QWidget_Wrapper*&gt;(obj);
          //QWidget_Wrapper* wrapper = (QWidget_Wrapper*)obj;
          //QWidget_Wrapper* wrapper = getWrapper&lt;QWidget_Wrapper&gt;(v);
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "RJSHelper::js2cpp_QWidget: no wrapper";
              return nullptr;
          }
          //return (QWidget*)wrapper-&gt;getWrappedVoid();
          //return wrapper-&gt;getWrapped();
          return QWidget_Wrapper::getWrappedBase(wrapper);
      }

      bool RJSHelper::is_QWidget_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          if (v.isNumber()) {
              return v.toInt()==0;
          }
          //return v.isObject() || (v.isNumber() &amp;&amp; v.toInt()==0);
          //QJSValue fun = v.property("getObjectType");
          QJSValue fun = v.property("isOfObjectType");
          if (fun.isUndefined() || !fun.isCallable()) {
              //qDebug() &lt;&lt; "cannot get type of JS object";
              //engine-&gt;evaluate("console.trace()");
              //return v.isObject();
              return false;
          }
          return fun.call(QJSValueList() &lt;&lt; QJSValue(RJSType::QWidget_Type)).toBool();
          //return fun.call(RJSType::QWidget_Type);
          //return fun.call().toInt()==RJSType::QWidget_Type;
      }

      QJSValue RJSHelper::cpp2js_QDomDocument_ParseResult(RJSApi&amp; handler, QDomDocument::ParseResult v) {
          QJSEngine* engine = handler.getEngine();
          QJSValue ret = engine->newObject();
          ret.setProperty("errorColumn", (int)v.errorColumn);
          ret.setProperty("errorLine", (int)v.errorLine);
          ret.setProperty("errorMessage", v.errorMessage);
          ret.setProperty("result", (bool)v);
          return ret;
      }

      QJSValue RJSHelper::cpp2js_QList_QPair_QString_QString(RJSApi&amp; handler, const QList&lt;QPair&lt;QString,QString&gt;&gt;&amp; v) {
          QJSEngine* engine = handler.getEngine();
          QJSValue ret = engine->newArray((uint)v.length());
          for (int i=0; i&lt;v.length(); i++) {
              ret.setProperty((quint32)i, RJSHelper::cpp2js_QPair_QString_QString(handler, v.at(i)));
          }
          return ret;
      }

      QList&lt;QPair&lt;QString,QString&gt;&gt; RJSHelper::js2cpp_QList_QPair_QString_QString(RJSApi&amp; handler, const QJSValue&amp; v) {
          QList&lt;QPair&lt;QString,QString&gt;&gt; ret;

          if (!v.isArray()) {
              qWarning() &lt;&lt; "RJSHelper::js2cpp_QList_QPair_QString,QString: value is not an array";
              return ret;
          }

          const int length = v.property("length").toInt();
          for (int i=0; i&lt;length; ++i) {
              ret.append(RJSHelper::js2cpp_QPair_QString_QString(handler, v.property(i)));
          }

          return ret;
      }

      bool RJSHelper::is_QList_QPair_QString_QString(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isArray();
      }

      <xsl:apply-templates />

      QJSValue RJSHelper::cpp2js_QList_QAction(RJSApi&amp; handler, const QList&lt;QAction*&gt;&amp; v) { return QJSValue(); }

      QList&lt;QAction*&gt; RJSHelper::js2cpp_QList_QAction(RJSApi&amp; handler, const QJSValue&amp; v) { return QList&lt;QAction*&gt;(); }
    </xsl:when>
  </xsl:choose>
</xsl:template>

<xsl:template match="primitive">
  // ----------------
  // primitive types:
  // ----------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="primitive/type">
  <xsl:variable name="type">
    <xsl:choose>
      <!--
      <xsl:when test="qc:ends-with(text(), '__FLAGS')">
        <xsl:value-of select="qc:replace(text(), '__FLAGS', '')" />
      </xsl:when>
      -->
      <xsl:when test="text()='unsignedlong'">
        <xsl:text>unsigned long</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="text()" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:choose>
      <xsl:when test="$type='unsigned long'">
        <xsl:text>unsignedlong</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="qc:replace($type, '::', '_')" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="flags">
    <xsl:choose>
      <!--
      <xsl:when test="qc:ends-with($type, '__FLAGS') or @flags='true'">
      -->
      <xsl:when test="@flags='true'">
        <xsl:text>true</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text>false</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:choose>
      <xsl:when test="$type='QString' or $type='QChar'">
        <xsl:text>const QString&amp;</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$type" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="convRet">
    <xsl:choose>
      <xsl:when test="$type='bool'">
        <xsl:text>toBool()</xsl:text>
      </xsl:when>
      <xsl:when test="$type='QString' or $type='QStringView'">
        <xsl:text>toString()</xsl:text>
      </xsl:when>
      <xsl:when test="$type='QChar'">
        <xsl:text>toString().at(0)</xsl:text>
      </xsl:when>
      <xsl:when test="contains($type, '::')">
        <xsl:text>toInt()</xsl:text>
      </xsl:when>
      <xsl:when test="$type='double' or $type='char' or $type='qreal' or $type='float' or $type='int' or $type='uint' or $type='qint64' or $type='quint64' or $type='quint32' or $type='quint16' or $type='qlonglong' or $type='qulonglong' or $type='qsizetype' or $type='long int' or $type='long long int' or $type='short' or $type='ushort' or $type='long' or $type='ulong' or $type='unsigned long' or $type='unsigned long long int'">
        <xsl:text>toNumber()</xsl:text>
      </xsl:when>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="test">
    <xsl:choose>
      <xsl:when test="$type='bool'">
        <xsl:text>toBool()</xsl:text>
      </xsl:when>
      <xsl:when test="$type='QString' or $type='QChar' or $type='QStringView'">
        <xsl:text>isString()</xsl:text>
      </xsl:when>
      <xsl:when test="contains($type, '::')">
        <xsl:text>isNumber()</xsl:text>
      </xsl:when>
      <xsl:when test="$type='double' or $type='char' or $type='qreal' or $type='float' or $type='int' or $type='uint' or $type='qint64' or $type='quint64' or $type='quint32' or $type='quint16' or $type='qlonglong' or $type='qulonglong' or $type='qsizetype' or $type='long int' or $type='long long int' or $type='short' or $type='ushort' or $type='long' or $type='ulong' or $type='unsigned long' or $type='unsigned long long int'">
        <xsl:text>isNumber()</xsl:text>
      </xsl:when>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="def">
    <xsl:choose>
      <xsl:when test="$type='bool'">
        <xsl:text>false</xsl:text>
      </xsl:when>
      <xsl:when test="$type='QString'">
        <xsl:text>QString()</xsl:text>
      </xsl:when>
      <xsl:when test="$type='QStringView'">
        <xsl:text>QStringView()</xsl:text>
      </xsl:when>
      <xsl:when test="$type='QChar'">
        <xsl:text>QChar()</xsl:text>
      </xsl:when>
      <xsl:when test="contains($type, '::')">
        <xsl:choose>
          <xsl:when test="$flags='true'">
            <xsl:value-of select="$type"/>()
          </xsl:when>
          <xsl:otherwise>
            (<xsl:value-of select="$type"/>)0
          </xsl:otherwise>
        </xsl:choose>
      </xsl:when>
      <xsl:when test="$type='double' or $type='char' or $type='qreal' or $type='float' or $type='int' or $type='uint' or $type='qint64' or $type='quint64' or $type='quint32' or $type='quint16' or $type='qlonglong' or $type='qulonglong' or $type='qsizetype' or $type='long int' or $type='short' or $type='ushort' or $type='long' or $type='ulong' or $type='unsigned long'">
        <xsl:text>0</xsl:text>
      </xsl:when>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="cast">
    <xsl:choose>
      <xsl:when test="$type='bool'">
        <xsl:text></xsl:text>
      </xsl:when>
      <xsl:when test="$type='qint64' or $type='quint64' or $type='qsizetype' or $type='long' or $type='qlonglong' or $type='ulong' or $type='qulonglong' or $type='unsigned long'"> 
        <xsl:text>(int)</xsl:text>
      </xsl:when>
    </xsl:choose>
  </xsl:variable>

  <!-- conversion function for QJSValue constructor -->
  <xsl:variable name="conv">
    <xsl:choose>
      <xsl:when test="$type='QStringView'">
        <xsl:text>.toString()</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text></xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="castRet">
    <xsl:choose>
      <xsl:when test="$type='bool'">
        <xsl:text></xsl:text>
      </xsl:when>
      <xsl:when test="contains($type, '::')">
        <!-- cast return value from int to enum, e.g. (int) -->
        (<xsl:value-of select="$type"/>)
      </xsl:when>
    </xsl:choose>
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, <xsl:value-of select="$para" /> v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func"/>(RJSApi&amp; handler, <xsl:value-of select="$para"/> v) {
        return QJSValue(<xsl:value-of select="$cast"/>v<xsl:value-of select="$conv"/>);
      }

      <xsl:value-of select="$type"/> RJSHelper::js2cpp_<xsl:value-of select="$func"/>(RJSApi&amp; handler, const QJSValue&amp; v) {
        if (!v.<xsl:value-of select="$test"/>) {
          return <xsl:value-of select="$def"/>;
        }
        return <xsl:value-of select="$castRet"/>v.<xsl:value-of select="$convRet"/>;
      }

      bool RJSHelper::is_<xsl:value-of select="$func"/>(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
        if (v.isUndefined() || v.isNull()) {
          return acceptUndefined;
        }
        return v.<xsl:value-of select="$test"/>;
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>

<xsl:template match="type" mode="ifdef">
  <xsl:if test="@ifdef">
    #ifdef <xsl:value-of select="@ifdef"/>
  </xsl:if>
</xsl:template>

<xsl:template match="type" mode="endif">
  <xsl:if test="@ifdef">
    #endif
  </xsl:if>
</xsl:template>




<xsl:template match="shared_ptr">
  // ---------------------
  // QSharedPointer types:
  // ---------------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="shared_ptr/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:text>QSharedPointer_</xsl:text>
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         '&lt;', '_'
      ), '&gt;', ''
      ), '::', '_'
      )" />
  </xsl:variable>

  <xsl:variable name="sharedPointerType">
    <xsl:text>QSharedPointer&lt;</xsl:text><xsl:value-of select="$type" /><xsl:text>&gt;</xsl:text>
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$sharedPointerType" />&amp; v);
      static <xsl:value-of select="$sharedPointerType" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$sharedPointerType" />&amp; v) {
          QJSEngine* engine = handler.getEngine();
          <xsl:value-of select="$type" />_Wrapper* ret = new <xsl:value-of select="$type" />_Wrapper(handler, v);

          //engine-&gt;globalObject().setProperty("wrapper", engine-&gt;newQObject(ret));
          //return engine-&gt;evaluate("new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper);");

          // JS: new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("<xsl:value-of select="$type" />");
          if (cl.isUndefined()) {
              qWarning() &lt;&lt; "Class <xsl:value-of select="$type" /> is undefined. Use <xsl:value-of select="$type" />_Wrapper::init().";
          }
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine-&gt;newQObject(ret));
          return cl.callAsConstructor(args);
      }

      <xsl:value-of select="$sharedPointerType" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) {
          <xsl:value-of select="$type" />_Wrapper* wrapper = getWrapper&lt;<xsl:value-of select="$type" />_Wrapper&gt;(v);
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: no wrapper";
              return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;();
          }
          //return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(getWrapped_<xsl:value-of select="$type" />(wrapper));
          if (wrapper-&gt;hasWrappedSp()) {
              return wrapper-&gt;getWrappedSp();
          }
          else if (wrapper-&gt;getWrapped()==nullptr) {
              return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;();
          }
          else {
              // wrapper of normal pointer, create QSharedPointer on the fly over clone of object:
              //return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(wrapper-&gt;getWrappedClone());
              //return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(wrapper-&gt;getWrapped());
              <xsl:choose>
                <xsl:when test="$type='QTextLayout'">
                  // QTextLayout cannot be cloned:
                  return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(wrapper-&gt;getWrapped());
                </xsl:when>
                <xsl:otherwise>
                  // create clone on the fly:
                  return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(wrapper-&gt;getWrapped()->clone());
                </xsl:otherwise>
              </xsl:choose>
          }
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          //return v.property("getType").call().toInt()==RJSType::<xsl:value-of select="$func" />_Type;
          return !v.isUndefined();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
    
</xsl:template>




<xsl:template match="shared_ptr_no_copy">
  // ------------------------------------
  // QSharedPointer types (non-copyable):
  // ------------------------------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="shared_ptr_no_copy/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:text>QSharedPointer_</xsl:text>
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         '&lt;', '_'
      ), '&gt;', ''
      ), '::', '_'
      )" />
  </xsl:variable>

  <xsl:variable name="sharedPointerType">
    <xsl:text>QSharedPointer&lt;</xsl:text><xsl:value-of select="$type" /><xsl:text>&gt;</xsl:text>
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$sharedPointerType" />&amp; v);
      static <xsl:value-of select="$sharedPointerType" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$sharedPointerType" />&amp; v) {
          QJSEngine* engine = handler.getEngine();
          <xsl:value-of select="$type" />_Wrapper* ret = new <xsl:value-of select="$type" />_Wrapper(handler, v);

          //engine-&gt;globalObject().setProperty("wrapper", engine-&gt;newQObject(ret));
          //return engine-&gt;evaluate("new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper);");

          // JS: new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("<xsl:value-of select="$type" />");
          if (cl.isUndefined()) {
              qWarning() &lt;&lt; "Class <xsl:value-of select="$type" /> is undefined. Use <xsl:value-of select="$type" />_Wrapper::init().";
          }
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine-&gt;newQObject(ret));
          return cl.callAsConstructor(args);
      }

      <xsl:value-of select="$sharedPointerType" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) {
          <xsl:value-of select="$type" />_Wrapper* wrapper = getWrapper&lt;<xsl:value-of select="$type" />_Wrapper&gt;(v);
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: no wrapper";
              return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;();
          }
          //return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(getWrapped_<xsl:value-of select="$type" />(wrapper));
          if (wrapper-&gt;hasWrappedSp()) {
              return wrapper-&gt;getWrappedSp();
          }
          else if (wrapper-&gt;getWrapped()==nullptr) {
              return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;();
          }
          else {
              // wrapper of normal pointer, create QSharedPointer on the fly over clone of object:
              //return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(wrapper-&gt;getWrappedClone());
              //return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(wrapper-&gt;getWrapped()->clone());
              //qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: object cannot be cloned";
              //return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;();

              <xsl:choose>
                <xsl:when test="$type='QTextLayout' or qc:ends-with($type, 'Data')">
                  // cannot be cloned:
                  return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(wrapper-&gt;getWrapped());
                </xsl:when>
                <xsl:otherwise>
                  // create clone on the fly:
                  return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;((<xsl:value-of select="$type" />*)wrapper-&gt;getWrapped()->clone());
                  //return QSharedPointer&lt;<xsl:value-of select="$type" />&gt;(wrapper-&gt;getWrapped()->clone());
                </xsl:otherwise>
              </xsl:choose>
          }
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          //return v.property("getType").call().toInt()==RJSType::<xsl:value-of select="$func" />_Type;
          return !v.isUndefined();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="wrapped">
  // --------------
  // wrapped types:
  // --------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="wrapped/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />* v);
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />* v) {
          QJSEngine* engine = handler.getEngine();
          <xsl:value-of select="$type" />_Wrapper* ret;

          if (v==nullptr) {
              ret = new <xsl:value-of select="$type" />_Wrapper(handler, nullptr, false);
          }
          else {
              // wrapper takes ownership of <xsl:value-of select="$type" /> object:
              ret = new <xsl:value-of select="$type" />_Wrapper(handler, new <xsl:value-of select="$type" />(*v), true);
          }

          // JS: new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("<xsl:value-of select="$type" />");
          if (cl.isUndefined()) {
              qWarning() &lt;&lt; "Class <xsl:value-of select="$type" /> is undefined. Use <xsl:value-of select="$type" />_Wrapper::init().";
          }
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine-&gt;newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine-&gt;globalObject().setProperty("wrapper", engine-&gt;newQObject(ret));
          //QJSValue r = engine-&gt;evaluate("new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper);");

          if (r.isError()) {
              qWarning()
                      &lt;&lt; "Uncaught exception in new <xsl:value-of select="$type" />(wrapper)"
                      &lt;&lt; ":" &lt;&lt; r.toString();
          }
          return r;
      }

      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v) {
          QJSEngine* engine = handler.getEngine();
          // wrapper takes ownership of the <xsl:value-of select="$type" /> object:
          <xsl:value-of select="$type" />_Wrapper* ret = new <xsl:value-of select="$type" />_Wrapper(handler, new <xsl:value-of select="$type" />(v), true);

          // JS: new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("<xsl:value-of select="$type" />");
          if (cl.isUndefined()) {
              qWarning() &lt;&lt; "Class <xsl:value-of select="$type" /> is undefined. Use <xsl:value-of select="$type" />_Wrapper::init().";
          }
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine-&gt;newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine-&gt;globalObject().setProperty("wrapper", engine-&gt;newQObject(ret));
          //QJSValue r = engine-&gt;evaluate("new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper);");

          if (r.isError()) {
              qWarning()
                      &lt;&lt; "Uncaught exception in new <xsl:value-of select="$type" />(wrapper)"
                      &lt;&lt; ":" &lt;&lt; r.toString();
          }
          return r;
      }

      <xsl:value-of select="$type" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) {
          /*
          <xsl:value-of select="$type" />_Wrapper* wrapper = getWrapper&lt;<xsl:value-of select="$type" />_Wrapper&gt;(v);
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: no wrapper";
              Q_ASSERT(false);
              return <xsl:value-of select="$type" />();
          }
          //return *(<xsl:value-of select="$type" />*)wrapper-&gt;getWrappedVoid();
          <xsl:value-of select="$type" />* ret = wrapper-&gt;getWrapped();
          if (ret==nullptr) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: wrapped pointer is NULL";
              return <xsl:value-of select="$type" />();
          }
          return *ret;
          */

          QJSValue jwrapper = getWrapperQJSValue(v);
          if (!jwrapper.isQObject()) {
              //qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$type" />: not a QObject";
              return <xsl:value-of select="$type" />();
          }
          QObject* obj = jwrapper.toQObject();
          RJSWrapper* wrapper = dynamic_cast&lt;RJSWrapper*&gt;(obj);
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />_ptr: no wrapper";
              return <xsl:value-of select="$type" />();
          }
          //<xsl:value-of select="$type" />* ret = getWrapped_<xsl:value-of select="$type" />(wrapper);
          <xsl:value-of select="$type" />* ret = <xsl:value-of select="$type" />_Wrapper::getWrappedBase(wrapper);
          if (ret==nullptr) {
              return <xsl:value-of select="$type" />();
          }
          return *ret;
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          //QJSValue fun = v.property("getType");
          QJSValue fun = v.property("isOfObjectType");
          if (fun.isUndefined() || !fun.isCallable()) {
              //qDebug() &lt;&lt; "RJSHelper::is_<xsl:value-of select="$func" />: cannot get type of JS object";
              //engine-&gt;evaluate("console.trace()");
              //return v.isObject();
              // type is for example string, number, etc.:
              return false;
          }

          return fun.call(QJSValueList() &lt;&lt; QJSValue(RJSType::<xsl:value-of select="$func" />_Type)).toBool();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>



<xsl:template match="wrapped_ptr">
  // ----------------------
  // wrapped pointer types:
  // ----------------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="wrapped_ptr/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, <xsl:value-of select="$type" />* v);
      static <xsl:value-of select="$type" />* js2cpp_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, <xsl:value-of select="$type" />* v) {

          <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class/qsrc:super_list/qsrc:super[@name=$type and not(@nodowncast='true') and position()=last()]">
            // downcast to <xsl:value-of select="../../@name" />:
            {
                <xsl:value-of select="../../@name" />* o = dynamic_cast&lt;<xsl:value-of select="../../@name" />*&gt;(v);
                if (o!=nullptr) {
                    return RJSHelper::cpp2js_<xsl:value-of select="../../@name" />(handler, o);
                }
            }
          </xsl:for-each>

          <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@name=$type]/qsrc:downcasts/qsrc:class">
            // manually configured downcast to <xsl:value-of select="@name" />:
            {
                <xsl:value-of select="@name" />* o = dynamic_cast&lt;<xsl:value-of select="@name" />*&gt;(v);
                if (o!=nullptr) {
                    return RJSHelper::cpp2js_<xsl:value-of select="@name" />(handler, o);
                }
            }
          </xsl:for-each>

          QJSEngine* engine = handler.getEngine();
          <xsl:value-of select="$type" />_Wrapper* ret = new <xsl:value-of select="$type" />_Wrapper(handler, v, false);

          // JS: new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("<xsl:value-of select="$type" />");
          if (cl.isUndefined()) {
              qWarning() &lt;&lt; "Class <xsl:value-of select="$type" /> is undefined. Use <xsl:value-of select="$type" />_Wrapper::init().";
          }
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(false));
          args.append(engine-&gt;newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine-&gt;globalObject().setProperty("wrapper", engine-&gt;newQObject(ret));
          //QJSValue r = engine-&gt;evaluate("new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper);");

          if (r.isError()) {
              qWarning()
                      &lt;&lt; "Uncaught exception in new <xsl:value-of select="$type" />(wrapper)"
                      &lt;&lt; ":" &lt;&lt; r.toString();
          }
          return r;

          //return engine-&gt;newQObject(ret);
      }

      <xsl:value-of select="$type" />* RJSHelper::js2cpp_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v) {
          QJSValue jwrapper = getWrapperQJSValue(v);
          if (jwrapper.isNumber() &amp;&amp; jwrapper.toInt()==0) {
              // 0 is allowed for pointers (null ptr):
              return nullptr;
          }
          if (!jwrapper.isQObject()) {
              //qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$type" />: not a QObject";
              return nullptr;
          }
          QObject* obj = jwrapper.toQObject();
          RJSWrapper* wrapper = dynamic_cast&lt;RJSWrapper*&gt;(obj);
          //<xsl:value-of select="$type" />_Wrapper* wrapper = qobject_cast&lt;<xsl:value-of select="$type" />_Wrapper*&gt;(obj);
          //<xsl:value-of select="$type" />_Wrapper* wrapper = dynamic_cast&lt;<xsl:value-of select="$type" />_Wrapper*&gt;(obj);
          //<xsl:value-of select="$type" />_Wrapper* wrapper = (<xsl:value-of select="$type" />_Wrapper*)(obj);
          //<xsl:value-of select="$type" />_Wrapper* wrapper = getWrapper&lt;<xsl:value-of select="$type" />_Wrapper&gt;(v);
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />_ptr: no wrapper";
              return nullptr;
          }
          //return getWrapped_<xsl:value-of select="$type" />(wrapper);
          return <xsl:value-of select="$type" />_Wrapper::getWrappedBase(wrapper);
          //return wrapper-&gt;getWrapped();
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          if (v.isNumber()) {
              return v.toInt()==0;
          }
          QJSValue fun = v.property("isOfObjectType");
          if (fun.isUndefined() || !fun.isCallable()) {
              //qDebug() &lt;&lt; "RJSHelper::is_<xsl:value-of select="$func" />: cannot get type of JS object";
              //engine-&gt;evaluate("console.trace()");
              // type is for example string, number, etc.:
              return false;
          }
          return fun.call(QJSValueList() &lt;&lt; QJSValue(RJSType::<xsl:value-of select="$func" />_Type)).toBool();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>



<xsl:template match="wrapped_qobject_ptr">
  // ------------------------------
  // wrapped QObject pointer types:
  // ------------------------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="wrapped_qobject_ptr/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, <xsl:value-of select="$type" />* v);
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />* v);
      static <xsl:value-of select="$type" />* js2cpp_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, <xsl:value-of select="$type" />* v) {
          <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class/qsrc:super_list/qsrc:super[@name=$type and not(@nodowncast='true') and position()=last()]">
            // downcast to <xsl:value-of select="../../@name" />:
            {
                <xsl:value-of select="../../@name" />* o = qobject_cast&lt;<xsl:value-of select="../../@name" />*&gt;(v);
                if (o!=nullptr) {
                    return RJSHelper::cpp2js_<xsl:value-of select="../../@name" />(handler, o);
                }
            }
          </xsl:for-each>

          <xsl:if test="$type='QObject'">
            // don't return wrapper objects to prevent wrappers from being deleted in scripts (e.g. while destroying children):
            {
                RJSWrapperObj* o = qobject_cast&lt;RJSWrapperObj*&gt;(v);
                if (o!=nullptr) {
                    return QJSValue(QJSValue::UndefinedValue);
                }
            }
          </xsl:if>
          

          <xsl:value-of select="$type" />_Wrapper* ret = nullptr;
          bool existing = false;
          if (v) {
              // look up existing wrapper:
              QVariant var = getWrapperProperty(handler, *v);
              //qDebug() &lt;&lt; "existing wrapper QVariant:" &lt;&lt; var;
              ret = var.value&lt;<xsl:value-of select="$type" />_Wrapper*&gt;();
              if (ret==nullptr) {
                  if (var.isValid()) {
                      qWarning() &lt;&lt; "RJSHelper::cpp2js_<xsl:value-of select="$func" />: invalid wrapper attached to QObject: " &lt;&lt; var.typeName();
                      QObject_Wrapper* ow = var.value&lt;QObject_Wrapper*&gt;();
                      delete ow;
                  }
                  // create new wrapper:
                  //qDebug() &lt;&lt; "creating new wrapper for " &lt;&lt; (long int)v;
                  ret = new <xsl:value-of select="$type" />_Wrapper(handler, v, false);
                  QVariant varNew = QVariant::fromValue(ret);
                  setWrapperProperty(handler, *v, varNew);
              }
              else {
                  existing = true;
              }
          }
          else {
              // wrapper for nullptr:
              ret = new <xsl:value-of select="$type" />_Wrapper(handler, nullptr, false);
          }

          QJSEngine* engine = handler.getEngine();

          // JS: new <xsl:value-of select="$type" />('__GOT_WRAPPER__', wrapper)
          QJSValue cl = engine-&gt;globalObject().property("<xsl:value-of select="$type" />");
          if (cl.isUndefined()) {
              qWarning() &lt;&lt; "Class <xsl:value-of select="$type" /> is undefined. Use <xsl:value-of select="$type" />_Wrapper::init().";
          }
          QJSValueList args;
          args.append(QJSValue("__GOT_WRAPPER__"));
          args.append(QJSValue(existing));
          args.append(engine-&gt;newQObject(ret));
          QJSValue r = cl.callAsConstructor(args);

          //engine-&gt;globalObject().setProperty("__wrapper__", engine-&gt;newQObject(ret));
          //QJSValue r = engine-&gt;evaluate("new <xsl:value-of select="$type" />('__GOT_WRAPPER__', __wrapper__);");

          if (r.isError()) {
              qWarning()
                      &lt;&lt; "Uncaught exception in new <xsl:value-of select="$type" />(wrapper)"
                      &lt;&lt; ":" &lt;&lt; r.toString();
          }
          return r;
      }

      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />* v) {
          return RJSHelper::cpp2js_<xsl:value-of select="$func" />(handler, const_cast&lt;<xsl:value-of select="$type" />*&gt;(v));
      }

      <xsl:value-of select="$type" />* RJSHelper::js2cpp_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v) {
          QJSValue jwrapper = getWrapperQJSValue(v);
          if (jwrapper.isNumber() &amp;&amp; jwrapper.toInt()==0) {
              // 0 is allowed for pointers (null ptr):
              return nullptr;
          }
          if (!jwrapper.isQObject()) {
              //qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$type" />: not a QObject";
              return nullptr;
          }
          //<xsl:value-of select="$type" />_Wrapper* wrapper = getWrapper&lt;<xsl:value-of select="$type" />_Wrapper&gt;(v);
          QObject* obj = jwrapper.toQObject();
          //<xsl:value-of select="$type" />_Wrapper* wrapper = qobject_cast&lt;<xsl:value-of select="$type" />_Wrapper*&gt;(obj);
          RJSWrapper* wrapper = dynamic_cast&lt;RJSWrapper*&gt;(obj);
          //<xsl:value-of select="$type" />_Wrapper* wrapper = dynamic_cast&lt;<xsl:value-of select="$type" />_Wrapper*&gt;(obj);
          //<xsl:value-of select="$type" />_Wrapper* wrapper = (<xsl:value-of select="$type" />_Wrapper*)obj;
          if (wrapper==nullptr) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$type" />: no wrapper";
              return nullptr;
          }
          //return (<xsl:value-of select="$type" />*)wrapper-&gt;getWrappedVoid();
          //return getWrapped_<xsl:value-of select="$type" />(wrapper);
          return <xsl:value-of select="$type" />_Wrapper::getWrappedBase(wrapper);
          //return wrapper-&gt;getWrapped();
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          //QJSValue fun = v.property("getObjectType");
          QJSValue fun = v.property("isOfObjectType");
          if (fun.isUndefined() || !fun.isCallable()) {
              //qDebug() &lt;&lt; "RJSHelper::is_<xsl:value-of select="$func" />: cannot get type of JS object";
              //engine-&gt;evaluate("console.trace()");
              //return v.isObject();
              // type is for example string, number, etc.:
              return false;
          }
          //return fun.call(RJSType::<xsl:value-of select="$func" />_Type);
          //return fun.call().toInt()==RJSType::<xsl:value-of select="$func" />_Type;
          //return v.isObject() || (v.isNumber() &amp;&amp; v.toInt()==0);

          return fun.call(QJSValueList() &lt;&lt; QJSValue(RJSType::<xsl:value-of select="$func" />_Type)).toBool();
      }

    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="qlist">
  // ------------
  // QList types:
  // ------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="qlist/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         '&lt;', '_'
      ), '&gt;', ''
      ), '::', '_'
      ), '*', ''
      )" />
  </xsl:variable>

  <xsl:variable name="itemtype">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         'QList&lt;', ''
      ), '&gt;', ''
      ), '::', '_'
      ), 'List', ''
      ), '*', ''
      )" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v) {
          QJSEngine* engine = handler.getEngine();
          QJSValue ret = engine-&gt;newArray((uint)v.length());
          for (int i=0; i&lt;v.length(); i++) {
              QJSValue jv = RJSHelper::cpp2js_<xsl:value-of select="$itemtype" />(handler, v.at(i));
              // prevent undefined values from C++ (e.g. QObjects that are not included in result):
              if (!jv.isUndefined()) {
                  ret.setProperty((quint32)i, jv);
              }
          }
          return ret;
      }

      <xsl:value-of select="$type" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) {
          //return engine-&gt;fromScriptValue&lt;<xsl:value-of select="$type" />&gt;(v);
          <xsl:value-of select="$type" /> ret;

          if (!v.isArray()) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: value is not an array";
              return ret;
          }

          const int length = v.property("length").toInt();
          for (int i=0; i&lt;length; ++i) {
              ret.append(js2cpp_<xsl:value-of select="$itemtype" />(handler, v.property(i)));
          }

          return ret;
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isArray();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="qlist_ptr">
  // --------------------
  // QList pointer types:
  // --------------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="qlist_ptr/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         '&lt;', '_'
      ), '&gt;', ''
      ), '::', '_'
      ), '*', ''
      )" />
  </xsl:variable>

  <xsl:variable name="itemtype">
    <xsl:choose>
      <xsl:when test="$type='QList&lt;QListWidgetItem*&gt;'">
        <xsl:text>QListWidgetItem</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="
          qc:replace(
          qc:replace(
          qc:replace(
          qc:replace(
          qc:replace(
             $type, 
             'QList&lt;', ''
          ), '&gt;', ''
          ), '::', '_'
          ), 'List', ''
          ), '*', ''
          )" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v) {
          QJSValue ret = handler.getEngine()->newArray((uint)v.length());
          for (int i=0; i&lt;v.length(); i++) {
              QJSValue jv = RJSHelper::cpp2js_<xsl:value-of select="$itemtype" />(handler, v.at(i));
              // prevent undefined values from C++ (e.g. QObjects that are not included in result):
              if (!jv.isUndefined()) {
                  ret.setProperty((quint32)i, jv);
              }
          }
          return ret;
      }

      <xsl:value-of select="$type" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v) {
          // TODO:
          qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: TODO: not properly implemented";
          return handler.getEngine()->fromScriptValue&lt;<xsl:value-of select="$type" />>(v);
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />_ptr(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isArray();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="qlist_shared_ptr">
  // ---------------------------
  // QList shared pointer types:
  // ---------------------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="qlist_shared_ptr/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         '&lt;', '_'
      ), '&gt;', ''
      ), ' ', ''
      ), '::', '_'
      ), '*', ''
      )" />
  </xsl:variable>

  <xsl:variable name="itemtype">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         'QList&lt;', ''
      ), 'QSharedPointer&lt;', ''
      ), '&gt;', ''
      ), ' ', ''
      )" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v) {
          QJSEngine* engine = handler.getEngine();
          QJSValue ret = engine-&gt;newArray((uint)v.length());
          for (int i=0; i&lt;v.length(); i++) {
              if (v.at(i).isNull()) {
                ret.setProperty((quint32)i, RJSHelper::cpp2js_<xsl:value-of select="$itemtype" />(handler, nullptr));
              }
              else {
                //ret.setProperty((quint32)i, RJSHelper::cpp2js_<xsl:value-of select="$itemtype" />(handler, v.at(i)-&gt;clone()));
                ret.setProperty((quint32)i, RJSHelper::cpp2js_QSharedPointer_<xsl:value-of select="$itemtype" />(handler, v.at(i)));
              }
          }
          return ret;
      }

      <xsl:value-of select="$type" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) {
          // TODO:
          qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: TODO: not properly implemented";
          QJSEngine* engine = handler.getEngine();
          return engine-&gt;fromScriptValue&lt;<xsl:value-of select="$type" />&gt;(v);
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isArray();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="qset">
  // -----------
  // QSet types:
  // -----------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="qset/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         '&lt;', '_'
      ), '&gt;', ''
      ), '::', '_'
      )" />
  </xsl:variable>

  <xsl:variable name="itemtype">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         'QSet&lt;', ''
      ), '&gt;', ''
      ), '::', '_'
      )" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v) {
          QJSEngine* engine = handler.getEngine();
          QJSValue ret = engine-&gt;newArray((uint)v.size());
          <xsl:value-of select="$type" />::const_iterator it;
          int i=0;
          for (it=v.constBegin(); it!=v.constEnd(); i++, it++) {
              ret.setProperty((quint32)i, RJSHelper::cpp2js_<xsl:value-of select="$itemtype" />(handler, *it));
          }
          return ret;
      }

      <xsl:value-of select="$type" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) {
          <xsl:value-of select="$type" /> ret;
          if (!v.isArray()) {
              qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: value is not an array";
              return ret;
          }

          int len = v.property("length").toInt();
          for (int i=0; i&lt;len; i++) {
              ret.insert(js2cpp_<xsl:value-of select="$itemtype" />(handler, v.property(i)));
          }
          return ret;

          //QJSEngine* engine = handler.getEngine();
          //return engine-&gt;fromScriptValue&lt;<xsl:value-of select="$type" />&gt;(v);
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isArray();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="qmap">
  // -----------
  // QMap types:
  // -----------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="qmap/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         '&lt;', '_'
      ), '&gt;', ''
      ), '::', '_'
      )" />
  </xsl:variable>

  <xsl:variable name="itemtype">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         'QMap&lt;', ''
      ), '&gt;', ''
      ), '::', '_'
      ), 'Map', ''
      )" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v) {
          QJSEngine* engine = handler.getEngine();
          QJSValue ret = engine-&gt;newObject();
          <xsl:value-of select="$type" />::const_iterator it;
          int i=0;
          for (it=v.constBegin(); it!=v.constEnd(); i++, it++) {
              ret.setProperty(it.key(), RJSHelper::cpp2js_<xsl:value-of select="$itemtype" />(handler, it.value()));
          }
          return ret;
      }

      <xsl:value-of select="$type" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) {
          // TODO:
          qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: TODO: not properly implemented";
          QJSEngine* engine = handler.getEngine();
          return engine-&gt;fromScriptValue&lt;<xsl:value-of select="$type" />&gt;(v);
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isObject();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="qpair">
  // ------------
  // QPair types:
  // ------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="qpair/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="para">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="
      qc:replace(
      qc:replace(
      qc:replace(
      qc:replace(
         $type, 
         '&lt;', '_'
      ), '&gt;', ''
      ), '::', '_'
      ), ',', '_'
      )" />
  </xsl:variable>

  <xsl:variable name="itemtype1">
    <xsl:value-of select="
      qc:replace(
      substring-before(
      qc:replace(
      qc:replace(
         $type, 
         'QPair&lt;', ''
      ), '&gt;', ''
      ), ','
      ), '::', '_'
      )" />
  </xsl:variable>

  <xsl:variable name="itemtype2">
    <xsl:value-of select="
      qc:replace(
      substring-after(
      qc:replace(
      qc:replace(
         $type, 
         'QPair&lt;', ''
      ), '&gt;', ''
      ), ','
      ), '::', '_'
      )" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v) {
          QJSEngine* engine = handler.getEngine();
          QJSValue ret = engine-&gt;newArray(2);
          ret.setProperty(0, RJSHelper::cpp2js_<xsl:value-of select="$itemtype1" />(handler, v.first));
          ret.setProperty(1, RJSHelper::cpp2js_<xsl:value-of select="$itemtype2" />(handler, v.second));
          return ret;
      }

      <xsl:value-of select="$type" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) {
          // TODO:
          qWarning() &lt;&lt; "js2cpp_<xsl:value-of select="$func" />: TODO: not properly implemented";
          QJSEngine* engine = handler.getEngine();
          return engine-&gt;fromScriptValue&lt;<xsl:value-of select="$type" />&gt;(v);
      }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return v.isArray();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="dummy">
  // ------------
  // dummy types:
  // ------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="dummy/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:variable name="preconstr">
    <xsl:choose>
      <xsl:when test="$type='QFontMetrics' or $type='QFontInfo'">
        <xsl:text>QFont f</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text></xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="constr">
    <xsl:choose>
      <xsl:when test="$type='QFontMetrics' or $type='QFontInfo'">
        <xsl:text>f</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text></xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      //#include &lt;<xsl:value-of select="$type" />&gt;

      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v);
      static <xsl:value-of select="$type" /> js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, const <xsl:value-of select="$type" />&amp; v) { return QJSValue(); }

      <xsl:value-of select="$type" /> RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) { <xsl:value-of select="$preconstr" />; return <xsl:value-of select="$type" />(<xsl:value-of select="$constr" />); }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return !v.isUndefined();
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>




<xsl:template match="dummy_ptr">
  // --------------------
  // dummy pointer types:
  // --------------------
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="dummy_ptr/type">
  <xsl:variable name="type">
    <xsl:value-of select="text()" />
  </xsl:variable>

  <xsl:variable name="func">
    <xsl:value-of select="$type" />
  </xsl:variable>

  <xsl:apply-templates select="." mode="ifdef" />

  <xsl:choose>
    <xsl:when test="$mode='h'">
      //#include &lt;<xsl:value-of select="$type" />&gt;

      static QJSValue cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, <xsl:value-of select="$type" />* v);
      static <xsl:value-of select="$type" />* js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v);
      static bool is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined = false);
    </xsl:when>

    <xsl:when test="$mode='cpp'">
      QJSValue RJSHelper::cpp2js_<xsl:value-of select="$func" />(RJSApi&amp; handler, <xsl:value-of select="$type" />* v) { return QJSValue(); }

      <xsl:value-of select="$type" />* RJSHelper::js2cpp_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v) { return nullptr; }

      bool RJSHelper::is_<xsl:value-of select="$func" />(RJSApi&amp; handler, const QJSValue&amp; v, bool acceptUndefined) {
          if (v.isUndefined() || v.isNull()) {
              return acceptUndefined;
          }
          return !v.isUndefined() || (v.isNumber() &amp;&amp; v.toInt()==0);
      }
    </xsl:when>
  </xsl:choose>

  <xsl:apply-templates select="." mode="endif" />
</xsl:template>


</xsl:stylesheet>