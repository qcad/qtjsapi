<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:qsrc="http://qcad.org/namespaces/src" 
    xmlns:qc="http://qcad.org/namespaces/xsl"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:func="http://exslt.org/functions"
    xmlns:date="http://exslt.org/dates-and-times"
    xmlns:str="http://exslt.org/strings"
    xmlns:com="http://exslt.org/common"
    extension-element-prefixes="func date str">

<xsl:include href="shared.xsl"/>

<xsl:output method="text" />

<xsl:param name="mode" />
<xsl:param name="module" />

<!--
<xsl:param name="qobject">
  <xsl:value-of select="boolean(/qsrc:unit/qsrc:class/qsrc:super_list/qsrc:super[@name='QObject'])" />
  < ! - -
  <xsl:value-of select="boolean(/qsrc:unit/qsrc:class/qsrc:super_list/qsrc:super[@name='QObject' or @name='QWidget'])" />
  - - >
</xsl:param>
-->


<!--
<xsl:param name="class-name">
  <xsl:value-of select="qsrc:unit/qsrc:class/@name" />
</xsl:param>
-->


<xsl:template match="text()" />


<xsl:template match="/">
  <!--
  <xsl:variable name="class-name">
    <xsl:value-of select="qsrc:unit/qsrc:class/@name"/>
  </xsl:variable>
  -->

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  <!--
  <xsl:choose>
    <xsl:when test="$qobject='true'">
      // Class inherited from QObject
    </xsl:when>
    <xsl:otherwise>
      // Class not inherited from QObject
    </xsl:otherwise>
  </xsl:choose>
  -->

  <xsl:if test="$mode='h'">
  #ifndef <xsl:value-of select="qc:include_guard(qsrc:unit/@filename)" />
  #define <xsl:value-of select="qc:include_guard(qsrc:unit/@filename)" />

  // include header:
  //#include "header_h.h"
    <xsl:choose>
      <xsl:when test="$module!=''">
        #include "RJSHelper.h"
        #include "../RJSHelper_<xsl:value-of select="$module"/>.h"
      </xsl:when>
      <xsl:otherwise>
        #include "../RJSHelper.h"
      </xsl:otherwise>
    </xsl:choose>

  </xsl:if>

  <xsl:if test="$mode='cpp'">
  // include header:
  #include "<xsl:value-of select="qc:lowercase(qc:replace(qsrc:unit/@filename, '.h', '_base.h'))" />"
  //#include "<xsl:value-of select="qc:replace(qsrc:unit/@filename, '.h', '_wrapper.h')" />"
  //#include "header_cpp.h"
    <!--
    <xsl:if test="$qobject='true'">
      #include "<xsl:value-of select="qc:replace(qsrc:unit/@filename, '.h', '_base.h')" />"
    </xsl:if>
    -->
  </xsl:if>


  <xsl:apply-templates />


  <xsl:if test="$mode='h'">
  #endif
  </xsl:if>
</xsl:template>


<xsl:template match="qsrc:unit">
  <xsl:apply-templates select="qsrc:class_decl" />
  <xsl:apply-templates select="qsrc:class" />
</xsl:template>


<xsl:template match="qsrc:class_decl">
  <xsl:if test="$mode='h' and not(starts-with(@name, 'R'))">
    #include &lt;<xsl:value-of select="@name" />&gt;
  </xsl:if>
</xsl:template>


<xsl:template match="qsrc:class">
  <!--
  <xsl:variable name="base">
    <xsl:choose>
      <xsl:when test="$qobject='true'">
        <xsl:text>RJSWrapper</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text>RJSWrapperObj</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>
  -->

  <xsl:if test="$mode='h'">
    #include &lt;QQmlEngine&gt;

    <xsl:choose>
      <xsl:when test="starts-with(@name, 'R')">
        #include "<xsl:value-of select="@name" />.h"
      </xsl:when>
      <xsl:otherwise>
        #include &lt;<xsl:value-of select="@name" />&gt;
      </xsl:otherwise>
    </xsl:choose>
  </xsl:if>

  <xsl:variable name="class-name">
    <xsl:value-of select="@name"/>
  </xsl:variable>

  <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name] or @inheritable='true'">
    // Base class for <xsl:value-of select="@name" />

    <xsl:if test="$mode='h'">
      <!--
      QObject base class needs to be fist in list:
      -->
      <!--
      <xsl:choose>
        <xsl:when test="$qobject='true'">
          // QObject based class:
          // inherit from class directly:
          class <xsl:value-of select="@name" />_Wrapper : public <xsl:value-of select="@name" />, public <xsl:value-of select="$base" /> {
        </xsl:when>
        <xsl:otherwise>
          // Wrapped class is not derrived from QObject, 
          // add QObject to wrapper and encapsulate object as member variable:
          class <xsl:value-of select="@name" />_Wrapper : public <xsl:value-of select="$base" /> {
        </xsl:otherwise>
      </xsl:choose>
      -->
      class <xsl:value-of select="@name" />_Base : public <xsl:value-of select="@name" /> {

      <!--
      <xsl:if test="$base='RJSWrapper'">
      -->
        //Q_OBJECT
      <!--
      </xsl:if>
      -->

      public:
    </xsl:if>

    <!--
    <xsl:choose>

      <xsl:when test="$qobject='false'">
        // constructors:
        <xsl:apply-templates select="qsrc:constructor | qsrc:preproc" />

        // non-static functions:
        <xsl:apply-templates select="qsrc:function[not(@static)] | qsrc:preproc" />
        < ! - - 20210702
        <xsl:apply-templates select="qsrc:function[not(@static)] | qsrc:preproc" mode="public" />
        - - >
      </xsl:when>

      <xsl:otherwise>
        // constructors:
        <xsl:apply-templates select="qsrc:constructor | qsrc:preproc" />

        // public non-static functions:
        < ! - -
        <xsl:apply-templates select="qsrc:function/qsrc:variant[@access='public' and not(../@static)] | qsrc:preproc" />
        - - >
        <xsl:apply-templates select="qsrc:function[not(@static)] | qsrc:preproc" mode="public" />
      </xsl:otherwise>

    </xsl:choose>
    -->

    // constructors:
    <xsl:choose>
      <xsl:when test="qsrc:constructor/qsrc:variant">
        <xsl:apply-templates select="qsrc:constructor | qsrc:preproc" />
      </xsl:when>
      <xsl:when test="qsrc:constructor">
        <xsl:if test="$mode='h'">
          // default constructor (there are constructors but not scriptable ones):
          <xsl:value-of select="@name" />_Base(RJSApi&amp; h) : handler(h) { }
        </xsl:if>
      </xsl:when>
        // no constructor
      <xsl:otherwise>
      </xsl:otherwise>
    </xsl:choose>


    <xsl:if test="$mode='h'">
    // destructor:
    virtual ~<xsl:value-of select="@name" />_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    </xsl:if>

    <!-- 
      no constructor means class is pure virtual, cannot be instantiated and does not offer any functions 
      note: the class might be a base class for other classes which do implement wrappers for these functions
    --> 
    <xsl:if test="qsrc:constructor">
      // protected overwritten functions / events and their public invokable counterparts:
      <xsl:apply-templates select="qsrc:function/qsrc:variant[@access='protected']" mode="protected" />
      <!--
      <xsl:apply-templates select="qsrc:function/qsrc:variant[@access='protected' or @access='public']" mode="protected" />
      -->

      // public virtual overwritten functions / events:
      <xsl:apply-templates select="qsrc:function/qsrc:variant[@access='public' and @virtual='true' and @overridable='true']" mode="virtual" />

      // public pure-virtual functions:
      <xsl:apply-templates select="qsrc:function/qsrc:variant[@access='public' and @pure-virtual='true']" mode="pure-virtual" />
    </xsl:if>

    <xsl:if test="$mode='h'">

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      <xsl:if test="qsrc:constructor">
        RJSApi&amp; handler;
      </xsl:if>
      //bool recFlag;

    };
    </xsl:if>
  </xsl:if>

</xsl:template>


<xsl:template match="qsrc:preproc">
  <xsl:text>&#xa;</xsl:text>
  <xsl:value-of select="@plain" />
  <xsl:text>&#xa;</xsl:text>
</xsl:template>


<xsl:template match="qsrc:constructor">
  <!--
  <xsl:variable name="class" >
    <xsl:copy-of select="ancestor::qsrc:class[1]" />
    <!- -
    <xsl:value-of select="ancestor::qsrc:class/@name" />
    - ->
  </xsl:variable>

  <xsl:variable name="sorted_variants">
  <!- -
    <xsl:for-each select="com:node-set($class)/qsrc:constructor/qsrc:variant">
  - ->
    <xsl:for-each select="qsrc:variant">
      <xsl:sort select="count(qsrc:parameters/qsrc:parameter)" order="descending"/>
      <xsl:copy-of select="." />
    </xsl:for-each>
  </xsl:variable>

  <!- -
  <xsl:message>Function name: <xsl:copy-of select="com:node-set($sorted_variants)" /></xsl:message>
  - ->

  <xsl:for-each select="com:node-set($sorted_variants)">
    // applying variant with <xsl:value-of select="count(qsrc:parameters/qsrc:parameter)" /> parameters for constructor
    <xsl:apply-templates select="qsrc:variant">
      <xsl:with-param name="class" select="com:node-set($class)" />
      <xsl:with-param name="function" select="ancestor::qsrc:function[1]" />
    </xsl:apply-templates>
  </xsl:for-each>
  -->

  <xsl:apply-templates select="qsrc:variant">
    <xsl:sort select="count(qsrc:parameters/qsrc:parameter)" order="descending" />
    <xsl:with-param name="constructor" select="true" />
  </xsl:apply-templates>
</xsl:template>



  <!--
  <xsl:variable name="base">
    <xsl:choose>
      <xsl:when test="ancestor::qsrc:class/qsrc:super_list/qsrc:super[@name='QObject']">
        <xsl:text>RJSWrapper</xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:text>RJSWrapperObj</xsl:text>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:if test="$mode='h'">
    <xsl:choose>
      <xsl:when test="$base='RJSWrapperObj'">
        // constructor
        Q_INVOKABLE <xsl:value-of select="../@name" />_Wrapper(
          <!- - constructor parameters - ->
          <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
        ) {
          wrapped = new <xsl:value-of select="../@name" />(
            <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="names" />
          );
        }
      </xsl:when>
      <xsl:otherwise>
        // constructor
        Q_INVOKABLE <xsl:value-of select="../@name" />_Wrapper(
          <!- - constructor parameters - ->
          <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
        ) : <xsl:value-of select="../@name" />(
          <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="names" />
        ) {
        }
      </xsl:otherwise>
    </xsl:choose>
  </xsl:if>

</xsl:template>
-->


<xsl:template match="qsrc:function" mode="public">
  // function <xsl:value-of select="@name" />
  <!--
    apply variant template in order of parameter count (most parameters first).
    we only apply the template with the most paramters
  -->
  <xsl:apply-templates select="qsrc:variant[@access='public']">
    <xsl:sort select="count(qsrc:parameters/qsrc:parameter)" order="descending" />
  </xsl:apply-templates>
</xsl:template>


<!--
<xsl:template match="qsrc:variant">
-->
<xsl:template match="qsrc:variant">
  <xsl:variable name="class-name">
    <xsl:value-of select="ancestor::qsrc:class[1]/@name" />
  </xsl:variable>

  <xsl:variable name="wrapper-class-name">
    <xsl:value-of select="concat($class-name, '_Base')" />
  </xsl:variable>

  <xsl:variable name="num-param">
    <xsl:value-of select="count(qsrc:parameters/qsrc:parameter)" />
  </xsl:variable>

  <xsl:variable name="num-prev-param">
    <xsl:choose>
    <xsl:when test="preceding-sibling::*">
      <xsl:value-of select="count(preceding-sibling::*[1]/qsrc:parameters/qsrc:parameter)" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="-1" />
    </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <!--
  <xsl:param name="function" />
  -->

    <!--
    Class: <xsl:value-of select="com:node-set($class)/@name" />
    Function: <xsl:value-of select="com:node-set($function)/@name" />
    Class: <xsl:value-of select="ancestor::qsrc:class[1]/@name" />
    Function: <xsl:value-of select="../@name" />
    // Class: <xsl:value-of select="com:node-set($class)/@name" />
    // Function: <xsl:value-of select="$function" />
    -->
  // Class: <xsl:value-of select="$class-name" />
  // Function: <xsl:value-of select="../@name" />
  // Parameters: <xsl:value-of select="$num-param"/>
  // preceding Parameters: <xsl:value-of select="$num-prev-param"/>
  <xsl:text>&#10;</xsl:text>

  <!--
    only one function / constructor per parameter count:
  -->
  <xsl:if test="$num-param != $num-prev-param">
  <!--
  <xsl:if test="position()=1">
  -->
    <!--
    <xsl:variable name="specifier">
      <xsl:choose>
        <xsl:when test="@virtual='true' and $mode='h'">
          <xsl:value-of select="'virtual '" />
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="''" />
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    -->

    <!--
    <xsl:variable name="wrapped-return-type">
      <xsl:value-of select="qc:get-wrapper-return-type(@return-type)" />
    </xsl:variable>
    -->


    <!--
    <xsl:if test="$mode='h'">
      <xsl:choose>
        <xsl:when test="@signal='true'">
          Q_SIGNALS:
        </xsl:when>
        <xsl:otherwise>
          public:
        </xsl:otherwise>
      </xsl:choose>
    </xsl:if>
    -->

    <xsl:if test="$mode='h'">
      <xsl:if test="ancestor::qsrc:function">
        Q_INVOKABLE
      </xsl:if>
      <!--
      <xsl:if test="$mode='h' and @static='true'">
        static
      </xsl:if>
      -->
      <!--
      <xsl:value-of select="concat($specifier, $wrapped-return-type, ' ', @name)" />(
      -->
      <xsl:choose>
        <xsl:when test="ancestor::qsrc:function">
          <!-- function -->
          //QJSValue 
          <!--
          <xsl:value-of select="ancestor::qsrc:function/@name" />
          -->
        </xsl:when>
        <xsl:otherwise>
          <!-- constructor -->
          <xsl:value-of select="$class-name" />_Base
        </xsl:otherwise>
      </xsl:choose>
      (

        <!--
        <xsl:value-of select="count(qsrc:parameters/qsrc:parameter)" />
        -->
        <xsl:if test="ancestor::qsrc:constructor">
          RJSApi&amp; _h
          <xsl:if test="qsrc:parameters/qsrc:parameter">
            ,
          </xsl:if>
        </xsl:if>

        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
      )
      <xsl:if test="@const='true'">
        const
      </xsl:if>
      <xsl:if test="ancestor::qsrc:constructor">
        : <xsl:value-of select="$class-name" />(
          <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="names" />
        ) 
        <xsl:if test="ancestor::qsrc:constructor">
          , handler(_h) /*, recFlag(false)*/
        </xsl:if>
        {}
      </xsl:if>
    </xsl:if>
  </xsl:if>
</xsl:template>


<!--
<xsl:template match="qsrc:function" mode="protected">
  <xsl:apply-templates select="qsrc:variant" mode="protected" />
</xsl:template>
-->


<!--
  Implementation of protected functions that call into JS and ...Public 
  functions that can be called from JS.
-->
<xsl:template match="qsrc:function/qsrc:variant" mode="protected">
  <xsl:variable name="specifier">
    <xsl:choose>
      <xsl:when test="@virtual='true' and $mode='h'">
        <xsl:value-of select="'virtual '" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="''" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:if test="$mode='h'">
    protected:
    // implementation of protected function
    // calls JS implementation if available
    <xsl:value-of select="concat($specifier, @return-type, ' ', ../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    );
  </xsl:if>

  <xsl:if test="$mode='h'">
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE <xsl:value-of select="concat($specifier, @return-type, ' ', ../@name)" />Public(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    ) {
      //qDebug() &lt;&lt; "<xsl:value-of select="ancestor::qsrc:class/@name" />_Base::<xsl:value-of select="../@name" />Public()";
      <xsl:if test="@return-type!='void'">
        // TODO: convert return value to QJSValue:
        return
      </xsl:if>
      <xsl:value-of select="ancestor::qsrc:class/@name" />::<xsl:value-of select="../@name" />(
        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="names" />
      );
    }
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    <xsl:value-of select="concat($specifier, @return-type, ' ', ancestor::qsrc:class/@name, '_Base::' ,../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    ) {

      //qDebug() &lt;&lt; "<xsl:value-of select="ancestor::qsrc:class/@name" />_Base::<xsl:value-of select="../@name" />()";

      //QJSValue f = self.prototype().property("<xsl:value-of select="../@name" />");
      QJSValue f = self.property("<xsl:value-of select="../@name" />");
      if (f.isCallable() /*&amp;&amp; !recFlag*/) {
        <!--
        QJSValueList args;
        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="toqjsvaluelist" />
        QJSValue err = f.callWithInstance(self, args);
        if (err.isError()) {
          qWarning() &lt;&lt; "Error while calling <xsl:value-of select="ancestor::qsrc:class/@name" />::<xsl:value-of select="../@name" />:" &lt;&lt; err.toString();
          handler.trace();
        }
        -->


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="toqjsvaluelist" />

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i&lt;args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.<xsl:value-of select="../@name" />.apply(__self__, __args__);", "", 1, &amp;trace);

        if (res.isError()) {
          qWarning() &lt;&lt; "exception: " &lt;&lt; res.toString();
          for (int i=0; i&lt;trace.length(); i++) {
            qWarning() &lt;&lt; trace[i];
          }
        }


        <xsl:choose>
          <xsl:when test="@return-type='void'">
            return;
          </xsl:when>
          <xsl:otherwise>
            // convert return value js2cpp and return:
            return <xsl:value-of select="qc:type-to-function-js2cpp(@return-type, '')" />(handler, res);
          </xsl:otherwise>
        </xsl:choose>
      }
      else {
        <xsl:if test="@return-type!='void'">
          return
        </xsl:if>
        <xsl:value-of select="ancestor::qsrc:class/@name" />::<xsl:value-of select="../@name" />(
          <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="names" />
        );
      }
    }

  </xsl:if>
</xsl:template>



<!--
<xsl:template match="qsrc:function" mode="virtual">
  <xsl:apply-templates select="qsrc:variant" mode="virtual" />
</xsl:template>
-->



<!--
  Overridable functions:
-->
<xsl:template match="qsrc:function/qsrc:variant" mode="virtual">
  <xsl:variable name="specifier">
    <xsl:choose>
      <xsl:when test="@virtual='true' and $mode='h'">
        <xsl:value-of select="'virtual '" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="''" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:if test="$mode='h'">
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    <xsl:value-of select="concat($specifier, @return-type, ' ', ../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    )
    <xsl:if test="@const='true'">
      const
    </xsl:if>
    ;

    <xsl:if test="not(@pure='true')">
      // implementation of virtual public function
      // always calls super implementation
      <xsl:value-of select="concat($specifier, @return-type, ' ', ../@name)" />Sup(
        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
      )
      <xsl:if test="@const='true'">
        const
      </xsl:if>
      {
        <xsl:if test="@return-type!='void'">
          return
        </xsl:if>
        <xsl:value-of select="ancestor::qsrc:class/@name" />::<xsl:value-of select="../@name" />(
          <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="names" />
        );
      }
    </xsl:if>
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    <xsl:value-of select="concat($specifier, @return-type, ' ', ancestor::qsrc:class/@name, '_Base::' ,../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    ) 
    <xsl:if test="@const='true'">
      const
    </xsl:if>
    {

      //qDebug() &lt;&lt; "<xsl:value-of select="ancestor::qsrc:class/@name" />_Base::<xsl:value-of select="../@name" />()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("<xsl:value-of select="../@name" />");
      QJSValue f = self.property("<xsl:value-of select="../@name" />");
      if (f.isCallable() /*&amp;&amp; !recFlag*/) {
        QJSValueList args;
        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="toqjsvaluelist" />

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i&lt;args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.<xsl:value-of select="../@name" />();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.<xsl:value-of select="../@name" />.apply(__self__, __args__);", "", 1, &amp;trace);

        if (res.isError()) {
          qWarning() &lt;&lt; "exception: " &lt;&lt; res.toString();
          for (int i=0; i&lt;trace.length(); i++) {
            qWarning() &lt;&lt; trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() &lt;&lt; "Error while calling <xsl:value-of select="../@name" />:" &lt;&lt; res.toString();
        //  engine->throwError("exception in: <xsl:value-of select="concat(ancestor::qsrc:class/@name, '::' , ../@name)" />:" + res.toString());
        //}

        <xsl:variable name="mod">
          <xsl:if test="qc:ends-with(@return-type, '*')">
            <xsl:value-of select="'*'" />
          </xsl:if>
        </xsl:variable>

        <xsl:choose>
          <xsl:when test="@return-type='void'">
            // void:
            return;
          </xsl:when>
          <xsl:when test="qc:ends-with(@return-type, '&amp;')">
            return *<xsl:value-of select="qc:type-to-function-js2cpp(@return-type, $mod)" />(handler, res);
          </xsl:when>
          <xsl:otherwise>
            return <xsl:value-of select="qc:type-to-function-js2cpp(@return-type, $mod)" />(handler, res);
          </xsl:otherwise>
        </xsl:choose>
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: <xsl:value-of select="concat(ancestor::qsrc:class/@name, '::' , ../@name)" />"));
      //}

      <xsl:choose>
        <xsl:when test="@pure='true'">
          // pure virtual function:
          // return default value:
          <xsl:choose>
            <xsl:when test="@return-type='void'">
              // void
              return;
            </xsl:when>
            <xsl:when test="@return-type='int'">
              // int
              return 0;
            </xsl:when>
            <xsl:when test="@return-type='double'">
              // double
              return RNANDOUBLE;
            </xsl:when>
            <xsl:when test="@return-type='QSize'">
              // QSize
              return QSize();
            </xsl:when>
            <xsl:when test="qc:ends-with(@return-type, '*')">
              // pointer:
              return nullptr;
            </xsl:when>
            <xsl:otherwise>
              MUST_FIX;
            </xsl:otherwise>
          </xsl:choose>
        </xsl:when>

        <xsl:otherwise>
          // call implementation of original class:
          return <xsl:value-of select="concat(ancestor::qsrc:class/@name, '::' ,../@name)" />(
            <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="names" />
          );
        </xsl:otherwise>
      </xsl:choose>


      <!--
      -->
    }

  </xsl:if>
</xsl:template>




<xsl:template match="qsrc:function/qsrc:variant" mode="pure-virtual">
  // TODO: fix (<xsl:value-of select="../@name" />)
  <!--
  <xsl:if test="$mode='h'">
    public:
    // implementation of pure-virtual function
    <xsl:value-of select="concat('virtual ', @return-type, ' ', ../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    )
    <xsl:if test="@const='true'">
      const
    </xsl:if>
    ;
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    <xsl:value-of select="concat(@return-type, ' ', ancestor::qsrc:class/@name, '_Base::' ,../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    ) 
    <xsl:if test="@const='true'">
      const
    </xsl:if>
    {

      // TODO: call into JS class (self):

      <xsl:choose>
        <xsl:when test="@return-type='void'">
          // void
        </xsl:when>
        <xsl:when test="@return-type='int'">
          // int
          return 0;
        </xsl:when>
        <xsl:when test="@return-type='double'">
          // double
          return RNANDOUBLE;
        </xsl:when>
        <xsl:otherwise>
          MUST_FIX;
        </xsl:otherwise>
      </xsl:choose>
    }

  </xsl:if>
  -->
</xsl:template>



<!--
  Parameter as list of values with original C++ types.
-->
<xsl:template match="qsrc:parameter">

  <!-- e.g. const QWidget* -->
  <xsl:if test="@const='true'">
    <xsl:value-of select="'const'" />
    <xsl:value-of select="' '" />
  </xsl:if>
  <xsl:value-of select="@type" />
  <xsl:value-of select="@modifier" />
  <xsl:value-of select="' '" />

  <!-- e.g. parent = nullptr -->
  <xsl:choose>
    <xsl:when test="@name!=''">
      <xsl:value-of select="@name" />

      <!-- default value for argument (header only) -->
      <xsl:if test="$mode='h'">
        <xsl:if test="@default!=''">
          <xsl:value-of select="'='" />
          <xsl:value-of select="@default" />
        </xsl:if>
      </xsl:if>

    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="concat('a', position())" />
    </xsl:otherwise>
  </xsl:choose>

  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>


<xsl:template match="qsrc:parameter" mode="toqjsvaluelist">
  <xsl:variable name="name">
    <xsl:choose>
      <xsl:when test="@name!=''">
        <xsl:value-of select="@name" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="concat('a', position())" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <!--
  args &lt;&lt; RJSHelper::cpp2js_<xsl:value-of select="@type" />(engine, <xsl:value-of select="$name" />);
  -->

  args &lt;&lt; <xsl:value-of select="qc:type-to-function-cpp2js(@type)" />(
    handler, 
    // non-copyable: <xsl:value-of select="qc:is-non-copyable(@type)='true'" />
    <xsl:text>&#xa;</xsl:text>
    <xsl:choose>
      <xsl:when test="qc:ends-with(@type, '*') and qc:is-non-copyable(@type)='false'">
        <!--
          return type is pointer, type is copyable:
          dereference pointer:
        -->
        *<xsl:value-of select="$name" />
      </xsl:when>
      <xsl:when test="@modifier='&amp;' and qc:is-non-copyable(@type)='true'">
        <!-- 
          return type is reference, type is not copyable:
          convert using pointer:
        -->
        &amp;<xsl:value-of select="$name" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$name" />
      </xsl:otherwise>
    </xsl:choose>
  );
</xsl:template>

<!--
  Parameter as list of const QJSValue& v1
-->
<xsl:template match="qsrc:parameter" mode="qjsvalue">
  const QJSValue&amp; 
  <!--
  <xsl:choose>
    <xsl:when test="@name!=''">
      <xsl:value-of select="@name" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="concat('a', position())" />
    </xsl:otherwise>
  </xsl:choose>
  -->

  <xsl:value-of select="concat('a', position())" />

  <!--
  < ! - - e.g. const QWidget* - - >
  <xsl:if test="@const='true'">
    <xsl:value-of select="'const'" />
    <xsl:value-of select="' '" />
  </xsl:if>
  <xsl:value-of select="@type" />
  <xsl:value-of select="@modifier" />
  <xsl:value-of select="' '" />

  < ! - - e.g. parent = nullptr - - >
  <xsl:choose>
    <xsl:when test="@name!=''">
      <xsl:value-of select="@name" />

      < ! - - default value for argument (header only) - - >
      <xsl:if test="$mode='h'">
        <xsl:if test="@default!=''">
          <xsl:value-of select="'='" />
          <xsl:value-of select="@default" />
        </xsl:if>
      </xsl:if>

    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="concat('a', position())" />
    </xsl:otherwise>
  </xsl:choose>
  -->

  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>


<xsl:template match="qsrc:parameter" mode="towrapper">
  <!-- e.g. const QWidgetWrapper* -->
  <xsl:if test="@const='true'">
    <xsl:value-of select="'const'" />
    <xsl:value-of select="' '" />
  </xsl:if>
  <xsl:choose>
    <xsl:when test="starts-with(@type, 'Q')">
      <xsl:value-of select="@type" />_Wrapper
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="@type" />
    </xsl:otherwise>
  </xsl:choose>
  <xsl:value-of select="@modifier" />
  <xsl:value-of select="' '" />

  <!-- parameter name or a1, a2, ... -->
  <xsl:choose>
    <xsl:when test="@name!=''">
      <xsl:value-of select="@name" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="concat('a', position())" />
    </xsl:otherwise>
  </xsl:choose>

  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>


<xsl:template match="qsrc:parameter" mode="towrappercall">

  <!-- parameter name or a1, a2, ... -->
  <xsl:choose>
    <xsl:when test="@name!=''">
      <xsl:value-of select="@name" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="concat('a', position())" />
    </xsl:otherwise>
  </xsl:choose>

  <xsl:if test="starts-with(@type, 'Q')">
    <xsl:text>-&gt;getWrapped()</xsl:text>
  </xsl:if>

  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>


<xsl:template match="qsrc:parameter" mode="names">
  <xsl:choose>
    <xsl:when test="@name!=''">
      <xsl:value-of select="@name" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="concat('a', position())" />
    </xsl:otherwise>
  </xsl:choose>

  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>

<xsl:template match="qsrc:parameter" mode="cppnames">
  <!--
  <xsl:choose>
    <xsl:when test="@name!=''">
      <xsl:value-of select="@name" />_cpp
    </xsl:when>
    <xsl:otherwise>
    -->
      <xsl:value-of select="concat('a', position())" />_cpp
    <!--
    </xsl:otherwise>
  </xsl:choose>
  -->

  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>

<!--
  Converts the list of parameters from QSValue to native types (int, RVector, ...).
-->
<xsl:template match="qsrc:parameter" mode="tocpp">
  // parameter: <xsl:value-of select="@name" />
  <xsl:text>&#xa;</xsl:text>

  <xsl:variable name="type">
    <xsl:value-of select="@type" />
  </xsl:variable>

  <xsl:variable name="name">
    <!--
    <xsl:choose>
      <xsl:when test="@name!=''">
        <xsl:value-of select="@name" />
      </xsl:when>
      <xsl:otherwise>
      -->
        <xsl:value-of select="concat('a', position())" />
      <!--
      </xsl:otherwise>
    </xsl:choose>
    -->
  </xsl:variable>
  
  <xsl:variable name="modifier">
    <xsl:choose>
      <xsl:when test="@modifier='*'">
        <xsl:value-of select="'*'" />
      </xsl:when>
      <xsl:when test="qc:is-non-copyable($type)='true'">
        <xsl:value-of select="'*'" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="''" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:value-of select="concat(@type, $modifier)" /><xsl:text> </xsl:text><xsl:value-of select="$name" />_cpp = <xsl:value-of select="qc:type-to-function-js2cpp(@type, @modifier)" />(handler, <xsl:value-of select="$name" />);

</xsl:template>


<!--
  Converts the list of parameters from QSValue to native types for use in calling the base constructor:
  RJSHelper::js2cpp_xy(engine, a1), ...
-->
<!--
<xsl:template match="qsrc:parameter" mode="tocppcontr">
  <xsl:variable name="name">
    <xsl:value-of select="concat('a', position())" />
  </xsl:variable>

  RJSHelper::js2cpp_<xsl:value-of select="qc:type-to-function-postfix(@type)" />(engine, <xsl:value-of select="$name" />)
  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>
-->





<func:function name="qc:include_guard">
  <xsl:param name="filename" />
  <func:result>
      <xsl:value-of select="concat(qc:uppercase(translate($filename, '.', '_')), '_BASE')" />
  </func:result>
</func:function>

<!--
<func:function name="qc:get-wrapper-return-type">
  <xsl:param name="type" />
  <func:result>
    <xsl:choose>
      <xsl:when test="$type='RVector'">
        <xsl:value-of select="'RVectorWrapper*'" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$type" />
      </xsl:otherwise>
    </xsl:choose>
  </func:result>
</func:function>
-->

<!--
<func:function name="qc:get-wrapper-type">
  <xsl:param name="type" />
  <func:result>
    <xsl:choose>
      <xsl:when test="$type='RVector'">
        <xsl:value-of select="'RVectorWrapper'" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$type" />
      </xsl:otherwise>
    </xsl:choose>
  </func:result>
</func:function>
-->

<func:function name="qc:type-to-function-postfix">
  <xsl:param name="type" />
  <func:result>
    <xsl:value-of 
      select="qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
              qc:replace(
                $type, '&gt;', ''
              ), '&lt;', '_'
              ), '::', '_'
              ), 'const', ''
              ), '&amp;', ''
              ), '*', ''
              ), ' ', ''
              )" />
  </func:result>
</func:function>

</xsl:stylesheet>
