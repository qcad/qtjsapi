
  // Auto generated
  
  // include header:
  //#include "qnamespacewrapper.h"
  //#include "header_cpp.h"
  
    #include "qnamespace_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QKeyCombination*> QKeyCombination_Wrapper::basecasters_QKeyCombination;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QKeyCombination
    // Function: fromCombined
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QKeyCombination_WrapperSingleton::fromCombined
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: combined (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QKeyCombination res = 
                
                // call static member function:
                QKeyCombination::fromCombined(
              a1_cpp
    
            );
          
            // return type: QKeyCombination

            return RJSHelper::cpp2js_QKeyCombination(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromCombined";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QKeyCombination_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QKeyCombination_Wrapper>("org.qcad", 1, 0, "QKeyCombination_Wrapper");
        qmlRegisterInterface<QKeyCombination_Wrapper>("QKeyCombination_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QKeyCombination* t = new RJSType_QKeyCombination();
          global.setProperty("RJSType_QKeyCombination", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QKeyCombination::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QKeyCombination_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QKeyCombination_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QKeyCombination_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QKeyCombination_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QKeyCombination_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QKeyCombination_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QKeyCombination_WrapperSingleton * s = new QKeyCombination_WrapperSingleton(handler);
        engine->globalObject().setProperty("QKeyCombination_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QKeyCombination.js";
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
    QKeyCombination_Wrapper::QKeyCombination_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QKeyCombination_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QKeyCombination_Wrapper::QKeyCombination_Wrapper(RJSApi& h, QKeyCombination* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QKeyCombination_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QKeyCombination_Wrapper"));
              //setObjectName("QKeyCombination_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QKeyCombination_Wrapper::~QKeyCombination_Wrapper() {
            //RDebug::decCounter(QString("QKeyCombination_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QKeyCombination_Wrapper"));

            //qDebug() << "QKeyCombination_Wrapper::~QKeyCombination_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QKeyCombination";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QKeyCombination_Wrapper::initConnections() {

          //setObjectName("QKeyCombination_Wrapper");

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
  
    // Class: QKeyCombination
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QKeyCombination_Wrapper::QKeyCombination_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QKeyCombination_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QKeyCombination_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_Modifiers(handler, a1
  )

   && RJSHelper::is_Qt_Key(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: modifiers (Qt::Modifiers)
  
Qt::Modifiers a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_Modifiers(handler, a1);
        
  // convert js parameter to cpp: key (Qt::Key)
  
Qt::Key a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_Key(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QKeyCombination(
                a1_cpp
    , a2_cpp
    
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
        RJSHelper::is_Qt_Key(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (Qt::Key)
  
Qt::Key a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::Key_unknown;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_Qt_Key(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QKeyCombination(
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
   && a2.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QKeyCombination";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QKeyCombination
    // Function: keyboardModifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QKeyCombination_Wrapper::keyboardModifiers
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
                QKeyCombination* w = getWrapped();
                Qt::KeyboardModifiers res = 
                    
                w->keyboardModifiers(
                  
                );
              
            // return type: Qt::KeyboardModifiers

            return RJSHelper::cpp2js_Qt_KeyboardModifiers(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for keyboardModifiers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeyCombination
    // Function: key
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QKeyCombination_Wrapper::key
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
                QKeyCombination* w = getWrapped();
                Qt::Key res = 
                    
                w->key(
                  
                );
              
            // return type: Qt::Key

            return RJSHelper::cpp2js_Qt_Key(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for key";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeyCombination
    // Function: toCombined
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QKeyCombination_Wrapper::toCombined
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
                QKeyCombination* w = getWrapped();
                int res = 
                    
                w->toCombined(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCombined";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qnamespace_wrapper.h"

  
    void Qt_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<Qt_Wrapper>("org.qcad", 1, 0, "Qt_Wrapper");
        qmlRegisterInterface<Qt_Wrapper>("Qt_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // type is namespace, no scriptable type (RJSType_Qt)
        

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&Qt_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("Qt_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&Qt_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("Qt_BaseJs", mob);
      
      QString fileName = ":generator/js/Qt.js";
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
  

  // constructors:
  
#ifndef QT_NO_GESTURES

#endif

#ifndef Q_QDOC

#ifndef QT_NO_GESTURES

#endif

#endif


    // non-static functions:
    
#ifndef QT_NO_GESTURES

#endif

#ifndef Q_QDOC

#ifndef QT_NO_GESTURES

#endif

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
