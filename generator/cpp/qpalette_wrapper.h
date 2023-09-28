
  // Auto generated
  
    #ifndef QPALETTE_H_WRAPPER
    #define QPALETTE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QVariant>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QPalette>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPalette
    class QPalette_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPalette_Wrapper(const QPalette_Wrapper&);

    public:
      // initialization of QPalette:
      static void init(RJSApi& handler);

      
        static QPalette* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QPalette:
          for (int i=0; i<basecasters_QPalette.length(); i++) {
            RJSBasecaster_QPalette* basecaster = basecasters_QPalette[i];
            QPalette* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QPalette:
          if (t==RJSType_QPalette::getIdStatic()) {
            return (QPalette*)vp;
          }

          qWarning() << "QPalette_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QPalette* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPalette*: wrapper wraps NULL";
          }

          QPalette* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPalette*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ColorGroup {
    Active = QPalette::Active,
Disabled = QPalette::Disabled,
Inactive = QPalette::Inactive,
NColorGroups = QPalette::NColorGroups,
Current = QPalette::Current,
All = QPalette::All,
Normal = QPalette::Normal,

  };
  Q_ENUM(ColorGroup)

  enum ColorRole {
    WindowText = QPalette::WindowText,
Button = QPalette::Button,
Light = QPalette::Light,
Midlight = QPalette::Midlight,
Dark = QPalette::Dark,
Mid = QPalette::Mid,
Text = QPalette::Text,
BrightText = QPalette::BrightText,
ButtonText = QPalette::ButtonText,
Base = QPalette::Base,
Window = QPalette::Window,
Shadow = QPalette::Shadow,
Highlight = QPalette::Highlight,
HighlightedText = QPalette::HighlightedText,
Link = QPalette::Link,
LinkVisited = QPalette::LinkVisited,
AlternateBase = QPalette::AlternateBase,
NoRole = QPalette::NoRole,
ToolTipBase = QPalette::ToolTipBase,
ToolTipText = QPalette::ToolTipText,
PlaceholderText = QPalette::PlaceholderText,
NColorRoles = QPalette::NColorRoles,

  };
  Q_ENUM(ColorRole)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPalette_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPalette_Wrapper(RJSApi& h, QPalette* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPalette_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QPalette
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QPalette_Wrapper
                
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    , 
  const QJSValue& 
  a7
      = QJSValue()
    , 
  const QJSValue& 
  a8
      = QJSValue()
    , 
  const QJSValue& 
  a9
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QPalette
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPalette
    // Function: currentColorGroup
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentColorGroup
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: setCurrentColorGroup
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentColorGroup
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPalette
    // Function: color
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  color
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: brush
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: setColor
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColor
              (

                
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
            
    // Class: QPalette
    // Function: setBrush
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBrush
              (

                
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
            
    // Class: QPalette
    // Function: isBrushSet
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBrushSet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: setColorGroup
    // Source: 
    // Static: false
    // Parameters: 10
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColorGroup
              (

                
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    , 
  const QJSValue& 
  a7
      = QJSValue()
    , 
  const QJSValue& 
  a8
      = QJSValue()
    , 
  const QJSValue& 
  a9
      = QJSValue()
    , 
  const QJSValue& 
  a10
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPalette
    // Function: isEqual
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEqual
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: windowText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowText
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: button
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  button
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: light
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  light
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: dark
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dark
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: mid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mid
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  text
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: base
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  base
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: alternateBase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alternateBase
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: toolTipBase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTipBase
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: toolTipText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toolTipText
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: window
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  window
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: midlight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  midlight
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: brightText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  brightText
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: buttonText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buttonText
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: shadow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  shadow
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: highlight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  highlight
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: highlightedText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  highlightedText
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: link
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  link
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: linkVisited
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  linkVisited
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: placeholderText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  placeholderText
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: isCopyOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCopyOf
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: cacheKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cacheKey
              (

                
              )
              
                const
              
              ;
            
    // Class: QPalette
    // Function: resolve
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resolve
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            

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
          return RJSType_QPalette::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QPalette* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPalette* getWrapped() const {
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
        QPalette* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QPalette*> basecasters_QPalette;

      public:
        static void registerBasecaster_QPalette(RJSBasecaster_QPalette* bc) {
          basecasters_QPalette.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QPalette_Wrapper*)

    Q_DECLARE_INTERFACE(QPalette_Wrapper, "org.qcad.QPalette_Wrapper")

  
  #endif
  
