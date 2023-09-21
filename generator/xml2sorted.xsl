<?xml version="1.0" encoding="UTF-8"?>

<!--
  Sort variants of contructors and functions by parameter count (most paramters first).
 -->
<xsl:stylesheet version="1.0"
    xmlns="http://qcad.org/namespaces/src" 
    xmlns:qsrc="http://qcad.org/namespaces/src" 
    xmlns:qc="http://qcad.org/namespaces/xsl"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:func="http://exslt.org/functions"
    exclude-result-prefixes="func xsi qsrc"
    extension-element-prefixes="func"
    >

<xsl:output method="xml" />

<!--
<xsl:template match="text()" />
-->

<xsl:template match="node()|@*|text()">
  <xsl:copy>
     <xsl:apply-templates select="node()|@*"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="qsrc:constructor">
  <constructor>
    <xsl:for-each select="qsrc:variant">
      <xsl:sort select="count(qsrc:parameters/qsrc:parameter)" order="descending"/>
      <xsl:copy-of select="." />
    </xsl:for-each>
  </constructor>
</xsl:template>

<xsl:template match="qsrc:function">
  <function>
    <xsl:copy-of select="@*" />

    <xsl:for-each select="qsrc:variant">
      <xsl:sort select="count(qsrc:parameters/qsrc:parameter)" order="descending"/>
      <xsl:copy-of select="." />
    </xsl:for-each>
  </function>
</xsl:template>

</xsl:stylesheet>
