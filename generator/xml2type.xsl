<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
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
      class RJSType_<xsl:value-of select="text()" /> : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_<xsl:value-of select="text()" />::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "<xsl:value-of select="text()" />";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_<xsl:value-of select="text()" />();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id&lt;0) {
                  id = RJSTypeEnum::reserve(new RJSType_<xsl:value-of select="text()" />());
              }
              return id;
          }


      private:
          static int id;
      };
    </xsl:if>

    <xsl:if test="$mode='cpp'">
      int RJSType_<xsl:value-of select="text()" />::id = -1;
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
    #ifndef RJSTYPE_H
    #define RJSTYPE_H

    #include &lt;QObject&gt;
    #include &lt;QQmlEngine&gt;

    #include "RJSTypeEnum.h"

    <xsl:apply-templates mode="class" />

    static QString getTypeName(int type) {
      RJSTypeEnum* t = RJSTypeEnum::getById(type);
      return t->getName();
    }
    #endif
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    #include "RJSType.h"

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
