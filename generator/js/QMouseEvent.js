
      // auto generated
      //var self;

      // class constructor:
      function QMouseEvent() {
        

        // should be QMouseEvent_BaseJs.call(this, engine):
        //QMouseEvent.prototype = new QMouseEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMouseEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QMouseEvent);
            //}
          }
          else {
            qWarning("QMouseEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 8) {
    
            self = this;
            wrapper = new QMouseEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMouseEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMouseEvent);
  }

  
  else 
  
      if (arguments.length == 7) {
    
            self = this;
            wrapper = new QMouseEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMouseEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMouseEvent);
  }

  
  else 
  
      if (arguments.length == 6) {
    
            self = this;
            wrapper = new QMouseEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMouseEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMouseEvent);
  }

  
  else {
    
        print("QMouseEvent(): wrong number / type of arguments");
      
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

      //QMouseEvent.prototype = new QMouseEvent_BaseJs(engine);
      //QMouseEvent.prototype = new QMouseEvent_Wrapper(engine);
      QMouseEvent.prototype = new Object();

      QMouseEvent.prototype.toString = function() {
          //return "QMouseEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMouseEvent [JS]";
        };
      QMouseEvent.getObjectType = function() {
        return RJSType_QMouseEvent.getIdStatic();
      };

      QMouseEvent.prototype.getObjectType = function() {
        return RJSType_QMouseEvent.getIdStatic();
      };

      QMouseEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMouseEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QInputEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPointerEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QSinglePointEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QMouseEvent.None = QMouseEvent_Wrapper.None;
QMouseEvent.Timer = QMouseEvent_Wrapper.Timer;
QMouseEvent.MouseButtonPress = QMouseEvent_Wrapper.MouseButtonPress;
QMouseEvent.MouseButtonRelease = QMouseEvent_Wrapper.MouseButtonRelease;
QMouseEvent.MouseButtonDblClick = QMouseEvent_Wrapper.MouseButtonDblClick;
QMouseEvent.MouseMove = QMouseEvent_Wrapper.MouseMove;
QMouseEvent.KeyPress = QMouseEvent_Wrapper.KeyPress;
QMouseEvent.KeyRelease = QMouseEvent_Wrapper.KeyRelease;
QMouseEvent.FocusIn = QMouseEvent_Wrapper.FocusIn;
QMouseEvent.FocusOut = QMouseEvent_Wrapper.FocusOut;
QMouseEvent.FocusAboutToChange = QMouseEvent_Wrapper.FocusAboutToChange;
QMouseEvent.Enter = QMouseEvent_Wrapper.Enter;
QMouseEvent.Leave = QMouseEvent_Wrapper.Leave;
QMouseEvent.Paint = QMouseEvent_Wrapper.Paint;
QMouseEvent.Move = QMouseEvent_Wrapper.Move;
QMouseEvent.Resize = QMouseEvent_Wrapper.Resize;
QMouseEvent.Create = QMouseEvent_Wrapper.Create;
QMouseEvent.Destroy = QMouseEvent_Wrapper.Destroy;
QMouseEvent.Show = QMouseEvent_Wrapper.Show;
QMouseEvent.Hide = QMouseEvent_Wrapper.Hide;
QMouseEvent.Close = QMouseEvent_Wrapper.Close;
QMouseEvent.Quit = QMouseEvent_Wrapper.Quit;
QMouseEvent.ParentChange = QMouseEvent_Wrapper.ParentChange;
QMouseEvent.ParentAboutToChange = QMouseEvent_Wrapper.ParentAboutToChange;
QMouseEvent.ThreadChange = QMouseEvent_Wrapper.ThreadChange;
QMouseEvent.WindowActivate = QMouseEvent_Wrapper.WindowActivate;
QMouseEvent.WindowDeactivate = QMouseEvent_Wrapper.WindowDeactivate;
QMouseEvent.ShowToParent = QMouseEvent_Wrapper.ShowToParent;
QMouseEvent.HideToParent = QMouseEvent_Wrapper.HideToParent;
QMouseEvent.Wheel = QMouseEvent_Wrapper.Wheel;
QMouseEvent.WindowTitleChange = QMouseEvent_Wrapper.WindowTitleChange;
QMouseEvent.WindowIconChange = QMouseEvent_Wrapper.WindowIconChange;
QMouseEvent.ApplicationWindowIconChange = QMouseEvent_Wrapper.ApplicationWindowIconChange;
QMouseEvent.ApplicationFontChange = QMouseEvent_Wrapper.ApplicationFontChange;
QMouseEvent.ApplicationLayoutDirectionChange = QMouseEvent_Wrapper.ApplicationLayoutDirectionChange;
QMouseEvent.ApplicationPaletteChange = QMouseEvent_Wrapper.ApplicationPaletteChange;
QMouseEvent.PaletteChange = QMouseEvent_Wrapper.PaletteChange;
QMouseEvent.Clipboard = QMouseEvent_Wrapper.Clipboard;
QMouseEvent.Speech = QMouseEvent_Wrapper.Speech;
QMouseEvent.MetaCall = QMouseEvent_Wrapper.MetaCall;
QMouseEvent.SockAct = QMouseEvent_Wrapper.SockAct;
QMouseEvent.WinEventAct = QMouseEvent_Wrapper.WinEventAct;
QMouseEvent.DeferredDelete = QMouseEvent_Wrapper.DeferredDelete;
QMouseEvent.DragEnter = QMouseEvent_Wrapper.DragEnter;
QMouseEvent.DragMove = QMouseEvent_Wrapper.DragMove;
QMouseEvent.DragLeave = QMouseEvent_Wrapper.DragLeave;
QMouseEvent.Drop = QMouseEvent_Wrapper.Drop;
QMouseEvent.DragResponse = QMouseEvent_Wrapper.DragResponse;
QMouseEvent.ChildAdded = QMouseEvent_Wrapper.ChildAdded;
QMouseEvent.ChildPolished = QMouseEvent_Wrapper.ChildPolished;
QMouseEvent.ChildRemoved = QMouseEvent_Wrapper.ChildRemoved;
QMouseEvent.ShowWindowRequest = QMouseEvent_Wrapper.ShowWindowRequest;
QMouseEvent.PolishRequest = QMouseEvent_Wrapper.PolishRequest;
QMouseEvent.Polish = QMouseEvent_Wrapper.Polish;
QMouseEvent.LayoutRequest = QMouseEvent_Wrapper.LayoutRequest;
QMouseEvent.UpdateRequest = QMouseEvent_Wrapper.UpdateRequest;
QMouseEvent.UpdateLater = QMouseEvent_Wrapper.UpdateLater;
QMouseEvent.EmbeddingControl = QMouseEvent_Wrapper.EmbeddingControl;
QMouseEvent.ActivateControl = QMouseEvent_Wrapper.ActivateControl;
QMouseEvent.DeactivateControl = QMouseEvent_Wrapper.DeactivateControl;
QMouseEvent.ContextMenu = QMouseEvent_Wrapper.ContextMenu;
QMouseEvent.InputMethod = QMouseEvent_Wrapper.InputMethod;
QMouseEvent.TabletMove = QMouseEvent_Wrapper.TabletMove;
QMouseEvent.LocaleChange = QMouseEvent_Wrapper.LocaleChange;
QMouseEvent.LanguageChange = QMouseEvent_Wrapper.LanguageChange;
QMouseEvent.LayoutDirectionChange = QMouseEvent_Wrapper.LayoutDirectionChange;
QMouseEvent.Style = QMouseEvent_Wrapper.Style;
QMouseEvent.TabletPress = QMouseEvent_Wrapper.TabletPress;
QMouseEvent.TabletRelease = QMouseEvent_Wrapper.TabletRelease;
QMouseEvent.OkRequest = QMouseEvent_Wrapper.OkRequest;
QMouseEvent.HelpRequest = QMouseEvent_Wrapper.HelpRequest;
QMouseEvent.IconDrag = QMouseEvent_Wrapper.IconDrag;
QMouseEvent.FontChange = QMouseEvent_Wrapper.FontChange;
QMouseEvent.EnabledChange = QMouseEvent_Wrapper.EnabledChange;
QMouseEvent.ActivationChange = QMouseEvent_Wrapper.ActivationChange;
QMouseEvent.StyleChange = QMouseEvent_Wrapper.StyleChange;
QMouseEvent.IconTextChange = QMouseEvent_Wrapper.IconTextChange;
QMouseEvent.ModifiedChange = QMouseEvent_Wrapper.ModifiedChange;
QMouseEvent.MouseTrackingChange = QMouseEvent_Wrapper.MouseTrackingChange;
QMouseEvent.WindowBlocked = QMouseEvent_Wrapper.WindowBlocked;
QMouseEvent.WindowUnblocked = QMouseEvent_Wrapper.WindowUnblocked;
QMouseEvent.WindowStateChange = QMouseEvent_Wrapper.WindowStateChange;
QMouseEvent.ReadOnlyChange = QMouseEvent_Wrapper.ReadOnlyChange;
QMouseEvent.ToolTip = QMouseEvent_Wrapper.ToolTip;
QMouseEvent.WhatsThis = QMouseEvent_Wrapper.WhatsThis;
QMouseEvent.StatusTip = QMouseEvent_Wrapper.StatusTip;
QMouseEvent.ActionChanged = QMouseEvent_Wrapper.ActionChanged;
QMouseEvent.ActionAdded = QMouseEvent_Wrapper.ActionAdded;
QMouseEvent.ActionRemoved = QMouseEvent_Wrapper.ActionRemoved;
QMouseEvent.FileOpen = QMouseEvent_Wrapper.FileOpen;
QMouseEvent.Shortcut = QMouseEvent_Wrapper.Shortcut;
QMouseEvent.ShortcutOverride = QMouseEvent_Wrapper.ShortcutOverride;
QMouseEvent.WhatsThisClicked = QMouseEvent_Wrapper.WhatsThisClicked;
QMouseEvent.ToolBarChange = QMouseEvent_Wrapper.ToolBarChange;
QMouseEvent.ApplicationActivate = QMouseEvent_Wrapper.ApplicationActivate;
QMouseEvent.ApplicationActivated = QMouseEvent_Wrapper.ApplicationActivated;
QMouseEvent.ApplicationDeactivate = QMouseEvent_Wrapper.ApplicationDeactivate;
QMouseEvent.ApplicationDeactivated = QMouseEvent_Wrapper.ApplicationDeactivated;
QMouseEvent.QueryWhatsThis = QMouseEvent_Wrapper.QueryWhatsThis;
QMouseEvent.EnterWhatsThisMode = QMouseEvent_Wrapper.EnterWhatsThisMode;
QMouseEvent.LeaveWhatsThisMode = QMouseEvent_Wrapper.LeaveWhatsThisMode;
QMouseEvent.ZOrderChange = QMouseEvent_Wrapper.ZOrderChange;
QMouseEvent.HoverEnter = QMouseEvent_Wrapper.HoverEnter;
QMouseEvent.HoverLeave = QMouseEvent_Wrapper.HoverLeave;
QMouseEvent.HoverMove = QMouseEvent_Wrapper.HoverMove;
QMouseEvent.AcceptDropsChange = QMouseEvent_Wrapper.AcceptDropsChange;
QMouseEvent.ZeroTimerEvent = QMouseEvent_Wrapper.ZeroTimerEvent;
QMouseEvent.GraphicsSceneMouseMove = QMouseEvent_Wrapper.GraphicsSceneMouseMove;
QMouseEvent.GraphicsSceneMousePress = QMouseEvent_Wrapper.GraphicsSceneMousePress;
QMouseEvent.GraphicsSceneMouseRelease = QMouseEvent_Wrapper.GraphicsSceneMouseRelease;
QMouseEvent.GraphicsSceneMouseDoubleClick = QMouseEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QMouseEvent.GraphicsSceneContextMenu = QMouseEvent_Wrapper.GraphicsSceneContextMenu;
QMouseEvent.GraphicsSceneHoverEnter = QMouseEvent_Wrapper.GraphicsSceneHoverEnter;
QMouseEvent.GraphicsSceneHoverMove = QMouseEvent_Wrapper.GraphicsSceneHoverMove;
QMouseEvent.GraphicsSceneHoverLeave = QMouseEvent_Wrapper.GraphicsSceneHoverLeave;
QMouseEvent.GraphicsSceneHelp = QMouseEvent_Wrapper.GraphicsSceneHelp;
QMouseEvent.GraphicsSceneDragEnter = QMouseEvent_Wrapper.GraphicsSceneDragEnter;
QMouseEvent.GraphicsSceneDragMove = QMouseEvent_Wrapper.GraphicsSceneDragMove;
QMouseEvent.GraphicsSceneDragLeave = QMouseEvent_Wrapper.GraphicsSceneDragLeave;
QMouseEvent.GraphicsSceneDrop = QMouseEvent_Wrapper.GraphicsSceneDrop;
QMouseEvent.GraphicsSceneWheel = QMouseEvent_Wrapper.GraphicsSceneWheel;
QMouseEvent.GraphicsSceneLeave = QMouseEvent_Wrapper.GraphicsSceneLeave;
QMouseEvent.KeyboardLayoutChange = QMouseEvent_Wrapper.KeyboardLayoutChange;
QMouseEvent.DynamicPropertyChange = QMouseEvent_Wrapper.DynamicPropertyChange;
QMouseEvent.TabletEnterProximity = QMouseEvent_Wrapper.TabletEnterProximity;
QMouseEvent.TabletLeaveProximity = QMouseEvent_Wrapper.TabletLeaveProximity;
QMouseEvent.NonClientAreaMouseMove = QMouseEvent_Wrapper.NonClientAreaMouseMove;
QMouseEvent.NonClientAreaMouseButtonPress = QMouseEvent_Wrapper.NonClientAreaMouseButtonPress;
QMouseEvent.NonClientAreaMouseButtonRelease = QMouseEvent_Wrapper.NonClientAreaMouseButtonRelease;
QMouseEvent.NonClientAreaMouseButtonDblClick = QMouseEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QMouseEvent.MacSizeChange = QMouseEvent_Wrapper.MacSizeChange;
QMouseEvent.ContentsRectChange = QMouseEvent_Wrapper.ContentsRectChange;
QMouseEvent.MacGLWindowChange = QMouseEvent_Wrapper.MacGLWindowChange;
QMouseEvent.FutureCallOut = QMouseEvent_Wrapper.FutureCallOut;
QMouseEvent.GraphicsSceneResize = QMouseEvent_Wrapper.GraphicsSceneResize;
QMouseEvent.GraphicsSceneMove = QMouseEvent_Wrapper.GraphicsSceneMove;
QMouseEvent.CursorChange = QMouseEvent_Wrapper.CursorChange;
QMouseEvent.ToolTipChange = QMouseEvent_Wrapper.ToolTipChange;
QMouseEvent.NetworkReplyUpdated = QMouseEvent_Wrapper.NetworkReplyUpdated;
QMouseEvent.GrabMouse = QMouseEvent_Wrapper.GrabMouse;
QMouseEvent.UngrabMouse = QMouseEvent_Wrapper.UngrabMouse;
QMouseEvent.GrabKeyboard = QMouseEvent_Wrapper.GrabKeyboard;
QMouseEvent.UngrabKeyboard = QMouseEvent_Wrapper.UngrabKeyboard;
QMouseEvent.StateMachineSignal = QMouseEvent_Wrapper.StateMachineSignal;
QMouseEvent.StateMachineWrapped = QMouseEvent_Wrapper.StateMachineWrapped;
QMouseEvent.TouchBegin = QMouseEvent_Wrapper.TouchBegin;
QMouseEvent.TouchUpdate = QMouseEvent_Wrapper.TouchUpdate;
QMouseEvent.TouchEnd = QMouseEvent_Wrapper.TouchEnd;
QMouseEvent.NativeGesture = QMouseEvent_Wrapper.NativeGesture;
QMouseEvent.RequestSoftwareInputPanel = QMouseEvent_Wrapper.RequestSoftwareInputPanel;
QMouseEvent.CloseSoftwareInputPanel = QMouseEvent_Wrapper.CloseSoftwareInputPanel;
QMouseEvent.WinIdChange = QMouseEvent_Wrapper.WinIdChange;
QMouseEvent.Gesture = QMouseEvent_Wrapper.Gesture;
QMouseEvent.GestureOverride = QMouseEvent_Wrapper.GestureOverride;
QMouseEvent.ScrollPrepare = QMouseEvent_Wrapper.ScrollPrepare;
QMouseEvent.Scroll = QMouseEvent_Wrapper.Scroll;
QMouseEvent.Expose = QMouseEvent_Wrapper.Expose;
QMouseEvent.InputMethodQuery = QMouseEvent_Wrapper.InputMethodQuery;
QMouseEvent.OrientationChange = QMouseEvent_Wrapper.OrientationChange;
QMouseEvent.TouchCancel = QMouseEvent_Wrapper.TouchCancel;
QMouseEvent.ThemeChange = QMouseEvent_Wrapper.ThemeChange;
QMouseEvent.SockClose = QMouseEvent_Wrapper.SockClose;
QMouseEvent.PlatformPanel = QMouseEvent_Wrapper.PlatformPanel;
QMouseEvent.StyleAnimationUpdate = QMouseEvent_Wrapper.StyleAnimationUpdate;
QMouseEvent.ApplicationStateChange = QMouseEvent_Wrapper.ApplicationStateChange;
QMouseEvent.WindowChangeInternal = QMouseEvent_Wrapper.WindowChangeInternal;
QMouseEvent.ScreenChangeInternal = QMouseEvent_Wrapper.ScreenChangeInternal;
QMouseEvent.PlatformSurface = QMouseEvent_Wrapper.PlatformSurface;
QMouseEvent.Pointer = QMouseEvent_Wrapper.Pointer;
QMouseEvent.TabletTrackingChange = QMouseEvent_Wrapper.TabletTrackingChange;
QMouseEvent.User = QMouseEvent_Wrapper.User;
QMouseEvent.MaxUser = QMouseEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        QMouseEvent.registerEventType = function() 
          
        {
          //print("JS: QMouseEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QMouseEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QMouseEvent);
  }

  
  else {
    
        print("QMouseEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMouseEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMouseEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    