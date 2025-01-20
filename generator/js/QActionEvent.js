
      // auto generated
      //var self;

      // class constructor:
      function QActionEvent() {
        

        // should be QActionEvent_BaseJs.call(this, engine):
        //QActionEvent.prototype = new QActionEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QActionEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QActionEvent);
                
            //}
          }
          else {
            qWarning("QActionEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QActionEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QActionEvent);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QActionEvent);
  }

  
  else {
    
        print("QActionEvent(): wrong number / type of arguments");
      
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

      //QActionEvent.prototype = new QActionEvent_BaseJs(engine);
      //QActionEvent.prototype = new QActionEvent_Wrapper(engine);
      QActionEvent.prototype = new Object();

      QActionEvent.prototype.toString = function() {
          //return "QActionEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QActionEvent [JS]";
        };
      QActionEvent.getObjectType = function() {
        return RJSType_QActionEvent.getIdStatic();
      };

      QActionEvent.prototype.getObjectType = function() {
        return RJSType_QActionEvent.getIdStatic();
      };

      QActionEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QActionEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QActionEvent.None = QActionEvent_Wrapper.None;
QActionEvent.Timer = QActionEvent_Wrapper.Timer;
QActionEvent.MouseButtonPress = QActionEvent_Wrapper.MouseButtonPress;
QActionEvent.MouseButtonRelease = QActionEvent_Wrapper.MouseButtonRelease;
QActionEvent.MouseButtonDblClick = QActionEvent_Wrapper.MouseButtonDblClick;
QActionEvent.MouseMove = QActionEvent_Wrapper.MouseMove;
QActionEvent.KeyPress = QActionEvent_Wrapper.KeyPress;
QActionEvent.KeyRelease = QActionEvent_Wrapper.KeyRelease;
QActionEvent.FocusIn = QActionEvent_Wrapper.FocusIn;
QActionEvent.FocusOut = QActionEvent_Wrapper.FocusOut;
QActionEvent.FocusAboutToChange = QActionEvent_Wrapper.FocusAboutToChange;
QActionEvent.Enter = QActionEvent_Wrapper.Enter;
QActionEvent.Leave = QActionEvent_Wrapper.Leave;
QActionEvent.Paint = QActionEvent_Wrapper.Paint;
QActionEvent.Move = QActionEvent_Wrapper.Move;
QActionEvent.Resize = QActionEvent_Wrapper.Resize;
QActionEvent.Create = QActionEvent_Wrapper.Create;
QActionEvent.Destroy = QActionEvent_Wrapper.Destroy;
QActionEvent.Show = QActionEvent_Wrapper.Show;
QActionEvent.Hide = QActionEvent_Wrapper.Hide;
QActionEvent.Close = QActionEvent_Wrapper.Close;
QActionEvent.Quit = QActionEvent_Wrapper.Quit;
QActionEvent.ParentChange = QActionEvent_Wrapper.ParentChange;
QActionEvent.ParentAboutToChange = QActionEvent_Wrapper.ParentAboutToChange;
QActionEvent.ThreadChange = QActionEvent_Wrapper.ThreadChange;
QActionEvent.WindowActivate = QActionEvent_Wrapper.WindowActivate;
QActionEvent.WindowDeactivate = QActionEvent_Wrapper.WindowDeactivate;
QActionEvent.ShowToParent = QActionEvent_Wrapper.ShowToParent;
QActionEvent.HideToParent = QActionEvent_Wrapper.HideToParent;
QActionEvent.Wheel = QActionEvent_Wrapper.Wheel;
QActionEvent.WindowTitleChange = QActionEvent_Wrapper.WindowTitleChange;
QActionEvent.WindowIconChange = QActionEvent_Wrapper.WindowIconChange;
QActionEvent.ApplicationWindowIconChange = QActionEvent_Wrapper.ApplicationWindowIconChange;
QActionEvent.ApplicationFontChange = QActionEvent_Wrapper.ApplicationFontChange;
QActionEvent.ApplicationLayoutDirectionChange = QActionEvent_Wrapper.ApplicationLayoutDirectionChange;
QActionEvent.ApplicationPaletteChange = QActionEvent_Wrapper.ApplicationPaletteChange;
QActionEvent.PaletteChange = QActionEvent_Wrapper.PaletteChange;
QActionEvent.Clipboard = QActionEvent_Wrapper.Clipboard;
QActionEvent.Speech = QActionEvent_Wrapper.Speech;
QActionEvent.MetaCall = QActionEvent_Wrapper.MetaCall;
QActionEvent.SockAct = QActionEvent_Wrapper.SockAct;
QActionEvent.WinEventAct = QActionEvent_Wrapper.WinEventAct;
QActionEvent.DeferredDelete = QActionEvent_Wrapper.DeferredDelete;
QActionEvent.DragEnter = QActionEvent_Wrapper.DragEnter;
QActionEvent.DragMove = QActionEvent_Wrapper.DragMove;
QActionEvent.DragLeave = QActionEvent_Wrapper.DragLeave;
QActionEvent.Drop = QActionEvent_Wrapper.Drop;
QActionEvent.DragResponse = QActionEvent_Wrapper.DragResponse;
QActionEvent.ChildAdded = QActionEvent_Wrapper.ChildAdded;
QActionEvent.ChildPolished = QActionEvent_Wrapper.ChildPolished;
QActionEvent.ChildRemoved = QActionEvent_Wrapper.ChildRemoved;
QActionEvent.ShowWindowRequest = QActionEvent_Wrapper.ShowWindowRequest;
QActionEvent.PolishRequest = QActionEvent_Wrapper.PolishRequest;
QActionEvent.Polish = QActionEvent_Wrapper.Polish;
QActionEvent.LayoutRequest = QActionEvent_Wrapper.LayoutRequest;
QActionEvent.UpdateRequest = QActionEvent_Wrapper.UpdateRequest;
QActionEvent.UpdateLater = QActionEvent_Wrapper.UpdateLater;
QActionEvent.EmbeddingControl = QActionEvent_Wrapper.EmbeddingControl;
QActionEvent.ActivateControl = QActionEvent_Wrapper.ActivateControl;
QActionEvent.DeactivateControl = QActionEvent_Wrapper.DeactivateControl;
QActionEvent.ContextMenu = QActionEvent_Wrapper.ContextMenu;
QActionEvent.InputMethod = QActionEvent_Wrapper.InputMethod;
QActionEvent.TabletMove = QActionEvent_Wrapper.TabletMove;
QActionEvent.LocaleChange = QActionEvent_Wrapper.LocaleChange;
QActionEvent.LanguageChange = QActionEvent_Wrapper.LanguageChange;
QActionEvent.LayoutDirectionChange = QActionEvent_Wrapper.LayoutDirectionChange;
QActionEvent.Style = QActionEvent_Wrapper.Style;
QActionEvent.TabletPress = QActionEvent_Wrapper.TabletPress;
QActionEvent.TabletRelease = QActionEvent_Wrapper.TabletRelease;
QActionEvent.OkRequest = QActionEvent_Wrapper.OkRequest;
QActionEvent.HelpRequest = QActionEvent_Wrapper.HelpRequest;
QActionEvent.IconDrag = QActionEvent_Wrapper.IconDrag;
QActionEvent.FontChange = QActionEvent_Wrapper.FontChange;
QActionEvent.EnabledChange = QActionEvent_Wrapper.EnabledChange;
QActionEvent.ActivationChange = QActionEvent_Wrapper.ActivationChange;
QActionEvent.StyleChange = QActionEvent_Wrapper.StyleChange;
QActionEvent.IconTextChange = QActionEvent_Wrapper.IconTextChange;
QActionEvent.ModifiedChange = QActionEvent_Wrapper.ModifiedChange;
QActionEvent.MouseTrackingChange = QActionEvent_Wrapper.MouseTrackingChange;
QActionEvent.WindowBlocked = QActionEvent_Wrapper.WindowBlocked;
QActionEvent.WindowUnblocked = QActionEvent_Wrapper.WindowUnblocked;
QActionEvent.WindowStateChange = QActionEvent_Wrapper.WindowStateChange;
QActionEvent.ReadOnlyChange = QActionEvent_Wrapper.ReadOnlyChange;
QActionEvent.ToolTip = QActionEvent_Wrapper.ToolTip;
QActionEvent.WhatsThis = QActionEvent_Wrapper.WhatsThis;
QActionEvent.StatusTip = QActionEvent_Wrapper.StatusTip;
QActionEvent.ActionChanged = QActionEvent_Wrapper.ActionChanged;
QActionEvent.ActionAdded = QActionEvent_Wrapper.ActionAdded;
QActionEvent.ActionRemoved = QActionEvent_Wrapper.ActionRemoved;
QActionEvent.FileOpen = QActionEvent_Wrapper.FileOpen;
QActionEvent.Shortcut = QActionEvent_Wrapper.Shortcut;
QActionEvent.ShortcutOverride = QActionEvent_Wrapper.ShortcutOverride;
QActionEvent.WhatsThisClicked = QActionEvent_Wrapper.WhatsThisClicked;
QActionEvent.ToolBarChange = QActionEvent_Wrapper.ToolBarChange;
QActionEvent.ApplicationActivate = QActionEvent_Wrapper.ApplicationActivate;
QActionEvent.ApplicationActivated = QActionEvent_Wrapper.ApplicationActivated;
QActionEvent.ApplicationDeactivate = QActionEvent_Wrapper.ApplicationDeactivate;
QActionEvent.ApplicationDeactivated = QActionEvent_Wrapper.ApplicationDeactivated;
QActionEvent.QueryWhatsThis = QActionEvent_Wrapper.QueryWhatsThis;
QActionEvent.EnterWhatsThisMode = QActionEvent_Wrapper.EnterWhatsThisMode;
QActionEvent.LeaveWhatsThisMode = QActionEvent_Wrapper.LeaveWhatsThisMode;
QActionEvent.ZOrderChange = QActionEvent_Wrapper.ZOrderChange;
QActionEvent.HoverEnter = QActionEvent_Wrapper.HoverEnter;
QActionEvent.HoverLeave = QActionEvent_Wrapper.HoverLeave;
QActionEvent.HoverMove = QActionEvent_Wrapper.HoverMove;
QActionEvent.AcceptDropsChange = QActionEvent_Wrapper.AcceptDropsChange;
QActionEvent.ZeroTimerEvent = QActionEvent_Wrapper.ZeroTimerEvent;
QActionEvent.GraphicsSceneMouseMove = QActionEvent_Wrapper.GraphicsSceneMouseMove;
QActionEvent.GraphicsSceneMousePress = QActionEvent_Wrapper.GraphicsSceneMousePress;
QActionEvent.GraphicsSceneMouseRelease = QActionEvent_Wrapper.GraphicsSceneMouseRelease;
QActionEvent.GraphicsSceneMouseDoubleClick = QActionEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QActionEvent.GraphicsSceneContextMenu = QActionEvent_Wrapper.GraphicsSceneContextMenu;
QActionEvent.GraphicsSceneHoverEnter = QActionEvent_Wrapper.GraphicsSceneHoverEnter;
QActionEvent.GraphicsSceneHoverMove = QActionEvent_Wrapper.GraphicsSceneHoverMove;
QActionEvent.GraphicsSceneHoverLeave = QActionEvent_Wrapper.GraphicsSceneHoverLeave;
QActionEvent.GraphicsSceneHelp = QActionEvent_Wrapper.GraphicsSceneHelp;
QActionEvent.GraphicsSceneDragEnter = QActionEvent_Wrapper.GraphicsSceneDragEnter;
QActionEvent.GraphicsSceneDragMove = QActionEvent_Wrapper.GraphicsSceneDragMove;
QActionEvent.GraphicsSceneDragLeave = QActionEvent_Wrapper.GraphicsSceneDragLeave;
QActionEvent.GraphicsSceneDrop = QActionEvent_Wrapper.GraphicsSceneDrop;
QActionEvent.GraphicsSceneWheel = QActionEvent_Wrapper.GraphicsSceneWheel;
QActionEvent.GraphicsSceneLeave = QActionEvent_Wrapper.GraphicsSceneLeave;
QActionEvent.KeyboardLayoutChange = QActionEvent_Wrapper.KeyboardLayoutChange;
QActionEvent.DynamicPropertyChange = QActionEvent_Wrapper.DynamicPropertyChange;
QActionEvent.TabletEnterProximity = QActionEvent_Wrapper.TabletEnterProximity;
QActionEvent.TabletLeaveProximity = QActionEvent_Wrapper.TabletLeaveProximity;
QActionEvent.NonClientAreaMouseMove = QActionEvent_Wrapper.NonClientAreaMouseMove;
QActionEvent.NonClientAreaMouseButtonPress = QActionEvent_Wrapper.NonClientAreaMouseButtonPress;
QActionEvent.NonClientAreaMouseButtonRelease = QActionEvent_Wrapper.NonClientAreaMouseButtonRelease;
QActionEvent.NonClientAreaMouseButtonDblClick = QActionEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QActionEvent.MacSizeChange = QActionEvent_Wrapper.MacSizeChange;
QActionEvent.ContentsRectChange = QActionEvent_Wrapper.ContentsRectChange;
QActionEvent.MacGLWindowChange = QActionEvent_Wrapper.MacGLWindowChange;
QActionEvent.FutureCallOut = QActionEvent_Wrapper.FutureCallOut;
QActionEvent.GraphicsSceneResize = QActionEvent_Wrapper.GraphicsSceneResize;
QActionEvent.GraphicsSceneMove = QActionEvent_Wrapper.GraphicsSceneMove;
QActionEvent.CursorChange = QActionEvent_Wrapper.CursorChange;
QActionEvent.ToolTipChange = QActionEvent_Wrapper.ToolTipChange;
QActionEvent.NetworkReplyUpdated = QActionEvent_Wrapper.NetworkReplyUpdated;
QActionEvent.GrabMouse = QActionEvent_Wrapper.GrabMouse;
QActionEvent.UngrabMouse = QActionEvent_Wrapper.UngrabMouse;
QActionEvent.GrabKeyboard = QActionEvent_Wrapper.GrabKeyboard;
QActionEvent.UngrabKeyboard = QActionEvent_Wrapper.UngrabKeyboard;
QActionEvent.StateMachineSignal = QActionEvent_Wrapper.StateMachineSignal;
QActionEvent.StateMachineWrapped = QActionEvent_Wrapper.StateMachineWrapped;
QActionEvent.TouchBegin = QActionEvent_Wrapper.TouchBegin;
QActionEvent.TouchUpdate = QActionEvent_Wrapper.TouchUpdate;
QActionEvent.TouchEnd = QActionEvent_Wrapper.TouchEnd;
QActionEvent.NativeGesture = QActionEvent_Wrapper.NativeGesture;
QActionEvent.RequestSoftwareInputPanel = QActionEvent_Wrapper.RequestSoftwareInputPanel;
QActionEvent.CloseSoftwareInputPanel = QActionEvent_Wrapper.CloseSoftwareInputPanel;
QActionEvent.WinIdChange = QActionEvent_Wrapper.WinIdChange;
QActionEvent.Gesture = QActionEvent_Wrapper.Gesture;
QActionEvent.GestureOverride = QActionEvent_Wrapper.GestureOverride;
QActionEvent.ScrollPrepare = QActionEvent_Wrapper.ScrollPrepare;
QActionEvent.Scroll = QActionEvent_Wrapper.Scroll;
QActionEvent.Expose = QActionEvent_Wrapper.Expose;
QActionEvent.InputMethodQuery = QActionEvent_Wrapper.InputMethodQuery;
QActionEvent.OrientationChange = QActionEvent_Wrapper.OrientationChange;
QActionEvent.TouchCancel = QActionEvent_Wrapper.TouchCancel;
QActionEvent.ThemeChange = QActionEvent_Wrapper.ThemeChange;
QActionEvent.SockClose = QActionEvent_Wrapper.SockClose;
QActionEvent.PlatformPanel = QActionEvent_Wrapper.PlatformPanel;
QActionEvent.StyleAnimationUpdate = QActionEvent_Wrapper.StyleAnimationUpdate;
QActionEvent.ApplicationStateChange = QActionEvent_Wrapper.ApplicationStateChange;
QActionEvent.WindowChangeInternal = QActionEvent_Wrapper.WindowChangeInternal;
QActionEvent.ScreenChangeInternal = QActionEvent_Wrapper.ScreenChangeInternal;
QActionEvent.PlatformSurface = QActionEvent_Wrapper.PlatformSurface;
QActionEvent.Pointer = QActionEvent_Wrapper.Pointer;
QActionEvent.TabletTrackingChange = QActionEvent_Wrapper.TabletTrackingChange;
QActionEvent.User = QActionEvent_Wrapper.User;
QActionEvent.MaxUser = QActionEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QActionEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QActionEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      