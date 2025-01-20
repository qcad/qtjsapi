
  // Auto generated
  
  // include header:
  //#include "qurlwrapper.h"
  //#include "header_cpp.h"
  
    #include "qurl_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QUrl*> QUrl_Wrapper::basecasters_QUrl;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QUrl
    // Function: fromEncoded
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::fromEncoded
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: url (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::TolerantMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QUrl res = 
                
                // call static member function:
                QUrl::fromEncoded(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QUrl

            return RJSHelper::cpp2js_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromEncoded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: fromUserInput
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::fromUserInput
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_QUrl_UserInputResolutionOptions(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: userInput (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: workingDirectory (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: options (QUrl::UserInputResolutionOptions)
  
QUrl::UserInputResolutionOptions a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QUrl::DefaultResolution;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QUrl_UserInputResolutionOptions(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QUrl res = 
                
                // call static member function:
                QUrl::fromUserInput(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QUrl

            return RJSHelper::cpp2js_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromUserInput";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: fromLocalFile
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::fromLocalFile
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
    
  // convert js parameter to cpp: localfile (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QUrl res = 
                
                // call static member function:
                QUrl::fromLocalFile(
              a1_cpp
    
            );
          
            // return type: QUrl

            return RJSHelper::cpp2js_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromLocalFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: fromPercentEncoding
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::fromPercentEncoding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QUrl::fromPercentEncoding(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromPercentEncoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: toPercentEncoding
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::toPercentEncoding
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QByteArray(handler, a2
    , true
  
  )

   && RJSHelper::is_QByteArray(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: exclude (QByteArray)
  
QByteArray a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QByteArray();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QByteArray(handler, a2);
          }
        
  // convert js parameter to cpp: include (QByteArray)
  
QByteArray a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QByteArray();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QByteArray(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QByteArray res = 
                
                // call static member function:
                QUrl::toPercentEncoding(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toPercentEncoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

    // Class: QUrl
    // Function: fromAce
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::fromAce
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QUrl::fromAce(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromAce";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: toAce
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::toAce
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
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QByteArray res = 
                
                // call static member function:
                QUrl::toAce(
              a1_cpp
    
            );
          
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toAce";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: idnWhitelist
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::idnWhitelist
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QUrl::idnWhitelist(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for idnWhitelist";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: toStringList
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::toStringList
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QUrl(handler, a1
  )

   && RJSHelper::is_QUrl_FormattingOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: uris (QList<QUrl>)
  
QList<QUrl> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QUrl(handler, a1);
        
  // convert js parameter to cpp: options (QUrl::FormattingOptions)
  
QUrl::FormattingOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::FormattingOptions(QUrl::PrettyDecoded);
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_FormattingOptions(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QUrl::toStringList(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toStringList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: fromStringList
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::fromStringList
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: uris (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::TolerantMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QUrl> res = 
                
                // call static member function:
                QUrl::fromStringList(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<QUrl>

            return RJSHelper::cpp2js_QList_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromStringList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setIdnWhitelist
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_WrapperSingleton::setIdnWhitelist
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QUrl::setIdnWhitelist(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIdnWhitelist";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QUrl_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QUrl_Wrapper>("org.qcad", 1, 0, "QUrl_Wrapper");
        qmlRegisterInterface<QUrl_Wrapper>("QUrl_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QUrl* t = new RJSType_QUrl();
          global.setProperty("RJSType_QUrl", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QUrl::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QUrl_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QUrl_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QUrl_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QUrl_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QUrl_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QUrl_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QUrl_WrapperSingleton * s = new QUrl_WrapperSingleton(handler);
        engine->globalObject().setProperty("QUrl_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QUrl.js";
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
    QUrl_Wrapper::QUrl_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QUrl_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QUrl_Wrapper::QUrl_Wrapper(RJSApi& h, QUrl* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QUrl_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QUrl_Wrapper"));
              //setObjectName("QUrl_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QUrl_Wrapper::~QUrl_Wrapper() {
            //RDebug::decCounter(QString("QUrl_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QUrl_Wrapper"));

            //qDebug() << "QUrl_Wrapper::~QUrl_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QUrl";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QUrl_Wrapper::initConnections() {

          //setObjectName("QUrl_Wrapper");

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
  
    // Class: QUrl
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QUrl_Wrapper::QUrl_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QUrl_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QUrl_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: url (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: parsingMode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::TolerantMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QUrl(
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
                  

                  qWarning() << "no matching constructor variant found for QUrl";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif


    // non-static functions:
    
    // Class: QUrl
    // Function: setUrl
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setUrl
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: url (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::TolerantMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setUrl(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUrl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: url
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::url
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_FormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::FormattingOptions)
  
QUrl::FormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FormattingOptions(QUrl::PrettyDecoded);
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_FormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->url(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for url";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::toString
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_FormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::FormattingOptions)
  
QUrl::FormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FormattingOptions(QUrl::PrettyDecoded);
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_FormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
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
            
    // Class: QUrl
    // Function: toDisplayString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::toDisplayString
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_FormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::FormattingOptions)
  
QUrl::FormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FormattingOptions(QUrl::PrettyDecoded);
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_FormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->toDisplayString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toDisplayString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: adjusted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::adjusted
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_FormattingOptions(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::FormattingOptions)
  
QUrl::FormattingOptions a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl_FormattingOptions(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrl* w = getWrapped();
                QUrl res = 
                    
                w->adjusted(
                  a1_cpp
    
                );
              
            // return type: QUrl

            return RJSHelper::cpp2js_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for adjusted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: toEncoded
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::toEncoded
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_FormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::FormattingOptions)
  
QUrl::FormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FullyEncoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_FormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QByteArray res = 
                    
                w->toEncoded(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toEncoded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::isValid
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
                QUrl* w = getWrapped();
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
            
    // Class: QUrl
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::errorString
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->errorString(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for errorString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::isEmpty
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
                QUrl* w = getWrapped();
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
            
    // Class: QUrl
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::clear
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
                QUrl* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setScheme
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setScheme
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
    
  // convert js parameter to cpp: scheme (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrl* w = getWrapped();
                
                w->setScheme(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScheme";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: scheme
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::scheme
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->scheme(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scheme";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setAuthority
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setAuthority
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: authority (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::TolerantMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setAuthority(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAuthority";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: authority
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::authority
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::PrettyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->authority(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for authority";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setUserInfo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setUserInfo
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: userInfo (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::TolerantMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setUserInfo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUserInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: userInfo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::userInfo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::PrettyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->userInfo(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for userInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setUserName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setUserName
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: userName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::DecodedMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setUserName(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUserName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: userName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::userName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FullyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->userName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for userName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setPassword
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setPassword
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: password (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::DecodedMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setPassword(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPassword";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: password
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::password
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FullyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->password(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for password";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setHost
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setHost
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: host (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::DecodedMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setHost(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHost";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: host
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::host
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FullyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->host(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for host";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setPort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setPort
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
    
  // convert js parameter to cpp: port (int)
  
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
                QUrl* w = getWrapped();
                
                w->setPort(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: port
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::port
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: defaultPort (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = -1;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                QUrl* w = getWrapped();
                int res = 
                    
                w->port(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for port";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setPath
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setPath
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::DecodedMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setPath(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: path
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::path
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FullyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->path(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for path";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::fileName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::FullyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->fileName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: hasQuery
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::hasQuery
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
                QUrl* w = getWrapped();
                bool res = 
                    
                w->hasQuery(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasQuery";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setQuery
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setQuery
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: query (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::TolerantMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setQuery(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuery";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: query
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::query
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::PrettyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->query(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for query";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: hasFragment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::hasFragment
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
                QUrl* w = getWrapped();
                bool res = 
                    
                w->hasFragment(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasFragment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: fragment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::fragment
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::PrettyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->fragment(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fragment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: setFragment
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::setFragment
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

   && RJSHelper::is_QUrl_ParsingMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fragment (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QUrl::ParsingMode)
  
QUrl::ParsingMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::TolerantMode;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ParsingMode(handler, a2);
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
                QUrl* w = getWrapped();
                
                w->setFragment(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFragment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: resolved
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::resolved
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: relative (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrl* w = getWrapped();
                QUrl res = 
                    
                w->resolved(
                  a1_cpp
    
                );
              
            // return type: QUrl

            return RJSHelper::cpp2js_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for resolved";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: isRelative
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::isRelative
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
                QUrl* w = getWrapped();
                bool res = 
                    
                w->isRelative(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRelative";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: isParentOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::isParentOf
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: url (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrl* w = getWrapped();
                bool res = 
                    
                w->isParentOf(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: isLocalFile
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::isLocalFile
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
                QUrl* w = getWrapped();
                bool res = 
                    
                w->isLocalFile(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLocalFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: toLocalFile
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::toLocalFile
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
                QUrl* w = getWrapped();
                QString res = 
                    
                w->toLocalFile(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toLocalFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: detach
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::detach
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
                QUrl* w = getWrapped();
                
                w->detach(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for detach";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrl
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::isDetached
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
                QUrl* w = getWrapped();
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
            
    // Class: QUrl
    // Function: matches
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrl_Wrapper::matches
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

   && RJSHelper::is_QUrl_FormattingOptions(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: url (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        
  // convert js parameter to cpp: options (QUrl::FormattingOptions)
  
QUrl::FormattingOptions a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QUrl_FormattingOptions(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrl* w = getWrapped();
                bool res = 
                    
                w->matches(
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

                  qWarning() << "no matching function variant found for matches";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qurl_wrapper.cpp"
  
