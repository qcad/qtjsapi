
  // Auto generated
  
  // include header:
  //#include "qpagelayoutwrapper.h"
  //#include "header_cpp.h"
  
    #include "qpagelayout_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QPageLayout_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPageLayout_Wrapper>("org.qcad", 1, 0, "QPageLayout_Wrapper");
        qmlRegisterInterface<QPageLayout_Wrapper>("QPageLayout_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPageLayout_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPageLayout_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPageLayout_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPageLayout_BaseJs", mob);
      
      QString fileName = ":generator/js/QPageLayout.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    QPageLayout_Wrapper::QPageLayout_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPageLayout_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPageLayout_Wrapper::QPageLayout_Wrapper(RJSApi& h, QPageLayout* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPageLayout_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPageLayout_Wrapper"));
              //setObjectName("QPageLayout_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPageLayout_Wrapper::~QPageLayout_Wrapper() {
            //RDebug::decCounter(QString("QPageLayout_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPageLayout_Wrapper"));

            //qDebug() << "QPageLayout_Wrapper::~QPageLayout_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPageLayout";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPageLayout_Wrapper::initConnections() {

          //setObjectName("QPageLayout_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
    // Class: QPageLayout
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1
QPageLayout_Wrapper::QPageLayout_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPageLayout_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPageLayout_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize(handler, a1
  )

   && RJSHelper::is_QPageLayout_Orientation(handler, a2
  )

   && RJSHelper::is_QMarginsF(handler, a3
  )

   && RJSHelper::is_QPageLayout_Unit(handler, a4
    , true
  
  )

   && RJSHelper::is_QMarginsF(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSize (QPageSize)
  
QPageSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize(handler, a1);
        
  // convert js parameter to cpp: orientation (QPageLayout::Orientation)
  
QPageLayout::Orientation a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPageLayout_Orientation(handler, a2);
        
  // convert js parameter to cpp: margins (QMarginsF)
  
QMarginsF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QMarginsF(handler, a3);
        
  // convert js parameter to cpp: units (QPageLayout::Unit)
  
QPageLayout::Unit a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QPageLayout::Point;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QPageLayout_Unit(handler, a4);
          }
        
  // convert js parameter to cpp: minMargins (QMarginsF)
  
QMarginsF a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = QMarginsF(0,0,0,0);
          }
          else {
            a5_cpp = RJSHelper::js2cpp_QMarginsF(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageLayout(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper::is_QPageLayout(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageLayout)
  
QPageLayout a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageLayout(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageLayout(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
   && a2.isUndefined()
   && a3.isUndefined()
   && a4.isUndefined()
   && a5.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QPageLayout";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPageLayout
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageLayout)
  
QPageLayout a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: isEquivalentTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::isEquivalentTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageLayout)
  
QPageLayout a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                bool res = 
                    
                w->isEquivalentTo(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEquivalentTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::isValid
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout_Mode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QPageLayout::Mode)
  
QPageLayout::Mode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout_Mode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                
                w->setMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: mode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::mode
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QPageLayout::Mode res = 
                    
                w->mode(
                  
                );
              
            // return type: QPageLayout::Mode

            return RJSHelper::cpp2js_QPageLayout_Mode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setPageSize
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setPageSize
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize(handler, a1
  )

   && RJSHelper::is_QMarginsF(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSize (QPageSize)
  
QPageSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize(handler, a1);
        
  // convert js parameter to cpp: minMargins (QMarginsF)
  
QMarginsF a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QMarginsF(0,0,0,0);
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QMarginsF(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                
                w->setPageSize(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPageSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: pageSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::pageSize
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QPageSize res = 
                    
                w->pageSize(
                  
                );
              
            // return type: QPageSize

            return RJSHelper::cpp2js_QPageSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pageSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setOrientation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setOrientation
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout_Orientation(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orientation (QPageLayout::Orientation)
  
QPageLayout::Orientation a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout_Orientation(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                
                w->setOrientation(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOrientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: orientation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::orientation
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QPageLayout::Orientation res = 
                    
                w->orientation(
                  
                );
              
            // return type: QPageLayout::Orientation

            return RJSHelper::cpp2js_QPageLayout_Orientation(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for orientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setUnits
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setUnits
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout_Unit(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: units (QPageLayout::Unit)
  
QPageLayout::Unit a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout_Unit(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                
                w->setUnits(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnits";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: units
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::units
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QPageLayout::Unit res = 
                    
                w->units(
                  
                );
              
            // return type: QPageLayout::Unit

            return RJSHelper::cpp2js_QPageLayout_Unit(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for units";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setMargins
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setMargins
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMarginsF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margins (QMarginsF)
  
QMarginsF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMarginsF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                bool res = 
                    
                w->setMargins(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setLeftMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setLeftMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: leftMargin (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                bool res = 
                    
                w->setLeftMargin(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setLeftMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setRightMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setRightMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rightMargin (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                bool res = 
                    
                w->setRightMargin(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setRightMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setTopMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setTopMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topMargin (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                bool res = 
                    
                w->setTopMargin(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setTopMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setBottomMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setBottomMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bottomMargin (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                bool res = 
                    
                w->setBottomMargin(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setBottomMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: margins
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::margins
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout_Unit(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: units (QPageLayout::Unit)
  
QPageLayout::Unit a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout_Unit(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QMarginsF res = 
                    
                w->margins(
                  a1_cpp
    
                );
              
            // return type: QMarginsF

            return RJSHelper::cpp2js_QMarginsF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QMarginsF res = 
                    
                w->margins(
                  
                );
              
            // return type: QMarginsF

            return RJSHelper::cpp2js_QMarginsF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for margins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: marginsPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::marginsPoints
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QMargins res = 
                    
                w->marginsPoints(
                  
                );
              
            // return type: QMargins

            return RJSHelper::cpp2js_QMargins(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for marginsPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: marginsPixels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::marginsPixels
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resolution (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QMargins res = 
                    
                w->marginsPixels(
                  a1_cpp
    
                );
              
            // return type: QMargins

            return RJSHelper::cpp2js_QMargins(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for marginsPixels";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: setMinimumMargins
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::setMinimumMargins
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMarginsF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: minMargins (QMarginsF)
  
QMarginsF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMarginsF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                
                w->setMinimumMargins(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinimumMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: minimumMargins
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::minimumMargins
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QMarginsF res = 
                    
                w->minimumMargins(
                  
                );
              
            // return type: QMarginsF

            return RJSHelper::cpp2js_QMarginsF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: maximumMargins
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::maximumMargins
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QMarginsF res = 
                    
                w->maximumMargins(
                  
                );
              
            // return type: QMarginsF

            return RJSHelper::cpp2js_QMarginsF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: fullRect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::fullRect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout_Unit(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: units (QPageLayout::Unit)
  
QPageLayout::Unit a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout_Unit(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QRectF res = 
                    
                w->fullRect(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QRectF res = 
                    
                w->fullRect(
                  
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fullRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: fullRectPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::fullRectPoints
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QRect res = 
                    
                w->fullRectPoints(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fullRectPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: fullRectPixels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::fullRectPixels
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resolution (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QRect res = 
                    
                w->fullRectPixels(
                  a1_cpp
    
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fullRectPixels";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: paintRect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::paintRect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout_Unit(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: units (QPageLayout::Unit)
  
QPageLayout::Unit a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout_Unit(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QRectF res = 
                    
                w->paintRect(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QRectF res = 
                    
                w->paintRect(
                  
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for paintRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: paintRectPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::paintRectPoints
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QRect res = 
                    
                w->paintRectPoints(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for paintRectPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageLayout
    // Function: paintRectPixels
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageLayout_Wrapper::paintRectPixels
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resolution (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageLayout* w = getWrapped();
                QRect res = 
                    
                w->paintRectPixels(
                  a1_cpp
    
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for paintRectPixels";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  