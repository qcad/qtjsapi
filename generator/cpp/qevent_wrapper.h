
  // Auto generated
  
  #ifndef QEVENT_H_WRAPPER
  #define QEVENT_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QAction>
      
        #include <QGesture>
      
        #include <QScreen>
      
        #include <QMimeData>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QInputEvent>
      
      // singleton class wrapper for static functions:
      class QInputEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QInputEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QInputEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QInputEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QInputEvent
    class QInputEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QInputEvent_Wrapper(const QInputEvent_Wrapper&);

    public:
      // initialization of QInputEvent:
      static void init(RJSApi& handler);

      
        static QInputEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_QPointerEvent::getIdStatic()) {
              return (QInputEvent*)(QPointerEvent*)vp;
            }
            
            if (t==RJSType_QMouseEvent::getIdStatic()) {
              return (QInputEvent*)(QMouseEvent*)vp;
            }
            
            if (t==RJSType_QWheelEvent::getIdStatic()) {
              return (QInputEvent*)(QWheelEvent*)vp;
            }
            
            if (t==RJSType_QKeyEvent::getIdStatic()) {
              return (QInputEvent*)(QKeyEvent*)vp;
            }
            
            if (t==RJSType_QContextMenuEvent::getIdStatic()) {
              return (QInputEvent*)(QContextMenuEvent*)vp;
            }
            

          // pointer to desired type:
          
              if (t==RJSType_QInputEvent::getIdStatic()) {
                return (QInputEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QInputEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QInputEvent*: wrapper wraps NULL";
          }

          QInputEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QInputEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QInputEvent::None,
Timer = QInputEvent::Timer,
MouseButtonPress = QInputEvent::MouseButtonPress,
MouseButtonRelease = QInputEvent::MouseButtonRelease,
MouseButtonDblClick = QInputEvent::MouseButtonDblClick,
MouseMove = QInputEvent::MouseMove,
KeyPress = QInputEvent::KeyPress,
KeyRelease = QInputEvent::KeyRelease,
FocusIn = QInputEvent::FocusIn,
FocusOut = QInputEvent::FocusOut,
FocusAboutToChange = QInputEvent::FocusAboutToChange,
Enter = QInputEvent::Enter,
Leave = QInputEvent::Leave,
Paint = QInputEvent::Paint,
Move = QInputEvent::Move,
Resize = QInputEvent::Resize,
Create = QInputEvent::Create,
Destroy = QInputEvent::Destroy,
Show = QInputEvent::Show,
Hide = QInputEvent::Hide,
Close = QInputEvent::Close,
Quit = QInputEvent::Quit,
ParentChange = QInputEvent::ParentChange,
ParentAboutToChange = QInputEvent::ParentAboutToChange,
ThreadChange = QInputEvent::ThreadChange,
WindowActivate = QInputEvent::WindowActivate,
WindowDeactivate = QInputEvent::WindowDeactivate,
ShowToParent = QInputEvent::ShowToParent,
HideToParent = QInputEvent::HideToParent,
Wheel = QInputEvent::Wheel,
WindowTitleChange = QInputEvent::WindowTitleChange,
WindowIconChange = QInputEvent::WindowIconChange,
ApplicationWindowIconChange = QInputEvent::ApplicationWindowIconChange,
ApplicationFontChange = QInputEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QInputEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QInputEvent::ApplicationPaletteChange,
PaletteChange = QInputEvent::PaletteChange,
Clipboard = QInputEvent::Clipboard,
Speech = QInputEvent::Speech,
MetaCall = QInputEvent::MetaCall,
SockAct = QInputEvent::SockAct,
WinEventAct = QInputEvent::WinEventAct,
DeferredDelete = QInputEvent::DeferredDelete,
DragEnter = QInputEvent::DragEnter,
DragMove = QInputEvent::DragMove,
DragLeave = QInputEvent::DragLeave,
Drop = QInputEvent::Drop,
DragResponse = QInputEvent::DragResponse,
ChildAdded = QInputEvent::ChildAdded,
ChildPolished = QInputEvent::ChildPolished,
ChildRemoved = QInputEvent::ChildRemoved,
ShowWindowRequest = QInputEvent::ShowWindowRequest,
PolishRequest = QInputEvent::PolishRequest,
Polish = QInputEvent::Polish,
LayoutRequest = QInputEvent::LayoutRequest,
UpdateRequest = QInputEvent::UpdateRequest,
UpdateLater = QInputEvent::UpdateLater,
EmbeddingControl = QInputEvent::EmbeddingControl,
ActivateControl = QInputEvent::ActivateControl,
DeactivateControl = QInputEvent::DeactivateControl,
ContextMenu = QInputEvent::ContextMenu,
InputMethod = QInputEvent::InputMethod,
TabletMove = QInputEvent::TabletMove,
LocaleChange = QInputEvent::LocaleChange,
LanguageChange = QInputEvent::LanguageChange,
LayoutDirectionChange = QInputEvent::LayoutDirectionChange,
Style = QInputEvent::Style,
TabletPress = QInputEvent::TabletPress,
TabletRelease = QInputEvent::TabletRelease,
OkRequest = QInputEvent::OkRequest,
HelpRequest = QInputEvent::HelpRequest,
IconDrag = QInputEvent::IconDrag,
FontChange = QInputEvent::FontChange,
EnabledChange = QInputEvent::EnabledChange,
ActivationChange = QInputEvent::ActivationChange,
StyleChange = QInputEvent::StyleChange,
IconTextChange = QInputEvent::IconTextChange,
ModifiedChange = QInputEvent::ModifiedChange,
MouseTrackingChange = QInputEvent::MouseTrackingChange,
WindowBlocked = QInputEvent::WindowBlocked,
WindowUnblocked = QInputEvent::WindowUnblocked,
WindowStateChange = QInputEvent::WindowStateChange,
ReadOnlyChange = QInputEvent::ReadOnlyChange,
ToolTip = QInputEvent::ToolTip,
WhatsThis = QInputEvent::WhatsThis,
StatusTip = QInputEvent::StatusTip,
ActionChanged = QInputEvent::ActionChanged,
ActionAdded = QInputEvent::ActionAdded,
ActionRemoved = QInputEvent::ActionRemoved,
FileOpen = QInputEvent::FileOpen,
Shortcut = QInputEvent::Shortcut,
ShortcutOverride = QInputEvent::ShortcutOverride,
WhatsThisClicked = QInputEvent::WhatsThisClicked,
ToolBarChange = QInputEvent::ToolBarChange,
ApplicationActivate = QInputEvent::ApplicationActivate,
ApplicationActivated = QInputEvent::ApplicationActivated,
ApplicationDeactivate = QInputEvent::ApplicationDeactivate,
ApplicationDeactivated = QInputEvent::ApplicationDeactivated,
QueryWhatsThis = QInputEvent::QueryWhatsThis,
EnterWhatsThisMode = QInputEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QInputEvent::LeaveWhatsThisMode,
ZOrderChange = QInputEvent::ZOrderChange,
HoverEnter = QInputEvent::HoverEnter,
HoverLeave = QInputEvent::HoverLeave,
HoverMove = QInputEvent::HoverMove,
AcceptDropsChange = QInputEvent::AcceptDropsChange,
ZeroTimerEvent = QInputEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QInputEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QInputEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QInputEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QInputEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QInputEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QInputEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QInputEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QInputEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QInputEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QInputEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QInputEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QInputEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QInputEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QInputEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QInputEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QInputEvent::KeyboardLayoutChange,
DynamicPropertyChange = QInputEvent::DynamicPropertyChange,
TabletEnterProximity = QInputEvent::TabletEnterProximity,
TabletLeaveProximity = QInputEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QInputEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QInputEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QInputEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QInputEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QInputEvent::MacSizeChange,
ContentsRectChange = QInputEvent::ContentsRectChange,
MacGLWindowChange = QInputEvent::MacGLWindowChange,
FutureCallOut = QInputEvent::FutureCallOut,
GraphicsSceneResize = QInputEvent::GraphicsSceneResize,
GraphicsSceneMove = QInputEvent::GraphicsSceneMove,
CursorChange = QInputEvent::CursorChange,
ToolTipChange = QInputEvent::ToolTipChange,
NetworkReplyUpdated = QInputEvent::NetworkReplyUpdated,
GrabMouse = QInputEvent::GrabMouse,
UngrabMouse = QInputEvent::UngrabMouse,
GrabKeyboard = QInputEvent::GrabKeyboard,
UngrabKeyboard = QInputEvent::UngrabKeyboard,
StateMachineSignal = QInputEvent::StateMachineSignal,
StateMachineWrapped = QInputEvent::StateMachineWrapped,
TouchBegin = QInputEvent::TouchBegin,
TouchUpdate = QInputEvent::TouchUpdate,
TouchEnd = QInputEvent::TouchEnd,
NativeGesture = QInputEvent::NativeGesture,
RequestSoftwareInputPanel = QInputEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QInputEvent::CloseSoftwareInputPanel,
WinIdChange = QInputEvent::WinIdChange,
Gesture = QInputEvent::Gesture,
GestureOverride = QInputEvent::GestureOverride,
ScrollPrepare = QInputEvent::ScrollPrepare,
Scroll = QInputEvent::Scroll,
Expose = QInputEvent::Expose,
InputMethodQuery = QInputEvent::InputMethodQuery,
OrientationChange = QInputEvent::OrientationChange,
TouchCancel = QInputEvent::TouchCancel,
ThemeChange = QInputEvent::ThemeChange,
SockClose = QInputEvent::SockClose,
PlatformPanel = QInputEvent::PlatformPanel,
StyleAnimationUpdate = QInputEvent::StyleAnimationUpdate,
ApplicationStateChange = QInputEvent::ApplicationStateChange,
WindowChangeInternal = QInputEvent::WindowChangeInternal,
ScreenChangeInternal = QInputEvent::ScreenChangeInternal,
PlatformSurface = QInputEvent::PlatformSurface,
Pointer = QInputEvent::Pointer,
TabletTrackingChange = QInputEvent::TabletTrackingChange,
User = QInputEvent::User,
MaxUser = QInputEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QInputEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QInputEvent_Wrapper(RJSApi& h, QInputEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QInputEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QInputEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QInputEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QInputEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QInputEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: modifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: setModifiers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModifiers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QInputEvent
    // Function: timestamp
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QInputEvent
    // Function: setTimestamp
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTimestamp
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
          
              return RJSType_QInputEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QInputEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QInputEvent* getWrapped() const {
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
        QInputEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QInputEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QInputEvent_Wrapper, "org.qcad.QInputEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QPointerEvent>
      
      // singleton class wrapper for static functions:
      class QPointerEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QPointerEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QPointerEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QPointerEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPointerEvent
    class QPointerEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPointerEvent_Wrapper(const QPointerEvent_Wrapper&);

    public:
      // initialization of QPointerEvent:
      static void init(RJSApi& handler);

      
        static QPointerEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_QSinglePointEvent::getIdStatic()) {
              return (QPointerEvent*)(QSinglePointEvent*)vp;
            }
            
            if (t==RJSType_QMouseEvent::getIdStatic()) {
              return (QPointerEvent*)(QMouseEvent*)vp;
            }
            
            if (t==RJSType_QWheelEvent::getIdStatic()) {
              return (QPointerEvent*)(QWheelEvent*)vp;
            }
            

          // pointer to desired type:
          
              if (t==RJSType_QPointerEvent::getIdStatic()) {
                return (QPointerEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QPointerEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPointerEvent*: wrapper wraps NULL";
          }

          QPointerEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPointerEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QPointerEvent::None,
Timer = QPointerEvent::Timer,
MouseButtonPress = QPointerEvent::MouseButtonPress,
MouseButtonRelease = QPointerEvent::MouseButtonRelease,
MouseButtonDblClick = QPointerEvent::MouseButtonDblClick,
MouseMove = QPointerEvent::MouseMove,
KeyPress = QPointerEvent::KeyPress,
KeyRelease = QPointerEvent::KeyRelease,
FocusIn = QPointerEvent::FocusIn,
FocusOut = QPointerEvent::FocusOut,
FocusAboutToChange = QPointerEvent::FocusAboutToChange,
Enter = QPointerEvent::Enter,
Leave = QPointerEvent::Leave,
Paint = QPointerEvent::Paint,
Move = QPointerEvent::Move,
Resize = QPointerEvent::Resize,
Create = QPointerEvent::Create,
Destroy = QPointerEvent::Destroy,
Show = QPointerEvent::Show,
Hide = QPointerEvent::Hide,
Close = QPointerEvent::Close,
Quit = QPointerEvent::Quit,
ParentChange = QPointerEvent::ParentChange,
ParentAboutToChange = QPointerEvent::ParentAboutToChange,
ThreadChange = QPointerEvent::ThreadChange,
WindowActivate = QPointerEvent::WindowActivate,
WindowDeactivate = QPointerEvent::WindowDeactivate,
ShowToParent = QPointerEvent::ShowToParent,
HideToParent = QPointerEvent::HideToParent,
Wheel = QPointerEvent::Wheel,
WindowTitleChange = QPointerEvent::WindowTitleChange,
WindowIconChange = QPointerEvent::WindowIconChange,
ApplicationWindowIconChange = QPointerEvent::ApplicationWindowIconChange,
ApplicationFontChange = QPointerEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QPointerEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QPointerEvent::ApplicationPaletteChange,
PaletteChange = QPointerEvent::PaletteChange,
Clipboard = QPointerEvent::Clipboard,
Speech = QPointerEvent::Speech,
MetaCall = QPointerEvent::MetaCall,
SockAct = QPointerEvent::SockAct,
WinEventAct = QPointerEvent::WinEventAct,
DeferredDelete = QPointerEvent::DeferredDelete,
DragEnter = QPointerEvent::DragEnter,
DragMove = QPointerEvent::DragMove,
DragLeave = QPointerEvent::DragLeave,
Drop = QPointerEvent::Drop,
DragResponse = QPointerEvent::DragResponse,
ChildAdded = QPointerEvent::ChildAdded,
ChildPolished = QPointerEvent::ChildPolished,
ChildRemoved = QPointerEvent::ChildRemoved,
ShowWindowRequest = QPointerEvent::ShowWindowRequest,
PolishRequest = QPointerEvent::PolishRequest,
Polish = QPointerEvent::Polish,
LayoutRequest = QPointerEvent::LayoutRequest,
UpdateRequest = QPointerEvent::UpdateRequest,
UpdateLater = QPointerEvent::UpdateLater,
EmbeddingControl = QPointerEvent::EmbeddingControl,
ActivateControl = QPointerEvent::ActivateControl,
DeactivateControl = QPointerEvent::DeactivateControl,
ContextMenu = QPointerEvent::ContextMenu,
InputMethod = QPointerEvent::InputMethod,
TabletMove = QPointerEvent::TabletMove,
LocaleChange = QPointerEvent::LocaleChange,
LanguageChange = QPointerEvent::LanguageChange,
LayoutDirectionChange = QPointerEvent::LayoutDirectionChange,
Style = QPointerEvent::Style,
TabletPress = QPointerEvent::TabletPress,
TabletRelease = QPointerEvent::TabletRelease,
OkRequest = QPointerEvent::OkRequest,
HelpRequest = QPointerEvent::HelpRequest,
IconDrag = QPointerEvent::IconDrag,
FontChange = QPointerEvent::FontChange,
EnabledChange = QPointerEvent::EnabledChange,
ActivationChange = QPointerEvent::ActivationChange,
StyleChange = QPointerEvent::StyleChange,
IconTextChange = QPointerEvent::IconTextChange,
ModifiedChange = QPointerEvent::ModifiedChange,
MouseTrackingChange = QPointerEvent::MouseTrackingChange,
WindowBlocked = QPointerEvent::WindowBlocked,
WindowUnblocked = QPointerEvent::WindowUnblocked,
WindowStateChange = QPointerEvent::WindowStateChange,
ReadOnlyChange = QPointerEvent::ReadOnlyChange,
ToolTip = QPointerEvent::ToolTip,
WhatsThis = QPointerEvent::WhatsThis,
StatusTip = QPointerEvent::StatusTip,
ActionChanged = QPointerEvent::ActionChanged,
ActionAdded = QPointerEvent::ActionAdded,
ActionRemoved = QPointerEvent::ActionRemoved,
FileOpen = QPointerEvent::FileOpen,
Shortcut = QPointerEvent::Shortcut,
ShortcutOverride = QPointerEvent::ShortcutOverride,
WhatsThisClicked = QPointerEvent::WhatsThisClicked,
ToolBarChange = QPointerEvent::ToolBarChange,
ApplicationActivate = QPointerEvent::ApplicationActivate,
ApplicationActivated = QPointerEvent::ApplicationActivated,
ApplicationDeactivate = QPointerEvent::ApplicationDeactivate,
ApplicationDeactivated = QPointerEvent::ApplicationDeactivated,
QueryWhatsThis = QPointerEvent::QueryWhatsThis,
EnterWhatsThisMode = QPointerEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QPointerEvent::LeaveWhatsThisMode,
ZOrderChange = QPointerEvent::ZOrderChange,
HoverEnter = QPointerEvent::HoverEnter,
HoverLeave = QPointerEvent::HoverLeave,
HoverMove = QPointerEvent::HoverMove,
AcceptDropsChange = QPointerEvent::AcceptDropsChange,
ZeroTimerEvent = QPointerEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QPointerEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QPointerEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QPointerEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QPointerEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QPointerEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QPointerEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QPointerEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QPointerEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QPointerEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QPointerEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QPointerEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QPointerEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QPointerEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QPointerEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QPointerEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QPointerEvent::KeyboardLayoutChange,
DynamicPropertyChange = QPointerEvent::DynamicPropertyChange,
TabletEnterProximity = QPointerEvent::TabletEnterProximity,
TabletLeaveProximity = QPointerEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QPointerEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QPointerEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QPointerEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QPointerEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QPointerEvent::MacSizeChange,
ContentsRectChange = QPointerEvent::ContentsRectChange,
MacGLWindowChange = QPointerEvent::MacGLWindowChange,
FutureCallOut = QPointerEvent::FutureCallOut,
GraphicsSceneResize = QPointerEvent::GraphicsSceneResize,
GraphicsSceneMove = QPointerEvent::GraphicsSceneMove,
CursorChange = QPointerEvent::CursorChange,
ToolTipChange = QPointerEvent::ToolTipChange,
NetworkReplyUpdated = QPointerEvent::NetworkReplyUpdated,
GrabMouse = QPointerEvent::GrabMouse,
UngrabMouse = QPointerEvent::UngrabMouse,
GrabKeyboard = QPointerEvent::GrabKeyboard,
UngrabKeyboard = QPointerEvent::UngrabKeyboard,
StateMachineSignal = QPointerEvent::StateMachineSignal,
StateMachineWrapped = QPointerEvent::StateMachineWrapped,
TouchBegin = QPointerEvent::TouchBegin,
TouchUpdate = QPointerEvent::TouchUpdate,
TouchEnd = QPointerEvent::TouchEnd,
NativeGesture = QPointerEvent::NativeGesture,
RequestSoftwareInputPanel = QPointerEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QPointerEvent::CloseSoftwareInputPanel,
WinIdChange = QPointerEvent::WinIdChange,
Gesture = QPointerEvent::Gesture,
GestureOverride = QPointerEvent::GestureOverride,
ScrollPrepare = QPointerEvent::ScrollPrepare,
Scroll = QPointerEvent::Scroll,
Expose = QPointerEvent::Expose,
InputMethodQuery = QPointerEvent::InputMethodQuery,
OrientationChange = QPointerEvent::OrientationChange,
TouchCancel = QPointerEvent::TouchCancel,
ThemeChange = QPointerEvent::ThemeChange,
SockClose = QPointerEvent::SockClose,
PlatformPanel = QPointerEvent::PlatformPanel,
StyleAnimationUpdate = QPointerEvent::StyleAnimationUpdate,
ApplicationStateChange = QPointerEvent::ApplicationStateChange,
WindowChangeInternal = QPointerEvent::WindowChangeInternal,
ScreenChangeInternal = QPointerEvent::ScreenChangeInternal,
PlatformSurface = QPointerEvent::PlatformSurface,
Pointer = QPointerEvent::Pointer,
TabletTrackingChange = QPointerEvent::TabletTrackingChange,
User = QPointerEvent::User,
MaxUser = QPointerEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPointerEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPointerEvent_Wrapper(RJSApi& h, QPointerEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPointerEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QPointerEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: modifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: setModifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModifiers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: timestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: setTimestamp
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTimestamp
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: pointCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: point
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  point
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: pointById
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointById
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: allPointsGrabbed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsGrabbed
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: isBeginEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBeginEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: isUpdateEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpdateEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: isEndEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEndEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: allPointsAccepted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: setAccepted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: exclusiveGrabber
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QPointerEvent
    // Function: setExclusiveGrabber
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: clearPassiveGrabbers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearPassiveGrabbers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: addPassiveGrabber
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addPassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPointerEvent
    // Function: removePassiveGrabber
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removePassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
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
          
              return RJSType_QPointerEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QPointerEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPointerEvent* getWrapped() const {
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
        QPointerEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QPointerEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QPointerEvent_Wrapper, "org.qcad.QPointerEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QSinglePointEvent>
      
      // singleton class wrapper for static functions:
      class QSinglePointEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QSinglePointEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QSinglePointEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QSinglePointEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSinglePointEvent
    class QSinglePointEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSinglePointEvent_Wrapper(const QSinglePointEvent_Wrapper&);

    public:
      // initialization of QSinglePointEvent:
      static void init(RJSApi& handler);

      
        static QSinglePointEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_QMouseEvent::getIdStatic()) {
              return (QSinglePointEvent*)(QMouseEvent*)vp;
            }
            
            if (t==RJSType_QWheelEvent::getIdStatic()) {
              return (QSinglePointEvent*)(QWheelEvent*)vp;
            }
            

          // pointer to desired type:
          
              if (t==RJSType_QSinglePointEvent::getIdStatic()) {
                return (QSinglePointEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QSinglePointEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSinglePointEvent*: wrapper wraps NULL";
          }

          QSinglePointEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSinglePointEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QSinglePointEvent::None,
Timer = QSinglePointEvent::Timer,
MouseButtonPress = QSinglePointEvent::MouseButtonPress,
MouseButtonRelease = QSinglePointEvent::MouseButtonRelease,
MouseButtonDblClick = QSinglePointEvent::MouseButtonDblClick,
MouseMove = QSinglePointEvent::MouseMove,
KeyPress = QSinglePointEvent::KeyPress,
KeyRelease = QSinglePointEvent::KeyRelease,
FocusIn = QSinglePointEvent::FocusIn,
FocusOut = QSinglePointEvent::FocusOut,
FocusAboutToChange = QSinglePointEvent::FocusAboutToChange,
Enter = QSinglePointEvent::Enter,
Leave = QSinglePointEvent::Leave,
Paint = QSinglePointEvent::Paint,
Move = QSinglePointEvent::Move,
Resize = QSinglePointEvent::Resize,
Create = QSinglePointEvent::Create,
Destroy = QSinglePointEvent::Destroy,
Show = QSinglePointEvent::Show,
Hide = QSinglePointEvent::Hide,
Close = QSinglePointEvent::Close,
Quit = QSinglePointEvent::Quit,
ParentChange = QSinglePointEvent::ParentChange,
ParentAboutToChange = QSinglePointEvent::ParentAboutToChange,
ThreadChange = QSinglePointEvent::ThreadChange,
WindowActivate = QSinglePointEvent::WindowActivate,
WindowDeactivate = QSinglePointEvent::WindowDeactivate,
ShowToParent = QSinglePointEvent::ShowToParent,
HideToParent = QSinglePointEvent::HideToParent,
Wheel = QSinglePointEvent::Wheel,
WindowTitleChange = QSinglePointEvent::WindowTitleChange,
WindowIconChange = QSinglePointEvent::WindowIconChange,
ApplicationWindowIconChange = QSinglePointEvent::ApplicationWindowIconChange,
ApplicationFontChange = QSinglePointEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QSinglePointEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QSinglePointEvent::ApplicationPaletteChange,
PaletteChange = QSinglePointEvent::PaletteChange,
Clipboard = QSinglePointEvent::Clipboard,
Speech = QSinglePointEvent::Speech,
MetaCall = QSinglePointEvent::MetaCall,
SockAct = QSinglePointEvent::SockAct,
WinEventAct = QSinglePointEvent::WinEventAct,
DeferredDelete = QSinglePointEvent::DeferredDelete,
DragEnter = QSinglePointEvent::DragEnter,
DragMove = QSinglePointEvent::DragMove,
DragLeave = QSinglePointEvent::DragLeave,
Drop = QSinglePointEvent::Drop,
DragResponse = QSinglePointEvent::DragResponse,
ChildAdded = QSinglePointEvent::ChildAdded,
ChildPolished = QSinglePointEvent::ChildPolished,
ChildRemoved = QSinglePointEvent::ChildRemoved,
ShowWindowRequest = QSinglePointEvent::ShowWindowRequest,
PolishRequest = QSinglePointEvent::PolishRequest,
Polish = QSinglePointEvent::Polish,
LayoutRequest = QSinglePointEvent::LayoutRequest,
UpdateRequest = QSinglePointEvent::UpdateRequest,
UpdateLater = QSinglePointEvent::UpdateLater,
EmbeddingControl = QSinglePointEvent::EmbeddingControl,
ActivateControl = QSinglePointEvent::ActivateControl,
DeactivateControl = QSinglePointEvent::DeactivateControl,
ContextMenu = QSinglePointEvent::ContextMenu,
InputMethod = QSinglePointEvent::InputMethod,
TabletMove = QSinglePointEvent::TabletMove,
LocaleChange = QSinglePointEvent::LocaleChange,
LanguageChange = QSinglePointEvent::LanguageChange,
LayoutDirectionChange = QSinglePointEvent::LayoutDirectionChange,
Style = QSinglePointEvent::Style,
TabletPress = QSinglePointEvent::TabletPress,
TabletRelease = QSinglePointEvent::TabletRelease,
OkRequest = QSinglePointEvent::OkRequest,
HelpRequest = QSinglePointEvent::HelpRequest,
IconDrag = QSinglePointEvent::IconDrag,
FontChange = QSinglePointEvent::FontChange,
EnabledChange = QSinglePointEvent::EnabledChange,
ActivationChange = QSinglePointEvent::ActivationChange,
StyleChange = QSinglePointEvent::StyleChange,
IconTextChange = QSinglePointEvent::IconTextChange,
ModifiedChange = QSinglePointEvent::ModifiedChange,
MouseTrackingChange = QSinglePointEvent::MouseTrackingChange,
WindowBlocked = QSinglePointEvent::WindowBlocked,
WindowUnblocked = QSinglePointEvent::WindowUnblocked,
WindowStateChange = QSinglePointEvent::WindowStateChange,
ReadOnlyChange = QSinglePointEvent::ReadOnlyChange,
ToolTip = QSinglePointEvent::ToolTip,
WhatsThis = QSinglePointEvent::WhatsThis,
StatusTip = QSinglePointEvent::StatusTip,
ActionChanged = QSinglePointEvent::ActionChanged,
ActionAdded = QSinglePointEvent::ActionAdded,
ActionRemoved = QSinglePointEvent::ActionRemoved,
FileOpen = QSinglePointEvent::FileOpen,
Shortcut = QSinglePointEvent::Shortcut,
ShortcutOverride = QSinglePointEvent::ShortcutOverride,
WhatsThisClicked = QSinglePointEvent::WhatsThisClicked,
ToolBarChange = QSinglePointEvent::ToolBarChange,
ApplicationActivate = QSinglePointEvent::ApplicationActivate,
ApplicationActivated = QSinglePointEvent::ApplicationActivated,
ApplicationDeactivate = QSinglePointEvent::ApplicationDeactivate,
ApplicationDeactivated = QSinglePointEvent::ApplicationDeactivated,
QueryWhatsThis = QSinglePointEvent::QueryWhatsThis,
EnterWhatsThisMode = QSinglePointEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QSinglePointEvent::LeaveWhatsThisMode,
ZOrderChange = QSinglePointEvent::ZOrderChange,
HoverEnter = QSinglePointEvent::HoverEnter,
HoverLeave = QSinglePointEvent::HoverLeave,
HoverMove = QSinglePointEvent::HoverMove,
AcceptDropsChange = QSinglePointEvent::AcceptDropsChange,
ZeroTimerEvent = QSinglePointEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QSinglePointEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QSinglePointEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QSinglePointEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QSinglePointEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QSinglePointEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QSinglePointEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QSinglePointEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QSinglePointEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QSinglePointEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QSinglePointEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QSinglePointEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QSinglePointEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QSinglePointEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QSinglePointEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QSinglePointEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QSinglePointEvent::KeyboardLayoutChange,
DynamicPropertyChange = QSinglePointEvent::DynamicPropertyChange,
TabletEnterProximity = QSinglePointEvent::TabletEnterProximity,
TabletLeaveProximity = QSinglePointEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QSinglePointEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QSinglePointEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QSinglePointEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QSinglePointEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QSinglePointEvent::MacSizeChange,
ContentsRectChange = QSinglePointEvent::ContentsRectChange,
MacGLWindowChange = QSinglePointEvent::MacGLWindowChange,
FutureCallOut = QSinglePointEvent::FutureCallOut,
GraphicsSceneResize = QSinglePointEvent::GraphicsSceneResize,
GraphicsSceneMove = QSinglePointEvent::GraphicsSceneMove,
CursorChange = QSinglePointEvent::CursorChange,
ToolTipChange = QSinglePointEvent::ToolTipChange,
NetworkReplyUpdated = QSinglePointEvent::NetworkReplyUpdated,
GrabMouse = QSinglePointEvent::GrabMouse,
UngrabMouse = QSinglePointEvent::UngrabMouse,
GrabKeyboard = QSinglePointEvent::GrabKeyboard,
UngrabKeyboard = QSinglePointEvent::UngrabKeyboard,
StateMachineSignal = QSinglePointEvent::StateMachineSignal,
StateMachineWrapped = QSinglePointEvent::StateMachineWrapped,
TouchBegin = QSinglePointEvent::TouchBegin,
TouchUpdate = QSinglePointEvent::TouchUpdate,
TouchEnd = QSinglePointEvent::TouchEnd,
NativeGesture = QSinglePointEvent::NativeGesture,
RequestSoftwareInputPanel = QSinglePointEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QSinglePointEvent::CloseSoftwareInputPanel,
WinIdChange = QSinglePointEvent::WinIdChange,
Gesture = QSinglePointEvent::Gesture,
GestureOverride = QSinglePointEvent::GestureOverride,
ScrollPrepare = QSinglePointEvent::ScrollPrepare,
Scroll = QSinglePointEvent::Scroll,
Expose = QSinglePointEvent::Expose,
InputMethodQuery = QSinglePointEvent::InputMethodQuery,
OrientationChange = QSinglePointEvent::OrientationChange,
TouchCancel = QSinglePointEvent::TouchCancel,
ThemeChange = QSinglePointEvent::ThemeChange,
SockClose = QSinglePointEvent::SockClose,
PlatformPanel = QSinglePointEvent::PlatformPanel,
StyleAnimationUpdate = QSinglePointEvent::StyleAnimationUpdate,
ApplicationStateChange = QSinglePointEvent::ApplicationStateChange,
WindowChangeInternal = QSinglePointEvent::WindowChangeInternal,
ScreenChangeInternal = QSinglePointEvent::ScreenChangeInternal,
PlatformSurface = QSinglePointEvent::PlatformSurface,
Pointer = QSinglePointEvent::Pointer,
TabletTrackingChange = QSinglePointEvent::TabletTrackingChange,
User = QSinglePointEvent::User,
MaxUser = QSinglePointEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSinglePointEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSinglePointEvent_Wrapper(RJSApi& h, QSinglePointEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSinglePointEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QSinglePointEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: setTimestamp
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTimestamp
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: pointCount
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: point
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  point
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: pointById
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointById
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: allPointsGrabbed
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsGrabbed
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: allPointsAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: setAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: exclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: setExclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: clearPassiveGrabbers
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearPassiveGrabbers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: addPassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addPassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: removePassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removePassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
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
            
    // Class: QSinglePointEvent
    // Function: buttons
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buttons
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: scenePosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scenePosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: globalPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: isBeginEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBeginEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: isUpdateEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpdateEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: isEndEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEndEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: exclusivePointGrabber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusivePointGrabber
              (

                
              )
              
                const
              
              ;
            
    // Class: QSinglePointEvent
    // Function: setExclusivePointGrabber
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusivePointGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSinglePointEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
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
          
              return RJSType_QSinglePointEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QSinglePointEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSinglePointEvent* getWrapped() const {
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
        QSinglePointEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QSinglePointEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QSinglePointEvent_Wrapper, "org.qcad.QSinglePointEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QMouseEvent>
      
      // singleton class wrapper for static functions:
      class QMouseEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QMouseEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QMouseEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_INTEGER_EVENT_COORDINATES

#endif


      private:
          RJSApi& handler;
          //static QMouseEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QMouseEvent
    class QMouseEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QMouseEvent_Wrapper(const QMouseEvent_Wrapper&);

    public:
      // initialization of QMouseEvent:
      static void init(RJSApi& handler);

      
        static QMouseEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QMouseEvent::getIdStatic()) {
                return (QMouseEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QMouseEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QMouseEvent*: wrapper wraps NULL";
          }

          QMouseEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QMouseEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QMouseEvent::None,
Timer = QMouseEvent::Timer,
MouseButtonPress = QMouseEvent::MouseButtonPress,
MouseButtonRelease = QMouseEvent::MouseButtonRelease,
MouseButtonDblClick = QMouseEvent::MouseButtonDblClick,
MouseMove = QMouseEvent::MouseMove,
KeyPress = QMouseEvent::KeyPress,
KeyRelease = QMouseEvent::KeyRelease,
FocusIn = QMouseEvent::FocusIn,
FocusOut = QMouseEvent::FocusOut,
FocusAboutToChange = QMouseEvent::FocusAboutToChange,
Enter = QMouseEvent::Enter,
Leave = QMouseEvent::Leave,
Paint = QMouseEvent::Paint,
Move = QMouseEvent::Move,
Resize = QMouseEvent::Resize,
Create = QMouseEvent::Create,
Destroy = QMouseEvent::Destroy,
Show = QMouseEvent::Show,
Hide = QMouseEvent::Hide,
Close = QMouseEvent::Close,
Quit = QMouseEvent::Quit,
ParentChange = QMouseEvent::ParentChange,
ParentAboutToChange = QMouseEvent::ParentAboutToChange,
ThreadChange = QMouseEvent::ThreadChange,
WindowActivate = QMouseEvent::WindowActivate,
WindowDeactivate = QMouseEvent::WindowDeactivate,
ShowToParent = QMouseEvent::ShowToParent,
HideToParent = QMouseEvent::HideToParent,
Wheel = QMouseEvent::Wheel,
WindowTitleChange = QMouseEvent::WindowTitleChange,
WindowIconChange = QMouseEvent::WindowIconChange,
ApplicationWindowIconChange = QMouseEvent::ApplicationWindowIconChange,
ApplicationFontChange = QMouseEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QMouseEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QMouseEvent::ApplicationPaletteChange,
PaletteChange = QMouseEvent::PaletteChange,
Clipboard = QMouseEvent::Clipboard,
Speech = QMouseEvent::Speech,
MetaCall = QMouseEvent::MetaCall,
SockAct = QMouseEvent::SockAct,
WinEventAct = QMouseEvent::WinEventAct,
DeferredDelete = QMouseEvent::DeferredDelete,
DragEnter = QMouseEvent::DragEnter,
DragMove = QMouseEvent::DragMove,
DragLeave = QMouseEvent::DragLeave,
Drop = QMouseEvent::Drop,
DragResponse = QMouseEvent::DragResponse,
ChildAdded = QMouseEvent::ChildAdded,
ChildPolished = QMouseEvent::ChildPolished,
ChildRemoved = QMouseEvent::ChildRemoved,
ShowWindowRequest = QMouseEvent::ShowWindowRequest,
PolishRequest = QMouseEvent::PolishRequest,
Polish = QMouseEvent::Polish,
LayoutRequest = QMouseEvent::LayoutRequest,
UpdateRequest = QMouseEvent::UpdateRequest,
UpdateLater = QMouseEvent::UpdateLater,
EmbeddingControl = QMouseEvent::EmbeddingControl,
ActivateControl = QMouseEvent::ActivateControl,
DeactivateControl = QMouseEvent::DeactivateControl,
ContextMenu = QMouseEvent::ContextMenu,
InputMethod = QMouseEvent::InputMethod,
TabletMove = QMouseEvent::TabletMove,
LocaleChange = QMouseEvent::LocaleChange,
LanguageChange = QMouseEvent::LanguageChange,
LayoutDirectionChange = QMouseEvent::LayoutDirectionChange,
Style = QMouseEvent::Style,
TabletPress = QMouseEvent::TabletPress,
TabletRelease = QMouseEvent::TabletRelease,
OkRequest = QMouseEvent::OkRequest,
HelpRequest = QMouseEvent::HelpRequest,
IconDrag = QMouseEvent::IconDrag,
FontChange = QMouseEvent::FontChange,
EnabledChange = QMouseEvent::EnabledChange,
ActivationChange = QMouseEvent::ActivationChange,
StyleChange = QMouseEvent::StyleChange,
IconTextChange = QMouseEvent::IconTextChange,
ModifiedChange = QMouseEvent::ModifiedChange,
MouseTrackingChange = QMouseEvent::MouseTrackingChange,
WindowBlocked = QMouseEvent::WindowBlocked,
WindowUnblocked = QMouseEvent::WindowUnblocked,
WindowStateChange = QMouseEvent::WindowStateChange,
ReadOnlyChange = QMouseEvent::ReadOnlyChange,
ToolTip = QMouseEvent::ToolTip,
WhatsThis = QMouseEvent::WhatsThis,
StatusTip = QMouseEvent::StatusTip,
ActionChanged = QMouseEvent::ActionChanged,
ActionAdded = QMouseEvent::ActionAdded,
ActionRemoved = QMouseEvent::ActionRemoved,
FileOpen = QMouseEvent::FileOpen,
Shortcut = QMouseEvent::Shortcut,
ShortcutOverride = QMouseEvent::ShortcutOverride,
WhatsThisClicked = QMouseEvent::WhatsThisClicked,
ToolBarChange = QMouseEvent::ToolBarChange,
ApplicationActivate = QMouseEvent::ApplicationActivate,
ApplicationActivated = QMouseEvent::ApplicationActivated,
ApplicationDeactivate = QMouseEvent::ApplicationDeactivate,
ApplicationDeactivated = QMouseEvent::ApplicationDeactivated,
QueryWhatsThis = QMouseEvent::QueryWhatsThis,
EnterWhatsThisMode = QMouseEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QMouseEvent::LeaveWhatsThisMode,
ZOrderChange = QMouseEvent::ZOrderChange,
HoverEnter = QMouseEvent::HoverEnter,
HoverLeave = QMouseEvent::HoverLeave,
HoverMove = QMouseEvent::HoverMove,
AcceptDropsChange = QMouseEvent::AcceptDropsChange,
ZeroTimerEvent = QMouseEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QMouseEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QMouseEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QMouseEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QMouseEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QMouseEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QMouseEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QMouseEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QMouseEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QMouseEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QMouseEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QMouseEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QMouseEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QMouseEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QMouseEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QMouseEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QMouseEvent::KeyboardLayoutChange,
DynamicPropertyChange = QMouseEvent::DynamicPropertyChange,
TabletEnterProximity = QMouseEvent::TabletEnterProximity,
TabletLeaveProximity = QMouseEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QMouseEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QMouseEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QMouseEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QMouseEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QMouseEvent::MacSizeChange,
ContentsRectChange = QMouseEvent::ContentsRectChange,
MacGLWindowChange = QMouseEvent::MacGLWindowChange,
FutureCallOut = QMouseEvent::FutureCallOut,
GraphicsSceneResize = QMouseEvent::GraphicsSceneResize,
GraphicsSceneMove = QMouseEvent::GraphicsSceneMove,
CursorChange = QMouseEvent::CursorChange,
ToolTipChange = QMouseEvent::ToolTipChange,
NetworkReplyUpdated = QMouseEvent::NetworkReplyUpdated,
GrabMouse = QMouseEvent::GrabMouse,
UngrabMouse = QMouseEvent::UngrabMouse,
GrabKeyboard = QMouseEvent::GrabKeyboard,
UngrabKeyboard = QMouseEvent::UngrabKeyboard,
StateMachineSignal = QMouseEvent::StateMachineSignal,
StateMachineWrapped = QMouseEvent::StateMachineWrapped,
TouchBegin = QMouseEvent::TouchBegin,
TouchUpdate = QMouseEvent::TouchUpdate,
TouchEnd = QMouseEvent::TouchEnd,
NativeGesture = QMouseEvent::NativeGesture,
RequestSoftwareInputPanel = QMouseEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QMouseEvent::CloseSoftwareInputPanel,
WinIdChange = QMouseEvent::WinIdChange,
Gesture = QMouseEvent::Gesture,
GestureOverride = QMouseEvent::GestureOverride,
ScrollPrepare = QMouseEvent::ScrollPrepare,
Scroll = QMouseEvent::Scroll,
Expose = QMouseEvent::Expose,
InputMethodQuery = QMouseEvent::InputMethodQuery,
OrientationChange = QMouseEvent::OrientationChange,
TouchCancel = QMouseEvent::TouchCancel,
ThemeChange = QMouseEvent::ThemeChange,
SockClose = QMouseEvent::SockClose,
PlatformPanel = QMouseEvent::PlatformPanel,
StyleAnimationUpdate = QMouseEvent::StyleAnimationUpdate,
ApplicationStateChange = QMouseEvent::ApplicationStateChange,
WindowChangeInternal = QMouseEvent::WindowChangeInternal,
ScreenChangeInternal = QMouseEvent::ScreenChangeInternal,
PlatformSurface = QMouseEvent::PlatformSurface,
Pointer = QMouseEvent::Pointer,
TabletTrackingChange = QMouseEvent::TabletTrackingChange,
User = QMouseEvent::User,
MaxUser = QMouseEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QMouseEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QMouseEvent_Wrapper(RJSApi& h, QMouseEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QMouseEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QMouseEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QMouseEvent_Wrapper
                
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
    
              )
              
              ;
            
#ifndef QT_NO_INTEGER_EVENT_COORDINATES

#endif


    // non-static functions:
    
    // Class: QMouseEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: modifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: setModifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModifiers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: timestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: setTimestamp
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTimestamp
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: pointCount
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: point
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  point
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: pointById
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointById
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: allPointsGrabbed
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsGrabbed
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: allPointsAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: setAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: exclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: setExclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: clearPassiveGrabbers
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearPassiveGrabbers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: addPassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addPassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: removePassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removePassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: position
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: scenePosition
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scenePosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: globalPosition
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: isBeginEvent
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBeginEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: isUpdateEvent
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpdateEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: isEndEvent
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEndEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: exclusivePointGrabber
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusivePointGrabber
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: setExclusivePointGrabber
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusivePointGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QMouseEvent
    // Function: clone
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_INTEGER_EVENT_COORDINATES

    // Class: QMouseEvent
    // Function: pos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
#endif

    // Class: QMouseEvent
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
            
    // Class: QMouseEvent
    // Function: buttons
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buttons
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: source
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  source
              (

                
              )
              
                const
              
              ;
            
    // Class: QMouseEvent
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flags
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
          
              return RJSType_QMouseEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QMouseEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QMouseEvent* getWrapped() const {
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
        QMouseEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QMouseEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QMouseEvent_Wrapper, "org.qcad.QMouseEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QWheelEvent>
      
      // singleton class wrapper for static functions:
      class QWheelEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QWheelEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QWheelEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QWheelEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QWheelEvent
    class QWheelEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     pixelDelta READ pixelDelta
  )

  Q_PROPERTY(
    
    QJSValue
     angleDelta READ angleDelta
  )

  Q_PROPERTY(
    
    QJSValue
     phase READ phase
  )

  Q_PROPERTY(
    
    QJSValue
     inverted READ inverted
  )


    private:
      // disable copy constructor:
      QWheelEvent_Wrapper(const QWheelEvent_Wrapper&);

    public:
      // initialization of QWheelEvent:
      static void init(RJSApi& handler);

      
        static QWheelEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QWheelEvent::getIdStatic()) {
                return (QWheelEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QWheelEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QWheelEvent*: wrapper wraps NULL";
          }

          QWheelEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QWheelEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QWheelEvent::None,
Timer = QWheelEvent::Timer,
MouseButtonPress = QWheelEvent::MouseButtonPress,
MouseButtonRelease = QWheelEvent::MouseButtonRelease,
MouseButtonDblClick = QWheelEvent::MouseButtonDblClick,
MouseMove = QWheelEvent::MouseMove,
KeyPress = QWheelEvent::KeyPress,
KeyRelease = QWheelEvent::KeyRelease,
FocusIn = QWheelEvent::FocusIn,
FocusOut = QWheelEvent::FocusOut,
FocusAboutToChange = QWheelEvent::FocusAboutToChange,
Enter = QWheelEvent::Enter,
Leave = QWheelEvent::Leave,
Paint = QWheelEvent::Paint,
Move = QWheelEvent::Move,
Resize = QWheelEvent::Resize,
Create = QWheelEvent::Create,
Destroy = QWheelEvent::Destroy,
Show = QWheelEvent::Show,
Hide = QWheelEvent::Hide,
Close = QWheelEvent::Close,
Quit = QWheelEvent::Quit,
ParentChange = QWheelEvent::ParentChange,
ParentAboutToChange = QWheelEvent::ParentAboutToChange,
ThreadChange = QWheelEvent::ThreadChange,
WindowActivate = QWheelEvent::WindowActivate,
WindowDeactivate = QWheelEvent::WindowDeactivate,
ShowToParent = QWheelEvent::ShowToParent,
HideToParent = QWheelEvent::HideToParent,
Wheel = QWheelEvent::Wheel,
WindowTitleChange = QWheelEvent::WindowTitleChange,
WindowIconChange = QWheelEvent::WindowIconChange,
ApplicationWindowIconChange = QWheelEvent::ApplicationWindowIconChange,
ApplicationFontChange = QWheelEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QWheelEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QWheelEvent::ApplicationPaletteChange,
PaletteChange = QWheelEvent::PaletteChange,
Clipboard = QWheelEvent::Clipboard,
Speech = QWheelEvent::Speech,
MetaCall = QWheelEvent::MetaCall,
SockAct = QWheelEvent::SockAct,
WinEventAct = QWheelEvent::WinEventAct,
DeferredDelete = QWheelEvent::DeferredDelete,
DragEnter = QWheelEvent::DragEnter,
DragMove = QWheelEvent::DragMove,
DragLeave = QWheelEvent::DragLeave,
Drop = QWheelEvent::Drop,
DragResponse = QWheelEvent::DragResponse,
ChildAdded = QWheelEvent::ChildAdded,
ChildPolished = QWheelEvent::ChildPolished,
ChildRemoved = QWheelEvent::ChildRemoved,
ShowWindowRequest = QWheelEvent::ShowWindowRequest,
PolishRequest = QWheelEvent::PolishRequest,
Polish = QWheelEvent::Polish,
LayoutRequest = QWheelEvent::LayoutRequest,
UpdateRequest = QWheelEvent::UpdateRequest,
UpdateLater = QWheelEvent::UpdateLater,
EmbeddingControl = QWheelEvent::EmbeddingControl,
ActivateControl = QWheelEvent::ActivateControl,
DeactivateControl = QWheelEvent::DeactivateControl,
ContextMenu = QWheelEvent::ContextMenu,
InputMethod = QWheelEvent::InputMethod,
TabletMove = QWheelEvent::TabletMove,
LocaleChange = QWheelEvent::LocaleChange,
LanguageChange = QWheelEvent::LanguageChange,
LayoutDirectionChange = QWheelEvent::LayoutDirectionChange,
Style = QWheelEvent::Style,
TabletPress = QWheelEvent::TabletPress,
TabletRelease = QWheelEvent::TabletRelease,
OkRequest = QWheelEvent::OkRequest,
HelpRequest = QWheelEvent::HelpRequest,
IconDrag = QWheelEvent::IconDrag,
FontChange = QWheelEvent::FontChange,
EnabledChange = QWheelEvent::EnabledChange,
ActivationChange = QWheelEvent::ActivationChange,
StyleChange = QWheelEvent::StyleChange,
IconTextChange = QWheelEvent::IconTextChange,
ModifiedChange = QWheelEvent::ModifiedChange,
MouseTrackingChange = QWheelEvent::MouseTrackingChange,
WindowBlocked = QWheelEvent::WindowBlocked,
WindowUnblocked = QWheelEvent::WindowUnblocked,
WindowStateChange = QWheelEvent::WindowStateChange,
ReadOnlyChange = QWheelEvent::ReadOnlyChange,
ToolTip = QWheelEvent::ToolTip,
WhatsThis = QWheelEvent::WhatsThis,
StatusTip = QWheelEvent::StatusTip,
ActionChanged = QWheelEvent::ActionChanged,
ActionAdded = QWheelEvent::ActionAdded,
ActionRemoved = QWheelEvent::ActionRemoved,
FileOpen = QWheelEvent::FileOpen,
Shortcut = QWheelEvent::Shortcut,
ShortcutOverride = QWheelEvent::ShortcutOverride,
WhatsThisClicked = QWheelEvent::WhatsThisClicked,
ToolBarChange = QWheelEvent::ToolBarChange,
ApplicationActivate = QWheelEvent::ApplicationActivate,
ApplicationActivated = QWheelEvent::ApplicationActivated,
ApplicationDeactivate = QWheelEvent::ApplicationDeactivate,
ApplicationDeactivated = QWheelEvent::ApplicationDeactivated,
QueryWhatsThis = QWheelEvent::QueryWhatsThis,
EnterWhatsThisMode = QWheelEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QWheelEvent::LeaveWhatsThisMode,
ZOrderChange = QWheelEvent::ZOrderChange,
HoverEnter = QWheelEvent::HoverEnter,
HoverLeave = QWheelEvent::HoverLeave,
HoverMove = QWheelEvent::HoverMove,
AcceptDropsChange = QWheelEvent::AcceptDropsChange,
ZeroTimerEvent = QWheelEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QWheelEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QWheelEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QWheelEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QWheelEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QWheelEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QWheelEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QWheelEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QWheelEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QWheelEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QWheelEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QWheelEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QWheelEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QWheelEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QWheelEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QWheelEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QWheelEvent::KeyboardLayoutChange,
DynamicPropertyChange = QWheelEvent::DynamicPropertyChange,
TabletEnterProximity = QWheelEvent::TabletEnterProximity,
TabletLeaveProximity = QWheelEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QWheelEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QWheelEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QWheelEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QWheelEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QWheelEvent::MacSizeChange,
ContentsRectChange = QWheelEvent::ContentsRectChange,
MacGLWindowChange = QWheelEvent::MacGLWindowChange,
FutureCallOut = QWheelEvent::FutureCallOut,
GraphicsSceneResize = QWheelEvent::GraphicsSceneResize,
GraphicsSceneMove = QWheelEvent::GraphicsSceneMove,
CursorChange = QWheelEvent::CursorChange,
ToolTipChange = QWheelEvent::ToolTipChange,
NetworkReplyUpdated = QWheelEvent::NetworkReplyUpdated,
GrabMouse = QWheelEvent::GrabMouse,
UngrabMouse = QWheelEvent::UngrabMouse,
GrabKeyboard = QWheelEvent::GrabKeyboard,
UngrabKeyboard = QWheelEvent::UngrabKeyboard,
StateMachineSignal = QWheelEvent::StateMachineSignal,
StateMachineWrapped = QWheelEvent::StateMachineWrapped,
TouchBegin = QWheelEvent::TouchBegin,
TouchUpdate = QWheelEvent::TouchUpdate,
TouchEnd = QWheelEvent::TouchEnd,
NativeGesture = QWheelEvent::NativeGesture,
RequestSoftwareInputPanel = QWheelEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QWheelEvent::CloseSoftwareInputPanel,
WinIdChange = QWheelEvent::WinIdChange,
Gesture = QWheelEvent::Gesture,
GestureOverride = QWheelEvent::GestureOverride,
ScrollPrepare = QWheelEvent::ScrollPrepare,
Scroll = QWheelEvent::Scroll,
Expose = QWheelEvent::Expose,
InputMethodQuery = QWheelEvent::InputMethodQuery,
OrientationChange = QWheelEvent::OrientationChange,
TouchCancel = QWheelEvent::TouchCancel,
ThemeChange = QWheelEvent::ThemeChange,
SockClose = QWheelEvent::SockClose,
PlatformPanel = QWheelEvent::PlatformPanel,
StyleAnimationUpdate = QWheelEvent::StyleAnimationUpdate,
ApplicationStateChange = QWheelEvent::ApplicationStateChange,
WindowChangeInternal = QWheelEvent::WindowChangeInternal,
ScreenChangeInternal = QWheelEvent::ScreenChangeInternal,
PlatformSurface = QWheelEvent::PlatformSurface,
Pointer = QWheelEvent::Pointer,
TabletTrackingChange = QWheelEvent::TabletTrackingChange,
User = QWheelEvent::User,
MaxUser = QWheelEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QWheelEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QWheelEvent_Wrapper(RJSApi& h, QWheelEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QWheelEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QWheelEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QWheelEvent_Wrapper
                
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
    
    // Class: QWheelEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: modifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: setModifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModifiers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: timestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: setTimestamp
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTimestamp
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: pointCount
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: point
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  point
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: pointById
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointById
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: allPointsGrabbed
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsGrabbed
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: allPointsAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: setAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: exclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: setExclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: clearPassiveGrabbers
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearPassiveGrabbers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: addPassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addPassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: removePassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removePassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: button
    // Source: QSinglePointEvent
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
            
    // Class: QWheelEvent
    // Function: buttons
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buttons
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: position
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: scenePosition
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scenePosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: globalPosition
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: exclusivePointGrabber
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusivePointGrabber
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: setExclusivePointGrabber
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusivePointGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWheelEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: pixelDelta
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pixelDelta
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: angleDelta
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  angleDelta
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: phase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  phase
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: inverted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  inverted
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: isInverted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInverted
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: hasPixelDelta
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasPixelDelta
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: isBeginEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBeginEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: isUpdateEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpdateEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: isEndEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEndEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QWheelEvent
    // Function: source
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  source
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
          
              return RJSType_QWheelEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QWheelEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QWheelEvent* getWrapped() const {
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
        QWheelEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QWheelEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QWheelEvent_Wrapper, "org.qcad.QWheelEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QKeyEvent>
      
      // singleton class wrapper for static functions:
      class QKeyEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QKeyEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QKeyEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_CONFIG(shortcut)

#endif


      private:
          RJSApi& handler;
          //static QKeyEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QKeyEvent
    class QKeyEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QKeyEvent_Wrapper(const QKeyEvent_Wrapper&);

    public:
      // initialization of QKeyEvent:
      static void init(RJSApi& handler);

      
        static QKeyEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QKeyEvent::getIdStatic()) {
                return (QKeyEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QKeyEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QKeyEvent*: wrapper wraps NULL";
          }

          QKeyEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QKeyEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QKeyEvent::None,
Timer = QKeyEvent::Timer,
MouseButtonPress = QKeyEvent::MouseButtonPress,
MouseButtonRelease = QKeyEvent::MouseButtonRelease,
MouseButtonDblClick = QKeyEvent::MouseButtonDblClick,
MouseMove = QKeyEvent::MouseMove,
KeyPress = QKeyEvent::KeyPress,
KeyRelease = QKeyEvent::KeyRelease,
FocusIn = QKeyEvent::FocusIn,
FocusOut = QKeyEvent::FocusOut,
FocusAboutToChange = QKeyEvent::FocusAboutToChange,
Enter = QKeyEvent::Enter,
Leave = QKeyEvent::Leave,
Paint = QKeyEvent::Paint,
Move = QKeyEvent::Move,
Resize = QKeyEvent::Resize,
Create = QKeyEvent::Create,
Destroy = QKeyEvent::Destroy,
Show = QKeyEvent::Show,
Hide = QKeyEvent::Hide,
Close = QKeyEvent::Close,
Quit = QKeyEvent::Quit,
ParentChange = QKeyEvent::ParentChange,
ParentAboutToChange = QKeyEvent::ParentAboutToChange,
ThreadChange = QKeyEvent::ThreadChange,
WindowActivate = QKeyEvent::WindowActivate,
WindowDeactivate = QKeyEvent::WindowDeactivate,
ShowToParent = QKeyEvent::ShowToParent,
HideToParent = QKeyEvent::HideToParent,
Wheel = QKeyEvent::Wheel,
WindowTitleChange = QKeyEvent::WindowTitleChange,
WindowIconChange = QKeyEvent::WindowIconChange,
ApplicationWindowIconChange = QKeyEvent::ApplicationWindowIconChange,
ApplicationFontChange = QKeyEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QKeyEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QKeyEvent::ApplicationPaletteChange,
PaletteChange = QKeyEvent::PaletteChange,
Clipboard = QKeyEvent::Clipboard,
Speech = QKeyEvent::Speech,
MetaCall = QKeyEvent::MetaCall,
SockAct = QKeyEvent::SockAct,
WinEventAct = QKeyEvent::WinEventAct,
DeferredDelete = QKeyEvent::DeferredDelete,
DragEnter = QKeyEvent::DragEnter,
DragMove = QKeyEvent::DragMove,
DragLeave = QKeyEvent::DragLeave,
Drop = QKeyEvent::Drop,
DragResponse = QKeyEvent::DragResponse,
ChildAdded = QKeyEvent::ChildAdded,
ChildPolished = QKeyEvent::ChildPolished,
ChildRemoved = QKeyEvent::ChildRemoved,
ShowWindowRequest = QKeyEvent::ShowWindowRequest,
PolishRequest = QKeyEvent::PolishRequest,
Polish = QKeyEvent::Polish,
LayoutRequest = QKeyEvent::LayoutRequest,
UpdateRequest = QKeyEvent::UpdateRequest,
UpdateLater = QKeyEvent::UpdateLater,
EmbeddingControl = QKeyEvent::EmbeddingControl,
ActivateControl = QKeyEvent::ActivateControl,
DeactivateControl = QKeyEvent::DeactivateControl,
ContextMenu = QKeyEvent::ContextMenu,
InputMethod = QKeyEvent::InputMethod,
TabletMove = QKeyEvent::TabletMove,
LocaleChange = QKeyEvent::LocaleChange,
LanguageChange = QKeyEvent::LanguageChange,
LayoutDirectionChange = QKeyEvent::LayoutDirectionChange,
Style = QKeyEvent::Style,
TabletPress = QKeyEvent::TabletPress,
TabletRelease = QKeyEvent::TabletRelease,
OkRequest = QKeyEvent::OkRequest,
HelpRequest = QKeyEvent::HelpRequest,
IconDrag = QKeyEvent::IconDrag,
FontChange = QKeyEvent::FontChange,
EnabledChange = QKeyEvent::EnabledChange,
ActivationChange = QKeyEvent::ActivationChange,
StyleChange = QKeyEvent::StyleChange,
IconTextChange = QKeyEvent::IconTextChange,
ModifiedChange = QKeyEvent::ModifiedChange,
MouseTrackingChange = QKeyEvent::MouseTrackingChange,
WindowBlocked = QKeyEvent::WindowBlocked,
WindowUnblocked = QKeyEvent::WindowUnblocked,
WindowStateChange = QKeyEvent::WindowStateChange,
ReadOnlyChange = QKeyEvent::ReadOnlyChange,
ToolTip = QKeyEvent::ToolTip,
WhatsThis = QKeyEvent::WhatsThis,
StatusTip = QKeyEvent::StatusTip,
ActionChanged = QKeyEvent::ActionChanged,
ActionAdded = QKeyEvent::ActionAdded,
ActionRemoved = QKeyEvent::ActionRemoved,
FileOpen = QKeyEvent::FileOpen,
Shortcut = QKeyEvent::Shortcut,
ShortcutOverride = QKeyEvent::ShortcutOverride,
WhatsThisClicked = QKeyEvent::WhatsThisClicked,
ToolBarChange = QKeyEvent::ToolBarChange,
ApplicationActivate = QKeyEvent::ApplicationActivate,
ApplicationActivated = QKeyEvent::ApplicationActivated,
ApplicationDeactivate = QKeyEvent::ApplicationDeactivate,
ApplicationDeactivated = QKeyEvent::ApplicationDeactivated,
QueryWhatsThis = QKeyEvent::QueryWhatsThis,
EnterWhatsThisMode = QKeyEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QKeyEvent::LeaveWhatsThisMode,
ZOrderChange = QKeyEvent::ZOrderChange,
HoverEnter = QKeyEvent::HoverEnter,
HoverLeave = QKeyEvent::HoverLeave,
HoverMove = QKeyEvent::HoverMove,
AcceptDropsChange = QKeyEvent::AcceptDropsChange,
ZeroTimerEvent = QKeyEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QKeyEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QKeyEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QKeyEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QKeyEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QKeyEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QKeyEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QKeyEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QKeyEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QKeyEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QKeyEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QKeyEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QKeyEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QKeyEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QKeyEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QKeyEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QKeyEvent::KeyboardLayoutChange,
DynamicPropertyChange = QKeyEvent::DynamicPropertyChange,
TabletEnterProximity = QKeyEvent::TabletEnterProximity,
TabletLeaveProximity = QKeyEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QKeyEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QKeyEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QKeyEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QKeyEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QKeyEvent::MacSizeChange,
ContentsRectChange = QKeyEvent::ContentsRectChange,
MacGLWindowChange = QKeyEvent::MacGLWindowChange,
FutureCallOut = QKeyEvent::FutureCallOut,
GraphicsSceneResize = QKeyEvent::GraphicsSceneResize,
GraphicsSceneMove = QKeyEvent::GraphicsSceneMove,
CursorChange = QKeyEvent::CursorChange,
ToolTipChange = QKeyEvent::ToolTipChange,
NetworkReplyUpdated = QKeyEvent::NetworkReplyUpdated,
GrabMouse = QKeyEvent::GrabMouse,
UngrabMouse = QKeyEvent::UngrabMouse,
GrabKeyboard = QKeyEvent::GrabKeyboard,
UngrabKeyboard = QKeyEvent::UngrabKeyboard,
StateMachineSignal = QKeyEvent::StateMachineSignal,
StateMachineWrapped = QKeyEvent::StateMachineWrapped,
TouchBegin = QKeyEvent::TouchBegin,
TouchUpdate = QKeyEvent::TouchUpdate,
TouchEnd = QKeyEvent::TouchEnd,
NativeGesture = QKeyEvent::NativeGesture,
RequestSoftwareInputPanel = QKeyEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QKeyEvent::CloseSoftwareInputPanel,
WinIdChange = QKeyEvent::WinIdChange,
Gesture = QKeyEvent::Gesture,
GestureOverride = QKeyEvent::GestureOverride,
ScrollPrepare = QKeyEvent::ScrollPrepare,
Scroll = QKeyEvent::Scroll,
Expose = QKeyEvent::Expose,
InputMethodQuery = QKeyEvent::InputMethodQuery,
OrientationChange = QKeyEvent::OrientationChange,
TouchCancel = QKeyEvent::TouchCancel,
ThemeChange = QKeyEvent::ThemeChange,
SockClose = QKeyEvent::SockClose,
PlatformPanel = QKeyEvent::PlatformPanel,
StyleAnimationUpdate = QKeyEvent::StyleAnimationUpdate,
ApplicationStateChange = QKeyEvent::ApplicationStateChange,
WindowChangeInternal = QKeyEvent::WindowChangeInternal,
ScreenChangeInternal = QKeyEvent::ScreenChangeInternal,
PlatformSurface = QKeyEvent::PlatformSurface,
Pointer = QKeyEvent::Pointer,
TabletTrackingChange = QKeyEvent::TabletTrackingChange,
User = QKeyEvent::User,
MaxUser = QKeyEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QKeyEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QKeyEvent_Wrapper(RJSApi& h, QKeyEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QKeyEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QKeyEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QKeyEvent_Wrapper
                
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
    
              )
              
              ;
            
#if QT_CONFIG(shortcut)

#endif


    // non-static functions:
    
    // Class: QKeyEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QKeyEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QKeyEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QKeyEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: setModifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModifiers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QKeyEvent
    // Function: timestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: setTimestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTimestamp
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QKeyEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: key
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  key
              (

                
              )
              
                const
              
              ;
            
#if QT_CONFIG(shortcut)

    // Class: QKeyEvent
    // Function: matches
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  matches
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#endif

    // Class: QKeyEvent
    // Function: modifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
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
            
    // Class: QKeyEvent
    // Function: isAutoRepeat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAutoRepeat
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: count
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  count
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: nativeScanCode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeScanCode
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: nativeVirtualKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeVirtualKey
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyEvent
    // Function: nativeModifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nativeModifiers
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
          
              return RJSType_QKeyEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QKeyEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QKeyEvent* getWrapped() const {
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
        QKeyEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QKeyEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QKeyEvent_Wrapper, "org.qcad.QKeyEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QPaintEvent>
      
      // singleton class wrapper for static functions:
      class QPaintEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QPaintEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QPaintEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QPaintEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QPaintEvent
    class QPaintEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QPaintEvent_Wrapper(const QPaintEvent_Wrapper&);

    public:
      // initialization of QPaintEvent:
      static void init(RJSApi& handler);

      
        static QPaintEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QPaintEvent::getIdStatic()) {
                return (QPaintEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QPaintEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QPaintEvent*: wrapper wraps NULL";
          }

          QPaintEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QPaintEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QPaintEvent::None,
Timer = QPaintEvent::Timer,
MouseButtonPress = QPaintEvent::MouseButtonPress,
MouseButtonRelease = QPaintEvent::MouseButtonRelease,
MouseButtonDblClick = QPaintEvent::MouseButtonDblClick,
MouseMove = QPaintEvent::MouseMove,
KeyPress = QPaintEvent::KeyPress,
KeyRelease = QPaintEvent::KeyRelease,
FocusIn = QPaintEvent::FocusIn,
FocusOut = QPaintEvent::FocusOut,
FocusAboutToChange = QPaintEvent::FocusAboutToChange,
Enter = QPaintEvent::Enter,
Leave = QPaintEvent::Leave,
Paint = QPaintEvent::Paint,
Move = QPaintEvent::Move,
Resize = QPaintEvent::Resize,
Create = QPaintEvent::Create,
Destroy = QPaintEvent::Destroy,
Show = QPaintEvent::Show,
Hide = QPaintEvent::Hide,
Close = QPaintEvent::Close,
Quit = QPaintEvent::Quit,
ParentChange = QPaintEvent::ParentChange,
ParentAboutToChange = QPaintEvent::ParentAboutToChange,
ThreadChange = QPaintEvent::ThreadChange,
WindowActivate = QPaintEvent::WindowActivate,
WindowDeactivate = QPaintEvent::WindowDeactivate,
ShowToParent = QPaintEvent::ShowToParent,
HideToParent = QPaintEvent::HideToParent,
Wheel = QPaintEvent::Wheel,
WindowTitleChange = QPaintEvent::WindowTitleChange,
WindowIconChange = QPaintEvent::WindowIconChange,
ApplicationWindowIconChange = QPaintEvent::ApplicationWindowIconChange,
ApplicationFontChange = QPaintEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QPaintEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QPaintEvent::ApplicationPaletteChange,
PaletteChange = QPaintEvent::PaletteChange,
Clipboard = QPaintEvent::Clipboard,
Speech = QPaintEvent::Speech,
MetaCall = QPaintEvent::MetaCall,
SockAct = QPaintEvent::SockAct,
WinEventAct = QPaintEvent::WinEventAct,
DeferredDelete = QPaintEvent::DeferredDelete,
DragEnter = QPaintEvent::DragEnter,
DragMove = QPaintEvent::DragMove,
DragLeave = QPaintEvent::DragLeave,
Drop = QPaintEvent::Drop,
DragResponse = QPaintEvent::DragResponse,
ChildAdded = QPaintEvent::ChildAdded,
ChildPolished = QPaintEvent::ChildPolished,
ChildRemoved = QPaintEvent::ChildRemoved,
ShowWindowRequest = QPaintEvent::ShowWindowRequest,
PolishRequest = QPaintEvent::PolishRequest,
Polish = QPaintEvent::Polish,
LayoutRequest = QPaintEvent::LayoutRequest,
UpdateRequest = QPaintEvent::UpdateRequest,
UpdateLater = QPaintEvent::UpdateLater,
EmbeddingControl = QPaintEvent::EmbeddingControl,
ActivateControl = QPaintEvent::ActivateControl,
DeactivateControl = QPaintEvent::DeactivateControl,
ContextMenu = QPaintEvent::ContextMenu,
InputMethod = QPaintEvent::InputMethod,
TabletMove = QPaintEvent::TabletMove,
LocaleChange = QPaintEvent::LocaleChange,
LanguageChange = QPaintEvent::LanguageChange,
LayoutDirectionChange = QPaintEvent::LayoutDirectionChange,
Style = QPaintEvent::Style,
TabletPress = QPaintEvent::TabletPress,
TabletRelease = QPaintEvent::TabletRelease,
OkRequest = QPaintEvent::OkRequest,
HelpRequest = QPaintEvent::HelpRequest,
IconDrag = QPaintEvent::IconDrag,
FontChange = QPaintEvent::FontChange,
EnabledChange = QPaintEvent::EnabledChange,
ActivationChange = QPaintEvent::ActivationChange,
StyleChange = QPaintEvent::StyleChange,
IconTextChange = QPaintEvent::IconTextChange,
ModifiedChange = QPaintEvent::ModifiedChange,
MouseTrackingChange = QPaintEvent::MouseTrackingChange,
WindowBlocked = QPaintEvent::WindowBlocked,
WindowUnblocked = QPaintEvent::WindowUnblocked,
WindowStateChange = QPaintEvent::WindowStateChange,
ReadOnlyChange = QPaintEvent::ReadOnlyChange,
ToolTip = QPaintEvent::ToolTip,
WhatsThis = QPaintEvent::WhatsThis,
StatusTip = QPaintEvent::StatusTip,
ActionChanged = QPaintEvent::ActionChanged,
ActionAdded = QPaintEvent::ActionAdded,
ActionRemoved = QPaintEvent::ActionRemoved,
FileOpen = QPaintEvent::FileOpen,
Shortcut = QPaintEvent::Shortcut,
ShortcutOverride = QPaintEvent::ShortcutOverride,
WhatsThisClicked = QPaintEvent::WhatsThisClicked,
ToolBarChange = QPaintEvent::ToolBarChange,
ApplicationActivate = QPaintEvent::ApplicationActivate,
ApplicationActivated = QPaintEvent::ApplicationActivated,
ApplicationDeactivate = QPaintEvent::ApplicationDeactivate,
ApplicationDeactivated = QPaintEvent::ApplicationDeactivated,
QueryWhatsThis = QPaintEvent::QueryWhatsThis,
EnterWhatsThisMode = QPaintEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QPaintEvent::LeaveWhatsThisMode,
ZOrderChange = QPaintEvent::ZOrderChange,
HoverEnter = QPaintEvent::HoverEnter,
HoverLeave = QPaintEvent::HoverLeave,
HoverMove = QPaintEvent::HoverMove,
AcceptDropsChange = QPaintEvent::AcceptDropsChange,
ZeroTimerEvent = QPaintEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QPaintEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QPaintEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QPaintEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QPaintEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QPaintEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QPaintEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QPaintEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QPaintEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QPaintEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QPaintEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QPaintEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QPaintEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QPaintEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QPaintEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QPaintEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QPaintEvent::KeyboardLayoutChange,
DynamicPropertyChange = QPaintEvent::DynamicPropertyChange,
TabletEnterProximity = QPaintEvent::TabletEnterProximity,
TabletLeaveProximity = QPaintEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QPaintEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QPaintEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QPaintEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QPaintEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QPaintEvent::MacSizeChange,
ContentsRectChange = QPaintEvent::ContentsRectChange,
MacGLWindowChange = QPaintEvent::MacGLWindowChange,
FutureCallOut = QPaintEvent::FutureCallOut,
GraphicsSceneResize = QPaintEvent::GraphicsSceneResize,
GraphicsSceneMove = QPaintEvent::GraphicsSceneMove,
CursorChange = QPaintEvent::CursorChange,
ToolTipChange = QPaintEvent::ToolTipChange,
NetworkReplyUpdated = QPaintEvent::NetworkReplyUpdated,
GrabMouse = QPaintEvent::GrabMouse,
UngrabMouse = QPaintEvent::UngrabMouse,
GrabKeyboard = QPaintEvent::GrabKeyboard,
UngrabKeyboard = QPaintEvent::UngrabKeyboard,
StateMachineSignal = QPaintEvent::StateMachineSignal,
StateMachineWrapped = QPaintEvent::StateMachineWrapped,
TouchBegin = QPaintEvent::TouchBegin,
TouchUpdate = QPaintEvent::TouchUpdate,
TouchEnd = QPaintEvent::TouchEnd,
NativeGesture = QPaintEvent::NativeGesture,
RequestSoftwareInputPanel = QPaintEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QPaintEvent::CloseSoftwareInputPanel,
WinIdChange = QPaintEvent::WinIdChange,
Gesture = QPaintEvent::Gesture,
GestureOverride = QPaintEvent::GestureOverride,
ScrollPrepare = QPaintEvent::ScrollPrepare,
Scroll = QPaintEvent::Scroll,
Expose = QPaintEvent::Expose,
InputMethodQuery = QPaintEvent::InputMethodQuery,
OrientationChange = QPaintEvent::OrientationChange,
TouchCancel = QPaintEvent::TouchCancel,
ThemeChange = QPaintEvent::ThemeChange,
SockClose = QPaintEvent::SockClose,
PlatformPanel = QPaintEvent::PlatformPanel,
StyleAnimationUpdate = QPaintEvent::StyleAnimationUpdate,
ApplicationStateChange = QPaintEvent::ApplicationStateChange,
WindowChangeInternal = QPaintEvent::WindowChangeInternal,
ScreenChangeInternal = QPaintEvent::ScreenChangeInternal,
PlatformSurface = QPaintEvent::PlatformSurface,
Pointer = QPaintEvent::Pointer,
TabletTrackingChange = QPaintEvent::TabletTrackingChange,
User = QPaintEvent::User,
MaxUser = QPaintEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QPaintEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QPaintEvent_Wrapper(RJSApi& h, QPaintEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QPaintEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QPaintEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QPaintEvent_Wrapper
                
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
    
    // Class: QPaintEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QPaintEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QPaintEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QPaintEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintEvent
    // Function: rect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rect
              (

                
              )
              
                const
              
              ;
            
    // Class: QPaintEvent
    // Function: region
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  region
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
          
              return RJSType_QPaintEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QPaintEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QPaintEvent* getWrapped() const {
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
        QPaintEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QPaintEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QPaintEvent_Wrapper, "org.qcad.QPaintEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QResizeEvent>
      
      // singleton class wrapper for static functions:
      class QResizeEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QResizeEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QResizeEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QResizeEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QResizeEvent
    class QResizeEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QResizeEvent_Wrapper(const QResizeEvent_Wrapper&);

    public:
      // initialization of QResizeEvent:
      static void init(RJSApi& handler);

      
        static QResizeEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QResizeEvent::getIdStatic()) {
                return (QResizeEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QResizeEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QResizeEvent*: wrapper wraps NULL";
          }

          QResizeEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QResizeEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QResizeEvent::None,
Timer = QResizeEvent::Timer,
MouseButtonPress = QResizeEvent::MouseButtonPress,
MouseButtonRelease = QResizeEvent::MouseButtonRelease,
MouseButtonDblClick = QResizeEvent::MouseButtonDblClick,
MouseMove = QResizeEvent::MouseMove,
KeyPress = QResizeEvent::KeyPress,
KeyRelease = QResizeEvent::KeyRelease,
FocusIn = QResizeEvent::FocusIn,
FocusOut = QResizeEvent::FocusOut,
FocusAboutToChange = QResizeEvent::FocusAboutToChange,
Enter = QResizeEvent::Enter,
Leave = QResizeEvent::Leave,
Paint = QResizeEvent::Paint,
Move = QResizeEvent::Move,
Resize = QResizeEvent::Resize,
Create = QResizeEvent::Create,
Destroy = QResizeEvent::Destroy,
Show = QResizeEvent::Show,
Hide = QResizeEvent::Hide,
Close = QResizeEvent::Close,
Quit = QResizeEvent::Quit,
ParentChange = QResizeEvent::ParentChange,
ParentAboutToChange = QResizeEvent::ParentAboutToChange,
ThreadChange = QResizeEvent::ThreadChange,
WindowActivate = QResizeEvent::WindowActivate,
WindowDeactivate = QResizeEvent::WindowDeactivate,
ShowToParent = QResizeEvent::ShowToParent,
HideToParent = QResizeEvent::HideToParent,
Wheel = QResizeEvent::Wheel,
WindowTitleChange = QResizeEvent::WindowTitleChange,
WindowIconChange = QResizeEvent::WindowIconChange,
ApplicationWindowIconChange = QResizeEvent::ApplicationWindowIconChange,
ApplicationFontChange = QResizeEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QResizeEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QResizeEvent::ApplicationPaletteChange,
PaletteChange = QResizeEvent::PaletteChange,
Clipboard = QResizeEvent::Clipboard,
Speech = QResizeEvent::Speech,
MetaCall = QResizeEvent::MetaCall,
SockAct = QResizeEvent::SockAct,
WinEventAct = QResizeEvent::WinEventAct,
DeferredDelete = QResizeEvent::DeferredDelete,
DragEnter = QResizeEvent::DragEnter,
DragMove = QResizeEvent::DragMove,
DragLeave = QResizeEvent::DragLeave,
Drop = QResizeEvent::Drop,
DragResponse = QResizeEvent::DragResponse,
ChildAdded = QResizeEvent::ChildAdded,
ChildPolished = QResizeEvent::ChildPolished,
ChildRemoved = QResizeEvent::ChildRemoved,
ShowWindowRequest = QResizeEvent::ShowWindowRequest,
PolishRequest = QResizeEvent::PolishRequest,
Polish = QResizeEvent::Polish,
LayoutRequest = QResizeEvent::LayoutRequest,
UpdateRequest = QResizeEvent::UpdateRequest,
UpdateLater = QResizeEvent::UpdateLater,
EmbeddingControl = QResizeEvent::EmbeddingControl,
ActivateControl = QResizeEvent::ActivateControl,
DeactivateControl = QResizeEvent::DeactivateControl,
ContextMenu = QResizeEvent::ContextMenu,
InputMethod = QResizeEvent::InputMethod,
TabletMove = QResizeEvent::TabletMove,
LocaleChange = QResizeEvent::LocaleChange,
LanguageChange = QResizeEvent::LanguageChange,
LayoutDirectionChange = QResizeEvent::LayoutDirectionChange,
Style = QResizeEvent::Style,
TabletPress = QResizeEvent::TabletPress,
TabletRelease = QResizeEvent::TabletRelease,
OkRequest = QResizeEvent::OkRequest,
HelpRequest = QResizeEvent::HelpRequest,
IconDrag = QResizeEvent::IconDrag,
FontChange = QResizeEvent::FontChange,
EnabledChange = QResizeEvent::EnabledChange,
ActivationChange = QResizeEvent::ActivationChange,
StyleChange = QResizeEvent::StyleChange,
IconTextChange = QResizeEvent::IconTextChange,
ModifiedChange = QResizeEvent::ModifiedChange,
MouseTrackingChange = QResizeEvent::MouseTrackingChange,
WindowBlocked = QResizeEvent::WindowBlocked,
WindowUnblocked = QResizeEvent::WindowUnblocked,
WindowStateChange = QResizeEvent::WindowStateChange,
ReadOnlyChange = QResizeEvent::ReadOnlyChange,
ToolTip = QResizeEvent::ToolTip,
WhatsThis = QResizeEvent::WhatsThis,
StatusTip = QResizeEvent::StatusTip,
ActionChanged = QResizeEvent::ActionChanged,
ActionAdded = QResizeEvent::ActionAdded,
ActionRemoved = QResizeEvent::ActionRemoved,
FileOpen = QResizeEvent::FileOpen,
Shortcut = QResizeEvent::Shortcut,
ShortcutOverride = QResizeEvent::ShortcutOverride,
WhatsThisClicked = QResizeEvent::WhatsThisClicked,
ToolBarChange = QResizeEvent::ToolBarChange,
ApplicationActivate = QResizeEvent::ApplicationActivate,
ApplicationActivated = QResizeEvent::ApplicationActivated,
ApplicationDeactivate = QResizeEvent::ApplicationDeactivate,
ApplicationDeactivated = QResizeEvent::ApplicationDeactivated,
QueryWhatsThis = QResizeEvent::QueryWhatsThis,
EnterWhatsThisMode = QResizeEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QResizeEvent::LeaveWhatsThisMode,
ZOrderChange = QResizeEvent::ZOrderChange,
HoverEnter = QResizeEvent::HoverEnter,
HoverLeave = QResizeEvent::HoverLeave,
HoverMove = QResizeEvent::HoverMove,
AcceptDropsChange = QResizeEvent::AcceptDropsChange,
ZeroTimerEvent = QResizeEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QResizeEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QResizeEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QResizeEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QResizeEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QResizeEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QResizeEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QResizeEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QResizeEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QResizeEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QResizeEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QResizeEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QResizeEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QResizeEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QResizeEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QResizeEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QResizeEvent::KeyboardLayoutChange,
DynamicPropertyChange = QResizeEvent::DynamicPropertyChange,
TabletEnterProximity = QResizeEvent::TabletEnterProximity,
TabletLeaveProximity = QResizeEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QResizeEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QResizeEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QResizeEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QResizeEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QResizeEvent::MacSizeChange,
ContentsRectChange = QResizeEvent::ContentsRectChange,
MacGLWindowChange = QResizeEvent::MacGLWindowChange,
FutureCallOut = QResizeEvent::FutureCallOut,
GraphicsSceneResize = QResizeEvent::GraphicsSceneResize,
GraphicsSceneMove = QResizeEvent::GraphicsSceneMove,
CursorChange = QResizeEvent::CursorChange,
ToolTipChange = QResizeEvent::ToolTipChange,
NetworkReplyUpdated = QResizeEvent::NetworkReplyUpdated,
GrabMouse = QResizeEvent::GrabMouse,
UngrabMouse = QResizeEvent::UngrabMouse,
GrabKeyboard = QResizeEvent::GrabKeyboard,
UngrabKeyboard = QResizeEvent::UngrabKeyboard,
StateMachineSignal = QResizeEvent::StateMachineSignal,
StateMachineWrapped = QResizeEvent::StateMachineWrapped,
TouchBegin = QResizeEvent::TouchBegin,
TouchUpdate = QResizeEvent::TouchUpdate,
TouchEnd = QResizeEvent::TouchEnd,
NativeGesture = QResizeEvent::NativeGesture,
RequestSoftwareInputPanel = QResizeEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QResizeEvent::CloseSoftwareInputPanel,
WinIdChange = QResizeEvent::WinIdChange,
Gesture = QResizeEvent::Gesture,
GestureOverride = QResizeEvent::GestureOverride,
ScrollPrepare = QResizeEvent::ScrollPrepare,
Scroll = QResizeEvent::Scroll,
Expose = QResizeEvent::Expose,
InputMethodQuery = QResizeEvent::InputMethodQuery,
OrientationChange = QResizeEvent::OrientationChange,
TouchCancel = QResizeEvent::TouchCancel,
ThemeChange = QResizeEvent::ThemeChange,
SockClose = QResizeEvent::SockClose,
PlatformPanel = QResizeEvent::PlatformPanel,
StyleAnimationUpdate = QResizeEvent::StyleAnimationUpdate,
ApplicationStateChange = QResizeEvent::ApplicationStateChange,
WindowChangeInternal = QResizeEvent::WindowChangeInternal,
ScreenChangeInternal = QResizeEvent::ScreenChangeInternal,
PlatformSurface = QResizeEvent::PlatformSurface,
Pointer = QResizeEvent::Pointer,
TabletTrackingChange = QResizeEvent::TabletTrackingChange,
User = QResizeEvent::User,
MaxUser = QResizeEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QResizeEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QResizeEvent_Wrapper(RJSApi& h, QResizeEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QResizeEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QResizeEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QResizeEvent_Wrapper
                
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
    
    // Class: QResizeEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QResizeEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QResizeEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QResizeEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QResizeEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QResizeEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QResizeEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QResizeEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QResizeEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QResizeEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QResizeEvent
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QResizeEvent
    // Function: oldSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  oldSize
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
          
              return RJSType_QResizeEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QResizeEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QResizeEvent* getWrapped() const {
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
        QResizeEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QResizeEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QResizeEvent_Wrapper, "org.qcad.QResizeEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QDragEnterEvent>
      
      // singleton class wrapper for static functions:
      class QDragEnterEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QDragEnterEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QDragEnterEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QDragEnterEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDragEnterEvent
    class QDragEnterEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDragEnterEvent_Wrapper(const QDragEnterEvent_Wrapper&);

    public:
      // initialization of QDragEnterEvent:
      static void init(RJSApi& handler);

      
        static QDragEnterEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QDragEnterEvent::getIdStatic()) {
                return (QDragEnterEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QDragEnterEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDragEnterEvent*: wrapper wraps NULL";
          }

          QDragEnterEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDragEnterEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QDragEnterEvent::None,
Timer = QDragEnterEvent::Timer,
MouseButtonPress = QDragEnterEvent::MouseButtonPress,
MouseButtonRelease = QDragEnterEvent::MouseButtonRelease,
MouseButtonDblClick = QDragEnterEvent::MouseButtonDblClick,
MouseMove = QDragEnterEvent::MouseMove,
KeyPress = QDragEnterEvent::KeyPress,
KeyRelease = QDragEnterEvent::KeyRelease,
FocusIn = QDragEnterEvent::FocusIn,
FocusOut = QDragEnterEvent::FocusOut,
FocusAboutToChange = QDragEnterEvent::FocusAboutToChange,
Enter = QDragEnterEvent::Enter,
Leave = QDragEnterEvent::Leave,
Paint = QDragEnterEvent::Paint,
Move = QDragEnterEvent::Move,
Resize = QDragEnterEvent::Resize,
Create = QDragEnterEvent::Create,
Destroy = QDragEnterEvent::Destroy,
Show = QDragEnterEvent::Show,
Hide = QDragEnterEvent::Hide,
Close = QDragEnterEvent::Close,
Quit = QDragEnterEvent::Quit,
ParentChange = QDragEnterEvent::ParentChange,
ParentAboutToChange = QDragEnterEvent::ParentAboutToChange,
ThreadChange = QDragEnterEvent::ThreadChange,
WindowActivate = QDragEnterEvent::WindowActivate,
WindowDeactivate = QDragEnterEvent::WindowDeactivate,
ShowToParent = QDragEnterEvent::ShowToParent,
HideToParent = QDragEnterEvent::HideToParent,
Wheel = QDragEnterEvent::Wheel,
WindowTitleChange = QDragEnterEvent::WindowTitleChange,
WindowIconChange = QDragEnterEvent::WindowIconChange,
ApplicationWindowIconChange = QDragEnterEvent::ApplicationWindowIconChange,
ApplicationFontChange = QDragEnterEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QDragEnterEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QDragEnterEvent::ApplicationPaletteChange,
PaletteChange = QDragEnterEvent::PaletteChange,
Clipboard = QDragEnterEvent::Clipboard,
Speech = QDragEnterEvent::Speech,
MetaCall = QDragEnterEvent::MetaCall,
SockAct = QDragEnterEvent::SockAct,
WinEventAct = QDragEnterEvent::WinEventAct,
DeferredDelete = QDragEnterEvent::DeferredDelete,
DragEnter = QDragEnterEvent::DragEnter,
DragMove = QDragEnterEvent::DragMove,
DragLeave = QDragEnterEvent::DragLeave,
Drop = QDragEnterEvent::Drop,
DragResponse = QDragEnterEvent::DragResponse,
ChildAdded = QDragEnterEvent::ChildAdded,
ChildPolished = QDragEnterEvent::ChildPolished,
ChildRemoved = QDragEnterEvent::ChildRemoved,
ShowWindowRequest = QDragEnterEvent::ShowWindowRequest,
PolishRequest = QDragEnterEvent::PolishRequest,
Polish = QDragEnterEvent::Polish,
LayoutRequest = QDragEnterEvent::LayoutRequest,
UpdateRequest = QDragEnterEvent::UpdateRequest,
UpdateLater = QDragEnterEvent::UpdateLater,
EmbeddingControl = QDragEnterEvent::EmbeddingControl,
ActivateControl = QDragEnterEvent::ActivateControl,
DeactivateControl = QDragEnterEvent::DeactivateControl,
ContextMenu = QDragEnterEvent::ContextMenu,
InputMethod = QDragEnterEvent::InputMethod,
TabletMove = QDragEnterEvent::TabletMove,
LocaleChange = QDragEnterEvent::LocaleChange,
LanguageChange = QDragEnterEvent::LanguageChange,
LayoutDirectionChange = QDragEnterEvent::LayoutDirectionChange,
Style = QDragEnterEvent::Style,
TabletPress = QDragEnterEvent::TabletPress,
TabletRelease = QDragEnterEvent::TabletRelease,
OkRequest = QDragEnterEvent::OkRequest,
HelpRequest = QDragEnterEvent::HelpRequest,
IconDrag = QDragEnterEvent::IconDrag,
FontChange = QDragEnterEvent::FontChange,
EnabledChange = QDragEnterEvent::EnabledChange,
ActivationChange = QDragEnterEvent::ActivationChange,
StyleChange = QDragEnterEvent::StyleChange,
IconTextChange = QDragEnterEvent::IconTextChange,
ModifiedChange = QDragEnterEvent::ModifiedChange,
MouseTrackingChange = QDragEnterEvent::MouseTrackingChange,
WindowBlocked = QDragEnterEvent::WindowBlocked,
WindowUnblocked = QDragEnterEvent::WindowUnblocked,
WindowStateChange = QDragEnterEvent::WindowStateChange,
ReadOnlyChange = QDragEnterEvent::ReadOnlyChange,
ToolTip = QDragEnterEvent::ToolTip,
WhatsThis = QDragEnterEvent::WhatsThis,
StatusTip = QDragEnterEvent::StatusTip,
ActionChanged = QDragEnterEvent::ActionChanged,
ActionAdded = QDragEnterEvent::ActionAdded,
ActionRemoved = QDragEnterEvent::ActionRemoved,
FileOpen = QDragEnterEvent::FileOpen,
Shortcut = QDragEnterEvent::Shortcut,
ShortcutOverride = QDragEnterEvent::ShortcutOverride,
WhatsThisClicked = QDragEnterEvent::WhatsThisClicked,
ToolBarChange = QDragEnterEvent::ToolBarChange,
ApplicationActivate = QDragEnterEvent::ApplicationActivate,
ApplicationActivated = QDragEnterEvent::ApplicationActivated,
ApplicationDeactivate = QDragEnterEvent::ApplicationDeactivate,
ApplicationDeactivated = QDragEnterEvent::ApplicationDeactivated,
QueryWhatsThis = QDragEnterEvent::QueryWhatsThis,
EnterWhatsThisMode = QDragEnterEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QDragEnterEvent::LeaveWhatsThisMode,
ZOrderChange = QDragEnterEvent::ZOrderChange,
HoverEnter = QDragEnterEvent::HoverEnter,
HoverLeave = QDragEnterEvent::HoverLeave,
HoverMove = QDragEnterEvent::HoverMove,
AcceptDropsChange = QDragEnterEvent::AcceptDropsChange,
ZeroTimerEvent = QDragEnterEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QDragEnterEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QDragEnterEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QDragEnterEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QDragEnterEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QDragEnterEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QDragEnterEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QDragEnterEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QDragEnterEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QDragEnterEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QDragEnterEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QDragEnterEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QDragEnterEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QDragEnterEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QDragEnterEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QDragEnterEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QDragEnterEvent::KeyboardLayoutChange,
DynamicPropertyChange = QDragEnterEvent::DynamicPropertyChange,
TabletEnterProximity = QDragEnterEvent::TabletEnterProximity,
TabletLeaveProximity = QDragEnterEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QDragEnterEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QDragEnterEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QDragEnterEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QDragEnterEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QDragEnterEvent::MacSizeChange,
ContentsRectChange = QDragEnterEvent::ContentsRectChange,
MacGLWindowChange = QDragEnterEvent::MacGLWindowChange,
FutureCallOut = QDragEnterEvent::FutureCallOut,
GraphicsSceneResize = QDragEnterEvent::GraphicsSceneResize,
GraphicsSceneMove = QDragEnterEvent::GraphicsSceneMove,
CursorChange = QDragEnterEvent::CursorChange,
ToolTipChange = QDragEnterEvent::ToolTipChange,
NetworkReplyUpdated = QDragEnterEvent::NetworkReplyUpdated,
GrabMouse = QDragEnterEvent::GrabMouse,
UngrabMouse = QDragEnterEvent::UngrabMouse,
GrabKeyboard = QDragEnterEvent::GrabKeyboard,
UngrabKeyboard = QDragEnterEvent::UngrabKeyboard,
StateMachineSignal = QDragEnterEvent::StateMachineSignal,
StateMachineWrapped = QDragEnterEvent::StateMachineWrapped,
TouchBegin = QDragEnterEvent::TouchBegin,
TouchUpdate = QDragEnterEvent::TouchUpdate,
TouchEnd = QDragEnterEvent::TouchEnd,
NativeGesture = QDragEnterEvent::NativeGesture,
RequestSoftwareInputPanel = QDragEnterEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QDragEnterEvent::CloseSoftwareInputPanel,
WinIdChange = QDragEnterEvent::WinIdChange,
Gesture = QDragEnterEvent::Gesture,
GestureOverride = QDragEnterEvent::GestureOverride,
ScrollPrepare = QDragEnterEvent::ScrollPrepare,
Scroll = QDragEnterEvent::Scroll,
Expose = QDragEnterEvent::Expose,
InputMethodQuery = QDragEnterEvent::InputMethodQuery,
OrientationChange = QDragEnterEvent::OrientationChange,
TouchCancel = QDragEnterEvent::TouchCancel,
ThemeChange = QDragEnterEvent::ThemeChange,
SockClose = QDragEnterEvent::SockClose,
PlatformPanel = QDragEnterEvent::PlatformPanel,
StyleAnimationUpdate = QDragEnterEvent::StyleAnimationUpdate,
ApplicationStateChange = QDragEnterEvent::ApplicationStateChange,
WindowChangeInternal = QDragEnterEvent::WindowChangeInternal,
ScreenChangeInternal = QDragEnterEvent::ScreenChangeInternal,
PlatformSurface = QDragEnterEvent::PlatformSurface,
Pointer = QDragEnterEvent::Pointer,
TabletTrackingChange = QDragEnterEvent::TabletTrackingChange,
User = QDragEnterEvent::User,
MaxUser = QDragEnterEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDragEnterEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDragEnterEvent_Wrapper(RJSApi& h, QDragEnterEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDragEnterEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDragEnterEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDragEnterEvent_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDragEnterEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDragEnterEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: position
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: buttons
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buttons
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: modifiers
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: acceptProposedAction
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  acceptProposedAction
              (

                
              )
              
              ;
            
    // Class: QDragEnterEvent
    // Function: setDropAction
    // Source: QDropEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDropAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDragEnterEvent
    // Function: source
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  source
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: mimeData
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mimeData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: clone
    // Source: QDragMoveEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: answerRect
    // Source: QDragMoveEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  answerRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragEnterEvent
    // Function: accept
    // Source: QDragMoveEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDragEnterEvent
    // Function: ignore
    // Source: QDragMoveEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
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
          
              return RJSType_QDragEnterEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QDragEnterEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDragEnterEvent* getWrapped() const {
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
        QDragEnterEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QDragEnterEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QDragEnterEvent_Wrapper, "org.qcad.QDragEnterEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QDropEvent>
      
      // singleton class wrapper for static functions:
      class QDropEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QDropEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QDropEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QDropEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDropEvent
    class QDropEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDropEvent_Wrapper(const QDropEvent_Wrapper&);

    public:
      // initialization of QDropEvent:
      static void init(RJSApi& handler);

      
        static QDropEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_QDragEnterEvent::getIdStatic()) {
              return (QDropEvent*)(QDragEnterEvent*)vp;
            }
            
            if (t==RJSType_QDragMoveEvent::getIdStatic()) {
              return (QDropEvent*)(QDragMoveEvent*)vp;
            }
            

          // pointer to desired type:
          
              if (t==RJSType_QDropEvent::getIdStatic()) {
                return (QDropEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QDropEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDropEvent*: wrapper wraps NULL";
          }

          QDropEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDropEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QDropEvent::None,
Timer = QDropEvent::Timer,
MouseButtonPress = QDropEvent::MouseButtonPress,
MouseButtonRelease = QDropEvent::MouseButtonRelease,
MouseButtonDblClick = QDropEvent::MouseButtonDblClick,
MouseMove = QDropEvent::MouseMove,
KeyPress = QDropEvent::KeyPress,
KeyRelease = QDropEvent::KeyRelease,
FocusIn = QDropEvent::FocusIn,
FocusOut = QDropEvent::FocusOut,
FocusAboutToChange = QDropEvent::FocusAboutToChange,
Enter = QDropEvent::Enter,
Leave = QDropEvent::Leave,
Paint = QDropEvent::Paint,
Move = QDropEvent::Move,
Resize = QDropEvent::Resize,
Create = QDropEvent::Create,
Destroy = QDropEvent::Destroy,
Show = QDropEvent::Show,
Hide = QDropEvent::Hide,
Close = QDropEvent::Close,
Quit = QDropEvent::Quit,
ParentChange = QDropEvent::ParentChange,
ParentAboutToChange = QDropEvent::ParentAboutToChange,
ThreadChange = QDropEvent::ThreadChange,
WindowActivate = QDropEvent::WindowActivate,
WindowDeactivate = QDropEvent::WindowDeactivate,
ShowToParent = QDropEvent::ShowToParent,
HideToParent = QDropEvent::HideToParent,
Wheel = QDropEvent::Wheel,
WindowTitleChange = QDropEvent::WindowTitleChange,
WindowIconChange = QDropEvent::WindowIconChange,
ApplicationWindowIconChange = QDropEvent::ApplicationWindowIconChange,
ApplicationFontChange = QDropEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QDropEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QDropEvent::ApplicationPaletteChange,
PaletteChange = QDropEvent::PaletteChange,
Clipboard = QDropEvent::Clipboard,
Speech = QDropEvent::Speech,
MetaCall = QDropEvent::MetaCall,
SockAct = QDropEvent::SockAct,
WinEventAct = QDropEvent::WinEventAct,
DeferredDelete = QDropEvent::DeferredDelete,
DragEnter = QDropEvent::DragEnter,
DragMove = QDropEvent::DragMove,
DragLeave = QDropEvent::DragLeave,
Drop = QDropEvent::Drop,
DragResponse = QDropEvent::DragResponse,
ChildAdded = QDropEvent::ChildAdded,
ChildPolished = QDropEvent::ChildPolished,
ChildRemoved = QDropEvent::ChildRemoved,
ShowWindowRequest = QDropEvent::ShowWindowRequest,
PolishRequest = QDropEvent::PolishRequest,
Polish = QDropEvent::Polish,
LayoutRequest = QDropEvent::LayoutRequest,
UpdateRequest = QDropEvent::UpdateRequest,
UpdateLater = QDropEvent::UpdateLater,
EmbeddingControl = QDropEvent::EmbeddingControl,
ActivateControl = QDropEvent::ActivateControl,
DeactivateControl = QDropEvent::DeactivateControl,
ContextMenu = QDropEvent::ContextMenu,
InputMethod = QDropEvent::InputMethod,
TabletMove = QDropEvent::TabletMove,
LocaleChange = QDropEvent::LocaleChange,
LanguageChange = QDropEvent::LanguageChange,
LayoutDirectionChange = QDropEvent::LayoutDirectionChange,
Style = QDropEvent::Style,
TabletPress = QDropEvent::TabletPress,
TabletRelease = QDropEvent::TabletRelease,
OkRequest = QDropEvent::OkRequest,
HelpRequest = QDropEvent::HelpRequest,
IconDrag = QDropEvent::IconDrag,
FontChange = QDropEvent::FontChange,
EnabledChange = QDropEvent::EnabledChange,
ActivationChange = QDropEvent::ActivationChange,
StyleChange = QDropEvent::StyleChange,
IconTextChange = QDropEvent::IconTextChange,
ModifiedChange = QDropEvent::ModifiedChange,
MouseTrackingChange = QDropEvent::MouseTrackingChange,
WindowBlocked = QDropEvent::WindowBlocked,
WindowUnblocked = QDropEvent::WindowUnblocked,
WindowStateChange = QDropEvent::WindowStateChange,
ReadOnlyChange = QDropEvent::ReadOnlyChange,
ToolTip = QDropEvent::ToolTip,
WhatsThis = QDropEvent::WhatsThis,
StatusTip = QDropEvent::StatusTip,
ActionChanged = QDropEvent::ActionChanged,
ActionAdded = QDropEvent::ActionAdded,
ActionRemoved = QDropEvent::ActionRemoved,
FileOpen = QDropEvent::FileOpen,
Shortcut = QDropEvent::Shortcut,
ShortcutOverride = QDropEvent::ShortcutOverride,
WhatsThisClicked = QDropEvent::WhatsThisClicked,
ToolBarChange = QDropEvent::ToolBarChange,
ApplicationActivate = QDropEvent::ApplicationActivate,
ApplicationActivated = QDropEvent::ApplicationActivated,
ApplicationDeactivate = QDropEvent::ApplicationDeactivate,
ApplicationDeactivated = QDropEvent::ApplicationDeactivated,
QueryWhatsThis = QDropEvent::QueryWhatsThis,
EnterWhatsThisMode = QDropEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QDropEvent::LeaveWhatsThisMode,
ZOrderChange = QDropEvent::ZOrderChange,
HoverEnter = QDropEvent::HoverEnter,
HoverLeave = QDropEvent::HoverLeave,
HoverMove = QDropEvent::HoverMove,
AcceptDropsChange = QDropEvent::AcceptDropsChange,
ZeroTimerEvent = QDropEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QDropEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QDropEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QDropEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QDropEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QDropEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QDropEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QDropEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QDropEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QDropEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QDropEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QDropEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QDropEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QDropEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QDropEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QDropEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QDropEvent::KeyboardLayoutChange,
DynamicPropertyChange = QDropEvent::DynamicPropertyChange,
TabletEnterProximity = QDropEvent::TabletEnterProximity,
TabletLeaveProximity = QDropEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QDropEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QDropEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QDropEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QDropEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QDropEvent::MacSizeChange,
ContentsRectChange = QDropEvent::ContentsRectChange,
MacGLWindowChange = QDropEvent::MacGLWindowChange,
FutureCallOut = QDropEvent::FutureCallOut,
GraphicsSceneResize = QDropEvent::GraphicsSceneResize,
GraphicsSceneMove = QDropEvent::GraphicsSceneMove,
CursorChange = QDropEvent::CursorChange,
ToolTipChange = QDropEvent::ToolTipChange,
NetworkReplyUpdated = QDropEvent::NetworkReplyUpdated,
GrabMouse = QDropEvent::GrabMouse,
UngrabMouse = QDropEvent::UngrabMouse,
GrabKeyboard = QDropEvent::GrabKeyboard,
UngrabKeyboard = QDropEvent::UngrabKeyboard,
StateMachineSignal = QDropEvent::StateMachineSignal,
StateMachineWrapped = QDropEvent::StateMachineWrapped,
TouchBegin = QDropEvent::TouchBegin,
TouchUpdate = QDropEvent::TouchUpdate,
TouchEnd = QDropEvent::TouchEnd,
NativeGesture = QDropEvent::NativeGesture,
RequestSoftwareInputPanel = QDropEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QDropEvent::CloseSoftwareInputPanel,
WinIdChange = QDropEvent::WinIdChange,
Gesture = QDropEvent::Gesture,
GestureOverride = QDropEvent::GestureOverride,
ScrollPrepare = QDropEvent::ScrollPrepare,
Scroll = QDropEvent::Scroll,
Expose = QDropEvent::Expose,
InputMethodQuery = QDropEvent::InputMethodQuery,
OrientationChange = QDropEvent::OrientationChange,
TouchCancel = QDropEvent::TouchCancel,
ThemeChange = QDropEvent::ThemeChange,
SockClose = QDropEvent::SockClose,
PlatformPanel = QDropEvent::PlatformPanel,
StyleAnimationUpdate = QDropEvent::StyleAnimationUpdate,
ApplicationStateChange = QDropEvent::ApplicationStateChange,
WindowChangeInternal = QDropEvent::WindowChangeInternal,
ScreenChangeInternal = QDropEvent::ScreenChangeInternal,
PlatformSurface = QDropEvent::PlatformSurface,
Pointer = QDropEvent::Pointer,
TabletTrackingChange = QDropEvent::TabletTrackingChange,
User = QDropEvent::User,
MaxUser = QDropEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDropEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDropEvent_Wrapper(RJSApi& h, QDropEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDropEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDropEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDropEvent_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDropEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDropEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QDropEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QDropEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: buttons
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buttons
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: modifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: acceptProposedAction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  acceptProposedAction
              (

                
              )
              
              ;
            
    // Class: QDropEvent
    // Function: setDropAction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDropAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDropEvent
    // Function: source
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  source
              (

                
              )
              
                const
              
              ;
            
    // Class: QDropEvent
    // Function: mimeData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mimeData
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
          
              return RJSType_QDropEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QDropEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDropEvent* getWrapped() const {
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
        QDropEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QDropEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QDropEvent_Wrapper, "org.qcad.QDropEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QContextMenuEvent>
      
      // singleton class wrapper for static functions:
      class QContextMenuEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QContextMenuEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QContextMenuEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QContextMenuEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QContextMenuEvent
    class QContextMenuEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QContextMenuEvent_Wrapper(const QContextMenuEvent_Wrapper&);

    public:
      // initialization of QContextMenuEvent:
      static void init(RJSApi& handler);

      
        static QContextMenuEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QContextMenuEvent::getIdStatic()) {
                return (QContextMenuEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QContextMenuEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QContextMenuEvent*: wrapper wraps NULL";
          }

          QContextMenuEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QContextMenuEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QContextMenuEvent::None,
Timer = QContextMenuEvent::Timer,
MouseButtonPress = QContextMenuEvent::MouseButtonPress,
MouseButtonRelease = QContextMenuEvent::MouseButtonRelease,
MouseButtonDblClick = QContextMenuEvent::MouseButtonDblClick,
MouseMove = QContextMenuEvent::MouseMove,
KeyPress = QContextMenuEvent::KeyPress,
KeyRelease = QContextMenuEvent::KeyRelease,
FocusIn = QContextMenuEvent::FocusIn,
FocusOut = QContextMenuEvent::FocusOut,
FocusAboutToChange = QContextMenuEvent::FocusAboutToChange,
Enter = QContextMenuEvent::Enter,
Leave = QContextMenuEvent::Leave,
Paint = QContextMenuEvent::Paint,
Move = QContextMenuEvent::Move,
Resize = QContextMenuEvent::Resize,
Create = QContextMenuEvent::Create,
Destroy = QContextMenuEvent::Destroy,
Show = QContextMenuEvent::Show,
Hide = QContextMenuEvent::Hide,
Close = QContextMenuEvent::Close,
Quit = QContextMenuEvent::Quit,
ParentChange = QContextMenuEvent::ParentChange,
ParentAboutToChange = QContextMenuEvent::ParentAboutToChange,
ThreadChange = QContextMenuEvent::ThreadChange,
WindowActivate = QContextMenuEvent::WindowActivate,
WindowDeactivate = QContextMenuEvent::WindowDeactivate,
ShowToParent = QContextMenuEvent::ShowToParent,
HideToParent = QContextMenuEvent::HideToParent,
Wheel = QContextMenuEvent::Wheel,
WindowTitleChange = QContextMenuEvent::WindowTitleChange,
WindowIconChange = QContextMenuEvent::WindowIconChange,
ApplicationWindowIconChange = QContextMenuEvent::ApplicationWindowIconChange,
ApplicationFontChange = QContextMenuEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QContextMenuEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QContextMenuEvent::ApplicationPaletteChange,
PaletteChange = QContextMenuEvent::PaletteChange,
Clipboard = QContextMenuEvent::Clipboard,
Speech = QContextMenuEvent::Speech,
MetaCall = QContextMenuEvent::MetaCall,
SockAct = QContextMenuEvent::SockAct,
WinEventAct = QContextMenuEvent::WinEventAct,
DeferredDelete = QContextMenuEvent::DeferredDelete,
DragEnter = QContextMenuEvent::DragEnter,
DragMove = QContextMenuEvent::DragMove,
DragLeave = QContextMenuEvent::DragLeave,
Drop = QContextMenuEvent::Drop,
DragResponse = QContextMenuEvent::DragResponse,
ChildAdded = QContextMenuEvent::ChildAdded,
ChildPolished = QContextMenuEvent::ChildPolished,
ChildRemoved = QContextMenuEvent::ChildRemoved,
ShowWindowRequest = QContextMenuEvent::ShowWindowRequest,
PolishRequest = QContextMenuEvent::PolishRequest,
Polish = QContextMenuEvent::Polish,
LayoutRequest = QContextMenuEvent::LayoutRequest,
UpdateRequest = QContextMenuEvent::UpdateRequest,
UpdateLater = QContextMenuEvent::UpdateLater,
EmbeddingControl = QContextMenuEvent::EmbeddingControl,
ActivateControl = QContextMenuEvent::ActivateControl,
DeactivateControl = QContextMenuEvent::DeactivateControl,
ContextMenu = QContextMenuEvent::ContextMenu,
InputMethod = QContextMenuEvent::InputMethod,
TabletMove = QContextMenuEvent::TabletMove,
LocaleChange = QContextMenuEvent::LocaleChange,
LanguageChange = QContextMenuEvent::LanguageChange,
LayoutDirectionChange = QContextMenuEvent::LayoutDirectionChange,
Style = QContextMenuEvent::Style,
TabletPress = QContextMenuEvent::TabletPress,
TabletRelease = QContextMenuEvent::TabletRelease,
OkRequest = QContextMenuEvent::OkRequest,
HelpRequest = QContextMenuEvent::HelpRequest,
IconDrag = QContextMenuEvent::IconDrag,
FontChange = QContextMenuEvent::FontChange,
EnabledChange = QContextMenuEvent::EnabledChange,
ActivationChange = QContextMenuEvent::ActivationChange,
StyleChange = QContextMenuEvent::StyleChange,
IconTextChange = QContextMenuEvent::IconTextChange,
ModifiedChange = QContextMenuEvent::ModifiedChange,
MouseTrackingChange = QContextMenuEvent::MouseTrackingChange,
WindowBlocked = QContextMenuEvent::WindowBlocked,
WindowUnblocked = QContextMenuEvent::WindowUnblocked,
WindowStateChange = QContextMenuEvent::WindowStateChange,
ReadOnlyChange = QContextMenuEvent::ReadOnlyChange,
ToolTip = QContextMenuEvent::ToolTip,
WhatsThis = QContextMenuEvent::WhatsThis,
StatusTip = QContextMenuEvent::StatusTip,
ActionChanged = QContextMenuEvent::ActionChanged,
ActionAdded = QContextMenuEvent::ActionAdded,
ActionRemoved = QContextMenuEvent::ActionRemoved,
FileOpen = QContextMenuEvent::FileOpen,
Shortcut = QContextMenuEvent::Shortcut,
ShortcutOverride = QContextMenuEvent::ShortcutOverride,
WhatsThisClicked = QContextMenuEvent::WhatsThisClicked,
ToolBarChange = QContextMenuEvent::ToolBarChange,
ApplicationActivate = QContextMenuEvent::ApplicationActivate,
ApplicationActivated = QContextMenuEvent::ApplicationActivated,
ApplicationDeactivate = QContextMenuEvent::ApplicationDeactivate,
ApplicationDeactivated = QContextMenuEvent::ApplicationDeactivated,
QueryWhatsThis = QContextMenuEvent::QueryWhatsThis,
EnterWhatsThisMode = QContextMenuEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QContextMenuEvent::LeaveWhatsThisMode,
ZOrderChange = QContextMenuEvent::ZOrderChange,
HoverEnter = QContextMenuEvent::HoverEnter,
HoverLeave = QContextMenuEvent::HoverLeave,
HoverMove = QContextMenuEvent::HoverMove,
AcceptDropsChange = QContextMenuEvent::AcceptDropsChange,
ZeroTimerEvent = QContextMenuEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QContextMenuEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QContextMenuEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QContextMenuEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QContextMenuEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QContextMenuEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QContextMenuEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QContextMenuEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QContextMenuEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QContextMenuEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QContextMenuEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QContextMenuEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QContextMenuEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QContextMenuEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QContextMenuEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QContextMenuEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QContextMenuEvent::KeyboardLayoutChange,
DynamicPropertyChange = QContextMenuEvent::DynamicPropertyChange,
TabletEnterProximity = QContextMenuEvent::TabletEnterProximity,
TabletLeaveProximity = QContextMenuEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QContextMenuEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QContextMenuEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QContextMenuEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QContextMenuEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QContextMenuEvent::MacSizeChange,
ContentsRectChange = QContextMenuEvent::ContentsRectChange,
MacGLWindowChange = QContextMenuEvent::MacGLWindowChange,
FutureCallOut = QContextMenuEvent::FutureCallOut,
GraphicsSceneResize = QContextMenuEvent::GraphicsSceneResize,
GraphicsSceneMove = QContextMenuEvent::GraphicsSceneMove,
CursorChange = QContextMenuEvent::CursorChange,
ToolTipChange = QContextMenuEvent::ToolTipChange,
NetworkReplyUpdated = QContextMenuEvent::NetworkReplyUpdated,
GrabMouse = QContextMenuEvent::GrabMouse,
UngrabMouse = QContextMenuEvent::UngrabMouse,
GrabKeyboard = QContextMenuEvent::GrabKeyboard,
UngrabKeyboard = QContextMenuEvent::UngrabKeyboard,
StateMachineSignal = QContextMenuEvent::StateMachineSignal,
StateMachineWrapped = QContextMenuEvent::StateMachineWrapped,
TouchBegin = QContextMenuEvent::TouchBegin,
TouchUpdate = QContextMenuEvent::TouchUpdate,
TouchEnd = QContextMenuEvent::TouchEnd,
NativeGesture = QContextMenuEvent::NativeGesture,
RequestSoftwareInputPanel = QContextMenuEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QContextMenuEvent::CloseSoftwareInputPanel,
WinIdChange = QContextMenuEvent::WinIdChange,
Gesture = QContextMenuEvent::Gesture,
GestureOverride = QContextMenuEvent::GestureOverride,
ScrollPrepare = QContextMenuEvent::ScrollPrepare,
Scroll = QContextMenuEvent::Scroll,
Expose = QContextMenuEvent::Expose,
InputMethodQuery = QContextMenuEvent::InputMethodQuery,
OrientationChange = QContextMenuEvent::OrientationChange,
TouchCancel = QContextMenuEvent::TouchCancel,
ThemeChange = QContextMenuEvent::ThemeChange,
SockClose = QContextMenuEvent::SockClose,
PlatformPanel = QContextMenuEvent::PlatformPanel,
StyleAnimationUpdate = QContextMenuEvent::StyleAnimationUpdate,
ApplicationStateChange = QContextMenuEvent::ApplicationStateChange,
WindowChangeInternal = QContextMenuEvent::WindowChangeInternal,
ScreenChangeInternal = QContextMenuEvent::ScreenChangeInternal,
PlatformSurface = QContextMenuEvent::PlatformSurface,
Pointer = QContextMenuEvent::Pointer,
TabletTrackingChange = QContextMenuEvent::TabletTrackingChange,
User = QContextMenuEvent::User,
MaxUser = QContextMenuEvent::MaxUser,

  };
  Q_ENUM(Type)

  enum Reason {
    Mouse = QContextMenuEvent::Mouse,
Keyboard = QContextMenuEvent::Keyboard,
Other = QContextMenuEvent::Other,

  };
  Q_ENUM(Reason)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QContextMenuEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QContextMenuEvent_Wrapper(RJSApi& h, QContextMenuEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QContextMenuEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QContextMenuEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QContextMenuEvent_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QContextMenuEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QContextMenuEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QContextMenuEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QContextMenuEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: modifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: setModifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModifiers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QContextMenuEvent
    // Function: timestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: setTimestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTimestamp
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QContextMenuEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: x
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  x
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: y
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  y
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: globalX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalX
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: globalY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalY
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: pos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: globalPos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalPos
              (

                
              )
              
                const
              
              ;
            
    // Class: QContextMenuEvent
    // Function: reason
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reason
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
          
              return RJSType_QContextMenuEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QContextMenuEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QContextMenuEvent* getWrapped() const {
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
        QContextMenuEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QContextMenuEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QContextMenuEvent_Wrapper, "org.qcad.QContextMenuEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QDragMoveEvent>
      
      // singleton class wrapper for static functions:
      class QDragMoveEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QDragMoveEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QDragMoveEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QDragMoveEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDragMoveEvent
    class QDragMoveEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDragMoveEvent_Wrapper(const QDragMoveEvent_Wrapper&);

    public:
      // initialization of QDragMoveEvent:
      static void init(RJSApi& handler);

      
        static QDragMoveEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_QDragEnterEvent::getIdStatic()) {
              return (QDragMoveEvent*)(QDragEnterEvent*)vp;
            }
            

          // pointer to desired type:
          
              if (t==RJSType_QDragMoveEvent::getIdStatic()) {
                return (QDragMoveEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QDragMoveEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDragMoveEvent*: wrapper wraps NULL";
          }

          QDragMoveEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDragMoveEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QDragMoveEvent::None,
Timer = QDragMoveEvent::Timer,
MouseButtonPress = QDragMoveEvent::MouseButtonPress,
MouseButtonRelease = QDragMoveEvent::MouseButtonRelease,
MouseButtonDblClick = QDragMoveEvent::MouseButtonDblClick,
MouseMove = QDragMoveEvent::MouseMove,
KeyPress = QDragMoveEvent::KeyPress,
KeyRelease = QDragMoveEvent::KeyRelease,
FocusIn = QDragMoveEvent::FocusIn,
FocusOut = QDragMoveEvent::FocusOut,
FocusAboutToChange = QDragMoveEvent::FocusAboutToChange,
Enter = QDragMoveEvent::Enter,
Leave = QDragMoveEvent::Leave,
Paint = QDragMoveEvent::Paint,
Move = QDragMoveEvent::Move,
Resize = QDragMoveEvent::Resize,
Create = QDragMoveEvent::Create,
Destroy = QDragMoveEvent::Destroy,
Show = QDragMoveEvent::Show,
Hide = QDragMoveEvent::Hide,
Close = QDragMoveEvent::Close,
Quit = QDragMoveEvent::Quit,
ParentChange = QDragMoveEvent::ParentChange,
ParentAboutToChange = QDragMoveEvent::ParentAboutToChange,
ThreadChange = QDragMoveEvent::ThreadChange,
WindowActivate = QDragMoveEvent::WindowActivate,
WindowDeactivate = QDragMoveEvent::WindowDeactivate,
ShowToParent = QDragMoveEvent::ShowToParent,
HideToParent = QDragMoveEvent::HideToParent,
Wheel = QDragMoveEvent::Wheel,
WindowTitleChange = QDragMoveEvent::WindowTitleChange,
WindowIconChange = QDragMoveEvent::WindowIconChange,
ApplicationWindowIconChange = QDragMoveEvent::ApplicationWindowIconChange,
ApplicationFontChange = QDragMoveEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QDragMoveEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QDragMoveEvent::ApplicationPaletteChange,
PaletteChange = QDragMoveEvent::PaletteChange,
Clipboard = QDragMoveEvent::Clipboard,
Speech = QDragMoveEvent::Speech,
MetaCall = QDragMoveEvent::MetaCall,
SockAct = QDragMoveEvent::SockAct,
WinEventAct = QDragMoveEvent::WinEventAct,
DeferredDelete = QDragMoveEvent::DeferredDelete,
DragEnter = QDragMoveEvent::DragEnter,
DragMove = QDragMoveEvent::DragMove,
DragLeave = QDragMoveEvent::DragLeave,
Drop = QDragMoveEvent::Drop,
DragResponse = QDragMoveEvent::DragResponse,
ChildAdded = QDragMoveEvent::ChildAdded,
ChildPolished = QDragMoveEvent::ChildPolished,
ChildRemoved = QDragMoveEvent::ChildRemoved,
ShowWindowRequest = QDragMoveEvent::ShowWindowRequest,
PolishRequest = QDragMoveEvent::PolishRequest,
Polish = QDragMoveEvent::Polish,
LayoutRequest = QDragMoveEvent::LayoutRequest,
UpdateRequest = QDragMoveEvent::UpdateRequest,
UpdateLater = QDragMoveEvent::UpdateLater,
EmbeddingControl = QDragMoveEvent::EmbeddingControl,
ActivateControl = QDragMoveEvent::ActivateControl,
DeactivateControl = QDragMoveEvent::DeactivateControl,
ContextMenu = QDragMoveEvent::ContextMenu,
InputMethod = QDragMoveEvent::InputMethod,
TabletMove = QDragMoveEvent::TabletMove,
LocaleChange = QDragMoveEvent::LocaleChange,
LanguageChange = QDragMoveEvent::LanguageChange,
LayoutDirectionChange = QDragMoveEvent::LayoutDirectionChange,
Style = QDragMoveEvent::Style,
TabletPress = QDragMoveEvent::TabletPress,
TabletRelease = QDragMoveEvent::TabletRelease,
OkRequest = QDragMoveEvent::OkRequest,
HelpRequest = QDragMoveEvent::HelpRequest,
IconDrag = QDragMoveEvent::IconDrag,
FontChange = QDragMoveEvent::FontChange,
EnabledChange = QDragMoveEvent::EnabledChange,
ActivationChange = QDragMoveEvent::ActivationChange,
StyleChange = QDragMoveEvent::StyleChange,
IconTextChange = QDragMoveEvent::IconTextChange,
ModifiedChange = QDragMoveEvent::ModifiedChange,
MouseTrackingChange = QDragMoveEvent::MouseTrackingChange,
WindowBlocked = QDragMoveEvent::WindowBlocked,
WindowUnblocked = QDragMoveEvent::WindowUnblocked,
WindowStateChange = QDragMoveEvent::WindowStateChange,
ReadOnlyChange = QDragMoveEvent::ReadOnlyChange,
ToolTip = QDragMoveEvent::ToolTip,
WhatsThis = QDragMoveEvent::WhatsThis,
StatusTip = QDragMoveEvent::StatusTip,
ActionChanged = QDragMoveEvent::ActionChanged,
ActionAdded = QDragMoveEvent::ActionAdded,
ActionRemoved = QDragMoveEvent::ActionRemoved,
FileOpen = QDragMoveEvent::FileOpen,
Shortcut = QDragMoveEvent::Shortcut,
ShortcutOverride = QDragMoveEvent::ShortcutOverride,
WhatsThisClicked = QDragMoveEvent::WhatsThisClicked,
ToolBarChange = QDragMoveEvent::ToolBarChange,
ApplicationActivate = QDragMoveEvent::ApplicationActivate,
ApplicationActivated = QDragMoveEvent::ApplicationActivated,
ApplicationDeactivate = QDragMoveEvent::ApplicationDeactivate,
ApplicationDeactivated = QDragMoveEvent::ApplicationDeactivated,
QueryWhatsThis = QDragMoveEvent::QueryWhatsThis,
EnterWhatsThisMode = QDragMoveEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QDragMoveEvent::LeaveWhatsThisMode,
ZOrderChange = QDragMoveEvent::ZOrderChange,
HoverEnter = QDragMoveEvent::HoverEnter,
HoverLeave = QDragMoveEvent::HoverLeave,
HoverMove = QDragMoveEvent::HoverMove,
AcceptDropsChange = QDragMoveEvent::AcceptDropsChange,
ZeroTimerEvent = QDragMoveEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QDragMoveEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QDragMoveEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QDragMoveEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QDragMoveEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QDragMoveEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QDragMoveEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QDragMoveEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QDragMoveEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QDragMoveEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QDragMoveEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QDragMoveEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QDragMoveEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QDragMoveEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QDragMoveEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QDragMoveEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QDragMoveEvent::KeyboardLayoutChange,
DynamicPropertyChange = QDragMoveEvent::DynamicPropertyChange,
TabletEnterProximity = QDragMoveEvent::TabletEnterProximity,
TabletLeaveProximity = QDragMoveEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QDragMoveEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QDragMoveEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QDragMoveEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QDragMoveEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QDragMoveEvent::MacSizeChange,
ContentsRectChange = QDragMoveEvent::ContentsRectChange,
MacGLWindowChange = QDragMoveEvent::MacGLWindowChange,
FutureCallOut = QDragMoveEvent::FutureCallOut,
GraphicsSceneResize = QDragMoveEvent::GraphicsSceneResize,
GraphicsSceneMove = QDragMoveEvent::GraphicsSceneMove,
CursorChange = QDragMoveEvent::CursorChange,
ToolTipChange = QDragMoveEvent::ToolTipChange,
NetworkReplyUpdated = QDragMoveEvent::NetworkReplyUpdated,
GrabMouse = QDragMoveEvent::GrabMouse,
UngrabMouse = QDragMoveEvent::UngrabMouse,
GrabKeyboard = QDragMoveEvent::GrabKeyboard,
UngrabKeyboard = QDragMoveEvent::UngrabKeyboard,
StateMachineSignal = QDragMoveEvent::StateMachineSignal,
StateMachineWrapped = QDragMoveEvent::StateMachineWrapped,
TouchBegin = QDragMoveEvent::TouchBegin,
TouchUpdate = QDragMoveEvent::TouchUpdate,
TouchEnd = QDragMoveEvent::TouchEnd,
NativeGesture = QDragMoveEvent::NativeGesture,
RequestSoftwareInputPanel = QDragMoveEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QDragMoveEvent::CloseSoftwareInputPanel,
WinIdChange = QDragMoveEvent::WinIdChange,
Gesture = QDragMoveEvent::Gesture,
GestureOverride = QDragMoveEvent::GestureOverride,
ScrollPrepare = QDragMoveEvent::ScrollPrepare,
Scroll = QDragMoveEvent::Scroll,
Expose = QDragMoveEvent::Expose,
InputMethodQuery = QDragMoveEvent::InputMethodQuery,
OrientationChange = QDragMoveEvent::OrientationChange,
TouchCancel = QDragMoveEvent::TouchCancel,
ThemeChange = QDragMoveEvent::ThemeChange,
SockClose = QDragMoveEvent::SockClose,
PlatformPanel = QDragMoveEvent::PlatformPanel,
StyleAnimationUpdate = QDragMoveEvent::StyleAnimationUpdate,
ApplicationStateChange = QDragMoveEvent::ApplicationStateChange,
WindowChangeInternal = QDragMoveEvent::WindowChangeInternal,
ScreenChangeInternal = QDragMoveEvent::ScreenChangeInternal,
PlatformSurface = QDragMoveEvent::PlatformSurface,
Pointer = QDragMoveEvent::Pointer,
TabletTrackingChange = QDragMoveEvent::TabletTrackingChange,
User = QDragMoveEvent::User,
MaxUser = QDragMoveEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDragMoveEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDragMoveEvent_Wrapper(RJSApi& h, QDragMoveEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDragMoveEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDragMoveEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDragMoveEvent_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDragMoveEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDragMoveEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: position
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: buttons
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buttons
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: modifiers
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: acceptProposedAction
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  acceptProposedAction
              (

                
              )
              
              ;
            
    // Class: QDragMoveEvent
    // Function: setDropAction
    // Source: QDropEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDropAction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDragMoveEvent
    // Function: source
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  source
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: mimeData
    // Source: QDropEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mimeData
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: answerRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  answerRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragMoveEvent
    // Function: accept
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDragMoveEvent
    // Function: ignore
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
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
          
              return RJSType_QDragMoveEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QDragMoveEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDragMoveEvent* getWrapped() const {
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
        QDragMoveEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QDragMoveEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QDragMoveEvent_Wrapper, "org.qcad.QDragMoveEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QDragLeaveEvent>
      
      // singleton class wrapper for static functions:
      class QDragLeaveEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QDragLeaveEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QDragLeaveEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QDragLeaveEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QDragLeaveEvent
    class QDragLeaveEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QDragLeaveEvent_Wrapper(const QDragLeaveEvent_Wrapper&);

    public:
      // initialization of QDragLeaveEvent:
      static void init(RJSApi& handler);

      
        static QDragLeaveEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QDragLeaveEvent::getIdStatic()) {
                return (QDragLeaveEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QDragLeaveEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QDragLeaveEvent*: wrapper wraps NULL";
          }

          QDragLeaveEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QDragLeaveEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QDragLeaveEvent::None,
Timer = QDragLeaveEvent::Timer,
MouseButtonPress = QDragLeaveEvent::MouseButtonPress,
MouseButtonRelease = QDragLeaveEvent::MouseButtonRelease,
MouseButtonDblClick = QDragLeaveEvent::MouseButtonDblClick,
MouseMove = QDragLeaveEvent::MouseMove,
KeyPress = QDragLeaveEvent::KeyPress,
KeyRelease = QDragLeaveEvent::KeyRelease,
FocusIn = QDragLeaveEvent::FocusIn,
FocusOut = QDragLeaveEvent::FocusOut,
FocusAboutToChange = QDragLeaveEvent::FocusAboutToChange,
Enter = QDragLeaveEvent::Enter,
Leave = QDragLeaveEvent::Leave,
Paint = QDragLeaveEvent::Paint,
Move = QDragLeaveEvent::Move,
Resize = QDragLeaveEvent::Resize,
Create = QDragLeaveEvent::Create,
Destroy = QDragLeaveEvent::Destroy,
Show = QDragLeaveEvent::Show,
Hide = QDragLeaveEvent::Hide,
Close = QDragLeaveEvent::Close,
Quit = QDragLeaveEvent::Quit,
ParentChange = QDragLeaveEvent::ParentChange,
ParentAboutToChange = QDragLeaveEvent::ParentAboutToChange,
ThreadChange = QDragLeaveEvent::ThreadChange,
WindowActivate = QDragLeaveEvent::WindowActivate,
WindowDeactivate = QDragLeaveEvent::WindowDeactivate,
ShowToParent = QDragLeaveEvent::ShowToParent,
HideToParent = QDragLeaveEvent::HideToParent,
Wheel = QDragLeaveEvent::Wheel,
WindowTitleChange = QDragLeaveEvent::WindowTitleChange,
WindowIconChange = QDragLeaveEvent::WindowIconChange,
ApplicationWindowIconChange = QDragLeaveEvent::ApplicationWindowIconChange,
ApplicationFontChange = QDragLeaveEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QDragLeaveEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QDragLeaveEvent::ApplicationPaletteChange,
PaletteChange = QDragLeaveEvent::PaletteChange,
Clipboard = QDragLeaveEvent::Clipboard,
Speech = QDragLeaveEvent::Speech,
MetaCall = QDragLeaveEvent::MetaCall,
SockAct = QDragLeaveEvent::SockAct,
WinEventAct = QDragLeaveEvent::WinEventAct,
DeferredDelete = QDragLeaveEvent::DeferredDelete,
DragEnter = QDragLeaveEvent::DragEnter,
DragMove = QDragLeaveEvent::DragMove,
DragLeave = QDragLeaveEvent::DragLeave,
Drop = QDragLeaveEvent::Drop,
DragResponse = QDragLeaveEvent::DragResponse,
ChildAdded = QDragLeaveEvent::ChildAdded,
ChildPolished = QDragLeaveEvent::ChildPolished,
ChildRemoved = QDragLeaveEvent::ChildRemoved,
ShowWindowRequest = QDragLeaveEvent::ShowWindowRequest,
PolishRequest = QDragLeaveEvent::PolishRequest,
Polish = QDragLeaveEvent::Polish,
LayoutRequest = QDragLeaveEvent::LayoutRequest,
UpdateRequest = QDragLeaveEvent::UpdateRequest,
UpdateLater = QDragLeaveEvent::UpdateLater,
EmbeddingControl = QDragLeaveEvent::EmbeddingControl,
ActivateControl = QDragLeaveEvent::ActivateControl,
DeactivateControl = QDragLeaveEvent::DeactivateControl,
ContextMenu = QDragLeaveEvent::ContextMenu,
InputMethod = QDragLeaveEvent::InputMethod,
TabletMove = QDragLeaveEvent::TabletMove,
LocaleChange = QDragLeaveEvent::LocaleChange,
LanguageChange = QDragLeaveEvent::LanguageChange,
LayoutDirectionChange = QDragLeaveEvent::LayoutDirectionChange,
Style = QDragLeaveEvent::Style,
TabletPress = QDragLeaveEvent::TabletPress,
TabletRelease = QDragLeaveEvent::TabletRelease,
OkRequest = QDragLeaveEvent::OkRequest,
HelpRequest = QDragLeaveEvent::HelpRequest,
IconDrag = QDragLeaveEvent::IconDrag,
FontChange = QDragLeaveEvent::FontChange,
EnabledChange = QDragLeaveEvent::EnabledChange,
ActivationChange = QDragLeaveEvent::ActivationChange,
StyleChange = QDragLeaveEvent::StyleChange,
IconTextChange = QDragLeaveEvent::IconTextChange,
ModifiedChange = QDragLeaveEvent::ModifiedChange,
MouseTrackingChange = QDragLeaveEvent::MouseTrackingChange,
WindowBlocked = QDragLeaveEvent::WindowBlocked,
WindowUnblocked = QDragLeaveEvent::WindowUnblocked,
WindowStateChange = QDragLeaveEvent::WindowStateChange,
ReadOnlyChange = QDragLeaveEvent::ReadOnlyChange,
ToolTip = QDragLeaveEvent::ToolTip,
WhatsThis = QDragLeaveEvent::WhatsThis,
StatusTip = QDragLeaveEvent::StatusTip,
ActionChanged = QDragLeaveEvent::ActionChanged,
ActionAdded = QDragLeaveEvent::ActionAdded,
ActionRemoved = QDragLeaveEvent::ActionRemoved,
FileOpen = QDragLeaveEvent::FileOpen,
Shortcut = QDragLeaveEvent::Shortcut,
ShortcutOverride = QDragLeaveEvent::ShortcutOverride,
WhatsThisClicked = QDragLeaveEvent::WhatsThisClicked,
ToolBarChange = QDragLeaveEvent::ToolBarChange,
ApplicationActivate = QDragLeaveEvent::ApplicationActivate,
ApplicationActivated = QDragLeaveEvent::ApplicationActivated,
ApplicationDeactivate = QDragLeaveEvent::ApplicationDeactivate,
ApplicationDeactivated = QDragLeaveEvent::ApplicationDeactivated,
QueryWhatsThis = QDragLeaveEvent::QueryWhatsThis,
EnterWhatsThisMode = QDragLeaveEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QDragLeaveEvent::LeaveWhatsThisMode,
ZOrderChange = QDragLeaveEvent::ZOrderChange,
HoverEnter = QDragLeaveEvent::HoverEnter,
HoverLeave = QDragLeaveEvent::HoverLeave,
HoverMove = QDragLeaveEvent::HoverMove,
AcceptDropsChange = QDragLeaveEvent::AcceptDropsChange,
ZeroTimerEvent = QDragLeaveEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QDragLeaveEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QDragLeaveEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QDragLeaveEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QDragLeaveEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QDragLeaveEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QDragLeaveEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QDragLeaveEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QDragLeaveEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QDragLeaveEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QDragLeaveEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QDragLeaveEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QDragLeaveEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QDragLeaveEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QDragLeaveEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QDragLeaveEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QDragLeaveEvent::KeyboardLayoutChange,
DynamicPropertyChange = QDragLeaveEvent::DynamicPropertyChange,
TabletEnterProximity = QDragLeaveEvent::TabletEnterProximity,
TabletLeaveProximity = QDragLeaveEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QDragLeaveEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QDragLeaveEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QDragLeaveEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QDragLeaveEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QDragLeaveEvent::MacSizeChange,
ContentsRectChange = QDragLeaveEvent::ContentsRectChange,
MacGLWindowChange = QDragLeaveEvent::MacGLWindowChange,
FutureCallOut = QDragLeaveEvent::FutureCallOut,
GraphicsSceneResize = QDragLeaveEvent::GraphicsSceneResize,
GraphicsSceneMove = QDragLeaveEvent::GraphicsSceneMove,
CursorChange = QDragLeaveEvent::CursorChange,
ToolTipChange = QDragLeaveEvent::ToolTipChange,
NetworkReplyUpdated = QDragLeaveEvent::NetworkReplyUpdated,
GrabMouse = QDragLeaveEvent::GrabMouse,
UngrabMouse = QDragLeaveEvent::UngrabMouse,
GrabKeyboard = QDragLeaveEvent::GrabKeyboard,
UngrabKeyboard = QDragLeaveEvent::UngrabKeyboard,
StateMachineSignal = QDragLeaveEvent::StateMachineSignal,
StateMachineWrapped = QDragLeaveEvent::StateMachineWrapped,
TouchBegin = QDragLeaveEvent::TouchBegin,
TouchUpdate = QDragLeaveEvent::TouchUpdate,
TouchEnd = QDragLeaveEvent::TouchEnd,
NativeGesture = QDragLeaveEvent::NativeGesture,
RequestSoftwareInputPanel = QDragLeaveEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QDragLeaveEvent::CloseSoftwareInputPanel,
WinIdChange = QDragLeaveEvent::WinIdChange,
Gesture = QDragLeaveEvent::Gesture,
GestureOverride = QDragLeaveEvent::GestureOverride,
ScrollPrepare = QDragLeaveEvent::ScrollPrepare,
Scroll = QDragLeaveEvent::Scroll,
Expose = QDragLeaveEvent::Expose,
InputMethodQuery = QDragLeaveEvent::InputMethodQuery,
OrientationChange = QDragLeaveEvent::OrientationChange,
TouchCancel = QDragLeaveEvent::TouchCancel,
ThemeChange = QDragLeaveEvent::ThemeChange,
SockClose = QDragLeaveEvent::SockClose,
PlatformPanel = QDragLeaveEvent::PlatformPanel,
StyleAnimationUpdate = QDragLeaveEvent::StyleAnimationUpdate,
ApplicationStateChange = QDragLeaveEvent::ApplicationStateChange,
WindowChangeInternal = QDragLeaveEvent::WindowChangeInternal,
ScreenChangeInternal = QDragLeaveEvent::ScreenChangeInternal,
PlatformSurface = QDragLeaveEvent::PlatformSurface,
Pointer = QDragLeaveEvent::Pointer,
TabletTrackingChange = QDragLeaveEvent::TabletTrackingChange,
User = QDragLeaveEvent::User,
MaxUser = QDragLeaveEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QDragLeaveEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QDragLeaveEvent_Wrapper(RJSApi& h, QDragLeaveEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QDragLeaveEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QDragLeaveEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QDragLeaveEvent_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QDragLeaveEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QDragLeaveEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
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
          
              return RJSType_QDragLeaveEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QDragLeaveEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QDragLeaveEvent* getWrapped() const {
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
        QDragLeaveEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QDragLeaveEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QDragLeaveEvent_Wrapper, "org.qcad.QDragLeaveEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QHelpEvent>
      
      // singleton class wrapper for static functions:
      class QHelpEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QHelpEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QHelpEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QHelpEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QHelpEvent
    class QHelpEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QHelpEvent_Wrapper(const QHelpEvent_Wrapper&);

    public:
      // initialization of QHelpEvent:
      static void init(RJSApi& handler);

      
        static QHelpEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QHelpEvent::getIdStatic()) {
                return (QHelpEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QHelpEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QHelpEvent*: wrapper wraps NULL";
          }

          QHelpEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QHelpEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QHelpEvent::None,
Timer = QHelpEvent::Timer,
MouseButtonPress = QHelpEvent::MouseButtonPress,
MouseButtonRelease = QHelpEvent::MouseButtonRelease,
MouseButtonDblClick = QHelpEvent::MouseButtonDblClick,
MouseMove = QHelpEvent::MouseMove,
KeyPress = QHelpEvent::KeyPress,
KeyRelease = QHelpEvent::KeyRelease,
FocusIn = QHelpEvent::FocusIn,
FocusOut = QHelpEvent::FocusOut,
FocusAboutToChange = QHelpEvent::FocusAboutToChange,
Enter = QHelpEvent::Enter,
Leave = QHelpEvent::Leave,
Paint = QHelpEvent::Paint,
Move = QHelpEvent::Move,
Resize = QHelpEvent::Resize,
Create = QHelpEvent::Create,
Destroy = QHelpEvent::Destroy,
Show = QHelpEvent::Show,
Hide = QHelpEvent::Hide,
Close = QHelpEvent::Close,
Quit = QHelpEvent::Quit,
ParentChange = QHelpEvent::ParentChange,
ParentAboutToChange = QHelpEvent::ParentAboutToChange,
ThreadChange = QHelpEvent::ThreadChange,
WindowActivate = QHelpEvent::WindowActivate,
WindowDeactivate = QHelpEvent::WindowDeactivate,
ShowToParent = QHelpEvent::ShowToParent,
HideToParent = QHelpEvent::HideToParent,
Wheel = QHelpEvent::Wheel,
WindowTitleChange = QHelpEvent::WindowTitleChange,
WindowIconChange = QHelpEvent::WindowIconChange,
ApplicationWindowIconChange = QHelpEvent::ApplicationWindowIconChange,
ApplicationFontChange = QHelpEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QHelpEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QHelpEvent::ApplicationPaletteChange,
PaletteChange = QHelpEvent::PaletteChange,
Clipboard = QHelpEvent::Clipboard,
Speech = QHelpEvent::Speech,
MetaCall = QHelpEvent::MetaCall,
SockAct = QHelpEvent::SockAct,
WinEventAct = QHelpEvent::WinEventAct,
DeferredDelete = QHelpEvent::DeferredDelete,
DragEnter = QHelpEvent::DragEnter,
DragMove = QHelpEvent::DragMove,
DragLeave = QHelpEvent::DragLeave,
Drop = QHelpEvent::Drop,
DragResponse = QHelpEvent::DragResponse,
ChildAdded = QHelpEvent::ChildAdded,
ChildPolished = QHelpEvent::ChildPolished,
ChildRemoved = QHelpEvent::ChildRemoved,
ShowWindowRequest = QHelpEvent::ShowWindowRequest,
PolishRequest = QHelpEvent::PolishRequest,
Polish = QHelpEvent::Polish,
LayoutRequest = QHelpEvent::LayoutRequest,
UpdateRequest = QHelpEvent::UpdateRequest,
UpdateLater = QHelpEvent::UpdateLater,
EmbeddingControl = QHelpEvent::EmbeddingControl,
ActivateControl = QHelpEvent::ActivateControl,
DeactivateControl = QHelpEvent::DeactivateControl,
ContextMenu = QHelpEvent::ContextMenu,
InputMethod = QHelpEvent::InputMethod,
TabletMove = QHelpEvent::TabletMove,
LocaleChange = QHelpEvent::LocaleChange,
LanguageChange = QHelpEvent::LanguageChange,
LayoutDirectionChange = QHelpEvent::LayoutDirectionChange,
Style = QHelpEvent::Style,
TabletPress = QHelpEvent::TabletPress,
TabletRelease = QHelpEvent::TabletRelease,
OkRequest = QHelpEvent::OkRequest,
HelpRequest = QHelpEvent::HelpRequest,
IconDrag = QHelpEvent::IconDrag,
FontChange = QHelpEvent::FontChange,
EnabledChange = QHelpEvent::EnabledChange,
ActivationChange = QHelpEvent::ActivationChange,
StyleChange = QHelpEvent::StyleChange,
IconTextChange = QHelpEvent::IconTextChange,
ModifiedChange = QHelpEvent::ModifiedChange,
MouseTrackingChange = QHelpEvent::MouseTrackingChange,
WindowBlocked = QHelpEvent::WindowBlocked,
WindowUnblocked = QHelpEvent::WindowUnblocked,
WindowStateChange = QHelpEvent::WindowStateChange,
ReadOnlyChange = QHelpEvent::ReadOnlyChange,
ToolTip = QHelpEvent::ToolTip,
WhatsThis = QHelpEvent::WhatsThis,
StatusTip = QHelpEvent::StatusTip,
ActionChanged = QHelpEvent::ActionChanged,
ActionAdded = QHelpEvent::ActionAdded,
ActionRemoved = QHelpEvent::ActionRemoved,
FileOpen = QHelpEvent::FileOpen,
Shortcut = QHelpEvent::Shortcut,
ShortcutOverride = QHelpEvent::ShortcutOverride,
WhatsThisClicked = QHelpEvent::WhatsThisClicked,
ToolBarChange = QHelpEvent::ToolBarChange,
ApplicationActivate = QHelpEvent::ApplicationActivate,
ApplicationActivated = QHelpEvent::ApplicationActivated,
ApplicationDeactivate = QHelpEvent::ApplicationDeactivate,
ApplicationDeactivated = QHelpEvent::ApplicationDeactivated,
QueryWhatsThis = QHelpEvent::QueryWhatsThis,
EnterWhatsThisMode = QHelpEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QHelpEvent::LeaveWhatsThisMode,
ZOrderChange = QHelpEvent::ZOrderChange,
HoverEnter = QHelpEvent::HoverEnter,
HoverLeave = QHelpEvent::HoverLeave,
HoverMove = QHelpEvent::HoverMove,
AcceptDropsChange = QHelpEvent::AcceptDropsChange,
ZeroTimerEvent = QHelpEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QHelpEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QHelpEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QHelpEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QHelpEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QHelpEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QHelpEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QHelpEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QHelpEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QHelpEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QHelpEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QHelpEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QHelpEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QHelpEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QHelpEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QHelpEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QHelpEvent::KeyboardLayoutChange,
DynamicPropertyChange = QHelpEvent::DynamicPropertyChange,
TabletEnterProximity = QHelpEvent::TabletEnterProximity,
TabletLeaveProximity = QHelpEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QHelpEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QHelpEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QHelpEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QHelpEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QHelpEvent::MacSizeChange,
ContentsRectChange = QHelpEvent::ContentsRectChange,
MacGLWindowChange = QHelpEvent::MacGLWindowChange,
FutureCallOut = QHelpEvent::FutureCallOut,
GraphicsSceneResize = QHelpEvent::GraphicsSceneResize,
GraphicsSceneMove = QHelpEvent::GraphicsSceneMove,
CursorChange = QHelpEvent::CursorChange,
ToolTipChange = QHelpEvent::ToolTipChange,
NetworkReplyUpdated = QHelpEvent::NetworkReplyUpdated,
GrabMouse = QHelpEvent::GrabMouse,
UngrabMouse = QHelpEvent::UngrabMouse,
GrabKeyboard = QHelpEvent::GrabKeyboard,
UngrabKeyboard = QHelpEvent::UngrabKeyboard,
StateMachineSignal = QHelpEvent::StateMachineSignal,
StateMachineWrapped = QHelpEvent::StateMachineWrapped,
TouchBegin = QHelpEvent::TouchBegin,
TouchUpdate = QHelpEvent::TouchUpdate,
TouchEnd = QHelpEvent::TouchEnd,
NativeGesture = QHelpEvent::NativeGesture,
RequestSoftwareInputPanel = QHelpEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QHelpEvent::CloseSoftwareInputPanel,
WinIdChange = QHelpEvent::WinIdChange,
Gesture = QHelpEvent::Gesture,
GestureOverride = QHelpEvent::GestureOverride,
ScrollPrepare = QHelpEvent::ScrollPrepare,
Scroll = QHelpEvent::Scroll,
Expose = QHelpEvent::Expose,
InputMethodQuery = QHelpEvent::InputMethodQuery,
OrientationChange = QHelpEvent::OrientationChange,
TouchCancel = QHelpEvent::TouchCancel,
ThemeChange = QHelpEvent::ThemeChange,
SockClose = QHelpEvent::SockClose,
PlatformPanel = QHelpEvent::PlatformPanel,
StyleAnimationUpdate = QHelpEvent::StyleAnimationUpdate,
ApplicationStateChange = QHelpEvent::ApplicationStateChange,
WindowChangeInternal = QHelpEvent::WindowChangeInternal,
ScreenChangeInternal = QHelpEvent::ScreenChangeInternal,
PlatformSurface = QHelpEvent::PlatformSurface,
Pointer = QHelpEvent::Pointer,
TabletTrackingChange = QHelpEvent::TabletTrackingChange,
User = QHelpEvent::User,
MaxUser = QHelpEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QHelpEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QHelpEvent_Wrapper(RJSApi& h, QHelpEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QHelpEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QHelpEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QHelpEvent_Wrapper
                
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
    
    // Class: QHelpEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QHelpEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QHelpEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QHelpEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: x
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  x
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: y
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  y
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: globalX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalX
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: globalY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalY
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: pos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
    // Class: QHelpEvent
    // Function: globalPos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalPos
              (

                
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
          
              return RJSType_QHelpEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QHelpEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QHelpEvent* getWrapped() const {
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
        QHelpEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QHelpEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QHelpEvent_Wrapper, "org.qcad.QHelpEvent_Wrapper")

  
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QActionEvent>
      
      // singleton class wrapper for static functions:
      class QActionEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QActionEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QActionEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QActionEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QActionEvent
    class QActionEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QActionEvent_Wrapper(const QActionEvent_Wrapper&);

    public:
      // initialization of QActionEvent:
      static void init(RJSApi& handler);

      
        static QActionEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          
              if (t==RJSType_QActionEvent::getIdStatic()) {
                return (QActionEvent*)vp;
              }
              

          return nullptr;
          
        }

        static QActionEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QActionEvent*: wrapper wraps NULL";
          }

          QActionEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QActionEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QActionEvent::None,
Timer = QActionEvent::Timer,
MouseButtonPress = QActionEvent::MouseButtonPress,
MouseButtonRelease = QActionEvent::MouseButtonRelease,
MouseButtonDblClick = QActionEvent::MouseButtonDblClick,
MouseMove = QActionEvent::MouseMove,
KeyPress = QActionEvent::KeyPress,
KeyRelease = QActionEvent::KeyRelease,
FocusIn = QActionEvent::FocusIn,
FocusOut = QActionEvent::FocusOut,
FocusAboutToChange = QActionEvent::FocusAboutToChange,
Enter = QActionEvent::Enter,
Leave = QActionEvent::Leave,
Paint = QActionEvent::Paint,
Move = QActionEvent::Move,
Resize = QActionEvent::Resize,
Create = QActionEvent::Create,
Destroy = QActionEvent::Destroy,
Show = QActionEvent::Show,
Hide = QActionEvent::Hide,
Close = QActionEvent::Close,
Quit = QActionEvent::Quit,
ParentChange = QActionEvent::ParentChange,
ParentAboutToChange = QActionEvent::ParentAboutToChange,
ThreadChange = QActionEvent::ThreadChange,
WindowActivate = QActionEvent::WindowActivate,
WindowDeactivate = QActionEvent::WindowDeactivate,
ShowToParent = QActionEvent::ShowToParent,
HideToParent = QActionEvent::HideToParent,
Wheel = QActionEvent::Wheel,
WindowTitleChange = QActionEvent::WindowTitleChange,
WindowIconChange = QActionEvent::WindowIconChange,
ApplicationWindowIconChange = QActionEvent::ApplicationWindowIconChange,
ApplicationFontChange = QActionEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QActionEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QActionEvent::ApplicationPaletteChange,
PaletteChange = QActionEvent::PaletteChange,
Clipboard = QActionEvent::Clipboard,
Speech = QActionEvent::Speech,
MetaCall = QActionEvent::MetaCall,
SockAct = QActionEvent::SockAct,
WinEventAct = QActionEvent::WinEventAct,
DeferredDelete = QActionEvent::DeferredDelete,
DragEnter = QActionEvent::DragEnter,
DragMove = QActionEvent::DragMove,
DragLeave = QActionEvent::DragLeave,
Drop = QActionEvent::Drop,
DragResponse = QActionEvent::DragResponse,
ChildAdded = QActionEvent::ChildAdded,
ChildPolished = QActionEvent::ChildPolished,
ChildRemoved = QActionEvent::ChildRemoved,
ShowWindowRequest = QActionEvent::ShowWindowRequest,
PolishRequest = QActionEvent::PolishRequest,
Polish = QActionEvent::Polish,
LayoutRequest = QActionEvent::LayoutRequest,
UpdateRequest = QActionEvent::UpdateRequest,
UpdateLater = QActionEvent::UpdateLater,
EmbeddingControl = QActionEvent::EmbeddingControl,
ActivateControl = QActionEvent::ActivateControl,
DeactivateControl = QActionEvent::DeactivateControl,
ContextMenu = QActionEvent::ContextMenu,
InputMethod = QActionEvent::InputMethod,
TabletMove = QActionEvent::TabletMove,
LocaleChange = QActionEvent::LocaleChange,
LanguageChange = QActionEvent::LanguageChange,
LayoutDirectionChange = QActionEvent::LayoutDirectionChange,
Style = QActionEvent::Style,
TabletPress = QActionEvent::TabletPress,
TabletRelease = QActionEvent::TabletRelease,
OkRequest = QActionEvent::OkRequest,
HelpRequest = QActionEvent::HelpRequest,
IconDrag = QActionEvent::IconDrag,
FontChange = QActionEvent::FontChange,
EnabledChange = QActionEvent::EnabledChange,
ActivationChange = QActionEvent::ActivationChange,
StyleChange = QActionEvent::StyleChange,
IconTextChange = QActionEvent::IconTextChange,
ModifiedChange = QActionEvent::ModifiedChange,
MouseTrackingChange = QActionEvent::MouseTrackingChange,
WindowBlocked = QActionEvent::WindowBlocked,
WindowUnblocked = QActionEvent::WindowUnblocked,
WindowStateChange = QActionEvent::WindowStateChange,
ReadOnlyChange = QActionEvent::ReadOnlyChange,
ToolTip = QActionEvent::ToolTip,
WhatsThis = QActionEvent::WhatsThis,
StatusTip = QActionEvent::StatusTip,
ActionChanged = QActionEvent::ActionChanged,
ActionAdded = QActionEvent::ActionAdded,
ActionRemoved = QActionEvent::ActionRemoved,
FileOpen = QActionEvent::FileOpen,
Shortcut = QActionEvent::Shortcut,
ShortcutOverride = QActionEvent::ShortcutOverride,
WhatsThisClicked = QActionEvent::WhatsThisClicked,
ToolBarChange = QActionEvent::ToolBarChange,
ApplicationActivate = QActionEvent::ApplicationActivate,
ApplicationActivated = QActionEvent::ApplicationActivated,
ApplicationDeactivate = QActionEvent::ApplicationDeactivate,
ApplicationDeactivated = QActionEvent::ApplicationDeactivated,
QueryWhatsThis = QActionEvent::QueryWhatsThis,
EnterWhatsThisMode = QActionEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QActionEvent::LeaveWhatsThisMode,
ZOrderChange = QActionEvent::ZOrderChange,
HoverEnter = QActionEvent::HoverEnter,
HoverLeave = QActionEvent::HoverLeave,
HoverMove = QActionEvent::HoverMove,
AcceptDropsChange = QActionEvent::AcceptDropsChange,
ZeroTimerEvent = QActionEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QActionEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QActionEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QActionEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QActionEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QActionEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QActionEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QActionEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QActionEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QActionEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QActionEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QActionEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QActionEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QActionEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QActionEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QActionEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QActionEvent::KeyboardLayoutChange,
DynamicPropertyChange = QActionEvent::DynamicPropertyChange,
TabletEnterProximity = QActionEvent::TabletEnterProximity,
TabletLeaveProximity = QActionEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QActionEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QActionEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QActionEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QActionEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QActionEvent::MacSizeChange,
ContentsRectChange = QActionEvent::ContentsRectChange,
MacGLWindowChange = QActionEvent::MacGLWindowChange,
FutureCallOut = QActionEvent::FutureCallOut,
GraphicsSceneResize = QActionEvent::GraphicsSceneResize,
GraphicsSceneMove = QActionEvent::GraphicsSceneMove,
CursorChange = QActionEvent::CursorChange,
ToolTipChange = QActionEvent::ToolTipChange,
NetworkReplyUpdated = QActionEvent::NetworkReplyUpdated,
GrabMouse = QActionEvent::GrabMouse,
UngrabMouse = QActionEvent::UngrabMouse,
GrabKeyboard = QActionEvent::GrabKeyboard,
UngrabKeyboard = QActionEvent::UngrabKeyboard,
StateMachineSignal = QActionEvent::StateMachineSignal,
StateMachineWrapped = QActionEvent::StateMachineWrapped,
TouchBegin = QActionEvent::TouchBegin,
TouchUpdate = QActionEvent::TouchUpdate,
TouchEnd = QActionEvent::TouchEnd,
NativeGesture = QActionEvent::NativeGesture,
RequestSoftwareInputPanel = QActionEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QActionEvent::CloseSoftwareInputPanel,
WinIdChange = QActionEvent::WinIdChange,
Gesture = QActionEvent::Gesture,
GestureOverride = QActionEvent::GestureOverride,
ScrollPrepare = QActionEvent::ScrollPrepare,
Scroll = QActionEvent::Scroll,
Expose = QActionEvent::Expose,
InputMethodQuery = QActionEvent::InputMethodQuery,
OrientationChange = QActionEvent::OrientationChange,
TouchCancel = QActionEvent::TouchCancel,
ThemeChange = QActionEvent::ThemeChange,
SockClose = QActionEvent::SockClose,
PlatformPanel = QActionEvent::PlatformPanel,
StyleAnimationUpdate = QActionEvent::StyleAnimationUpdate,
ApplicationStateChange = QActionEvent::ApplicationStateChange,
WindowChangeInternal = QActionEvent::WindowChangeInternal,
ScreenChangeInternal = QActionEvent::ScreenChangeInternal,
PlatformSurface = QActionEvent::PlatformSurface,
Pointer = QActionEvent::Pointer,
TabletTrackingChange = QActionEvent::TabletTrackingChange,
User = QActionEvent::User,
MaxUser = QActionEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QActionEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QActionEvent_Wrapper(RJSApi& h, QActionEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QActionEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QActionEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QActionEvent_Wrapper
                
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
    
    // Class: QActionEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QActionEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: QActionEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QActionEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QActionEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: QActionEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: QActionEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QActionEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QActionEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: QActionEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: QActionEvent
    // Function: action
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  action
              (

                
              )
              
              ;
            
    // Class: QActionEvent
    // Function: before
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  before
              (

                
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
          
              return RJSType_QActionEvent::getIdStatic();
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QActionEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QActionEvent* getWrapped() const {
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
        QActionEvent* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QActionEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QActionEvent_Wrapper, "org.qcad.QActionEvent_Wrapper")

  
  #endif
  