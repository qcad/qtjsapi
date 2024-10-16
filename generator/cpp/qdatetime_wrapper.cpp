
  // Auto generated
  
  // include header:
  //#include "qdatetimewrapper.h"
  //#include "header_cpp.h"
  
    #include "qdatetime_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QDate*> QDate_Wrapper::basecasters_QDate;
    
    // static functions implementation in singleton wrapper:
    
#if QT_CONFIG(datestring)

#endif

#if QT_VERSION<QT_VERSION_CHECK(6,0,0)

#endif

    // Class: QDate
    // Function: currentDate
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_WrapperSingleton::currentDate
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QDate res = 
                
                // call static member function:
                QDate::currentDate(
              
            );
          
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentDate";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

    // Class: QDate
    // Function: fromString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDate_WrapperSingleton::fromString
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

   && RJSHelper::is_Qt_DateFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: f (Qt::DateFormat)
  
Qt::DateFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::TextDate;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_DateFormat(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDate res = 
                
                // call static member function:
                QDate::fromString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDate res = 
                
                // call static member function:
                QDate::fromString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromString";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QDate
    // Function: isLeapYear
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDate_WrapperSingleton::isLeapYear
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
    
  // convert js parameter to cpp: year (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QDate::isLeapYear(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLeapYear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: fromJulianDay
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDate_WrapperSingleton::fromJulianDay
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: jd_ (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDate res = 
                
                // call static member function:
                QDate::fromJulianDay(
              a1_cpp
    
            );
          
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromJulianDay";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DATASTREAM

#endif

    void QDate_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QDate_Wrapper>("org.qcad", 1, 0, "QDate_Wrapper");
        qmlRegisterInterface<QDate_Wrapper>("QDate_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QDate* t = new RJSType_QDate();
          global.setProperty("RJSType_QDate", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QDate::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QDate_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QDate_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QDate_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QDate_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QDate_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QDate_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QDate_WrapperSingleton * s = new QDate_WrapperSingleton(handler);
        engine->globalObject().setProperty("QDate_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QDate.js";
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
    QDate_Wrapper::QDate_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QDate_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QDate_Wrapper::QDate_Wrapper(RJSApi& h, QDate* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QDate_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QDate_Wrapper"));
              //setObjectName("QDate_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QDate_Wrapper::~QDate_Wrapper() {
            //RDebug::decCounter(QString("QDate_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QDate_Wrapper"));

            //qDebug() << "QDate_Wrapper::~QDate_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QDate";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QDate_Wrapper::initConnections() {

          //setObjectName("QDate_Wrapper");

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
  
    // Class: QDate
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QDate_Wrapper::QDate_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QDate_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QDate_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: y (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: d (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QDate(
                a1_cpp
    , a2_cpp
    , a3_cpp
    
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

        
            wrapped = new QDate(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QDate";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_CONFIG(datestring)

#endif

#if QT_VERSION<QT_VERSION_CHECK(6,0,0)

#endif

#if QT_CONFIG(datestring)

#endif

#ifndef QT_NO_DATASTREAM

#endif


    // non-static functions:
    
    // Class: QDate
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::isNull
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
                QDate* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::isValid
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: y (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: d (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDate* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
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
                QDate* w = getWrapped();
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
            
    // Class: QDate
    // Function: year
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::year
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
                QDate* w = getWrapped();
                int res = 
                    
                w->year(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for year";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: month
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::month
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
                QDate* w = getWrapped();
                int res = 
                    
                w->month(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for month";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: day
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::day
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
                QDate* w = getWrapped();
                int res = 
                    
                w->day(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for day";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: dayOfWeek
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::dayOfWeek
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
                QDate* w = getWrapped();
                int res = 
                    
                w->dayOfWeek(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dayOfWeek";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: dayOfYear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::dayOfYear
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
                QDate* w = getWrapped();
                int res = 
                    
                w->dayOfYear(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dayOfYear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: daysInMonth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::daysInMonth
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
                QDate* w = getWrapped();
                int res = 
                    
                w->daysInMonth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for daysInMonth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: daysInYear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::daysInYear
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
                QDate* w = getWrapped();
                int res = 
                    
                w->daysInYear(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for daysInYear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: startOfDay
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::startOfDay
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
        RJSHelper::is_Qt_TimeSpec(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spec (Qt::TimeSpec)
  
Qt::TimeSpec a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::LocalTime;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_Qt_TimeSpec(handler, a1);
          }
        
  // convert js parameter to cpp: offsetSeconds (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
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
                QDate* w = getWrapped();
                QDateTime res = 
                    
                w->startOfDay(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QTimeZone(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: zone (QTimeZone)
  
QTimeZone a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTimeZone(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDate* w = getWrapped();
                QDateTime res = 
                    
                w->startOfDay(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startOfDay";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: endOfDay
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::endOfDay
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
        RJSHelper::is_Qt_TimeSpec(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spec (Qt::TimeSpec)
  
Qt::TimeSpec a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::LocalTime;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_Qt_TimeSpec(handler, a1);
          }
        
  // convert js parameter to cpp: offsetSeconds (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
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
                QDate* w = getWrapped();
                QDateTime res = 
                    
                w->endOfDay(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QTimeZone(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: zone (QTimeZone)
  
QTimeZone a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTimeZone(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDate* w = getWrapped();
                QDateTime res = 
                    
                w->endOfDay(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endOfDay";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

    // Class: QDate
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::toString
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_DateFormat(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (Qt::DateFormat)
  
Qt::DateFormat a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::TextDate;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_Qt_DateFormat(handler, a1);
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
                QDate* w = getWrapped();
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

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QString)
  
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
                QDate* w = getWrapped();
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
            
#endif

    // Class: QDate
    // Function: setDate
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::setDate
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: year (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: month (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: day (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDate* w = getWrapped();
                bool res = 
                    
                w->setDate(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setDate";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_VERSION<QT_VERSION_CHECK(6,0,0)

#endif

    // Class: QDate
    // Function: addDays
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::addDays
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: days (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDate* w = getWrapped();
                QDate res = 
                    
                w->addDays(
                  a1_cpp
    
                );
              
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addDays";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: addMonths
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::addMonths
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
    
  // convert js parameter to cpp: months (int)
  
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
                QDate* w = getWrapped();
                QDate res = 
                    
                w->addMonths(
                  a1_cpp
    
                );
              
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addMonths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: addYears
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::addYears
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
    
  // convert js parameter to cpp: years (int)
  
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
                QDate* w = getWrapped();
                QDate res = 
                    
                w->addYears(
                  a1_cpp
    
                );
              
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addYears";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDate
    // Function: daysTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::daysTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QDate)
  
QDate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDate* w = getWrapped();
                qint64 res = 
                    
                w->daysTo(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for daysTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

#endif

    // Class: QDate
    // Function: toJulianDay
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDate_Wrapper::toJulianDay
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
                QDate* w = getWrapped();
                qint64 res = 
                    
                w->toJulianDay(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toJulianDay";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DATASTREAM

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qdatetime_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QTime*> QTime_Wrapper::basecasters_QTime;
    
    // static functions implementation in singleton wrapper:
    
#if QT_CONFIG(datestring)

#if QT_STRINGVIEW_LEVEL<2

#endif

#endif

    // Class: QTime
    // Function: fromMSecsSinceStartOfDay
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTime_WrapperSingleton::fromMSecsSinceStartOfDay
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
    
  // convert js parameter to cpp: msecs (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QTime res = 
                
                // call static member function:
                QTime::fromMSecsSinceStartOfDay(
              a1_cpp
    
            );
          
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromMSecsSinceStartOfDay";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: currentTime
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTime_WrapperSingleton::currentTime
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QTime res = 
                
                // call static member function:
                QTime::currentTime(
              
            );
          
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

    // Class: QTime
    // Function: fromString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTime_WrapperSingleton::fromString
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

   && RJSHelper::is_Qt_DateFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: f (Qt::DateFormat)
  
Qt::DateFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::TextDate;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_DateFormat(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QTime res = 
                
                // call static member function:
                QTime::fromString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QTime res = 
                
                // call static member function:
                QTime::fromString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromString";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QTime
    // Function: operator_lessthan
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTime_WrapperSingleton::operator_lessthan
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTime(handler, a1
  )

   && RJSHelper::is_QTime(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lhs (QTime)
  
QTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTime(handler, a1);
        
  // convert js parameter to cpp: rhs (QTime)
  
QTime a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTime(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call non-member function:
              operator<(
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

                  qWarning() << "no matching function variant found for operator_lessthan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QTime_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTime_Wrapper>("org.qcad", 1, 0, "QTime_Wrapper");
        qmlRegisterInterface<QTime_Wrapper>("QTime_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QTime* t = new RJSType_QTime();
          global.setProperty("RJSType_QTime", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QTime::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTime_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTime_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTime_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTime_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QTime_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QTime_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QTime_WrapperSingleton * s = new QTime_WrapperSingleton(handler);
        engine->globalObject().setProperty("QTime_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QTime.js";
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
    QTime_Wrapper::QTime_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTime_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTime_Wrapper::QTime_Wrapper(RJSApi& h, QTime* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTime_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTime_Wrapper"));
              //setObjectName("QTime_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTime_Wrapper::~QTime_Wrapper() {
            //RDebug::decCounter(QString("QTime_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTime_Wrapper"));

            //qDebug() << "QTime_Wrapper::~QTime_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTime";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTime_Wrapper::initConnections() {

          //setObjectName("QTime_Wrapper");

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
  
    // Class: QTime
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QTime_Wrapper::QTime_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QTime_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTime_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: s (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        
  // convert js parameter to cpp: ms (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTime(
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

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTime(
                
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
                  

                  qWarning() << "no matching constructor variant found for QTime";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_CONFIG(datestring)

#if QT_STRINGVIEW_LEVEL<2

#endif

#endif

#if QT_CONFIG(datestring)

#endif


    // non-static functions:
    
    // Class: QTime
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::isNull
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
                QTime* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::isValid
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
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: s (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: ms (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
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
                QTime* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
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
                QTime* w = getWrapped();
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
            
    // Class: QTime
    // Function: hour
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::hour
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
                QTime* w = getWrapped();
                int res = 
                    
                w->hour(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hour";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: minute
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::minute
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
                QTime* w = getWrapped();
                int res = 
                    
                w->minute(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: second
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::second
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
                QTime* w = getWrapped();
                int res = 
                    
                w->second(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for second";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: msec
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::msec
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
                QTime* w = getWrapped();
                int res = 
                    
                w->msec(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for msec";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

    // Class: QTime
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::toString
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_DateFormat(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (Qt::DateFormat)
  
Qt::DateFormat a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::TextDate;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_Qt_DateFormat(handler, a1);
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
                QTime* w = getWrapped();
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

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QString)
  
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
                QTime* w = getWrapped();
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
            
#if QT_STRINGVIEW_LEVEL<2

#endif

#endif

    // Class: QTime
    // Function: setHMS
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::setHMS
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
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: s (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: ms (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
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
                QTime* w = getWrapped();
                bool res = 
                    
                w->setHMS(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setHMS";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: addSecs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::addSecs
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
    
  // convert js parameter to cpp: secs (int)
  
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
                QTime* w = getWrapped();
                QTime res = 
                    
                w->addSecs(
                  a1_cpp
    
                );
              
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addSecs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: secsTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::secsTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QTime)
  
QTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTime* w = getWrapped();
                int res = 
                    
                w->secsTo(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for secsTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: addMSecs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::addMSecs
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
    
  // convert js parameter to cpp: ms (int)
  
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
                QTime* w = getWrapped();
                QTime res = 
                    
                w->addMSecs(
                  a1_cpp
    
                );
              
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addMSecs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: msecsTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::msecsTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QTime)
  
QTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTime* w = getWrapped();
                int res = 
                    
                w->msecsTo(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for msecsTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTime
    // Function: msecsSinceStartOfDay
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTime_Wrapper::msecsSinceStartOfDay
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
                QTime* w = getWrapped();
                int res = 
                    
                w->msecsSinceStartOfDay(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for msecsSinceStartOfDay";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qdatetime_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QDateTime*> QDateTime_Wrapper::basecasters_QDateTime;
    
    // static functions implementation in singleton wrapper:
    
#if Q_BYTE_ORDER==Q_LITTLE_ENDIAN

#endif

#if Q_BYTE_ORDER==Q_BIG_ENDIAN

#endif

#if QT_CONFIG(timezone)

#endif

#if QT_CONFIG(timezone)

#endif

#if QT_CONFIG(timezone)

#endif

#if QT_CONFIG(datestring)

#if QT_STRINGVIEW_LEVEL<2

#endif

#endif

#if QT_CONFIG(timezone)

#endif

    // Class: QDateTime
    // Function: currentDateTime
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_WrapperSingleton::currentDateTime
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::currentDateTime(
              
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentDateTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: currentDateTimeUtc
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_WrapperSingleton::currentDateTimeUtc
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::currentDateTimeUtc(
              
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentDateTimeUtc";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

    // Class: QDateTime
    // Function: fromString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDateTime_WrapperSingleton::fromString
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

   && RJSHelper::is_Qt_DateFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: f (Qt::DateFormat)
  
Qt::DateFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::TextDate;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_DateFormat(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::fromString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::fromString(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromString";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QDateTime
    // Function: fromMSecsSinceEpoch
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QDateTime_WrapperSingleton::fromMSecsSinceEpoch
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
        RJSHelper::is_qint64(handler, a1
  )

   && RJSHelper::is_Qt_TimeSpec(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        
  // convert js parameter to cpp: spec (Qt::TimeSpec)
  
Qt::TimeSpec a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_TimeSpec(handler, a2);
        
  // convert js parameter to cpp: offsetFromUtc (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::fromMSecsSinceEpoch(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

   && RJSHelper::is_QTimeZone(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        
  // convert js parameter to cpp: timeZone (QTimeZone)
  
QTimeZone a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTimeZone(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::fromMSecsSinceEpoch(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::fromMSecsSinceEpoch(
              a1_cpp
    
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromMSecsSinceEpoch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: fromSecsSinceEpoch
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QDateTime_WrapperSingleton::fromSecsSinceEpoch
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
        RJSHelper::is_qint64(handler, a1
  )

   && RJSHelper::is_Qt_TimeSpec(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: secs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        
  // convert js parameter to cpp: spe (Qt::TimeSpec)
  
Qt::TimeSpec a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::LocalTime;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_TimeSpec(handler, a2);
          }
        
  // convert js parameter to cpp: offsetFromUtc (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::fromSecsSinceEpoch(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

   && RJSHelper::is_QTimeZone(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: secs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        
  // convert js parameter to cpp: timeZone (QTimeZone)
  
QTimeZone a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTimeZone(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QDateTime res = 
                
                // call static member function:
                QDateTime::fromSecsSinceEpoch(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromSecsSinceEpoch";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(timezone)

#endif

    // Class: QDateTime
    // Function: currentMSecsSinceEpoch
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_WrapperSingleton::currentMSecsSinceEpoch
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            qint64 res = 
                
                // call static member function:
                QDateTime::currentMSecsSinceEpoch(
              
            );
          
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentMSecsSinceEpoch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: currentSecsSinceEpoch
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_WrapperSingleton::currentSecsSinceEpoch
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            qint64 res = 
                
                // call static member function:
                QDateTime::currentSecsSinceEpoch(
              
            );
          
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentSecsSinceEpoch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: operator_lessthan
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDateTime_WrapperSingleton::operator_lessthan
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

   && RJSHelper::is_QDateTime(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lhs (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        
  // convert js parameter to cpp: rhs (QDateTime)
  
QDateTime a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QDateTime(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call non-member function:
              operator<(
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

                  qWarning() << "no matching function variant found for operator_lessthan";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

#ifndef QT_NO_DATASTREAM

#endif

#if !defined(QT_NO_DEBUG_STREAM)&&QT_CONFIG(datestring)

#endif

    void QDateTime_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QDateTime_Wrapper>("org.qcad", 1, 0, "QDateTime_Wrapper");
        qmlRegisterInterface<QDateTime_Wrapper>("QDateTime_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QDateTime* t = new RJSType_QDateTime();
          global.setProperty("RJSType_QDateTime", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QDateTime::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QDateTime_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QDateTime_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QDateTime_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QDateTime_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QDateTime_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QDateTime_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QDateTime_WrapperSingleton * s = new QDateTime_WrapperSingleton(handler);
        engine->globalObject().setProperty("QDateTime_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QDateTime.js";
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
    QDateTime_Wrapper::QDateTime_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QDateTime_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QDateTime_Wrapper::QDateTime_Wrapper(RJSApi& h, QDateTime* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QDateTime_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QDateTime_Wrapper"));
              //setObjectName("QDateTime_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QDateTime_Wrapper::~QDateTime_Wrapper() {
            //RDebug::decCounter(QString("QDateTime_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QDateTime_Wrapper"));

            //qDebug() << "QDateTime_Wrapper::~QDateTime_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QDateTime";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QDateTime_Wrapper::initConnections() {

          //setObjectName("QDateTime_Wrapper");

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
  
#if Q_BYTE_ORDER==Q_LITTLE_ENDIAN

#endif

#if Q_BYTE_ORDER==Q_BIG_ENDIAN

#endif

    // Class: QDateTime
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QDateTime_Wrapper::QDateTime_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QDateTime_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QDateTime_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QDateTime(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QDateTime";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_CONFIG(timezone)

#endif

#if QT_CONFIG(timezone)

#endif

#if QT_CONFIG(timezone)

#endif

#if QT_CONFIG(datestring)

#if QT_STRINGVIEW_LEVEL<2

#endif

#endif

#if QT_CONFIG(timezone)

#endif

#if QT_CONFIG(datestring)

#endif

#if QT_CONFIG(timezone)

#endif

#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

#ifndef QT_NO_DATASTREAM

#endif

#if !defined(QT_NO_DEBUG_STREAM)&&QT_CONFIG(datestring)

#endif


    // non-static functions:
    
#if Q_BYTE_ORDER==Q_LITTLE_ENDIAN

#endif

#if Q_BYTE_ORDER==Q_BIG_ENDIAN

#endif

#if QT_CONFIG(timezone)

#endif

    // Class: QDateTime
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::isNull
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
                QDateTime* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::isValid
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
                QDateTime* w = getWrapped();
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
            
    // Class: QDateTime
    // Function: date
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::date
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
                QDateTime* w = getWrapped();
                QDate res = 
                    
                w->date(
                  
                );
              
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for date";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: time
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::time
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
                QDateTime* w = getWrapped();
                QTime res = 
                    
                w->time(
                  
                );
              
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for time";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: timeSpec
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::timeSpec
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
                QDateTime* w = getWrapped();
                Qt::TimeSpec res = 
                    
                w->timeSpec(
                  
                );
              
            // return type: Qt::TimeSpec

            return RJSHelper::cpp2js_Qt_TimeSpec(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for timeSpec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: offsetFromUtc
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::offsetFromUtc
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
                QDateTime* w = getWrapped();
                int res = 
                    
                w->offsetFromUtc(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for offsetFromUtc";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(timezone)

    // Class: QDateTime
    // Function: timeZone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::timeZone
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
                QDateTime* w = getWrapped();
                QTimeZone res = 
                    
                w->timeZone(
                  
                );
              
            // return type: QTimeZone

            return RJSHelper::cpp2js_QTimeZone(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for timeZone";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QDateTime
    // Function: timeZoneAbbreviation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::timeZoneAbbreviation
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
                QDateTime* w = getWrapped();
                QString res = 
                    
                w->timeZoneAbbreviation(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for timeZoneAbbreviation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: isDaylightTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::isDaylightTime
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
                QDateTime* w = getWrapped();
                bool res = 
                    
                w->isDaylightTime(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDaylightTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: toMSecsSinceEpoch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::toMSecsSinceEpoch
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
                QDateTime* w = getWrapped();
                qint64 res = 
                    
                w->toMSecsSinceEpoch(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toMSecsSinceEpoch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: toSecsSinceEpoch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::toSecsSinceEpoch
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
                QDateTime* w = getWrapped();
                qint64 res = 
                    
                w->toSecsSinceEpoch(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toSecsSinceEpoch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: setDate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::setDate
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: date (QDate)
  
QDate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                
                w->setDate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: setTime
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::setTime
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: time (QTime)
  
QTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                
                w->setTime(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: setTimeSpec
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::setTimeSpec
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_TimeSpec(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spec (Qt::TimeSpec)
  
Qt::TimeSpec a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_TimeSpec(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                
                w->setTimeSpec(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTimeSpec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: setOffsetFromUtc
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::setOffsetFromUtc
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
    
  // convert js parameter to cpp: offsetSeconds (int)
  
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
                QDateTime* w = getWrapped();
                
                w->setOffsetFromUtc(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOffsetFromUtc";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(timezone)

    // Class: QDateTime
    // Function: setTimeZone
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::setTimeZone
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTimeZone(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: toZone (QTimeZone)
  
QTimeZone a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTimeZone(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                
                w->setTimeZone(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTimeZone";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QDateTime
    // Function: setMSecsSinceEpoch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::setMSecsSinceEpoch
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                
                w->setMSecsSinceEpoch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMSecsSinceEpoch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: setSecsSinceEpoch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::setSecsSinceEpoch
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: secs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                
                w->setSecsSinceEpoch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSecsSinceEpoch";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

    // Class: QDateTime
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::toString
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_DateFormat(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (Qt::DateFormat)
  
Qt::DateFormat a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::TextDate;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_Qt_DateFormat(handler, a1);
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
                QDateTime* w = getWrapped();
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

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QString)
  
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
                QDateTime* w = getWrapped();
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
            
#if QT_STRINGVIEW_LEVEL<2

#endif

#endif

    // Class: QDateTime
    // Function: addDays
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::addDays
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: days (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->addDays(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addDays";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: addMonths
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::addMonths
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
    
  // convert js parameter to cpp: months (int)
  
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
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->addMonths(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addMonths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: addYears
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::addYears
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
    
  // convert js parameter to cpp: years (int)
  
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
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->addYears(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addYears";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: addSecs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::addSecs
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: secs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->addSecs(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addSecs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: addMSecs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::addMSecs
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->addMSecs(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addMSecs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: toTimeSpec
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::toTimeSpec
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_TimeSpec(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spec (Qt::TimeSpec)
  
Qt::TimeSpec a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_TimeSpec(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->toTimeSpec(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTimeSpec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: toLocalTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::toLocalTime
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
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->toLocalTime(
                  
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toLocalTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: toUTC
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::toUTC
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
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->toUTC(
                  
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toUTC";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: toOffsetFromUtc
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::toOffsetFromUtc
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
    
  // convert js parameter to cpp: offsetSeconds (int)
  
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
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->toOffsetFromUtc(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toOffsetFromUtc";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(timezone)

    // Class: QDateTime
    // Function: toTimeZone
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::toTimeZone
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTimeZone(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: toZone (QTimeZone)
  
QTimeZone a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTimeZone(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                QDateTime res = 
                    
                w->toTimeZone(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTimeZone";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QDateTime
    // Function: daysTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::daysTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                qint64 res = 
                    
                w->daysTo(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for daysTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: secsTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::secsTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                qint64 res = 
                    
                w->secsTo(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for secsTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDateTime
    // Function: msecsTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDateTime_Wrapper::msecsTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDateTime* w = getWrapped();
                qint64 res = 
                    
                w->msecsTo(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for msecsTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

#endif

#if QT_CONFIG(timezone)

#endif

#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

#ifndef QT_NO_DATASTREAM

#endif

#if !defined(QT_NO_DEBUG_STREAM)&&QT_CONFIG(datestring)

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qdatetime_wrapper.cpp"
  
