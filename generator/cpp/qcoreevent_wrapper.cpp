
  // Auto generated
  
  // include header:
  //#include "qcoreeventwrapper.h"
  //#include "header_cpp.h"
  
    #include "qcoreevent_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QEvent*> QEvent_Wrapper::basecasters_QEvent;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QEvent
    // Function: registerEventType
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEvent_WrapperSingleton::registerEventType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = -1;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QEvent::registerEventType(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for registerEventType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QEvent_Wrapper>("org.qcad", 1, 0, "QEvent_Wrapper");
        qmlRegisterInterface<QEvent_Wrapper>("QEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QEvent* t = new RJSType_QEvent();
          global.setProperty("RJSType_QEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QEvent_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QEvent_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QEvent_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QEvent_WrapperSingleton * s = new QEvent_WrapperSingleton(handler);
        engine->globalObject().setProperty("QEvent_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QEvent.js";
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
    QEvent_Wrapper::QEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QEvent_Wrapper::QEvent_Wrapper(RJSApi& h, QEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QEvent_Wrapper"));
              //setObjectName("QEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QEvent_Wrapper::~QEvent_Wrapper() {
            //RDebug::decCounter(QString("QEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QEvent_Wrapper"));

            //qDebug() << "QEvent_Wrapper::~QEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QEvent_Wrapper::initConnections() {

          //setObjectName("QEvent_Wrapper");

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
  
    // Class: QEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QEvent_Wrapper::QEvent_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QEvent_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QEvent_Type(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QEvent::Type)
  
QEvent::Type a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEvent_Type(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QEvent(
                a1_cpp
    
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QEvent
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::type
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
                QEvent* w = getWrapped();
                QEvent::Type res = 
                    
                w->type(
                  
                );
              
            // return type: QEvent::Type

            return RJSHelper::cpp2js_QEvent_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: spontaneous
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::spontaneous
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
                QEvent* w = getWrapped();
                bool res = 
                    
                w->spontaneous(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spontaneous";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: setAccepted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::setAccepted
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: accepted (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEvent* w = getWrapped();
                
                w->setAccepted(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: isAccepted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::isAccepted
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
                QEvent* w = getWrapped();
                bool res = 
                    
                w->isAccepted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: accept
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::accept
              (
                
              ) 
              
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
                QEvent* w = getWrapped();
                
                w->accept(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for accept";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: ignore
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::ignore
              (
                
              ) 
              
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
                QEvent* w = getWrapped();
                
                w->ignore(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ignore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: isInputEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::isInputEvent
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
                QEvent* w = getWrapped();
                bool res = 
                    
                w->isInputEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInputEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: isPointerEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::isPointerEvent
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
                QEvent* w = getWrapped();
                bool res = 
                    
                w->isPointerEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPointerEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: isSinglePointEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::isSinglePointEvent
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
                QEvent* w = getWrapped();
                bool res = 
                    
                w->isSinglePointEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSinglePointEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEvent_Wrapper::clone
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
                QEvent* w = getWrapped();
                QEvent* res = 
                    
                w->clone(
                  
                );
              
            // return type: QEvent*

            return RJSHelper::cpp2js_QEvent(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clone";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
