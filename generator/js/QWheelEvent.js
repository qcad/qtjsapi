
      // auto generated
      //var self;

      // class constructor:
      function QWheelEvent() {
        

        // should be QWheelEvent_BaseJs.call(this, engine):
        //QWheelEvent.prototype = new QWheelEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QWheelEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QWheelEvent);
                
            //}
          }
          else {
            qWarning("QWheelEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 8 &&
          arguments.length <= 9) {
    
            self = this;
            wrapper = new QWheelEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QWheelEvent);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QWheelEvent);
  }

  
  else {
    
        print("QWheelEvent(): wrong number / type of arguments");
      
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

      //QWheelEvent.prototype = new QWheelEvent_BaseJs(engine);
      //QWheelEvent.prototype = new QWheelEvent_Wrapper(engine);
      QWheelEvent.prototype = new Object();

      QWheelEvent.prototype.toString = function() {
          //return "QWheelEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QWheelEvent [JS]";
        };
      QWheelEvent.getObjectType = function() {
        return RJSType_QWheelEvent.getIdStatic();
      };

      QWheelEvent.prototype.getObjectType = function() {
        return RJSType_QWheelEvent.getIdStatic();
      };

      QWheelEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QWheelEvent.getIdStatic()) {
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
QWheelEvent.None = QWheelEvent_Wrapper.None;
QWheelEvent.Timer = QWheelEvent_Wrapper.Timer;
QWheelEvent.MouseButtonPress = QWheelEvent_Wrapper.MouseButtonPress;
QWheelEvent.MouseButtonRelease = QWheelEvent_Wrapper.MouseButtonRelease;
QWheelEvent.MouseButtonDblClick = QWheelEvent_Wrapper.MouseButtonDblClick;
QWheelEvent.MouseMove = QWheelEvent_Wrapper.MouseMove;
QWheelEvent.KeyPress = QWheelEvent_Wrapper.KeyPress;
QWheelEvent.KeyRelease = QWheelEvent_Wrapper.KeyRelease;
QWheelEvent.FocusIn = QWheelEvent_Wrapper.FocusIn;
QWheelEvent.FocusOut = QWheelEvent_Wrapper.FocusOut;
QWheelEvent.FocusAboutToChange = QWheelEvent_Wrapper.FocusAboutToChange;
QWheelEvent.Enter = QWheelEvent_Wrapper.Enter;
QWheelEvent.Leave = QWheelEvent_Wrapper.Leave;
QWheelEvent.Paint = QWheelEvent_Wrapper.Paint;
QWheelEvent.Move = QWheelEvent_Wrapper.Move;
QWheelEvent.Resize = QWheelEvent_Wrapper.Resize;
QWheelEvent.Create = QWheelEvent_Wrapper.Create;
QWheelEvent.Destroy = QWheelEvent_Wrapper.Destroy;
QWheelEvent.Show = QWheelEvent_Wrapper.Show;
QWheelEvent.Hide = QWheelEvent_Wrapper.Hide;
QWheelEvent.Close = QWheelEvent_Wrapper.Close;
QWheelEvent.Quit = QWheelEvent_Wrapper.Quit;
QWheelEvent.ParentChange = QWheelEvent_Wrapper.ParentChange;
QWheelEvent.ParentAboutToChange = QWheelEvent_Wrapper.ParentAboutToChange;
QWheelEvent.ThreadChange = QWheelEvent_Wrapper.ThreadChange;
QWheelEvent.WindowActivate = QWheelEvent_Wrapper.WindowActivate;
QWheelEvent.WindowDeactivate = QWheelEvent_Wrapper.WindowDeactivate;
QWheelEvent.ShowToParent = QWheelEvent_Wrapper.ShowToParent;
QWheelEvent.HideToParent = QWheelEvent_Wrapper.HideToParent;
QWheelEvent.Wheel = QWheelEvent_Wrapper.Wheel;
QWheelEvent.WindowTitleChange = QWheelEvent_Wrapper.WindowTitleChange;
QWheelEvent.WindowIconChange = QWheelEvent_Wrapper.WindowIconChange;
QWheelEvent.ApplicationWindowIconChange = QWheelEvent_Wrapper.ApplicationWindowIconChange;
QWheelEvent.ApplicationFontChange = QWheelEvent_Wrapper.ApplicationFontChange;
QWheelEvent.ApplicationLayoutDirectionChange = QWheelEvent_Wrapper.ApplicationLayoutDirectionChange;
QWheelEvent.ApplicationPaletteChange = QWheelEvent_Wrapper.ApplicationPaletteChange;
QWheelEvent.PaletteChange = QWheelEvent_Wrapper.PaletteChange;
QWheelEvent.Clipboard = QWheelEvent_Wrapper.Clipboard;
QWheelEvent.Speech = QWheelEvent_Wrapper.Speech;
QWheelEvent.MetaCall = QWheelEvent_Wrapper.MetaCall;
QWheelEvent.SockAct = QWheelEvent_Wrapper.SockAct;
QWheelEvent.WinEventAct = QWheelEvent_Wrapper.WinEventAct;
QWheelEvent.DeferredDelete = QWheelEvent_Wrapper.DeferredDelete;
QWheelEvent.DragEnter = QWheelEvent_Wrapper.DragEnter;
QWheelEvent.DragMove = QWheelEvent_Wrapper.DragMove;
QWheelEvent.DragLeave = QWheelEvent_Wrapper.DragLeave;
QWheelEvent.Drop = QWheelEvent_Wrapper.Drop;
QWheelEvent.DragResponse = QWheelEvent_Wrapper.DragResponse;
QWheelEvent.ChildAdded = QWheelEvent_Wrapper.ChildAdded;
QWheelEvent.ChildPolished = QWheelEvent_Wrapper.ChildPolished;
QWheelEvent.ChildRemoved = QWheelEvent_Wrapper.ChildRemoved;
QWheelEvent.ShowWindowRequest = QWheelEvent_Wrapper.ShowWindowRequest;
QWheelEvent.PolishRequest = QWheelEvent_Wrapper.PolishRequest;
QWheelEvent.Polish = QWheelEvent_Wrapper.Polish;
QWheelEvent.LayoutRequest = QWheelEvent_Wrapper.LayoutRequest;
QWheelEvent.UpdateRequest = QWheelEvent_Wrapper.UpdateRequest;
QWheelEvent.UpdateLater = QWheelEvent_Wrapper.UpdateLater;
QWheelEvent.EmbeddingControl = QWheelEvent_Wrapper.EmbeddingControl;
QWheelEvent.ActivateControl = QWheelEvent_Wrapper.ActivateControl;
QWheelEvent.DeactivateControl = QWheelEvent_Wrapper.DeactivateControl;
QWheelEvent.ContextMenu = QWheelEvent_Wrapper.ContextMenu;
QWheelEvent.InputMethod = QWheelEvent_Wrapper.InputMethod;
QWheelEvent.TabletMove = QWheelEvent_Wrapper.TabletMove;
QWheelEvent.LocaleChange = QWheelEvent_Wrapper.LocaleChange;
QWheelEvent.LanguageChange = QWheelEvent_Wrapper.LanguageChange;
QWheelEvent.LayoutDirectionChange = QWheelEvent_Wrapper.LayoutDirectionChange;
QWheelEvent.Style = QWheelEvent_Wrapper.Style;
QWheelEvent.TabletPress = QWheelEvent_Wrapper.TabletPress;
QWheelEvent.TabletRelease = QWheelEvent_Wrapper.TabletRelease;
QWheelEvent.OkRequest = QWheelEvent_Wrapper.OkRequest;
QWheelEvent.HelpRequest = QWheelEvent_Wrapper.HelpRequest;
QWheelEvent.IconDrag = QWheelEvent_Wrapper.IconDrag;
QWheelEvent.FontChange = QWheelEvent_Wrapper.FontChange;
QWheelEvent.EnabledChange = QWheelEvent_Wrapper.EnabledChange;
QWheelEvent.ActivationChange = QWheelEvent_Wrapper.ActivationChange;
QWheelEvent.StyleChange = QWheelEvent_Wrapper.StyleChange;
QWheelEvent.IconTextChange = QWheelEvent_Wrapper.IconTextChange;
QWheelEvent.ModifiedChange = QWheelEvent_Wrapper.ModifiedChange;
QWheelEvent.MouseTrackingChange = QWheelEvent_Wrapper.MouseTrackingChange;
QWheelEvent.WindowBlocked = QWheelEvent_Wrapper.WindowBlocked;
QWheelEvent.WindowUnblocked = QWheelEvent_Wrapper.WindowUnblocked;
QWheelEvent.WindowStateChange = QWheelEvent_Wrapper.WindowStateChange;
QWheelEvent.ReadOnlyChange = QWheelEvent_Wrapper.ReadOnlyChange;
QWheelEvent.ToolTip = QWheelEvent_Wrapper.ToolTip;
QWheelEvent.WhatsThis = QWheelEvent_Wrapper.WhatsThis;
QWheelEvent.StatusTip = QWheelEvent_Wrapper.StatusTip;
QWheelEvent.ActionChanged = QWheelEvent_Wrapper.ActionChanged;
QWheelEvent.ActionAdded = QWheelEvent_Wrapper.ActionAdded;
QWheelEvent.ActionRemoved = QWheelEvent_Wrapper.ActionRemoved;
QWheelEvent.FileOpen = QWheelEvent_Wrapper.FileOpen;
QWheelEvent.Shortcut = QWheelEvent_Wrapper.Shortcut;
QWheelEvent.ShortcutOverride = QWheelEvent_Wrapper.ShortcutOverride;
QWheelEvent.WhatsThisClicked = QWheelEvent_Wrapper.WhatsThisClicked;
QWheelEvent.ToolBarChange = QWheelEvent_Wrapper.ToolBarChange;
QWheelEvent.ApplicationActivate = QWheelEvent_Wrapper.ApplicationActivate;
QWheelEvent.ApplicationActivated = QWheelEvent_Wrapper.ApplicationActivated;
QWheelEvent.ApplicationDeactivate = QWheelEvent_Wrapper.ApplicationDeactivate;
QWheelEvent.ApplicationDeactivated = QWheelEvent_Wrapper.ApplicationDeactivated;
QWheelEvent.QueryWhatsThis = QWheelEvent_Wrapper.QueryWhatsThis;
QWheelEvent.EnterWhatsThisMode = QWheelEvent_Wrapper.EnterWhatsThisMode;
QWheelEvent.LeaveWhatsThisMode = QWheelEvent_Wrapper.LeaveWhatsThisMode;
QWheelEvent.ZOrderChange = QWheelEvent_Wrapper.ZOrderChange;
QWheelEvent.HoverEnter = QWheelEvent_Wrapper.HoverEnter;
QWheelEvent.HoverLeave = QWheelEvent_Wrapper.HoverLeave;
QWheelEvent.HoverMove = QWheelEvent_Wrapper.HoverMove;
QWheelEvent.AcceptDropsChange = QWheelEvent_Wrapper.AcceptDropsChange;
QWheelEvent.ZeroTimerEvent = QWheelEvent_Wrapper.ZeroTimerEvent;
QWheelEvent.GraphicsSceneMouseMove = QWheelEvent_Wrapper.GraphicsSceneMouseMove;
QWheelEvent.GraphicsSceneMousePress = QWheelEvent_Wrapper.GraphicsSceneMousePress;
QWheelEvent.GraphicsSceneMouseRelease = QWheelEvent_Wrapper.GraphicsSceneMouseRelease;
QWheelEvent.GraphicsSceneMouseDoubleClick = QWheelEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QWheelEvent.GraphicsSceneContextMenu = QWheelEvent_Wrapper.GraphicsSceneContextMenu;
QWheelEvent.GraphicsSceneHoverEnter = QWheelEvent_Wrapper.GraphicsSceneHoverEnter;
QWheelEvent.GraphicsSceneHoverMove = QWheelEvent_Wrapper.GraphicsSceneHoverMove;
QWheelEvent.GraphicsSceneHoverLeave = QWheelEvent_Wrapper.GraphicsSceneHoverLeave;
QWheelEvent.GraphicsSceneHelp = QWheelEvent_Wrapper.GraphicsSceneHelp;
QWheelEvent.GraphicsSceneDragEnter = QWheelEvent_Wrapper.GraphicsSceneDragEnter;
QWheelEvent.GraphicsSceneDragMove = QWheelEvent_Wrapper.GraphicsSceneDragMove;
QWheelEvent.GraphicsSceneDragLeave = QWheelEvent_Wrapper.GraphicsSceneDragLeave;
QWheelEvent.GraphicsSceneDrop = QWheelEvent_Wrapper.GraphicsSceneDrop;
QWheelEvent.GraphicsSceneWheel = QWheelEvent_Wrapper.GraphicsSceneWheel;
QWheelEvent.GraphicsSceneLeave = QWheelEvent_Wrapper.GraphicsSceneLeave;
QWheelEvent.KeyboardLayoutChange = QWheelEvent_Wrapper.KeyboardLayoutChange;
QWheelEvent.DynamicPropertyChange = QWheelEvent_Wrapper.DynamicPropertyChange;
QWheelEvent.TabletEnterProximity = QWheelEvent_Wrapper.TabletEnterProximity;
QWheelEvent.TabletLeaveProximity = QWheelEvent_Wrapper.TabletLeaveProximity;
QWheelEvent.NonClientAreaMouseMove = QWheelEvent_Wrapper.NonClientAreaMouseMove;
QWheelEvent.NonClientAreaMouseButtonPress = QWheelEvent_Wrapper.NonClientAreaMouseButtonPress;
QWheelEvent.NonClientAreaMouseButtonRelease = QWheelEvent_Wrapper.NonClientAreaMouseButtonRelease;
QWheelEvent.NonClientAreaMouseButtonDblClick = QWheelEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QWheelEvent.MacSizeChange = QWheelEvent_Wrapper.MacSizeChange;
QWheelEvent.ContentsRectChange = QWheelEvent_Wrapper.ContentsRectChange;
QWheelEvent.MacGLWindowChange = QWheelEvent_Wrapper.MacGLWindowChange;
QWheelEvent.FutureCallOut = QWheelEvent_Wrapper.FutureCallOut;
QWheelEvent.GraphicsSceneResize = QWheelEvent_Wrapper.GraphicsSceneResize;
QWheelEvent.GraphicsSceneMove = QWheelEvent_Wrapper.GraphicsSceneMove;
QWheelEvent.CursorChange = QWheelEvent_Wrapper.CursorChange;
QWheelEvent.ToolTipChange = QWheelEvent_Wrapper.ToolTipChange;
QWheelEvent.NetworkReplyUpdated = QWheelEvent_Wrapper.NetworkReplyUpdated;
QWheelEvent.GrabMouse = QWheelEvent_Wrapper.GrabMouse;
QWheelEvent.UngrabMouse = QWheelEvent_Wrapper.UngrabMouse;
QWheelEvent.GrabKeyboard = QWheelEvent_Wrapper.GrabKeyboard;
QWheelEvent.UngrabKeyboard = QWheelEvent_Wrapper.UngrabKeyboard;
QWheelEvent.StateMachineSignal = QWheelEvent_Wrapper.StateMachineSignal;
QWheelEvent.StateMachineWrapped = QWheelEvent_Wrapper.StateMachineWrapped;
QWheelEvent.TouchBegin = QWheelEvent_Wrapper.TouchBegin;
QWheelEvent.TouchUpdate = QWheelEvent_Wrapper.TouchUpdate;
QWheelEvent.TouchEnd = QWheelEvent_Wrapper.TouchEnd;
QWheelEvent.NativeGesture = QWheelEvent_Wrapper.NativeGesture;
QWheelEvent.RequestSoftwareInputPanel = QWheelEvent_Wrapper.RequestSoftwareInputPanel;
QWheelEvent.CloseSoftwareInputPanel = QWheelEvent_Wrapper.CloseSoftwareInputPanel;
QWheelEvent.WinIdChange = QWheelEvent_Wrapper.WinIdChange;
QWheelEvent.Gesture = QWheelEvent_Wrapper.Gesture;
QWheelEvent.GestureOverride = QWheelEvent_Wrapper.GestureOverride;
QWheelEvent.ScrollPrepare = QWheelEvent_Wrapper.ScrollPrepare;
QWheelEvent.Scroll = QWheelEvent_Wrapper.Scroll;
QWheelEvent.Expose = QWheelEvent_Wrapper.Expose;
QWheelEvent.InputMethodQuery = QWheelEvent_Wrapper.InputMethodQuery;
QWheelEvent.OrientationChange = QWheelEvent_Wrapper.OrientationChange;
QWheelEvent.TouchCancel = QWheelEvent_Wrapper.TouchCancel;
QWheelEvent.ThemeChange = QWheelEvent_Wrapper.ThemeChange;
QWheelEvent.SockClose = QWheelEvent_Wrapper.SockClose;
QWheelEvent.PlatformPanel = QWheelEvent_Wrapper.PlatformPanel;
QWheelEvent.StyleAnimationUpdate = QWheelEvent_Wrapper.StyleAnimationUpdate;
QWheelEvent.ApplicationStateChange = QWheelEvent_Wrapper.ApplicationStateChange;
QWheelEvent.WindowChangeInternal = QWheelEvent_Wrapper.WindowChangeInternal;
QWheelEvent.ScreenChangeInternal = QWheelEvent_Wrapper.ScreenChangeInternal;
QWheelEvent.PlatformSurface = QWheelEvent_Wrapper.PlatformSurface;
QWheelEvent.Pointer = QWheelEvent_Wrapper.Pointer;
QWheelEvent.TabletTrackingChange = QWheelEvent_Wrapper.TabletTrackingChange;
QWheelEvent.User = QWheelEvent_Wrapper.User;
QWheelEvent.MaxUser = QWheelEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QWheelEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QWheelEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      