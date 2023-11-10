
  // Auto generated
  
    #ifndef QSIZEPOLICY_H_WRAPPER
    #define QSIZEPOLICY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QVariant>
      
        #include <QSizePolicy>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSizePolicy>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSizePolicy
    class QSizePolicy_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSizePolicy_Wrapper(const QSizePolicy_Wrapper&);

    public:
      // initialization of QSizePolicy:
      static void init(RJSApi& handler);

      
        static QSizePolicy* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSizePolicy:
          for (int i=0; i<basecasters_QSizePolicy.length(); i++) {
            RJSBasecaster_QSizePolicy* basecaster = basecasters_QSizePolicy[i];
            QSizePolicy* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSizePolicy:
          if (t==RJSType_QSizePolicy::getIdStatic()) {
            return (QSizePolicy*)vp;
          }

          qWarning() << "QSizePolicy_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSizePolicy* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSizePolicy*: wrapper wraps NULL";
          }

          QSizePolicy* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSizePolicy*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum PolicyFlag {
    GrowFlag = QSizePolicy::GrowFlag,
ExpandFlag = QSizePolicy::ExpandFlag,
ShrinkFlag = QSizePolicy::ShrinkFlag,
IgnoreFlag = QSizePolicy::IgnoreFlag,

  };
  Q_ENUM(PolicyFlag)

  enum Policy {
    Fixed = QSizePolicy::Fixed,
Minimum = QSizePolicy::Minimum,
Maximum = QSizePolicy::Maximum,
Preferred = QSizePolicy::Preferred,
MinimumExpanding = QSizePolicy::MinimumExpanding,
Expanding = QSizePolicy::Expanding,
Ignored = QSizePolicy::Ignored,

  };
  Q_ENUM(Policy)

  enum ControlType {
    DefaultType = QSizePolicy::DefaultType,
ButtonBox = QSizePolicy::ButtonBox,
CheckBox = QSizePolicy::CheckBox,
ComboBox = QSizePolicy::ComboBox,
Frame = QSizePolicy::Frame,
GroupBox = QSizePolicy::GroupBox,
Label = QSizePolicy::Label,
Line = QSizePolicy::Line,
LineEdit = QSizePolicy::LineEdit,
PushButton = QSizePolicy::PushButton,
RadioButton = QSizePolicy::RadioButton,
Slider = QSizePolicy::Slider,
SpinBox = QSizePolicy::SpinBox,
TabWidget = QSizePolicy::TabWidget,
ToolButton = QSizePolicy::ToolButton,

  };
  Q_ENUM(ControlType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSizePolicy_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSizePolicy_Wrapper(RJSApi& h, QSizePolicy* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSizePolicy_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSizePolicy
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSizePolicy_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QSizePolicy
    // Function: horizontalPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: verticalPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalPolicy
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: controlType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  controlType
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: setHorizontalPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: setVerticalPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalPolicy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: setControlType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setControlType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: expandingDirections
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  expandingDirections
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: setHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeightForWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: hasHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasHeightForWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: setWidthForHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWidthForHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: hasWidthForHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasWidthForHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: horizontalStretch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  horizontalStretch
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: verticalStretch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  verticalStretch
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: setHorizontalStretch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHorizontalStretch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: setVerticalStretch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVerticalStretch
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: retainSizeWhenHidden
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  retainSizeWhenHidden
              (

                
              )
              
                const
              
              ;
            
    // Class: QSizePolicy
    // Function: setRetainSizeWhenHidden
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRetainSizeWhenHidden
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: transpose
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transpose
              (

                
              )
              
              ;
            
    // Class: QSizePolicy
    // Function: transposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transposed
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QSizePolicy::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSizePolicy* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSizePolicy* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QSizePolicy* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSizePolicy*> basecasters_QSizePolicy;

      public:
        static void registerBasecaster_QSizePolicy(RJSBasecaster_QSizePolicy* bc) {
          basecasters_QSizePolicy.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSizePolicy_Wrapper*)

    Q_DECLARE_INTERFACE(QSizePolicy_Wrapper, "org.qcad.QSizePolicy_Wrapper")

  
  #endif
  
