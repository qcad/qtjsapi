
  // Auto generated
  
  // include header:
  //#include "qsslellipticcurvewrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslellipticcurve_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslEllipticCurve*> QSslEllipticCurve_Wrapper::basecasters_QSslEllipticCurve;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QSslEllipticCurve
    // Function: fromShortName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslEllipticCurve_WrapperSingleton::fromShortName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSslEllipticCurve res = 
                
                // call static member function:
                QSslEllipticCurve::fromShortName(
              a1_cpp
    
            );
          
            // return type: QSslEllipticCurve

            return RJSHelper::cpp2js_QSslEllipticCurve(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromShortName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslEllipticCurve
    // Function: fromLongName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslEllipticCurve_WrapperSingleton::fromLongName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSslEllipticCurve res = 
                
                // call static member function:
                QSslEllipticCurve::fromLongName(
              a1_cpp
    
            );
          
            // return type: QSslEllipticCurve

            return RJSHelper::cpp2js_QSslEllipticCurve(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromLongName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslEllipticCurve
    // Function: equals
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslEllipticCurve_WrapperSingleton::equals
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslEllipticCurve(handler, a1
  )

   && RJSHelper::is_QSslEllipticCurve(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lhs (QSslEllipticCurve)
  
QSslEllipticCurve a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslEllipticCurve(handler, a1);
        
  // convert js parameter to cpp: rhs (QSslEllipticCurve)
  
QSslEllipticCurve a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSslEllipticCurve(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call non-member function:
              operator==(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for equals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslEllipticCurve
    // Function: operator_not_assign
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslEllipticCurve_WrapperSingleton::operator_not_assign
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslEllipticCurve(handler, a1
  )

   && RJSHelper::is_QSslEllipticCurve(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lhs (QSslEllipticCurve)
  
QSslEllipticCurve a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslEllipticCurve(handler, a1);
        
  // convert js parameter to cpp: rhs (QSslEllipticCurve)
  
QSslEllipticCurve a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSslEllipticCurve(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call non-member function:
              operator!=(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_not_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QSslEllipticCurve_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslEllipticCurve_Wrapper>("org.qcad", 1, 0, "QSslEllipticCurve_Wrapper");
        qmlRegisterInterface<QSslEllipticCurve_Wrapper>("QSslEllipticCurve_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslEllipticCurve* t = new RJSType_QSslEllipticCurve();
          global.setProperty("RJSType_QSslEllipticCurve", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslEllipticCurve::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslEllipticCurve_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslEllipticCurve_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslEllipticCurve_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslEllipticCurve_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QSslEllipticCurve_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QSslEllipticCurve_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QSslEllipticCurve_WrapperSingleton * s = new QSslEllipticCurve_WrapperSingleton(handler);
        engine->globalObject().setProperty("QSslEllipticCurve_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QSslEllipticCurve.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QSslEllipticCurve_Wrapper::QSslEllipticCurve_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslEllipticCurve_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslEllipticCurve_Wrapper::QSslEllipticCurve_Wrapper(RJSApi& h, QSslEllipticCurve* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslEllipticCurve_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslEllipticCurve_Wrapper"));
              //setObjectName("QSslEllipticCurve_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslEllipticCurve_Wrapper::~QSslEllipticCurve_Wrapper() {
            //RDebug::decCounter(QString("QSslEllipticCurve_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslEllipticCurve_Wrapper"));

            //qDebug() << "QSslEllipticCurve_Wrapper::~QSslEllipticCurve_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslEllipticCurve";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslEllipticCurve_Wrapper::initConnections() {

          //setObjectName("QSslEllipticCurve_Wrapper");

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
  
    // Class: QSslEllipticCurve
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QSslEllipticCurve_Wrapper::QSslEllipticCurve_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSslEllipticCurve_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslEllipticCurve_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslEllipticCurve(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QSslEllipticCurve";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSslEllipticCurve
    // Function: shortName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslEllipticCurve_Wrapper::shortName
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
                QSslEllipticCurve* w = getWrapped();
                QString res = 
                    
                w->shortName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for shortName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslEllipticCurve
    // Function: longName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslEllipticCurve_Wrapper::longName
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
                QSslEllipticCurve* w = getWrapped();
                QString res = 
                    
                w->longName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for longName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslEllipticCurve
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslEllipticCurve_Wrapper::isValid
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
                QSslEllipticCurve* w = getWrapped();
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
            
    // Class: QSslEllipticCurve
    // Function: isTlsNamedCurve
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslEllipticCurve_Wrapper::isTlsNamedCurve
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
                QSslEllipticCurve* w = getWrapped();
                bool res = 
                    
                w->isTlsNamedCurve(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTlsNamedCurve";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslellipticcurve_wrapper.cpp"
  
