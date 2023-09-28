
  // Auto generated
  
    #ifndef QCOREEVENT_H_WRAPPER
    #define QCOREEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QObject>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QEvent>
      
      // singleton class wrapper for static functions:
      class QEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QEvent
    // Function: registerEventType
    // Source: 
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
          //static QEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QEvent
    class QEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QEvent_Wrapper(const QEvent_Wrapper&);

    public:
      // initialization of QEvent:
      static void init(RJSApi& handler);

      
        static QEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QInputEvent::getIdStatic()) {
                return (QEvent*)(QInputEvent*)vp;
              }
              
              if (t==RJSType_QPointerEvent::getIdStatic()) {
                return (QEvent*)(QPointerEvent*)vp;
              }
              
              if (t==RJSType_QSinglePointEvent::getIdStatic()) {
                return (QEvent*)(QSinglePointEvent*)vp;
              }
              
              if (t==RJSType_QMouseEvent::getIdStatic()) {
                return (QEvent*)(QMouseEvent*)vp;
              }
              
              if (t==RJSType_QWheelEvent::getIdStatic()) {
                return (QEvent*)(QWheelEvent*)vp;
              }
              
              if (t==RJSType_QKeyEvent::getIdStatic()) {
                return (QEvent*)(QKeyEvent*)vp;
              }
              
              if (t==RJSType_QPaintEvent::getIdStatic()) {
                return (QEvent*)(QPaintEvent*)vp;
              }
              
              if (t==RJSType_QResizeEvent::getIdStatic()) {
                return (QEvent*)(QResizeEvent*)vp;
              }
              
              if (t==RJSType_QDragEnterEvent::getIdStatic()) {
                return (QEvent*)(QDragEnterEvent*)vp;
              }
              
              if (t==RJSType_QDropEvent::getIdStatic()) {
                return (QEvent*)(QDropEvent*)vp;
              }
              
              if (t==RJSType_QContextMenuEvent::getIdStatic()) {
                return (QEvent*)(QContextMenuEvent*)vp;
              }
              
              if (t==RJSType_QDragMoveEvent::getIdStatic()) {
                return (QEvent*)(QDragMoveEvent*)vp;
              }
              
              if (t==RJSType_QDragLeaveEvent::getIdStatic()) {
                return (QEvent*)(QDragLeaveEvent*)vp;
              }
              
              if (t==RJSType_QHelpEvent::getIdStatic()) {
                return (QEvent*)(QHelpEvent*)vp;
              }
              
              if (t==RJSType_QActionEvent::getIdStatic()) {
                return (QEvent*)(QActionEvent*)vp;
              }
              

          // hook for modules to cast from other types to base QEvent:
          for (int i=0; i<basecasters_QEvent.length(); i++) {
            RJSBasecaster_QEvent* basecaster = basecasters_QEvent[i];
            QEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QEvent:
          if (t==RJSType_QEvent::getIdStatic()) {
            return (QEvent*)vp;
          }

          qWarning() << "QEvent_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QEvent*: wrapper wraps NULL";
          }

          QEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = QEvent::None,
Timer = QEvent::Timer,
MouseButtonPress = QEvent::MouseButtonPress,
MouseButtonRelease = QEvent::MouseButtonRelease,
MouseButtonDblClick = QEvent::MouseButtonDblClick,
MouseMove = QEvent::MouseMove,
KeyPress = QEvent::KeyPress,
KeyRelease = QEvent::KeyRelease,
FocusIn = QEvent::FocusIn,
FocusOut = QEvent::FocusOut,
FocusAboutToChange = QEvent::FocusAboutToChange,
Enter = QEvent::Enter,
Leave = QEvent::Leave,
Paint = QEvent::Paint,
Move = QEvent::Move,
Resize = QEvent::Resize,
Create = QEvent::Create,
Destroy = QEvent::Destroy,
Show = QEvent::Show,
Hide = QEvent::Hide,
Close = QEvent::Close,
Quit = QEvent::Quit,
ParentChange = QEvent::ParentChange,
ParentAboutToChange = QEvent::ParentAboutToChange,
ThreadChange = QEvent::ThreadChange,
WindowActivate = QEvent::WindowActivate,
WindowDeactivate = QEvent::WindowDeactivate,
ShowToParent = QEvent::ShowToParent,
HideToParent = QEvent::HideToParent,
Wheel = QEvent::Wheel,
WindowTitleChange = QEvent::WindowTitleChange,
WindowIconChange = QEvent::WindowIconChange,
ApplicationWindowIconChange = QEvent::ApplicationWindowIconChange,
ApplicationFontChange = QEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = QEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = QEvent::ApplicationPaletteChange,
PaletteChange = QEvent::PaletteChange,
Clipboard = QEvent::Clipboard,
Speech = QEvent::Speech,
MetaCall = QEvent::MetaCall,
SockAct = QEvent::SockAct,
WinEventAct = QEvent::WinEventAct,
DeferredDelete = QEvent::DeferredDelete,
DragEnter = QEvent::DragEnter,
DragMove = QEvent::DragMove,
DragLeave = QEvent::DragLeave,
Drop = QEvent::Drop,
DragResponse = QEvent::DragResponse,
ChildAdded = QEvent::ChildAdded,
ChildPolished = QEvent::ChildPolished,
ChildRemoved = QEvent::ChildRemoved,
ShowWindowRequest = QEvent::ShowWindowRequest,
PolishRequest = QEvent::PolishRequest,
Polish = QEvent::Polish,
LayoutRequest = QEvent::LayoutRequest,
UpdateRequest = QEvent::UpdateRequest,
UpdateLater = QEvent::UpdateLater,
EmbeddingControl = QEvent::EmbeddingControl,
ActivateControl = QEvent::ActivateControl,
DeactivateControl = QEvent::DeactivateControl,
ContextMenu = QEvent::ContextMenu,
InputMethod = QEvent::InputMethod,
TabletMove = QEvent::TabletMove,
LocaleChange = QEvent::LocaleChange,
LanguageChange = QEvent::LanguageChange,
LayoutDirectionChange = QEvent::LayoutDirectionChange,
Style = QEvent::Style,
TabletPress = QEvent::TabletPress,
TabletRelease = QEvent::TabletRelease,
OkRequest = QEvent::OkRequest,
HelpRequest = QEvent::HelpRequest,
IconDrag = QEvent::IconDrag,
FontChange = QEvent::FontChange,
EnabledChange = QEvent::EnabledChange,
ActivationChange = QEvent::ActivationChange,
StyleChange = QEvent::StyleChange,
IconTextChange = QEvent::IconTextChange,
ModifiedChange = QEvent::ModifiedChange,
MouseTrackingChange = QEvent::MouseTrackingChange,
WindowBlocked = QEvent::WindowBlocked,
WindowUnblocked = QEvent::WindowUnblocked,
WindowStateChange = QEvent::WindowStateChange,
ReadOnlyChange = QEvent::ReadOnlyChange,
ToolTip = QEvent::ToolTip,
WhatsThis = QEvent::WhatsThis,
StatusTip = QEvent::StatusTip,
ActionChanged = QEvent::ActionChanged,
ActionAdded = QEvent::ActionAdded,
ActionRemoved = QEvent::ActionRemoved,
FileOpen = QEvent::FileOpen,
Shortcut = QEvent::Shortcut,
ShortcutOverride = QEvent::ShortcutOverride,
WhatsThisClicked = QEvent::WhatsThisClicked,
ToolBarChange = QEvent::ToolBarChange,
ApplicationActivate = QEvent::ApplicationActivate,
ApplicationActivated = QEvent::ApplicationActivated,
ApplicationDeactivate = QEvent::ApplicationDeactivate,
ApplicationDeactivated = QEvent::ApplicationDeactivated,
QueryWhatsThis = QEvent::QueryWhatsThis,
EnterWhatsThisMode = QEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = QEvent::LeaveWhatsThisMode,
ZOrderChange = QEvent::ZOrderChange,
HoverEnter = QEvent::HoverEnter,
HoverLeave = QEvent::HoverLeave,
HoverMove = QEvent::HoverMove,
AcceptDropsChange = QEvent::AcceptDropsChange,
ZeroTimerEvent = QEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = QEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = QEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = QEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = QEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = QEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = QEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = QEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = QEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = QEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = QEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = QEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = QEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = QEvent::GraphicsSceneDrop,
GraphicsSceneWheel = QEvent::GraphicsSceneWheel,
GraphicsSceneLeave = QEvent::GraphicsSceneLeave,
KeyboardLayoutChange = QEvent::KeyboardLayoutChange,
DynamicPropertyChange = QEvent::DynamicPropertyChange,
TabletEnterProximity = QEvent::TabletEnterProximity,
TabletLeaveProximity = QEvent::TabletLeaveProximity,
NonClientAreaMouseMove = QEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = QEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = QEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = QEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = QEvent::MacSizeChange,
ContentsRectChange = QEvent::ContentsRectChange,
MacGLWindowChange = QEvent::MacGLWindowChange,
FutureCallOut = QEvent::FutureCallOut,
GraphicsSceneResize = QEvent::GraphicsSceneResize,
GraphicsSceneMove = QEvent::GraphicsSceneMove,
CursorChange = QEvent::CursorChange,
ToolTipChange = QEvent::ToolTipChange,
NetworkReplyUpdated = QEvent::NetworkReplyUpdated,
GrabMouse = QEvent::GrabMouse,
UngrabMouse = QEvent::UngrabMouse,
GrabKeyboard = QEvent::GrabKeyboard,
UngrabKeyboard = QEvent::UngrabKeyboard,
StateMachineSignal = QEvent::StateMachineSignal,
StateMachineWrapped = QEvent::StateMachineWrapped,
TouchBegin = QEvent::TouchBegin,
TouchUpdate = QEvent::TouchUpdate,
TouchEnd = QEvent::TouchEnd,
NativeGesture = QEvent::NativeGesture,
RequestSoftwareInputPanel = QEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = QEvent::CloseSoftwareInputPanel,
WinIdChange = QEvent::WinIdChange,
Gesture = QEvent::Gesture,
GestureOverride = QEvent::GestureOverride,
ScrollPrepare = QEvent::ScrollPrepare,
Scroll = QEvent::Scroll,
Expose = QEvent::Expose,
InputMethodQuery = QEvent::InputMethodQuery,
OrientationChange = QEvent::OrientationChange,
TouchCancel = QEvent::TouchCancel,
ThemeChange = QEvent::ThemeChange,
SockClose = QEvent::SockClose,
PlatformPanel = QEvent::PlatformPanel,
StyleAnimationUpdate = QEvent::StyleAnimationUpdate,
ApplicationStateChange = QEvent::ApplicationStateChange,
WindowChangeInternal = QEvent::WindowChangeInternal,
ScreenChangeInternal = QEvent::ScreenChangeInternal,
PlatformSurface = QEvent::PlatformSurface,
Pointer = QEvent::Pointer,
TabletTrackingChange = QEvent::TabletTrackingChange,
User = QEvent::User,
MaxUser = QEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QEvent_Wrapper(RJSApi& h, QEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QEvent_Wrapper
                
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
    
    // Class: QEvent
    // Function: type
    // Source: 
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
            
    // Class: QEvent
    // Function: spontaneous
    // Source: 
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
            
    // Class: QEvent
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
            
    // Class: QEvent
    // Function: isAccepted
    // Source: 
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
            
    // Class: QEvent
    // Function: accept
    // Source: 
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
            
    // Class: QEvent
    // Function: ignore
    // Source: 
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
            
    // Class: QEvent
    // Function: isInputEvent
    // Source: 
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
            
    // Class: QEvent
    // Function: isPointerEvent
    // Source: 
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
            
    // Class: QEvent
    // Function: isSinglePointEvent
    // Source: 
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
            
    // Class: QEvent
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
          return RJSType_QEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QEvent* getWrapped() const {
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
        QEvent* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QEvent*> basecasters_QEvent;

      public:
        static void registerBasecaster_QEvent(RJSBasecaster_QEvent* bc) {
          basecasters_QEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QEvent_Wrapper*)

    Q_DECLARE_INTERFACE(QEvent_Wrapper, "org.qcad.QEvent_Wrapper")

  
  #endif
  
