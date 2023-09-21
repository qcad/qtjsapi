
  // Auto generated
  
  // include header:
  //#include "qfontdatabasewrapper.h"
  //#include "header_cpp.h"
  
    #include "qfontdatabase_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QFontDatabase
    // Function: standardSizes
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::standardSizes
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<int> res = 
                
                // call static member function:
                QFontDatabase::standardSizes(
              
            );
          
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for standardSizes";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,0)&&!defined(QT_BUILD_GUI_LIB)

#else

#endif

    // Class: QFontDatabase
    // Function: writingSystems
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::writingSystems
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
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QFontDatabase::WritingSystem> res = 
                
                // call static member function:
                QFontDatabase::writingSystems(
              a1_cpp
    
            );
          
            // return type: QList<QFontDatabase::WritingSystem>

            return RJSHelper::cpp2js_QList_QFontDatabase_WritingSystem(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QFontDatabase::WritingSystem> res = 
                
                // call static member function:
                QFontDatabase::writingSystems(
              
            );
          
            // return type: QList<QFontDatabase::WritingSystem>

            return RJSHelper::cpp2js_QList_QFontDatabase_WritingSystem(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for writingSystems";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: families
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::families
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFontDatabase_WritingSystem(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: writingSystem (QFontDatabase::WritingSystem)
  
QFontDatabase::WritingSystem a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QFontDatabase::Any;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QFontDatabase_WritingSystem(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QFontDatabase::families(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for families";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: styles
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::styles
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
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QFontDatabase::styles(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for styles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: pointSizes
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::pointSizes
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

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<int> res = 
                
                // call static member function:
                QFontDatabase::pointSizes(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pointSizes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: smoothSizes
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::smoothSizes
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<int> res = 
                
                // call static member function:
                QFontDatabase::smoothSizes(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for smoothSizes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: styleString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::styleString
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
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QFontDatabase::styleString(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for styleString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: font
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::font
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
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: pointSize (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QFontDatabase::font(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
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
            
    // Class: QFontDatabase
    // Function: isBitmapScalable
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::isBitmapScalable
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

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::isBitmapScalable(
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

                  qWarning() << "no matching function variant found for isBitmapScalable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: isSmoothlyScalable
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::isSmoothlyScalable
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

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::isSmoothlyScalable(
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

                  qWarning() << "no matching function variant found for isSmoothlyScalable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: isScalable
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::isScalable
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

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::isScalable(
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

                  qWarning() << "no matching function variant found for isScalable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: isFixedPitch
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::isFixedPitch
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

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::isFixedPitch(
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

                  qWarning() << "no matching function variant found for isFixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: italic
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::italic
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::italic(
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

                  qWarning() << "no matching function variant found for italic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: bold
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::bold
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::bold(
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

                  qWarning() << "no matching function variant found for bold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: weight
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::weight
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QFontDatabase::weight(
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

                  qWarning() << "no matching function variant found for weight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: hasFamily
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::hasFamily
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
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::hasFamily(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasFamily";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: isPrivateFamily
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::isPrivateFamily
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
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::isPrivateFamily(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPrivateFamily";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: writingSystemName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::writingSystemName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFontDatabase_WritingSystem(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: writingSystem (QFontDatabase::WritingSystem)
  
QFontDatabase::WritingSystem a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFontDatabase_WritingSystem(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QFontDatabase::writingSystemName(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for writingSystemName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: writingSystemSample
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::writingSystemSample
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFontDatabase_WritingSystem(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: writingSystem (QFontDatabase::WritingSystem)
  
QFontDatabase::WritingSystem a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFontDatabase_WritingSystem(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QFontDatabase::writingSystemSample(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for writingSystemSample";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: addApplicationFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::addApplicationFont
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
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QFontDatabase::addApplicationFont(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addApplicationFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: addApplicationFontFromData
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::addApplicationFontFromData
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
    
  // convert js parameter to cpp: fontData (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QFontDatabase::addApplicationFontFromData(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addApplicationFontFromData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: applicationFontFamilies
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::applicationFontFamilies
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
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QFontDatabase::applicationFontFamilies(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationFontFamilies";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: removeApplicationFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::removeApplicationFont
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
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::removeApplicationFont(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removeApplicationFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: removeAllApplicationFonts
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::removeAllApplicationFonts
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QFontDatabase::removeAllApplicationFonts(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removeAllApplicationFonts";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFontDatabase
    // Function: systemFont
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFontDatabase_WrapperSingleton::systemFont
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFontDatabase_SystemFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QFontDatabase::SystemFont)
  
QFontDatabase::SystemFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFontDatabase_SystemFont(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QFont res = 
                
                // call static member function:
                QFontDatabase::systemFont(
              a1_cpp
    
            );
          
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for systemFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QFontDatabase_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QFontDatabase_Wrapper>("org.qcad", 1, 0, "QFontDatabase_Wrapper");
        qmlRegisterInterface<QFontDatabase_Wrapper>("QFontDatabase_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QFontDatabase_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QFontDatabase_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QFontDatabase_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QFontDatabase_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QFontDatabase_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QFontDatabase_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QFontDatabase_WrapperSingleton * s = new QFontDatabase_WrapperSingleton(handler);
        engine->globalObject().setProperty("QFontDatabase_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QFontDatabase.js";
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
    QFontDatabase_Wrapper::QFontDatabase_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QFontDatabase_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QFontDatabase_Wrapper::QFontDatabase_Wrapper(RJSApi& h, QFontDatabase* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QFontDatabase_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QFontDatabase_Wrapper"));
              //setObjectName("QFontDatabase_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QFontDatabase_Wrapper::~QFontDatabase_Wrapper() {
            //RDebug::decCounter(QString("QFontDatabase_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QFontDatabase_Wrapper"));

            //qDebug() << "QFontDatabase_Wrapper::~QFontDatabase_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QFontDatabase";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QFontDatabase_Wrapper::initConnections() {

          //setObjectName("QFontDatabase_Wrapper");

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
  
#if QT_DEPRECATED_SINCE(6,0)&&!defined(QT_BUILD_GUI_LIB)

    // Class: QFontDatabase
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QFontDatabase_Wrapper::QFontDatabase_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QFontDatabase_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QFontDatabase_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFontDatabase(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QFontDatabase";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#else

#endif


    // non-static functions:
    
#if QT_DEPRECATED_SINCE(6,0)&&!defined(QT_BUILD_GUI_LIB)

#else

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  