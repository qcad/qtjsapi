
      // auto generated
      //var self;

      // class constructor:
      function QFocusEvent() {
        

        // should be QFocusEvent_BaseJs.call(this, engine):
        //QFocusEvent.prototype = new QFocusEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFocusEvent.getIdStatic()))) {

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
            qWarning("QFocusEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QFocusEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFocusEvent);
  }

  
  else {
    
        print("QFocusEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
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

      //QFocusEvent.prototype = new QFocusEvent_BaseJs(engine);
      //QFocusEvent.prototype = new QFocusEvent_Wrapper(engine);
      QFocusEvent.prototype = new Object();

      QFocusEvent.prototype.toString = function() {
          //return "QFocusEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFocusEvent [JS]";
        };
      QFocusEvent.getObjectType = function() {
        return RJSType_QFocusEvent.getIdStatic();
      };

      QFocusEvent.prototype.getObjectType = function() {
        return RJSType_QFocusEvent.getIdStatic();
      };

      QFocusEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFocusEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QFocusEvent.None = QFocusEvent_Wrapper.None;
QFocusEvent.Timer = QFocusEvent_Wrapper.Timer;
QFocusEvent.MouseButtonPress = QFocusEvent_Wrapper.MouseButtonPress;
QFocusEvent.MouseButtonRelease = QFocusEvent_Wrapper.MouseButtonRelease;
QFocusEvent.MouseButtonDblClick = QFocusEvent_Wrapper.MouseButtonDblClick;
QFocusEvent.MouseMove = QFocusEvent_Wrapper.MouseMove;
QFocusEvent.KeyPress = QFocusEvent_Wrapper.KeyPress;
QFocusEvent.KeyRelease = QFocusEvent_Wrapper.KeyRelease;
QFocusEvent.FocusIn = QFocusEvent_Wrapper.FocusIn;
QFocusEvent.FocusOut = QFocusEvent_Wrapper.FocusOut;
QFocusEvent.FocusAboutToChange = QFocusEvent_Wrapper.FocusAboutToChange;
QFocusEvent.Enter = QFocusEvent_Wrapper.Enter;
QFocusEvent.Leave = QFocusEvent_Wrapper.Leave;
QFocusEvent.Paint = QFocusEvent_Wrapper.Paint;
QFocusEvent.Move = QFocusEvent_Wrapper.Move;
QFocusEvent.Resize = QFocusEvent_Wrapper.Resize;
QFocusEvent.Create = QFocusEvent_Wrapper.Create;
QFocusEvent.Destroy = QFocusEvent_Wrapper.Destroy;
QFocusEvent.Show = QFocusEvent_Wrapper.Show;
QFocusEvent.Hide = QFocusEvent_Wrapper.Hide;
QFocusEvent.Close = QFocusEvent_Wrapper.Close;
QFocusEvent.Quit = QFocusEvent_Wrapper.Quit;
QFocusEvent.ParentChange = QFocusEvent_Wrapper.ParentChange;
QFocusEvent.ParentAboutToChange = QFocusEvent_Wrapper.ParentAboutToChange;
QFocusEvent.ThreadChange = QFocusEvent_Wrapper.ThreadChange;
QFocusEvent.WindowActivate = QFocusEvent_Wrapper.WindowActivate;
QFocusEvent.WindowDeactivate = QFocusEvent_Wrapper.WindowDeactivate;
QFocusEvent.ShowToParent = QFocusEvent_Wrapper.ShowToParent;
QFocusEvent.HideToParent = QFocusEvent_Wrapper.HideToParent;
QFocusEvent.Wheel = QFocusEvent_Wrapper.Wheel;
QFocusEvent.WindowTitleChange = QFocusEvent_Wrapper.WindowTitleChange;
QFocusEvent.WindowIconChange = QFocusEvent_Wrapper.WindowIconChange;
QFocusEvent.ApplicationWindowIconChange = QFocusEvent_Wrapper.ApplicationWindowIconChange;
QFocusEvent.ApplicationFontChange = QFocusEvent_Wrapper.ApplicationFontChange;
QFocusEvent.ApplicationLayoutDirectionChange = QFocusEvent_Wrapper.ApplicationLayoutDirectionChange;
QFocusEvent.ApplicationPaletteChange = QFocusEvent_Wrapper.ApplicationPaletteChange;
QFocusEvent.PaletteChange = QFocusEvent_Wrapper.PaletteChange;
QFocusEvent.Clipboard = QFocusEvent_Wrapper.Clipboard;
QFocusEvent.Speech = QFocusEvent_Wrapper.Speech;
QFocusEvent.MetaCall = QFocusEvent_Wrapper.MetaCall;
QFocusEvent.SockAct = QFocusEvent_Wrapper.SockAct;
QFocusEvent.WinEventAct = QFocusEvent_Wrapper.WinEventAct;
QFocusEvent.DeferredDelete = QFocusEvent_Wrapper.DeferredDelete;
QFocusEvent.DragEnter = QFocusEvent_Wrapper.DragEnter;
QFocusEvent.DragMove = QFocusEvent_Wrapper.DragMove;
QFocusEvent.DragLeave = QFocusEvent_Wrapper.DragLeave;
QFocusEvent.Drop = QFocusEvent_Wrapper.Drop;
QFocusEvent.DragResponse = QFocusEvent_Wrapper.DragResponse;
QFocusEvent.ChildAdded = QFocusEvent_Wrapper.ChildAdded;
QFocusEvent.ChildPolished = QFocusEvent_Wrapper.ChildPolished;
QFocusEvent.ChildRemoved = QFocusEvent_Wrapper.ChildRemoved;
QFocusEvent.ShowWindowRequest = QFocusEvent_Wrapper.ShowWindowRequest;
QFocusEvent.PolishRequest = QFocusEvent_Wrapper.PolishRequest;
QFocusEvent.Polish = QFocusEvent_Wrapper.Polish;
QFocusEvent.LayoutRequest = QFocusEvent_Wrapper.LayoutRequest;
QFocusEvent.UpdateRequest = QFocusEvent_Wrapper.UpdateRequest;
QFocusEvent.UpdateLater = QFocusEvent_Wrapper.UpdateLater;
QFocusEvent.EmbeddingControl = QFocusEvent_Wrapper.EmbeddingControl;
QFocusEvent.ActivateControl = QFocusEvent_Wrapper.ActivateControl;
QFocusEvent.DeactivateControl = QFocusEvent_Wrapper.DeactivateControl;
QFocusEvent.ContextMenu = QFocusEvent_Wrapper.ContextMenu;
QFocusEvent.InputMethod = QFocusEvent_Wrapper.InputMethod;
QFocusEvent.TabletMove = QFocusEvent_Wrapper.TabletMove;
QFocusEvent.LocaleChange = QFocusEvent_Wrapper.LocaleChange;
QFocusEvent.LanguageChange = QFocusEvent_Wrapper.LanguageChange;
QFocusEvent.LayoutDirectionChange = QFocusEvent_Wrapper.LayoutDirectionChange;
QFocusEvent.Style = QFocusEvent_Wrapper.Style;
QFocusEvent.TabletPress = QFocusEvent_Wrapper.TabletPress;
QFocusEvent.TabletRelease = QFocusEvent_Wrapper.TabletRelease;
QFocusEvent.OkRequest = QFocusEvent_Wrapper.OkRequest;
QFocusEvent.HelpRequest = QFocusEvent_Wrapper.HelpRequest;
QFocusEvent.IconDrag = QFocusEvent_Wrapper.IconDrag;
QFocusEvent.FontChange = QFocusEvent_Wrapper.FontChange;
QFocusEvent.EnabledChange = QFocusEvent_Wrapper.EnabledChange;
QFocusEvent.ActivationChange = QFocusEvent_Wrapper.ActivationChange;
QFocusEvent.StyleChange = QFocusEvent_Wrapper.StyleChange;
QFocusEvent.IconTextChange = QFocusEvent_Wrapper.IconTextChange;
QFocusEvent.ModifiedChange = QFocusEvent_Wrapper.ModifiedChange;
QFocusEvent.MouseTrackingChange = QFocusEvent_Wrapper.MouseTrackingChange;
QFocusEvent.WindowBlocked = QFocusEvent_Wrapper.WindowBlocked;
QFocusEvent.WindowUnblocked = QFocusEvent_Wrapper.WindowUnblocked;
QFocusEvent.WindowStateChange = QFocusEvent_Wrapper.WindowStateChange;
QFocusEvent.ReadOnlyChange = QFocusEvent_Wrapper.ReadOnlyChange;
QFocusEvent.ToolTip = QFocusEvent_Wrapper.ToolTip;
QFocusEvent.WhatsThis = QFocusEvent_Wrapper.WhatsThis;
QFocusEvent.StatusTip = QFocusEvent_Wrapper.StatusTip;
QFocusEvent.ActionChanged = QFocusEvent_Wrapper.ActionChanged;
QFocusEvent.ActionAdded = QFocusEvent_Wrapper.ActionAdded;
QFocusEvent.ActionRemoved = QFocusEvent_Wrapper.ActionRemoved;
QFocusEvent.FileOpen = QFocusEvent_Wrapper.FileOpen;
QFocusEvent.Shortcut = QFocusEvent_Wrapper.Shortcut;
QFocusEvent.ShortcutOverride = QFocusEvent_Wrapper.ShortcutOverride;
QFocusEvent.WhatsThisClicked = QFocusEvent_Wrapper.WhatsThisClicked;
QFocusEvent.ToolBarChange = QFocusEvent_Wrapper.ToolBarChange;
QFocusEvent.ApplicationActivate = QFocusEvent_Wrapper.ApplicationActivate;
QFocusEvent.ApplicationActivated = QFocusEvent_Wrapper.ApplicationActivated;
QFocusEvent.ApplicationDeactivate = QFocusEvent_Wrapper.ApplicationDeactivate;
QFocusEvent.ApplicationDeactivated = QFocusEvent_Wrapper.ApplicationDeactivated;
QFocusEvent.QueryWhatsThis = QFocusEvent_Wrapper.QueryWhatsThis;
QFocusEvent.EnterWhatsThisMode = QFocusEvent_Wrapper.EnterWhatsThisMode;
QFocusEvent.LeaveWhatsThisMode = QFocusEvent_Wrapper.LeaveWhatsThisMode;
QFocusEvent.ZOrderChange = QFocusEvent_Wrapper.ZOrderChange;
QFocusEvent.HoverEnter = QFocusEvent_Wrapper.HoverEnter;
QFocusEvent.HoverLeave = QFocusEvent_Wrapper.HoverLeave;
QFocusEvent.HoverMove = QFocusEvent_Wrapper.HoverMove;
QFocusEvent.AcceptDropsChange = QFocusEvent_Wrapper.AcceptDropsChange;
QFocusEvent.ZeroTimerEvent = QFocusEvent_Wrapper.ZeroTimerEvent;
QFocusEvent.GraphicsSceneMouseMove = QFocusEvent_Wrapper.GraphicsSceneMouseMove;
QFocusEvent.GraphicsSceneMousePress = QFocusEvent_Wrapper.GraphicsSceneMousePress;
QFocusEvent.GraphicsSceneMouseRelease = QFocusEvent_Wrapper.GraphicsSceneMouseRelease;
QFocusEvent.GraphicsSceneMouseDoubleClick = QFocusEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QFocusEvent.GraphicsSceneContextMenu = QFocusEvent_Wrapper.GraphicsSceneContextMenu;
QFocusEvent.GraphicsSceneHoverEnter = QFocusEvent_Wrapper.GraphicsSceneHoverEnter;
QFocusEvent.GraphicsSceneHoverMove = QFocusEvent_Wrapper.GraphicsSceneHoverMove;
QFocusEvent.GraphicsSceneHoverLeave = QFocusEvent_Wrapper.GraphicsSceneHoverLeave;
QFocusEvent.GraphicsSceneHelp = QFocusEvent_Wrapper.GraphicsSceneHelp;
QFocusEvent.GraphicsSceneDragEnter = QFocusEvent_Wrapper.GraphicsSceneDragEnter;
QFocusEvent.GraphicsSceneDragMove = QFocusEvent_Wrapper.GraphicsSceneDragMove;
QFocusEvent.GraphicsSceneDragLeave = QFocusEvent_Wrapper.GraphicsSceneDragLeave;
QFocusEvent.GraphicsSceneDrop = QFocusEvent_Wrapper.GraphicsSceneDrop;
QFocusEvent.GraphicsSceneWheel = QFocusEvent_Wrapper.GraphicsSceneWheel;
QFocusEvent.GraphicsSceneLeave = QFocusEvent_Wrapper.GraphicsSceneLeave;
QFocusEvent.KeyboardLayoutChange = QFocusEvent_Wrapper.KeyboardLayoutChange;
QFocusEvent.DynamicPropertyChange = QFocusEvent_Wrapper.DynamicPropertyChange;
QFocusEvent.TabletEnterProximity = QFocusEvent_Wrapper.TabletEnterProximity;
QFocusEvent.TabletLeaveProximity = QFocusEvent_Wrapper.TabletLeaveProximity;
QFocusEvent.NonClientAreaMouseMove = QFocusEvent_Wrapper.NonClientAreaMouseMove;
QFocusEvent.NonClientAreaMouseButtonPress = QFocusEvent_Wrapper.NonClientAreaMouseButtonPress;
QFocusEvent.NonClientAreaMouseButtonRelease = QFocusEvent_Wrapper.NonClientAreaMouseButtonRelease;
QFocusEvent.NonClientAreaMouseButtonDblClick = QFocusEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QFocusEvent.MacSizeChange = QFocusEvent_Wrapper.MacSizeChange;
QFocusEvent.ContentsRectChange = QFocusEvent_Wrapper.ContentsRectChange;
QFocusEvent.MacGLWindowChange = QFocusEvent_Wrapper.MacGLWindowChange;
QFocusEvent.FutureCallOut = QFocusEvent_Wrapper.FutureCallOut;
QFocusEvent.GraphicsSceneResize = QFocusEvent_Wrapper.GraphicsSceneResize;
QFocusEvent.GraphicsSceneMove = QFocusEvent_Wrapper.GraphicsSceneMove;
QFocusEvent.CursorChange = QFocusEvent_Wrapper.CursorChange;
QFocusEvent.ToolTipChange = QFocusEvent_Wrapper.ToolTipChange;
QFocusEvent.NetworkReplyUpdated = QFocusEvent_Wrapper.NetworkReplyUpdated;
QFocusEvent.GrabMouse = QFocusEvent_Wrapper.GrabMouse;
QFocusEvent.UngrabMouse = QFocusEvent_Wrapper.UngrabMouse;
QFocusEvent.GrabKeyboard = QFocusEvent_Wrapper.GrabKeyboard;
QFocusEvent.UngrabKeyboard = QFocusEvent_Wrapper.UngrabKeyboard;
QFocusEvent.StateMachineSignal = QFocusEvent_Wrapper.StateMachineSignal;
QFocusEvent.StateMachineWrapped = QFocusEvent_Wrapper.StateMachineWrapped;
QFocusEvent.TouchBegin = QFocusEvent_Wrapper.TouchBegin;
QFocusEvent.TouchUpdate = QFocusEvent_Wrapper.TouchUpdate;
QFocusEvent.TouchEnd = QFocusEvent_Wrapper.TouchEnd;
QFocusEvent.NativeGesture = QFocusEvent_Wrapper.NativeGesture;
QFocusEvent.RequestSoftwareInputPanel = QFocusEvent_Wrapper.RequestSoftwareInputPanel;
QFocusEvent.CloseSoftwareInputPanel = QFocusEvent_Wrapper.CloseSoftwareInputPanel;
QFocusEvent.WinIdChange = QFocusEvent_Wrapper.WinIdChange;
QFocusEvent.Gesture = QFocusEvent_Wrapper.Gesture;
QFocusEvent.GestureOverride = QFocusEvent_Wrapper.GestureOverride;
QFocusEvent.ScrollPrepare = QFocusEvent_Wrapper.ScrollPrepare;
QFocusEvent.Scroll = QFocusEvent_Wrapper.Scroll;
QFocusEvent.Expose = QFocusEvent_Wrapper.Expose;
QFocusEvent.InputMethodQuery = QFocusEvent_Wrapper.InputMethodQuery;
QFocusEvent.OrientationChange = QFocusEvent_Wrapper.OrientationChange;
QFocusEvent.TouchCancel = QFocusEvent_Wrapper.TouchCancel;
QFocusEvent.ThemeChange = QFocusEvent_Wrapper.ThemeChange;
QFocusEvent.SockClose = QFocusEvent_Wrapper.SockClose;
QFocusEvent.PlatformPanel = QFocusEvent_Wrapper.PlatformPanel;
QFocusEvent.StyleAnimationUpdate = QFocusEvent_Wrapper.StyleAnimationUpdate;
QFocusEvent.ApplicationStateChange = QFocusEvent_Wrapper.ApplicationStateChange;
QFocusEvent.WindowChangeInternal = QFocusEvent_Wrapper.WindowChangeInternal;
QFocusEvent.ScreenChangeInternal = QFocusEvent_Wrapper.ScreenChangeInternal;
QFocusEvent.PlatformSurface = QFocusEvent_Wrapper.PlatformSurface;
QFocusEvent.Pointer = QFocusEvent_Wrapper.Pointer;
QFocusEvent.TabletTrackingChange = QFocusEvent_Wrapper.TabletTrackingChange;
QFocusEvent.User = QFocusEvent_Wrapper.User;
QFocusEvent.MaxUser = QFocusEvent_Wrapper.MaxUser;


      // functions:
      
        // function 
        QFocusEvent.prototype.type = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.type");
          return this.__PROXY__.type(...args);
        };
    
        // function 
        QFocusEvent.prototype.spontaneous = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.spontaneous");
          return this.__PROXY__.spontaneous(...args);
        };
    
        // function 
        QFocusEvent.prototype.setAccepted = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.setAccepted");
          return this.__PROXY__.setAccepted(...args);
        };
    
        // function 
        QFocusEvent.prototype.isAccepted = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.isAccepted");
          return this.__PROXY__.isAccepted(...args);
        };
    
        // function 
        QFocusEvent.prototype.accept = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.accept");
          return this.__PROXY__.accept(...args);
        };
    
        // function 
        QFocusEvent.prototype.ignore = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.ignore");
          return this.__PROXY__.ignore(...args);
        };
    
        // function 
        QFocusEvent.prototype.isInputEvent = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.isInputEvent");
          return this.__PROXY__.isInputEvent(...args);
        };
    
        // function 
        QFocusEvent.prototype.isPointerEvent = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.isPointerEvent");
          return this.__PROXY__.isPointerEvent(...args);
        };
    
        // function 
        QFocusEvent.prototype.isSinglePointEvent = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.isSinglePointEvent");
          return this.__PROXY__.isSinglePointEvent(...args);
        };
    
        // function 
        QFocusEvent.prototype.clone = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        QFocusEvent.prototype.setSpontaneous = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.setSpontaneous");
          return this.__PROXY__.setSpontaneous(...args);
        };
    
        // function 
        QFocusEvent.prototype.gotFocus = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.gotFocus");
          return this.__PROXY__.gotFocus(...args);
        };
    
        // function 
        QFocusEvent.prototype.lostFocus = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.lostFocus");
          return this.__PROXY__.lostFocus(...args);
        };
    
        // function 
        QFocusEvent.prototype.reason = function(...args) 
          
        {
          //print("JS: QFocusEvent.prototype.reason");
          return this.__PROXY__.reason(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFocusEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFocusEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFocusEvent.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      