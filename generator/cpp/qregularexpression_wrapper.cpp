
  // Auto generated
  
  // include header:
  //#include "qregularexpressionwrapper.h"
  //#include "header_cpp.h"
  
    #include "qregularexpression_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#if QT_STRINGVIEW_LEVEL<2

    // Class: QRegularExpression
    // Function: escape
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_WrapperSingleton::escape
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
    
  // convert js parameter to cpp: str (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QRegularExpression::escape(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for escape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: wildcardToRegularExpression
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_WrapperSingleton::wildcardToRegularExpression
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

   && RJSHelper::is_QRegularExpression_WildcardConversionOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: str (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: options (QRegularExpression::WildcardConversionOptions)
  
QRegularExpression::WildcardConversionOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QRegularExpression::DefaultWildcardConversion;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QRegularExpression_WildcardConversionOptions(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QRegularExpression::wildcardToRegularExpression(
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

                  qWarning() << "no matching function variant found for wildcardToRegularExpression";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: anchoredPattern
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_WrapperSingleton::anchoredPattern
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
    
  // convert js parameter to cpp: expression (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QRegularExpression::anchoredPattern(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for anchoredPattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    void QRegularExpression_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QRegularExpression_Wrapper>("org.qcad", 1, 0, "QRegularExpression_Wrapper");
        qmlRegisterInterface<QRegularExpression_Wrapper>("QRegularExpression_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QRegularExpression* t = new RJSType_QRegularExpression();
          global.setProperty("RJSType_QRegularExpression", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QRegularExpression::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QRegularExpression_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QRegularExpression_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QRegularExpression_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QRegularExpression_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QRegularExpression_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QRegularExpression_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QRegularExpression_WrapperSingleton * s = new QRegularExpression_WrapperSingleton(handler);
        engine->globalObject().setProperty("QRegularExpression_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QRegularExpression.js";
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
    QRegularExpression_Wrapper::QRegularExpression_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QRegularExpression_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QRegularExpression_Wrapper::QRegularExpression_Wrapper(RJSApi& h, QRegularExpression* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QRegularExpression_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QRegularExpression_Wrapper"));
              //setObjectName("QRegularExpression_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QRegularExpression_Wrapper::~QRegularExpression_Wrapper() {
            //RDebug::decCounter(QString("QRegularExpression_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QRegularExpression_Wrapper"));

            //qDebug() << "QRegularExpression_Wrapper::~QRegularExpression_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QRegularExpression";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QRegularExpression_Wrapper::initConnections() {

          //setObjectName("QRegularExpression_Wrapper");

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
  
    // Class: QRegularExpression
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QRegularExpression_Wrapper::QRegularExpression_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QRegularExpression_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QRegularExpression_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QRegularExpression_PatternOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pattern (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: options (QRegularExpression::PatternOptions)
  
QRegularExpression::PatternOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QRegularExpression::NoPatternOption;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QRegularExpression_PatternOptions(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegularExpression(
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
        RJSHelper::is_QRegularExpression(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: re (QRegularExpression)
  
QRegularExpression a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegularExpression(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegularExpression(
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
        RJSHelper::is_QRegularExpression(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: re (QRegularExpression)
  
QRegularExpression a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegularExpression(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegularExpression(
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

        
            wrapped = new QRegularExpression(
                
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
                  

                  qWarning() << "no matching constructor variant found for QRegularExpression";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

#endif


    // non-static functions:
    
    // Class: QRegularExpression
    // Function: patternOptions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::patternOptions
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
                QRegularExpression* w = getWrapped();
                QRegularExpression::PatternOptions res = 
                    
                w->patternOptions(
                  
                );
              
            // return type: QRegularExpression::PatternOptions

            return RJSHelper::cpp2js_QRegularExpression_PatternOptions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for patternOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: setPatternOptions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::setPatternOptions
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegularExpression_PatternOptions(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QRegularExpression::PatternOptions)
  
QRegularExpression::PatternOptions a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegularExpression_PatternOptions(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegularExpression* w = getWrapped();
                
                w->setPatternOptions(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPatternOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegularExpression(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QRegularExpression)
  
QRegularExpression a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegularExpression(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegularExpression* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: pattern
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::pattern
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
                QRegularExpression* w = getWrapped();
                QString res = 
                    
                w->pattern(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: setPattern
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::setPattern
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
    
  // convert js parameter to cpp: pattern (QString)
  
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
                QRegularExpression* w = getWrapped();
                
                w->setPattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::isValid
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
                QRegularExpression* w = getWrapped();
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
            
    // Class: QRegularExpression
    // Function: patternErrorOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::patternErrorOffset
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
                QRegularExpression* w = getWrapped();
                qsizetype res = 
                    
                w->patternErrorOffset(
                  
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for patternErrorOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::errorString
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
                QRegularExpression* w = getWrapped();
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
            
    // Class: QRegularExpression
    // Function: captureCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::captureCount
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
                QRegularExpression* w = getWrapped();
                int res = 
                    
                w->captureCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for captureCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: namedCaptureGroups
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::namedCaptureGroups
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
                QRegularExpression* w = getWrapped();
                QStringList res = 
                    
                w->namedCaptureGroups(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for namedCaptureGroups";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: match
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::match
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_qsizetype(handler, a2
    , true
  
  )

   && RJSHelper::is_QRegularExpression_MatchType(handler, a3
    , true
  
  )

   && RJSHelper::is_QRegularExpression_MatchOptions(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: subject (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: offset (qsizetype)
  
qsizetype a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_qsizetype(handler, a2);
          }
        
  // convert js parameter to cpp: matchType (QRegularExpression::MatchType)
  
QRegularExpression::MatchType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QRegularExpression::NormalMatch;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QRegularExpression_MatchType(handler, a3);
          }
        
  // convert js parameter to cpp: matchOptions (QRegularExpression::MatchOptions)
  
QRegularExpression::MatchOptions a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QRegularExpression::NoMatchOption;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QRegularExpression_MatchOptions(handler, a4);
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
                QRegularExpression* w = getWrapped();
                QRegularExpressionMatch res = 
                    
                w->match(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QRegularExpressionMatch

            return RJSHelper::cpp2js_QRegularExpressionMatch(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for match";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpression
    // Function: optimize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpression_Wrapper::optimize
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
                QRegularExpression* w = getWrapped();
                
                w->optimize(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for optimize";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qregularexpression_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

    void QRegularExpressionMatch_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QRegularExpressionMatch_Wrapper>("org.qcad", 1, 0, "QRegularExpressionMatch_Wrapper");
        qmlRegisterInterface<QRegularExpressionMatch_Wrapper>("QRegularExpressionMatch_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QRegularExpressionMatch* t = new RJSType_QRegularExpressionMatch();
          global.setProperty("RJSType_QRegularExpressionMatch", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QRegularExpressionMatch::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QRegularExpressionMatch_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QRegularExpressionMatch_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QRegularExpressionMatch_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QRegularExpressionMatch_BaseJs", mob);
      
      QString fileName = ":generator/js/QRegularExpressionMatch.js";
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
    QRegularExpressionMatch_Wrapper::QRegularExpressionMatch_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QRegularExpressionMatch_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QRegularExpressionMatch_Wrapper::QRegularExpressionMatch_Wrapper(RJSApi& h, QRegularExpressionMatch* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QRegularExpressionMatch_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QRegularExpressionMatch_Wrapper"));
              //setObjectName("QRegularExpressionMatch_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QRegularExpressionMatch_Wrapper::~QRegularExpressionMatch_Wrapper() {
            //RDebug::decCounter(QString("QRegularExpressionMatch_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QRegularExpressionMatch_Wrapper"));

            //qDebug() << "QRegularExpressionMatch_Wrapper::~QRegularExpressionMatch_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QRegularExpressionMatch";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QRegularExpressionMatch_Wrapper::initConnections() {

          //setObjectName("QRegularExpressionMatch_Wrapper");

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
  
    // Class: QRegularExpressionMatch
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QRegularExpressionMatch_Wrapper::QRegularExpressionMatch_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QRegularExpressionMatch_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QRegularExpressionMatch_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QRegularExpressionMatch(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: match (QRegularExpressionMatch)
  
QRegularExpressionMatch a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegularExpressionMatch(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegularExpressionMatch(
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
        RJSHelper::is_QRegularExpressionMatch(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: match (QRegularExpressionMatch)
  
QRegularExpressionMatch a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegularExpressionMatch(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegularExpressionMatch(
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

        
            wrapped = new QRegularExpressionMatch(
                
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
                  

                  qWarning() << "no matching constructor variant found for QRegularExpressionMatch";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif


    // non-static functions:
    
    // Class: QRegularExpressionMatch
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegularExpressionMatch(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QRegularExpressionMatch)
  
QRegularExpressionMatch a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegularExpressionMatch(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegularExpressionMatch* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: regularExpression
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::regularExpression
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
                QRegularExpressionMatch* w = getWrapped();
                QRegularExpression res = 
                    
                w->regularExpression(
                  
                );
              
            // return type: QRegularExpression

            return RJSHelper::cpp2js_QRegularExpression(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for regularExpression";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: matchType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::matchType
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
                QRegularExpressionMatch* w = getWrapped();
                QRegularExpression::MatchType res = 
                    
                w->matchType(
                  
                );
              
            // return type: QRegularExpression::MatchType

            return RJSHelper::cpp2js_QRegularExpression_MatchType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for matchType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: matchOptions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::matchOptions
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
                QRegularExpressionMatch* w = getWrapped();
                QRegularExpression::MatchOptions res = 
                    
                w->matchOptions(
                  
                );
              
            // return type: QRegularExpression::MatchOptions

            return RJSHelper::cpp2js_QRegularExpression_MatchOptions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for matchOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: hasMatch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::hasMatch
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
                QRegularExpressionMatch* w = getWrapped();
                bool res = 
                    
                w->hasMatch(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasMatch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: hasPartialMatch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::hasPartialMatch
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
                QRegularExpressionMatch* w = getWrapped();
                bool res = 
                    
                w->hasPartialMatch(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasPartialMatch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::isValid
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
                QRegularExpressionMatch* w = getWrapped();
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
            
    // Class: QRegularExpressionMatch
    // Function: lastCapturedIndex
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::lastCapturedIndex
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
                QRegularExpressionMatch* w = getWrapped();
                int res = 
                    
                w->lastCapturedIndex(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lastCapturedIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: captured
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::captured
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
    
  // convert js parameter to cpp: nth (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
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
                QRegularExpressionMatch* w = getWrapped();
                QString res = 
                    
                w->captured(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegularExpressionMatch* w = getWrapped();
                QString res = 
                    
                w->captured(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for captured";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

#endif

    // Class: QRegularExpressionMatch
    // Function: capturedTexts
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::capturedTexts
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
                QRegularExpressionMatch* w = getWrapped();
                QStringList res = 
                    
                w->capturedTexts(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capturedTexts";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: capturedStart
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::capturedStart
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
    
  // convert js parameter to cpp: nth (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
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
                QRegularExpressionMatch* w = getWrapped();
                qsizetype res = 
                    
                w->capturedStart(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegularExpressionMatch* w = getWrapped();
                qsizetype res = 
                    
                w->capturedStart(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capturedStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: capturedLength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::capturedLength
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
    
  // convert js parameter to cpp: nth (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
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
                QRegularExpressionMatch* w = getWrapped();
                qsizetype res = 
                    
                w->capturedLength(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegularExpressionMatch* w = getWrapped();
                qsizetype res = 
                    
                w->capturedLength(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capturedLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegularExpressionMatch
    // Function: capturedEnd
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegularExpressionMatch_Wrapper::capturedEnd
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
    
  // convert js parameter to cpp: nth (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
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
                QRegularExpressionMatch* w = getWrapped();
                qsizetype res = 
                    
                w->capturedEnd(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegularExpressionMatch* w = getWrapped();
                qsizetype res = 
                    
                w->capturedEnd(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capturedEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  