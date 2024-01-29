<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:qc="http://qcad.org/namespaces/xsl"
                xmlns:qsrc="http://qcad.org/namespaces/src"
                xmlns:func="http://exslt.org/functions"
                extension-element-prefixes="func"
                version="1.0">

<xsl:include href="string.xsl"/>

<func:function name="qc:strip-pointer-reference-const">
  <xsl:param name="type" />
  <func:result>
    <xsl:value-of select="qc:replace(qc:replace(qc:replace($type, '*', ''), '&amp;', ''), 'const ', '')" />
  </func:result>
</func:function>


<func:function name="qc:is-non-copyable">
  <xsl:param name="type" />

  <!-- strip * and &amp; from type (e.g. QMenu* -> QMenu) -->
  <xsl:variable name="class">
    <xsl:value-of select="qc:strip-pointer-reference-const($type)" />
  </xsl:variable>

  <func:result>
    <xsl:choose>
      <xsl:when test="document('non_copyable_class.xml')/non-copyable-class/class[@name=$class]">
        <xsl:value-of select="'true'" />
      </xsl:when>
      <xsl:when test="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@name=$class and @ownership='cpp']">
        <xsl:value-of select="'true'" />
      </xsl:when>
      <xsl:when test="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@name=$class]/super_list/super[@name='REntity']">
        <xsl:value-of select="'true'" />
      </xsl:when>
      <xsl:when test="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@name=$class]/super_list/super[@name='QObject']">
        <xsl:value-of select="'true'" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="'false'" />
      </xsl:otherwise>
    </xsl:choose>
  </func:result>
</func:function>

<!--
  Return function to convert given type from cpp to js.
  e.g. RJSHelper::cpp2js_bool
-->
<func:function name="qc:type-to-function-cpp2js">
  <xsl:param name="type" />

  <xsl:variable name="itemtype">
    <xsl:value-of select="substring-before(substring-after($type, '&lt;'), '&gt;')" />
  </xsl:variable>
  <xsl:variable name="itemptr">
    <xsl:value-of select="contains($itemtype, '*')" />
  </xsl:variable>

  <func:result>
    <xsl:text>RJSHelper</xsl:text><xsl:value-of select="qc:get-helper-postfix($type)"/><xsl:text>::cpp2js_</xsl:text>
    <xsl:value-of 
      select="qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
                $type, '&gt;', ''
              ), '&lt;', '_'
              ), '::', '_'
              ), ',', '_'
              ), 'const', ''
              ), '&amp;', ''
              ), '*', ''
              ), ' ', ''
              )" />
    <xsl:if test="$itemptr='true'">
      <xsl:text>_ptr</xsl:text>
    </xsl:if>
  </func:result>
</func:function>

<!--
  Return function to convert given type from js to cpp.
  e.g. RJSHelper::js2cpp_bool
-->
<func:function name="qc:type-to-function-js2cpp">
  <xsl:param name="type" />
  <xsl:param name="modifier" />

  <!-- type of items in list, set, etc. -->
  <xsl:variable name="itemtype">
    <xsl:value-of select="substring-before(substring-after($type, '&lt;'), '&gt;')" />
  </xsl:variable>
  <xsl:variable name="itemptr">
    <xsl:value-of select="contains($itemtype, '*')" />
  </xsl:variable>

  <func:result>
    <xsl:text>RJSHelper</xsl:text><xsl:value-of select="qc:get-helper-postfix($type)"/><xsl:text>::js2cpp_</xsl:text>
    <xsl:value-of 
      select="qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
                $type, '&gt;', ''
              ), '&lt;', '_'
              ), '::', '_'
              ), ',', '_'
              ), 'const', ''
              ), '&amp;', ''
              ), '*', ''
              ), ' ', ''
              )" />
    <xsl:if test="$modifier='*' or (qc:is-non-copyable($type)='true' and ($modifier='&amp;' or qc:ends-with($type, '&amp;'))) or $itemptr='true'">
      <xsl:text>_ptr</xsl:text>
    </xsl:if>
  </func:result>
</func:function>

<func:function name="qc:get-helper-postfix">
  <!-- e.g. RShape or QSharedPointer<RShape> or QList<QSharedPointer<RShape>> -->
  <xsl:param name="type" />

  <xsl:variable name="class">
    <xsl:value-of select="qc:strip-pointer-reference-const($type)" />
  </xsl:variable>

  <!-- e.g. RShape or QSharedPointer<RShape> -->
  <xsl:variable name="itemtype">
    <xsl:value-of select="qc:substring-before-last(substring-after($type, '&lt;'), '&gt;')" />
  </xsl:variable>

  <!-- e.g. RShape or RShape* -->
  <xsl:variable name="itemtype2">
    <xsl:value-of select="substring-before(substring-after($itemtype, '&lt;'), '&gt;')" />
  </xsl:variable>

  <xsl:variable name="itemclass">
    <xsl:value-of select="qc:strip-pointer-reference-const($itemtype)" />
  </xsl:variable>

  <xsl:variable name="itemclass2">
    <xsl:value-of select="qc:strip-pointer-reference-const($itemtype2)" />
  </xsl:variable>

  <func:result>
    <xsl:choose>
      <!-- we're generating the qcad module -->
      <xsl:when test="$module!=''">
        <xsl:choose>
          <!-- qcadjsapi types.xml is for qcad -->
          <xsl:when test="document('../../qcadjsapi/generator/types.xml')//type[text()=$class or text()=$itemclass or text()=$itemclass2]">
            <xsl:value-of select="'_qcad'" />
          </xsl:when>
          <!-- qcadprojsapi types.xml is for qcadpro -->
          <xsl:when test="document('../../qcadprojsapi/generator/types.xml')//type[text()=$class or text()=$itemclass or text()=$itemclass2]">
            <xsl:value-of select="'_qcadpro'" />
          </xsl:when>
          <!-- qcadnestjsapi types.xml is for qcadnest -->
          <xsl:when test="document('../../qcadnestjsapi/generator/types.xml')//type[text()=$class or text()=$itemclass or text()=$itemclass2]">
            <xsl:value-of select="'_qcadnest'" />
          </xsl:when>
          <!-- qcadgles3djsapi types.xml is for qcadgles3d -->
          <xsl:when test="document('../../qcadgles3djsapi/generator/types.xml')//type[text()=$class or text()=$itemclass or text()=$itemclass2]">
            <xsl:value-of select="'_qcadgles3d'" />
          </xsl:when>
          <!-- qcadquickjsapi types.xml is for qcadquick -->
          <xsl:when test="document('../../qcadquickjsapi/generator/types.xml')//type[text()=$class or text()=$itemclass or text()=$itemclass2]">
            <xsl:value-of select="'_qcadquick'" />
          </xsl:when>
          <!-- default to RJSHelper (qtjsapi) -->
          <xsl:otherwise>
            <xsl:value-of select="''" />
          </xsl:otherwise>
        </xsl:choose>
      </xsl:when>

      <!-- TODO: add other modules -->
      <xsl:otherwise>
      </xsl:otherwise>
    </xsl:choose>
  </func:result>
</func:function>

</xsl:stylesheet>
