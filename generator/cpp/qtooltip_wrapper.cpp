
  // Auto generated
  
  // include header:
  //#include "qtooltipwrapper.h"
  //#include "header_cpp.h"
  
    #include "qtooltip_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QToolTip
    // Function: showText
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QToolTip_WrapperSingleton::showText
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QWidget_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: text (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = nullptr;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QToolTip::showText(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QToolTip
    // Function: hideText
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QToolTip_WrapperSingleton::hideText
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QToolTip::hideText(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hideText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QToolTip
    // Function: isVisible
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QToolTip_WrapperSingleton::isVisible
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QToolTip::isVisible(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QToolTip
    // Function: text
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QToolTip_WrapperSingleton::text
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QToolTip::text(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for text";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QToolTip
    // Function: palette
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QToolTip_WrapperSingleton::palette
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QPalette res = 
                
                // call static member function:
                QToolTip::palette(
              
            );
          
            // return type: QPalette

            return RJSHelper::cpp2js_QPalette(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for palette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QToolTip
    // Function: setPalette
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QToolTip_WrapperSingleton::setPalette
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QToolTip::setPalette(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPalette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QToolTip
    // Function: font
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QToolTip_WrapperSingleton::font
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QToolTip::font(
              
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QToolTip
    // Function: setFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QToolTip_WrapperSingleton::setFont
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QToolTip::setFont(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QToolTip_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QToolTip_Wrapper>("org.qcad", 1, 0, "QToolTip_Wrapper");
        qmlRegisterInterface<QToolTip_Wrapper>("QToolTip_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QToolTip_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QToolTip_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QToolTip_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QToolTip_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QToolTip_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QToolTip_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QToolTip_WrapperSingleton * s = new QToolTip_WrapperSingleton(handler);
        engine->globalObject().setProperty("QToolTip_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QToolTip.js";
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
    QToolTip_Wrapper::QToolTip_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QToolTip_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QToolTip_Wrapper::QToolTip_Wrapper(RJSApi& h, QToolTip* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QToolTip_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QToolTip_Wrapper"));
              //setObjectName("QToolTip_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QToolTip_Wrapper::~QToolTip_Wrapper() {
            //RDebug::decCounter(QString("QToolTip_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QToolTip_Wrapper"));

            //qDebug() << "QToolTip_Wrapper::~QToolTip_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QToolTip";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QToolTip_Wrapper::initConnections() {

          //setObjectName("QToolTip_Wrapper");

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
  

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  