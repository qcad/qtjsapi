
  // Auto generated
  
  // include header:
  //#include "qcalendarwrapper.h"
  //#include "header_cpp.h"
  
    #include "qcalendar_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QCalendar*> QCalendar_Wrapper::basecasters_QCalendar;
    
    // static functions implementation in singleton wrapper:
    
#ifndef QT_BOOTSTRAPPED

#endif

#if QT_CONFIG(jalalicalendar)

#endif

#if QT_CONFIG(islamiccivilcalendar)

#endif

    // Class: QCalendar
    // Function: availableCalendars
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_WrapperSingleton::availableCalendars
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QCalendar::availableCalendars(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availableCalendars";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QCalendar_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QCalendar_Wrapper>("org.qcad", 1, 0, "QCalendar_Wrapper");
        qmlRegisterInterface<QCalendar_Wrapper>("QCalendar_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QCalendar* t = new RJSType_QCalendar();
          global.setProperty("RJSType_QCalendar", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QCalendar::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QCalendar_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QCalendar_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QCalendar_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QCalendar_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QCalendar_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QCalendar_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QCalendar_WrapperSingleton * s = new QCalendar_WrapperSingleton(handler);
        engine->globalObject().setProperty("QCalendar_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QCalendar.js";
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
    QCalendar_Wrapper::QCalendar_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QCalendar_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QCalendar_Wrapper::QCalendar_Wrapper(RJSApi& h, QCalendar* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QCalendar_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QCalendar_Wrapper"));
              //setObjectName("QCalendar_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QCalendar_Wrapper::~QCalendar_Wrapper() {
            //RDebug::decCounter(QString("QCalendar_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QCalendar_Wrapper"));

            //qDebug() << "QCalendar_Wrapper::~QCalendar_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QCalendar";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QCalendar_Wrapper::initConnections() {

          //setObjectName("QCalendar_Wrapper");

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
  
    // Class: QCalendar
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QCalendar_Wrapper::QCalendar_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QCalendar_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QCalendar_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QCalendar(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QCalendar";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_BOOTSTRAPPED

#endif

#if QT_CONFIG(jalalicalendar)

#endif

#if QT_CONFIG(islamiccivilcalendar)

#endif


    // non-static functions:
    
    // Class: QCalendar
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::isValid
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
                QCalendar* w = getWrapped();
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
            
#ifndef QT_BOOTSTRAPPED

#endif

#if QT_CONFIG(jalalicalendar)

#endif

#if QT_CONFIG(islamiccivilcalendar)

#endif

    // Class: QCalendar
    // Function: daysInMonth
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::daysInMonth
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: month (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: year (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QCalendar::Unspecified;
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
                QCalendar* w = getWrapped();
                int res = 
                    
                w->daysInMonth(
                  a1_cpp
    , a2_cpp
    
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
            
    // Class: QCalendar
    // Function: daysInYear
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::daysInYear
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
    
  // convert js parameter to cpp: year (int)
  
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
                QCalendar* w = getWrapped();
                int res = 
                    
                w->daysInYear(
                  a1_cpp
    
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
            
    // Class: QCalendar
    // Function: monthsInYear
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::monthsInYear
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
    
  // convert js parameter to cpp: year (int)
  
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
                QCalendar* w = getWrapped();
                int res = 
                    
                w->monthsInYear(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for monthsInYear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: isDateValid
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::isDateValid
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
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
                QCalendar* w = getWrapped();
                bool res = 
                    
                w->isDateValid(
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

                  qWarning() << "no matching function variant found for isDateValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: isLeapYear
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::isLeapYear
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
    
  // convert js parameter to cpp: year (int)
  
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
                QCalendar* w = getWrapped();
                bool res = 
                    
                w->isLeapYear(
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
            
    // Class: QCalendar
    // Function: isGregorian
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::isGregorian
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
                QCalendar* w = getWrapped();
                bool res = 
                    
                w->isGregorian(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isGregorian";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: isLunar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::isLunar
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
                QCalendar* w = getWrapped();
                bool res = 
                    
                w->isLunar(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLunar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: isLuniSolar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::isLuniSolar
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
                QCalendar* w = getWrapped();
                bool res = 
                    
                w->isLuniSolar(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLuniSolar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: isSolar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::isSolar
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
                QCalendar* w = getWrapped();
                bool res = 
                    
                w->isSolar(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSolar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: isProleptic
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::isProleptic
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
                QCalendar* w = getWrapped();
                bool res = 
                    
                w->isProleptic(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isProleptic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: hasYearZero
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::hasYearZero
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
                QCalendar* w = getWrapped();
                bool res = 
                    
                w->hasYearZero(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasYearZero";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: maximumDaysInMonth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::maximumDaysInMonth
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
                QCalendar* w = getWrapped();
                int res = 
                    
                w->maximumDaysInMonth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumDaysInMonth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: minimumDaysInMonth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::minimumDaysInMonth
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
                QCalendar* w = getWrapped();
                int res = 
                    
                w->minimumDaysInMonth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumDaysInMonth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: maximumMonthsInYear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::maximumMonthsInYear
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
                QCalendar* w = getWrapped();
                int res = 
                    
                w->maximumMonthsInYear(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumMonthsInYear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::name
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
                QCalendar* w = getWrapped();
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
            
    // Class: QCalendar
    // Function: dayOfWeek
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::dayOfWeek
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
                QCalendar* w = getWrapped();
                int res = 
                    
                w->dayOfWeek(
                  a1_cpp
    
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
            
    // Class: QCalendar
    // Function: monthName
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::monthName
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
        RJSHelper::is_QLocale(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

   && RJSHelper::is_QLocale_FormatType(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locale (QLocale)
  
QLocale a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale(handler, a1);
        
  // convert js parameter to cpp: month (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: year (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QCalendar::Unspecified;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QLocale::LongFormat;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a4);
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
                QCalendar* w = getWrapped();
                QString res = 
                    
                w->monthName(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for monthName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: standaloneMonthName
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::standaloneMonthName
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
        RJSHelper::is_QLocale(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

   && RJSHelper::is_QLocale_FormatType(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locale (QLocale)
  
QLocale a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale(handler, a1);
        
  // convert js parameter to cpp: month (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: year (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QCalendar::Unspecified;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QLocale::LongFormat;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a4);
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
                QCalendar* w = getWrapped();
                QString res = 
                    
                w->standaloneMonthName(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for standaloneMonthName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: weekDayName
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::weekDayName
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QLocale_FormatType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locale (QLocale)
  
QLocale a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale(handler, a1);
        
  // convert js parameter to cpp: day (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QLocale::LongFormat;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a3);
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
                QCalendar* w = getWrapped();
                QString res = 
                    
                w->weekDayName(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for weekDayName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QCalendar
    // Function: standaloneWeekDayName
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QCalendar_Wrapper::standaloneWeekDayName
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QLocale_FormatType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locale (QLocale)
  
QLocale a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale(handler, a1);
        
  // convert js parameter to cpp: day (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QLocale::LongFormat;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a3);
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
                QCalendar* w = getWrapped();
                QString res = 
                    
                w->standaloneWeekDayName(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for standaloneWeekDayName";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  