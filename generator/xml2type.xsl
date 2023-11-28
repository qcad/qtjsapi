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
<xsl:param name="module" />
<xsl:param name="class_export">
  <xsl:choose>
    <xsl:when test="$module=''">
      <xsl:text>QTJSAPI_EXPORT</xsl:text>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="qc:uppercase($module)"/>JSAPI_EXPORT 
    </xsl:otherwise>
  </xsl:choose>
  <xsl:text> </xsl:text>
</xsl:param>

<xsl:template match="text()" />

<xsl:template match="/">
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="node()|@*|text()" mode="enum">
  <xsl:copy>
     <xsl:apply-templates select="node()|@*" mode="enum"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="*" mode="enum" />
<xsl:template match="*" mode="class" />

<xsl:template match="manual|shared_ptr|shared_ptr_no_copy|wrapped_ptr|wrapped_qobject_ptr|dummy|dummy_ptr|wrapped" mode="class">
  <!--
  <xsl:for-each select="type[not(.=preceding::*)]">
    <xsl:value-of select="text()" />_Type,
    <xsl:text>&#10;</xsl:text>
  </xsl:for-each>
  -->

  <xsl:for-each select="type[not(.=preceding::*)]">
    <xsl:if test="$mode='h'">
      class <xsl:value-of select="$class_export"/> RJSType_<xsl:value-of select="text()" /> : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "<xsl:value-of select="text()" />";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_<xsl:value-of select="text()" />();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          <xsl:if test="$module!=''">
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          </xsl:if>

      private:
          static int id;
      };
    </xsl:if>

    <xsl:if test="$mode='cpp'">
      int RJSType_<xsl:value-of select="text()" />::id = -1;

      int RJSType_<xsl:value-of select="text()" />::getId() const {
          return RJSType_<xsl:value-of select="text()" />::getIdStatic();
      }

      int RJSType_<xsl:value-of select="text()" />::getIdStatic() {
          if (id&lt;0) {
              id = RJSTypeEnum::reserve(new RJSType_<xsl:value-of select="text()" />());
          }
          return id;
      }


      <xsl:if test="$module!=''">
        bool RJSType_<xsl:value-of select="text()" />::isOfType(int otherType) {
            // initialize list of derrived types:
            <xsl:variable name="type">
              <xsl:value-of select="text()" />
            </xsl:variable>
            static QSet&lt;int&gt; derrivedTypes = {
              getIdStatic(),
              <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class/qsrc:super_list/qsrc:super[@name=$type]">
                RJSType_<xsl:value-of select="../../@name" />::getIdStatic()
                <xsl:if test="position()!=last()">
                  <xsl:text>,</xsl:text>
                </xsl:if>
              </xsl:for-each>
            };

            // check for derived types:
            return derrivedTypes.contains(otherType);
        }
      </xsl:if>
    </xsl:if>
  </xsl:for-each>

  <!--
  <xsl:param name="mode" />
  <xsl:message>mode: <xsl:value-of select="$mode" /></xsl:message>

  <xsl:choose>
    <xsl:when test="$mode='enum'">
    </xsl:when>
    <xsl:when test="$mode='case'">
      <xsl:for-each select="type[not(.=preceding::*)]">
        case <xsl:value-of select="text()" />_Type:
          return "<xsl:value-of select="text()" />_Type";
      </xsl:for-each>
    </xsl:when>
  </xsl:choose>
  -->
</xsl:template>

<!--
<xsl:template match="manual|shared_ptr|shared_ptr_no_copy|wrapped_ptr|wrapped_qobject_ptr|dummy|dummy_ptr|wrapped" mode="case">
  <xsl:for-each select="type[not(.=preceding::*)]">
    case <xsl:value-of select="text()" />_Type:
      return "<xsl:value-of select="text()" />_Type";
  </xsl:for-each>
</xsl:template>
-->

<xsl:template match="types">
  // Automatically generated, do not edit
  <xsl:if test="$mode='h'">
    <xsl:choose>
      <xsl:when test="$module=''">
        #ifndef RJSTYPE_H
        #define RJSTYPE_H
      </xsl:when>
      <xsl:otherwise>
        #ifndef RJSTYPE_<xsl:value-of select="qc:uppercase($module)"/>_H
        #define RJSTYPE_<xsl:value-of select="qc:uppercase($module)"/>_H
      </xsl:otherwise>
    </xsl:choose>

    #include "<xsl:value-of select="$module"/>jsapi_global.h"

    #include &lt;QObject&gt;
    #include &lt;QQmlEngine&gt;

    #include "RJSTypeEnum.h"

    <xsl:apply-templates mode="class" />

    <!--
    <xsl:if test="$module=''">
      QString getTypeName(int type) {
        RJSTypeEnum* t = RJSTypeEnum::getById(type);
        return t->getName();
      }
    </xsl:if>
    -->
    #endif
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    <xsl:choose>
      <xsl:when test="$module=''">
        #include "RJSType.h"
      </xsl:when>
      <xsl:otherwise>
        #include "RJSType_<xsl:value-of select="$module"/>.h"
      </xsl:otherwise>
    </xsl:choose>

    <xsl:apply-templates mode="class" />
  </xsl:if>

  <!--
  class RJSType : public QObject {
      Q_OBJECT
      QML_INTERFACE

  public:
      RJSType() {}

      enum WrappedType {
          Unknown_Type,
          <xsl:apply-templates mode="enum" />
          Last_Type
      };
      Q_ENUM(WrappedType)

      static QString getTypeName(int type) {
          switch (type) {
            <xsl:apply-templates mode="case" />
            default:
              return "Unknown Type";
          }
      }
  };

  Q_DECLARE_METATYPE(RJSType*)

  Q_DECLARE_INTERFACE(RJSType, "org.qcad.RJSType")
  -->

</xsl:template>

</xsl:stylesheet>
