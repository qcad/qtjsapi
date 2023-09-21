<?xml version="1.0" encoding="UTF-8"?>

<!--
  Reduce usage types to unique list.
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

<xsl:include href="string.xsl"/>
<xsl:include href="shared.xsl"/>

<xsl:output method="xml" />

<xsl:template match="node()|@*|text()">
  <xsl:copy>
    <xsl:apply-templates select="node()|@*"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="qsrc:usage">
  <xsl:variable name="type">
    <xsl:value-of select="qc:strip-pointer-reference-const(@type)" />
  </xsl:variable>

  <xsl:if test="not(preceding::qsrc:usage[@type = $type])">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:if>
</xsl:template>

</xsl:stylesheet>
