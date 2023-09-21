<?xml version="1.0" encoding="UTF-8"?>

<!--
  Strip duplicate functions (from parent classes).
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

<xsl:template match="qsrc:property">
  <xsl:variable name="static" select="@static" />
  <xsl:variable name="type" select="@type" />
  <xsl:variable name="name" select="@name" />

  <!--
    Only include one unique property.
    <xsl:if test="not(preceding-sibling::qsrc:function[@name=$name]) or $static and not(preceding-sibling::qsrc:function[@name=$name]/@static)">
  -->
  <xsl:if test="not(following-sibling::qsrc:property[@name=$name])">
    <property>
      <xsl:copy-of select="@*" />
      <xsl:apply-templates />
    </property>
  </xsl:if>
</xsl:template>


<xsl:template match="qsrc:function">
  <xsl:variable name="name" select="@name" />
  <xsl:variable name="static" select="@static" />

  <!--
    Exclude functions explicitely marked as private:
  -->
  <xsl:if test="not(../qsrc:function[@name=$name and @access='private'])"> 
    <!--
      Only include one inherited function from one base class (last base class).
      <xsl:if test="not(preceding-sibling::qsrc:function[@name=$name]) or $static and not(preceding-sibling::qsrc:function[@name=$name]/@static)">
    -->
    <xsl:if test="not(following-sibling::qsrc:function[@name=$name]) or $static and not(following-sibling::qsrc:function[@name=$name]/@static)">
      <function>
        <xsl:copy-of select="@*" />
        <xsl:apply-templates />
      </function>
    </xsl:if>
  </xsl:if>
</xsl:template>

</xsl:stylesheet>
