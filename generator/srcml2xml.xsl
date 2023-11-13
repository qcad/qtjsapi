<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns="http://qcad.org/namespaces/src" 
    xmlns:qc="http://qcad.org/namespaces/xsl"
    xmlns:src="http://www.srcML.org/srcML/src" 
    xmlns:cpp="http://www.srcML.org/srcML/cpp" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:func="http://exslt.org/functions"
    xmlns:str="http://exslt.org/strings"
    exclude-result-prefixes="cpp src func xsi str"
    extension-element-prefixes="func str"
    >

<xsl:include href="string.xsl"/>

<xsl:output method="xml" />

<xsl:template match="text()" />

<xsl:template match="/">
  <!--
  <xsl:for-each select="key('function', 'rotate')">
    <xsl:message>
      <xsl:value-of select="." />
    </xsl:message>
  </xsl:for-each>
  -->
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="src:unit">
  <unit filename="{qc:replace(@filename, 'src_copy/', '')}">
    <xsl:apply-templates select="src:class_decl" />
    <!--
    <xsl:apply-templates select="src:class[src:macro/src:name/text()='Q_WIDGETS_EXPORT' or src:macro/src:name/text()='Q_GUI_EXPORT' or src:macro/src:name/text()='QCADCORE_EXPORT']" />
    -->
    <xsl:apply-templates select="src:namespace" />
    <xsl:apply-templates select="src:class" />
  </unit>
</xsl:template>

<xsl:template match="src:class_decl">
  <xsl:variable name="name">
    <xsl:value-of select="src:name/text()" />
  </xsl:variable>

  <!--
  <xsl:message>class decl: <xsl:value-of select="src:name/text()" /></xsl:message>
  <xsl:message>ignore: <xsl:value-of select="boolean(document('ignore_include.xml')/ignore_include/file[@name=$name])" /></xsl:message>
  -->

  <!--
  <xsl:if test="not(qc:ends-with($name, 'Private')) and not(document('ignore_include.xml')/ignore_include/file[@name=$name])">
  -->
  <xsl:if test="not(qc:ends-with($name, 'Private'))">
    <class_decl name="{src:name/text()}" />
  </xsl:if>
</xsl:template>

<xsl:template match="src:namespace">
  <namespace name="{src:name/text()}">
    <xsl:apply-templates select="src:block" />
  </namespace>
</xsl:template>

<xsl:template match="src:class">
  <xsl:variable name="name">
    <xsl:value-of select="src:name/text()" />
  </xsl:variable>

  <!--
  <xsl:choose>
    <xsl:when test="document('ignore_class.xml')/ignore_class/class[@name=$name]">
    < ! - -
    <xsl:when test="document('ignore_class.xml')/ignore_class/class[@name=$name] or not(qc:ends-with(src:macro/src:name/text(), '_EXPORT'))">
    - - >
      < ! - -
      <class name="{src:name/text()}" ignored="true" />
      - - >
    </xsl:when>
    <xsl:otherwise>
    -->
      <class name="{src:name/text()}">
        <xsl:if test="src:super_list">
          <xsl:apply-templates select="src:super_list" />
        </xsl:if>

        <xsl:apply-templates select="src:private/src:macro" />

        <xsl:apply-templates select="src:block" />
      </class>
    <!--
    </xsl:otherwise>
  </xsl:choose>
  -->
</xsl:template>

<xsl:template match="src:macro">
  <xsl:if test="src:name/text()='Q_PROPERTY'">
    <xsl:variable name="type">
      <xsl:value-of select="str:split(src:argument_list/src:argument/text(), ' ')[1]"/>
    </xsl:variable>
    <xsl:variable name="name">
      <xsl:value-of select="str:split(src:argument_list/src:argument/text(), ' ')[2]"/>
    </xsl:variable>
    <xsl:variable name="read">
      <xsl:choose>
        <xsl:when test="str:split(src:argument_list/src:argument/text(), ' ')[3]='READ'">
          <xsl:value-of select="str:split(src:argument_list/src:argument/text(), ' ')[4]"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:text></xsl:text>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="write">
      <xsl:choose>
        <xsl:when test="str:split(src:argument_list/src:argument/text(), ' ')[5]='WRITE'">
          <xsl:value-of select="str:split(src:argument_list/src:argument/text(), ' ')[6]"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:text></xsl:text>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>

    <property type="{$type}" name="{$name}" read="{$read}">
      <xsl:if test="$write!=''">
        <xsl:attribute name="write">
          <xsl:value-of select="$write" />
        </xsl:attribute>
      </xsl:if>
    </property>
  </xsl:if>
</xsl:template>

<xsl:template match="src:block">
  <!--
  <xsl:apply-templates select="src:public" />
  -->
  <xsl:apply-templates />

  <!--
  <xsl:apply-templates select="src:protected/src:function_decl[src:name/text()='paintEvent']" />
  <xsl:apply-templates select="src:protected/src:function_decl[src:name/text()='resizeEvent']" />
  <xsl:apply-templates select="src:protected/src:function_decl[src:name/text()='mouseMoveEvent']" />
  -->
  <!--
  <xsl:apply-templates select="src:public|src:protected/src:function_decl" />
  -->
</xsl:template>

<xsl:template match="src:private">
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="src:public">
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="src:protected">
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="src:super_list">
  <super_list>
    <xsl:apply-templates select="src:super" />
  </super_list>
</xsl:template>

<xsl:template match="src:super">
  <super name="{src:name/text()}" />
</xsl:template>

<xsl:template match="src:decl_stmt">
  <xsl:if test="ancestor::src:public and src:decl/src:type/src:name and src:decl/src:name and src:decl/src:type/src:specifier/text()='static'">
    <property static="true">
      <xsl:attribute name="type">
        <xsl:value-of select="src:decl/src:type/src:name/text()" />
      </xsl:attribute>
      <xsl:attribute name="name">
        <xsl:value-of select="src:decl/src:name/text()" />
      </xsl:attribute>
    </property>
  </xsl:if>
</xsl:template>

<!--
<xsl:template match="cpp:include">
  <include>
    <xsl:attribute name="plain">
    </xsl:attribute>
  </include>
</xsl:template>
-->

<xsl:template match="cpp:ifdef|cpp:ifndef|cpp:if|cpp:include|cpp:else">
  <preproc>
    <xsl:attribute name="plain">
      <xsl:value-of select="normalize-space(text())" />
      <xsl:value-of select="normalize-space(cpp:directive/text())" />
      <xsl:value-of select="' '" />
      <xsl:apply-templates select="cpp:directive/following-sibling::*" mode="alltextnsp" />
    </xsl:attribute>
  </preproc>
</xsl:template>

<xsl:template match="cpp:endif">
  <preproc plain="#endif" />
</xsl:template>

<xsl:template match="src:constructor_decl|src:constructor">
  <!-- 
    all constructors as variations
  -->
  <xsl:if test="ancestor::src:public">
    <!-- 
      generate all constructor variations when first constructor is found 
    -->
    <xsl:if test="ancestor::*/*[self::src:constructor_decl or self::src:constructor][1]=.">
      <constructor>
        <xsl:for-each select="ancestor::*/src:constructor_decl|ancestor::*/src:constructor">
          <variant>
            <parameters>
              <xsl:apply-templates select="src:parameter_list/src:parameter" mode="explicit" />
            </parameters>
          </variant>
        </xsl:for-each>
      </constructor>
    </xsl:if>
  </xsl:if>
</xsl:template>

<xsl:template match="src:function_decl|src:function">
  <xsl:variable name="class_name">
    <xsl:value-of select="ancestor::src:class/src:name/text()" />
  </xsl:variable>
  <xsl:variable name="function_name">
    <xsl:choose>
      <xsl:when test="normalize-space(src:name/text())='operator'">
        <xsl:value-of select="normalize-space(src:name/text())" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="normalize-space(src:name/text())" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <!--
  <xsl:message>
    <xsl:value-of select="normalize-space(src:name/node())" />
  </xsl:message>
  -->

  <xsl:choose>
    <xsl:when test="$function_name='operator'">
      <xsl:variable name="postfix">
        <xsl:value-of select="
        qc:replace(
          qc:replace(
            qc:replace(
              qc:replace(
                qc:replace(
                  qc:replace(
                    qc:replace(
                      qc:replace(
                        qc:replace(
                          qc:replace(
                            qc:replace(
                              qc:replace(
                                src:name/src:name/text(), 
                                '!', '_not'
                              ),
                              '&lt;&lt;', '_read'
                            ),
                            '&gt;&gt;', '_write'
                          ),
                          '!=', '_unequal'
                        ),
                        '==', '_equal'
                      ),
                      '&gt;', '_greaterthan'
                    ),
                    '&lt;', '_lessthan'
                  ),
                  '=', '_assign'
                ),
                '/', '_divide'
              ),
              '*', '_multiply'
            ),
            '-', '_subtract'
          ),
          '+', '_add'
        )
        " />
      </xsl:variable>

      <xsl:variable name="fname">
        <xsl:choose>
          <xsl:when test="$postfix='_equal'">
            <xsl:text>equals</xsl:text>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="concat($function_name, $postfix)" />
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>

      <function name="{$fname}" call="{concat('operator', src:name/src:name/text())}">
        <xsl:call-template name="variant" />
      </function>
    </xsl:when>
    <xsl:otherwise>
      <!--
      <xsl:message>FUNC: <xsl:value-of select="$function_name"/></xsl:message>
      -->

      <!--
      <xsl:if test="document('ignore_function.xml')/ignore_function/class[@name=$class_name]/function[@name=$function_name]">
      -->
      <!--
      <xsl:if test="not($function_name='Q_PROPERTY') and not($function_name='Q_DECLARE_PRIVATE') and not(document('ignore_function.xml')/ignore_function/class[@name=$class_name]/function[@name=$function_name])">
      -->
      <xsl:if test="not($function_name='Q_PROPERTY') and not($function_name='Q_DECLARE_PRIVATE')">

        <!-- 
          all functions with the same name are processed when the first
          function with that name is found:
        -->
        <xsl:if test="(ancestor::*/*[self::src:function_decl or self::src:function][src:name/text()=$function_name])[1]=.">
          <function name="{$function_name}">
            <xsl:if test="src:type//src:specifier/text()='static'">
              <xsl:attribute name="static">
                <xsl:value-of select="'true'" />
              </xsl:attribute>
            </xsl:if>

            <!-- 
              process all functions with the same name:
            -->
            <xsl:for-each select="ancestor::*/*[self::src:function_decl or self::src:function][src:name/text()=$function_name]">
              <xsl:choose>
                <xsl:when test="ancestor::src:public or ancestor::src:signals">
                  <xsl:call-template name="variant" />
                </xsl:when>
                <!-- 
                  TODO: 
                  which events to expose? 
                -->
                <!--
                <xsl:when test="ancestor::src:protected and (src:name/text()='paintEvent' or src:name/text()='resizeEvent' or src:name/text()='mouseMoveEvent')">
                -->
                <xsl:when test="ancestor::src:protected">
                  <xsl:call-template name="variant" />
                </xsl:when>
                <xsl:otherwise>
                  <!-- preprocessor -->
                  <xsl:apply-templates />
                </xsl:otherwise>
              </xsl:choose>
            </xsl:for-each>
          </function>
        </xsl:if>
      </xsl:if>
    </xsl:otherwise>
  </xsl:choose>

</xsl:template>


<xsl:template name="variant">
  <!--
  <xsl:variable name="type">
    <xsl:apply-templates select="src:type/src:name[qc:filter-type-name(text())=text()]" mode="alltextnsp" />
  </xsl:variable>
  -->

  <xsl:variable name="type">
    <xsl:apply-templates select="src:type/src:name" mode="alltextnsp_rettype" />
  </xsl:variable>

  <!--
  <xsl:message>RETTYPE: <xsl:value-of select="$type"/></xsl:message>
  <xsl:message>RETTYPE2: <xsl:value-of select="$type2"/></xsl:message>
  -->

  <xsl:variable name="modifier">
    <xsl:apply-templates select="src:type/src:modifier" mode="alltextnsp" />
  </xsl:variable>

  <xsl:variable name="const">
    <xsl:choose>
      <xsl:when test="src:type/src:specifier[text()='const']">
        <xsl:value-of select="'const '" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="''" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>


  <variant return-type="{concat($const, qc:fix-type($type), $modifier)}">
    <xsl:if test="src:type//src:specifier/text()='virtual'">
      <xsl:attribute name="virtual">
        <xsl:value-of select="'true'" />
      </xsl:attribute>
    </xsl:if>

    <xsl:if test="src:literal[@type='number']/text()='0'">
      <xsl:attribute name="pure-virtual">
        <xsl:value-of select="'true'" />
      </xsl:attribute>
    </xsl:if>

    <xsl:if test="src:specifier[text()='const']">
      <xsl:attribute name="const">
        <xsl:value-of select="'true'" />
      </xsl:attribute>
    </xsl:if>

    <xsl:if test="src:type//src:specifier/text()='static'">
      <xsl:attribute name="static">
        <xsl:value-of select="'true'" />
      </xsl:attribute>
    </xsl:if>

    <xsl:attribute name="access">
      <xsl:choose>
        <xsl:when test="parent::src:protected">
          <xsl:value-of select="'protected'" />
        </xsl:when>
        <xsl:when test="parent::src:public or parent::src:signals">
          <xsl:value-of select="'public'" />
        </xsl:when>
        <xsl:when test="parent::src:private">
          <xsl:value-of select="'private'" />
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="'unknown'" />
        </xsl:otherwise>
      </xsl:choose>
    </xsl:attribute>

    <xsl:if test="preceding-sibling::src:label/src:name[text()='Q_SIGNALS'] or parent::src:signals">
      <xsl:attribute name="signal">
        <xsl:value-of select="'true'" />
      </xsl:attribute>
    </xsl:if>

    <parameters>
      <xsl:apply-templates select="src:parameter_list/src:parameter" mode="explicit" />
    </parameters>
  </variant>
</xsl:template>


<xsl:template match="src:parameter" mode="explicit">
  <xsl:variable name="type">
    <xsl:apply-templates select="src:decl/src:type/src:name" mode="alltextnsp" />
  </xsl:variable>
  <xsl:variable name="default">
    <xsl:apply-templates select="src:decl/src:init/src:expr" mode="alltextnsp" />
  </xsl:variable>
  
  <!--
  <xsl:variable name="const">
    <xsl:choose>
      <xsl:when test="src:decl/src:type/src:specifier[text()='const']">
        <xsl:value-of select="'const '" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="''" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>
  -->

  <parameter>
    <!--
    <xsl:if test="$const">
      <xsl:attribute name="const">
        <xsl:value-of select="'true'"/>
      </xsl:attribute>
    </xsl:if>
    -->

    <xsl:attribute name="const">
      <xsl:value-of select="boolean(src:decl/src:type/src:specifier[text()='const'])"/>
    </xsl:attribute>

    <xsl:attribute name="type">
      <xsl:value-of select="qc:fix-type($type)"/>
    </xsl:attribute>

    <xsl:attribute name="modifier">
      <xsl:value-of select="src:decl/src:type/src:modifier/text()"/>
    </xsl:attribute>

    <xsl:attribute name="modifier">
      <xsl:apply-templates select="src:decl/src:type/src:modifier" mode="alltextnsp" />
    </xsl:attribute>

    <xsl:attribute name="name">
      <xsl:value-of select="src:decl/src:name/text()"/>
    </xsl:attribute>

    <xsl:if test="$default!=''">
      <xsl:attribute name="default">
        <xsl:value-of select="$default"/>
      </xsl:attribute>
    </xsl:if>
  </parameter>
</xsl:template>

<xsl:template match="src:enum">
  <enum name="{src:name/text()}">
    <xsl:for-each select="src:block/src:decl/src:name">
      <key><xsl:value-of select="text()"/></key>
    </xsl:for-each>
  </enum>
</xsl:template>

<xsl:template match="text()" mode="alltextnsp">
    <xsl:value-of select="normalize-space(.)" />
    <xsl:if test="normalize-space(.)='unsigned' or normalize-space(.)='long'">
      <xsl:value-of select="' '" />
    </xsl:if>
</xsl:template>

<xsl:template match="text()" mode="alltextnsp_rettype">
    <xsl:variable name="txt">
      <xsl:value-of select="normalize-space(.)" />
    </xsl:variable>

    <xsl:if test="qc:filter-type-name($txt)=$txt">
      <xsl:value-of select="$txt" />
    </xsl:if>

    <xsl:if test="$txt='unsigned' or $txt='long'">
      <xsl:value-of select="' '" />
    </xsl:if>
</xsl:template>

<xsl:template match="text()" mode="alltext">
    <xsl:value-of select="." />
</xsl:template>

<func:function name="qc:filter-type-name">
  <xsl:param name="str" />
  <func:result>
    <!--
    <xsl:choose>
      <xsl:when test="document('filter_type_name.xml')/dictionary/item[@name=$str]">
        <xsl:text></xsl:text>
      </xsl:when>
      <xsl:otherwise>
      -->
        <xsl:value-of select="$str" />
      <!--
      </xsl:otherwise>
    </xsl:choose>
    -->
  </func:result>
</func:function>

<func:function name="qc:fix-type">
    <xsl:param name="str" />
    <func:result>
      <!--
      <xsl:choose>
        <xsl:when test="document('fix_type.xml')/dictionary/item[@ori=$str]">
          <xsl:value-of select="document('fix_type.xml')/dictionary/item[@ori=$str]/@fixed" />
        </xsl:when>
        <xsl:otherwise>
        -->
          <xsl:value-of select="$str" />
        <!--
        </xsl:otherwise>
      </xsl:choose>
      -->
    </func:result>
</func:function>

</xsl:stylesheet>
