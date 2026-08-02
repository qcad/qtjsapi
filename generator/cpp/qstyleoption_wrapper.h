
  // Auto generated
  
    #ifndef QSTYLEOPTION_H_WRAPPER
    #define QSTYLEOPTION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDebug>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOption>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOption
    class QTJSAPI_EXPORT QStyleOption_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOption_Wrapper(const QStyleOption_Wrapper&);

    public:
      // initialization of QStyleOption:
      static void init(RJSApi& handler);

      
        static QStyleOption* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QStyleOptionFocusRect::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionFocusRect*)vp;
              }
              
              if (t==RJSType_QStyleOptionFrame::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionFrame*)vp;
              }
              
              if (t==RJSType_QStyleOptionTabWidgetFrame::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionTabWidgetFrame*)vp;
              }
              
              if (t==RJSType_QStyleOptionTabBarBase::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionTabBarBase*)vp;
              }
              
              if (t==RJSType_QStyleOptionHeader::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionHeader*)vp;
              }
              
              if (t==RJSType_QStyleOptionButton::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionButton*)vp;
              }
              
              if (t==RJSType_QStyleOptionTab::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionTab*)vp;
              }
              
              if (t==RJSType_QStyleOptionToolBar::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionToolBar*)vp;
              }
              
              if (t==RJSType_QStyleOptionProgressBar::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionProgressBar*)vp;
              }
              
              if (t==RJSType_QStyleOptionMenuItem::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionMenuItem*)vp;
              }
              
              if (t==RJSType_QStyleOptionDockWidget::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionDockWidget*)vp;
              }
              
              if (t==RJSType_QStyleOptionViewItem::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionViewItem*)vp;
              }
              
              if (t==RJSType_QStyleOptionToolBox::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionToolBox*)vp;
              }
              
              if (t==RJSType_QStyleOptionRubberBand::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionRubberBand*)vp;
              }
              
              if (t==RJSType_QStyleOptionComplex::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionComplex*)vp;
              }
              
              if (t==RJSType_QStyleOptionGraphicsItem::getIdStatic()) {
                return (QStyleOption*)(QStyleOptionGraphicsItem*)vp;
              }
              

          // hook for modules to cast from other types to base QStyleOption:
          for (int i=0; i<basecasters_QStyleOption.length(); i++) {
            RJSBasecaster_QStyleOption* basecaster = basecasters_QStyleOption[i];
            QStyleOption* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOption:
          if (t==RJSType_QStyleOption::getIdStatic()) {
            return (QStyleOption*)vp;
          }

          qWarning() << "QStyleOption_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOption* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOption*: wrapper wraps NULL";
          }

          QStyleOption* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOption*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOption::SO_Default,
SO_FocusRect = QStyleOption::SO_FocusRect,
SO_Button = QStyleOption::SO_Button,
SO_Tab = QStyleOption::SO_Tab,
SO_MenuItem = QStyleOption::SO_MenuItem,
SO_Frame = QStyleOption::SO_Frame,
SO_ProgressBar = QStyleOption::SO_ProgressBar,
SO_ToolBox = QStyleOption::SO_ToolBox,
SO_Header = QStyleOption::SO_Header,
SO_DockWidget = QStyleOption::SO_DockWidget,
SO_ViewItem = QStyleOption::SO_ViewItem,
SO_TabWidgetFrame = QStyleOption::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOption::SO_TabBarBase,
SO_RubberBand = QStyleOption::SO_RubberBand,
SO_ToolBar = QStyleOption::SO_ToolBar,
SO_GraphicsItem = QStyleOption::SO_GraphicsItem,
SO_Complex = QStyleOption::SO_Complex,
SO_Slider = QStyleOption::SO_Slider,
SO_SpinBox = QStyleOption::SO_SpinBox,
SO_ToolButton = QStyleOption::SO_ToolButton,
SO_ComboBox = QStyleOption::SO_ComboBox,
SO_TitleBar = QStyleOption::SO_TitleBar,
SO_GroupBox = QStyleOption::SO_GroupBox,
SO_SizeGrip = QStyleOption::SO_SizeGrip,
SO_CustomBase = QStyleOption::SO_CustomBase,
SO_ComplexCustomBase = QStyleOption::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOption_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOption_Wrapper(RJSApi& h, QStyleOption* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOption_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOption
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOption_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOption
    // Function: initFrom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOption
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOption::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOption* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOption* getWrapped() const {
          
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
          QStyleOption* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOption*> basecasters_QStyleOption;

      public:
        static void registerBasecaster_QStyleOption(RJSBasecaster_QStyleOption* bc) {
          basecasters_QStyleOption.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOption_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOption_Wrapper, "org.qcad.QStyleOption_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionFocusRect>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionFocusRect
    class QTJSAPI_EXPORT QStyleOptionFocusRect_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionFocusRect_Wrapper(const QStyleOptionFocusRect_Wrapper&);

    public:
      // initialization of QStyleOptionFocusRect:
      static void init(RJSApi& handler);

      
        static QStyleOptionFocusRect* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionFocusRect:
          for (int i=0; i<basecasters_QStyleOptionFocusRect.length(); i++) {
            RJSBasecaster_QStyleOptionFocusRect* basecaster = basecasters_QStyleOptionFocusRect[i];
            QStyleOptionFocusRect* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionFocusRect:
          if (t==RJSType_QStyleOptionFocusRect::getIdStatic()) {
            return (QStyleOptionFocusRect*)vp;
          }

          qWarning() << "QStyleOptionFocusRect_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionFocusRect* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionFocusRect*: wrapper wraps NULL";
          }

          QStyleOptionFocusRect* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionFocusRect*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionFocusRect::SO_Default,
SO_FocusRect = QStyleOptionFocusRect::SO_FocusRect,
SO_Button = QStyleOptionFocusRect::SO_Button,
SO_Tab = QStyleOptionFocusRect::SO_Tab,
SO_MenuItem = QStyleOptionFocusRect::SO_MenuItem,
SO_Frame = QStyleOptionFocusRect::SO_Frame,
SO_ProgressBar = QStyleOptionFocusRect::SO_ProgressBar,
SO_ToolBox = QStyleOptionFocusRect::SO_ToolBox,
SO_Header = QStyleOptionFocusRect::SO_Header,
SO_DockWidget = QStyleOptionFocusRect::SO_DockWidget,
SO_ViewItem = QStyleOptionFocusRect::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionFocusRect::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionFocusRect::SO_TabBarBase,
SO_RubberBand = QStyleOptionFocusRect::SO_RubberBand,
SO_ToolBar = QStyleOptionFocusRect::SO_ToolBar,
SO_GraphicsItem = QStyleOptionFocusRect::SO_GraphicsItem,
SO_Complex = QStyleOptionFocusRect::SO_Complex,
SO_Slider = QStyleOptionFocusRect::SO_Slider,
SO_SpinBox = QStyleOptionFocusRect::SO_SpinBox,
SO_ToolButton = QStyleOptionFocusRect::SO_ToolButton,
SO_ComboBox = QStyleOptionFocusRect::SO_ComboBox,
SO_TitleBar = QStyleOptionFocusRect::SO_TitleBar,
SO_GroupBox = QStyleOptionFocusRect::SO_GroupBox,
SO_SizeGrip = QStyleOptionFocusRect::SO_SizeGrip,
SO_CustomBase = QStyleOptionFocusRect::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionFocusRect::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionFocusRect_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionFocusRect_Wrapper(RJSApi& h, QStyleOptionFocusRect* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionFocusRect_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionFocusRect
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionFocusRect_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionFocusRect
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionFocusRect
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionFocusRect::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionFocusRect* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionFocusRect* getWrapped() const {
          
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
          QStyleOptionFocusRect* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionFocusRect*> basecasters_QStyleOptionFocusRect;

      public:
        static void registerBasecaster_QStyleOptionFocusRect(RJSBasecaster_QStyleOptionFocusRect* bc) {
          basecasters_QStyleOptionFocusRect.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionFocusRect_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionFocusRect_Wrapper, "org.qcad.QStyleOptionFocusRect_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionFrame>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionFrame
    class QTJSAPI_EXPORT QStyleOptionFrame_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionFrame_Wrapper(const QStyleOptionFrame_Wrapper&);

    public:
      // initialization of QStyleOptionFrame:
      static void init(RJSApi& handler);

      
        static QStyleOptionFrame* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionFrame:
          for (int i=0; i<basecasters_QStyleOptionFrame.length(); i++) {
            RJSBasecaster_QStyleOptionFrame* basecaster = basecasters_QStyleOptionFrame[i];
            QStyleOptionFrame* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionFrame:
          if (t==RJSType_QStyleOptionFrame::getIdStatic()) {
            return (QStyleOptionFrame*)vp;
          }

          qWarning() << "QStyleOptionFrame_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionFrame* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionFrame*: wrapper wraps NULL";
          }

          QStyleOptionFrame* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionFrame*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionFrame::SO_Default,
SO_FocusRect = QStyleOptionFrame::SO_FocusRect,
SO_Button = QStyleOptionFrame::SO_Button,
SO_Tab = QStyleOptionFrame::SO_Tab,
SO_MenuItem = QStyleOptionFrame::SO_MenuItem,
SO_Frame = QStyleOptionFrame::SO_Frame,
SO_ProgressBar = QStyleOptionFrame::SO_ProgressBar,
SO_ToolBox = QStyleOptionFrame::SO_ToolBox,
SO_Header = QStyleOptionFrame::SO_Header,
SO_DockWidget = QStyleOptionFrame::SO_DockWidget,
SO_ViewItem = QStyleOptionFrame::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionFrame::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionFrame::SO_TabBarBase,
SO_RubberBand = QStyleOptionFrame::SO_RubberBand,
SO_ToolBar = QStyleOptionFrame::SO_ToolBar,
SO_GraphicsItem = QStyleOptionFrame::SO_GraphicsItem,
SO_Complex = QStyleOptionFrame::SO_Complex,
SO_Slider = QStyleOptionFrame::SO_Slider,
SO_SpinBox = QStyleOptionFrame::SO_SpinBox,
SO_ToolButton = QStyleOptionFrame::SO_ToolButton,
SO_ComboBox = QStyleOptionFrame::SO_ComboBox,
SO_TitleBar = QStyleOptionFrame::SO_TitleBar,
SO_GroupBox = QStyleOptionFrame::SO_GroupBox,
SO_SizeGrip = QStyleOptionFrame::SO_SizeGrip,
SO_CustomBase = QStyleOptionFrame::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionFrame::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

  enum FrameFeature {
    None = QStyleOptionFrame::None,
Flat = QStyleOptionFrame::Flat,
Rounded = QStyleOptionFrame::Rounded,

  };
  Q_ENUM(FrameFeature)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionFrame_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionFrame_Wrapper(RJSApi& h, QStyleOptionFrame* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionFrame_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionFrame
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionFrame_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionFrame
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionFrame
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionFrame::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionFrame* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionFrame* getWrapped() const {
          
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
          QStyleOptionFrame* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionFrame*> basecasters_QStyleOptionFrame;

      public:
        static void registerBasecaster_QStyleOptionFrame(RJSBasecaster_QStyleOptionFrame* bc) {
          basecasters_QStyleOptionFrame.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionFrame_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionFrame_Wrapper, "org.qcad.QStyleOptionFrame_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionTabWidgetFrame>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionTabWidgetFrame
    class QTJSAPI_EXPORT QStyleOptionTabWidgetFrame_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionTabWidgetFrame_Wrapper(const QStyleOptionTabWidgetFrame_Wrapper&);

    public:
      // initialization of QStyleOptionTabWidgetFrame:
      static void init(RJSApi& handler);

      
        static QStyleOptionTabWidgetFrame* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionTabWidgetFrame:
          for (int i=0; i<basecasters_QStyleOptionTabWidgetFrame.length(); i++) {
            RJSBasecaster_QStyleOptionTabWidgetFrame* basecaster = basecasters_QStyleOptionTabWidgetFrame[i];
            QStyleOptionTabWidgetFrame* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionTabWidgetFrame:
          if (t==RJSType_QStyleOptionTabWidgetFrame::getIdStatic()) {
            return (QStyleOptionTabWidgetFrame*)vp;
          }

          qWarning() << "QStyleOptionTabWidgetFrame_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionTabWidgetFrame* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionTabWidgetFrame*: wrapper wraps NULL";
          }

          QStyleOptionTabWidgetFrame* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionTabWidgetFrame*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionTabWidgetFrame::SO_Default,
SO_FocusRect = QStyleOptionTabWidgetFrame::SO_FocusRect,
SO_Button = QStyleOptionTabWidgetFrame::SO_Button,
SO_Tab = QStyleOptionTabWidgetFrame::SO_Tab,
SO_MenuItem = QStyleOptionTabWidgetFrame::SO_MenuItem,
SO_Frame = QStyleOptionTabWidgetFrame::SO_Frame,
SO_ProgressBar = QStyleOptionTabWidgetFrame::SO_ProgressBar,
SO_ToolBox = QStyleOptionTabWidgetFrame::SO_ToolBox,
SO_Header = QStyleOptionTabWidgetFrame::SO_Header,
SO_DockWidget = QStyleOptionTabWidgetFrame::SO_DockWidget,
SO_ViewItem = QStyleOptionTabWidgetFrame::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionTabWidgetFrame::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionTabWidgetFrame::SO_TabBarBase,
SO_RubberBand = QStyleOptionTabWidgetFrame::SO_RubberBand,
SO_ToolBar = QStyleOptionTabWidgetFrame::SO_ToolBar,
SO_GraphicsItem = QStyleOptionTabWidgetFrame::SO_GraphicsItem,
SO_Complex = QStyleOptionTabWidgetFrame::SO_Complex,
SO_Slider = QStyleOptionTabWidgetFrame::SO_Slider,
SO_SpinBox = QStyleOptionTabWidgetFrame::SO_SpinBox,
SO_ToolButton = QStyleOptionTabWidgetFrame::SO_ToolButton,
SO_ComboBox = QStyleOptionTabWidgetFrame::SO_ComboBox,
SO_TitleBar = QStyleOptionTabWidgetFrame::SO_TitleBar,
SO_GroupBox = QStyleOptionTabWidgetFrame::SO_GroupBox,
SO_SizeGrip = QStyleOptionTabWidgetFrame::SO_SizeGrip,
SO_CustomBase = QStyleOptionTabWidgetFrame::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionTabWidgetFrame::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionTabWidgetFrame_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionTabWidgetFrame_Wrapper(RJSApi& h, QStyleOptionTabWidgetFrame* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionTabWidgetFrame_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionTabWidgetFrame
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionTabWidgetFrame_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionTabWidgetFrame
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionTabWidgetFrame
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionTabWidgetFrame::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionTabWidgetFrame* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionTabWidgetFrame* getWrapped() const {
          
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
          QStyleOptionTabWidgetFrame* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionTabWidgetFrame*> basecasters_QStyleOptionTabWidgetFrame;

      public:
        static void registerBasecaster_QStyleOptionTabWidgetFrame(RJSBasecaster_QStyleOptionTabWidgetFrame* bc) {
          basecasters_QStyleOptionTabWidgetFrame.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionTabWidgetFrame_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionTabWidgetFrame_Wrapper, "org.qcad.QStyleOptionTabWidgetFrame_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionTabBarBase>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionTabBarBase
    class QTJSAPI_EXPORT QStyleOptionTabBarBase_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionTabBarBase_Wrapper(const QStyleOptionTabBarBase_Wrapper&);

    public:
      // initialization of QStyleOptionTabBarBase:
      static void init(RJSApi& handler);

      
        static QStyleOptionTabBarBase* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionTabBarBase:
          for (int i=0; i<basecasters_QStyleOptionTabBarBase.length(); i++) {
            RJSBasecaster_QStyleOptionTabBarBase* basecaster = basecasters_QStyleOptionTabBarBase[i];
            QStyleOptionTabBarBase* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionTabBarBase:
          if (t==RJSType_QStyleOptionTabBarBase::getIdStatic()) {
            return (QStyleOptionTabBarBase*)vp;
          }

          qWarning() << "QStyleOptionTabBarBase_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionTabBarBase* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionTabBarBase*: wrapper wraps NULL";
          }

          QStyleOptionTabBarBase* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionTabBarBase*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionTabBarBase::SO_Default,
SO_FocusRect = QStyleOptionTabBarBase::SO_FocusRect,
SO_Button = QStyleOptionTabBarBase::SO_Button,
SO_Tab = QStyleOptionTabBarBase::SO_Tab,
SO_MenuItem = QStyleOptionTabBarBase::SO_MenuItem,
SO_Frame = QStyleOptionTabBarBase::SO_Frame,
SO_ProgressBar = QStyleOptionTabBarBase::SO_ProgressBar,
SO_ToolBox = QStyleOptionTabBarBase::SO_ToolBox,
SO_Header = QStyleOptionTabBarBase::SO_Header,
SO_DockWidget = QStyleOptionTabBarBase::SO_DockWidget,
SO_ViewItem = QStyleOptionTabBarBase::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionTabBarBase::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionTabBarBase::SO_TabBarBase,
SO_RubberBand = QStyleOptionTabBarBase::SO_RubberBand,
SO_ToolBar = QStyleOptionTabBarBase::SO_ToolBar,
SO_GraphicsItem = QStyleOptionTabBarBase::SO_GraphicsItem,
SO_Complex = QStyleOptionTabBarBase::SO_Complex,
SO_Slider = QStyleOptionTabBarBase::SO_Slider,
SO_SpinBox = QStyleOptionTabBarBase::SO_SpinBox,
SO_ToolButton = QStyleOptionTabBarBase::SO_ToolButton,
SO_ComboBox = QStyleOptionTabBarBase::SO_ComboBox,
SO_TitleBar = QStyleOptionTabBarBase::SO_TitleBar,
SO_GroupBox = QStyleOptionTabBarBase::SO_GroupBox,
SO_SizeGrip = QStyleOptionTabBarBase::SO_SizeGrip,
SO_CustomBase = QStyleOptionTabBarBase::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionTabBarBase::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionTabBarBase_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionTabBarBase_Wrapper(RJSApi& h, QStyleOptionTabBarBase* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionTabBarBase_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionTabBarBase
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionTabBarBase_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionTabBarBase
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionTabBarBase
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionTabBarBase::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionTabBarBase* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionTabBarBase* getWrapped() const {
          
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
          QStyleOptionTabBarBase* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionTabBarBase*> basecasters_QStyleOptionTabBarBase;

      public:
        static void registerBasecaster_QStyleOptionTabBarBase(RJSBasecaster_QStyleOptionTabBarBase* bc) {
          basecasters_QStyleOptionTabBarBase.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionTabBarBase_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionTabBarBase_Wrapper, "org.qcad.QStyleOptionTabBarBase_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionHeader>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionHeader
    class QTJSAPI_EXPORT QStyleOptionHeader_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionHeader_Wrapper(const QStyleOptionHeader_Wrapper&);

    public:
      // initialization of QStyleOptionHeader:
      static void init(RJSApi& handler);

      
        static QStyleOptionHeader* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QStyleOptionHeaderV2::getIdStatic()) {
                return (QStyleOptionHeader*)(QStyleOptionHeaderV2*)vp;
              }
              

          // hook for modules to cast from other types to base QStyleOptionHeader:
          for (int i=0; i<basecasters_QStyleOptionHeader.length(); i++) {
            RJSBasecaster_QStyleOptionHeader* basecaster = basecasters_QStyleOptionHeader[i];
            QStyleOptionHeader* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionHeader:
          if (t==RJSType_QStyleOptionHeader::getIdStatic()) {
            return (QStyleOptionHeader*)vp;
          }

          qWarning() << "QStyleOptionHeader_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionHeader* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionHeader*: wrapper wraps NULL";
          }

          QStyleOptionHeader* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionHeader*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionHeader::SO_Default,
SO_FocusRect = QStyleOptionHeader::SO_FocusRect,
SO_Button = QStyleOptionHeader::SO_Button,
SO_Tab = QStyleOptionHeader::SO_Tab,
SO_MenuItem = QStyleOptionHeader::SO_MenuItem,
SO_Frame = QStyleOptionHeader::SO_Frame,
SO_ProgressBar = QStyleOptionHeader::SO_ProgressBar,
SO_ToolBox = QStyleOptionHeader::SO_ToolBox,
SO_Header = QStyleOptionHeader::SO_Header,
SO_DockWidget = QStyleOptionHeader::SO_DockWidget,
SO_ViewItem = QStyleOptionHeader::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionHeader::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionHeader::SO_TabBarBase,
SO_RubberBand = QStyleOptionHeader::SO_RubberBand,
SO_ToolBar = QStyleOptionHeader::SO_ToolBar,
SO_GraphicsItem = QStyleOptionHeader::SO_GraphicsItem,
SO_Complex = QStyleOptionHeader::SO_Complex,
SO_Slider = QStyleOptionHeader::SO_Slider,
SO_SpinBox = QStyleOptionHeader::SO_SpinBox,
SO_ToolButton = QStyleOptionHeader::SO_ToolButton,
SO_ComboBox = QStyleOptionHeader::SO_ComboBox,
SO_TitleBar = QStyleOptionHeader::SO_TitleBar,
SO_GroupBox = QStyleOptionHeader::SO_GroupBox,
SO_SizeGrip = QStyleOptionHeader::SO_SizeGrip,
SO_CustomBase = QStyleOptionHeader::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionHeader::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

  enum SectionPosition {
    Beginning = QStyleOptionHeader::Beginning,
Middle = QStyleOptionHeader::Middle,
End = QStyleOptionHeader::End,
OnlyOneSection = QStyleOptionHeader::OnlyOneSection,

  };
  Q_ENUM(SectionPosition)

  enum SelectedPosition {
    NotAdjacent = QStyleOptionHeader::NotAdjacent,
NextIsSelected = QStyleOptionHeader::NextIsSelected,
PreviousIsSelected = QStyleOptionHeader::PreviousIsSelected,
NextAndPreviousAreSelected = QStyleOptionHeader::NextAndPreviousAreSelected,

  };
  Q_ENUM(SelectedPosition)

  enum SortIndicator {
    None = QStyleOptionHeader::None,
SortUp = QStyleOptionHeader::SortUp,
SortDown = QStyleOptionHeader::SortDown,

  };
  Q_ENUM(SortIndicator)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionHeader_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionHeader_Wrapper(RJSApi& h, QStyleOptionHeader* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionHeader_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionHeader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionHeader_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionHeader
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionHeader
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionHeader::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionHeader* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionHeader* getWrapped() const {
          
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
          QStyleOptionHeader* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionHeader*> basecasters_QStyleOptionHeader;

      public:
        static void registerBasecaster_QStyleOptionHeader(RJSBasecaster_QStyleOptionHeader* bc) {
          basecasters_QStyleOptionHeader.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionHeader_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionHeader_Wrapper, "org.qcad.QStyleOptionHeader_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionHeaderV2>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionHeaderV2
    class QTJSAPI_EXPORT QStyleOptionHeaderV2_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionHeaderV2_Wrapper(const QStyleOptionHeaderV2_Wrapper&);

    public:
      // initialization of QStyleOptionHeaderV2:
      static void init(RJSApi& handler);

      
        static QStyleOptionHeaderV2* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionHeaderV2:
          for (int i=0; i<basecasters_QStyleOptionHeaderV2.length(); i++) {
            RJSBasecaster_QStyleOptionHeaderV2* basecaster = basecasters_QStyleOptionHeaderV2[i];
            QStyleOptionHeaderV2* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionHeaderV2:
          if (t==RJSType_QStyleOptionHeaderV2::getIdStatic()) {
            return (QStyleOptionHeaderV2*)vp;
          }

          qWarning() << "QStyleOptionHeaderV2_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionHeaderV2* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionHeaderV2*: wrapper wraps NULL";
          }

          QStyleOptionHeaderV2* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionHeaderV2*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum SectionPosition {
    Beginning = QStyleOptionHeaderV2::Beginning,
Middle = QStyleOptionHeaderV2::Middle,
End = QStyleOptionHeaderV2::End,
OnlyOneSection = QStyleOptionHeaderV2::OnlyOneSection,

  };
  Q_ENUM(SectionPosition)

  enum SelectedPosition {
    NotAdjacent = QStyleOptionHeaderV2::NotAdjacent,
NextIsSelected = QStyleOptionHeaderV2::NextIsSelected,
PreviousIsSelected = QStyleOptionHeaderV2::PreviousIsSelected,
NextAndPreviousAreSelected = QStyleOptionHeaderV2::NextAndPreviousAreSelected,

  };
  Q_ENUM(SelectedPosition)

  enum SortIndicator {
    None = QStyleOptionHeaderV2::None,
SortUp = QStyleOptionHeaderV2::SortUp,
SortDown = QStyleOptionHeaderV2::SortDown,

  };
  Q_ENUM(SortIndicator)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionHeaderV2_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionHeaderV2_Wrapper(RJSApi& h, QStyleOptionHeaderV2* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionHeaderV2_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionHeaderV2
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionHeaderV2_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionHeaderV2
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionHeaderV2::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionHeaderV2* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionHeaderV2* getWrapped() const {
          
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
          QStyleOptionHeaderV2* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionHeaderV2*> basecasters_QStyleOptionHeaderV2;

      public:
        static void registerBasecaster_QStyleOptionHeaderV2(RJSBasecaster_QStyleOptionHeaderV2* bc) {
          basecasters_QStyleOptionHeaderV2.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionHeaderV2_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionHeaderV2_Wrapper, "org.qcad.QStyleOptionHeaderV2_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionButton>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionButton
    class QTJSAPI_EXPORT QStyleOptionButton_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionButton_Wrapper(const QStyleOptionButton_Wrapper&);

    public:
      // initialization of QStyleOptionButton:
      static void init(RJSApi& handler);

      
        static QStyleOptionButton* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionButton:
          for (int i=0; i<basecasters_QStyleOptionButton.length(); i++) {
            RJSBasecaster_QStyleOptionButton* basecaster = basecasters_QStyleOptionButton[i];
            QStyleOptionButton* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionButton:
          if (t==RJSType_QStyleOptionButton::getIdStatic()) {
            return (QStyleOptionButton*)vp;
          }

          qWarning() << "QStyleOptionButton_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionButton* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionButton*: wrapper wraps NULL";
          }

          QStyleOptionButton* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionButton*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionButton::SO_Default,
SO_FocusRect = QStyleOptionButton::SO_FocusRect,
SO_Button = QStyleOptionButton::SO_Button,
SO_Tab = QStyleOptionButton::SO_Tab,
SO_MenuItem = QStyleOptionButton::SO_MenuItem,
SO_Frame = QStyleOptionButton::SO_Frame,
SO_ProgressBar = QStyleOptionButton::SO_ProgressBar,
SO_ToolBox = QStyleOptionButton::SO_ToolBox,
SO_Header = QStyleOptionButton::SO_Header,
SO_DockWidget = QStyleOptionButton::SO_DockWidget,
SO_ViewItem = QStyleOptionButton::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionButton::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionButton::SO_TabBarBase,
SO_RubberBand = QStyleOptionButton::SO_RubberBand,
SO_ToolBar = QStyleOptionButton::SO_ToolBar,
SO_GraphicsItem = QStyleOptionButton::SO_GraphicsItem,
SO_Complex = QStyleOptionButton::SO_Complex,
SO_Slider = QStyleOptionButton::SO_Slider,
SO_SpinBox = QStyleOptionButton::SO_SpinBox,
SO_ToolButton = QStyleOptionButton::SO_ToolButton,
SO_ComboBox = QStyleOptionButton::SO_ComboBox,
SO_TitleBar = QStyleOptionButton::SO_TitleBar,
SO_GroupBox = QStyleOptionButton::SO_GroupBox,
SO_SizeGrip = QStyleOptionButton::SO_SizeGrip,
SO_CustomBase = QStyleOptionButton::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionButton::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

  enum ButtonFeature {
    None = QStyleOptionButton::None,
Flat = QStyleOptionButton::Flat,
HasMenu = QStyleOptionButton::HasMenu,
DefaultButton = QStyleOptionButton::DefaultButton,
AutoDefaultButton = QStyleOptionButton::AutoDefaultButton,
CommandLinkButton = QStyleOptionButton::CommandLinkButton,

  };
  Q_ENUM(ButtonFeature)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionButton_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionButton_Wrapper(RJSApi& h, QStyleOptionButton* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionButton_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionButton
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionButton_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionButton
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionButton
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionButton::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionButton* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionButton* getWrapped() const {
          
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
          QStyleOptionButton* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionButton*> basecasters_QStyleOptionButton;

      public:
        static void registerBasecaster_QStyleOptionButton(RJSBasecaster_QStyleOptionButton* bc) {
          basecasters_QStyleOptionButton.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionButton_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionButton_Wrapper, "org.qcad.QStyleOptionButton_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionTab>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionTab
    class QTJSAPI_EXPORT QStyleOptionTab_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionTab_Wrapper(const QStyleOptionTab_Wrapper&);

    public:
      // initialization of QStyleOptionTab:
      static void init(RJSApi& handler);

      
        static QStyleOptionTab* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionTab:
          for (int i=0; i<basecasters_QStyleOptionTab.length(); i++) {
            RJSBasecaster_QStyleOptionTab* basecaster = basecasters_QStyleOptionTab[i];
            QStyleOptionTab* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionTab:
          if (t==RJSType_QStyleOptionTab::getIdStatic()) {
            return (QStyleOptionTab*)vp;
          }

          qWarning() << "QStyleOptionTab_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionTab* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionTab*: wrapper wraps NULL";
          }

          QStyleOptionTab* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionTab*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionTab::SO_Default,
SO_FocusRect = QStyleOptionTab::SO_FocusRect,
SO_Button = QStyleOptionTab::SO_Button,
SO_Tab = QStyleOptionTab::SO_Tab,
SO_MenuItem = QStyleOptionTab::SO_MenuItem,
SO_Frame = QStyleOptionTab::SO_Frame,
SO_ProgressBar = QStyleOptionTab::SO_ProgressBar,
SO_ToolBox = QStyleOptionTab::SO_ToolBox,
SO_Header = QStyleOptionTab::SO_Header,
SO_DockWidget = QStyleOptionTab::SO_DockWidget,
SO_ViewItem = QStyleOptionTab::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionTab::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionTab::SO_TabBarBase,
SO_RubberBand = QStyleOptionTab::SO_RubberBand,
SO_ToolBar = QStyleOptionTab::SO_ToolBar,
SO_GraphicsItem = QStyleOptionTab::SO_GraphicsItem,
SO_Complex = QStyleOptionTab::SO_Complex,
SO_Slider = QStyleOptionTab::SO_Slider,
SO_SpinBox = QStyleOptionTab::SO_SpinBox,
SO_ToolButton = QStyleOptionTab::SO_ToolButton,
SO_ComboBox = QStyleOptionTab::SO_ComboBox,
SO_TitleBar = QStyleOptionTab::SO_TitleBar,
SO_GroupBox = QStyleOptionTab::SO_GroupBox,
SO_SizeGrip = QStyleOptionTab::SO_SizeGrip,
SO_CustomBase = QStyleOptionTab::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionTab::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

  enum TabPosition {
    Beginning = QStyleOptionTab::Beginning,
Middle = QStyleOptionTab::Middle,
End = QStyleOptionTab::End,
OnlyOneTab = QStyleOptionTab::OnlyOneTab,
Moving = QStyleOptionTab::Moving,

  };
  Q_ENUM(TabPosition)

  enum SelectedPosition {
    NotAdjacent = QStyleOptionTab::NotAdjacent,
NextIsSelected = QStyleOptionTab::NextIsSelected,
PreviousIsSelected = QStyleOptionTab::PreviousIsSelected,

  };
  Q_ENUM(SelectedPosition)

  enum CornerWidget {
    NoCornerWidgets = QStyleOptionTab::NoCornerWidgets,
LeftCornerWidget = QStyleOptionTab::LeftCornerWidget,
RightCornerWidget = QStyleOptionTab::RightCornerWidget,

  };
  Q_ENUM(CornerWidget)

  enum TabFeature {
    None = QStyleOptionTab::None,
HasFrame = QStyleOptionTab::HasFrame,
MinimumSizeHint = QStyleOptionTab::MinimumSizeHint,

  };
  Q_ENUM(TabFeature)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionTab_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionTab_Wrapper(RJSApi& h, QStyleOptionTab* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionTab_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionTab
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionTab_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionTab
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionTab
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionTab::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionTab* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionTab* getWrapped() const {
          
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
          QStyleOptionTab* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionTab*> basecasters_QStyleOptionTab;

      public:
        static void registerBasecaster_QStyleOptionTab(RJSBasecaster_QStyleOptionTab* bc) {
          basecasters_QStyleOptionTab.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionTab_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionTab_Wrapper, "org.qcad.QStyleOptionTab_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionToolBar>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionToolBar
    class QTJSAPI_EXPORT QStyleOptionToolBar_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionToolBar_Wrapper(const QStyleOptionToolBar_Wrapper&);

    public:
      // initialization of QStyleOptionToolBar:
      static void init(RJSApi& handler);

      
        static QStyleOptionToolBar* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionToolBar:
          for (int i=0; i<basecasters_QStyleOptionToolBar.length(); i++) {
            RJSBasecaster_QStyleOptionToolBar* basecaster = basecasters_QStyleOptionToolBar[i];
            QStyleOptionToolBar* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionToolBar:
          if (t==RJSType_QStyleOptionToolBar::getIdStatic()) {
            return (QStyleOptionToolBar*)vp;
          }

          qWarning() << "QStyleOptionToolBar_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionToolBar* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionToolBar*: wrapper wraps NULL";
          }

          QStyleOptionToolBar* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionToolBar*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionToolBar::SO_Default,
SO_FocusRect = QStyleOptionToolBar::SO_FocusRect,
SO_Button = QStyleOptionToolBar::SO_Button,
SO_Tab = QStyleOptionToolBar::SO_Tab,
SO_MenuItem = QStyleOptionToolBar::SO_MenuItem,
SO_Frame = QStyleOptionToolBar::SO_Frame,
SO_ProgressBar = QStyleOptionToolBar::SO_ProgressBar,
SO_ToolBox = QStyleOptionToolBar::SO_ToolBox,
SO_Header = QStyleOptionToolBar::SO_Header,
SO_DockWidget = QStyleOptionToolBar::SO_DockWidget,
SO_ViewItem = QStyleOptionToolBar::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionToolBar::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionToolBar::SO_TabBarBase,
SO_RubberBand = QStyleOptionToolBar::SO_RubberBand,
SO_ToolBar = QStyleOptionToolBar::SO_ToolBar,
SO_GraphicsItem = QStyleOptionToolBar::SO_GraphicsItem,
SO_Complex = QStyleOptionToolBar::SO_Complex,
SO_Slider = QStyleOptionToolBar::SO_Slider,
SO_SpinBox = QStyleOptionToolBar::SO_SpinBox,
SO_ToolButton = QStyleOptionToolBar::SO_ToolButton,
SO_ComboBox = QStyleOptionToolBar::SO_ComboBox,
SO_TitleBar = QStyleOptionToolBar::SO_TitleBar,
SO_GroupBox = QStyleOptionToolBar::SO_GroupBox,
SO_SizeGrip = QStyleOptionToolBar::SO_SizeGrip,
SO_CustomBase = QStyleOptionToolBar::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionToolBar::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

  enum ToolBarPosition {
    Beginning = QStyleOptionToolBar::Beginning,
Middle = QStyleOptionToolBar::Middle,
End = QStyleOptionToolBar::End,
OnlyOne = QStyleOptionToolBar::OnlyOne,

  };
  Q_ENUM(ToolBarPosition)

  enum ToolBarFeature {
    None = QStyleOptionToolBar::None,
Movable = QStyleOptionToolBar::Movable,

  };
  Q_ENUM(ToolBarFeature)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionToolBar_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionToolBar_Wrapper(RJSApi& h, QStyleOptionToolBar* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionToolBar_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionToolBar
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionToolBar_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionToolBar
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionToolBar
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionToolBar::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionToolBar* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionToolBar* getWrapped() const {
          
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
          QStyleOptionToolBar* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionToolBar*> basecasters_QStyleOptionToolBar;

      public:
        static void registerBasecaster_QStyleOptionToolBar(RJSBasecaster_QStyleOptionToolBar* bc) {
          basecasters_QStyleOptionToolBar.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionToolBar_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionToolBar_Wrapper, "org.qcad.QStyleOptionToolBar_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionProgressBar>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionProgressBar
    class QTJSAPI_EXPORT QStyleOptionProgressBar_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionProgressBar_Wrapper(const QStyleOptionProgressBar_Wrapper&);

    public:
      // initialization of QStyleOptionProgressBar:
      static void init(RJSApi& handler);

      
        static QStyleOptionProgressBar* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionProgressBar:
          for (int i=0; i<basecasters_QStyleOptionProgressBar.length(); i++) {
            RJSBasecaster_QStyleOptionProgressBar* basecaster = basecasters_QStyleOptionProgressBar[i];
            QStyleOptionProgressBar* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionProgressBar:
          if (t==RJSType_QStyleOptionProgressBar::getIdStatic()) {
            return (QStyleOptionProgressBar*)vp;
          }

          qWarning() << "QStyleOptionProgressBar_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionProgressBar* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionProgressBar*: wrapper wraps NULL";
          }

          QStyleOptionProgressBar* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionProgressBar*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionProgressBar::SO_Default,
SO_FocusRect = QStyleOptionProgressBar::SO_FocusRect,
SO_Button = QStyleOptionProgressBar::SO_Button,
SO_Tab = QStyleOptionProgressBar::SO_Tab,
SO_MenuItem = QStyleOptionProgressBar::SO_MenuItem,
SO_Frame = QStyleOptionProgressBar::SO_Frame,
SO_ProgressBar = QStyleOptionProgressBar::SO_ProgressBar,
SO_ToolBox = QStyleOptionProgressBar::SO_ToolBox,
SO_Header = QStyleOptionProgressBar::SO_Header,
SO_DockWidget = QStyleOptionProgressBar::SO_DockWidget,
SO_ViewItem = QStyleOptionProgressBar::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionProgressBar::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionProgressBar::SO_TabBarBase,
SO_RubberBand = QStyleOptionProgressBar::SO_RubberBand,
SO_ToolBar = QStyleOptionProgressBar::SO_ToolBar,
SO_GraphicsItem = QStyleOptionProgressBar::SO_GraphicsItem,
SO_Complex = QStyleOptionProgressBar::SO_Complex,
SO_Slider = QStyleOptionProgressBar::SO_Slider,
SO_SpinBox = QStyleOptionProgressBar::SO_SpinBox,
SO_ToolButton = QStyleOptionProgressBar::SO_ToolButton,
SO_ComboBox = QStyleOptionProgressBar::SO_ComboBox,
SO_TitleBar = QStyleOptionProgressBar::SO_TitleBar,
SO_GroupBox = QStyleOptionProgressBar::SO_GroupBox,
SO_SizeGrip = QStyleOptionProgressBar::SO_SizeGrip,
SO_CustomBase = QStyleOptionProgressBar::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionProgressBar::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionProgressBar_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionProgressBar_Wrapper(RJSApi& h, QStyleOptionProgressBar* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionProgressBar_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionProgressBar
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionProgressBar_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionProgressBar
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionProgressBar
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionProgressBar::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionProgressBar* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionProgressBar* getWrapped() const {
          
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
          QStyleOptionProgressBar* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionProgressBar*> basecasters_QStyleOptionProgressBar;

      public:
        static void registerBasecaster_QStyleOptionProgressBar(RJSBasecaster_QStyleOptionProgressBar* bc) {
          basecasters_QStyleOptionProgressBar.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionProgressBar_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionProgressBar_Wrapper, "org.qcad.QStyleOptionProgressBar_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionMenuItem>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionMenuItem
    class QTJSAPI_EXPORT QStyleOptionMenuItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionMenuItem_Wrapper(const QStyleOptionMenuItem_Wrapper&);

    public:
      // initialization of QStyleOptionMenuItem:
      static void init(RJSApi& handler);

      
        static QStyleOptionMenuItem* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionMenuItem:
          for (int i=0; i<basecasters_QStyleOptionMenuItem.length(); i++) {
            RJSBasecaster_QStyleOptionMenuItem* basecaster = basecasters_QStyleOptionMenuItem[i];
            QStyleOptionMenuItem* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionMenuItem:
          if (t==RJSType_QStyleOptionMenuItem::getIdStatic()) {
            return (QStyleOptionMenuItem*)vp;
          }

          qWarning() << "QStyleOptionMenuItem_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionMenuItem* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionMenuItem*: wrapper wraps NULL";
          }

          QStyleOptionMenuItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionMenuItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionMenuItem::SO_Default,
SO_FocusRect = QStyleOptionMenuItem::SO_FocusRect,
SO_Button = QStyleOptionMenuItem::SO_Button,
SO_Tab = QStyleOptionMenuItem::SO_Tab,
SO_MenuItem = QStyleOptionMenuItem::SO_MenuItem,
SO_Frame = QStyleOptionMenuItem::SO_Frame,
SO_ProgressBar = QStyleOptionMenuItem::SO_ProgressBar,
SO_ToolBox = QStyleOptionMenuItem::SO_ToolBox,
SO_Header = QStyleOptionMenuItem::SO_Header,
SO_DockWidget = QStyleOptionMenuItem::SO_DockWidget,
SO_ViewItem = QStyleOptionMenuItem::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionMenuItem::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionMenuItem::SO_TabBarBase,
SO_RubberBand = QStyleOptionMenuItem::SO_RubberBand,
SO_ToolBar = QStyleOptionMenuItem::SO_ToolBar,
SO_GraphicsItem = QStyleOptionMenuItem::SO_GraphicsItem,
SO_Complex = QStyleOptionMenuItem::SO_Complex,
SO_Slider = QStyleOptionMenuItem::SO_Slider,
SO_SpinBox = QStyleOptionMenuItem::SO_SpinBox,
SO_ToolButton = QStyleOptionMenuItem::SO_ToolButton,
SO_ComboBox = QStyleOptionMenuItem::SO_ComboBox,
SO_TitleBar = QStyleOptionMenuItem::SO_TitleBar,
SO_GroupBox = QStyleOptionMenuItem::SO_GroupBox,
SO_SizeGrip = QStyleOptionMenuItem::SO_SizeGrip,
SO_CustomBase = QStyleOptionMenuItem::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionMenuItem::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

  enum MenuItemType {
    Normal = QStyleOptionMenuItem::Normal,
DefaultItem = QStyleOptionMenuItem::DefaultItem,
Separator = QStyleOptionMenuItem::Separator,
SubMenu = QStyleOptionMenuItem::SubMenu,
Scroller = QStyleOptionMenuItem::Scroller,
TearOff = QStyleOptionMenuItem::TearOff,
Margin = QStyleOptionMenuItem::Margin,
EmptyArea = QStyleOptionMenuItem::EmptyArea,

  };
  Q_ENUM(MenuItemType)

  enum CheckType {
    NotCheckable = QStyleOptionMenuItem::NotCheckable,
Exclusive = QStyleOptionMenuItem::Exclusive,
NonExclusive = QStyleOptionMenuItem::NonExclusive,

  };
  Q_ENUM(CheckType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionMenuItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionMenuItem_Wrapper(RJSApi& h, QStyleOptionMenuItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionMenuItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionMenuItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionMenuItem_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionMenuItem
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionMenuItem
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionMenuItem::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionMenuItem* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionMenuItem* getWrapped() const {
          
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
          QStyleOptionMenuItem* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionMenuItem*> basecasters_QStyleOptionMenuItem;

      public:
        static void registerBasecaster_QStyleOptionMenuItem(RJSBasecaster_QStyleOptionMenuItem* bc) {
          basecasters_QStyleOptionMenuItem.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionMenuItem_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionMenuItem_Wrapper, "org.qcad.QStyleOptionMenuItem_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionDockWidget>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionDockWidget
    class QTJSAPI_EXPORT QStyleOptionDockWidget_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionDockWidget_Wrapper(const QStyleOptionDockWidget_Wrapper&);

    public:
      // initialization of QStyleOptionDockWidget:
      static void init(RJSApi& handler);

      
        static QStyleOptionDockWidget* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionDockWidget:
          for (int i=0; i<basecasters_QStyleOptionDockWidget.length(); i++) {
            RJSBasecaster_QStyleOptionDockWidget* basecaster = basecasters_QStyleOptionDockWidget[i];
            QStyleOptionDockWidget* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionDockWidget:
          if (t==RJSType_QStyleOptionDockWidget::getIdStatic()) {
            return (QStyleOptionDockWidget*)vp;
          }

          qWarning() << "QStyleOptionDockWidget_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionDockWidget* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionDockWidget*: wrapper wraps NULL";
          }

          QStyleOptionDockWidget* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionDockWidget*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionDockWidget::SO_Default,
SO_FocusRect = QStyleOptionDockWidget::SO_FocusRect,
SO_Button = QStyleOptionDockWidget::SO_Button,
SO_Tab = QStyleOptionDockWidget::SO_Tab,
SO_MenuItem = QStyleOptionDockWidget::SO_MenuItem,
SO_Frame = QStyleOptionDockWidget::SO_Frame,
SO_ProgressBar = QStyleOptionDockWidget::SO_ProgressBar,
SO_ToolBox = QStyleOptionDockWidget::SO_ToolBox,
SO_Header = QStyleOptionDockWidget::SO_Header,
SO_DockWidget = QStyleOptionDockWidget::SO_DockWidget,
SO_ViewItem = QStyleOptionDockWidget::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionDockWidget::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionDockWidget::SO_TabBarBase,
SO_RubberBand = QStyleOptionDockWidget::SO_RubberBand,
SO_ToolBar = QStyleOptionDockWidget::SO_ToolBar,
SO_GraphicsItem = QStyleOptionDockWidget::SO_GraphicsItem,
SO_Complex = QStyleOptionDockWidget::SO_Complex,
SO_Slider = QStyleOptionDockWidget::SO_Slider,
SO_SpinBox = QStyleOptionDockWidget::SO_SpinBox,
SO_ToolButton = QStyleOptionDockWidget::SO_ToolButton,
SO_ComboBox = QStyleOptionDockWidget::SO_ComboBox,
SO_TitleBar = QStyleOptionDockWidget::SO_TitleBar,
SO_GroupBox = QStyleOptionDockWidget::SO_GroupBox,
SO_SizeGrip = QStyleOptionDockWidget::SO_SizeGrip,
SO_CustomBase = QStyleOptionDockWidget::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionDockWidget::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionDockWidget_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionDockWidget_Wrapper(RJSApi& h, QStyleOptionDockWidget* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionDockWidget_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionDockWidget
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionDockWidget_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionDockWidget
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionDockWidget
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionDockWidget::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionDockWidget* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionDockWidget* getWrapped() const {
          
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
          QStyleOptionDockWidget* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionDockWidget*> basecasters_QStyleOptionDockWidget;

      public:
        static void registerBasecaster_QStyleOptionDockWidget(RJSBasecaster_QStyleOptionDockWidget* bc) {
          basecasters_QStyleOptionDockWidget.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionDockWidget_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionDockWidget_Wrapper, "org.qcad.QStyleOptionDockWidget_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionViewItem>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionViewItem
    class QTJSAPI_EXPORT QStyleOptionViewItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionViewItem_Wrapper(const QStyleOptionViewItem_Wrapper&);

    public:
      // initialization of QStyleOptionViewItem:
      static void init(RJSApi& handler);

      
        static QStyleOptionViewItem* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionViewItem:
          for (int i=0; i<basecasters_QStyleOptionViewItem.length(); i++) {
            RJSBasecaster_QStyleOptionViewItem* basecaster = basecasters_QStyleOptionViewItem[i];
            QStyleOptionViewItem* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionViewItem:
          if (t==RJSType_QStyleOptionViewItem::getIdStatic()) {
            return (QStyleOptionViewItem*)vp;
          }

          qWarning() << "QStyleOptionViewItem_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionViewItem* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionViewItem*: wrapper wraps NULL";
          }

          QStyleOptionViewItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionViewItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionViewItem::SO_Default,
SO_FocusRect = QStyleOptionViewItem::SO_FocusRect,
SO_Button = QStyleOptionViewItem::SO_Button,
SO_Tab = QStyleOptionViewItem::SO_Tab,
SO_MenuItem = QStyleOptionViewItem::SO_MenuItem,
SO_Frame = QStyleOptionViewItem::SO_Frame,
SO_ProgressBar = QStyleOptionViewItem::SO_ProgressBar,
SO_ToolBox = QStyleOptionViewItem::SO_ToolBox,
SO_Header = QStyleOptionViewItem::SO_Header,
SO_DockWidget = QStyleOptionViewItem::SO_DockWidget,
SO_ViewItem = QStyleOptionViewItem::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionViewItem::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionViewItem::SO_TabBarBase,
SO_RubberBand = QStyleOptionViewItem::SO_RubberBand,
SO_ToolBar = QStyleOptionViewItem::SO_ToolBar,
SO_GraphicsItem = QStyleOptionViewItem::SO_GraphicsItem,
SO_Complex = QStyleOptionViewItem::SO_Complex,
SO_Slider = QStyleOptionViewItem::SO_Slider,
SO_SpinBox = QStyleOptionViewItem::SO_SpinBox,
SO_ToolButton = QStyleOptionViewItem::SO_ToolButton,
SO_ComboBox = QStyleOptionViewItem::SO_ComboBox,
SO_TitleBar = QStyleOptionViewItem::SO_TitleBar,
SO_GroupBox = QStyleOptionViewItem::SO_GroupBox,
SO_SizeGrip = QStyleOptionViewItem::SO_SizeGrip,
SO_CustomBase = QStyleOptionViewItem::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionViewItem::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

  enum Position {
    Left = QStyleOptionViewItem::Left,
Right = QStyleOptionViewItem::Right,
Top = QStyleOptionViewItem::Top,
Bottom = QStyleOptionViewItem::Bottom,

  };
  Q_ENUM(Position)

  enum ViewItemFeature {
    None = QStyleOptionViewItem::None,
WrapText = QStyleOptionViewItem::WrapText,
Alternate = QStyleOptionViewItem::Alternate,
HasCheckIndicator = QStyleOptionViewItem::HasCheckIndicator,
HasDisplay = QStyleOptionViewItem::HasDisplay,
HasDecoration = QStyleOptionViewItem::HasDecoration,
IsDecoratedRootColumn = QStyleOptionViewItem::IsDecoratedRootColumn,
IsDecorationForRootColumn = QStyleOptionViewItem::IsDecorationForRootColumn,

  };
  Q_ENUM(ViewItemFeature)

  enum ViewItemPosition {
    Invalid = QStyleOptionViewItem::Invalid,
Beginning = QStyleOptionViewItem::Beginning,
Middle = QStyleOptionViewItem::Middle,
End = QStyleOptionViewItem::End,
OnlyOne = QStyleOptionViewItem::OnlyOne,

  };
  Q_ENUM(ViewItemPosition)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionViewItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionViewItem_Wrapper(RJSApi& h, QStyleOptionViewItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionViewItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionViewItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionViewItem_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionViewItem
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionViewItem
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionViewItem::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionViewItem* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionViewItem* getWrapped() const {
          
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
          QStyleOptionViewItem* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionViewItem*> basecasters_QStyleOptionViewItem;

      public:
        static void registerBasecaster_QStyleOptionViewItem(RJSBasecaster_QStyleOptionViewItem* bc) {
          basecasters_QStyleOptionViewItem.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionViewItem_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionViewItem_Wrapper, "org.qcad.QStyleOptionViewItem_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionToolBox>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionToolBox
    class QTJSAPI_EXPORT QStyleOptionToolBox_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionToolBox_Wrapper(const QStyleOptionToolBox_Wrapper&);

    public:
      // initialization of QStyleOptionToolBox:
      static void init(RJSApi& handler);

      
        static QStyleOptionToolBox* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionToolBox:
          for (int i=0; i<basecasters_QStyleOptionToolBox.length(); i++) {
            RJSBasecaster_QStyleOptionToolBox* basecaster = basecasters_QStyleOptionToolBox[i];
            QStyleOptionToolBox* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionToolBox:
          if (t==RJSType_QStyleOptionToolBox::getIdStatic()) {
            return (QStyleOptionToolBox*)vp;
          }

          qWarning() << "QStyleOptionToolBox_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionToolBox* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionToolBox*: wrapper wraps NULL";
          }

          QStyleOptionToolBox* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionToolBox*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionToolBox::SO_Default,
SO_FocusRect = QStyleOptionToolBox::SO_FocusRect,
SO_Button = QStyleOptionToolBox::SO_Button,
SO_Tab = QStyleOptionToolBox::SO_Tab,
SO_MenuItem = QStyleOptionToolBox::SO_MenuItem,
SO_Frame = QStyleOptionToolBox::SO_Frame,
SO_ProgressBar = QStyleOptionToolBox::SO_ProgressBar,
SO_ToolBox = QStyleOptionToolBox::SO_ToolBox,
SO_Header = QStyleOptionToolBox::SO_Header,
SO_DockWidget = QStyleOptionToolBox::SO_DockWidget,
SO_ViewItem = QStyleOptionToolBox::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionToolBox::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionToolBox::SO_TabBarBase,
SO_RubberBand = QStyleOptionToolBox::SO_RubberBand,
SO_ToolBar = QStyleOptionToolBox::SO_ToolBar,
SO_GraphicsItem = QStyleOptionToolBox::SO_GraphicsItem,
SO_Complex = QStyleOptionToolBox::SO_Complex,
SO_Slider = QStyleOptionToolBox::SO_Slider,
SO_SpinBox = QStyleOptionToolBox::SO_SpinBox,
SO_ToolButton = QStyleOptionToolBox::SO_ToolButton,
SO_ComboBox = QStyleOptionToolBox::SO_ComboBox,
SO_TitleBar = QStyleOptionToolBox::SO_TitleBar,
SO_GroupBox = QStyleOptionToolBox::SO_GroupBox,
SO_SizeGrip = QStyleOptionToolBox::SO_SizeGrip,
SO_CustomBase = QStyleOptionToolBox::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionToolBox::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

  enum TabPosition {
    Beginning = QStyleOptionToolBox::Beginning,
Middle = QStyleOptionToolBox::Middle,
End = QStyleOptionToolBox::End,
OnlyOneTab = QStyleOptionToolBox::OnlyOneTab,

  };
  Q_ENUM(TabPosition)

  enum SelectedPosition {
    NotAdjacent = QStyleOptionToolBox::NotAdjacent,
NextIsSelected = QStyleOptionToolBox::NextIsSelected,
PreviousIsSelected = QStyleOptionToolBox::PreviousIsSelected,

  };
  Q_ENUM(SelectedPosition)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionToolBox_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionToolBox_Wrapper(RJSApi& h, QStyleOptionToolBox* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionToolBox_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionToolBox
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionToolBox_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionToolBox
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionToolBox
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionToolBox::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionToolBox* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionToolBox* getWrapped() const {
          
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
          QStyleOptionToolBox* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionToolBox*> basecasters_QStyleOptionToolBox;

      public:
        static void registerBasecaster_QStyleOptionToolBox(RJSBasecaster_QStyleOptionToolBox* bc) {
          basecasters_QStyleOptionToolBox.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionToolBox_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionToolBox_Wrapper, "org.qcad.QStyleOptionToolBox_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionRubberBand>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionRubberBand
    class QTJSAPI_EXPORT QStyleOptionRubberBand_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionRubberBand_Wrapper(const QStyleOptionRubberBand_Wrapper&);

    public:
      // initialization of QStyleOptionRubberBand:
      static void init(RJSApi& handler);

      
        static QStyleOptionRubberBand* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionRubberBand:
          for (int i=0; i<basecasters_QStyleOptionRubberBand.length(); i++) {
            RJSBasecaster_QStyleOptionRubberBand* basecaster = basecasters_QStyleOptionRubberBand[i];
            QStyleOptionRubberBand* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionRubberBand:
          if (t==RJSType_QStyleOptionRubberBand::getIdStatic()) {
            return (QStyleOptionRubberBand*)vp;
          }

          qWarning() << "QStyleOptionRubberBand_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionRubberBand* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionRubberBand*: wrapper wraps NULL";
          }

          QStyleOptionRubberBand* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionRubberBand*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionRubberBand::SO_Default,
SO_FocusRect = QStyleOptionRubberBand::SO_FocusRect,
SO_Button = QStyleOptionRubberBand::SO_Button,
SO_Tab = QStyleOptionRubberBand::SO_Tab,
SO_MenuItem = QStyleOptionRubberBand::SO_MenuItem,
SO_Frame = QStyleOptionRubberBand::SO_Frame,
SO_ProgressBar = QStyleOptionRubberBand::SO_ProgressBar,
SO_ToolBox = QStyleOptionRubberBand::SO_ToolBox,
SO_Header = QStyleOptionRubberBand::SO_Header,
SO_DockWidget = QStyleOptionRubberBand::SO_DockWidget,
SO_ViewItem = QStyleOptionRubberBand::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionRubberBand::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionRubberBand::SO_TabBarBase,
SO_RubberBand = QStyleOptionRubberBand::SO_RubberBand,
SO_ToolBar = QStyleOptionRubberBand::SO_ToolBar,
SO_GraphicsItem = QStyleOptionRubberBand::SO_GraphicsItem,
SO_Complex = QStyleOptionRubberBand::SO_Complex,
SO_Slider = QStyleOptionRubberBand::SO_Slider,
SO_SpinBox = QStyleOptionRubberBand::SO_SpinBox,
SO_ToolButton = QStyleOptionRubberBand::SO_ToolButton,
SO_ComboBox = QStyleOptionRubberBand::SO_ComboBox,
SO_TitleBar = QStyleOptionRubberBand::SO_TitleBar,
SO_GroupBox = QStyleOptionRubberBand::SO_GroupBox,
SO_SizeGrip = QStyleOptionRubberBand::SO_SizeGrip,
SO_CustomBase = QStyleOptionRubberBand::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionRubberBand::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionRubberBand_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionRubberBand_Wrapper(RJSApi& h, QStyleOptionRubberBand* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionRubberBand_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionRubberBand
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionRubberBand_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionRubberBand
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionRubberBand
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionRubberBand::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionRubberBand* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionRubberBand* getWrapped() const {
          
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
          QStyleOptionRubberBand* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionRubberBand*> basecasters_QStyleOptionRubberBand;

      public:
        static void registerBasecaster_QStyleOptionRubberBand(RJSBasecaster_QStyleOptionRubberBand* bc) {
          basecasters_QStyleOptionRubberBand.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionRubberBand_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionRubberBand_Wrapper, "org.qcad.QStyleOptionRubberBand_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionComplex>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionComplex
    class QTJSAPI_EXPORT QStyleOptionComplex_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionComplex_Wrapper(const QStyleOptionComplex_Wrapper&);

    public:
      // initialization of QStyleOptionComplex:
      static void init(RJSApi& handler);

      
        static QStyleOptionComplex* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QStyleOptionSlider::getIdStatic()) {
                return (QStyleOptionComplex*)(QStyleOptionSlider*)vp;
              }
              
              if (t==RJSType_QStyleOptionSpinBox::getIdStatic()) {
                return (QStyleOptionComplex*)(QStyleOptionSpinBox*)vp;
              }
              
              if (t==RJSType_QStyleOptionToolButton::getIdStatic()) {
                return (QStyleOptionComplex*)(QStyleOptionToolButton*)vp;
              }
              
              if (t==RJSType_QStyleOptionComboBox::getIdStatic()) {
                return (QStyleOptionComplex*)(QStyleOptionComboBox*)vp;
              }
              
              if (t==RJSType_QStyleOptionTitleBar::getIdStatic()) {
                return (QStyleOptionComplex*)(QStyleOptionTitleBar*)vp;
              }
              
              if (t==RJSType_QStyleOptionGroupBox::getIdStatic()) {
                return (QStyleOptionComplex*)(QStyleOptionGroupBox*)vp;
              }
              
              if (t==RJSType_QStyleOptionSizeGrip::getIdStatic()) {
                return (QStyleOptionComplex*)(QStyleOptionSizeGrip*)vp;
              }
              

          // hook for modules to cast from other types to base QStyleOptionComplex:
          for (int i=0; i<basecasters_QStyleOptionComplex.length(); i++) {
            RJSBasecaster_QStyleOptionComplex* basecaster = basecasters_QStyleOptionComplex[i];
            QStyleOptionComplex* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionComplex:
          if (t==RJSType_QStyleOptionComplex::getIdStatic()) {
            return (QStyleOptionComplex*)vp;
          }

          qWarning() << "QStyleOptionComplex_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionComplex* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionComplex*: wrapper wraps NULL";
          }

          QStyleOptionComplex* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionComplex*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionComplex::SO_Default,
SO_FocusRect = QStyleOptionComplex::SO_FocusRect,
SO_Button = QStyleOptionComplex::SO_Button,
SO_Tab = QStyleOptionComplex::SO_Tab,
SO_MenuItem = QStyleOptionComplex::SO_MenuItem,
SO_Frame = QStyleOptionComplex::SO_Frame,
SO_ProgressBar = QStyleOptionComplex::SO_ProgressBar,
SO_ToolBox = QStyleOptionComplex::SO_ToolBox,
SO_Header = QStyleOptionComplex::SO_Header,
SO_DockWidget = QStyleOptionComplex::SO_DockWidget,
SO_ViewItem = QStyleOptionComplex::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionComplex::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionComplex::SO_TabBarBase,
SO_RubberBand = QStyleOptionComplex::SO_RubberBand,
SO_ToolBar = QStyleOptionComplex::SO_ToolBar,
SO_GraphicsItem = QStyleOptionComplex::SO_GraphicsItem,
SO_Complex = QStyleOptionComplex::SO_Complex,
SO_Slider = QStyleOptionComplex::SO_Slider,
SO_SpinBox = QStyleOptionComplex::SO_SpinBox,
SO_ToolButton = QStyleOptionComplex::SO_ToolButton,
SO_ComboBox = QStyleOptionComplex::SO_ComboBox,
SO_TitleBar = QStyleOptionComplex::SO_TitleBar,
SO_GroupBox = QStyleOptionComplex::SO_GroupBox,
SO_SizeGrip = QStyleOptionComplex::SO_SizeGrip,
SO_CustomBase = QStyleOptionComplex::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionComplex::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionComplex_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionComplex_Wrapper(RJSApi& h, QStyleOptionComplex* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionComplex_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionComplex
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionComplex_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionComplex
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionComplex
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionComplex::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionComplex* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionComplex* getWrapped() const {
          
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
          QStyleOptionComplex* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionComplex*> basecasters_QStyleOptionComplex;

      public:
        static void registerBasecaster_QStyleOptionComplex(RJSBasecaster_QStyleOptionComplex* bc) {
          basecasters_QStyleOptionComplex.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionComplex_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionComplex_Wrapper, "org.qcad.QStyleOptionComplex_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionSlider>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionSlider
    class QTJSAPI_EXPORT QStyleOptionSlider_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionSlider_Wrapper(const QStyleOptionSlider_Wrapper&);

    public:
      // initialization of QStyleOptionSlider:
      static void init(RJSApi& handler);

      
        static QStyleOptionSlider* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionSlider:
          for (int i=0; i<basecasters_QStyleOptionSlider.length(); i++) {
            RJSBasecaster_QStyleOptionSlider* basecaster = basecasters_QStyleOptionSlider[i];
            QStyleOptionSlider* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionSlider:
          if (t==RJSType_QStyleOptionSlider::getIdStatic()) {
            return (QStyleOptionSlider*)vp;
          }

          qWarning() << "QStyleOptionSlider_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionSlider* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionSlider*: wrapper wraps NULL";
          }

          QStyleOptionSlider* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionSlider*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionSlider_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionSlider_Wrapper(RJSApi& h, QStyleOptionSlider* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionSlider_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionSlider
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionSlider_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionSlider
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionSlider::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionSlider* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionSlider* getWrapped() const {
          
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
          QStyleOptionSlider* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionSlider*> basecasters_QStyleOptionSlider;

      public:
        static void registerBasecaster_QStyleOptionSlider(RJSBasecaster_QStyleOptionSlider* bc) {
          basecasters_QStyleOptionSlider.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionSlider_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionSlider_Wrapper, "org.qcad.QStyleOptionSlider_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionSpinBox>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionSpinBox
    class QTJSAPI_EXPORT QStyleOptionSpinBox_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionSpinBox_Wrapper(const QStyleOptionSpinBox_Wrapper&);

    public:
      // initialization of QStyleOptionSpinBox:
      static void init(RJSApi& handler);

      
        static QStyleOptionSpinBox* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionSpinBox:
          for (int i=0; i<basecasters_QStyleOptionSpinBox.length(); i++) {
            RJSBasecaster_QStyleOptionSpinBox* basecaster = basecasters_QStyleOptionSpinBox[i];
            QStyleOptionSpinBox* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionSpinBox:
          if (t==RJSType_QStyleOptionSpinBox::getIdStatic()) {
            return (QStyleOptionSpinBox*)vp;
          }

          qWarning() << "QStyleOptionSpinBox_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionSpinBox* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionSpinBox*: wrapper wraps NULL";
          }

          QStyleOptionSpinBox* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionSpinBox*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionSpinBox_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionSpinBox_Wrapper(RJSApi& h, QStyleOptionSpinBox* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionSpinBox_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionSpinBox
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionSpinBox_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionSpinBox
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionSpinBox::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionSpinBox* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionSpinBox* getWrapped() const {
          
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
          QStyleOptionSpinBox* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionSpinBox*> basecasters_QStyleOptionSpinBox;

      public:
        static void registerBasecaster_QStyleOptionSpinBox(RJSBasecaster_QStyleOptionSpinBox* bc) {
          basecasters_QStyleOptionSpinBox.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionSpinBox_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionSpinBox_Wrapper, "org.qcad.QStyleOptionSpinBox_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionToolButton>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionToolButton
    class QTJSAPI_EXPORT QStyleOptionToolButton_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionToolButton_Wrapper(const QStyleOptionToolButton_Wrapper&);

    public:
      // initialization of QStyleOptionToolButton:
      static void init(RJSApi& handler);

      
        static QStyleOptionToolButton* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionToolButton:
          for (int i=0; i<basecasters_QStyleOptionToolButton.length(); i++) {
            RJSBasecaster_QStyleOptionToolButton* basecaster = basecasters_QStyleOptionToolButton[i];
            QStyleOptionToolButton* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionToolButton:
          if (t==RJSType_QStyleOptionToolButton::getIdStatic()) {
            return (QStyleOptionToolButton*)vp;
          }

          qWarning() << "QStyleOptionToolButton_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionToolButton* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionToolButton*: wrapper wraps NULL";
          }

          QStyleOptionToolButton* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionToolButton*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ToolButtonFeature {
    None = QStyleOptionToolButton::None,
Arrow = QStyleOptionToolButton::Arrow,
Menu = QStyleOptionToolButton::Menu,
MenuButtonPopup = QStyleOptionToolButton::MenuButtonPopup,
PopupDelay = QStyleOptionToolButton::PopupDelay,
HasMenu = QStyleOptionToolButton::HasMenu,

  };
  Q_ENUM(ToolButtonFeature)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionToolButton_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionToolButton_Wrapper(RJSApi& h, QStyleOptionToolButton* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionToolButton_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionToolButton
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionToolButton_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionToolButton
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionToolButton::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionToolButton* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionToolButton* getWrapped() const {
          
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
          QStyleOptionToolButton* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionToolButton*> basecasters_QStyleOptionToolButton;

      public:
        static void registerBasecaster_QStyleOptionToolButton(RJSBasecaster_QStyleOptionToolButton* bc) {
          basecasters_QStyleOptionToolButton.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionToolButton_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionToolButton_Wrapper, "org.qcad.QStyleOptionToolButton_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionComboBox>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionComboBox
    class QTJSAPI_EXPORT QStyleOptionComboBox_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionComboBox_Wrapper(const QStyleOptionComboBox_Wrapper&);

    public:
      // initialization of QStyleOptionComboBox:
      static void init(RJSApi& handler);

      
        static QStyleOptionComboBox* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionComboBox:
          for (int i=0; i<basecasters_QStyleOptionComboBox.length(); i++) {
            RJSBasecaster_QStyleOptionComboBox* basecaster = basecasters_QStyleOptionComboBox[i];
            QStyleOptionComboBox* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionComboBox:
          if (t==RJSType_QStyleOptionComboBox::getIdStatic()) {
            return (QStyleOptionComboBox*)vp;
          }

          qWarning() << "QStyleOptionComboBox_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionComboBox* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionComboBox*: wrapper wraps NULL";
          }

          QStyleOptionComboBox* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionComboBox*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionComboBox_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionComboBox_Wrapper(RJSApi& h, QStyleOptionComboBox* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionComboBox_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionComboBox
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionComboBox_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionComboBox
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionComboBox::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionComboBox* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionComboBox* getWrapped() const {
          
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
          QStyleOptionComboBox* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionComboBox*> basecasters_QStyleOptionComboBox;

      public:
        static void registerBasecaster_QStyleOptionComboBox(RJSBasecaster_QStyleOptionComboBox* bc) {
          basecasters_QStyleOptionComboBox.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionComboBox_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionComboBox_Wrapper, "org.qcad.QStyleOptionComboBox_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionTitleBar>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionTitleBar
    class QTJSAPI_EXPORT QStyleOptionTitleBar_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionTitleBar_Wrapper(const QStyleOptionTitleBar_Wrapper&);

    public:
      // initialization of QStyleOptionTitleBar:
      static void init(RJSApi& handler);

      
        static QStyleOptionTitleBar* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionTitleBar:
          for (int i=0; i<basecasters_QStyleOptionTitleBar.length(); i++) {
            RJSBasecaster_QStyleOptionTitleBar* basecaster = basecasters_QStyleOptionTitleBar[i];
            QStyleOptionTitleBar* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionTitleBar:
          if (t==RJSType_QStyleOptionTitleBar::getIdStatic()) {
            return (QStyleOptionTitleBar*)vp;
          }

          qWarning() << "QStyleOptionTitleBar_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionTitleBar* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionTitleBar*: wrapper wraps NULL";
          }

          QStyleOptionTitleBar* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionTitleBar*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionTitleBar_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionTitleBar_Wrapper(RJSApi& h, QStyleOptionTitleBar* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionTitleBar_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionTitleBar
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionTitleBar_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionTitleBar
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionTitleBar::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionTitleBar* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionTitleBar* getWrapped() const {
          
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
          QStyleOptionTitleBar* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionTitleBar*> basecasters_QStyleOptionTitleBar;

      public:
        static void registerBasecaster_QStyleOptionTitleBar(RJSBasecaster_QStyleOptionTitleBar* bc) {
          basecasters_QStyleOptionTitleBar.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionTitleBar_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionTitleBar_Wrapper, "org.qcad.QStyleOptionTitleBar_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionGroupBox>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionGroupBox
    class QTJSAPI_EXPORT QStyleOptionGroupBox_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionGroupBox_Wrapper(const QStyleOptionGroupBox_Wrapper&);

    public:
      // initialization of QStyleOptionGroupBox:
      static void init(RJSApi& handler);

      
        static QStyleOptionGroupBox* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionGroupBox:
          for (int i=0; i<basecasters_QStyleOptionGroupBox.length(); i++) {
            RJSBasecaster_QStyleOptionGroupBox* basecaster = basecasters_QStyleOptionGroupBox[i];
            QStyleOptionGroupBox* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionGroupBox:
          if (t==RJSType_QStyleOptionGroupBox::getIdStatic()) {
            return (QStyleOptionGroupBox*)vp;
          }

          qWarning() << "QStyleOptionGroupBox_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionGroupBox* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionGroupBox*: wrapper wraps NULL";
          }

          QStyleOptionGroupBox* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionGroupBox*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionGroupBox_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionGroupBox_Wrapper(RJSApi& h, QStyleOptionGroupBox* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionGroupBox_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionGroupBox
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionGroupBox_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionGroupBox
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionGroupBox::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionGroupBox* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionGroupBox* getWrapped() const {
          
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
          QStyleOptionGroupBox* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionGroupBox*> basecasters_QStyleOptionGroupBox;

      public:
        static void registerBasecaster_QStyleOptionGroupBox(RJSBasecaster_QStyleOptionGroupBox* bc) {
          basecasters_QStyleOptionGroupBox.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionGroupBox_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionGroupBox_Wrapper, "org.qcad.QStyleOptionGroupBox_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionSizeGrip>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionSizeGrip
    class QTJSAPI_EXPORT QStyleOptionSizeGrip_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionSizeGrip_Wrapper(const QStyleOptionSizeGrip_Wrapper&);

    public:
      // initialization of QStyleOptionSizeGrip:
      static void init(RJSApi& handler);

      
        static QStyleOptionSizeGrip* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionSizeGrip:
          for (int i=0; i<basecasters_QStyleOptionSizeGrip.length(); i++) {
            RJSBasecaster_QStyleOptionSizeGrip* basecaster = basecasters_QStyleOptionSizeGrip[i];
            QStyleOptionSizeGrip* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionSizeGrip:
          if (t==RJSType_QStyleOptionSizeGrip::getIdStatic()) {
            return (QStyleOptionSizeGrip*)vp;
          }

          qWarning() << "QStyleOptionSizeGrip_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionSizeGrip* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionSizeGrip*: wrapper wraps NULL";
          }

          QStyleOptionSizeGrip* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionSizeGrip*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionSizeGrip_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionSizeGrip_Wrapper(RJSApi& h, QStyleOptionSizeGrip* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionSizeGrip_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionSizeGrip
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionSizeGrip_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionSizeGrip
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionSizeGrip::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionSizeGrip* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionSizeGrip* getWrapped() const {
          
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
          QStyleOptionSizeGrip* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionSizeGrip*> basecasters_QStyleOptionSizeGrip;

      public:
        static void registerBasecaster_QStyleOptionSizeGrip(RJSBasecaster_QStyleOptionSizeGrip* bc) {
          basecasters_QStyleOptionSizeGrip.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionSizeGrip_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionSizeGrip_Wrapper, "org.qcad.QStyleOptionSizeGrip_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QStyleOptionGraphicsItem>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QStyleOptionGraphicsItem_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QStyleOptionGraphicsItem_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QStyleOptionGraphicsItem
    // Function: levelOfDetailFromTransform
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  levelOfDetailFromTransform
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QStyleOptionGraphicsItem_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QStyleOptionGraphicsItem
    class QTJSAPI_EXPORT QStyleOptionGraphicsItem_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QStyleOptionGraphicsItem_Wrapper(const QStyleOptionGraphicsItem_Wrapper&);

    public:
      // initialization of QStyleOptionGraphicsItem:
      static void init(RJSApi& handler);

      
        static QStyleOptionGraphicsItem* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QStyleOptionGraphicsItem:
          for (int i=0; i<basecasters_QStyleOptionGraphicsItem.length(); i++) {
            RJSBasecaster_QStyleOptionGraphicsItem* basecaster = basecasters_QStyleOptionGraphicsItem[i];
            QStyleOptionGraphicsItem* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QStyleOptionGraphicsItem:
          if (t==RJSType_QStyleOptionGraphicsItem::getIdStatic()) {
            return (QStyleOptionGraphicsItem*)vp;
          }

          qWarning() << "QStyleOptionGraphicsItem_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QStyleOptionGraphicsItem* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QStyleOptionGraphicsItem*: wrapper wraps NULL";
          }

          QStyleOptionGraphicsItem* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QStyleOptionGraphicsItem*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum OptionType {
    SO_Default = QStyleOptionGraphicsItem::SO_Default,
SO_FocusRect = QStyleOptionGraphicsItem::SO_FocusRect,
SO_Button = QStyleOptionGraphicsItem::SO_Button,
SO_Tab = QStyleOptionGraphicsItem::SO_Tab,
SO_MenuItem = QStyleOptionGraphicsItem::SO_MenuItem,
SO_Frame = QStyleOptionGraphicsItem::SO_Frame,
SO_ProgressBar = QStyleOptionGraphicsItem::SO_ProgressBar,
SO_ToolBox = QStyleOptionGraphicsItem::SO_ToolBox,
SO_Header = QStyleOptionGraphicsItem::SO_Header,
SO_DockWidget = QStyleOptionGraphicsItem::SO_DockWidget,
SO_ViewItem = QStyleOptionGraphicsItem::SO_ViewItem,
SO_TabWidgetFrame = QStyleOptionGraphicsItem::SO_TabWidgetFrame,
SO_TabBarBase = QStyleOptionGraphicsItem::SO_TabBarBase,
SO_RubberBand = QStyleOptionGraphicsItem::SO_RubberBand,
SO_ToolBar = QStyleOptionGraphicsItem::SO_ToolBar,
SO_GraphicsItem = QStyleOptionGraphicsItem::SO_GraphicsItem,
SO_Complex = QStyleOptionGraphicsItem::SO_Complex,
SO_Slider = QStyleOptionGraphicsItem::SO_Slider,
SO_SpinBox = QStyleOptionGraphicsItem::SO_SpinBox,
SO_ToolButton = QStyleOptionGraphicsItem::SO_ToolButton,
SO_ComboBox = QStyleOptionGraphicsItem::SO_ComboBox,
SO_TitleBar = QStyleOptionGraphicsItem::SO_TitleBar,
SO_GroupBox = QStyleOptionGraphicsItem::SO_GroupBox,
SO_SizeGrip = QStyleOptionGraphicsItem::SO_SizeGrip,
SO_CustomBase = QStyleOptionGraphicsItem::SO_CustomBase,
SO_ComplexCustomBase = QStyleOptionGraphicsItem::SO_ComplexCustomBase,

  };
  Q_ENUM(OptionType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QStyleOptionGraphicsItem_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QStyleOptionGraphicsItem_Wrapper(RJSApi& h, QStyleOptionGraphicsItem* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QStyleOptionGraphicsItem_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QStyleOptionGraphicsItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QStyleOptionGraphicsItem_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QStyleOptionGraphicsItem
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initFrom
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QStyleOptionGraphicsItem
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QStyleOptionGraphicsItem::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QStyleOptionGraphicsItem* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QStyleOptionGraphicsItem* getWrapped() const {
          
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
          QStyleOptionGraphicsItem* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QStyleOptionGraphicsItem*> basecasters_QStyleOptionGraphicsItem;

      public:
        static void registerBasecaster_QStyleOptionGraphicsItem(RJSBasecaster_QStyleOptionGraphicsItem* bc) {
          basecasters_QStyleOptionGraphicsItem.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QStyleOptionGraphicsItem_Wrapper*)

    Q_DECLARE_INTERFACE(QStyleOptionGraphicsItem_Wrapper, "org.qcad.QStyleOptionGraphicsItem_Wrapper")

  
  #endif
  
