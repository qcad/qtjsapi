
  // Auto generated
  
  // include header:
  //#include "qkeysequencewrapper.h"
  //#include "header_cpp.h"
  
    #include "qkeysequence_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QKeySequence*> QKeySequence_Wrapper::basecasters_QKeySequence;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QKeySequence
    // Function: fromString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_WrapperSingleton::fromString
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QKeySequence_SequenceFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: str (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QKeySequence::SequenceFormat)
  
QKeySequence::SequenceFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QKeySequence::PortableText;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QKeySequence_SequenceFormat(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QKeySequence res = 
                
                // call static member function:
                QKeySequence::fromString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QKeySequence

            return RJSHelper::cpp2js_QKeySequence(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: listFromString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_WrapperSingleton::listFromString
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QKeySequence_SequenceFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: str (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QKeySequence::SequenceFormat)
  
QKeySequence::SequenceFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QKeySequence::PortableText;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QKeySequence_SequenceFormat(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QKeySequence> res = 
                
                // call static member function:
                QKeySequence::listFromString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<QKeySequence>

            return RJSHelper::cpp2js_QList_QKeySequence(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for listFromString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: listToString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_WrapperSingleton::listToString
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QKeySequence(handler, a1
  )

   && RJSHelper::is_QKeySequence_SequenceFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: list (QList<QKeySequence>)
  
QList<QKeySequence> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QKeySequence(handler, a1);
        
  // convert js parameter to cpp: format (QKeySequence::SequenceFormat)
  
QKeySequence::SequenceFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QKeySequence::PortableText;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QKeySequence_SequenceFormat(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QKeySequence::listToString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for listToString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: mnemonic
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_WrapperSingleton::mnemonic
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
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QKeySequence res = 
                
                // call static member function:
                QKeySequence::mnemonic(
              a1_cpp
    
            );
          
            // return type: QKeySequence

            return RJSHelper::cpp2js_QKeySequence(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mnemonic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: keyBindings
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_WrapperSingleton::keyBindings
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeySequence_StandardKey(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QKeySequence::StandardKey)
  
QKeySequence::StandardKey a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeySequence_StandardKey(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QKeySequence> res = 
                
                // call static member function:
                QKeySequence::keyBindings(
              a1_cpp
    
            );
          
            // return type: QList<QKeySequence>

            return RJSHelper::cpp2js_QList_QKeySequence(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for keyBindings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QKeySequence_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QKeySequence_Wrapper>("org.qcad", 1, 0, "QKeySequence_Wrapper");
        qmlRegisterInterface<QKeySequence_Wrapper>("QKeySequence_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QKeySequence* t = new RJSType_QKeySequence();
          global.setProperty("RJSType_QKeySequence", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QKeySequence::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QKeySequence_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QKeySequence_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QKeySequence_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QKeySequence_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QKeySequence_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QKeySequence_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QKeySequence_WrapperSingleton * s = new QKeySequence_WrapperSingleton(handler);
        engine->globalObject().setProperty("QKeySequence_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QKeySequence.js";
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
    QKeySequence_Wrapper::QKeySequence_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QKeySequence_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QKeySequence_Wrapper::QKeySequence_Wrapper(RJSApi& h, QKeySequence* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QKeySequence_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QKeySequence_Wrapper"));
              //setObjectName("QKeySequence_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QKeySequence_Wrapper::~QKeySequence_Wrapper() {
            //RDebug::decCounter(QString("QKeySequence_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QKeySequence_Wrapper"));

            //qDebug() << "QKeySequence_Wrapper::~QKeySequence_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QKeySequence";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QKeySequence_Wrapper::initConnections() {

          //setObjectName("QKeySequence_Wrapper");

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
  
    // Class: QKeySequence
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QKeySequence_Wrapper::QKeySequence_Wrapper
                
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
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QKeySequence_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QKeySequence_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyCombination(handler, a1
  )

   && RJSHelper::is_QKeyCombination(handler, a2
    , true
  
  )

   && RJSHelper::is_QKeyCombination(handler, a3
    , true
  
  )

   && RJSHelper::is_QKeyCombination(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: k1 (QKeyCombination)
  
QKeyCombination a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeyCombination(handler, a1);
        
  // convert js parameter to cpp: k2 (QKeyCombination)
  
QKeyCombination a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QKeyCombination::fromCombined(0);
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QKeyCombination(handler, a2);
          }
        
  // convert js parameter to cpp: k3 (QKeyCombination)
  
QKeyCombination a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QKeyCombination::fromCombined(0);
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QKeyCombination(handler, a3);
          }
        
  // convert js parameter to cpp: k4 (QKeyCombination)
  
QKeyCombination a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QKeyCombination::fromCombined(0);
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QKeyCombination(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QKeySequence(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QKeySequence_SequenceFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QKeySequence::SequenceFormat)
  
QKeySequence::SequenceFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QKeySequence::NativeText;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QKeySequence_SequenceFormat(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QKeySequence(
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
        RJSHelper::is_QKeySequence(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ks (QKeySequence)
  
QKeySequence a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeySequence(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QKeySequence(
                a1_cpp
    
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
        RJSHelper::is_QKeySequence_StandardKey(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QKeySequence::StandardKey)
  
QKeySequence::StandardKey a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeySequence_StandardKey(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QKeySequence(
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

        
            wrapped = new QKeySequence(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QKeySequence";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QKeySequence
    // Function: count
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_Wrapper::count
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
                QKeySequence* w = getWrapped();
                int res = 
                    
                w->count(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for count";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_Wrapper::isEmpty
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
                QKeySequence* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_Wrapper::
                          // special function name for JS wrapper:
                          toStr
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeySequence_SequenceFormat(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QKeySequence::SequenceFormat)
  
QKeySequence::SequenceFormat a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QKeySequence::PortableText;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QKeySequence_SequenceFormat(handler, a1);
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
                QKeySequence* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: matches
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_Wrapper::matches
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeySequence(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: seq (QKeySequence)
  
QKeySequence a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeySequence(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QKeySequence* w = getWrapped();
                QKeySequence::SequenceMatch res = 
                    
                w->matches(
                  a1_cpp
    
                );
              
            // return type: QKeySequence::SequenceMatch

            return RJSHelper::cpp2js_QKeySequence_SequenceMatch(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for matches";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeySequence(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QKeySequence)
  
QKeySequence a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeySequence(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QKeySequence* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QKeySequence
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QKeySequence_Wrapper::isDetached
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
                QKeySequence* w = getWrapped();
                bool res = 
                    
                w->isDetached(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDetached";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qkeysequence_wrapper.cpp"
  
