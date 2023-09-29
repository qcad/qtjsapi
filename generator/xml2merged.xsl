<?xml version="1.0" encoding="UTF-8"?>

<!--
  Merge in functions of parent classes into this class.
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

<xsl:template match="qsrc:class">
  <xsl:variable name="class-name" select="@name" />

  <xsl:variable name="is-qwidget">
    <xsl:choose>
      <xsl:when test="qsrc:super_list/qsrc:super[@name='QWidget']">
        <xsl:value-of select="'1'"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="'0'"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <class>
    <xsl:copy-of select="@*" />

    <!-- copy in methods of super classes  -->
    <xsl:for-each select="qsrc:super_list/qsrc:super">
      <xsl:variable name="super-class-name" select="@name" />

      <!-- merge constants from super classes -->
      <xsl:for-each select="document('merge_modules.xml')/paths/path">
        <xsl:for-each select="document(text())/qsrc:unit/qsrc:class[@name=$super-class-name]/qsrc:constant">
          <xsl:apply-templates select=".">
            <xsl:with-param name="super-class-name" select="$super-class-name" />
          </xsl:apply-templates>
        </xsl:for-each>

        <!-- merge enums from super classes -->
        <xsl:for-each select="document(text())/qsrc:unit/qsrc:class[@name=$super-class-name]/qsrc:enum">
          <xsl:apply-templates select=".">
            <xsl:with-param name="super-class-name" select="$super-class-name" />
          </xsl:apply-templates>
        </xsl:for-each>

        <!-- merge properties from super classes -->
        <xsl:for-each select="document(text())/qsrc:unit/qsrc:class[@name=$super-class-name]/qsrc:property">
          <xsl:apply-templates select=".">
            <xsl:with-param name="super-class-name" select="$super-class-name" />
          </xsl:apply-templates>
        </xsl:for-each>

        <!-- merge functions from super classes -->
        <xsl:for-each select="document(text())/qsrc:unit/qsrc:class[@name=$super-class-name]/qsrc:function">
          <xsl:variable name="super-function-name" select="@name" />

          <xsl:if test="not($is-qwidget='1') or not($super-function-name='setParent') or not($super-class-name='QObject')">
            <xsl:apply-templates select=".">
              <xsl:with-param name="super-class-name" select="$super-class-name" />
            </xsl:apply-templates>
          </xsl:if>
        </xsl:for-each>
      </xsl:for-each>

    </xsl:for-each>

    <!--
      Own members at last (these will be used in case of duplicates):
    -->
    <xsl:apply-templates />
  </class>
</xsl:template>

<xsl:template match="qsrc:enum">
  <xsl:param name="super-class-name" />

  <enum>
    <xsl:copy-of select="@*" />

    <xsl:if test="$super-class-name">
      <xsl:attribute name="source">
        <xsl:value-of select="$super-class-name" />
      </xsl:attribute>
    </xsl:if>
    <xsl:apply-templates select="qsrc:key" />
  </enum>
</xsl:template>

<xsl:template match="qsrc:constant">
  <xsl:param name="super-class-name" />

  <constant>
    <xsl:copy-of select="@*" />

    <xsl:if test="$super-class-name">
      <xsl:attribute name="source">
        <xsl:value-of select="$super-class-name" />
      </xsl:attribute>
    </xsl:if>
  </constant>
</xsl:template>

<xsl:template match="qsrc:property">
  <xsl:param name="super-class-name" />

  <property>
    <xsl:copy-of select="@*" />

    <xsl:if test="$super-class-name">
      <xsl:attribute name="source">
        <xsl:value-of select="$super-class-name" />
      </xsl:attribute>
    </xsl:if>
  </property>
</xsl:template>

<xsl:template match="qsrc:function">
  <xsl:param name="super-class-name" />

  <function>
    <xsl:copy-of select="@*" />

    <xsl:if test="$super-class-name">
      <xsl:attribute name="source">
        <xsl:value-of select="$super-class-name" />
      </xsl:attribute>
    </xsl:if>
    <xsl:apply-templates select="qsrc:variant" />
  </function>
</xsl:template>

<!--
<xsl:template match="qsrc:super_list">
  < ! - -
  <xsl:variable name="super-class" select="document('../tmp/xmlall.xml')/unit/class[@name=@qsrc:super]" />
  - - >

  <mysuper>
    <xsl:for-each select="qsrc:super">
      <xsl:variable name="class-name" select="@name" />
      <xsl:value-of select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@name=$class-name]/@name" />
    </xsl:for-each>
  </mysuper>

  < ! - -
  <xsl:for-each select="qsrc:super">
    <xsl:copy>
       <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:for-each>
  - - >
</xsl:template>
-->

</xsl:stylesheet>
