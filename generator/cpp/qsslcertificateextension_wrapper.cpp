
  // Auto generated
  
  // include header:
  //#include "qsslcertificateextensionwrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslcertificateextension_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslCertificateExtension*> QSslCertificateExtension_Wrapper::basecasters_QSslCertificateExtension;
    
    // static functions implementation in singleton wrapper:
    
    void QSslCertificateExtension_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslCertificateExtension_Wrapper>("org.qcad", 1, 0, "QSslCertificateExtension_Wrapper");
        qmlRegisterInterface<QSslCertificateExtension_Wrapper>("QSslCertificateExtension_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslCertificateExtension* t = new RJSType_QSslCertificateExtension();
          global.setProperty("RJSType_QSslCertificateExtension", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslCertificateExtension::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslCertificateExtension_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslCertificateExtension_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslCertificateExtension_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslCertificateExtension_BaseJs", mob);
      
      QString fileName = ":generator/js/QSslCertificateExtension.js";
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
    QSslCertificateExtension_Wrapper::QSslCertificateExtension_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslCertificateExtension_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslCertificateExtension_Wrapper::QSslCertificateExtension_Wrapper(RJSApi& h, QSslCertificateExtension* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslCertificateExtension_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslCertificateExtension_Wrapper"));
              //setObjectName("QSslCertificateExtension_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslCertificateExtension_Wrapper::~QSslCertificateExtension_Wrapper() {
            //RDebug::decCounter(QString("QSslCertificateExtension_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslCertificateExtension_Wrapper"));

            //qDebug() << "QSslCertificateExtension_Wrapper::~QSslCertificateExtension_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslCertificateExtension";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslCertificateExtension_Wrapper::initConnections() {

          //setObjectName("QSslCertificateExtension_Wrapper");

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
  
    // Class: QSslCertificateExtension
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QSslCertificateExtension_Wrapper::QSslCertificateExtension_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSslCertificateExtension_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslCertificateExtension_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificateExtension(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslCertificateExtension)
  
QSslCertificateExtension a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificateExtension(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslCertificateExtension(
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

        
              wrapped = new QSslCertificateExtension(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QSslCertificateExtension";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSslCertificateExtension
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificateExtension_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificateExtension(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslCertificateExtension)
  
QSslCertificateExtension a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificateExtension(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslCertificateExtension* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QSslCertificateExtension* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QSslCertificateExtension&

            return RJSHelper::cpp2js_QSslCertificateExtension(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificateExtension
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificateExtension_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificateExtension(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslCertificateExtension)
  
QSslCertificateExtension a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificateExtension(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslCertificateExtension* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificateExtension
    // Function: oid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificateExtension_Wrapper::oid
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
                QSslCertificateExtension* w = getWrapped();
                QString res = 
                    
                w->oid(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for oid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificateExtension
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificateExtension_Wrapper::name
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
                QSslCertificateExtension* w = getWrapped();
                QString res = 
                    
                w->name(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificateExtension
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificateExtension_Wrapper::value
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
                QSslCertificateExtension* w = getWrapped();
                QVariant res = 
                    
                w->value(
                  
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for value";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificateExtension
    // Function: isCritical
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificateExtension_Wrapper::isCritical
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
                QSslCertificateExtension* w = getWrapped();
                bool res = 
                    
                w->isCritical(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCritical";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificateExtension
    // Function: isSupported
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificateExtension_Wrapper::isSupported
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
                QSslCertificateExtension* w = getWrapped();
                bool res = 
                    
                w->isSupported(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSupported";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslcertificateextension_wrapper.cpp"
  
