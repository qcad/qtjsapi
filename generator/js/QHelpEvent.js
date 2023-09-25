
      // auto generated
      //var self;

      // class constructor:
      function QHelpEvent() {
        

        // should be QHelpEvent_BaseJs.call(this, engine):
        //QHelpEvent.prototype = new QHelpEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QHelpEvent);
            //}
          }
          else {
            qWarning("QHelpEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QHelpEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QHelpEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHelpEvent);
  }

  
  else {
    
        print("QHelpEvent(): wrong number / type of arguments");
      
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

      //QHelpEvent.prototype = new QHelpEvent_BaseJs(engine);
      //QHelpEvent.prototype = new QHelpEvent_Wrapper(engine);
      QHelpEvent.prototype = new Object();

      QHelpEvent.prototype.toString = function() {
          //return "QHelpEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpEvent [JS]";
        };
      QHelpEvent.getObjectType = function() {
        return RJSType_QHelpEvent.getIdStatic();
      };

      QHelpEvent.prototype.getObjectType = function() {
        return RJSType_QHelpEvent.getIdStatic();
      };

      QHelpEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QHelpEvent.None = QHelpEvent_Wrapper.None;
QHelpEvent.Timer = QHelpEvent_Wrapper.Timer;
QHelpEvent.MouseButtonPress = QHelpEvent_Wrapper.MouseButtonPress;
QHelpEvent.MouseButtonRelease = QHelpEvent_Wrapper.MouseButtonRelease;
QHelpEvent.MouseButtonDblClick = QHelpEvent_Wrapper.MouseButtonDblClick;
QHelpEvent.MouseMove = QHelpEvent_Wrapper.MouseMove;
QHelpEvent.KeyPress = QHelpEvent_Wrapper.KeyPress;
QHelpEvent.KeyRelease = QHelpEvent_Wrapper.KeyRelease;
QHelpEvent.FocusIn = QHelpEvent_Wrapper.FocusIn;
QHelpEvent.FocusOut = QHelpEvent_Wrapper.FocusOut;
QHelpEvent.FocusAboutToChange = QHelpEvent_Wrapper.FocusAboutToChange;
QHelpEvent.Enter = QHelpEvent_Wrapper.Enter;
QHelpEvent.Leave = QHelpEvent_Wrapper.Leave;
QHelpEvent.Paint = QHelpEvent_Wrapper.Paint;
QHelpEvent.Move = QHelpEvent_Wrapper.Move;
QHelpEvent.Resize = QHelpEvent_Wrapper.Resize;
QHelpEvent.Create = QHelpEvent_Wrapper.Create;
QHelpEvent.Destroy = QHelpEvent_Wrapper.Destroy;
QHelpEvent.Show = QHelpEvent_Wrapper.Show;
QHelpEvent.Hide = QHelpEvent_Wrapper.Hide;
QHelpEvent.Close = QHelpEvent_Wrapper.Close;
QHelpEvent.Quit = QHelpEvent_Wrapper.Quit;
QHelpEvent.ParentChange = QHelpEvent_Wrapper.ParentChange;
QHelpEvent.ParentAboutToChange = QHelpEvent_Wrapper.ParentAboutToChange;
QHelpEvent.ThreadChange = QHelpEvent_Wrapper.ThreadChange;
QHelpEvent.WindowActivate = QHelpEvent_Wrapper.WindowActivate;
QHelpEvent.WindowDeactivate = QHelpEvent_Wrapper.WindowDeactivate;
QHelpEvent.ShowToParent = QHelpEvent_Wrapper.ShowToParent;
QHelpEvent.HideToParent = QHelpEvent_Wrapper.HideToParent;
QHelpEvent.Wheel = QHelpEvent_Wrapper.Wheel;
QHelpEvent.WindowTitleChange = QHelpEvent_Wrapper.WindowTitleChange;
QHelpEvent.WindowIconChange = QHelpEvent_Wrapper.WindowIconChange;
QHelpEvent.ApplicationWindowIconChange = QHelpEvent_Wrapper.ApplicationWindowIconChange;
QHelpEvent.ApplicationFontChange = QHelpEvent_Wrapper.ApplicationFontChange;
QHelpEvent.ApplicationLayoutDirectionChange = QHelpEvent_Wrapper.ApplicationLayoutDirectionChange;
QHelpEvent.ApplicationPaletteChange = QHelpEvent_Wrapper.ApplicationPaletteChange;
QHelpEvent.PaletteChange = QHelpEvent_Wrapper.PaletteChange;
QHelpEvent.Clipboard = QHelpEvent_Wrapper.Clipboard;
QHelpEvent.Speech = QHelpEvent_Wrapper.Speech;
QHelpEvent.MetaCall = QHelpEvent_Wrapper.MetaCall;
QHelpEvent.SockAct = QHelpEvent_Wrapper.SockAct;
QHelpEvent.WinEventAct = QHelpEvent_Wrapper.WinEventAct;
QHelpEvent.DeferredDelete = QHelpEvent_Wrapper.DeferredDelete;
QHelpEvent.DragEnter = QHelpEvent_Wrapper.DragEnter;
QHelpEvent.DragMove = QHelpEvent_Wrapper.DragMove;
QHelpEvent.DragLeave = QHelpEvent_Wrapper.DragLeave;
QHelpEvent.Drop = QHelpEvent_Wrapper.Drop;
QHelpEvent.DragResponse = QHelpEvent_Wrapper.DragResponse;
QHelpEvent.ChildAdded = QHelpEvent_Wrapper.ChildAdded;
QHelpEvent.ChildPolished = QHelpEvent_Wrapper.ChildPolished;
QHelpEvent.ChildRemoved = QHelpEvent_Wrapper.ChildRemoved;
QHelpEvent.ShowWindowRequest = QHelpEvent_Wrapper.ShowWindowRequest;
QHelpEvent.PolishRequest = QHelpEvent_Wrapper.PolishRequest;
QHelpEvent.Polish = QHelpEvent_Wrapper.Polish;
QHelpEvent.LayoutRequest = QHelpEvent_Wrapper.LayoutRequest;
QHelpEvent.UpdateRequest = QHelpEvent_Wrapper.UpdateRequest;
QHelpEvent.UpdateLater = QHelpEvent_Wrapper.UpdateLater;
QHelpEvent.EmbeddingControl = QHelpEvent_Wrapper.EmbeddingControl;
QHelpEvent.ActivateControl = QHelpEvent_Wrapper.ActivateControl;
QHelpEvent.DeactivateControl = QHelpEvent_Wrapper.DeactivateControl;
QHelpEvent.ContextMenu = QHelpEvent_Wrapper.ContextMenu;
QHelpEvent.InputMethod = QHelpEvent_Wrapper.InputMethod;
QHelpEvent.TabletMove = QHelpEvent_Wrapper.TabletMove;
QHelpEvent.LocaleChange = QHelpEvent_Wrapper.LocaleChange;
QHelpEvent.LanguageChange = QHelpEvent_Wrapper.LanguageChange;
QHelpEvent.LayoutDirectionChange = QHelpEvent_Wrapper.LayoutDirectionChange;
QHelpEvent.Style = QHelpEvent_Wrapper.Style;
QHelpEvent.TabletPress = QHelpEvent_Wrapper.TabletPress;
QHelpEvent.TabletRelease = QHelpEvent_Wrapper.TabletRelease;
QHelpEvent.OkRequest = QHelpEvent_Wrapper.OkRequest;
QHelpEvent.HelpRequest = QHelpEvent_Wrapper.HelpRequest;
QHelpEvent.IconDrag = QHelpEvent_Wrapper.IconDrag;
QHelpEvent.FontChange = QHelpEvent_Wrapper.FontChange;
QHelpEvent.EnabledChange = QHelpEvent_Wrapper.EnabledChange;
QHelpEvent.ActivationChange = QHelpEvent_Wrapper.ActivationChange;
QHelpEvent.StyleChange = QHelpEvent_Wrapper.StyleChange;
QHelpEvent.IconTextChange = QHelpEvent_Wrapper.IconTextChange;
QHelpEvent.ModifiedChange = QHelpEvent_Wrapper.ModifiedChange;
QHelpEvent.MouseTrackingChange = QHelpEvent_Wrapper.MouseTrackingChange;
QHelpEvent.WindowBlocked = QHelpEvent_Wrapper.WindowBlocked;
QHelpEvent.WindowUnblocked = QHelpEvent_Wrapper.WindowUnblocked;
QHelpEvent.WindowStateChange = QHelpEvent_Wrapper.WindowStateChange;
QHelpEvent.ReadOnlyChange = QHelpEvent_Wrapper.ReadOnlyChange;
QHelpEvent.ToolTip = QHelpEvent_Wrapper.ToolTip;
QHelpEvent.WhatsThis = QHelpEvent_Wrapper.WhatsThis;
QHelpEvent.StatusTip = QHelpEvent_Wrapper.StatusTip;
QHelpEvent.ActionChanged = QHelpEvent_Wrapper.ActionChanged;
QHelpEvent.ActionAdded = QHelpEvent_Wrapper.ActionAdded;
QHelpEvent.ActionRemoved = QHelpEvent_Wrapper.ActionRemoved;
QHelpEvent.FileOpen = QHelpEvent_Wrapper.FileOpen;
QHelpEvent.Shortcut = QHelpEvent_Wrapper.Shortcut;
QHelpEvent.ShortcutOverride = QHelpEvent_Wrapper.ShortcutOverride;
QHelpEvent.WhatsThisClicked = QHelpEvent_Wrapper.WhatsThisClicked;
QHelpEvent.ToolBarChange = QHelpEvent_Wrapper.ToolBarChange;
QHelpEvent.ApplicationActivate = QHelpEvent_Wrapper.ApplicationActivate;
QHelpEvent.ApplicationActivated = QHelpEvent_Wrapper.ApplicationActivated;
QHelpEvent.ApplicationDeactivate = QHelpEvent_Wrapper.ApplicationDeactivate;
QHelpEvent.ApplicationDeactivated = QHelpEvent_Wrapper.ApplicationDeactivated;
QHelpEvent.QueryWhatsThis = QHelpEvent_Wrapper.QueryWhatsThis;
QHelpEvent.EnterWhatsThisMode = QHelpEvent_Wrapper.EnterWhatsThisMode;
QHelpEvent.LeaveWhatsThisMode = QHelpEvent_Wrapper.LeaveWhatsThisMode;
QHelpEvent.ZOrderChange = QHelpEvent_Wrapper.ZOrderChange;
QHelpEvent.HoverEnter = QHelpEvent_Wrapper.HoverEnter;
QHelpEvent.HoverLeave = QHelpEvent_Wrapper.HoverLeave;
QHelpEvent.HoverMove = QHelpEvent_Wrapper.HoverMove;
QHelpEvent.AcceptDropsChange = QHelpEvent_Wrapper.AcceptDropsChange;
QHelpEvent.ZeroTimerEvent = QHelpEvent_Wrapper.ZeroTimerEvent;
QHelpEvent.GraphicsSceneMouseMove = QHelpEvent_Wrapper.GraphicsSceneMouseMove;
QHelpEvent.GraphicsSceneMousePress = QHelpEvent_Wrapper.GraphicsSceneMousePress;
QHelpEvent.GraphicsSceneMouseRelease = QHelpEvent_Wrapper.GraphicsSceneMouseRelease;
QHelpEvent.GraphicsSceneMouseDoubleClick = QHelpEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QHelpEvent.GraphicsSceneContextMenu = QHelpEvent_Wrapper.GraphicsSceneContextMenu;
QHelpEvent.GraphicsSceneHoverEnter = QHelpEvent_Wrapper.GraphicsSceneHoverEnter;
QHelpEvent.GraphicsSceneHoverMove = QHelpEvent_Wrapper.GraphicsSceneHoverMove;
QHelpEvent.GraphicsSceneHoverLeave = QHelpEvent_Wrapper.GraphicsSceneHoverLeave;
QHelpEvent.GraphicsSceneHelp = QHelpEvent_Wrapper.GraphicsSceneHelp;
QHelpEvent.GraphicsSceneDragEnter = QHelpEvent_Wrapper.GraphicsSceneDragEnter;
QHelpEvent.GraphicsSceneDragMove = QHelpEvent_Wrapper.GraphicsSceneDragMove;
QHelpEvent.GraphicsSceneDragLeave = QHelpEvent_Wrapper.GraphicsSceneDragLeave;
QHelpEvent.GraphicsSceneDrop = QHelpEvent_Wrapper.GraphicsSceneDrop;
QHelpEvent.GraphicsSceneWheel = QHelpEvent_Wrapper.GraphicsSceneWheel;
QHelpEvent.GraphicsSceneLeave = QHelpEvent_Wrapper.GraphicsSceneLeave;
QHelpEvent.KeyboardLayoutChange = QHelpEvent_Wrapper.KeyboardLayoutChange;
QHelpEvent.DynamicPropertyChange = QHelpEvent_Wrapper.DynamicPropertyChange;
QHelpEvent.TabletEnterProximity = QHelpEvent_Wrapper.TabletEnterProximity;
QHelpEvent.TabletLeaveProximity = QHelpEvent_Wrapper.TabletLeaveProximity;
QHelpEvent.NonClientAreaMouseMove = QHelpEvent_Wrapper.NonClientAreaMouseMove;
QHelpEvent.NonClientAreaMouseButtonPress = QHelpEvent_Wrapper.NonClientAreaMouseButtonPress;
QHelpEvent.NonClientAreaMouseButtonRelease = QHelpEvent_Wrapper.NonClientAreaMouseButtonRelease;
QHelpEvent.NonClientAreaMouseButtonDblClick = QHelpEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QHelpEvent.MacSizeChange = QHelpEvent_Wrapper.MacSizeChange;
QHelpEvent.ContentsRectChange = QHelpEvent_Wrapper.ContentsRectChange;
QHelpEvent.MacGLWindowChange = QHelpEvent_Wrapper.MacGLWindowChange;
QHelpEvent.FutureCallOut = QHelpEvent_Wrapper.FutureCallOut;
QHelpEvent.GraphicsSceneResize = QHelpEvent_Wrapper.GraphicsSceneResize;
QHelpEvent.GraphicsSceneMove = QHelpEvent_Wrapper.GraphicsSceneMove;
QHelpEvent.CursorChange = QHelpEvent_Wrapper.CursorChange;
QHelpEvent.ToolTipChange = QHelpEvent_Wrapper.ToolTipChange;
QHelpEvent.NetworkReplyUpdated = QHelpEvent_Wrapper.NetworkReplyUpdated;
QHelpEvent.GrabMouse = QHelpEvent_Wrapper.GrabMouse;
QHelpEvent.UngrabMouse = QHelpEvent_Wrapper.UngrabMouse;
QHelpEvent.GrabKeyboard = QHelpEvent_Wrapper.GrabKeyboard;
QHelpEvent.UngrabKeyboard = QHelpEvent_Wrapper.UngrabKeyboard;
QHelpEvent.StateMachineSignal = QHelpEvent_Wrapper.StateMachineSignal;
QHelpEvent.StateMachineWrapped = QHelpEvent_Wrapper.StateMachineWrapped;
QHelpEvent.TouchBegin = QHelpEvent_Wrapper.TouchBegin;
QHelpEvent.TouchUpdate = QHelpEvent_Wrapper.TouchUpdate;
QHelpEvent.TouchEnd = QHelpEvent_Wrapper.TouchEnd;
QHelpEvent.NativeGesture = QHelpEvent_Wrapper.NativeGesture;
QHelpEvent.RequestSoftwareInputPanel = QHelpEvent_Wrapper.RequestSoftwareInputPanel;
QHelpEvent.CloseSoftwareInputPanel = QHelpEvent_Wrapper.CloseSoftwareInputPanel;
QHelpEvent.WinIdChange = QHelpEvent_Wrapper.WinIdChange;
QHelpEvent.Gesture = QHelpEvent_Wrapper.Gesture;
QHelpEvent.GestureOverride = QHelpEvent_Wrapper.GestureOverride;
QHelpEvent.ScrollPrepare = QHelpEvent_Wrapper.ScrollPrepare;
QHelpEvent.Scroll = QHelpEvent_Wrapper.Scroll;
QHelpEvent.Expose = QHelpEvent_Wrapper.Expose;
QHelpEvent.InputMethodQuery = QHelpEvent_Wrapper.InputMethodQuery;
QHelpEvent.OrientationChange = QHelpEvent_Wrapper.OrientationChange;
QHelpEvent.TouchCancel = QHelpEvent_Wrapper.TouchCancel;
QHelpEvent.ThemeChange = QHelpEvent_Wrapper.ThemeChange;
QHelpEvent.SockClose = QHelpEvent_Wrapper.SockClose;
QHelpEvent.PlatformPanel = QHelpEvent_Wrapper.PlatformPanel;
QHelpEvent.StyleAnimationUpdate = QHelpEvent_Wrapper.StyleAnimationUpdate;
QHelpEvent.ApplicationStateChange = QHelpEvent_Wrapper.ApplicationStateChange;
QHelpEvent.WindowChangeInternal = QHelpEvent_Wrapper.WindowChangeInternal;
QHelpEvent.ScreenChangeInternal = QHelpEvent_Wrapper.ScreenChangeInternal;
QHelpEvent.PlatformSurface = QHelpEvent_Wrapper.PlatformSurface;
QHelpEvent.Pointer = QHelpEvent_Wrapper.Pointer;
QHelpEvent.TabletTrackingChange = QHelpEvent_Wrapper.TabletTrackingChange;
QHelpEvent.User = QHelpEvent_Wrapper.User;
QHelpEvent.MaxUser = QHelpEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        QHelpEvent.registerEventType = function() 
          
        {
          //print("JS: QHelpEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QHelpEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QHelpEvent);
  }

  
  else {
    
        print("QHelpEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    