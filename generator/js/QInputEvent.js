
      // auto generated
      //var self;

      // class constructor:
      function QInputEvent() {
        

        // should be QInputEvent_BaseJs.call(this, engine):
        //QInputEvent.prototype = new QInputEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QInputEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QInputEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QInputEvent.js: No constructor found for class QInputEvent");
            
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
        }

        

      }

      //QInputEvent.prototype = new QInputEvent_BaseJs(engine);
      //QInputEvent.prototype = new QInputEvent_Wrapper(engine);
      QInputEvent.prototype = new Object();

      QInputEvent.prototype.toString = function() {
          //return "QInputEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QInputEvent [JS]";
        };
      QInputEvent.getObjectType = function() {
        return RJSType_QInputEvent.getIdStatic();
      };

      QInputEvent.prototype.getObjectType = function() {
        return RJSType_QInputEvent.getIdStatic();
      };

      QInputEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QInputEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QInputEvent.None = QInputEvent_Wrapper.None;
QInputEvent.Timer = QInputEvent_Wrapper.Timer;
QInputEvent.MouseButtonPress = QInputEvent_Wrapper.MouseButtonPress;
QInputEvent.MouseButtonRelease = QInputEvent_Wrapper.MouseButtonRelease;
QInputEvent.MouseButtonDblClick = QInputEvent_Wrapper.MouseButtonDblClick;
QInputEvent.MouseMove = QInputEvent_Wrapper.MouseMove;
QInputEvent.KeyPress = QInputEvent_Wrapper.KeyPress;
QInputEvent.KeyRelease = QInputEvent_Wrapper.KeyRelease;
QInputEvent.FocusIn = QInputEvent_Wrapper.FocusIn;
QInputEvent.FocusOut = QInputEvent_Wrapper.FocusOut;
QInputEvent.FocusAboutToChange = QInputEvent_Wrapper.FocusAboutToChange;
QInputEvent.Enter = QInputEvent_Wrapper.Enter;
QInputEvent.Leave = QInputEvent_Wrapper.Leave;
QInputEvent.Paint = QInputEvent_Wrapper.Paint;
QInputEvent.Move = QInputEvent_Wrapper.Move;
QInputEvent.Resize = QInputEvent_Wrapper.Resize;
QInputEvent.Create = QInputEvent_Wrapper.Create;
QInputEvent.Destroy = QInputEvent_Wrapper.Destroy;
QInputEvent.Show = QInputEvent_Wrapper.Show;
QInputEvent.Hide = QInputEvent_Wrapper.Hide;
QInputEvent.Close = QInputEvent_Wrapper.Close;
QInputEvent.Quit = QInputEvent_Wrapper.Quit;
QInputEvent.ParentChange = QInputEvent_Wrapper.ParentChange;
QInputEvent.ParentAboutToChange = QInputEvent_Wrapper.ParentAboutToChange;
QInputEvent.ThreadChange = QInputEvent_Wrapper.ThreadChange;
QInputEvent.WindowActivate = QInputEvent_Wrapper.WindowActivate;
QInputEvent.WindowDeactivate = QInputEvent_Wrapper.WindowDeactivate;
QInputEvent.ShowToParent = QInputEvent_Wrapper.ShowToParent;
QInputEvent.HideToParent = QInputEvent_Wrapper.HideToParent;
QInputEvent.Wheel = QInputEvent_Wrapper.Wheel;
QInputEvent.WindowTitleChange = QInputEvent_Wrapper.WindowTitleChange;
QInputEvent.WindowIconChange = QInputEvent_Wrapper.WindowIconChange;
QInputEvent.ApplicationWindowIconChange = QInputEvent_Wrapper.ApplicationWindowIconChange;
QInputEvent.ApplicationFontChange = QInputEvent_Wrapper.ApplicationFontChange;
QInputEvent.ApplicationLayoutDirectionChange = QInputEvent_Wrapper.ApplicationLayoutDirectionChange;
QInputEvent.ApplicationPaletteChange = QInputEvent_Wrapper.ApplicationPaletteChange;
QInputEvent.PaletteChange = QInputEvent_Wrapper.PaletteChange;
QInputEvent.Clipboard = QInputEvent_Wrapper.Clipboard;
QInputEvent.Speech = QInputEvent_Wrapper.Speech;
QInputEvent.MetaCall = QInputEvent_Wrapper.MetaCall;
QInputEvent.SockAct = QInputEvent_Wrapper.SockAct;
QInputEvent.WinEventAct = QInputEvent_Wrapper.WinEventAct;
QInputEvent.DeferredDelete = QInputEvent_Wrapper.DeferredDelete;
QInputEvent.DragEnter = QInputEvent_Wrapper.DragEnter;
QInputEvent.DragMove = QInputEvent_Wrapper.DragMove;
QInputEvent.DragLeave = QInputEvent_Wrapper.DragLeave;
QInputEvent.Drop = QInputEvent_Wrapper.Drop;
QInputEvent.DragResponse = QInputEvent_Wrapper.DragResponse;
QInputEvent.ChildAdded = QInputEvent_Wrapper.ChildAdded;
QInputEvent.ChildPolished = QInputEvent_Wrapper.ChildPolished;
QInputEvent.ChildRemoved = QInputEvent_Wrapper.ChildRemoved;
QInputEvent.ShowWindowRequest = QInputEvent_Wrapper.ShowWindowRequest;
QInputEvent.PolishRequest = QInputEvent_Wrapper.PolishRequest;
QInputEvent.Polish = QInputEvent_Wrapper.Polish;
QInputEvent.LayoutRequest = QInputEvent_Wrapper.LayoutRequest;
QInputEvent.UpdateRequest = QInputEvent_Wrapper.UpdateRequest;
QInputEvent.UpdateLater = QInputEvent_Wrapper.UpdateLater;
QInputEvent.EmbeddingControl = QInputEvent_Wrapper.EmbeddingControl;
QInputEvent.ActivateControl = QInputEvent_Wrapper.ActivateControl;
QInputEvent.DeactivateControl = QInputEvent_Wrapper.DeactivateControl;
QInputEvent.ContextMenu = QInputEvent_Wrapper.ContextMenu;
QInputEvent.InputMethod = QInputEvent_Wrapper.InputMethod;
QInputEvent.TabletMove = QInputEvent_Wrapper.TabletMove;
QInputEvent.LocaleChange = QInputEvent_Wrapper.LocaleChange;
QInputEvent.LanguageChange = QInputEvent_Wrapper.LanguageChange;
QInputEvent.LayoutDirectionChange = QInputEvent_Wrapper.LayoutDirectionChange;
QInputEvent.Style = QInputEvent_Wrapper.Style;
QInputEvent.TabletPress = QInputEvent_Wrapper.TabletPress;
QInputEvent.TabletRelease = QInputEvent_Wrapper.TabletRelease;
QInputEvent.OkRequest = QInputEvent_Wrapper.OkRequest;
QInputEvent.HelpRequest = QInputEvent_Wrapper.HelpRequest;
QInputEvent.IconDrag = QInputEvent_Wrapper.IconDrag;
QInputEvent.FontChange = QInputEvent_Wrapper.FontChange;
QInputEvent.EnabledChange = QInputEvent_Wrapper.EnabledChange;
QInputEvent.ActivationChange = QInputEvent_Wrapper.ActivationChange;
QInputEvent.StyleChange = QInputEvent_Wrapper.StyleChange;
QInputEvent.IconTextChange = QInputEvent_Wrapper.IconTextChange;
QInputEvent.ModifiedChange = QInputEvent_Wrapper.ModifiedChange;
QInputEvent.MouseTrackingChange = QInputEvent_Wrapper.MouseTrackingChange;
QInputEvent.WindowBlocked = QInputEvent_Wrapper.WindowBlocked;
QInputEvent.WindowUnblocked = QInputEvent_Wrapper.WindowUnblocked;
QInputEvent.WindowStateChange = QInputEvent_Wrapper.WindowStateChange;
QInputEvent.ReadOnlyChange = QInputEvent_Wrapper.ReadOnlyChange;
QInputEvent.ToolTip = QInputEvent_Wrapper.ToolTip;
QInputEvent.WhatsThis = QInputEvent_Wrapper.WhatsThis;
QInputEvent.StatusTip = QInputEvent_Wrapper.StatusTip;
QInputEvent.ActionChanged = QInputEvent_Wrapper.ActionChanged;
QInputEvent.ActionAdded = QInputEvent_Wrapper.ActionAdded;
QInputEvent.ActionRemoved = QInputEvent_Wrapper.ActionRemoved;
QInputEvent.FileOpen = QInputEvent_Wrapper.FileOpen;
QInputEvent.Shortcut = QInputEvent_Wrapper.Shortcut;
QInputEvent.ShortcutOverride = QInputEvent_Wrapper.ShortcutOverride;
QInputEvent.WhatsThisClicked = QInputEvent_Wrapper.WhatsThisClicked;
QInputEvent.ToolBarChange = QInputEvent_Wrapper.ToolBarChange;
QInputEvent.ApplicationActivate = QInputEvent_Wrapper.ApplicationActivate;
QInputEvent.ApplicationActivated = QInputEvent_Wrapper.ApplicationActivated;
QInputEvent.ApplicationDeactivate = QInputEvent_Wrapper.ApplicationDeactivate;
QInputEvent.ApplicationDeactivated = QInputEvent_Wrapper.ApplicationDeactivated;
QInputEvent.QueryWhatsThis = QInputEvent_Wrapper.QueryWhatsThis;
QInputEvent.EnterWhatsThisMode = QInputEvent_Wrapper.EnterWhatsThisMode;
QInputEvent.LeaveWhatsThisMode = QInputEvent_Wrapper.LeaveWhatsThisMode;
QInputEvent.ZOrderChange = QInputEvent_Wrapper.ZOrderChange;
QInputEvent.HoverEnter = QInputEvent_Wrapper.HoverEnter;
QInputEvent.HoverLeave = QInputEvent_Wrapper.HoverLeave;
QInputEvent.HoverMove = QInputEvent_Wrapper.HoverMove;
QInputEvent.AcceptDropsChange = QInputEvent_Wrapper.AcceptDropsChange;
QInputEvent.ZeroTimerEvent = QInputEvent_Wrapper.ZeroTimerEvent;
QInputEvent.GraphicsSceneMouseMove = QInputEvent_Wrapper.GraphicsSceneMouseMove;
QInputEvent.GraphicsSceneMousePress = QInputEvent_Wrapper.GraphicsSceneMousePress;
QInputEvent.GraphicsSceneMouseRelease = QInputEvent_Wrapper.GraphicsSceneMouseRelease;
QInputEvent.GraphicsSceneMouseDoubleClick = QInputEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QInputEvent.GraphicsSceneContextMenu = QInputEvent_Wrapper.GraphicsSceneContextMenu;
QInputEvent.GraphicsSceneHoverEnter = QInputEvent_Wrapper.GraphicsSceneHoverEnter;
QInputEvent.GraphicsSceneHoverMove = QInputEvent_Wrapper.GraphicsSceneHoverMove;
QInputEvent.GraphicsSceneHoverLeave = QInputEvent_Wrapper.GraphicsSceneHoverLeave;
QInputEvent.GraphicsSceneHelp = QInputEvent_Wrapper.GraphicsSceneHelp;
QInputEvent.GraphicsSceneDragEnter = QInputEvent_Wrapper.GraphicsSceneDragEnter;
QInputEvent.GraphicsSceneDragMove = QInputEvent_Wrapper.GraphicsSceneDragMove;
QInputEvent.GraphicsSceneDragLeave = QInputEvent_Wrapper.GraphicsSceneDragLeave;
QInputEvent.GraphicsSceneDrop = QInputEvent_Wrapper.GraphicsSceneDrop;
QInputEvent.GraphicsSceneWheel = QInputEvent_Wrapper.GraphicsSceneWheel;
QInputEvent.GraphicsSceneLeave = QInputEvent_Wrapper.GraphicsSceneLeave;
QInputEvent.KeyboardLayoutChange = QInputEvent_Wrapper.KeyboardLayoutChange;
QInputEvent.DynamicPropertyChange = QInputEvent_Wrapper.DynamicPropertyChange;
QInputEvent.TabletEnterProximity = QInputEvent_Wrapper.TabletEnterProximity;
QInputEvent.TabletLeaveProximity = QInputEvent_Wrapper.TabletLeaveProximity;
QInputEvent.NonClientAreaMouseMove = QInputEvent_Wrapper.NonClientAreaMouseMove;
QInputEvent.NonClientAreaMouseButtonPress = QInputEvent_Wrapper.NonClientAreaMouseButtonPress;
QInputEvent.NonClientAreaMouseButtonRelease = QInputEvent_Wrapper.NonClientAreaMouseButtonRelease;
QInputEvent.NonClientAreaMouseButtonDblClick = QInputEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QInputEvent.MacSizeChange = QInputEvent_Wrapper.MacSizeChange;
QInputEvent.ContentsRectChange = QInputEvent_Wrapper.ContentsRectChange;
QInputEvent.MacGLWindowChange = QInputEvent_Wrapper.MacGLWindowChange;
QInputEvent.FutureCallOut = QInputEvent_Wrapper.FutureCallOut;
QInputEvent.GraphicsSceneResize = QInputEvent_Wrapper.GraphicsSceneResize;
QInputEvent.GraphicsSceneMove = QInputEvent_Wrapper.GraphicsSceneMove;
QInputEvent.CursorChange = QInputEvent_Wrapper.CursorChange;
QInputEvent.ToolTipChange = QInputEvent_Wrapper.ToolTipChange;
QInputEvent.NetworkReplyUpdated = QInputEvent_Wrapper.NetworkReplyUpdated;
QInputEvent.GrabMouse = QInputEvent_Wrapper.GrabMouse;
QInputEvent.UngrabMouse = QInputEvent_Wrapper.UngrabMouse;
QInputEvent.GrabKeyboard = QInputEvent_Wrapper.GrabKeyboard;
QInputEvent.UngrabKeyboard = QInputEvent_Wrapper.UngrabKeyboard;
QInputEvent.StateMachineSignal = QInputEvent_Wrapper.StateMachineSignal;
QInputEvent.StateMachineWrapped = QInputEvent_Wrapper.StateMachineWrapped;
QInputEvent.TouchBegin = QInputEvent_Wrapper.TouchBegin;
QInputEvent.TouchUpdate = QInputEvent_Wrapper.TouchUpdate;
QInputEvent.TouchEnd = QInputEvent_Wrapper.TouchEnd;
QInputEvent.NativeGesture = QInputEvent_Wrapper.NativeGesture;
QInputEvent.RequestSoftwareInputPanel = QInputEvent_Wrapper.RequestSoftwareInputPanel;
QInputEvent.CloseSoftwareInputPanel = QInputEvent_Wrapper.CloseSoftwareInputPanel;
QInputEvent.WinIdChange = QInputEvent_Wrapper.WinIdChange;
QInputEvent.Gesture = QInputEvent_Wrapper.Gesture;
QInputEvent.GestureOverride = QInputEvent_Wrapper.GestureOverride;
QInputEvent.ScrollPrepare = QInputEvent_Wrapper.ScrollPrepare;
QInputEvent.Scroll = QInputEvent_Wrapper.Scroll;
QInputEvent.Expose = QInputEvent_Wrapper.Expose;
QInputEvent.InputMethodQuery = QInputEvent_Wrapper.InputMethodQuery;
QInputEvent.OrientationChange = QInputEvent_Wrapper.OrientationChange;
QInputEvent.TouchCancel = QInputEvent_Wrapper.TouchCancel;
QInputEvent.ThemeChange = QInputEvent_Wrapper.ThemeChange;
QInputEvent.SockClose = QInputEvent_Wrapper.SockClose;
QInputEvent.PlatformPanel = QInputEvent_Wrapper.PlatformPanel;
QInputEvent.StyleAnimationUpdate = QInputEvent_Wrapper.StyleAnimationUpdate;
QInputEvent.ApplicationStateChange = QInputEvent_Wrapper.ApplicationStateChange;
QInputEvent.WindowChangeInternal = QInputEvent_Wrapper.WindowChangeInternal;
QInputEvent.ScreenChangeInternal = QInputEvent_Wrapper.ScreenChangeInternal;
QInputEvent.PlatformSurface = QInputEvent_Wrapper.PlatformSurface;
QInputEvent.Pointer = QInputEvent_Wrapper.Pointer;
QInputEvent.TabletTrackingChange = QInputEvent_Wrapper.TabletTrackingChange;
QInputEvent.User = QInputEvent_Wrapper.User;
QInputEvent.MaxUser = QInputEvent_Wrapper.MaxUser;


      // functions:
      
        // function 
        QInputEvent.prototype.type = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.type");
          return this.__PROXY__.type(...args);
        };
    
        // function 
        QInputEvent.prototype.spontaneous = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.spontaneous");
          return this.__PROXY__.spontaneous(...args);
        };
    
        // function 
        QInputEvent.prototype.setAccepted = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.setAccepted");
          return this.__PROXY__.setAccepted(...args);
        };
    
        // function 
        QInputEvent.prototype.isAccepted = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.isAccepted");
          return this.__PROXY__.isAccepted(...args);
        };
    
        // function 
        QInputEvent.prototype.accept = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.accept");
          return this.__PROXY__.accept(...args);
        };
    
        // function 
        QInputEvent.prototype.ignore = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.ignore");
          return this.__PROXY__.ignore(...args);
        };
    
        // function 
        QInputEvent.prototype.isInputEvent = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.isInputEvent");
          return this.__PROXY__.isInputEvent(...args);
        };
    
        // function 
        QInputEvent.prototype.isPointerEvent = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.isPointerEvent");
          return this.__PROXY__.isPointerEvent(...args);
        };
    
        // function 
        QInputEvent.prototype.isSinglePointEvent = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.isSinglePointEvent");
          return this.__PROXY__.isSinglePointEvent(...args);
        };
    
        // function 
        QInputEvent.prototype.setSpontaneous = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.setSpontaneous");
          return this.__PROXY__.setSpontaneous(...args);
        };
    
        // function 
        QInputEvent.prototype.clone = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        QInputEvent.prototype.modifiers = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.modifiers");
          return this.__PROXY__.modifiers(...args);
        };
    
        // function 
        QInputEvent.prototype.setModifiers = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.setModifiers");
          return this.__PROXY__.setModifiers(...args);
        };
    
        // function 
        QInputEvent.prototype.timestamp = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.timestamp");
          return this.__PROXY__.timestamp(...args);
        };
    
        // function 
        QInputEvent.prototype.setTimestamp = function(...args) 
          
        {
          //print("JS: QInputEvent.prototype.setTimestamp");
          return this.__PROXY__.setTimestamp(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QInputEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QInputEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QInputEvent.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      