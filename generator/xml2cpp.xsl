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
</xsl:param>
-->


<!--
<xsl:param name="class-name">
  <xsl:value-of select="qsrc:unit/qsrc:class/@name" />
</xsl:param>
-->


<xsl:template match="text()" />


<xsl:template match="/">
  // Auto generated
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
    #ifndef <xsl:value-of select="qc:include-guard(qsrc:unit/@filename)" />
    #define <xsl:value-of select="qc:include-guard(qsrc:unit/@filename)" />

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

    #include "RJSWrapperObj.h"
  </xsl:if>

  <xsl:if test="$mode='cpp'">
  // include header:
  //#include "<xsl:value-of select="qc:replace(qsrc:unit/@filename, '.h', 'wrapper.h')" />"
  //#include "header_cpp.h"
  </xsl:if>


  <xsl:apply-templates />


  <xsl:if test="$mode='h'">
  #endif
  </xsl:if>
  <xsl:text>&#xa;</xsl:text>
</xsl:template>


<xsl:template match="qsrc:unit">
  <xsl:apply-templates select="qsrc:class_decl" />
  <xsl:apply-templates select="qsrc:class" />
  <xsl:apply-templates select="qsrc:namespace" />
</xsl:template>


<xsl:template match="qsrc:class_decl">
  <xsl:if test="$mode='h'">
    <xsl:choose>
      <xsl:when test="starts-with(@name, 'Q')">
        #include &lt;<xsl:value-of select="@name" />&gt;
      </xsl:when>
      <xsl:otherwise>
        #include "<xsl:value-of select="@name" />.h"
      </xsl:otherwise>
    </xsl:choose>
  </xsl:if>
</xsl:template>


<xsl:template match="qsrc:class|qsrc:namespace">
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
      <xsl:when test="$module=''">
        #include "RJSType.h"
      </xsl:when>
      <xsl:otherwise>
        #include "RJSType_<xsl:value-of select="$module"/>.h"
      </xsl:otherwise>
    </xsl:choose>

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
    <xsl:value-of select="@name" />
  </xsl:variable>

  <xsl:if test="$mode='h'">
    <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@name=$class-name]/qsrc:downcasts/qsrc:class">
      #include "<xsl:value-of select="@name" />.h"
    </xsl:for-each>
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    #include "<xsl:value-of select="qc:lowercase(qc:replace(/qsrc:unit/@filename, '.h', '_wrapper.h'))" />"

  </xsl:if>

  <xsl:if test="$mode='h'">
    <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name] or @inheritable='true'">
      // wrapped object is <xsl:value-of select="@name"/>_Base class if new object is created: 
      #include "<xsl:value-of select="qc:lowercase(qc:replace(/qsrc:unit/@filename, '.h', '_base.h'))" />"
    </xsl:if>
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    <xsl:if test="not(ancestor-or-self::qsrc:namespace)">
      // list of registered base casters for this wrapper class:
      QList&lt;RJSBasecaster_<xsl:value-of select="@name" />*&gt; <xsl:value-of select="@name" />_Wrapper::basecasters_<xsl:value-of select="@name" />;
    </xsl:if>
  </xsl:if>

  <xsl:if test="$mode='h'">
    <xsl:if test="not(ancestor-or-self::qsrc:namespace) and (qsrc:function[@static='true'] or qsrc:function/qsrc:variant[@static='true'])">
      // singleton class wrapper for static functions:
      class <xsl:value-of select="@name" />_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      <xsl:apply-templates select="qsrc:constant" />

      // static properties:
      <xsl:apply-templates select="qsrc:property[@static='true' and not(@read)]" mode="declaration" />

      public:
      //Q_INVOKABLE 
      <xsl:value-of select="@name" />_WrapperSingleton(RJSApi&amp; h) 
        : QObject(), 
          handler(h)
          <xsl:apply-templates select="qsrc:constant" mode="init" />
          {}

      <!--
      // create / return single instance:
      static <xsl:value-of select="@name" />_WrapperSingleton* getInstance(RJSApi&amp; h) {
        if (_singleInstance==nullptr) {
          _singleInstance = new <xsl:value-of select="@name" />_WrapperSingleton(h);
        }

        return _singleInstance;
      }
      -->

      <xsl:apply-templates select="qsrc:property[@static='true' and not(@read)]" mode="read-static-property"/>

      // static functions:
      <!--
      <xsl:apply-templates select="qsrc:function[@static='true'] | qsrc:preproc" />
      -->
      <xsl:apply-templates select="qsrc:function | qsrc:preproc">
        <xsl:with-param name="static" select="true()" />
      </xsl:apply-templates>

      private:
          RJSApi&amp; handler;
          //static <xsl:value-of select="@name" />_WrapperSingleton* _singleInstance;

          // constants:
          <xsl:apply-templates select="qsrc:constant" mode="declare" />
      };
    </xsl:if>
  </xsl:if>

  <xsl:if test="not(ancestor-or-self::qsrc:namespace)">
    // static functions implementation in singleton wrapper:
    <xsl:if test="$mode='cpp'">
      <!--
      <xsl:apply-templates select="qsrc:function[@static='true'] | qsrc:preproc" />
      -->
      <xsl:apply-templates select="qsrc:function | qsrc:preproc">
        <xsl:with-param name="static" select="true()" />
      </xsl:apply-templates>
    </xsl:if>
  </xsl:if>



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
    // wrapper class for <xsl:value-of select="@name" />
    class <xsl:value-of select="@name" />_Wrapper : public RJSWrapperObj {

    <!--
    <xsl:if test="$base='RJSWrapper'">
    -->
      Q_OBJECT
      QML_INTERFACE
    <!--
    </xsl:if>
    -->

    <!--
    <xsl:if test="qsrc:constructor"
    -->
      <xsl:apply-templates select="qsrc:property[@read]" mode="declaration" />
    <!--
    </xsl:if>
    -->

    private:
      // disable copy constructor:
      <xsl:value-of select="@name" />_Wrapper(const <xsl:value-of select="@name" />_Wrapper&amp;);

    public:
      // initialization of <xsl:value-of select="@name" />:
      static void init(RJSApi&amp; handler);

      <xsl:variable name="classname">
        <xsl:value-of select="@name" />
      </xsl:variable>

      <xsl:if test="not(ancestor-or-self::qsrc:namespace)">
        static <xsl:value-of select="@name" />* castToBase(void* vp, /*RJSType ID*/ int t) {
          <!--
          switch (t) {
          -->
          <!-- cast to base class (only for Qt module), in other modules this is handled through hooks below -->
          <xsl:if test="$module=''">
            // check if pointer points to derrived type:
            <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class/qsrc:super_list/qsrc:super[@name=$classname]">
              if (t==RJSType_<xsl:value-of select="../../@name" />::getIdStatic()) {
                return (<xsl:value-of select="$classname" />*)(<xsl:value-of select="../../@name" />*)vp;
              }
              <!--
              case RJSType::<xsl:value-of select="../../@name" />_Type:
                return (<xsl:value-of select="$classname" />*)(<xsl:value-of select="../../@name" />*)vp;
              -->
            </xsl:for-each>
          </xsl:if>

          <xsl:for-each select="document('tmp/xmlall.xml')/qsrc:unit/qsrc:class[@name=$classname]/qsrc:downcasts/qsrc:class">
            if (t==RJSType_<xsl:value-of select="@type" />::getIdStatic()) {
              return (<xsl:value-of select="$classname" />*)(<xsl:value-of select="@name" />*)vp;
            }
            <!--
            case <xsl:value-of select="@type" />:
              return (<xsl:value-of select="$classname" />*)(<xsl:value-of select="@name" />*)vp;
            -->
          </xsl:for-each>

          // hook for modules to cast from other types to base <xsl:value-of select="@name" />:
          for (int i=0; i&lt;basecasters_<xsl:value-of select="@name" />.length(); i++) {
            RJSBasecaster_<xsl:value-of select="@name" />* basecaster = basecasters_<xsl:value-of select="@name" />[i];
            <xsl:value-of select="@name" />* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class <xsl:value-of select="@name" />:
          if (t==RJSType_<xsl:value-of select="@name" />::getIdStatic()) {
            return (<xsl:value-of select="@name" />*)vp;
          }

          qWarning() &lt;&lt; "<xsl:value-of select="@name" />_Wrapper::castToBase: type not found: " &lt;&lt; RJSHelper::getTypeName(t);

          return nullptr;
          <!--
          default:
            return nullptr;
          }
          -->
        }

        static <xsl:value-of select="@name" />* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() &lt;&lt; "getWrapped_<xsl:value-of select="@name" />*: wrapper wraps NULL";
          }

          <xsl:value-of select="@name" />* ret = castToBase(vp, t);
          if (ret==nullptr &amp;&amp; vp!=nullptr) {
              qWarning() &lt;&lt; "<xsl:value-of select="@name" />*_Wrapper::getWrappedBase: extracted type " &lt;&lt; t &lt;&lt; "from wrapper is NULL";
          }
          return ret;
        }
      </xsl:if>

      <xsl:if test="qsrc:enum">
        // enums:
        <xsl:apply-templates select="qsrc:enum" />
      </xsl:if>
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    void <xsl:value-of select="@name" />_Wrapper::init(RJSApi&amp; handler) {
      <!--
      <xsl:if test="$base='RJSWrapper'">
      -->
        //qmlRegisterType&lt;<xsl:value-of select="@name" />_Wrapper&gt;("org.qcad", 1, 0, "<xsl:value-of select="@name" />_Wrapper");
        qmlRegisterInterface&lt;<xsl:value-of select="@name" />_Wrapper&gt;("<xsl:value-of select="@name" />_Wrapper", 1);
      <!--
      </xsl:if>
      -->

      QJSEngine* engine = handler.getEngine();

      <xsl:choose>
        <xsl:when test="not(ancestor-or-self::qsrc:namespace)">
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_<xsl:value-of select="@name" />* t = new RJSType_<xsl:value-of select="@name" />();
          global.setProperty("RJSType_<xsl:value-of select="@name" />", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_<xsl:value-of select="@name" />::getIdStatic();

          <!--
          QJSValue mot = engine->newQMetaObject(&amp;RJSType_<xsl:value-of select="@name" />::staticMetaObject);
          engine->globalObject().setProperty("RJSType_<xsl:value-of select="@name" />", mot);
          -->
        </xsl:when>
        <xsl:otherwise>
          // type is namespace, no scriptable type (RJSType_<xsl:value-of select="@name" />)
        </xsl:otherwise>
      </xsl:choose>

      // wrapper:
      QJSValue mo = engine-&gt;newQMetaObject(&amp;<xsl:value-of select="@name" />_Wrapper::staticMetaObject);
      engine-&gt;globalObject().setProperty("<xsl:value-of select="@name" />_Wrapper", mo);


      <!--
      <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name]">
      -->
        // JS base class:
        //QJSValue mob = engine-&gt;newQMetaObject(&amp;<xsl:value-of select="@name" />_BaseJs::staticMetaObject);
        //engine-&gt;globalObject().setProperty("<xsl:value-of select="@name" />_BaseJs", mob);
      <!--
      </xsl:if>
      -->

      <xsl:if test="not(ancestor-or-self::qsrc:namespace) and (qsrc:function[@static='true'] or qsrc:function/qsrc:variant[@static='true'])">
        // singleton wrapper:
        QJSValue mos = engine-&gt;newQMetaObject(&amp;<xsl:value-of select="@name" />_WrapperSingleton::staticMetaObject);
        engine-&gt;globalObject().setProperty("<xsl:value-of select="@name" />_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        <!--
        <xsl:value-of select="@name" />_WrapperSingleton * s = <xsl:value-of select="@name" />_WrapperSingleton::getInstance(handler);
        -->
        <xsl:value-of select="@name" />_WrapperSingleton * s = new <xsl:value-of select="@name" />_WrapperSingleton(handler);
        engine-&gt;globalObject().setProperty("<xsl:value-of select="@name" />_WrapperSingletonInstance", engine-&gt;newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      </xsl:if>

      <!--
      QString fileName = "<xsl:value-of select="qc:lowercase(ancestor::qsrc:unit/@filename)" />.js";
      -->
      QString fileName = ":generator/js/<xsl:value-of select="@name" />.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() &lt;&lt; "JS script wrapper file not found:" &lt;&lt; fileName;
        return;
      }
      QTextStream stream(&amp;scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() &lt;&lt; "Evaluating file: " &lt;&lt; fileName;
      QJSValue result = engine-&gt;evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              &lt;&lt; "Uncaught exception at line"
              &lt;&lt; result.property("lineNumber").toInt()
              &lt;&lt; ":" &lt;&lt; result.toString();
      }
    }
  </xsl:if>

  <xsl:if test="not(ancestor-or-self::qsrc:namespace)">
    /*
    // special constructor used as prototype:
    <xsl:choose>
      <xsl:when test="$mode='h'">
        <!--
        <xsl:if test="$qobject='false'">
        -->
          Q_INVOKABLE 
          <xsl:value-of select="@name" />_Wrapper(QJSEngine* e);
        <!--
        </xsl:if>
        -->
      </xsl:when>
      <xsl:otherwise>
        <!--
        <xsl:if test="$qobject='false'">
        -->
          <xsl:value-of select="@name" />_Wrapper::<xsl:value-of select="@name" />_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("<xsl:value-of select="@name" />_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        <!--
        </xsl:if>
        -->
      </xsl:otherwise>
    </xsl:choose>
    */

    <!--
    <xsl:if test="qsrc:constructor">
    -->
      // special constructor to wrap existing object:
      <xsl:choose>
        <xsl:when test="$mode='h'">
          <!--
          <xsl:if test="$qobject='false'">
          -->
            //Q_INVOKABLE 
            <xsl:value-of select="@name" />_Wrapper(RJSApi&amp; h, <xsl:value-of select="@name" />* o, bool wrappedCreated);
          <!--
          </xsl:if>
          -->
        </xsl:when>
        <xsl:otherwise>
          <!--
          <xsl:if test="$qobject='false'">
          -->
            <xsl:value-of select="@name" />_Wrapper::<xsl:value-of select="@name" />_Wrapper(RJSApi&amp; h, <xsl:value-of select="@name" />* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("<xsl:value-of select="@name" />_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("<xsl:value-of select="@name" />_Wrapper"));
              //setObjectName("<xsl:value-of select="@name" />_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          <!--
          </xsl:if>
          -->
        </xsl:otherwise>
      </xsl:choose>

      <xsl:if test="@sharedpointer">
        // special constructor to wrap existing object from shared pointer:
        <xsl:choose>
          <xsl:when test="$mode='h'">
            //Q_INVOKABLE 
            <xsl:value-of select="@name" />_Wrapper(RJSApi&amp; h, QSharedPointer&lt;<xsl:value-of select="@name" />&gt; o);
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="@name" />_Wrapper::<xsl:value-of select="@name" />_Wrapper(RJSApi&amp; h, QSharedPointer&lt;<xsl:value-of select="@name" />&gt; o) : RJSWrapperObj(h), wrapped(nullptr), spWrapped(o), wrappedCreated(false) {
              //RDebug::incCounter(QString("<xsl:value-of select="@name" />_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("<xsl:value-of select="@name" />_Wrapper"));
              //setObjectName("<xsl:value-of select="@name" />_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          </xsl:otherwise>
        </xsl:choose>
      </xsl:if>

      // destructor:
      <xsl:choose>
        <xsl:when test="$mode='h'">
          virtual ~<xsl:value-of select="@name" />_Wrapper();
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="@name" />_Wrapper::~<xsl:value-of select="@name" />_Wrapper() {
            //RDebug::decCounter(QString("<xsl:value-of select="@name" />_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("<xsl:value-of select="@name" />_Wrapper"));

            //qDebug() &lt;&lt; "<xsl:value-of select="@name" />_Wrapper::~<xsl:value-of select="@name" />_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            <!--
            <xsl:if test="$qobject='false'">
            -->
            if (wrappedCreated) {
              <xsl:choose>
                <xsl:when test="qc:is-non-copyable(@name)='true' or @nodestructor='true'">
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() &lt;&lt; "NOT deleting instance of <xsl:value-of select="@name" />";
                </xsl:when>
                <xsl:otherwise>
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() &lt;&lt; "deleting instance of <xsl:value-of select="@name" />";
                  delete wrapped;
                </xsl:otherwise>
              </xsl:choose>
            }
            <!--
            </xsl:if>
            -->
          }
        </xsl:otherwise>
      </xsl:choose>
    </xsl:if>
  <!--
  </xsl:if>
  -->


  <!--
  <xsl:if test="not(ancestor-or-self::qsrc:namespace) and qsrc:constructor">
  -->
  <xsl:if test="not(ancestor-or-self::qsrc:namespace)">
    // initialization of signal forwarding
    <xsl:choose>
      <xsl:when test="$mode='h'">
        void initConnections();
      </xsl:when>
      <xsl:otherwise>
        void <xsl:value-of select="@name" />_Wrapper::initConnections() {

          //setObjectName("<xsl:value-of select="@name" />_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          <xsl:choose>
            <xsl:when test="ancestor-or-self::qsrc:class/qsrc:super_list/qsrc:super[@name='QObject']">
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            </xsl:when>
            <xsl:otherwise>
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            </xsl:otherwise>
          </xsl:choose>

          if (hasWrapped()) {
            <xsl:choose>
              <xsl:when test="ancestor-or-self::qsrc:class/qsrc:super_list/qsrc:super[@name='QObject']">
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              </xsl:when>
            </xsl:choose>
            // set up signal forwarding:
            <xsl:apply-templates select="qsrc:function/qsrc:variant[@signal='true' and @access='public']" mode="signalconnections" />

            <xsl:if test="ancestor-or-self::qsrc:class/qsrc:super_list/qsrc:super[@name='QObject']">
              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &amp;handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            </xsl:if>
          }
        }
      </xsl:otherwise>
    </xsl:choose>
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
  <!--
  <xsl:if test="qsrc:constructor">
  -->
    <xsl:apply-templates select="qsrc:constructor | qsrc:preproc" />

    // non-static functions:
    <!--
    <xsl:apply-templates select="qsrc:function[not(@static='true')] | qsrc:preproc" />
    -->
    <xsl:apply-templates select="qsrc:function | qsrc:preproc">
      <xsl:with-param name="static" select="false()" />
    </xsl:apply-templates>

    <!--
    <xsl:apply-templates select="qsrc:property" mode="setter_getter" />
    -->

    <xsl:if test="$mode='h'">
      <xsl:if test="not(ancestor-or-self::qsrc:namespace)">

        <xsl:apply-templates select="qsrc:property[@static='true' and @read]" mode="forward-static"/>

        <!--
        <xsl:if test="@shell='false'">
        -->
        <xsl:if test="qc:is-non-copyable(@name)='false' and ancestor-or-self::qsrc:class[@sharedpointer='true']">
          /*
          // get wrapped object as clone:
          // used to create a QSharedPointer on the fly when needed for conversion:
          public:
           <xsl:value-of select="@name" />* getWrappedClone() {
            <xsl:value-of select="@name" />* w = getWrapped();
            if (w==nullptr) {
              qWarning() &lt;&lt; "<xsl:value-of select="$class-name" />::getWrappedClone: wrapped is NULL";
              handler.trace();
              return nullptr;
            }
            // return cloned object:
            return new <xsl:value-of select="@name" />(*w);
          }
          */
        </xsl:if>
        <!--
        </xsl:if>
        -->

        <xsl:if test="qc:is-non-copyable(@name)='true' and not(@nodestructor='true')">
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              <!--
              <xsl:choose>
                <xsl:when test="not(@nodestructor)">
                -->
                  delete wrapped;
                <!--
                </xsl:when>
                <xsl:otherwise>
                  qWarning() &lt;&lt; "trying to delete object without destructor";
                </xsl:otherwise>
              </xsl:choose>
              -->
              wrapped = nullptr;
            }
            <xsl:if test="ancestor-or-self::qsrc:class/@sharedpointer">
              if (!spWrapped.isNull()) {
                spWrapped = nullptr;
              }
            </xsl:if>
          }
        </xsl:if>

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      </xsl:if>
    </xsl:if>
  <!--
  </xsl:if>
  -->

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  <!--
  <xsl:if test="not(ancestor-or-self::qsrc:namespace) and qsrc:constructor">
  -->
  <xsl:if test="not(ancestor-or-self::qsrc:namespace)">
    <xsl:if test="$mode='h'">
      <!--
      <xsl:if test="$qobject='false'">
      -->
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_<xsl:value-of select="@name" />::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          <xsl:choose>
            <xsl:when test="qc:is-non-copyable(@name)='true'">
              return true;
            </xsl:when>
            <xsl:otherwise>
              return false;
            </xsl:otherwise>
          </xsl:choose>
        }

        // get wrapped object:
        <xsl:value-of select="@name" />* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          <xsl:if test="ancestor-or-self::qsrc:class/@sharedpointer">
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          </xsl:if>
          return nullptr;
        }

        // get wrapped object (const):
        <xsl:value-of select="@name" />* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          <xsl:if test="ancestor-or-self::qsrc:class/@sharedpointer">
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          </xsl:if>
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          <xsl:if test="ancestor-or-self::qsrc:class/@sharedpointer">
            else if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          </xsl:if>
          return nullptr;
        }

        <xsl:if test="ancestor-or-self::qsrc:class/@sharedpointer">
        // get wrapped object as QSharedPointer:
        virtual QSharedPointer&lt;<xsl:value-of select="@name" />&gt; getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          if (wrapped!=nullptr) {
            qWarning() &lt;&lt; "wrapper does not wrap a QSharedPointer&lt;<xsl:value-of select="@name" />&gt; but a regular pointer";
            return QSharedPointer&lt;<xsl:value-of select="@name" />&gt;();
          }
          return QSharedPointer&lt;<xsl:value-of select="@name" />&gt;();
        }

        bool hasWrappedSp() const {
          return !spWrapped.isNull() &amp;&amp; spWrapped.data()!=nullptr;
        }
        </xsl:if>

        <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name] or @inheritable='true'">
          // get wrapped base object or nullptr:
          <xsl:value-of select="$class-name" />_Base* getWrappedBase() {
            <xsl:value-of select="$class-name" />* w = getWrapped();
            return dynamic_cast&lt;<xsl:value-of select="$class-name" />_Base*&gt;(w);
          }

          <xsl:value-of select="$class-name" />_Base* getWrappedBase() const {
            <xsl:value-of select="$class-name" />* w = getWrapped();
            return dynamic_cast&lt;<xsl:value-of select="$class-name" />_Base*&gt;(w);
          }
        </xsl:if>

        bool hasWrapped() const {
          return wrapped!=nullptr 
          <xsl:if test="ancestor-or-self::qsrc:class/@sharedpointer">
            || (!spWrapped.isNull() &amp;&amp; spWrapped.data()!=nullptr)
          </xsl:if>
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          <xsl:if test="ancestor-or-self::qsrc:class/@sharedpointer">
            if (!spWrapped.isNull() &amp;&amp; spWrapped.data()!=nullptr) {
              return (unsigned long long int)spWrapped.data();
            }
          </xsl:if>
          return (unsigned long long int)0;
        }

        <xsl:if test="ancestor-or-self::qsrc:class/@equalsfunction">
          Q_INVOKABLE
          bool equals(const QJSValue&amp; other) const {
            <xsl:value-of select="@name" /> otherObj = RJSHelper<xsl:value-of select="qc:get-helper-postfix(@name)"/>::js2cpp_<xsl:value-of select="@name" />(handler, other);
            <xsl:value-of select="@name" />* thisObj = getWrapped();

            if (thisObj==nullptr) {
              return false;
            }

            return *thisObj==otherObj;
          }
        </xsl:if>

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() &lt;&lt; "destroying QObject:" &lt;&lt; (long int)obj;
          //}

        <!--
        <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name]">
        -->
        <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name] or @inheritable='true'">
          //void setRecFlag(bool on) const {
          //  <xsl:value-of select="$class-name" />_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        </xsl:if>

        private:
        // wrapped object:
        <xsl:value-of select="@name" />* wrapped;

        <xsl:if test="ancestor-or-self::qsrc:class/@sharedpointer">
          // wrapped object as shared pointer:
          QSharedPointer&lt;<xsl:value-of select="@name" />&gt; spWrapped;
        </xsl:if>

        bool wrappedCreated;
      <!--
      </xsl:if>
      -->
    </xsl:if>
  </xsl:if>

    <!--
    <xsl:apply-templates select="qsrc:constructor" />
    <xsl:apply-templates select="qsrc:function" />
    -->


  <!--
  <xsl:if test="not(ancestor-or-self::qsrc:namespace) and (qsrc:function[@static='true'] or qsrc:function/qsrc:variant[@static='true'])">
    <xsl:if test="$mode='cpp'">
      <xsl:value-of select="@name" />_WrapperSingleton* <xsl:value-of select="@name" />_WrapperSingleton::_singleInstance = nullptr;
    </xsl:if>
  </xsl:if>
  -->

  <xsl:if test="$mode='h'">
    <xsl:if test="not(ancestor-or-self::qsrc:namespace)">
      private:
        // list of registered base casters for this wrapper class:
        static QList&lt;RJSBasecaster_<xsl:value-of select="@name" />*&gt; basecasters_<xsl:value-of select="@name" />;

      public:
        static void registerBasecaster_<xsl:value-of select="@name" />(RJSBasecaster_<xsl:value-of select="@name" />* bc) {
          basecasters_<xsl:value-of select="@name" />.append(bc);
        }
      </xsl:if>
    };

    Q_DECLARE_METATYPE(<xsl:value-of select="@name" />_Wrapper*)

    Q_DECLARE_INTERFACE(<xsl:value-of select="@name" />_Wrapper, "org.qcad.<xsl:value-of select="@name" />_Wrapper")

  </xsl:if>

</xsl:template>


<xsl:template match="qsrc:preproc">
  <xsl:text>&#xa;</xsl:text>
  <xsl:value-of select="@plain" />
  <xsl:text>&#xa;</xsl:text>
</xsl:template>


<xsl:template match="qsrc:constant" mode="declare">
  <xsl:value-of select="@type" /><xsl:text> </xsl:text><xsl:value-of select="@name" />;
</xsl:template>

<xsl:template match="qsrc:constant" mode="init">
  <xsl:if test="position() = 1">,</xsl:if>
  <xsl:value-of select="@name" />(<xsl:value-of select="@value" />)
  <xsl:if test="position() &lt; last()">,</xsl:if>
</xsl:template>

<xsl:template match="qsrc:constant">
  Q_PROPERTY(
    <xsl:value-of select="@type" />
    <xsl:text>&#xa;</xsl:text>
    <xsl:value-of select="@name" />
    MEMBER
    <xsl:value-of select="@name" />
  )
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

  <xsl:apply-templates select="qsrc:variant[1] | qsrc:preproc">
    <!--
    <xsl:sort select="count(qsrc:parameters/qsrc:parameter)" order="descending" />
    -->
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


<!--
 Signal connections for signal forwarding from JS to C++ wrapper.
-->
<!--
<xsl:template match="qsrc:function" mode="signalconnections">
  <xsl:apply-templates select="qsrc:variant" mode="signalconnections" />
</xsl:template>
-->

<xsl:template match="qsrc:variant" mode="signalconnections">
  connect(
    getWrapped(), 
    SIGNAL(<xsl:value-of select="../@name" />(<xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="signalconnections"/>)), 
    this, 
    SLOT(<xsl:value-of select="../@name" />Emitter(<xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="signalconnections"/>))
  );
</xsl:template>

<xsl:template match="qsrc:parameter" mode="signalconnections">
  <xsl:if test="@const='true'">const </xsl:if>
  <xsl:value-of select="@type" /><xsl:value-of select="@modifier" />
  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>



<!--
<xsl:template match="qsrc:function" mode="public">
  // function <xsl:value-of select="@name" />
  < ! - -
    apply variant template in order of parameter count (most parameters first).
    we only apply the template with the most paramters
  - - >
  <xsl:apply-templates select="qsrc:variant[@access='public'][1]">
    < ! - -
    <xsl:sort select="count(qsrc:parameters/qsrc:parameter)" order="descending" />
    - - >
  </xsl:apply-templates>
</xsl:template>
-->

<xsl:template match="qsrc:function">
  <xsl:param name="static" />

  <!--
  <xsl:message><xsl:value-of select="@name"/></xsl:message>
  -->

  <!--
    only apply for first variant (with most parameters)
    the variant template will also implement the other variants
  -->
  <xsl:choose>
    <xsl:when test="$static">
      <xsl:if test="$mode='h' or not(@declare-only)">
        <xsl:apply-templates select="qsrc:variant[@static='true' or ../@static='true'][1] | qsrc:preproc">
          <xsl:with-param name="static" select="true()" />
        </xsl:apply-templates>
      </xsl:if>
    </xsl:when>
    <xsl:otherwise>
      <xsl:if test="$mode='h' or not(@declare-only)">
        <xsl:apply-templates select="qsrc:variant[not(@static='true' or ../@static='true')][1] | qsrc:preproc">
          <xsl:with-param name="static" select="false()" />
        </xsl:apply-templates>
      </xsl:if>
    </xsl:otherwise>
  </xsl:choose>

</xsl:template>

<!--
<xsl:template match="qsrc:variant">
-->
<xsl:template match="qsrc:variant">
  <xsl:param name="static" />

  <!--
    don't expose protected and overridable functions for abstract classes (no construtor):
  -->
  <xsl:if test="ancestor::qsrc:class/qsrc:constructor or not(@access='protected' or (@virtual='true' and @overridable='true'))">

    <xsl:variable name="class-name">
      <xsl:value-of select="ancestor::qsrc:class[1]/@name" />
    </xsl:variable>

    <xsl:variable name="wrapper-class-name">
      <xsl:choose>
        <xsl:when test="ancestor::qsrc:function/@static='true' or @static='true'">
          <xsl:value-of select="concat($class-name, '_WrapperSingleton')" />
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="concat($class-name, '_Wrapper')" />
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>

    <xsl:variable name="num-param">
      <xsl:value-of select="@count" />
      <!--
      <xsl:value-of select="count(qsrc:parameters/qsrc:parameter)" />
      -->
    </xsl:variable>

    <xsl:variable name="num-prev-param">
      <xsl:choose>
      <xsl:when test="preceding-sibling::*">
        <xsl:value-of select="preceding-sibling::*[1]/@count" />
        <!--
        <xsl:value-of select="count(preceding-sibling::*[1]/qsrc:parameters/qsrc:parameter)" />
        -->
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
    // Source: <xsl:value-of select="../@source" />
    // Static: <xsl:value-of select="@static or ../@static" />
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
      <xsl:choose>

        <!-- signal -->
        <xsl:when test="@signal='true'">
          <xsl:choose>
            <xsl:when test="$mode='h'">
              <!-- h -->
              // signal forwarded from wrapped class:
              signals:
              void <xsl:value-of select="ancestor::qsrc:function/@name" />(
                <!--
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
                -->
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="qjsvalue_signal" />
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void <xsl:value-of select="ancestor::qsrc:function/@name" />Emitter(
                <!--
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="qjsvalue" />
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="towrapper" />
                -->
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
              );
            </xsl:when>
            <xsl:otherwise>
              <!-- cpp -->
              // signal emitter: called when signal is emitted from wrapped object:
              void 
              <xsl:value-of select="$wrapper-class-name" />
              <xsl:text>::</xsl:text>
              <xsl:value-of select="ancestor::qsrc:function/@name" />Emitter(
                <!--
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="qjsvalue" />
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="towrapper" />
                -->
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
              ) {
                // convert cpp parameters to js:
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="tojs" />

                emit <xsl:value-of select="ancestor::qsrc:function/@name" />(
                  <!--
                  <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="names" />
                  -->
                  <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="qjsvaluenames_js" />
                );
              }
            </xsl:otherwise>
          </xsl:choose>
        </xsl:when>
        <!-- end signal -->


        <!-- invokable function -->
        <xsl:otherwise>
          <xsl:choose>

            <!-- h -->
            <xsl:when test="$mode='h'">
              public:
              Q_INVOKABLE 
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
                  QJSValue 
                  <xsl:choose>
                    <xsl:when test="@access='protected'">
                      <!-- expose protected functions with Super to allow calling from JS: --> 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      <xsl:value-of select="ancestor::qsrc:function/@name" />Super
                    </xsl:when>
                    <xsl:when test="@virtual='true' and @overridable='true'">
                      <!-- expose virtual functions with Super to allow calling from JS: --> 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      <xsl:value-of select="ancestor::qsrc:function/@name" />Super
                    </xsl:when>
                    <xsl:otherwise>
                      <!--
                      <xsl:value-of select="ancestor::qsrc:function/@name" />
                      -->
                      <xsl:choose>
                        <xsl:when test="ancestor::qsrc:function/@cppname">
                          // special function name for JS wrapper:
                          <xsl:value-of select="ancestor::qsrc:function/@cppname" />
                        </xsl:when>
                        <xsl:otherwise>
                          <xsl:value-of select="ancestor::qsrc:function/@name" />
                        </xsl:otherwise>
                      </xsl:choose>
                    </xsl:otherwise>
                  </xsl:choose>
                </xsl:when>
                <xsl:otherwise>
                  <!-- constructor -->
                  <xsl:value-of select="$class-name" />_Wrapper
                </xsl:otherwise>
              </xsl:choose>
              (

                <!--
                <xsl:value-of select="count(qsrc:parameters/qsrc:parameter)" />
                -->

                <!--
                <xsl:for-each select="">
                </xsl:for-each>
                -->
                <xsl:if test="ancestor::qsrc:constructor">
                  // RJSApi:
                  QObject* h
                  <xsl:if test="count(qsrc:parameters/qsrc:parameter)>0">
                  ,
                  </xsl:if>
                </xsl:if>

                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="qjsvalue" />

                <!--
                // for overridable function, add parameter to call JS 
                // (true when called from <xsl:value-of select="$class-name" />.js:)
                <xsl:if test="@virtual='true' and @overridable='true'">
                  <xsl:if test="count(qsrc:parameters/qsrc:parameter)>0">
                    <xsl:text>,</xsl:text>
                  </xsl:if>
                  bool callJs = false
                </xsl:if>
                -->
              )
              <xsl:if test="@const='true'">
                const
              </xsl:if>
              ;
            </xsl:when>

            <!-- cpp -->
            <xsl:otherwise>
              <xsl:if test="ancestor::qsrc:function">
                QJSValue 
              </xsl:if>
              <xsl:value-of select="$wrapper-class-name" />
              <xsl:text>::</xsl:text>
              <xsl:choose>
                <xsl:when test="ancestor::qsrc:function">
                  <xsl:choose>
                    <xsl:when test="@access='protected'">
                      <!-- expose protected function with Super to allow calling from JS: --> 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      <xsl:value-of select="ancestor::qsrc:function/@name" />Super
                    </xsl:when>
                    <xsl:when test="@virtual='true' and @overridable='true'">
                      <!-- expose virtual functions with Super to allow calling from JS: --> 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      <xsl:value-of select="ancestor::qsrc:function/@name" />Super
                    </xsl:when>
                    <xsl:otherwise>
                      <!--
                      <xsl:value-of select="ancestor::qsrc:function/@name" />
                      -->
                      <xsl:choose>
                        <xsl:when test="ancestor::qsrc:function/@cppname">
                          // special function name for JS wrapper:
                          <xsl:value-of select="ancestor::qsrc:function/@cppname" />
                        </xsl:when>
                        <xsl:otherwise>
                          <xsl:value-of select="ancestor::qsrc:function/@name" />
                        </xsl:otherwise>
                      </xsl:choose>
                    </xsl:otherwise>
                  </xsl:choose>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="$class-name" />_Wrapper
                </xsl:otherwise>
              </xsl:choose>
              (
                <xsl:if test="ancestor::qsrc:constructor">
                  // RJSApi:
                  QObject* h
                  <xsl:if test="count(qsrc:parameters/qsrc:parameter)>0">
                    <xsl:text>,</xsl:text>
                  </xsl:if>
                </xsl:if>

                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="qjsvalue" />

                <!--
                // for overridable function, add parameter to call JS 
                // (true when called from <xsl:value-of select="$class-name" />.js:)
                <xsl:if test="@virtual='true' and @overridable='true'">
                  <xsl:if test="count(qsrc:parameters/qsrc:parameter)>0">
                    <xsl:text>,</xsl:text>
                  </xsl:if>
                  bool callJs
                </xsl:if>
                -->
              ) 
              <xsl:if test="ancestor::qsrc:constructor">
                : RJSWrapperObj(*(RJSApi*)h)
              </xsl:if>
              <xsl:if test="@const='true'">
                const
              </xsl:if>
              <!--
              <xsl:if test="ancestor::qsrc:constructor">
                <xsl:if test="$qobject='true'">
                  // calling base constructor:
                  : <xsl:value-of select="$class-name" />(
                    <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="tocppcontr" />
                  )
                </xsl:if>
              </xsl:if>
              -->
              {
                <xsl:if test="ancestor::qsrc:constructor">
                  //RDebug::incCounter(QString("<xsl:value-of select="$class-name" />_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("<xsl:value-of select="$class-name" />_Wrapper"));
                </xsl:if>

                <!--
                qDebug() &lt;&lt; "<xsl:value-of select="$wrapper-class-name" />::<xsl:choose>
                  <xsl:when test="ancestor::qsrc:function"><xsl:value-of select="ancestor::qsrc:function/@name" /></xsl:when>
                  <xsl:otherwise><xsl:value-of select="$class-name" />_Wrapper</xsl:otherwise>
                </xsl:choose>";
                -->

                <!--
                <xsl:variable name="count">
                  <xsl:value-of select="@count"/>
                </xsl:variable>
                -->

                <!--
                  For each variant with any parameter count (from most parameters to least):
                -->
                <!--
                <xsl:for-each select="ancestor::*/qsrc:variant[@count=$count]">
                -->
                <xsl:choose>
                  <xsl:when test="$static">
                    <xsl:apply-templates select="ancestor::*/qsrc:variant[@static='true' or ../@static='true']" mode="if" />
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:apply-templates select="ancestor::*/qsrc:variant[not(@static='true' or ../@static='true')]" mode="if" />
                  </xsl:otherwise>
                </xsl:choose>

                <!--
                <xsl:for-each select="ancestor::*/qsrc:variant[@static=$static or ../@static=$static]">
                </xsl:for-each>
                -->

                <xsl:if test="ancestor::qsrc:function">
                  qWarning() &lt;&lt; "no matching function variant found for <xsl:value-of select="ancestor::qsrc:function/@name" />";
                  handler.trace();
                  return QJSValue();
                </xsl:if>

                <xsl:if test="ancestor::qsrc:constructor">
                  <xsl:if test="count(qsrc:parameters/qsrc:parameter)>0">
                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="checkundef" />
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  </xsl:if>

                  qWarning() &lt;&lt; "no matching constructor variant found for <xsl:value-of select="$class-name" />";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                </xsl:if>
              }
            </xsl:otherwise>
          </xsl:choose>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:if>
  </xsl:if>
</xsl:template>


<xsl:template match="qsrc:variant" mode="if">
  <xsl:variable name="class-name">
    <xsl:value-of select="ancestor::qsrc:class[1]/@name" />
  </xsl:variable>
  <xsl:variable name="static">
    <xsl:value-of select="@static" />
  </xsl:variable>

  <!-- 20220621: no protected methods
  <xsl:if test="@access='protected'">
  -->

  <xsl:choose>
    <xsl:when test="qsrc:parameters/qsrc:parameter">
      // check parameter types:
      if (
        <xsl:for-each select="qsrc:parameters/qsrc:parameter">
          <xsl:apply-templates select="." mode="checktype">
            <xsl:with-param name="pos" select="position()"/>
            <xsl:with-param name="last" select="position() = last()"/>
          </xsl:apply-templates>
        </xsl:for-each>

        <xsl:if test="../qsrc:variant[@static=$static][1]">
          <!--
          <xsl:message>calling with params index: <xsl:value-of select="count(qsrc:parameters/qsrc:parameter) + 1"/>, total: <xsl:value-of select="../qsrc:variant[@static=$static][1]/@count"/></xsl:message>
          -->
          <xsl:call-template name="param-undefined-check">
            <xsl:with-param name="index" select="count(qsrc:parameters/qsrc:parameter) + 1"/>
            <xsl:with-param name="total" select="../qsrc:variant[@static=$static][1]/@count"/>
          </xsl:call-template>
        </xsl:if>

        <!--
        <xsl:variable name="count">
          <xsl:value-of select-"@count"/>
        </xsl:variable>

        <xsl:for-each select="(//node())[(../qsrc:variant[1]/@count - $count) >= position()]">
          a<xsl:value-of select="position() + $count"/>.isUndefined() &amp;&amp;
        </xsl:for-each>
        -->
      ) {
    </xsl:when>
    <xsl:otherwise>
      {
    </xsl:otherwise>
  </xsl:choose>
    <xsl:if test="qsrc:parameters/qsrc:parameter">
      // prepare parameters:
    </xsl:if>
    <!--
    <xsl:if test="$qobject='false' or ancestor::qsrc:function">
    -->
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="tocpp" />
    <!--
    </xsl:if>
    -->

    <!--
    <xsl:if test="@return-type!='void'">
      // return value:
      <xsl:choose>
        <xsl:when test="qc:ends-with(@return-type, '&amp;')">
          <xsl:choose>
            <xsl:when test="qc:is-non-copyable(@return-type)='false'">
              // C++ function returns reference (non-copyable):
              <xsl:value-of select="qc:replace(@return-type, '&amp;', '*')" /> res = nullptr;
            </xsl:when>
            <xsl:otherwise>
              // C++ function returns reference (copyable):
              <xsl:value-of select="qc:replace(@return-type, '&amp;', '')" />* res;
            </xsl:otherwise>
          </xsl:choose>

        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="@return-type" /> res;
        </xsl:otherwise>
      </xsl:choose>
    </xsl:if>
    -->

    // call function:
    <xsl:choose>
      <xsl:when test="ancestor::qsrc:function">
        <xsl:if test="not(../@static='true') and not(@static='true')">
          if (!hasWrapped()) {
            qWarning() &lt;&lt; "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          <!--
          <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name]">
          -->
          <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name] or ancestor::qsrc:class[1]/@inheritable='true'">
            //setRecFlag(true);
          </xsl:if>
        </xsl:if>

        <!-- 
          function or overridable function:
          e.g. 
            int res = wrapped->fun(v1, v2);
          or
            int res = RClass::fun(v1, v2);
        -->

        <xsl:choose>
          <!--
          <xsl:when test="$qobject='true' or ../@static='true'">
          -->
          <xsl:when test="../@static='true' or @static='true'">
            <!-- 
              static function or function in class derrived from QObject:
              call base class function
              e.g. QCoreApplication::
            -->
            // static member function:
            // call base class static function:
            <!-- function name: -->
            <xsl:variable name="functionname">
              <xsl:choose>
                <xsl:when test="../@call">
                  <xsl:value-of select="../@call" />
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="../@name" />
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>

            <xsl:if test="@return-type!='void'">
              <xsl:choose>
                <xsl:when test="qc:ends-with(@return-type, '&amp;')">
                  // return type is reference:
                  // use pointer instead 1:
                  <xsl:value-of select="qc:replace(@return-type, '&amp;', '')" />* res =
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="@return-type" /> res = 
                </xsl:otherwise>
              </xsl:choose>
            </xsl:if>

            <xsl:if test="qc:ends-with(@return-type, '&amp;')">
              <xsl:text>&amp;</xsl:text>
            </xsl:if>

            <!--
              MyClass:: prefix when calling static members
               @non-member can be used to disable this prefix (e.g. operator&lt;):
            -->
            <xsl:choose>
              <xsl:when test="not(../@non-member='true')">
                // call static member function:
                <xsl:choose>
                  <xsl:when test="../@source">
                    <xsl:value-of select="../@source" />
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:value-of select="ancestor::qsrc:class/@name" />
                  </xsl:otherwise>
                </xsl:choose>
                <xsl:text>::</xsl:text>
              </xsl:when>
              <xsl:otherwise>
                // call non-member function:
              </xsl:otherwise>
            </xsl:choose>

            <xsl:value-of select="$functionname" />(
              <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="cppnames" />
            );
          </xsl:when>

          <xsl:otherwise>
            // non-static member function:
            // call function of wrapped object:
            <!-- function name: -->
            <xsl:variable name="functionname">
              <xsl:choose>
                <xsl:when test="../@call">
                  <xsl:value-of select="../@call" />
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="../@name" />
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>

            <xsl:variable name="functionpostfix">
              <xsl:choose>
                <xsl:when test="@access='protected'">
                  <!-- protected member, exposed as public function -->
                  <xsl:text>Public</xsl:text>
                </xsl:when>
                <xsl:otherwise>
                  <!-- 
                    public member, overridable, not pure virtual 
                    call base class implementation 
                    or
                    call JS implementation
                  -->
                  <xsl:if test="@overridable='true' and not(@pure='true')">
                    <xsl:text>Sup</xsl:text>
                  </xsl:if>
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>

            <xsl:variable name="usebase">
              <xsl:choose>
                <xsl:when test="$functionpostfix!='' and (document('inheritable_class.xml')/inheritable-class/class[@name=$class-name] or ancestor::qsrc:class[1]/@inheritable='true')">
                  <xsl:text>true</xsl:text>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:text>false</xsl:text>
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>

            <xsl:choose>
              <xsl:when test="$usebase='true'">
                // call function of <xsl:value-of select="ancestor::qsrc:class/@name" />_Base class as 
                // function has postfix inheritable class, overridable function):
                <xsl:value-of select="ancestor::qsrc:class/@name" />_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() &lt;&lt; "<xsl:value-of select="ancestor::qsrc:class/@name" />::<xsl:value-of select="$functionname" />: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                <xsl:if test="@return-type!='void'">
                  <xsl:choose>
                    <xsl:when test="qc:ends-with(@return-type, '&amp;')">
                      // return type is reference:
                      // use pointer instead 2:
                      <xsl:value-of select="qc:replace(@return-type, '&amp;', '')" />* res;
                    </xsl:when>
                    <xsl:otherwise>
                      <xsl:value-of select="@return-type" /> res;
                    </xsl:otherwise>
                  </xsl:choose>
                </xsl:if>
                <!--
                <xsl:if test="qc:ends-with(@return-type, '&amp;')">
                  &amp;
                </xsl:if>
                -->
                <xsl:choose>
                  <xsl:when test="$functionpostfix='Sup'">
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      <xsl:if test="@return-type!='void'">
                        <xsl:text>res =</xsl:text>
                      </xsl:if>
                      <xsl:if test="qc:ends-with(@return-type, '&amp;')">
                        <xsl:text>&amp;</xsl:text>
                      </xsl:if>
                      wb-&gt;<xsl:value-of select="$functionname" /><xsl:value-of select="$functionpostfix" />(
                        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="cppnames" />
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      <xsl:if test="@return-type!='void'">
                        <xsl:text>res =</xsl:text>
                      </xsl:if>
                      <xsl:if test="qc:ends-with(@return-type, '&amp;')">
                        <xsl:text>&amp;</xsl:text>
                      </xsl:if>
                      wb-&gt;<xsl:value-of select="$functionname" />(
                        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="cppnames" />
                      );
                    }
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:if test="@return-type!='void'">
                      <xsl:text>res =</xsl:text>
                    </xsl:if>
                    wb-&gt;<xsl:value-of select="$functionname" /><xsl:value-of select="$functionpostfix" />(
                      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="cppnames" />
                    );
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:when>

              <xsl:otherwise>
                // call function of C++ class:
                <xsl:value-of select="ancestor::qsrc:class/@name" />* w = getWrapped();
                <xsl:if test="@return-type!='void'">
                  <xsl:choose>
                    <xsl:when test="qc:ends-with(@return-type, '&amp;')">
                      // return type is reference:
                      // use pointer instead 3:
                      <xsl:value-of select="qc:replace(@return-type, '&amp;', '')" />* res =
                    </xsl:when>
                    <xsl:otherwise>
                      <xsl:value-of select="@return-type" /> res = 
                    </xsl:otherwise>
                  </xsl:choose>
                </xsl:if>
                <!--
                <xsl:if test="qc:ends-with(@return-type, '&amp;')">
                  &amp;
                </xsl:if>
                -->
                <xsl:if test="qc:ends-with(@return-type, '&amp;')">
                  <xsl:text>&amp;</xsl:text>
                </xsl:if>
                w-&gt;<xsl:value-of select="$functionname" />(
                  <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="cppnames" />
                );
              </xsl:otherwise>
            </xsl:choose>

            <xsl:if test="not(../@static='true') and not(@static='true')">
              <xsl:if test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name] or ancestor::qsrc:class[1]/@inheritable='true'">
                //setRecFlag(false);
              </xsl:if>
            </xsl:if>

          </xsl:otherwise>
        </xsl:choose>
        


        <!--
        <xsl:value-of select="qc:get-wrapper-return-type(@return-type)" /> ret = new <xsl:value-of select="qc:get-wrapper-type(@return-type)" />(new <xsl:value-of select="@return-type" />(res));
        return ret;
        -->
        <xsl:choose>
          <xsl:when test="@return-type!='void'">
            // return type: <xsl:value-of select="@return-type" />

            return <xsl:value-of select="qc:type-to-function-cpp2js(@return-type)" />(
              handler, 
              // non-copyable: <xsl:value-of select="qc:is-non-copyable(@return-type)='true'" />
              <xsl:choose>
                <xsl:when test="qc:ends-with(@return-type, '*') and qc:is-non-copyable(@return-type)='false'">
                  // return type is pointer, type is copyable:
                  // call pointer implementation of <xsl:value-of select="qc:type-to-function-cpp2js(@return-type)" />:
                  res
                </xsl:when>
                <xsl:when test="qc:ends-with(@return-type, '&amp;') and qc:is-non-copyable(@return-type)='false'">
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                </xsl:when>
                <xsl:when test="qc:ends-with(@return-type, '&amp;') and qc:is-non-copyable(@return-type)='true'">
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                </xsl:when>
                <!--
                <xsl:when test="qc:ends-with(@return-type, '&amp;') and qc:is-non-copyable(@return-type)='false'">
                  // return type is reference, type is copyable:
                  *res
                </xsl:when>
                -->
                <xsl:otherwise>
                  res
                </xsl:otherwise>
              </xsl:choose>
              );
            <!--
            return cpp2js(engine, res);
            -->
          </xsl:when>
          <xsl:otherwise>
            return QJSValue();
          </xsl:otherwise>
        </xsl:choose>
      </xsl:when>

      <xsl:otherwise>
        <!-- constructor -->
        // construct wrapper:

        <xsl:choose>
          <xsl:when test="document('inheritable_class.xml')/inheritable-class/class[@name=$class-name] or ancestor::qsrc:class[1]/@inheritable='true'">
            wrapped = new <xsl:value-of select="$class-name" />_Base(
              handler
              <xsl:if test="qsrc:parameters/qsrc:parameter">
                ,
              </xsl:if>
              <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="cppnames" />
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((<xsl:value-of select="$class-name" />_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((<xsl:value-of select="$class-name" />_Base*)wrapped)->self = handler.getSelf();
          </xsl:when>
          <xsl:otherwise>
            wrapped = new <xsl:value-of select="$class-name" />(
                <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="cppnames" />
            );
            wrappedCreated = true;
          </xsl:otherwise>
        </xsl:choose>

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      </xsl:otherwise>
    </xsl:choose>
  }
</xsl:template>

<xsl:template name="param-undefined-check">
  <xsl:param name="index" />
  <xsl:param name="total" />

  <!--
  <xsl:message>index:<xsl:value-of select="$index"/></xsl:message>
  <xsl:message>total:<xsl:value-of select="$total"/></xsl:message>
  -->

  <xsl:if test="not($index &gt; $total)">
    <!--
    <xsl:message>index not greater than total</xsl:message>
    -->

    <xsl:text>&amp;&amp;</xsl:text>
    a<xsl:value-of select="$index"/>.isUndefined()

    <xsl:if test="not($index >= $total)">
      <xsl:call-template name="param-undefined-check">
        <xsl:with-param name="index" select="$index + 1" />
        <xsl:with-param name="total" select="$total" />
      </xsl:call-template>
    </xsl:if>
  </xsl:if>
</xsl:template>

<xsl:template match="qsrc:parameter" mode="checktype">
  <xsl:param name="pos" />
  <xsl:param name="last" />

  <xsl:value-of select="qc:type-to-function-is(@type, @modifier)" />(handler, a<xsl:value-of select="$pos"/>
  <!-- allow null / undefined if value has default value or is a pointer: -->
  <xsl:if test="@default or @modifier='*'">
    , true
  </xsl:if>
  )

  <!--
  (
  <xsl:choose>
    <xsl:when test="@type='QString'">
      a<xsl:value-of select="$pos"/>.isString()
    </xsl:when>
    <xsl:when test="@type='QStringList'">
      a<xsl:value-of select="$pos"/>.isArray()
    </xsl:when>
    <xsl:when test="contains(@type, 'QList')">
      a<xsl:value-of select="$pos"/>.isArray()
    </xsl:when>
    <xsl:when test="@type='QAction'">
      a<xsl:value-of select="$pos"/>.isObject()
    </xsl:when>
    <xsl:when test="@type='int'">
      a<xsl:value-of select="$pos"/>.isNumber()
    </xsl:when>
    <xsl:when test="contains(@type, '::')">
      a<xsl:value-of select="$pos"/>.isNumber()
    </xsl:when>
    <xsl:otherwise>
      !a<xsl:value-of select="$pos"/>.isUndefined()
    </xsl:otherwise>
  </xsl:choose>

  <xsl:if test="@default">
    < ! - - value has default value, undefined is also acceptable - - >
    || a<xsl:value-of select="$pos"/>.isUndefined()
  </xsl:if>
  )
  -->

  <xsl:if test="not($last)"> &amp;&amp; </xsl:if>
</xsl:template>


<xsl:template match="qsrc:function" mode="protected">
  <xsl:apply-templates select="qsrc:variant" mode="protected" />
</xsl:template>


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
    <xsl:value-of select="concat($specifier, @return-type, ' ', ../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    );
  </xsl:if>

  <xsl:if test="$mode='h'">
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    Q_INVOKABLE <xsl:value-of select="concat($specifier, @return-type, ' ', ../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="towrapper" />
    );
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    <xsl:value-of select="concat($specifier, @return-type, ' ', ancestor::qsrc:class/@name, '_Wrapper::', ../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="towrapper" />
    ) {

      <xsl:choose>
        <!-- inherited from QObject: call base class function -->
        <xsl:when test="ancestor::qsrc:class/qsrc:super_list/qsrc:super[@name='QObject']">
          //qDebug() &lt;&lt; "calling: <xsl:value-of select="ancestor::qsrc:class/@name" />::<xsl:value-of select="../@name" />";
          <xsl:value-of select="ancestor::qsrc:class/@name" />::<xsl:value-of select="../@name" />(
            <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="towrappercall" />
          );
        </xsl:when>

        <!-- not inherited from QObject: call wrapper function -->
        <xsl:otherwise>
          //qDebug() &lt;&lt; "calling: wrapped-><xsl:value-of select="../@name" />";
          getWrapped()-&gt;<xsl:value-of select="../@name" />(
            <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="towrappercall" />
          );
        </xsl:otherwise>
      </xsl:choose>
    }
  </xsl:if>

  <xsl:if test="$mode='cpp'">
    <!-- 20210702
    // overwritable protected function:
    // can be re-implemented in JS:
    // calls JS function if implemented:
    <xsl:value-of select="concat($specifier, @return-type, ' ', ancestor::qsrc:class/@name, '_Wrapper::', ../@name)" />(
      <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" />
    ) {
      QJSValue self = getSelf();
      QJSValue f = self.prototype().property("<xsl:value-of select="../@name" />");
      if (f.isCallable()) {
        qDebug() &lt;&lt; "calling JS version of <xsl:value-of select="../@name" />";
        qDebug() &lt;&lt; "  self: " &lt;&lt; self.property("name").toString();

        QJSValueList args;

        <xsl:apply-templates select="qsrc:parameters/qsrc:parameter" mode="qjsvaluelist" />

        < ! - -
        <xsl:value-of select="parent::qsrc:class/@name" />_Wrapper* ew = new <xsl:value-of select="parent::qsrc:class/@name" />_Wrapper(event);
        QJSValue v = engine->toScriptValue&lt;<xsl:value-of select="parent::qsrc:class/@name" />_Wrapper*&gt;(ew);
        f.callWithInstance(self, QJSValueList() &lt;&lt; v);
        - - >
        f.callWithInstance(self, args);
      }
    -->}
  </xsl:if>
</xsl:template>


<!--
  Used to fill args with QJSValues for each parameter.
-->
<!--
<xsl:template match="qsrc:parameter" mode="qjsvaluelist">
  <xsl:value-of select="@type" />_Wrapper* ew = new <xsl:value-of select="@type" />_Wrapper(event);
  QJSValue v = engine->toScriptValue&lt;<xsl:value-of select="@type" />_Wrapper*&gt;(ew);
  args.append(v);
</xsl:template>
-->


<!--
  Parameter as list of values with original C++ types.
  e.g. bool myparam, int arg, ...
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

  <xsl:apply-templates select="." mode="paramname">
    <xsl:with-param name="pos" select="position()" />
  </xsl:apply-templates>

  <!-- e.g. parent = nullptr -->
  <xsl:if test="@name!=''">
    <!-- default value for argument (header only) -->
    <xsl:if test="$mode='h'">
      <xsl:if test="@default!=''">
        <xsl:value-of select="'='" />
        <xsl:value-of select="@default" />
      </xsl:if>
    </xsl:if>
  </xsl:if>

  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>

<!--
  Parameter name either from XML or a1, a2, ...
-->
<xsl:template match="qsrc:parameter" mode="paramname">
  <xsl:param name="pos" />

  <xsl:choose>
    <xsl:when test="@name!=''">
      <xsl:value-of select="@name" />
    </xsl:when>
    <xsl:otherwise>
      <!--
      <xsl:value-of select="concat('a', position())" />
      -->
      <xsl:value-of select="concat('a', $pos)" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<!--
  Parameter as list of if conditions for undefined.
  e.g. a1.isUndefined() && a2.isUndefined() ...
-->
<xsl:template match="qsrc:parameter" mode="checkundef">
  <xsl:value-of select="concat('a', position())" />.isUndefined()
  <xsl:if test="position() &lt; last()"> &amp;&amp; </xsl:if>
</xsl:template>

<!--
  Parameter as list of QJSValue.
  e.g. const QJSValue& a1, const QJSValue& a2, ...
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

  <xsl:if test="$mode='h'">
    <!--
    <xsl:if test="@default!=''">
    -->
    <!-- always add default value to prevent segfault with wrong calls from JS: -->
      = QJSValue()
    <!--
    </xsl:if>
    -->
  </xsl:if>

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

<!--
  Parameter as list of QJSValue for signal declarations.
  e.g. const QJSValue& a1, const QJSValue& a2, ...
-->
<xsl:template match="qsrc:parameter" mode="qjsvalue_signal">
  const QJSValue&amp; 
  <xsl:value-of select="concat('a', position())" />
  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>

<!--
  Parameter names as list.
  e.g. a1, a2, a3, ...
-->
<xsl:template match="qsrc:parameter" mode="qjsvaluenames">
  <xsl:value-of select="concat('a', position())" />
  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>

<!--
  Parameter names as list with postfix
  e.g. a1_js,a2_js, a3_js, ...
-->
<xsl:template match="qsrc:parameter" mode="qjsvaluenames_js">
  <xsl:value-of select="concat('a', position(), '_js')" />
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

  <xsl:choose>
    <xsl:when test="qc:is-non-copyable(@type)='true'">
      <xsl:if test="@modifier='&amp;'">
        <xsl:text>*</xsl:text>
      </xsl:if>
      <xsl:value-of select="concat('a', position())" />_cpp
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="concat('a', position())" />_cpp
    </xsl:otherwise>
  </xsl:choose>

  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>

<!--
  Converts the parameter from QSValue to native type (int, RVector, ...).
-->
<xsl:template match="qsrc:parameter" mode="tocpp">
  // convert js parameter to cpp: <xsl:value-of select="@name" /> (<xsl:value-of select="@type" />)
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

  <xsl:choose>
    <xsl:when test="@type='char' and @modifier='*'">
      // char pointer string:
      QByteArray <xsl:value-of select="$name" />_ba = <xsl:value-of select="qc:type-to-function-js2cpp(@type, @modifier)" />(handler, <xsl:value-of select="$name" />).toLocal8Bit();
      const char*<xsl:text> </xsl:text><xsl:value-of select="$name" />_cpp = <xsl:value-of select="$name" />_ba.constData();
    </xsl:when>
    <xsl:otherwise>
      <xsl:choose>
        <!--
        <xsl:when test="@type='QString'">
          <xsl:value-of select="@type" />
        </xsl:when>
        -->
        <xsl:when test="@modifier='*'">
          // pointer:
          <xsl:value-of select="@type" />*
        </xsl:when>
        <!--
        <xsl:when test="@modifier='&amp;' and qc:is-non-copyable(@type)">
          <xsl:if test="@const='true'">
            <xsl:text>const </xsl:text>
          </xsl:if>
          <xsl:value-of select="@type" />*
        </xsl:when>
        -->
        <xsl:when test="qc:is-non-copyable(@type)='true'">
          // non copyable:
          <!--
          <xsl:if test="@const='true'">
            <xsl:text>const </xsl:text>
          </xsl:if>
          -->
          <xsl:value-of select="@type" />*
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="@type" />
        </xsl:otherwise>
      </xsl:choose>

      <xsl:text> </xsl:text><xsl:value-of select="$name" />_cpp;

      <xsl:choose>
        <xsl:when test="@default">
          if (<xsl:value-of select="$name" />.isUndefined()) {
            <xsl:value-of select="$name" />_cpp = <xsl:value-of select="@default" />;
          }
          else {
            <xsl:value-of select="$name" />_cpp = <xsl:value-of select="qc:type-to-function-js2cpp(@type, @modifier)" />(handler, <xsl:value-of select="$name" />);
          }
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$name" />_cpp = <xsl:value-of select="qc:type-to-function-js2cpp(@type, @modifier)" />(handler, <xsl:value-of select="$name" />);
        </xsl:otherwise>
      </xsl:choose>

      <!--
      <xsl:if test="qc:is-non-copyable(@type)='true' and @const='true'">
        const_cast&lt;<xsl:value-of select="@type" />*&gt;(
      </xsl:if>
      -->



      <!--
      <xsl:if test="qc:is-non-copyable(@type)='true' and @const='true'">
        )
      </xsl:if>
      -->
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>


<!--
  Converts the parameter from c++ to QJSValue.
-->
<xsl:template match="qsrc:parameter" mode="tojs">
  // parameter: <xsl:value-of select="@name" /> (<xsl:value-of select="@type" />)
  <xsl:text>&#xa;</xsl:text>

  <xsl:variable name="name">
    <xsl:value-of select="concat('a', position())" />
  </xsl:variable>

  QJSValue <xsl:value-of select="$name" />_js = <xsl:value-of select="qc:type-to-function-cpp2js(@type)" />(
    handler, 
    <xsl:apply-templates select="." mode="paramname">
      <xsl:with-param name="pos" select="position()" />
    </xsl:apply-templates>
  );
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

  <xsl:value-of select="qc:type-to-function-js2cpp(@type, @modifier)" />(engine, <xsl:value-of select="$name" />)
  <xsl:if test="position() &lt; last()">, </xsl:if>
</xsl:template>
-->


<xsl:template match="qsrc:enum">
  enum <xsl:value-of select="@name"/> {
    <xsl:apply-templates />
  };
  Q_ENUM(<xsl:value-of select="@name"/>)
</xsl:template>

<xsl:template match="qsrc:enum/qsrc:key">
  <xsl:value-of select="./text()"/> = <xsl:value-of select="(ancestor::qsrc:class|ancestor::qsrc:namespace)/@name"/>::<xsl:value-of select="./text()"/>
  <xsl:if test="position() &lt; last()">,</xsl:if>
  <xsl:text>&#xa;</xsl:text>
</xsl:template>

<xsl:template match="qsrc:property" mode="declaration">
  Q_PROPERTY(
    <!--
    <xsl:value-of select="@type"/> 
    -->
    QJSValue
    <xsl:text> </xsl:text>
    <xsl:value-of select="@name"/>
    <xsl:choose>
      <xsl:when test="@read">
        <xsl:text> READ </xsl:text> <xsl:value-of select="@read"/>
      </xsl:when>
      <xsl:otherwise>
        // auto generated read function for public static properties:
        <xsl:text> READ </xsl:text> get<xsl:value-of select="@name"/>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:if test="@write">
      <xsl:text> WRITE </xsl:text> <xsl:value-of select="@write"/>
    </xsl:if>
  )
</xsl:template>

<xsl:template match="qsrc:property" mode="read-static-property">
  // auto generated read function for public static property <xsl:value-of select="@name"/>:
  Q_INVOKABLE QJSValue get<xsl:value-of select="@name"/>() {
    return <xsl:value-of select="qc:type-to-function-cpp2js(@type)"/>(handler, <xsl:value-of select="(ancestor::qsrc:class|ancestor::qsrc:namespace)/@name"/>::<xsl:value-of select="@name"/>);
  }
</xsl:template>

<xsl:template match="qsrc:property" mode="forward-static">
  // read static property <xsl:value-of select="@name"/>:
  Q_INVOKABLE QJSValue <xsl:value-of select="@read"/>() {
    return handler.getEngine()->globalObject().property("<xsl:value-of select="(ancestor::qsrc:class|ancestor::qsrc:namespace)/@name"/>_WrapperSingleton").property("<xsl:value-of select="@read"/>").call();

    <!--
    return <xsl:value-of select="(ancestor::qsrc:class|ancestor::qsrc:namespace)/@name"/>_WrapperSingleton::getInstance(handler)-&gt;<xsl:value-of select="@read"/>();
    -->
  }

  <xsl:if test="@write">
    // write static property <xsl:value-of select="@name"/>:
    Q_INVOKABLE QJSValue <xsl:value-of select="@write"/>(const QJSValue&amp; arg) {
      return handler.getEngine()->globalObject().property("<xsl:value-of select="(ancestor::qsrc:class|ancestor::qsrc:namespace)/@name"/>_WrapperSingleton").property("<xsl:value-of select="@write"/>").call(QJSValueList() &lt;&lt; arg);
      <!--
      return <xsl:value-of select="(ancestor::qsrc:class|ancestor::qsrc:namespace)/@name"/>_WrapperSingleton::getInstance(handler)-&gt;<xsl:value-of select="@write"/>(arg);
      -->
    }
  </xsl:if>
</xsl:template>

<!--
<xsl:template match="qsrc:property" mode="setter_getter">
  <xsl:choose>
    <xsl:when test="$mode='h'">
      <xsl:if test="@read">
        <xsl:value-of select="@type"/><xsl:text> </xsl:text><xsl:value-of select="@read"/>Property();
      </xsl:if>
      <xsl:if test="@write">
        void <xsl:value-of select="@write"/>Property(const <xsl:value-of select="@type"/>&amp; v);
      </xsl:if>
    </xsl:when>

    <xsl:otherwise>
      <xsl:if test="@read">
        <xsl:value-of select="@type"/><xsl:text> </xsl:text><xsl:value-of select="ancestor::qsrc:class/@name"/>_Wrapper::<xsl:value-of select="@read"/>Property() {
          return getWrapped()-><xsl:value-of select="@read"/>();
        }
      </xsl:if>
      <xsl:if test="@write">
        void <xsl:value-of select="ancestor::qsrc:class/@name"/>_Wrapper::<xsl:value-of select="@write"/>Property(const <xsl:value-of select="@type"/>&amp; v) {
          return getWrapped()-><xsl:value-of select="@write"/>(v);
        }
      </xsl:if>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
-->



<func:function name="qc:include-guard">
  <xsl:param name="filename" />
  <func:result>
      <xsl:value-of select="concat(qc:uppercase(translate($filename, '.', '_')), '_WRAPPER')" />
  </func:result>
</func:function>

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




<!--
  Return function to check for given type.
  e.g. RJSHelper::is_bool
-->
<func:function name="qc:type-to-function-is">
  <xsl:param name="type" />
  <xsl:param name="modifier" />

  <xsl:variable name="itemtype">
    <xsl:value-of select="substring-before(substring-after($type, '&lt;'), '&gt;')" />
  </xsl:variable>
  <xsl:variable name="itemptr">
    <xsl:value-of select="contains($itemtype, '*')" />
  </xsl:variable>

  <func:result>
    <xsl:text>RJSHelper</xsl:text><xsl:value-of select="qc:get-helper-postfix($type)"/><xsl:text>::is_</xsl:text>
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
    <xsl:if test="@modifier='*' or (qc:is-non-copyable(@type)='true' and @modifier='&amp;') or $itemptr='true'">
      <xsl:text>_ptr</xsl:text>
    </xsl:if>
  </func:result>
</func:function>

<func:function name="qc:strip-pointer">
  <xsl:param name="type" />
  <func:result>
    <xsl:value-of select="qc:replace($type, '*', '')" />
  </func:result>
</func:function>


</xsl:stylesheet>
