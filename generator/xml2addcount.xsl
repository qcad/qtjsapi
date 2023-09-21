<?xml version="1.0" encoding="UTF-8"?>

<!--
  Add parameter count to variants.
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

<xsl:template match="node()|@*|text()">
  <xsl:copy>
     <xsl:apply-templates select="node()|@*"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="qsrc:variant">
  <variant count="{count(qsrc:parameters/qsrc:parameter)}">
    <xsl:copy-of select="@*" />
    <xsl:apply-templates />
  </variant>
</xsl:template>

</xsl:stylesheet>
