
      // auto generated
      //var self;

      // class constructor:
      function QDragEnterEvent() {
        

        // should be QDragEnterEvent_BaseJs.call(this, engine):
        //QDragEnterEvent.prototype = new QDragEnterEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDragEnterEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDragEnterEvent);
            //}
          }
          else {
            qWarning("QDragEnterEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 5) {
    
            self = this;
            wrapper = new QDragEnterEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDragEnterEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDragEnterEvent);
  }

  
  else {
    
        print("QDragEnterEvent(): wrong number / type of arguments");
      
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

      //QDragEnterEvent.prototype = new QDragEnterEvent_BaseJs(engine);
      //QDragEnterEvent.prototype = new QDragEnterEvent_Wrapper(engine);
      QDragEnterEvent.prototype = new Object();

      QDragEnterEvent.prototype.toString = function() {
          //return "QDragEnterEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDragEnterEvent [JS]";
        };
      QDragEnterEvent.getObjectType = function() {
        return RJSType_QDragEnterEvent.getIdStatic();
      };

      QDragEnterEvent.prototype.getObjectType = function() {
        return RJSType_QDragEnterEvent.getIdStatic();
      };

      QDragEnterEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDragEnterEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDropEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDragMoveEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QDragEnterEvent.None = QDragEnterEvent_Wrapper.None;
QDragEnterEvent.Timer = QDragEnterEvent_Wrapper.Timer;
QDragEnterEvent.MouseButtonPress = QDragEnterEvent_Wrapper.MouseButtonPress;
QDragEnterEvent.MouseButtonRelease = QDragEnterEvent_Wrapper.MouseButtonRelease;
QDragEnterEvent.MouseButtonDblClick = QDragEnterEvent_Wrapper.MouseButtonDblClick;
QDragEnterEvent.MouseMove = QDragEnterEvent_Wrapper.MouseMove;
QDragEnterEvent.KeyPress = QDragEnterEvent_Wrapper.KeyPress;
QDragEnterEvent.KeyRelease = QDragEnterEvent_Wrapper.KeyRelease;
QDragEnterEvent.FocusIn = QDragEnterEvent_Wrapper.FocusIn;
QDragEnterEvent.FocusOut = QDragEnterEvent_Wrapper.FocusOut;
QDragEnterEvent.FocusAboutToChange = QDragEnterEvent_Wrapper.FocusAboutToChange;
QDragEnterEvent.Enter = QDragEnterEvent_Wrapper.Enter;
QDragEnterEvent.Leave = QDragEnterEvent_Wrapper.Leave;
QDragEnterEvent.Paint = QDragEnterEvent_Wrapper.Paint;
QDragEnterEvent.Move = QDragEnterEvent_Wrapper.Move;
QDragEnterEvent.Resize = QDragEnterEvent_Wrapper.Resize;
QDragEnterEvent.Create = QDragEnterEvent_Wrapper.Create;
QDragEnterEvent.Destroy = QDragEnterEvent_Wrapper.Destroy;
QDragEnterEvent.Show = QDragEnterEvent_Wrapper.Show;
QDragEnterEvent.Hide = QDragEnterEvent_Wrapper.Hide;
QDragEnterEvent.Close = QDragEnterEvent_Wrapper.Close;
QDragEnterEvent.Quit = QDragEnterEvent_Wrapper.Quit;
QDragEnterEvent.ParentChange = QDragEnterEvent_Wrapper.ParentChange;
QDragEnterEvent.ParentAboutToChange = QDragEnterEvent_Wrapper.ParentAboutToChange;
QDragEnterEvent.ThreadChange = QDragEnterEvent_Wrapper.ThreadChange;
QDragEnterEvent.WindowActivate = QDragEnterEvent_Wrapper.WindowActivate;
QDragEnterEvent.WindowDeactivate = QDragEnterEvent_Wrapper.WindowDeactivate;
QDragEnterEvent.ShowToParent = QDragEnterEvent_Wrapper.ShowToParent;
QDragEnterEvent.HideToParent = QDragEnterEvent_Wrapper.HideToParent;
QDragEnterEvent.Wheel = QDragEnterEvent_Wrapper.Wheel;
QDragEnterEvent.WindowTitleChange = QDragEnterEvent_Wrapper.WindowTitleChange;
QDragEnterEvent.WindowIconChange = QDragEnterEvent_Wrapper.WindowIconChange;
QDragEnterEvent.ApplicationWindowIconChange = QDragEnterEvent_Wrapper.ApplicationWindowIconChange;
QDragEnterEvent.ApplicationFontChange = QDragEnterEvent_Wrapper.ApplicationFontChange;
QDragEnterEvent.ApplicationLayoutDirectionChange = QDragEnterEvent_Wrapper.ApplicationLayoutDirectionChange;
QDragEnterEvent.ApplicationPaletteChange = QDragEnterEvent_Wrapper.ApplicationPaletteChange;
QDragEnterEvent.PaletteChange = QDragEnterEvent_Wrapper.PaletteChange;
QDragEnterEvent.Clipboard = QDragEnterEvent_Wrapper.Clipboard;
QDragEnterEvent.Speech = QDragEnterEvent_Wrapper.Speech;
QDragEnterEvent.MetaCall = QDragEnterEvent_Wrapper.MetaCall;
QDragEnterEvent.SockAct = QDragEnterEvent_Wrapper.SockAct;
QDragEnterEvent.WinEventAct = QDragEnterEvent_Wrapper.WinEventAct;
QDragEnterEvent.DeferredDelete = QDragEnterEvent_Wrapper.DeferredDelete;
QDragEnterEvent.DragEnter = QDragEnterEvent_Wrapper.DragEnter;
QDragEnterEvent.DragMove = QDragEnterEvent_Wrapper.DragMove;
QDragEnterEvent.DragLeave = QDragEnterEvent_Wrapper.DragLeave;
QDragEnterEvent.Drop = QDragEnterEvent_Wrapper.Drop;
QDragEnterEvent.DragResponse = QDragEnterEvent_Wrapper.DragResponse;
QDragEnterEvent.ChildAdded = QDragEnterEvent_Wrapper.ChildAdded;
QDragEnterEvent.ChildPolished = QDragEnterEvent_Wrapper.ChildPolished;
QDragEnterEvent.ChildRemoved = QDragEnterEvent_Wrapper.ChildRemoved;
QDragEnterEvent.ShowWindowRequest = QDragEnterEvent_Wrapper.ShowWindowRequest;
QDragEnterEvent.PolishRequest = QDragEnterEvent_Wrapper.PolishRequest;
QDragEnterEvent.Polish = QDragEnterEvent_Wrapper.Polish;
QDragEnterEvent.LayoutRequest = QDragEnterEvent_Wrapper.LayoutRequest;
QDragEnterEvent.UpdateRequest = QDragEnterEvent_Wrapper.UpdateRequest;
QDragEnterEvent.UpdateLater = QDragEnterEvent_Wrapper.UpdateLater;
QDragEnterEvent.EmbeddingControl = QDragEnterEvent_Wrapper.EmbeddingControl;
QDragEnterEvent.ActivateControl = QDragEnterEvent_Wrapper.ActivateControl;
QDragEnterEvent.DeactivateControl = QDragEnterEvent_Wrapper.DeactivateControl;
QDragEnterEvent.ContextMenu = QDragEnterEvent_Wrapper.ContextMenu;
QDragEnterEvent.InputMethod = QDragEnterEvent_Wrapper.InputMethod;
QDragEnterEvent.TabletMove = QDragEnterEvent_Wrapper.TabletMove;
QDragEnterEvent.LocaleChange = QDragEnterEvent_Wrapper.LocaleChange;
QDragEnterEvent.LanguageChange = QDragEnterEvent_Wrapper.LanguageChange;
QDragEnterEvent.LayoutDirectionChange = QDragEnterEvent_Wrapper.LayoutDirectionChange;
QDragEnterEvent.Style = QDragEnterEvent_Wrapper.Style;
QDragEnterEvent.TabletPress = QDragEnterEvent_Wrapper.TabletPress;
QDragEnterEvent.TabletRelease = QDragEnterEvent_Wrapper.TabletRelease;
QDragEnterEvent.OkRequest = QDragEnterEvent_Wrapper.OkRequest;
QDragEnterEvent.HelpRequest = QDragEnterEvent_Wrapper.HelpRequest;
QDragEnterEvent.IconDrag = QDragEnterEvent_Wrapper.IconDrag;
QDragEnterEvent.FontChange = QDragEnterEvent_Wrapper.FontChange;
QDragEnterEvent.EnabledChange = QDragEnterEvent_Wrapper.EnabledChange;
QDragEnterEvent.ActivationChange = QDragEnterEvent_Wrapper.ActivationChange;
QDragEnterEvent.StyleChange = QDragEnterEvent_Wrapper.StyleChange;
QDragEnterEvent.IconTextChange = QDragEnterEvent_Wrapper.IconTextChange;
QDragEnterEvent.ModifiedChange = QDragEnterEvent_Wrapper.ModifiedChange;
QDragEnterEvent.MouseTrackingChange = QDragEnterEvent_Wrapper.MouseTrackingChange;
QDragEnterEvent.WindowBlocked = QDragEnterEvent_Wrapper.WindowBlocked;
QDragEnterEvent.WindowUnblocked = QDragEnterEvent_Wrapper.WindowUnblocked;
QDragEnterEvent.WindowStateChange = QDragEnterEvent_Wrapper.WindowStateChange;
QDragEnterEvent.ReadOnlyChange = QDragEnterEvent_Wrapper.ReadOnlyChange;
QDragEnterEvent.ToolTip = QDragEnterEvent_Wrapper.ToolTip;
QDragEnterEvent.WhatsThis = QDragEnterEvent_Wrapper.WhatsThis;
QDragEnterEvent.StatusTip = QDragEnterEvent_Wrapper.StatusTip;
QDragEnterEvent.ActionChanged = QDragEnterEvent_Wrapper.ActionChanged;
QDragEnterEvent.ActionAdded = QDragEnterEvent_Wrapper.ActionAdded;
QDragEnterEvent.ActionRemoved = QDragEnterEvent_Wrapper.ActionRemoved;
QDragEnterEvent.FileOpen = QDragEnterEvent_Wrapper.FileOpen;
QDragEnterEvent.Shortcut = QDragEnterEvent_Wrapper.Shortcut;
QDragEnterEvent.ShortcutOverride = QDragEnterEvent_Wrapper.ShortcutOverride;
QDragEnterEvent.WhatsThisClicked = QDragEnterEvent_Wrapper.WhatsThisClicked;
QDragEnterEvent.ToolBarChange = QDragEnterEvent_Wrapper.ToolBarChange;
QDragEnterEvent.ApplicationActivate = QDragEnterEvent_Wrapper.ApplicationActivate;
QDragEnterEvent.ApplicationActivated = QDragEnterEvent_Wrapper.ApplicationActivated;
QDragEnterEvent.ApplicationDeactivate = QDragEnterEvent_Wrapper.ApplicationDeactivate;
QDragEnterEvent.ApplicationDeactivated = QDragEnterEvent_Wrapper.ApplicationDeactivated;
QDragEnterEvent.QueryWhatsThis = QDragEnterEvent_Wrapper.QueryWhatsThis;
QDragEnterEvent.EnterWhatsThisMode = QDragEnterEvent_Wrapper.EnterWhatsThisMode;
QDragEnterEvent.LeaveWhatsThisMode = QDragEnterEvent_Wrapper.LeaveWhatsThisMode;
QDragEnterEvent.ZOrderChange = QDragEnterEvent_Wrapper.ZOrderChange;
QDragEnterEvent.HoverEnter = QDragEnterEvent_Wrapper.HoverEnter;
QDragEnterEvent.HoverLeave = QDragEnterEvent_Wrapper.HoverLeave;
QDragEnterEvent.HoverMove = QDragEnterEvent_Wrapper.HoverMove;
QDragEnterEvent.AcceptDropsChange = QDragEnterEvent_Wrapper.AcceptDropsChange;
QDragEnterEvent.ZeroTimerEvent = QDragEnterEvent_Wrapper.ZeroTimerEvent;
QDragEnterEvent.GraphicsSceneMouseMove = QDragEnterEvent_Wrapper.GraphicsSceneMouseMove;
QDragEnterEvent.GraphicsSceneMousePress = QDragEnterEvent_Wrapper.GraphicsSceneMousePress;
QDragEnterEvent.GraphicsSceneMouseRelease = QDragEnterEvent_Wrapper.GraphicsSceneMouseRelease;
QDragEnterEvent.GraphicsSceneMouseDoubleClick = QDragEnterEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QDragEnterEvent.GraphicsSceneContextMenu = QDragEnterEvent_Wrapper.GraphicsSceneContextMenu;
QDragEnterEvent.GraphicsSceneHoverEnter = QDragEnterEvent_Wrapper.GraphicsSceneHoverEnter;
QDragEnterEvent.GraphicsSceneHoverMove = QDragEnterEvent_Wrapper.GraphicsSceneHoverMove;
QDragEnterEvent.GraphicsSceneHoverLeave = QDragEnterEvent_Wrapper.GraphicsSceneHoverLeave;
QDragEnterEvent.GraphicsSceneHelp = QDragEnterEvent_Wrapper.GraphicsSceneHelp;
QDragEnterEvent.GraphicsSceneDragEnter = QDragEnterEvent_Wrapper.GraphicsSceneDragEnter;
QDragEnterEvent.GraphicsSceneDragMove = QDragEnterEvent_Wrapper.GraphicsSceneDragMove;
QDragEnterEvent.GraphicsSceneDragLeave = QDragEnterEvent_Wrapper.GraphicsSceneDragLeave;
QDragEnterEvent.GraphicsSceneDrop = QDragEnterEvent_Wrapper.GraphicsSceneDrop;
QDragEnterEvent.GraphicsSceneWheel = QDragEnterEvent_Wrapper.GraphicsSceneWheel;
QDragEnterEvent.GraphicsSceneLeave = QDragEnterEvent_Wrapper.GraphicsSceneLeave;
QDragEnterEvent.KeyboardLayoutChange = QDragEnterEvent_Wrapper.KeyboardLayoutChange;
QDragEnterEvent.DynamicPropertyChange = QDragEnterEvent_Wrapper.DynamicPropertyChange;
QDragEnterEvent.TabletEnterProximity = QDragEnterEvent_Wrapper.TabletEnterProximity;
QDragEnterEvent.TabletLeaveProximity = QDragEnterEvent_Wrapper.TabletLeaveProximity;
QDragEnterEvent.NonClientAreaMouseMove = QDragEnterEvent_Wrapper.NonClientAreaMouseMove;
QDragEnterEvent.NonClientAreaMouseButtonPress = QDragEnterEvent_Wrapper.NonClientAreaMouseButtonPress;
QDragEnterEvent.NonClientAreaMouseButtonRelease = QDragEnterEvent_Wrapper.NonClientAreaMouseButtonRelease;
QDragEnterEvent.NonClientAreaMouseButtonDblClick = QDragEnterEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QDragEnterEvent.MacSizeChange = QDragEnterEvent_Wrapper.MacSizeChange;
QDragEnterEvent.ContentsRectChange = QDragEnterEvent_Wrapper.ContentsRectChange;
QDragEnterEvent.MacGLWindowChange = QDragEnterEvent_Wrapper.MacGLWindowChange;
QDragEnterEvent.FutureCallOut = QDragEnterEvent_Wrapper.FutureCallOut;
QDragEnterEvent.GraphicsSceneResize = QDragEnterEvent_Wrapper.GraphicsSceneResize;
QDragEnterEvent.GraphicsSceneMove = QDragEnterEvent_Wrapper.GraphicsSceneMove;
QDragEnterEvent.CursorChange = QDragEnterEvent_Wrapper.CursorChange;
QDragEnterEvent.ToolTipChange = QDragEnterEvent_Wrapper.ToolTipChange;
QDragEnterEvent.NetworkReplyUpdated = QDragEnterEvent_Wrapper.NetworkReplyUpdated;
QDragEnterEvent.GrabMouse = QDragEnterEvent_Wrapper.GrabMouse;
QDragEnterEvent.UngrabMouse = QDragEnterEvent_Wrapper.UngrabMouse;
QDragEnterEvent.GrabKeyboard = QDragEnterEvent_Wrapper.GrabKeyboard;
QDragEnterEvent.UngrabKeyboard = QDragEnterEvent_Wrapper.UngrabKeyboard;
QDragEnterEvent.StateMachineSignal = QDragEnterEvent_Wrapper.StateMachineSignal;
QDragEnterEvent.StateMachineWrapped = QDragEnterEvent_Wrapper.StateMachineWrapped;
QDragEnterEvent.TouchBegin = QDragEnterEvent_Wrapper.TouchBegin;
QDragEnterEvent.TouchUpdate = QDragEnterEvent_Wrapper.TouchUpdate;
QDragEnterEvent.TouchEnd = QDragEnterEvent_Wrapper.TouchEnd;
QDragEnterEvent.NativeGesture = QDragEnterEvent_Wrapper.NativeGesture;
QDragEnterEvent.RequestSoftwareInputPanel = QDragEnterEvent_Wrapper.RequestSoftwareInputPanel;
QDragEnterEvent.CloseSoftwareInputPanel = QDragEnterEvent_Wrapper.CloseSoftwareInputPanel;
QDragEnterEvent.WinIdChange = QDragEnterEvent_Wrapper.WinIdChange;
QDragEnterEvent.Gesture = QDragEnterEvent_Wrapper.Gesture;
QDragEnterEvent.GestureOverride = QDragEnterEvent_Wrapper.GestureOverride;
QDragEnterEvent.ScrollPrepare = QDragEnterEvent_Wrapper.ScrollPrepare;
QDragEnterEvent.Scroll = QDragEnterEvent_Wrapper.Scroll;
QDragEnterEvent.Expose = QDragEnterEvent_Wrapper.Expose;
QDragEnterEvent.InputMethodQuery = QDragEnterEvent_Wrapper.InputMethodQuery;
QDragEnterEvent.OrientationChange = QDragEnterEvent_Wrapper.OrientationChange;
QDragEnterEvent.TouchCancel = QDragEnterEvent_Wrapper.TouchCancel;
QDragEnterEvent.ThemeChange = QDragEnterEvent_Wrapper.ThemeChange;
QDragEnterEvent.SockClose = QDragEnterEvent_Wrapper.SockClose;
QDragEnterEvent.PlatformPanel = QDragEnterEvent_Wrapper.PlatformPanel;
QDragEnterEvent.StyleAnimationUpdate = QDragEnterEvent_Wrapper.StyleAnimationUpdate;
QDragEnterEvent.ApplicationStateChange = QDragEnterEvent_Wrapper.ApplicationStateChange;
QDragEnterEvent.WindowChangeInternal = QDragEnterEvent_Wrapper.WindowChangeInternal;
QDragEnterEvent.ScreenChangeInternal = QDragEnterEvent_Wrapper.ScreenChangeInternal;
QDragEnterEvent.PlatformSurface = QDragEnterEvent_Wrapper.PlatformSurface;
QDragEnterEvent.Pointer = QDragEnterEvent_Wrapper.Pointer;
QDragEnterEvent.TabletTrackingChange = QDragEnterEvent_Wrapper.TabletTrackingChange;
QDragEnterEvent.User = QDragEnterEvent_Wrapper.User;
QDragEnterEvent.MaxUser = QDragEnterEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        QDragEnterEvent.registerEventType = function() 
          
        {
          //print("JS: QDragEnterEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QDragEnterEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDragEnterEvent);
  }

  
  else {
    
        print("QDragEnterEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDragEnterEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDragEnterEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    