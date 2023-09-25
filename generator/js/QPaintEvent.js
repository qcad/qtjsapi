
      // auto generated
      //var self;

      // class constructor:
      function QPaintEvent() {
        

        // should be QPaintEvent_BaseJs.call(this, engine):
        //QPaintEvent.prototype = new QPaintEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPaintEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPaintEvent);
            //}
          }
          else {
            qWarning("QPaintEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPaintEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPaintEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPaintEvent);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPaintEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPaintEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPaintEvent);
  }

  
  else {
    
        print("QPaintEvent(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //QPaintEvent.prototype = new QPaintEvent_BaseJs(engine);
      //QPaintEvent.prototype = new QPaintEvent_Wrapper(engine);
      QPaintEvent.prototype = new Object();

      QPaintEvent.prototype.toString = function() {
          //return "QPaintEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPaintEvent [JS]";
        };
      QPaintEvent.getObjectType = function() {
        return RJSType_QPaintEvent.getIdStatic();
      };

      QPaintEvent.prototype.getObjectType = function() {
        return RJSType_QPaintEvent.getIdStatic();
      };

      QPaintEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPaintEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QPaintEvent.None = QPaintEvent_Wrapper.None;
QPaintEvent.Timer = QPaintEvent_Wrapper.Timer;
QPaintEvent.MouseButtonPress = QPaintEvent_Wrapper.MouseButtonPress;
QPaintEvent.MouseButtonRelease = QPaintEvent_Wrapper.MouseButtonRelease;
QPaintEvent.MouseButtonDblClick = QPaintEvent_Wrapper.MouseButtonDblClick;
QPaintEvent.MouseMove = QPaintEvent_Wrapper.MouseMove;
QPaintEvent.KeyPress = QPaintEvent_Wrapper.KeyPress;
QPaintEvent.KeyRelease = QPaintEvent_Wrapper.KeyRelease;
QPaintEvent.FocusIn = QPaintEvent_Wrapper.FocusIn;
QPaintEvent.FocusOut = QPaintEvent_Wrapper.FocusOut;
QPaintEvent.FocusAboutToChange = QPaintEvent_Wrapper.FocusAboutToChange;
QPaintEvent.Enter = QPaintEvent_Wrapper.Enter;
QPaintEvent.Leave = QPaintEvent_Wrapper.Leave;
QPaintEvent.Paint = QPaintEvent_Wrapper.Paint;
QPaintEvent.Move = QPaintEvent_Wrapper.Move;
QPaintEvent.Resize = QPaintEvent_Wrapper.Resize;
QPaintEvent.Create = QPaintEvent_Wrapper.Create;
QPaintEvent.Destroy = QPaintEvent_Wrapper.Destroy;
QPaintEvent.Show = QPaintEvent_Wrapper.Show;
QPaintEvent.Hide = QPaintEvent_Wrapper.Hide;
QPaintEvent.Close = QPaintEvent_Wrapper.Close;
QPaintEvent.Quit = QPaintEvent_Wrapper.Quit;
QPaintEvent.ParentChange = QPaintEvent_Wrapper.ParentChange;
QPaintEvent.ParentAboutToChange = QPaintEvent_Wrapper.ParentAboutToChange;
QPaintEvent.ThreadChange = QPaintEvent_Wrapper.ThreadChange;
QPaintEvent.WindowActivate = QPaintEvent_Wrapper.WindowActivate;
QPaintEvent.WindowDeactivate = QPaintEvent_Wrapper.WindowDeactivate;
QPaintEvent.ShowToParent = QPaintEvent_Wrapper.ShowToParent;
QPaintEvent.HideToParent = QPaintEvent_Wrapper.HideToParent;
QPaintEvent.Wheel = QPaintEvent_Wrapper.Wheel;
QPaintEvent.WindowTitleChange = QPaintEvent_Wrapper.WindowTitleChange;
QPaintEvent.WindowIconChange = QPaintEvent_Wrapper.WindowIconChange;
QPaintEvent.ApplicationWindowIconChange = QPaintEvent_Wrapper.ApplicationWindowIconChange;
QPaintEvent.ApplicationFontChange = QPaintEvent_Wrapper.ApplicationFontChange;
QPaintEvent.ApplicationLayoutDirectionChange = QPaintEvent_Wrapper.ApplicationLayoutDirectionChange;
QPaintEvent.ApplicationPaletteChange = QPaintEvent_Wrapper.ApplicationPaletteChange;
QPaintEvent.PaletteChange = QPaintEvent_Wrapper.PaletteChange;
QPaintEvent.Clipboard = QPaintEvent_Wrapper.Clipboard;
QPaintEvent.Speech = QPaintEvent_Wrapper.Speech;
QPaintEvent.MetaCall = QPaintEvent_Wrapper.MetaCall;
QPaintEvent.SockAct = QPaintEvent_Wrapper.SockAct;
QPaintEvent.WinEventAct = QPaintEvent_Wrapper.WinEventAct;
QPaintEvent.DeferredDelete = QPaintEvent_Wrapper.DeferredDelete;
QPaintEvent.DragEnter = QPaintEvent_Wrapper.DragEnter;
QPaintEvent.DragMove = QPaintEvent_Wrapper.DragMove;
QPaintEvent.DragLeave = QPaintEvent_Wrapper.DragLeave;
QPaintEvent.Drop = QPaintEvent_Wrapper.Drop;
QPaintEvent.DragResponse = QPaintEvent_Wrapper.DragResponse;
QPaintEvent.ChildAdded = QPaintEvent_Wrapper.ChildAdded;
QPaintEvent.ChildPolished = QPaintEvent_Wrapper.ChildPolished;
QPaintEvent.ChildRemoved = QPaintEvent_Wrapper.ChildRemoved;
QPaintEvent.ShowWindowRequest = QPaintEvent_Wrapper.ShowWindowRequest;
QPaintEvent.PolishRequest = QPaintEvent_Wrapper.PolishRequest;
QPaintEvent.Polish = QPaintEvent_Wrapper.Polish;
QPaintEvent.LayoutRequest = QPaintEvent_Wrapper.LayoutRequest;
QPaintEvent.UpdateRequest = QPaintEvent_Wrapper.UpdateRequest;
QPaintEvent.UpdateLater = QPaintEvent_Wrapper.UpdateLater;
QPaintEvent.EmbeddingControl = QPaintEvent_Wrapper.EmbeddingControl;
QPaintEvent.ActivateControl = QPaintEvent_Wrapper.ActivateControl;
QPaintEvent.DeactivateControl = QPaintEvent_Wrapper.DeactivateControl;
QPaintEvent.ContextMenu = QPaintEvent_Wrapper.ContextMenu;
QPaintEvent.InputMethod = QPaintEvent_Wrapper.InputMethod;
QPaintEvent.TabletMove = QPaintEvent_Wrapper.TabletMove;
QPaintEvent.LocaleChange = QPaintEvent_Wrapper.LocaleChange;
QPaintEvent.LanguageChange = QPaintEvent_Wrapper.LanguageChange;
QPaintEvent.LayoutDirectionChange = QPaintEvent_Wrapper.LayoutDirectionChange;
QPaintEvent.Style = QPaintEvent_Wrapper.Style;
QPaintEvent.TabletPress = QPaintEvent_Wrapper.TabletPress;
QPaintEvent.TabletRelease = QPaintEvent_Wrapper.TabletRelease;
QPaintEvent.OkRequest = QPaintEvent_Wrapper.OkRequest;
QPaintEvent.HelpRequest = QPaintEvent_Wrapper.HelpRequest;
QPaintEvent.IconDrag = QPaintEvent_Wrapper.IconDrag;
QPaintEvent.FontChange = QPaintEvent_Wrapper.FontChange;
QPaintEvent.EnabledChange = QPaintEvent_Wrapper.EnabledChange;
QPaintEvent.ActivationChange = QPaintEvent_Wrapper.ActivationChange;
QPaintEvent.StyleChange = QPaintEvent_Wrapper.StyleChange;
QPaintEvent.IconTextChange = QPaintEvent_Wrapper.IconTextChange;
QPaintEvent.ModifiedChange = QPaintEvent_Wrapper.ModifiedChange;
QPaintEvent.MouseTrackingChange = QPaintEvent_Wrapper.MouseTrackingChange;
QPaintEvent.WindowBlocked = QPaintEvent_Wrapper.WindowBlocked;
QPaintEvent.WindowUnblocked = QPaintEvent_Wrapper.WindowUnblocked;
QPaintEvent.WindowStateChange = QPaintEvent_Wrapper.WindowStateChange;
QPaintEvent.ReadOnlyChange = QPaintEvent_Wrapper.ReadOnlyChange;
QPaintEvent.ToolTip = QPaintEvent_Wrapper.ToolTip;
QPaintEvent.WhatsThis = QPaintEvent_Wrapper.WhatsThis;
QPaintEvent.StatusTip = QPaintEvent_Wrapper.StatusTip;
QPaintEvent.ActionChanged = QPaintEvent_Wrapper.ActionChanged;
QPaintEvent.ActionAdded = QPaintEvent_Wrapper.ActionAdded;
QPaintEvent.ActionRemoved = QPaintEvent_Wrapper.ActionRemoved;
QPaintEvent.FileOpen = QPaintEvent_Wrapper.FileOpen;
QPaintEvent.Shortcut = QPaintEvent_Wrapper.Shortcut;
QPaintEvent.ShortcutOverride = QPaintEvent_Wrapper.ShortcutOverride;
QPaintEvent.WhatsThisClicked = QPaintEvent_Wrapper.WhatsThisClicked;
QPaintEvent.ToolBarChange = QPaintEvent_Wrapper.ToolBarChange;
QPaintEvent.ApplicationActivate = QPaintEvent_Wrapper.ApplicationActivate;
QPaintEvent.ApplicationActivated = QPaintEvent_Wrapper.ApplicationActivated;
QPaintEvent.ApplicationDeactivate = QPaintEvent_Wrapper.ApplicationDeactivate;
QPaintEvent.ApplicationDeactivated = QPaintEvent_Wrapper.ApplicationDeactivated;
QPaintEvent.QueryWhatsThis = QPaintEvent_Wrapper.QueryWhatsThis;
QPaintEvent.EnterWhatsThisMode = QPaintEvent_Wrapper.EnterWhatsThisMode;
QPaintEvent.LeaveWhatsThisMode = QPaintEvent_Wrapper.LeaveWhatsThisMode;
QPaintEvent.ZOrderChange = QPaintEvent_Wrapper.ZOrderChange;
QPaintEvent.HoverEnter = QPaintEvent_Wrapper.HoverEnter;
QPaintEvent.HoverLeave = QPaintEvent_Wrapper.HoverLeave;
QPaintEvent.HoverMove = QPaintEvent_Wrapper.HoverMove;
QPaintEvent.AcceptDropsChange = QPaintEvent_Wrapper.AcceptDropsChange;
QPaintEvent.ZeroTimerEvent = QPaintEvent_Wrapper.ZeroTimerEvent;
QPaintEvent.GraphicsSceneMouseMove = QPaintEvent_Wrapper.GraphicsSceneMouseMove;
QPaintEvent.GraphicsSceneMousePress = QPaintEvent_Wrapper.GraphicsSceneMousePress;
QPaintEvent.GraphicsSceneMouseRelease = QPaintEvent_Wrapper.GraphicsSceneMouseRelease;
QPaintEvent.GraphicsSceneMouseDoubleClick = QPaintEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QPaintEvent.GraphicsSceneContextMenu = QPaintEvent_Wrapper.GraphicsSceneContextMenu;
QPaintEvent.GraphicsSceneHoverEnter = QPaintEvent_Wrapper.GraphicsSceneHoverEnter;
QPaintEvent.GraphicsSceneHoverMove = QPaintEvent_Wrapper.GraphicsSceneHoverMove;
QPaintEvent.GraphicsSceneHoverLeave = QPaintEvent_Wrapper.GraphicsSceneHoverLeave;
QPaintEvent.GraphicsSceneHelp = QPaintEvent_Wrapper.GraphicsSceneHelp;
QPaintEvent.GraphicsSceneDragEnter = QPaintEvent_Wrapper.GraphicsSceneDragEnter;
QPaintEvent.GraphicsSceneDragMove = QPaintEvent_Wrapper.GraphicsSceneDragMove;
QPaintEvent.GraphicsSceneDragLeave = QPaintEvent_Wrapper.GraphicsSceneDragLeave;
QPaintEvent.GraphicsSceneDrop = QPaintEvent_Wrapper.GraphicsSceneDrop;
QPaintEvent.GraphicsSceneWheel = QPaintEvent_Wrapper.GraphicsSceneWheel;
QPaintEvent.GraphicsSceneLeave = QPaintEvent_Wrapper.GraphicsSceneLeave;
QPaintEvent.KeyboardLayoutChange = QPaintEvent_Wrapper.KeyboardLayoutChange;
QPaintEvent.DynamicPropertyChange = QPaintEvent_Wrapper.DynamicPropertyChange;
QPaintEvent.TabletEnterProximity = QPaintEvent_Wrapper.TabletEnterProximity;
QPaintEvent.TabletLeaveProximity = QPaintEvent_Wrapper.TabletLeaveProximity;
QPaintEvent.NonClientAreaMouseMove = QPaintEvent_Wrapper.NonClientAreaMouseMove;
QPaintEvent.NonClientAreaMouseButtonPress = QPaintEvent_Wrapper.NonClientAreaMouseButtonPress;
QPaintEvent.NonClientAreaMouseButtonRelease = QPaintEvent_Wrapper.NonClientAreaMouseButtonRelease;
QPaintEvent.NonClientAreaMouseButtonDblClick = QPaintEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QPaintEvent.MacSizeChange = QPaintEvent_Wrapper.MacSizeChange;
QPaintEvent.ContentsRectChange = QPaintEvent_Wrapper.ContentsRectChange;
QPaintEvent.MacGLWindowChange = QPaintEvent_Wrapper.MacGLWindowChange;
QPaintEvent.FutureCallOut = QPaintEvent_Wrapper.FutureCallOut;
QPaintEvent.GraphicsSceneResize = QPaintEvent_Wrapper.GraphicsSceneResize;
QPaintEvent.GraphicsSceneMove = QPaintEvent_Wrapper.GraphicsSceneMove;
QPaintEvent.CursorChange = QPaintEvent_Wrapper.CursorChange;
QPaintEvent.ToolTipChange = QPaintEvent_Wrapper.ToolTipChange;
QPaintEvent.NetworkReplyUpdated = QPaintEvent_Wrapper.NetworkReplyUpdated;
QPaintEvent.GrabMouse = QPaintEvent_Wrapper.GrabMouse;
QPaintEvent.UngrabMouse = QPaintEvent_Wrapper.UngrabMouse;
QPaintEvent.GrabKeyboard = QPaintEvent_Wrapper.GrabKeyboard;
QPaintEvent.UngrabKeyboard = QPaintEvent_Wrapper.UngrabKeyboard;
QPaintEvent.StateMachineSignal = QPaintEvent_Wrapper.StateMachineSignal;
QPaintEvent.StateMachineWrapped = QPaintEvent_Wrapper.StateMachineWrapped;
QPaintEvent.TouchBegin = QPaintEvent_Wrapper.TouchBegin;
QPaintEvent.TouchUpdate = QPaintEvent_Wrapper.TouchUpdate;
QPaintEvent.TouchEnd = QPaintEvent_Wrapper.TouchEnd;
QPaintEvent.NativeGesture = QPaintEvent_Wrapper.NativeGesture;
QPaintEvent.RequestSoftwareInputPanel = QPaintEvent_Wrapper.RequestSoftwareInputPanel;
QPaintEvent.CloseSoftwareInputPanel = QPaintEvent_Wrapper.CloseSoftwareInputPanel;
QPaintEvent.WinIdChange = QPaintEvent_Wrapper.WinIdChange;
QPaintEvent.Gesture = QPaintEvent_Wrapper.Gesture;
QPaintEvent.GestureOverride = QPaintEvent_Wrapper.GestureOverride;
QPaintEvent.ScrollPrepare = QPaintEvent_Wrapper.ScrollPrepare;
QPaintEvent.Scroll = QPaintEvent_Wrapper.Scroll;
QPaintEvent.Expose = QPaintEvent_Wrapper.Expose;
QPaintEvent.InputMethodQuery = QPaintEvent_Wrapper.InputMethodQuery;
QPaintEvent.OrientationChange = QPaintEvent_Wrapper.OrientationChange;
QPaintEvent.TouchCancel = QPaintEvent_Wrapper.TouchCancel;
QPaintEvent.ThemeChange = QPaintEvent_Wrapper.ThemeChange;
QPaintEvent.SockClose = QPaintEvent_Wrapper.SockClose;
QPaintEvent.PlatformPanel = QPaintEvent_Wrapper.PlatformPanel;
QPaintEvent.StyleAnimationUpdate = QPaintEvent_Wrapper.StyleAnimationUpdate;
QPaintEvent.ApplicationStateChange = QPaintEvent_Wrapper.ApplicationStateChange;
QPaintEvent.WindowChangeInternal = QPaintEvent_Wrapper.WindowChangeInternal;
QPaintEvent.ScreenChangeInternal = QPaintEvent_Wrapper.ScreenChangeInternal;
QPaintEvent.PlatformSurface = QPaintEvent_Wrapper.PlatformSurface;
QPaintEvent.Pointer = QPaintEvent_Wrapper.Pointer;
QPaintEvent.TabletTrackingChange = QPaintEvent_Wrapper.TabletTrackingChange;
QPaintEvent.User = QPaintEvent_Wrapper.User;
QPaintEvent.MaxUser = QPaintEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        QPaintEvent.registerEventType = function() 
          
        {
          //print("JS: QPaintEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QPaintEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPaintEvent);
  }

  
  else {
    
        print("QPaintEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPaintEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPaintEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    