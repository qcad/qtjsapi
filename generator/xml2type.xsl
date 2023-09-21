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
<xsl:template match="*" mode="case" />

<xsl:template match="manual|shared_ptr|shared_ptr_no_copy|wrapped_ptr|wrapped_qobject_ptr|dummy|dummy_ptr|wrapped" mode="enum">
  <xsl:for-each select="type[not(.=preceding::*)]">
    <xsl:value-of select="text()" />_Type,
    <xsl:text>&#10;</xsl:text>
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

<xsl:template match="manual|shared_ptr|shared_ptr_no_copy|wrapped_ptr|wrapped_qobject_ptr|dummy|dummy_ptr|wrapped" mode="case">
  <xsl:for-each select="type[not(.=preceding::*)]">
    case <xsl:value-of select="text()" />_Type:
      return "<xsl:value-of select="text()" />_Type";
  </xsl:for-each>
</xsl:template>

<xsl:template match="types">
  // Automatically generated, do not edit
  #ifndef RJSTYPE_H
  #define RJSTYPE_H

  #include &lt;QObject&gt;
  #include &lt;QQmlEngine&gt;

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

  #endif
</xsl:template>

</xsl:stylesheet>
