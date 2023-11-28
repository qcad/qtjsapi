
  // Auto generated
  
    #ifndef QTSQLGLOBAL_H_WRAPPER
    #define QTSQLGLOBAL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSql>
      
    // wrapper class for QSql
    class QTJSAPI_EXPORT QSql_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSql_Wrapper(const QSql_Wrapper&);

    public:
      // initialization of QSql:
      static void init(RJSApi& handler);

      
        // enums:
        
  enum Location {
    BeforeFirstRow = QSql::BeforeFirstRow,
AfterLastRow = QSql::AfterLastRow,

  };
  Q_ENUM(Location)

  enum ParamTypeFlag {
    In = QSql::In,
Out = QSql::Out,
InOut = QSql::InOut,
Binary = QSql::Binary,

  };
  Q_ENUM(ParamTypeFlag)

  enum NumericalPrecisionPolicy {
    LowPrecisionInt32 = QSql::LowPrecisionInt32,
LowPrecisionInt64 = QSql::LowPrecisionInt64,
LowPrecisionDouble = QSql::LowPrecisionDouble,
HighPrecision = QSql::HighPrecision,

  };
  Q_ENUM(NumericalPrecisionPolicy)


  // constructors:
  

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    };

    Q_DECLARE_METATYPE(QSql_Wrapper*)

    Q_DECLARE_INTERFACE(QSql_Wrapper, "org.qcad.QSql_Wrapper")

  
  #endif
  
