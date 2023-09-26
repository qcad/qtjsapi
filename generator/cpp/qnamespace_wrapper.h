
  // Auto generated
  
    #ifndef QNAMESPACE_H_WRAPPER
    #define QNAMESPACE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QKeyCombination>
      
      // singleton class wrapper for static functions:
      class QKeyCombination_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QKeyCombination_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QKeyCombination
    // Function: fromCombined
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromCombined
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QKeyCombination_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QKeyCombination
    class QKeyCombination_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QKeyCombination_Wrapper(const QKeyCombination_Wrapper&);

    public:
      // initialization of QKeyCombination:
      static void init(RJSApi& handler);

      
        static QKeyCombination* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QKeyCombination.length(); i++) {
            RJSBasecaster_QKeyCombination* basecaster = basecasters_QKeyCombination[i];
            QKeyCombination* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QKeyCombination::getIdStatic()) {
            return (QKeyCombination*)vp;
          }

          qWarning() << "QKeyCombination::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QKeyCombination* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QKeyCombination*: wrapper wraps NULL";
          }

          QKeyCombination* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QKeyCombination*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QKeyCombination_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QKeyCombination_Wrapper(RJSApi& h, QKeyCombination* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QKeyCombination_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QKeyCombination
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QKeyCombination_Wrapper
                
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
    
    // Class: QKeyCombination
    // Function: keyboardModifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyboardModifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeyCombination
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
            
    // Class: QKeyCombination
    // Function: toCombined
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCombined
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
          return RJSType_QKeyCombination::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QKeyCombination* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QKeyCombination* getWrapped() const {
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
        QKeyCombination* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QKeyCombination*> basecasters_QKeyCombination;

      public:
        static void registerBasecaster_QKeyCombination(RJSBasecaster_QKeyCombination* bc) {
          basecasters_QKeyCombination.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QKeyCombination_Wrapper*)

    Q_DECLARE_INTERFACE(QKeyCombination_Wrapper, "org.qcad.QKeyCombination_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <Qt>
      
    // wrapper class for Qt
    class Qt_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      Qt_Wrapper(const Qt_Wrapper&);

    public:
      // initialization of Qt:
      static void init(RJSApi& handler);

      
        // enums:
        
  enum GlobalColor {
    color0 = Qt::color0,
color1 = Qt::color1,
black = Qt::black,
white = Qt::white,
darkGray = Qt::darkGray,
gray = Qt::gray,
lightGray = Qt::lightGray,
red = Qt::red,
green = Qt::green,
blue = Qt::blue,
cyan = Qt::cyan,
magenta = Qt::magenta,
yellow = Qt::yellow,
darkRed = Qt::darkRed,
darkGreen = Qt::darkGreen,
darkBlue = Qt::darkBlue,
darkCyan = Qt::darkCyan,
darkMagenta = Qt::darkMagenta,
darkYellow = Qt::darkYellow,
transparent = Qt::transparent,

  };
  Q_ENUM(GlobalColor)

  enum ApplicationState {
    ApplicationSuspended = Qt::ApplicationSuspended,
ApplicationHidden = Qt::ApplicationHidden,
ApplicationInactive = Qt::ApplicationInactive,
ApplicationActive = Qt::ApplicationActive,

  };
  Q_ENUM(ApplicationState)

  enum MouseButton {
    NoButton = Qt::NoButton,
LeftButton = Qt::LeftButton,
RightButton = Qt::RightButton,
MiddleButton = Qt::MiddleButton,
BackButton = Qt::BackButton,
XButton1 = Qt::XButton1,
ExtraButton1 = Qt::ExtraButton1,
ForwardButton = Qt::ForwardButton,
XButton2 = Qt::XButton2,
ExtraButton2 = Qt::ExtraButton2,
TaskButton = Qt::TaskButton,
ExtraButton3 = Qt::ExtraButton3,
ExtraButton4 = Qt::ExtraButton4,
ExtraButton5 = Qt::ExtraButton5,
ExtraButton6 = Qt::ExtraButton6,
ExtraButton7 = Qt::ExtraButton7,
ExtraButton8 = Qt::ExtraButton8,
ExtraButton9 = Qt::ExtraButton9,
ExtraButton10 = Qt::ExtraButton10,
ExtraButton11 = Qt::ExtraButton11,
ExtraButton12 = Qt::ExtraButton12,
ExtraButton13 = Qt::ExtraButton13,
ExtraButton14 = Qt::ExtraButton14,
ExtraButton15 = Qt::ExtraButton15,
ExtraButton16 = Qt::ExtraButton16,
ExtraButton17 = Qt::ExtraButton17,
ExtraButton18 = Qt::ExtraButton18,
ExtraButton19 = Qt::ExtraButton19,
ExtraButton20 = Qt::ExtraButton20,
ExtraButton21 = Qt::ExtraButton21,
ExtraButton22 = Qt::ExtraButton22,
ExtraButton23 = Qt::ExtraButton23,
ExtraButton24 = Qt::ExtraButton24,
AllButtons = Qt::AllButtons,
MaxMouseButton = Qt::MaxMouseButton,
MouseButtonMask = Qt::MouseButtonMask,

  };
  Q_ENUM(MouseButton)

  enum TabFocusBehavior {
    NoTabFocus = Qt::NoTabFocus,
TabFocusTextControls = Qt::TabFocusTextControls,
TabFocusListControls = Qt::TabFocusListControls,
TabFocusAllControls = Qt::TabFocusAllControls,

  };
  Q_ENUM(TabFocusBehavior)

  enum SortOrder {
    AscendingOrder = Qt::AscendingOrder,
DescendingOrder = Qt::DescendingOrder,

  };
  Q_ENUM(SortOrder)

  enum SplitBehaviorFlags {
    KeepEmptyParts = Qt::KeepEmptyParts,
SkipEmptyParts = Qt::SkipEmptyParts,

  };
  Q_ENUM(SplitBehaviorFlags)

  enum AlignmentFlag {
    AlignLeft = Qt::AlignLeft,
AlignLeading = Qt::AlignLeading,
AlignRight = Qt::AlignRight,
AlignTrailing = Qt::AlignTrailing,
AlignHCenter = Qt::AlignHCenter,
AlignJustify = Qt::AlignJustify,
AlignAbsolute = Qt::AlignAbsolute,
AlignHorizontal_Mask = Qt::AlignHorizontal_Mask,
AlignTop = Qt::AlignTop,
AlignBottom = Qt::AlignBottom,
AlignVCenter = Qt::AlignVCenter,
AlignBaseline = Qt::AlignBaseline,
AlignVertical_Mask = Qt::AlignVertical_Mask,
AlignCenter = Qt::AlignCenter,

  };
  Q_ENUM(AlignmentFlag)

  enum TextElideMode {
    ElideLeft = Qt::ElideLeft,
ElideRight = Qt::ElideRight,
ElideMiddle = Qt::ElideMiddle,
ElideNone = Qt::ElideNone,

  };
  Q_ENUM(TextElideMode)

  enum WhiteSpaceMode {
    WhiteSpaceNormal = Qt::WhiteSpaceNormal,
WhiteSpacePre = Qt::WhiteSpacePre,
WhiteSpaceNoWrap = Qt::WhiteSpaceNoWrap,
WhiteSpaceModeUndefined = Qt::WhiteSpaceModeUndefined,

  };
  Q_ENUM(WhiteSpaceMode)

  enum HitTestAccuracy {
    ExactHit = Qt::ExactHit,
FuzzyHit = Qt::FuzzyHit,

  };
  Q_ENUM(HitTestAccuracy)

  enum WindowType {
    Widget = Qt::Widget,
Window = Qt::Window,
Dialog = Qt::Dialog,
Sheet = Qt::Sheet,
Drawer = Qt::Drawer,
Popup = Qt::Popup,
Tool = Qt::Tool,
ToolTip = Qt::ToolTip,
SplashScreen = Qt::SplashScreen,
Desktop = Qt::Desktop,
SubWindow = Qt::SubWindow,
ForeignWindow = Qt::ForeignWindow,
CoverWindow = Qt::CoverWindow,
WindowType_Mask = Qt::WindowType_Mask,
MSWindowsFixedSizeDialogHint = Qt::MSWindowsFixedSizeDialogHint,
MSWindowsOwnDC = Qt::MSWindowsOwnDC,
BypassWindowManagerHint = Qt::BypassWindowManagerHint,
X11BypassWindowManagerHint = Qt::X11BypassWindowManagerHint,
FramelessWindowHint = Qt::FramelessWindowHint,
WindowTitleHint = Qt::WindowTitleHint,
WindowSystemMenuHint = Qt::WindowSystemMenuHint,
WindowMinimizeButtonHint = Qt::WindowMinimizeButtonHint,
WindowMaximizeButtonHint = Qt::WindowMaximizeButtonHint,
WindowMinMaxButtonsHint = Qt::WindowMinMaxButtonsHint,
WindowContextHelpButtonHint = Qt::WindowContextHelpButtonHint,
WindowShadeButtonHint = Qt::WindowShadeButtonHint,
WindowStaysOnTopHint = Qt::WindowStaysOnTopHint,
WindowTransparentForInput = Qt::WindowTransparentForInput,
WindowOverridesSystemGestures = Qt::WindowOverridesSystemGestures,
WindowDoesNotAcceptFocus = Qt::WindowDoesNotAcceptFocus,
MaximizeUsingFullscreenGeometryHint = Qt::MaximizeUsingFullscreenGeometryHint,
CustomizeWindowHint = Qt::CustomizeWindowHint,
WindowStaysOnBottomHint = Qt::WindowStaysOnBottomHint,
WindowCloseButtonHint = Qt::WindowCloseButtonHint,
MacWindowToolBarButtonHint = Qt::MacWindowToolBarButtonHint,
BypassGraphicsProxyWidget = Qt::BypassGraphicsProxyWidget,
NoDropShadowWindowHint = Qt::NoDropShadowWindowHint,
WindowFullscreenButtonHint = Qt::WindowFullscreenButtonHint,

  };
  Q_ENUM(WindowType)

  enum ApplicationAttribute {
    AA_DontShowIconsInMenus = Qt::AA_DontShowIconsInMenus,
AA_NativeWindows = Qt::AA_NativeWindows,
AA_DontCreateNativeWidgetSiblings = Qt::AA_DontCreateNativeWidgetSiblings,
AA_PluginApplication = Qt::AA_PluginApplication,
AA_DontUseNativeMenuBar = Qt::AA_DontUseNativeMenuBar,
AA_MacDontSwapCtrlAndMeta = Qt::AA_MacDontSwapCtrlAndMeta,
AA_Use96Dpi = Qt::AA_Use96Dpi,
AA_DisableNativeVirtualKeyboard = Qt::AA_DisableNativeVirtualKeyboard,
AA_SynthesizeTouchForUnhandledMouseEvents = Qt::AA_SynthesizeTouchForUnhandledMouseEvents,
AA_SynthesizeMouseForUnhandledTouchEvents = Qt::AA_SynthesizeMouseForUnhandledTouchEvents,
AA_ForceRasterWidgets = Qt::AA_ForceRasterWidgets,
AA_UseDesktopOpenGL = Qt::AA_UseDesktopOpenGL,
AA_UseOpenGLES = Qt::AA_UseOpenGLES,
AA_UseSoftwareOpenGL = Qt::AA_UseSoftwareOpenGL,
AA_ShareOpenGLContexts = Qt::AA_ShareOpenGLContexts,
AA_SetPalette = Qt::AA_SetPalette,
AA_UseStyleSheetPropagationInWidgetStyles = Qt::AA_UseStyleSheetPropagationInWidgetStyles,
AA_DontUseNativeDialogs = Qt::AA_DontUseNativeDialogs,
AA_SynthesizeMouseForUnhandledTabletEvents = Qt::AA_SynthesizeMouseForUnhandledTabletEvents,
AA_CompressHighFrequencyEvents = Qt::AA_CompressHighFrequencyEvents,
AA_DontCheckOpenGLContextThreadAffinity = Qt::AA_DontCheckOpenGLContextThreadAffinity,
AA_DisableShaderDiskCache = Qt::AA_DisableShaderDiskCache,
AA_DontShowShortcutsInContextMenus = Qt::AA_DontShowShortcutsInContextMenus,
AA_CompressTabletEvents = Qt::AA_CompressTabletEvents,
AA_DisableSessionManager = Qt::AA_DisableSessionManager,
AA_AttributeCount = Qt::AA_AttributeCount,

  };
  Q_ENUM(ApplicationAttribute)

  enum ImageConversionFlag {
    ColorMode_Mask = Qt::ColorMode_Mask,
AutoColor = Qt::AutoColor,
ColorOnly = Qt::ColorOnly,
MonoOnly = Qt::MonoOnly,
AlphaDither_Mask = Qt::AlphaDither_Mask,
ThresholdAlphaDither = Qt::ThresholdAlphaDither,
OrderedAlphaDither = Qt::OrderedAlphaDither,
DiffuseAlphaDither = Qt::DiffuseAlphaDither,
NoAlpha = Qt::NoAlpha,
Dither_Mask = Qt::Dither_Mask,
DiffuseDither = Qt::DiffuseDither,
OrderedDither = Qt::OrderedDither,
ThresholdDither = Qt::ThresholdDither,
DitherMode_Mask = Qt::DitherMode_Mask,
AutoDither = Qt::AutoDither,
PreferDither = Qt::PreferDither,
AvoidDither = Qt::AvoidDither,
NoOpaqueDetection = Qt::NoOpaqueDetection,
NoFormatConversion = Qt::NoFormatConversion,

  };
  Q_ENUM(ImageConversionFlag)

  enum Key {
    Key_Space = Qt::Key_Space,
Key_Any = Qt::Key_Any,
Key_Exclam = Qt::Key_Exclam,
Key_QuoteDbl = Qt::Key_QuoteDbl,
Key_NumberSign = Qt::Key_NumberSign,
Key_Dollar = Qt::Key_Dollar,
Key_Percent = Qt::Key_Percent,
Key_Ampersand = Qt::Key_Ampersand,
Key_Apostrophe = Qt::Key_Apostrophe,
Key_ParenLeft = Qt::Key_ParenLeft,
Key_ParenRight = Qt::Key_ParenRight,
Key_Asterisk = Qt::Key_Asterisk,
Key_Plus = Qt::Key_Plus,
Key_Comma = Qt::Key_Comma,
Key_Minus = Qt::Key_Minus,
Key_Period = Qt::Key_Period,
Key_Slash = Qt::Key_Slash,
Key_0 = Qt::Key_0,
Key_1 = Qt::Key_1,
Key_2 = Qt::Key_2,
Key_3 = Qt::Key_3,
Key_4 = Qt::Key_4,
Key_5 = Qt::Key_5,
Key_6 = Qt::Key_6,
Key_7 = Qt::Key_7,
Key_8 = Qt::Key_8,
Key_9 = Qt::Key_9,
Key_Colon = Qt::Key_Colon,
Key_Semicolon = Qt::Key_Semicolon,
Key_Less = Qt::Key_Less,
Key_Equal = Qt::Key_Equal,
Key_Greater = Qt::Key_Greater,
Key_Question = Qt::Key_Question,
Key_At = Qt::Key_At,
Key_A = Qt::Key_A,
Key_B = Qt::Key_B,
Key_C = Qt::Key_C,
Key_D = Qt::Key_D,
Key_E = Qt::Key_E,
Key_F = Qt::Key_F,
Key_G = Qt::Key_G,
Key_H = Qt::Key_H,
Key_I = Qt::Key_I,
Key_J = Qt::Key_J,
Key_K = Qt::Key_K,
Key_L = Qt::Key_L,
Key_M = Qt::Key_M,
Key_N = Qt::Key_N,
Key_O = Qt::Key_O,
Key_P = Qt::Key_P,
Key_Q = Qt::Key_Q,
Key_R = Qt::Key_R,
Key_S = Qt::Key_S,
Key_T = Qt::Key_T,
Key_U = Qt::Key_U,
Key_V = Qt::Key_V,
Key_W = Qt::Key_W,
Key_X = Qt::Key_X,
Key_Y = Qt::Key_Y,
Key_Z = Qt::Key_Z,
Key_BracketLeft = Qt::Key_BracketLeft,
Key_Backslash = Qt::Key_Backslash,
Key_BracketRight = Qt::Key_BracketRight,
Key_AsciiCircum = Qt::Key_AsciiCircum,
Key_Underscore = Qt::Key_Underscore,
Key_QuoteLeft = Qt::Key_QuoteLeft,
Key_BraceLeft = Qt::Key_BraceLeft,
Key_Bar = Qt::Key_Bar,
Key_BraceRight = Qt::Key_BraceRight,
Key_AsciiTilde = Qt::Key_AsciiTilde,
Key_nobreakspace = Qt::Key_nobreakspace,
Key_exclamdown = Qt::Key_exclamdown,
Key_cent = Qt::Key_cent,
Key_sterling = Qt::Key_sterling,
Key_currency = Qt::Key_currency,
Key_yen = Qt::Key_yen,
Key_brokenbar = Qt::Key_brokenbar,
Key_section = Qt::Key_section,
Key_diaeresis = Qt::Key_diaeresis,
Key_copyright = Qt::Key_copyright,
Key_ordfeminine = Qt::Key_ordfeminine,
Key_guillemotleft = Qt::Key_guillemotleft,
Key_notsign = Qt::Key_notsign,
Key_hyphen = Qt::Key_hyphen,
Key_registered = Qt::Key_registered,
Key_macron = Qt::Key_macron,
Key_degree = Qt::Key_degree,
Key_plusminus = Qt::Key_plusminus,
Key_twosuperior = Qt::Key_twosuperior,
Key_threesuperior = Qt::Key_threesuperior,
Key_acute = Qt::Key_acute,
Key_mu = Qt::Key_mu,
Key_paragraph = Qt::Key_paragraph,
Key_periodcentered = Qt::Key_periodcentered,
Key_cedilla = Qt::Key_cedilla,
Key_onesuperior = Qt::Key_onesuperior,
Key_masculine = Qt::Key_masculine,
Key_guillemotright = Qt::Key_guillemotright,
Key_onequarter = Qt::Key_onequarter,
Key_onehalf = Qt::Key_onehalf,
Key_threequarters = Qt::Key_threequarters,
Key_questiondown = Qt::Key_questiondown,
Key_Agrave = Qt::Key_Agrave,
Key_Aacute = Qt::Key_Aacute,
Key_Acircumflex = Qt::Key_Acircumflex,
Key_Atilde = Qt::Key_Atilde,
Key_Adiaeresis = Qt::Key_Adiaeresis,
Key_Aring = Qt::Key_Aring,
Key_AE = Qt::Key_AE,
Key_Ccedilla = Qt::Key_Ccedilla,
Key_Egrave = Qt::Key_Egrave,
Key_Eacute = Qt::Key_Eacute,
Key_Ecircumflex = Qt::Key_Ecircumflex,
Key_Ediaeresis = Qt::Key_Ediaeresis,
Key_Igrave = Qt::Key_Igrave,
Key_Iacute = Qt::Key_Iacute,
Key_Icircumflex = Qt::Key_Icircumflex,
Key_Idiaeresis = Qt::Key_Idiaeresis,
Key_ETH = Qt::Key_ETH,
Key_Ntilde = Qt::Key_Ntilde,
Key_Ograve = Qt::Key_Ograve,
Key_Oacute = Qt::Key_Oacute,
Key_Ocircumflex = Qt::Key_Ocircumflex,
Key_Otilde = Qt::Key_Otilde,
Key_Odiaeresis = Qt::Key_Odiaeresis,
Key_multiply = Qt::Key_multiply,
Key_Ooblique = Qt::Key_Ooblique,
Key_Ugrave = Qt::Key_Ugrave,
Key_Uacute = Qt::Key_Uacute,
Key_Ucircumflex = Qt::Key_Ucircumflex,
Key_Udiaeresis = Qt::Key_Udiaeresis,
Key_Yacute = Qt::Key_Yacute,
Key_THORN = Qt::Key_THORN,
Key_ssharp = Qt::Key_ssharp,
Key_division = Qt::Key_division,
Key_ydiaeresis = Qt::Key_ydiaeresis,
Key_Escape = Qt::Key_Escape,
Key_Tab = Qt::Key_Tab,
Key_Backtab = Qt::Key_Backtab,
Key_Backspace = Qt::Key_Backspace,
Key_Return = Qt::Key_Return,
Key_Enter = Qt::Key_Enter,
Key_Insert = Qt::Key_Insert,
Key_Delete = Qt::Key_Delete,
Key_Pause = Qt::Key_Pause,
Key_Print = Qt::Key_Print,
Key_SysReq = Qt::Key_SysReq,
Key_Clear = Qt::Key_Clear,
Key_Home = Qt::Key_Home,
Key_End = Qt::Key_End,
Key_Left = Qt::Key_Left,
Key_Up = Qt::Key_Up,
Key_Right = Qt::Key_Right,
Key_Down = Qt::Key_Down,
Key_PageUp = Qt::Key_PageUp,
Key_PageDown = Qt::Key_PageDown,
Key_Shift = Qt::Key_Shift,
Key_Control = Qt::Key_Control,
Key_Meta = Qt::Key_Meta,
Key_Alt = Qt::Key_Alt,
Key_CapsLock = Qt::Key_CapsLock,
Key_NumLock = Qt::Key_NumLock,
Key_ScrollLock = Qt::Key_ScrollLock,
Key_F1 = Qt::Key_F1,
Key_F2 = Qt::Key_F2,
Key_F3 = Qt::Key_F3,
Key_F4 = Qt::Key_F4,
Key_F5 = Qt::Key_F5,
Key_F6 = Qt::Key_F6,
Key_F7 = Qt::Key_F7,
Key_F8 = Qt::Key_F8,
Key_F9 = Qt::Key_F9,
Key_F10 = Qt::Key_F10,
Key_F11 = Qt::Key_F11,
Key_F12 = Qt::Key_F12,
Key_F13 = Qt::Key_F13,
Key_F14 = Qt::Key_F14,
Key_F15 = Qt::Key_F15,
Key_F16 = Qt::Key_F16,
Key_F17 = Qt::Key_F17,
Key_F18 = Qt::Key_F18,
Key_F19 = Qt::Key_F19,
Key_F20 = Qt::Key_F20,
Key_F21 = Qt::Key_F21,
Key_F22 = Qt::Key_F22,
Key_F23 = Qt::Key_F23,
Key_F24 = Qt::Key_F24,
Key_F25 = Qt::Key_F25,
Key_F26 = Qt::Key_F26,
Key_F27 = Qt::Key_F27,
Key_F28 = Qt::Key_F28,
Key_F29 = Qt::Key_F29,
Key_F30 = Qt::Key_F30,
Key_F31 = Qt::Key_F31,
Key_F32 = Qt::Key_F32,
Key_F33 = Qt::Key_F33,
Key_F34 = Qt::Key_F34,
Key_F35 = Qt::Key_F35,
Key_Super_L = Qt::Key_Super_L,
Key_Super_R = Qt::Key_Super_R,
Key_Menu = Qt::Key_Menu,
Key_Hyper_L = Qt::Key_Hyper_L,
Key_Hyper_R = Qt::Key_Hyper_R,
Key_Help = Qt::Key_Help,
Key_Direction_L = Qt::Key_Direction_L,
Key_Direction_R = Qt::Key_Direction_R,
Key_AltGr = Qt::Key_AltGr,
Key_Multi_key = Qt::Key_Multi_key,
Key_Codeinput = Qt::Key_Codeinput,
Key_SingleCandidate = Qt::Key_SingleCandidate,
Key_MultipleCandidate = Qt::Key_MultipleCandidate,
Key_PreviousCandidate = Qt::Key_PreviousCandidate,
Key_Mode_switch = Qt::Key_Mode_switch,
Key_Kanji = Qt::Key_Kanji,
Key_Muhenkan = Qt::Key_Muhenkan,
Key_Henkan = Qt::Key_Henkan,
Key_Romaji = Qt::Key_Romaji,
Key_Hiragana = Qt::Key_Hiragana,
Key_Katakana = Qt::Key_Katakana,
Key_Hiragana_Katakana = Qt::Key_Hiragana_Katakana,
Key_Zenkaku = Qt::Key_Zenkaku,
Key_Hankaku = Qt::Key_Hankaku,
Key_Zenkaku_Hankaku = Qt::Key_Zenkaku_Hankaku,
Key_Touroku = Qt::Key_Touroku,
Key_Massyo = Qt::Key_Massyo,
Key_Kana_Lock = Qt::Key_Kana_Lock,
Key_Kana_Shift = Qt::Key_Kana_Shift,
Key_Eisu_Shift = Qt::Key_Eisu_Shift,
Key_Eisu_toggle = Qt::Key_Eisu_toggle,
Key_Hangul = Qt::Key_Hangul,
Key_Hangul_Start = Qt::Key_Hangul_Start,
Key_Hangul_End = Qt::Key_Hangul_End,
Key_Hangul_Hanja = Qt::Key_Hangul_Hanja,
Key_Hangul_Jamo = Qt::Key_Hangul_Jamo,
Key_Hangul_Romaja = Qt::Key_Hangul_Romaja,
Key_Hangul_Jeonja = Qt::Key_Hangul_Jeonja,
Key_Hangul_Banja = Qt::Key_Hangul_Banja,
Key_Hangul_PreHanja = Qt::Key_Hangul_PreHanja,
Key_Hangul_PostHanja = Qt::Key_Hangul_PostHanja,
Key_Hangul_Special = Qt::Key_Hangul_Special,
Key_Dead_Grave = Qt::Key_Dead_Grave,
Key_Dead_Acute = Qt::Key_Dead_Acute,
Key_Dead_Circumflex = Qt::Key_Dead_Circumflex,
Key_Dead_Tilde = Qt::Key_Dead_Tilde,
Key_Dead_Macron = Qt::Key_Dead_Macron,
Key_Dead_Breve = Qt::Key_Dead_Breve,
Key_Dead_Abovedot = Qt::Key_Dead_Abovedot,
Key_Dead_Diaeresis = Qt::Key_Dead_Diaeresis,
Key_Dead_Abovering = Qt::Key_Dead_Abovering,
Key_Dead_Doubleacute = Qt::Key_Dead_Doubleacute,
Key_Dead_Caron = Qt::Key_Dead_Caron,
Key_Dead_Cedilla = Qt::Key_Dead_Cedilla,
Key_Dead_Ogonek = Qt::Key_Dead_Ogonek,
Key_Dead_Iota = Qt::Key_Dead_Iota,
Key_Dead_Voiced_Sound = Qt::Key_Dead_Voiced_Sound,
Key_Dead_Semivoiced_Sound = Qt::Key_Dead_Semivoiced_Sound,
Key_Dead_Belowdot = Qt::Key_Dead_Belowdot,
Key_Dead_Hook = Qt::Key_Dead_Hook,
Key_Dead_Horn = Qt::Key_Dead_Horn,
Key_Dead_Stroke = Qt::Key_Dead_Stroke,
Key_Dead_Abovecomma = Qt::Key_Dead_Abovecomma,
Key_Dead_Abovereversedcomma = Qt::Key_Dead_Abovereversedcomma,
Key_Dead_Doublegrave = Qt::Key_Dead_Doublegrave,
Key_Dead_Belowring = Qt::Key_Dead_Belowring,
Key_Dead_Belowmacron = Qt::Key_Dead_Belowmacron,
Key_Dead_Belowcircumflex = Qt::Key_Dead_Belowcircumflex,
Key_Dead_Belowtilde = Qt::Key_Dead_Belowtilde,
Key_Dead_Belowbreve = Qt::Key_Dead_Belowbreve,
Key_Dead_Belowdiaeresis = Qt::Key_Dead_Belowdiaeresis,
Key_Dead_Invertedbreve = Qt::Key_Dead_Invertedbreve,
Key_Dead_Belowcomma = Qt::Key_Dead_Belowcomma,
Key_Dead_Currency = Qt::Key_Dead_Currency,
Key_Dead_a = Qt::Key_Dead_a,
Key_Dead_A = Qt::Key_Dead_A,
Key_Dead_e = Qt::Key_Dead_e,
Key_Dead_E = Qt::Key_Dead_E,
Key_Dead_i = Qt::Key_Dead_i,
Key_Dead_I = Qt::Key_Dead_I,
Key_Dead_o = Qt::Key_Dead_o,
Key_Dead_O = Qt::Key_Dead_O,
Key_Dead_u = Qt::Key_Dead_u,
Key_Dead_U = Qt::Key_Dead_U,
Key_Dead_Small_Schwa = Qt::Key_Dead_Small_Schwa,
Key_Dead_Capital_Schwa = Qt::Key_Dead_Capital_Schwa,
Key_Dead_Greek = Qt::Key_Dead_Greek,
Key_Dead_Lowline = Qt::Key_Dead_Lowline,
Key_Dead_Aboveverticalline = Qt::Key_Dead_Aboveverticalline,
Key_Dead_Belowverticalline = Qt::Key_Dead_Belowverticalline,
Key_Dead_Longsolidusoverlay = Qt::Key_Dead_Longsolidusoverlay,
Key_Back = Qt::Key_Back,
Key_Forward = Qt::Key_Forward,
Key_Stop = Qt::Key_Stop,
Key_Refresh = Qt::Key_Refresh,
Key_VolumeDown = Qt::Key_VolumeDown,
Key_VolumeMute = Qt::Key_VolumeMute,
Key_VolumeUp = Qt::Key_VolumeUp,
Key_BassBoost = Qt::Key_BassBoost,
Key_BassUp = Qt::Key_BassUp,
Key_BassDown = Qt::Key_BassDown,
Key_TrebleUp = Qt::Key_TrebleUp,
Key_TrebleDown = Qt::Key_TrebleDown,
Key_MediaPlay = Qt::Key_MediaPlay,
Key_MediaStop = Qt::Key_MediaStop,
Key_MediaPrevious = Qt::Key_MediaPrevious,
Key_MediaNext = Qt::Key_MediaNext,
Key_MediaRecord = Qt::Key_MediaRecord,
Key_MediaPause = Qt::Key_MediaPause,
Key_MediaTogglePlayPause = Qt::Key_MediaTogglePlayPause,
Key_HomePage = Qt::Key_HomePage,
Key_Favorites = Qt::Key_Favorites,
Key_Search = Qt::Key_Search,
Key_Standby = Qt::Key_Standby,
Key_OpenUrl = Qt::Key_OpenUrl,
Key_LaunchMail = Qt::Key_LaunchMail,
Key_LaunchMedia = Qt::Key_LaunchMedia,
Key_Launch0 = Qt::Key_Launch0,
Key_Launch1 = Qt::Key_Launch1,
Key_Launch2 = Qt::Key_Launch2,
Key_Launch3 = Qt::Key_Launch3,
Key_Launch4 = Qt::Key_Launch4,
Key_Launch5 = Qt::Key_Launch5,
Key_Launch6 = Qt::Key_Launch6,
Key_Launch7 = Qt::Key_Launch7,
Key_Launch8 = Qt::Key_Launch8,
Key_Launch9 = Qt::Key_Launch9,
Key_LaunchA = Qt::Key_LaunchA,
Key_LaunchB = Qt::Key_LaunchB,
Key_LaunchC = Qt::Key_LaunchC,
Key_LaunchD = Qt::Key_LaunchD,
Key_LaunchE = Qt::Key_LaunchE,
Key_LaunchF = Qt::Key_LaunchF,
Key_MonBrightnessUp = Qt::Key_MonBrightnessUp,
Key_MonBrightnessDown = Qt::Key_MonBrightnessDown,
Key_KeyboardLightOnOff = Qt::Key_KeyboardLightOnOff,
Key_KeyboardBrightnessUp = Qt::Key_KeyboardBrightnessUp,
Key_KeyboardBrightnessDown = Qt::Key_KeyboardBrightnessDown,
Key_PowerOff = Qt::Key_PowerOff,
Key_WakeUp = Qt::Key_WakeUp,
Key_Eject = Qt::Key_Eject,
Key_ScreenSaver = Qt::Key_ScreenSaver,
Key_WWW = Qt::Key_WWW,
Key_Memo = Qt::Key_Memo,
Key_LightBulb = Qt::Key_LightBulb,
Key_Shop = Qt::Key_Shop,
Key_History = Qt::Key_History,
Key_AddFavorite = Qt::Key_AddFavorite,
Key_HotLinks = Qt::Key_HotLinks,
Key_BrightnessAdjust = Qt::Key_BrightnessAdjust,
Key_Finance = Qt::Key_Finance,
Key_Community = Qt::Key_Community,
Key_AudioRewind = Qt::Key_AudioRewind,
Key_BackForward = Qt::Key_BackForward,
Key_ApplicationLeft = Qt::Key_ApplicationLeft,
Key_ApplicationRight = Qt::Key_ApplicationRight,
Key_Book = Qt::Key_Book,
Key_CD = Qt::Key_CD,
Key_Calculator = Qt::Key_Calculator,
Key_ToDoList = Qt::Key_ToDoList,
Key_ClearGrab = Qt::Key_ClearGrab,
Key_Close = Qt::Key_Close,
Key_Copy = Qt::Key_Copy,
Key_Cut = Qt::Key_Cut,
Key_Display = Qt::Key_Display,
Key_DOS = Qt::Key_DOS,
Key_Documents = Qt::Key_Documents,
Key_Excel = Qt::Key_Excel,
Key_Explorer = Qt::Key_Explorer,
Key_Game = Qt::Key_Game,
Key_Go = Qt::Key_Go,
Key_iTouch = Qt::Key_iTouch,
Key_LogOff = Qt::Key_LogOff,
Key_Market = Qt::Key_Market,
Key_Meeting = Qt::Key_Meeting,
Key_MenuKB = Qt::Key_MenuKB,
Key_MenuPB = Qt::Key_MenuPB,
Key_MySites = Qt::Key_MySites,
Key_News = Qt::Key_News,
Key_OfficeHome = Qt::Key_OfficeHome,
Key_Option = Qt::Key_Option,
Key_Paste = Qt::Key_Paste,
Key_Phone = Qt::Key_Phone,
Key_Calendar = Qt::Key_Calendar,
Key_Reply = Qt::Key_Reply,
Key_Reload = Qt::Key_Reload,
Key_RotateWindows = Qt::Key_RotateWindows,
Key_RotationPB = Qt::Key_RotationPB,
Key_RotationKB = Qt::Key_RotationKB,
Key_Save = Qt::Key_Save,
Key_Send = Qt::Key_Send,
Key_Spell = Qt::Key_Spell,
Key_SplitScreen = Qt::Key_SplitScreen,
Key_Support = Qt::Key_Support,
Key_TaskPane = Qt::Key_TaskPane,
Key_Terminal = Qt::Key_Terminal,
Key_Tools = Qt::Key_Tools,
Key_Travel = Qt::Key_Travel,
Key_Video = Qt::Key_Video,
Key_Word = Qt::Key_Word,
Key_Xfer = Qt::Key_Xfer,
Key_ZoomIn = Qt::Key_ZoomIn,
Key_ZoomOut = Qt::Key_ZoomOut,
Key_Away = Qt::Key_Away,
Key_Messenger = Qt::Key_Messenger,
Key_WebCam = Qt::Key_WebCam,
Key_MailForward = Qt::Key_MailForward,
Key_Pictures = Qt::Key_Pictures,
Key_Music = Qt::Key_Music,
Key_Battery = Qt::Key_Battery,
Key_Bluetooth = Qt::Key_Bluetooth,
Key_WLAN = Qt::Key_WLAN,
Key_UWB = Qt::Key_UWB,
Key_AudioForward = Qt::Key_AudioForward,
Key_AudioRepeat = Qt::Key_AudioRepeat,
Key_AudioRandomPlay = Qt::Key_AudioRandomPlay,
Key_Subtitle = Qt::Key_Subtitle,
Key_AudioCycleTrack = Qt::Key_AudioCycleTrack,
Key_Time = Qt::Key_Time,
Key_Hibernate = Qt::Key_Hibernate,
Key_View = Qt::Key_View,
Key_TopMenu = Qt::Key_TopMenu,
Key_PowerDown = Qt::Key_PowerDown,
Key_Suspend = Qt::Key_Suspend,
Key_ContrastAdjust = Qt::Key_ContrastAdjust,
Key_LaunchG = Qt::Key_LaunchG,
Key_LaunchH = Qt::Key_LaunchH,
Key_TouchpadToggle = Qt::Key_TouchpadToggle,
Key_TouchpadOn = Qt::Key_TouchpadOn,
Key_TouchpadOff = Qt::Key_TouchpadOff,
Key_MicMute = Qt::Key_MicMute,
Key_Red = Qt::Key_Red,
Key_Green = Qt::Key_Green,
Key_Yellow = Qt::Key_Yellow,
Key_Blue = Qt::Key_Blue,
Key_ChannelUp = Qt::Key_ChannelUp,
Key_ChannelDown = Qt::Key_ChannelDown,
Key_Guide = Qt::Key_Guide,
Key_Info = Qt::Key_Info,
Key_Settings = Qt::Key_Settings,
Key_MicVolumeUp = Qt::Key_MicVolumeUp,
Key_MicVolumeDown = Qt::Key_MicVolumeDown,
Key_New = Qt::Key_New,
Key_Open = Qt::Key_Open,
Key_Find = Qt::Key_Find,
Key_Undo = Qt::Key_Undo,
Key_Redo = Qt::Key_Redo,
Key_MediaLast = Qt::Key_MediaLast,
Key_Select = Qt::Key_Select,
Key_Yes = Qt::Key_Yes,
Key_No = Qt::Key_No,
Key_Cancel = Qt::Key_Cancel,
Key_Printer = Qt::Key_Printer,
Key_Execute = Qt::Key_Execute,
Key_Sleep = Qt::Key_Sleep,
Key_Play = Qt::Key_Play,
Key_Zoom = Qt::Key_Zoom,
Key_Exit = Qt::Key_Exit,
Key_Context1 = Qt::Key_Context1,
Key_Context2 = Qt::Key_Context2,
Key_Context3 = Qt::Key_Context3,
Key_Context4 = Qt::Key_Context4,
Key_Call = Qt::Key_Call,
Key_Hangup = Qt::Key_Hangup,
Key_Flip = Qt::Key_Flip,
Key_ToggleCallHangup = Qt::Key_ToggleCallHangup,
Key_VoiceDial = Qt::Key_VoiceDial,
Key_LastNumberRedial = Qt::Key_LastNumberRedial,
Key_Camera = Qt::Key_Camera,
Key_CameraFocus = Qt::Key_CameraFocus,
Key_unknown = Qt::Key_unknown,

  };
  Q_ENUM(Key)

  enum KeyboardModifier {
    NoModifier = Qt::NoModifier,
ShiftModifier = Qt::ShiftModifier,
ControlModifier = Qt::ControlModifier,
AltModifier = Qt::AltModifier,
MetaModifier = Qt::MetaModifier,
KeypadModifier = Qt::KeypadModifier,
GroupSwitchModifier = Qt::GroupSwitchModifier,
KeyboardModifierMask = Qt::KeyboardModifierMask,

  };
  Q_ENUM(KeyboardModifier)

  enum PenStyle {
    NoPen = Qt::NoPen,
SolidLine = Qt::SolidLine,
DashLine = Qt::DashLine,
DotLine = Qt::DotLine,
DashDotLine = Qt::DashDotLine,
DashDotDotLine = Qt::DashDotDotLine,
CustomDashLine = Qt::CustomDashLine,
MPenStyle = Qt::MPenStyle,

  };
  Q_ENUM(PenStyle)

  enum PenCapStyle {
    FlatCap = Qt::FlatCap,
SquareCap = Qt::SquareCap,
RoundCap = Qt::RoundCap,
MPenCapStyle = Qt::MPenCapStyle,

  };
  Q_ENUM(PenCapStyle)

  enum PenJoinStyle {
    MiterJoin = Qt::MiterJoin,
BevelJoin = Qt::BevelJoin,
RoundJoin = Qt::RoundJoin,
SvgMiterJoin = Qt::SvgMiterJoin,
MPenJoinStyle = Qt::MPenJoinStyle,

  };
  Q_ENUM(PenJoinStyle)

  enum BrushStyle {
    NoBrush = Qt::NoBrush,
SolidPattern = Qt::SolidPattern,
Dense1Pattern = Qt::Dense1Pattern,
Dense2Pattern = Qt::Dense2Pattern,
Dense3Pattern = Qt::Dense3Pattern,
Dense4Pattern = Qt::Dense4Pattern,
Dense5Pattern = Qt::Dense5Pattern,
Dense6Pattern = Qt::Dense6Pattern,
Dense7Pattern = Qt::Dense7Pattern,
HorPattern = Qt::HorPattern,
VerPattern = Qt::VerPattern,
CrossPattern = Qt::CrossPattern,
BDiagPattern = Qt::BDiagPattern,
FDiagPattern = Qt::FDiagPattern,
DiagCrossPattern = Qt::DiagCrossPattern,
LinearGradientPattern = Qt::LinearGradientPattern,
RadialGradientPattern = Qt::RadialGradientPattern,
ConicalGradientPattern = Qt::ConicalGradientPattern,
TexturePattern = Qt::TexturePattern,

  };
  Q_ENUM(BrushStyle)

  enum SizeMode {
    AbsoluteSize = Qt::AbsoluteSize,
RelativeSize = Qt::RelativeSize,

  };
  Q_ENUM(SizeMode)

  enum UIEffect {
    UI_General = Qt::UI_General,
UI_AnimateMenu = Qt::UI_AnimateMenu,
UI_FadeMenu = Qt::UI_FadeMenu,
UI_AnimateCombo = Qt::UI_AnimateCombo,
UI_AnimateTooltip = Qt::UI_AnimateTooltip,
UI_FadeTooltip = Qt::UI_FadeTooltip,
UI_AnimateToolBox = Qt::UI_AnimateToolBox,

  };
  Q_ENUM(UIEffect)

  enum CursorShape {
    ArrowCursor = Qt::ArrowCursor,
UpArrowCursor = Qt::UpArrowCursor,
CrossCursor = Qt::CrossCursor,
WaitCursor = Qt::WaitCursor,
IBeamCursor = Qt::IBeamCursor,
SizeVerCursor = Qt::SizeVerCursor,
SizeHorCursor = Qt::SizeHorCursor,
SizeBDiagCursor = Qt::SizeBDiagCursor,
SizeFDiagCursor = Qt::SizeFDiagCursor,
SizeAllCursor = Qt::SizeAllCursor,
BlankCursor = Qt::BlankCursor,
SplitVCursor = Qt::SplitVCursor,
SplitHCursor = Qt::SplitHCursor,
PointingHandCursor = Qt::PointingHandCursor,
ForbiddenCursor = Qt::ForbiddenCursor,
WhatsThisCursor = Qt::WhatsThisCursor,
BusyCursor = Qt::BusyCursor,
OpenHandCursor = Qt::OpenHandCursor,
ClosedHandCursor = Qt::ClosedHandCursor,
DragCopyCursor = Qt::DragCopyCursor,
DragMoveCursor = Qt::DragMoveCursor,
DragLinkCursor = Qt::DragLinkCursor,
LastCursor = Qt::LastCursor,
BitmapCursor = Qt::BitmapCursor,
CustomCursor = Qt::CustomCursor,

  };
  Q_ENUM(CursorShape)

  enum TextFormat {
    PlainText = Qt::PlainText,
RichText = Qt::RichText,
AutoText = Qt::AutoText,
MarkdownText = Qt::MarkdownText,

  };
  Q_ENUM(TextFormat)

  enum AspectRatioMode {
    IgnoreAspectRatio = Qt::IgnoreAspectRatio,
KeepAspectRatio = Qt::KeepAspectRatio,
KeepAspectRatioByExpanding = Qt::KeepAspectRatioByExpanding,

  };
  Q_ENUM(AspectRatioMode)

  enum DockWidgetArea {
    LeftDockWidgetArea = Qt::LeftDockWidgetArea,
RightDockWidgetArea = Qt::RightDockWidgetArea,
TopDockWidgetArea = Qt::TopDockWidgetArea,
BottomDockWidgetArea = Qt::BottomDockWidgetArea,
DockWidgetArea_Mask = Qt::DockWidgetArea_Mask,
AllDockWidgetAreas = Qt::AllDockWidgetAreas,
NoDockWidgetArea = Qt::NoDockWidgetArea,

  };
  Q_ENUM(DockWidgetArea)

  enum DockWidgetAreaSizes {
    NDockWidgetAreas = Qt::NDockWidgetAreas,

  };
  Q_ENUM(DockWidgetAreaSizes)

  enum ToolBarAreaSizes {
    NToolBarAreas = Qt::NToolBarAreas,

  };
  Q_ENUM(ToolBarAreaSizes)

  enum TimeSpec {
    LocalTime = Qt::LocalTime,
UTC = Qt::UTC,
OffsetFromUTC = Qt::OffsetFromUTC,
TimeZone = Qt::TimeZone,

  };
  Q_ENUM(TimeSpec)

  enum DayOfWeek {
    Monday = Qt::Monday,
Tuesday = Qt::Tuesday,
Wednesday = Qt::Wednesday,
Thursday = Qt::Thursday,
Friday = Qt::Friday,
Saturday = Qt::Saturday,
Sunday = Qt::Sunday,

  };
  Q_ENUM(DayOfWeek)

  enum ScrollBarPolicy {
    ScrollBarAsNeeded = Qt::ScrollBarAsNeeded,
ScrollBarAlwaysOff = Qt::ScrollBarAlwaysOff,
ScrollBarAlwaysOn = Qt::ScrollBarAlwaysOn,

  };
  Q_ENUM(ScrollBarPolicy)

  enum CaseSensitivity {
    CaseInsensitive = Qt::CaseInsensitive,
CaseSensitive = Qt::CaseSensitive,

  };
  Q_ENUM(CaseSensitivity)

  enum Corner {
    TopLeftCorner = Qt::TopLeftCorner,
TopRightCorner = Qt::TopRightCorner,
BottomLeftCorner = Qt::BottomLeftCorner,
BottomRightCorner = Qt::BottomRightCorner,

  };
  Q_ENUM(Corner)

  enum Edge {
    TopEdge = Qt::TopEdge,
LeftEdge = Qt::LeftEdge,
RightEdge = Qt::RightEdge,
BottomEdge = Qt::BottomEdge,

  };
  Q_ENUM(Edge)

  enum ShortcutContext {
    WidgetShortcut = Qt::WidgetShortcut,
WindowShortcut = Qt::WindowShortcut,
ApplicationShortcut = Qt::ApplicationShortcut,
WidgetWithChildrenShortcut = Qt::WidgetWithChildrenShortcut,

  };
  Q_ENUM(ShortcutContext)

  enum FillRule {
    OddEvenFill = Qt::OddEvenFill,
WindingFill = Qt::WindingFill,

  };
  Q_ENUM(FillRule)

  enum MaskMode {
    MaskInColor = Qt::MaskInColor,
MaskOutColor = Qt::MaskOutColor,

  };
  Q_ENUM(MaskMode)

  enum ClipOperation {
    NoClip = Qt::NoClip,
ReplaceClip = Qt::ReplaceClip,
IntersectClip = Qt::IntersectClip,

  };
  Q_ENUM(ClipOperation)

  enum ItemSelectionMode {
    ContainsItemShape = Qt::ContainsItemShape,
IntersectsItemShape = Qt::IntersectsItemShape,
ContainsItemBoundingRect = Qt::ContainsItemBoundingRect,
IntersectsItemBoundingRect = Qt::IntersectsItemBoundingRect,

  };
  Q_ENUM(ItemSelectionMode)

  enum ItemSelectionOperation {
    ReplaceSelection = Qt::ReplaceSelection,
AddToSelection = Qt::AddToSelection,

  };
  Q_ENUM(ItemSelectionOperation)

  enum TransformationMode {
    FastTransformation = Qt::FastTransformation,
SmoothTransformation = Qt::SmoothTransformation,

  };
  Q_ENUM(TransformationMode)

  enum Axis {
    XAxis = Qt::XAxis,
YAxis = Qt::YAxis,
ZAxis = Qt::ZAxis,

  };
  Q_ENUM(Axis)

  enum FocusReason {
    MouseFocusReason = Qt::MouseFocusReason,
TabFocusReason = Qt::TabFocusReason,
BacktabFocusReason = Qt::BacktabFocusReason,
ActiveWindowFocusReason = Qt::ActiveWindowFocusReason,
PopupFocusReason = Qt::PopupFocusReason,
ShortcutFocusReason = Qt::ShortcutFocusReason,
MenuBarFocusReason = Qt::MenuBarFocusReason,
OtherFocusReason = Qt::OtherFocusReason,
NoFocusReason = Qt::NoFocusReason,

  };
  Q_ENUM(FocusReason)

  enum ContextMenuPolicy {
    NoContextMenu = Qt::NoContextMenu,
DefaultContextMenu = Qt::DefaultContextMenu,
ActionsContextMenu = Qt::ActionsContextMenu,
CustomContextMenu = Qt::CustomContextMenu,
PreventContextMenu = Qt::PreventContextMenu,

  };
  Q_ENUM(ContextMenuPolicy)

  enum InputMethodQuery {
    ImEnabled = Qt::ImEnabled,
ImCursorRectangle = Qt::ImCursorRectangle,
ImFont = Qt::ImFont,
ImCursorPosition = Qt::ImCursorPosition,
ImSurroundingText = Qt::ImSurroundingText,
ImCurrentSelection = Qt::ImCurrentSelection,
ImMaximumTextLength = Qt::ImMaximumTextLength,
ImAnchorPosition = Qt::ImAnchorPosition,
ImHints = Qt::ImHints,
ImPreferredLanguage = Qt::ImPreferredLanguage,
ImAbsolutePosition = Qt::ImAbsolutePosition,
ImTextBeforeCursor = Qt::ImTextBeforeCursor,
ImTextAfterCursor = Qt::ImTextAfterCursor,
ImEnterKeyType = Qt::ImEnterKeyType,
ImAnchorRectangle = Qt::ImAnchorRectangle,
ImInputItemClipRectangle = Qt::ImInputItemClipRectangle,
ImReadOnly = Qt::ImReadOnly,
ImPlatformData = Qt::ImPlatformData,
ImQueryInput = Qt::ImQueryInput,
ImQueryAll = Qt::ImQueryAll,

  };
  Q_ENUM(InputMethodQuery)

  enum ToolBarArea {
    LeftToolBarArea = Qt::LeftToolBarArea,
RightToolBarArea = Qt::RightToolBarArea,
TopToolBarArea = Qt::TopToolBarArea,
BottomToolBarArea = Qt::BottomToolBarArea,
AllToolBarAreas = Qt::AllToolBarAreas,
NoToolBarArea = Qt::NoToolBarArea,

  };
  Q_ENUM(ToolBarArea)

  enum ToolButtonStyle {
    ToolButtonIconOnly = Qt::ToolButtonIconOnly,
ToolButtonTextOnly = Qt::ToolButtonTextOnly,
ToolButtonTextBesideIcon = Qt::ToolButtonTextBesideIcon,
ToolButtonTextUnderIcon = Qt::ToolButtonTextUnderIcon,
ToolButtonFollowStyle = Qt::ToolButtonFollowStyle,

  };
  Q_ENUM(ToolButtonStyle)

  enum LayoutDirection {
    LeftToRight = Qt::LeftToRight,
RightToLeft = Qt::RightToLeft,
LayoutDirectionAuto = Qt::LayoutDirectionAuto,

  };
  Q_ENUM(LayoutDirection)

  enum AnchorPoint {
    AnchorLeft = Qt::AnchorLeft,
AnchorHorizontalCenter = Qt::AnchorHorizontalCenter,
AnchorRight = Qt::AnchorRight,
AnchorTop = Qt::AnchorTop,
AnchorVerticalCenter = Qt::AnchorVerticalCenter,
AnchorBottom = Qt::AnchorBottom,

  };
  Q_ENUM(AnchorPoint)

  enum FindChildOption {
    FindDirectChildrenOnly = Qt::FindDirectChildrenOnly,
FindChildrenRecursively = Qt::FindChildrenRecursively,

  };
  Q_ENUM(FindChildOption)

  enum FocusPolicy {
    TabFocus = Qt::TabFocus,
ClickFocus = Qt::ClickFocus,
StrongFocus = Qt::StrongFocus,
WheelFocus = Qt::WheelFocus,
NoFocus = Qt::NoFocus,

  };
  Q_ENUM(FocusPolicy)

  enum CheckState {
    Unchecked = Qt::Unchecked,
PartiallyChecked = Qt::PartiallyChecked,
Checked = Qt::Checked,

  };
  Q_ENUM(CheckState)

  enum ItemDataRole {
    DisplayRole = Qt::DisplayRole,
DecorationRole = Qt::DecorationRole,
EditRole = Qt::EditRole,
ToolTipRole = Qt::ToolTipRole,
StatusTipRole = Qt::StatusTipRole,
WhatsThisRole = Qt::WhatsThisRole,
FontRole = Qt::FontRole,
TextAlignmentRole = Qt::TextAlignmentRole,
BackgroundRole = Qt::BackgroundRole,
ForegroundRole = Qt::ForegroundRole,
CheckStateRole = Qt::CheckStateRole,
AccessibleTextRole = Qt::AccessibleTextRole,
AccessibleDescriptionRole = Qt::AccessibleDescriptionRole,
SizeHintRole = Qt::SizeHintRole,
InitialSortOrderRole = Qt::InitialSortOrderRole,
DisplayPropertyRole = Qt::DisplayPropertyRole,
DecorationPropertyRole = Qt::DecorationPropertyRole,
ToolTipPropertyRole = Qt::ToolTipPropertyRole,
StatusTipPropertyRole = Qt::StatusTipPropertyRole,
WhatsThisPropertyRole = Qt::WhatsThisPropertyRole,
UserRole = Qt::UserRole,

  };
  Q_ENUM(ItemDataRole)

  enum ItemFlag {
    NoItemFlags = Qt::NoItemFlags,
ItemIsSelectable = Qt::ItemIsSelectable,
ItemIsEditable = Qt::ItemIsEditable,
ItemIsDragEnabled = Qt::ItemIsDragEnabled,
ItemIsDropEnabled = Qt::ItemIsDropEnabled,
ItemIsUserCheckable = Qt::ItemIsUserCheckable,
ItemIsEnabled = Qt::ItemIsEnabled,
ItemIsAutoTristate = Qt::ItemIsAutoTristate,
ItemNeverHasChildren = Qt::ItemNeverHasChildren,
ItemIsUserTristate = Qt::ItemIsUserTristate,

  };
  Q_ENUM(ItemFlag)

  enum MatchFlag {
    MatchExactly = Qt::MatchExactly,
MatchContains = Qt::MatchContains,
MatchStartsWith = Qt::MatchStartsWith,
MatchEndsWith = Qt::MatchEndsWith,
MatchRegularExpression = Qt::MatchRegularExpression,
MatchWildcard = Qt::MatchWildcard,
MatchFixedString = Qt::MatchFixedString,
MatchTypeMask = Qt::MatchTypeMask,
MatchCaseSensitive = Qt::MatchCaseSensitive,
MatchWrap = Qt::MatchWrap,
MatchRecursive = Qt::MatchRecursive,

  };
  Q_ENUM(MatchFlag)

  enum WindowModality {
    NonModal = Qt::NonModal,
WindowModal = Qt::WindowModal,
ApplicationModal = Qt::ApplicationModal,

  };
  Q_ENUM(WindowModality)

  enum TextInteractionFlag {
    NoTextInteraction = Qt::NoTextInteraction,
TextSelectableByMouse = Qt::TextSelectableByMouse,
TextSelectableByKeyboard = Qt::TextSelectableByKeyboard,
LinksAccessibleByMouse = Qt::LinksAccessibleByMouse,
LinksAccessibleByKeyboard = Qt::LinksAccessibleByKeyboard,
TextEditable = Qt::TextEditable,
TextEditorInteraction = Qt::TextEditorInteraction,
TextBrowserInteraction = Qt::TextBrowserInteraction,

  };
  Q_ENUM(TextInteractionFlag)

  enum SizeHint {
    MinimumSize = Qt::MinimumSize,
PreferredSize = Qt::PreferredSize,
MaximumSize = Qt::MaximumSize,
MinimumDescent = Qt::MinimumDescent,
NSizeHints = Qt::NSizeHints,

  };
  Q_ENUM(SizeHint)

  enum WidgetAttribute {
    WA_AcceptDrops = Qt::WA_AcceptDrops,
WA_AlwaysShowToolTips = Qt::WA_AlwaysShowToolTips,
WA_CustomWhatsThis = Qt::WA_CustomWhatsThis,
WA_DeleteOnClose = Qt::WA_DeleteOnClose,
WA_Disabled = Qt::WA_Disabled,
WA_DontShowOnScreen = Qt::WA_DontShowOnScreen,
WA_ForceDisabled = Qt::WA_ForceDisabled,
WA_ForceUpdatesDisabled = Qt::WA_ForceUpdatesDisabled,
WA_Hover = Qt::WA_Hover,
WA_InputMethodEnabled = Qt::WA_InputMethodEnabled,
WA_KeyboardFocusChange = Qt::WA_KeyboardFocusChange,
WA_KeyCompression = Qt::WA_KeyCompression,
WA_LayoutOnEntireRect = Qt::WA_LayoutOnEntireRect,
WA_LayoutUsesWidgetRect = Qt::WA_LayoutUsesWidgetRect,
WA_MacOpaqueSizeGrip = Qt::WA_MacOpaqueSizeGrip,
WA_MacShowFocusRect = Qt::WA_MacShowFocusRect,
WA_MacNormalSize = Qt::WA_MacNormalSize,
WA_MacSmallSize = Qt::WA_MacSmallSize,
WA_MacMiniSize = Qt::WA_MacMiniSize,
WA_Mapped = Qt::WA_Mapped,
WA_MouseNoMask = Qt::WA_MouseNoMask,
WA_MouseTracking = Qt::WA_MouseTracking,
WA_Moved = Qt::WA_Moved,
WA_NoChildEventsForParent = Qt::WA_NoChildEventsForParent,
WA_NoChildEventsFromChildren = Qt::WA_NoChildEventsFromChildren,
WA_NoMouseReplay = Qt::WA_NoMouseReplay,
WA_NoMousePropagation = Qt::WA_NoMousePropagation,
WA_TransparentForMouseEvents = Qt::WA_TransparentForMouseEvents,
WA_NoSystemBackground = Qt::WA_NoSystemBackground,
WA_OpaquePaintEvent = Qt::WA_OpaquePaintEvent,
WA_OutsideWSRange = Qt::WA_OutsideWSRange,
WA_PaintOnScreen = Qt::WA_PaintOnScreen,
WA_PaintUnclipped = Qt::WA_PaintUnclipped,
WA_PendingMoveEvent = Qt::WA_PendingMoveEvent,
WA_PendingResizeEvent = Qt::WA_PendingResizeEvent,
WA_QuitOnClose = Qt::WA_QuitOnClose,
WA_Resized = Qt::WA_Resized,
WA_RightToLeft = Qt::WA_RightToLeft,
WA_SetCursor = Qt::WA_SetCursor,
WA_SetFont = Qt::WA_SetFont,
WA_SetPalette = Qt::WA_SetPalette,
WA_SetStyle = Qt::WA_SetStyle,
WA_ShowModal = Qt::WA_ShowModal,
WA_StaticContents = Qt::WA_StaticContents,
WA_StyleSheet = Qt::WA_StyleSheet,
WA_StyleSheetTarget = Qt::WA_StyleSheetTarget,
WA_TabletTracking = Qt::WA_TabletTracking,
WA_TranslucentBackground = Qt::WA_TranslucentBackground,
WA_UnderMouse = Qt::WA_UnderMouse,
WA_UpdatesDisabled = Qt::WA_UpdatesDisabled,
WA_WindowModified = Qt::WA_WindowModified,
WA_WindowPropagation = Qt::WA_WindowPropagation,
WA_MacAlwaysShowToolWindow = Qt::WA_MacAlwaysShowToolWindow,
WA_SetLocale = Qt::WA_SetLocale,
WA_StyledBackground = Qt::WA_StyledBackground,
WA_ShowWithoutActivating = Qt::WA_ShowWithoutActivating,
WA_NativeWindow = Qt::WA_NativeWindow,
WA_DontCreateNativeAncestors = Qt::WA_DontCreateNativeAncestors,
WA_X11NetWmWindowTypeDesktop = Qt::WA_X11NetWmWindowTypeDesktop,
WA_X11NetWmWindowTypeDock = Qt::WA_X11NetWmWindowTypeDock,
WA_X11NetWmWindowTypeToolBar = Qt::WA_X11NetWmWindowTypeToolBar,
WA_X11NetWmWindowTypeMenu = Qt::WA_X11NetWmWindowTypeMenu,
WA_X11NetWmWindowTypeUtility = Qt::WA_X11NetWmWindowTypeUtility,
WA_X11NetWmWindowTypeSplash = Qt::WA_X11NetWmWindowTypeSplash,
WA_X11NetWmWindowTypeDialog = Qt::WA_X11NetWmWindowTypeDialog,
WA_X11NetWmWindowTypeDropDownMenu = Qt::WA_X11NetWmWindowTypeDropDownMenu,
WA_X11NetWmWindowTypePopupMenu = Qt::WA_X11NetWmWindowTypePopupMenu,
WA_X11NetWmWindowTypeToolTip = Qt::WA_X11NetWmWindowTypeToolTip,
WA_X11NetWmWindowTypeNotification = Qt::WA_X11NetWmWindowTypeNotification,
WA_X11NetWmWindowTypeCombo = Qt::WA_X11NetWmWindowTypeCombo,
WA_X11NetWmWindowTypeDND = Qt::WA_X11NetWmWindowTypeDND,
WA_AcceptTouchEvents = Qt::WA_AcceptTouchEvents,
WA_TouchPadAcceptSingleTouchEvents = Qt::WA_TouchPadAcceptSingleTouchEvents,
WA_X11DoNotAcceptFocus = Qt::WA_X11DoNotAcceptFocus,
WA_AlwaysStackOnTop = Qt::WA_AlwaysStackOnTop,
WA_ContentsMarginsRespectsSafeArea = Qt::WA_ContentsMarginsRespectsSafeArea,

  };
  Q_ENUM(WidgetAttribute)

  enum WindowFrameSection {
    NoSection = Qt::NoSection,
LeftSection = Qt::LeftSection,
TopLeftSection = Qt::TopLeftSection,
TopSection = Qt::TopSection,
TopRightSection = Qt::TopRightSection,
RightSection = Qt::RightSection,
BottomRightSection = Qt::BottomRightSection,
BottomSection = Qt::BottomSection,
BottomLeftSection = Qt::BottomLeftSection,
TitleBarArea = Qt::TitleBarArea,

  };
  Q_ENUM(WindowFrameSection)

  enum CoordinateSystem {
    DeviceCoordinates = Qt::DeviceCoordinates,
LogicalCoordinates = Qt::LogicalCoordinates,

  };
  Q_ENUM(CoordinateSystem)

  enum TouchPointState {
    TouchPointUnknownState = Qt::TouchPointUnknownState,
TouchPointPressed = Qt::TouchPointPressed,
TouchPointMoved = Qt::TouchPointMoved,
TouchPointStationary = Qt::TouchPointStationary,
TouchPointReleased = Qt::TouchPointReleased,

  };
  Q_ENUM(TouchPointState)

  enum GestureState {
    NoGesture = Qt::NoGesture,
GestureStarted = Qt::GestureStarted,
GestureUpdated = Qt::GestureUpdated,
GestureFinished = Qt::GestureFinished,
GestureCanceled = Qt::GestureCanceled,

  };
  Q_ENUM(GestureState)

  enum GestureType {
    TapGesture = Qt::TapGesture,
TapAndHoldGesture = Qt::TapAndHoldGesture,
PanGesture = Qt::PanGesture,
PinchGesture = Qt::PinchGesture,
SwipeGesture = Qt::SwipeGesture,
CustomGesture = Qt::CustomGesture,
LastGestureType = Qt::LastGestureType,

  };
  Q_ENUM(GestureType)

  enum GestureFlag {
    DontStartGestureOnChildren = Qt::DontStartGestureOnChildren,
ReceivePartialGestures = Qt::ReceivePartialGestures,
IgnoredGesturesPropagateToParent = Qt::IgnoredGesturesPropagateToParent,

  };
  Q_ENUM(GestureFlag)

  enum NavigationMode {
    NavigationModeNone = Qt::NavigationModeNone,
NavigationModeKeypadTabOrder = Qt::NavigationModeKeypadTabOrder,
NavigationModeKeypadDirectional = Qt::NavigationModeKeypadDirectional,
NavigationModeCursorAuto = Qt::NavigationModeCursorAuto,
NavigationModeCursorForceVisible = Qt::NavigationModeCursorForceVisible,

  };
  Q_ENUM(NavigationMode)

  enum Orientation {
    Horizontal = Qt::Horizontal,
Vertical = Qt::Vertical,

  };
  Q_ENUM(Orientation)

  enum CursorMoveStyle {
    LogicalMoveStyle = Qt::LogicalMoveStyle,
VisualMoveStyle = Qt::VisualMoveStyle,

  };
  Q_ENUM(CursorMoveStyle)

  enum TimerType {
    PreciseTimer = Qt::PreciseTimer,
CoarseTimer = Qt::CoarseTimer,
VeryCoarseTimer = Qt::VeryCoarseTimer,

  };
  Q_ENUM(TimerType)

  enum ScrollPhase {
    NoScrollPhase = Qt::NoScrollPhase,
ScrollBegin = Qt::ScrollBegin,
ScrollUpdate = Qt::ScrollUpdate,
ScrollEnd = Qt::ScrollEnd,
ScrollMomentum = Qt::ScrollMomentum,

  };
  Q_ENUM(ScrollPhase)

  enum MouseEventSource {
    MouseEventNotSynthesized = Qt::MouseEventNotSynthesized,
MouseEventSynthesizedBySystem = Qt::MouseEventSynthesizedBySystem,
MouseEventSynthesizedByQt = Qt::MouseEventSynthesizedByQt,
MouseEventSynthesizedByApplication = Qt::MouseEventSynthesizedByApplication,

  };
  Q_ENUM(MouseEventSource)

  enum MouseEventFlag {
    NoMouseEventFlag = Qt::NoMouseEventFlag,
MouseEventCreatedDoubleClick = Qt::MouseEventCreatedDoubleClick,
MouseEventFlagMask = Qt::MouseEventFlagMask,

  };
  Q_ENUM(MouseEventFlag)

  enum ReturnByValueConstant {
    ReturnByValue = Qt::ReturnByValue,

  };
  Q_ENUM(ReturnByValueConstant)


  // constructors:
  
#ifndef QT_NO_GESTURES

#endif

#ifndef Q_QDOC

#ifndef QT_NO_GESTURES

#endif

#endif


    // non-static functions:
    
#ifndef QT_NO_GESTURES

#endif

#ifndef Q_QDOC

#ifndef QT_NO_GESTURES

#endif

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    };

    Q_DECLARE_METATYPE(Qt_Wrapper*)

    Q_DECLARE_INTERFACE(Qt_Wrapper, "org.qcad.Qt_Wrapper")

  
  #endif
  