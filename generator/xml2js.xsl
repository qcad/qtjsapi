<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:qsrc="http://qcad.org/namespaces/src" 
    xmlns:qc="http://qcad.org/namespaces/xsl"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:func="http://exslt.org/functions"
    xmlns:date="http://exslt.org/dates-and-times"
    xmlns:str="http://exslt.org/strings"
    xmlns:com="http://exslt.org/common"
    extension-element-prefixes="func date str com">

<xsl:include href="string.xsl"/>

<xsl:output method="text" />

<!--
<xsl:param name="class-name">
  <xsl:value-of select="qsrc:unit/qsrc:class/@name" />
</xsl:param>
-->

<xsl:param name="proxy-mode">
  <xsl:value-of select="qsrc:unit/qsrc:class/@proxy" />
  <!--
  <xsl:value-of select="not(qsrc:unit/qsrc:class/qsrc:function/qsrc:variant[@signal='true']) and not(qsrc:unit/qsrc:class[@inheritable='true'])" />
  -->
</xsl:param>

<xsl:template match="text()" />

<xsl:template match="/">
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="qsrc:unit">
  <xsl:apply-templates select="qsrc:class" />
  <xsl:apply-templates select="qsrc:namespace" />
</xsl:template>

<xsl:template match="qsrc:namespace">
  <com:document href="new_js/{@name}.js" method="text">
    // auto generated
    //var self;

    // class constructor:
    function <xsl:value-of select="@name" />() {
    }

    <xsl:value-of select="@name" />.prototype = Object();

    // enum values:
    <xsl:apply-templates select="qsrc:enum" />
  </com:document>
</xsl:template>

<xsl:template match="qsrc:class">
  <!--
  <xsl:if test="not(@shell='false')">
  -->
    <com:document href="new_js/{@name}.js" method="text">
      // auto generated
      //var self;

      // class constructor:
      function <xsl:value-of select="@name" />() {
        <!--
        <xsl:if test="not(@shell='false')">
          this.wrapper = new <xsl:value-of select="@name" />_Wrapper();
        </xsl:if>
        -->

        // should be <xsl:value-of select="@name" />_BaseJs.call(this, engine):
        //<xsl:value-of select="@name" />.prototype = new <xsl:value-of select="@name" />_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 &amp;&amp; arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            &amp;&amp; (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" &amp;&amp; 
            arguments[2].getWrappedType()===RJSType_<xsl:value-of select="@name" />.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              <xsl:choose>
                <xsl:when test="$proxy-mode='true'">
                  this.__PROXY__ = wrapper;
                </xsl:when>
                <xsl:otherwise>
                  copyProperties(this, wrapper, <xsl:value-of select="@name" />);
                </xsl:otherwise>
              </xsl:choose>
            //}
          }
          else {
            qWarning("<xsl:value-of select="@name" />.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          <xsl:choose>
            <xsl:when test="qsrc:constructor/qsrc:variant">
              <xsl:apply-templates select="qsrc:constructor/qsrc:variant" />
            </xsl:when>
            <xsl:otherwise>
              qWarning("<xsl:value-of select="@name" />.js: No constructor found for class <xsl:value-of select="@name" />");
            </xsl:otherwise>
          </xsl:choose>
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          <!--
          <xsl:apply-templates select="qsrc:function/qsrc:variant[@signal='true']" mode="signalconnections" />
          -->

          <xsl:if test="qsrc:function/qsrc:variant[@signal='true']">
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              <xsl:apply-templates select="qsrc:function/qsrc:variant[@signal='true']" mode="signalaliases" />
            }
          </xsl:if>
        }

        <xsl:if test="$proxy-mode='true'">
          <xsl:for-each select="qsrc:property">
            <xsl:if test="@read or @write">
              // define property setters/getters:
              Object.defineProperty(this, '<xsl:value-of select="@name"/>', {
                  get() {
                      <xsl:choose>
                        <xsl:when test="@name=@read">
                          return this.__PROXY__.<xsl:value-of select="@read"/>;
                        </xsl:when>
                        <xsl:otherwise>
                          return this.__PROXY__.<xsl:value-of select="@read"/>();
                        </xsl:otherwise>
                      </xsl:choose>
                  },
                  <xsl:if test="@write">
                    set(value) {
                        this.__PROXY__.<xsl:value-of select="@write"/>(value);
                    },
                  </xsl:if>
                  enumerable: true,
                  configurable: true
              });
            </xsl:if>
          </xsl:for-each>
        </xsl:if>

      }

      //<xsl:value-of select="@name" />.prototype = new <xsl:value-of select="@name" />_BaseJs(engine);
      //<xsl:value-of select="@name" />.prototype = new <xsl:value-of select="@name" />_Wrapper(engine);
      <xsl:value-of select="@name" />.prototype = new Object();

      <xsl:if test="not(qsrc:function[@name='toString'])">
        <xsl:value-of select="@name" />.prototype.toString = function() {
          //return "<xsl:value-of select="@name" /> [JS] [0x" + this.getAddress().toString(16) + "]";
          return "<xsl:value-of select="@name" /> [JS]";
        };
      </xsl:if>

      <xsl:variable name="classname">
        <xsl:value-of select="@name" />
      </xsl:variable>
      <xsl:for-each select="qsrc:function[@cppname]">
        // function with alias name in CPP wrapper:
        <xsl:value-of select="$classname" />.prototype.<xsl:value-of select="@name" /> = function() {
          return this.<xsl:value-of select="@cppname" />.apply(this, arguments);
        }
      </xsl:for-each>

      <xsl:value-of select="@name" />.getObjectType = function() {
        return RJSType_<xsl:value-of select="@name" />.getIdStatic();
      };

      <xsl:value-of select="@name" />.prototype.getObjectType = function() {
        return RJSType_<xsl:value-of select="@name" />.getIdStatic();
      };

      <xsl:value-of select="@name" />.prototype.isOfObjectType = function(t) {
        if (t===RJSType_<xsl:value-of select="@name" />.getIdStatic()) {
          return true;
        }

        <xsl:for-each select="qsrc:super_list/qsrc:super">
          if (t===RJSType_<xsl:value-of select="@name" />.getIdStatic()) {
            return true;
          }
        </xsl:for-each>

        return false;


        <!--
        switch(t) {

        <xsl:choose>
          <xsl:when test="not($pluginid='')">
            case <xsl:value-of select="$typeidbase" />:
              return true;
          </xsl:when>
          <xsl:otherwise>
            case RJSType_<xsl:value-of select="@name" />.getIdStatic():
              return true;
          </xsl:otherwise>
        </xsl:choose>

        <xsl:for-each select="qsrc:super_list/qsrc:super">
        case RJSType.<xsl:value-of select="@name" />.getIdStatic():
          return true;
        </xsl:for-each>
        default:
          return false;
        }

        /*
        return [
          RJSType.<xsl:value-of select="@name" />_Type, 
          <xsl:for-each select="qsrc:super_list/qsrc:super">
            RJSType.<xsl:value-of select="@name" />_Type
            <xsl:if test="position() &lt; last()">,</xsl:if>
          </xsl:for-each>
        ].includes(t);
        */
        -->
      };

      // enum values:
      <xsl:apply-templates select="qsrc:enum" />

      // functions:
      <xsl:apply-templates select="qsrc:function">
        <xsl:with-param name="static" select="false()"/>
      </xsl:apply-templates>

      // static functions:
      <xsl:apply-templates select="qsrc:function">
        <xsl:with-param name="static" select="true()"/>
      </xsl:apply-templates>

      <!--
      <xsl:value-of select="@name" />.getIdStatic = function() 
      {
        return <xsl:value-of select="@name" />_WrapperSingletonInstance.getIdStatic();
      };
      -->

      // constants:
      <xsl:apply-templates select="qsrc:constant" />

      // public static properties without access function:
      <xsl:apply-templates select="qsrc:property[@static='true' and not(@read)]" />

      // copy function:
      //<xsl:value-of select="@name" />.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //<xsl:value-of select="@name" />.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      <xsl:if test="@equalsfunction='true'">
        <xsl:value-of select="@name" />.prototype.equals = function(...args) {
          return this.__PROXY__.equals(...args);
        };
      </xsl:if>

      <xsl:if test="$proxy-mode='true'">
        <xsl:value-of select="@name" />.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      </xsl:if>
    </com:document>
  <!--
  </xsl:if>
  -->
</xsl:template>

<xsl:template match="qsrc:constant">
  <xsl:value-of select="ancestor::qsrc:class/@name" />.<xsl:value-of select="@name" /> = 
  <xsl:value-of select="concat(ancestor::qsrc:class/@name, '_WrapperSingletonInstance')" />.<xsl:value-of select="@name" />;
</xsl:template>

<xsl:template match="qsrc:property">
  <xsl:value-of select="ancestor::qsrc:class/@name" />.<xsl:value-of select="@name" /> = 
  <xsl:value-of select="concat(ancestor::qsrc:class/@name, '_WrapperSingletonInstance')" />.<xsl:value-of select="@name" />;
</xsl:template>

<xsl:template match="qsrc:constructor/qsrc:variant | qsrc:function/qsrc:variant">

  <xsl:variable name="object">
    <xsl:choose>
      <xsl:when test="../@static='true' or @static='true'">
        <xsl:value-of select="concat(ancestor::qsrc:class/@name, '_WrapperSingletonInstance')" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="'this.wrapper'" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:if test="position()!=1">
  else 
  </xsl:if>

  <xsl:variable name="minArgs">
    <xsl:value-of select="count(qsrc:parameters/qsrc:parameter[not(@default)])"/>
  </xsl:variable>
  <xsl:variable name="maxArgs">
    <xsl:value-of select="count(qsrc:parameters/qsrc:parameter)"/>
  </xsl:variable>

  <xsl:choose>
    <xsl:when test="$minArgs = $maxArgs">
      if (arguments.length == <xsl:value-of select="$minArgs" />) {
    </xsl:when>
    <xsl:otherwise>
      if (arguments.length &gt;= <xsl:value-of select="$minArgs" /> &amp;&amp;
          arguments.length &lt;= <xsl:value-of select="$maxArgs" />) {
    </xsl:otherwise>
  </xsl:choose>


      <!--
      <xsl:if test="qsrc:parameters/qsrc:parameter[@default]">
        // default parameter values:
      </xsl:if>
      <xsl:for-each select="qsrc:parameters/qsrc:parameter">
        <xsl:if test="@default">
          if (arguments.length &lt;= <xsl:value-of select="position()-1" />) {
            arguments[<xsl:value-of select="position()-1" />] = <xsl:value-of select="qc:default-value-to-js(@default)" />;
          }
        </xsl:if>
      </xsl:for-each>
      -->

    <xsl:choose>

      <xsl:when test="ancestor::qsrc:constructor">

        <xsl:choose>
          <xsl:when test="ancestor::qsrc:class/@shell='false'">
            // TODO: never reached?
            wrapper = new <xsl:value-of select="ancestor::qsrc:class/@name" />_Wrapper(
              <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="arguments" />
              <!--
              <xsl:for-each select="qsrc:parameters/qsrc:parameter">
                <xsl:text>arguments[</xsl:text>
                <xsl:value-of select="position()-1" />
                <xsl:text>]</xsl:text>
                <xsl:if test="position() &lt; last()">, </xsl:if>
              </xsl:for-each>
              -->
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            ////this.setWrapper(this.wrapper);
            //Object.setPrototypeOf(this, wrapper);
          </xsl:when>
          <xsl:otherwise>
            self = this;
            wrapper = new <xsl:value-of select="ancestor::qsrc:class/@name" />_Wrapper(
              // RJSApi:
              handler
              <xsl:if test="qsrc:parameters/qsrc:parameter">, </xsl:if>
              <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="arguments" />

              <!--
              <xsl:for-each select="qsrc:parameters/qsrc:parameter">
                <xsl:text>arguments[</xsl:text>
                <xsl:value-of select="position()-1" />
                <xsl:text>]</xsl:text>
                <xsl:if test="position() &lt; last()">, </xsl:if>
              </xsl:for-each>
              -->
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          </xsl:otherwise>
        </xsl:choose>

        <xsl:choose>
          <xsl:when test="$proxy-mode='true'">
            this.__PROXY__ = wrapper;
          </xsl:when>
          <xsl:otherwise>
            copyProperties(this, wrapper, <xsl:value-of select="ancestor::qsrc:class/@name" />);
          </xsl:otherwise>
        </xsl:choose>

        //this.setWrapper(this.wrapper);

      </xsl:when>

      <xsl:otherwise>
        <!--
        <xsl:choose>
          <xsl:when test="@return-type='RVector'">
            var jsObjWrapper = <xsl:value-of select="$$object" />.<xsl:value-of select="../@name" />(
              < ! - -
              <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
              - - >
              <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="arguments" />
            );
            var jsObj = new <xsl:value-of select="ancestor::qsrc:class/@name" />();
            jsObj.wrapper = jsObjWrapper;
            return jsObj;
          </xsl:when>
          <xsl:otherwise>
          -->
            <xsl:choose>
              <xsl:when test="../@static='true' or @static='true'">
                // calling static wrapper:
                return <xsl:value-of select="$object" />.<xsl:value-of select="../@name" />(
                  <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="arguments" />
                );
              </xsl:when>
              <xsl:otherwise>
                // calling wrapper:
                self = this;
                //return this.wrapper.<xsl:value-of select="../@name" />(
                // call highest level JS implementation:
                //return this.<xsl:value-of select="../@name" />Base(
                <xsl:choose>
                  <xsl:when test="$proxy-mode='true'">
                    return this.__PROXY__.<xsl:value-of select="../@name" />Super(
                  </xsl:when>
                  <xsl:otherwise>
                    return this.<xsl:value-of select="../@name" />Super(
                  </xsl:otherwise>
                </xsl:choose>

                  <!--
                  <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
                  -->
                  <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="arguments" />

                  <!--
                  <xsl:if test="count(qsrc:parameters/qsrc:parameter)>0">
                    <xsl:text>, </xsl:text>
                  </xsl:if>
                  <xsl:text>true</xsl:text>
                  -->
                );
              </xsl:otherwise>
            </xsl:choose>
            <!--
          </xsl:otherwise>
        </xsl:choose>
        -->
      </xsl:otherwise>

    </xsl:choose>

        //copyProperties(this, wrapper, <xsl:value-of select="ancestor::qsrc:class/@name" />);
  }

  <xsl:if test="position()=last()">
  else {
    <xsl:choose>
      <xsl:when test="ancestor::qsrc:function">
        print("<xsl:value-of select="ancestor::qsrc:class/@name" />.<xsl:value-of select="../@name" />(): wrong number / type of arguments");
      </xsl:when>
      <xsl:otherwise>
        print("<xsl:value-of select="ancestor::qsrc:class/@name" />(): wrong number / type of arguments");
      </xsl:otherwise>
    </xsl:choose>
    console.trace();
  }
  </xsl:if>
</xsl:template>


<xsl:template match="qsrc:parameters/qsrc:parameter" mode="arguments">
  <xsl:text>arguments[</xsl:text>
  <xsl:value-of select="position()-1" />
  <xsl:text>]</xsl:text>
  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>

<!--
<xsl:template match="qsrc:variant" mode="signalconnections">
  /*
  wrapper.<xsl:value-of select="../@name" />.connect(
    function(<xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="signalconnections"/>) { 
      localSelf.<xsl:value-of select="../@name" />Emitter(<xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="signalconnections"/>); 
    }
  );
  */
</xsl:template>

<xsl:template match="qsrc:parameter" mode="signalconnections">
  <xsl:value-of select="concat('a', position())" />
  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>
-->


<!--
  Add alias this["currentIndexChanged(int)"] for signal currentIndexChanged for compat.
-->
<xsl:template match="qsrc:variant" mode="signalaliases">
  <xsl:if test="count(qsrc:parameters/qsrc:parameter)&gt;0">
    this["<xsl:value-of select="../@name"/>(<xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="signalaliases"/>)"] = Object.getPrototypeOf(this).<xsl:value-of select="../@name"/>;
  </xsl:if>
</xsl:template>

<xsl:template match="qsrc:parameter" mode="signalaliases">
  <xsl:value-of select="@type" />
  <xsl:if test="@modifier='*'">
    <xsl:value-of select="@modifier" />
  </xsl:if>
  <xsl:if test="position() &lt; last()">,</xsl:if>
</xsl:template>


<xsl:template match="qsrc:function">
  <xsl:param name="static"/>

  <xsl:choose>

    <xsl:when test="$static='true'">
      <xsl:if test="not(@nojs='true') and (@static='true' or qsrc:variant[@static='true'])">

        // static function 
        <xsl:choose>
          <xsl:when test="@jsname">
            <xsl:value-of select="ancestor::qsrc:class/@name" />.<xsl:value-of select="@jsname" /> = function() 
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="ancestor::qsrc:class/@name" />.<xsl:value-of select="@name" /> = function() 
          </xsl:otherwise>
        </xsl:choose>
        {
          //print("JS: <xsl:value-of select="ancestor::qsrc:class/@name" />.<xsl:value-of select="@name" />");
          <xsl:apply-templates select="qsrc:variant[@static='true' or ../@static='true']"/>
        };
      </xsl:if>
    </xsl:when>

    <xsl:when test="not(qsrc:variant/@signal='true') and not(@nojs='true') and not(@static='true') and qsrc:variant[not(@static)] and qsrc:variant[@overridable='true']">
      // function 
      <xsl:choose>
        <xsl:when test="@jsname">
          <xsl:value-of select="ancestor::qsrc:class/@name" />.prototype.<xsl:value-of select="@jsname" /> = function() 
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="ancestor::qsrc:class/@name" />.prototype.<xsl:value-of select="@name" /> = function() 
        </xsl:otherwise>
      </xsl:choose>
      {
        //print("JS: <xsl:value-of select="ancestor::qsrc:class/@name" />.prototype.<xsl:value-of select="@name" />");
        <xsl:apply-templates select="qsrc:variant[not(@static='true' or ../@static='true') and @overridable='true']"/>
      };
    </xsl:when>

    <xsl:when test="$proxy-mode='true'">
        // function 
        <xsl:choose>
          <xsl:when test="@jsname">
            <xsl:value-of select="ancestor::qsrc:class/@name" />.prototype.<xsl:value-of select="@jsname" /> = function(...args) 
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="ancestor::qsrc:class/@name" />.prototype.<xsl:value-of select="@name" /> = function(...args) 
          </xsl:otherwise>
        </xsl:choose>
        {
          //print("JS: <xsl:value-of select="ancestor::qsrc:class/@name" />.prototype.<xsl:value-of select="@name" />");
          return this.__PROXY__.<xsl:value-of select="@name" />(...args);
        };
    </xsl:when>

  </xsl:choose>

</xsl:template>

<!--
<xsl:template match="qsrc:variant">
  <xsl:variable name="object">
    <xsl:choose>
      <xsl:when test="../@static='true'">
        <xsl:value-of select="concat(ancestor::qsrc:class/@name, '_WrapperSingletonInstance')" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="'this.wrapper'" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="prototype">
    <xsl:choose>
      <xsl:when test="../@static='true'">
        <xsl:value-of select="''" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="'.prototype'" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  // function
  <xsl:value-of select="ancestor::qsrc:class/@name" /><xsl:value-of select="$prototype" />.<xsl:value-of select="../@name" /> = function(
    <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
  ) 
  {
    <xsl:choose>
      <xsl:when test="@return-type='RVector'">
        var jsObjWrapper = <xsl:value-of select="$object" />.<xsl:value-of select="../@name" />(
          <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
        );
        var jsObj = new <xsl:value-of select="ancestor::qsrc:class/@name" />();
        jsObj.wrapper = jsObjWrapper;
        return jsObj;
      </xsl:when>
      <xsl:otherwise>
        return this.wrapper.<xsl:value-of select="../@name" />(
          <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
        );
      </xsl:otherwise>
    </xsl:choose>
  };
</xsl:template>
-->

<xsl:template match="qsrc:parameter">
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

<xsl:template match="qsrc:enum">
  // enum: <xsl:value-of select="@name" />
  <xsl:text>&#10;</xsl:text>
  <xsl:apply-templates />
</xsl:template>

<xsl:template match="qsrc:enum/qsrc:key">
  <xsl:variable name="name">
    <xsl:choose>
      <xsl:when test="ancestor::qsrc:namespace">
        <xsl:value-of select="ancestor::qsrc:namespace/@name" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="ancestor::qsrc:class/@name" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:value-of select="$name"/>.<xsl:value-of select="text()"/> = <xsl:value-of select="$name"/>_Wrapper.<xsl:value-of select="text()"/>;
</xsl:template>

<func:function name="qc:default-value-to-js">
    <xsl:param name="str" />

    <xsl:variable name="str2">
      <xsl:value-of select="qc:replace($str, '::', '.')" />
    </xsl:variable>

    <func:result>
      <xsl:choose>
        <xsl:when test="document('default_value_to_js.xml')/dictionary/item[@cpp=$str2]">
          <xsl:value-of select="document('default_value_to_js.xml')/dictionary/item[@cpp=$str2]/@js" />
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$str2" />
        </xsl:otherwise>
      </xsl:choose>
    </func:result>
</func:function>

</xsl:stylesheet>
