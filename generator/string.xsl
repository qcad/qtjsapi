<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:qc="http://qcad.org/namespaces/xsl"
                xmlns:func="http://exslt.org/functions"
                extension-element-prefixes="func"
                version="1.0">

<!--
  Same as the standard function substring-before but looks for the
  last occurence of substr rather than the first.
-->
<func:function name="qc:substring-before-last">
  <xsl:param name="input"/>
  <xsl:param name="substr"/>

  <func:result>
    <xsl:if test="$substr and contains($input, $substr)">
      <xsl:variable name="temp" select="substring-after($input, $substr)" />
      <xsl:value-of select="substring-before($input, $substr)" />
      <xsl:if test="contains($temp, $substr)">
        <xsl:value-of select="$substr" />
        <xsl:value-of select="xpxslt:substring-before-last($temp, $substr)" />
      </xsl:if>
    </xsl:if>
  </func:result>
</func:function>

<!--
  Same as the standard function starts-with but compares the end of the
  string rather than the start.
-->
<func:function name="qc:ends-with">
  <xsl:param name="input"/>
  <xsl:param name="find"/>

  <func:result select="$find = substring($input, 1 + string-length($input) - string-length($find))" />
</func:function>

<func:function name="qc:lowercase">
  <xsl:param name="str" />
  <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
  <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
  <func:result>
      <xsl:value-of select="translate($str, $uppercase, $lowercase)" />
  </func:result>
</func:function>

<func:function name="qc:uppercase">
  <xsl:param name="str" />
  <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
  <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
  <func:result>
      <xsl:value-of select="translate($str, $lowercase, $uppercase)" />
  </func:result>
</func:function>

<func:function name="qc:replace">
  <xsl:param name="text"/>
  <xsl:param name="from"/>
  <xsl:param name="to"/>
  <func:result>
    <xsl:call-template name="replace-string">
      <xsl:with-param name="text" select="$text"/>
      <xsl:with-param name="from" select="$from"/>
      <xsl:with-param name="to" select="$to"/>
    </xsl:call-template>
  </func:result>
</func:function>

<xsl:template name="replace-string">
  <xsl:param name="text"/>
  <xsl:param name="from"/>
  <xsl:param name="to"/>
  <xsl:variable name="stringText" select="string($text)"/>
  <xsl:choose>
    <xsl:when test="contains($stringText,$from)">
      <xsl:value-of select="substring-before($stringText,$from)"/>
      <xsl:value-of select="$to"/>
      <xsl:call-template name="replace-string">
        <xsl:with-param name="text" select="substring-after($stringText,$from)"/>
        <xsl:with-param name="from" select="$from"/>
        <xsl:with-param name="to" select="$to"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$stringText"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

</xsl:stylesheet>
