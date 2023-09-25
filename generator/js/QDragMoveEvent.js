
      // auto generated
      //var self;

      // class constructor:
      function QDragMoveEvent() {
        

        // should be QDragMoveEvent_BaseJs.call(this, engine):
        //QDragMoveEvent.prototype = new QDragMoveEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDragMoveEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDragMoveEvent);
            //}
          }
          else {
            qWarning("QDragMoveEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 5 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new QDragMoveEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDragMoveEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDragMoveEvent);
  }

  
  else {
    
        print("QDragMoveEvent(): wrong number / type of arguments");
      
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

      //QDragMoveEvent.prototype = new QDragMoveEvent_BaseJs(engine);
      //QDragMoveEvent.prototype = new QDragMoveEvent_Wrapper(engine);
      QDragMoveEvent.prototype = new Object();

      QDragMoveEvent.prototype.toString = function() {
          //return "QDragMoveEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDragMoveEvent [JS]";
        };
      QDragMoveEvent.getObjectType = function() {
        return RJSType_QDragMoveEvent.getIdStatic();
      };

      QDragMoveEvent.prototype.getObjectType = function() {
        return RJSType_QDragMoveEvent.getIdStatic();
      };

      QDragMoveEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDragMoveEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QDropEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QDragMoveEvent.None = QDragMoveEvent_Wrapper.None;
QDragMoveEvent.Timer = QDragMoveEvent_Wrapper.Timer;
QDragMoveEvent.MouseButtonPress = QDragMoveEvent_Wrapper.MouseButtonPress;
QDragMoveEvent.MouseButtonRelease = QDragMoveEvent_Wrapper.MouseButtonRelease;
QDragMoveEvent.MouseButtonDblClick = QDragMoveEvent_Wrapper.MouseButtonDblClick;
QDragMoveEvent.MouseMove = QDragMoveEvent_Wrapper.MouseMove;
QDragMoveEvent.KeyPress = QDragMoveEvent_Wrapper.KeyPress;
QDragMoveEvent.KeyRelease = QDragMoveEvent_Wrapper.KeyRelease;
QDragMoveEvent.FocusIn = QDragMoveEvent_Wrapper.FocusIn;
QDragMoveEvent.FocusOut = QDragMoveEvent_Wrapper.FocusOut;
QDragMoveEvent.FocusAboutToChange = QDragMoveEvent_Wrapper.FocusAboutToChange;
QDragMoveEvent.Enter = QDragMoveEvent_Wrapper.Enter;
QDragMoveEvent.Leave = QDragMoveEvent_Wrapper.Leave;
QDragMoveEvent.Paint = QDragMoveEvent_Wrapper.Paint;
QDragMoveEvent.Move = QDragMoveEvent_Wrapper.Move;
QDragMoveEvent.Resize = QDragMoveEvent_Wrapper.Resize;
QDragMoveEvent.Create = QDragMoveEvent_Wrapper.Create;
QDragMoveEvent.Destroy = QDragMoveEvent_Wrapper.Destroy;
QDragMoveEvent.Show = QDragMoveEvent_Wrapper.Show;
QDragMoveEvent.Hide = QDragMoveEvent_Wrapper.Hide;
QDragMoveEvent.Close = QDragMoveEvent_Wrapper.Close;
QDragMoveEvent.Quit = QDragMoveEvent_Wrapper.Quit;
QDragMoveEvent.ParentChange = QDragMoveEvent_Wrapper.ParentChange;
QDragMoveEvent.ParentAboutToChange = QDragMoveEvent_Wrapper.ParentAboutToChange;
QDragMoveEvent.ThreadChange = QDragMoveEvent_Wrapper.ThreadChange;
QDragMoveEvent.WindowActivate = QDragMoveEvent_Wrapper.WindowActivate;
QDragMoveEvent.WindowDeactivate = QDragMoveEvent_Wrapper.WindowDeactivate;
QDragMoveEvent.ShowToParent = QDragMoveEvent_Wrapper.ShowToParent;
QDragMoveEvent.HideToParent = QDragMoveEvent_Wrapper.HideToParent;
QDragMoveEvent.Wheel = QDragMoveEvent_Wrapper.Wheel;
QDragMoveEvent.WindowTitleChange = QDragMoveEvent_Wrapper.WindowTitleChange;
QDragMoveEvent.WindowIconChange = QDragMoveEvent_Wrapper.WindowIconChange;
QDragMoveEvent.ApplicationWindowIconChange = QDragMoveEvent_Wrapper.ApplicationWindowIconChange;
QDragMoveEvent.ApplicationFontChange = QDragMoveEvent_Wrapper.ApplicationFontChange;
QDragMoveEvent.ApplicationLayoutDirectionChange = QDragMoveEvent_Wrapper.ApplicationLayoutDirectionChange;
QDragMoveEvent.ApplicationPaletteChange = QDragMoveEvent_Wrapper.ApplicationPaletteChange;
QDragMoveEvent.PaletteChange = QDragMoveEvent_Wrapper.PaletteChange;
QDragMoveEvent.Clipboard = QDragMoveEvent_Wrapper.Clipboard;
QDragMoveEvent.Speech = QDragMoveEvent_Wrapper.Speech;
QDragMoveEvent.MetaCall = QDragMoveEvent_Wrapper.MetaCall;
QDragMoveEvent.SockAct = QDragMoveEvent_Wrapper.SockAct;
QDragMoveEvent.WinEventAct = QDragMoveEvent_Wrapper.WinEventAct;
QDragMoveEvent.DeferredDelete = QDragMoveEvent_Wrapper.DeferredDelete;
QDragMoveEvent.DragEnter = QDragMoveEvent_Wrapper.DragEnter;
QDragMoveEvent.DragMove = QDragMoveEvent_Wrapper.DragMove;
QDragMoveEvent.DragLeave = QDragMoveEvent_Wrapper.DragLeave;
QDragMoveEvent.Drop = QDragMoveEvent_Wrapper.Drop;
QDragMoveEvent.DragResponse = QDragMoveEvent_Wrapper.DragResponse;
QDragMoveEvent.ChildAdded = QDragMoveEvent_Wrapper.ChildAdded;
QDragMoveEvent.ChildPolished = QDragMoveEvent_Wrapper.ChildPolished;
QDragMoveEvent.ChildRemoved = QDragMoveEvent_Wrapper.ChildRemoved;
QDragMoveEvent.ShowWindowRequest = QDragMoveEvent_Wrapper.ShowWindowRequest;
QDragMoveEvent.PolishRequest = QDragMoveEvent_Wrapper.PolishRequest;
QDragMoveEvent.Polish = QDragMoveEvent_Wrapper.Polish;
QDragMoveEvent.LayoutRequest = QDragMoveEvent_Wrapper.LayoutRequest;
QDragMoveEvent.UpdateRequest = QDragMoveEvent_Wrapper.UpdateRequest;
QDragMoveEvent.UpdateLater = QDragMoveEvent_Wrapper.UpdateLater;
QDragMoveEvent.EmbeddingControl = QDragMoveEvent_Wrapper.EmbeddingControl;
QDragMoveEvent.ActivateControl = QDragMoveEvent_Wrapper.ActivateControl;
QDragMoveEvent.DeactivateControl = QDragMoveEvent_Wrapper.DeactivateControl;
QDragMoveEvent.ContextMenu = QDragMoveEvent_Wrapper.ContextMenu;
QDragMoveEvent.InputMethod = QDragMoveEvent_Wrapper.InputMethod;
QDragMoveEvent.TabletMove = QDragMoveEvent_Wrapper.TabletMove;
QDragMoveEvent.LocaleChange = QDragMoveEvent_Wrapper.LocaleChange;
QDragMoveEvent.LanguageChange = QDragMoveEvent_Wrapper.LanguageChange;
QDragMoveEvent.LayoutDirectionChange = QDragMoveEvent_Wrapper.LayoutDirectionChange;
QDragMoveEvent.Style = QDragMoveEvent_Wrapper.Style;
QDragMoveEvent.TabletPress = QDragMoveEvent_Wrapper.TabletPress;
QDragMoveEvent.TabletRelease = QDragMoveEvent_Wrapper.TabletRelease;
QDragMoveEvent.OkRequest = QDragMoveEvent_Wrapper.OkRequest;
QDragMoveEvent.HelpRequest = QDragMoveEvent_Wrapper.HelpRequest;
QDragMoveEvent.IconDrag = QDragMoveEvent_Wrapper.IconDrag;
QDragMoveEvent.FontChange = QDragMoveEvent_Wrapper.FontChange;
QDragMoveEvent.EnabledChange = QDragMoveEvent_Wrapper.EnabledChange;
QDragMoveEvent.ActivationChange = QDragMoveEvent_Wrapper.ActivationChange;
QDragMoveEvent.StyleChange = QDragMoveEvent_Wrapper.StyleChange;
QDragMoveEvent.IconTextChange = QDragMoveEvent_Wrapper.IconTextChange;
QDragMoveEvent.ModifiedChange = QDragMoveEvent_Wrapper.ModifiedChange;
QDragMoveEvent.MouseTrackingChange = QDragMoveEvent_Wrapper.MouseTrackingChange;
QDragMoveEvent.WindowBlocked = QDragMoveEvent_Wrapper.WindowBlocked;
QDragMoveEvent.WindowUnblocked = QDragMoveEvent_Wrapper.WindowUnblocked;
QDragMoveEvent.WindowStateChange = QDragMoveEvent_Wrapper.WindowStateChange;
QDragMoveEvent.ReadOnlyChange = QDragMoveEvent_Wrapper.ReadOnlyChange;
QDragMoveEvent.ToolTip = QDragMoveEvent_Wrapper.ToolTip;
QDragMoveEvent.WhatsThis = QDragMoveEvent_Wrapper.WhatsThis;
QDragMoveEvent.StatusTip = QDragMoveEvent_Wrapper.StatusTip;
QDragMoveEvent.ActionChanged = QDragMoveEvent_Wrapper.ActionChanged;
QDragMoveEvent.ActionAdded = QDragMoveEvent_Wrapper.ActionAdded;
QDragMoveEvent.ActionRemoved = QDragMoveEvent_Wrapper.ActionRemoved;
QDragMoveEvent.FileOpen = QDragMoveEvent_Wrapper.FileOpen;
QDragMoveEvent.Shortcut = QDragMoveEvent_Wrapper.Shortcut;
QDragMoveEvent.ShortcutOverride = QDragMoveEvent_Wrapper.ShortcutOverride;
QDragMoveEvent.WhatsThisClicked = QDragMoveEvent_Wrapper.WhatsThisClicked;
QDragMoveEvent.ToolBarChange = QDragMoveEvent_Wrapper.ToolBarChange;
QDragMoveEvent.ApplicationActivate = QDragMoveEvent_Wrapper.ApplicationActivate;
QDragMoveEvent.ApplicationActivated = QDragMoveEvent_Wrapper.ApplicationActivated;
QDragMoveEvent.ApplicationDeactivate = QDragMoveEvent_Wrapper.ApplicationDeactivate;
QDragMoveEvent.ApplicationDeactivated = QDragMoveEvent_Wrapper.ApplicationDeactivated;
QDragMoveEvent.QueryWhatsThis = QDragMoveEvent_Wrapper.QueryWhatsThis;
QDragMoveEvent.EnterWhatsThisMode = QDragMoveEvent_Wrapper.EnterWhatsThisMode;
QDragMoveEvent.LeaveWhatsThisMode = QDragMoveEvent_Wrapper.LeaveWhatsThisMode;
QDragMoveEvent.ZOrderChange = QDragMoveEvent_Wrapper.ZOrderChange;
QDragMoveEvent.HoverEnter = QDragMoveEvent_Wrapper.HoverEnter;
QDragMoveEvent.HoverLeave = QDragMoveEvent_Wrapper.HoverLeave;
QDragMoveEvent.HoverMove = QDragMoveEvent_Wrapper.HoverMove;
QDragMoveEvent.AcceptDropsChange = QDragMoveEvent_Wrapper.AcceptDropsChange;
QDragMoveEvent.ZeroTimerEvent = QDragMoveEvent_Wrapper.ZeroTimerEvent;
QDragMoveEvent.GraphicsSceneMouseMove = QDragMoveEvent_Wrapper.GraphicsSceneMouseMove;
QDragMoveEvent.GraphicsSceneMousePress = QDragMoveEvent_Wrapper.GraphicsSceneMousePress;
QDragMoveEvent.GraphicsSceneMouseRelease = QDragMoveEvent_Wrapper.GraphicsSceneMouseRelease;
QDragMoveEvent.GraphicsSceneMouseDoubleClick = QDragMoveEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QDragMoveEvent.GraphicsSceneContextMenu = QDragMoveEvent_Wrapper.GraphicsSceneContextMenu;
QDragMoveEvent.GraphicsSceneHoverEnter = QDragMoveEvent_Wrapper.GraphicsSceneHoverEnter;
QDragMoveEvent.GraphicsSceneHoverMove = QDragMoveEvent_Wrapper.GraphicsSceneHoverMove;
QDragMoveEvent.GraphicsSceneHoverLeave = QDragMoveEvent_Wrapper.GraphicsSceneHoverLeave;
QDragMoveEvent.GraphicsSceneHelp = QDragMoveEvent_Wrapper.GraphicsSceneHelp;
QDragMoveEvent.GraphicsSceneDragEnter = QDragMoveEvent_Wrapper.GraphicsSceneDragEnter;
QDragMoveEvent.GraphicsSceneDragMove = QDragMoveEvent_Wrapper.GraphicsSceneDragMove;
QDragMoveEvent.GraphicsSceneDragLeave = QDragMoveEvent_Wrapper.GraphicsSceneDragLeave;
QDragMoveEvent.GraphicsSceneDrop = QDragMoveEvent_Wrapper.GraphicsSceneDrop;
QDragMoveEvent.GraphicsSceneWheel = QDragMoveEvent_Wrapper.GraphicsSceneWheel;
QDragMoveEvent.GraphicsSceneLeave = QDragMoveEvent_Wrapper.GraphicsSceneLeave;
QDragMoveEvent.KeyboardLayoutChange = QDragMoveEvent_Wrapper.KeyboardLayoutChange;
QDragMoveEvent.DynamicPropertyChange = QDragMoveEvent_Wrapper.DynamicPropertyChange;
QDragMoveEvent.TabletEnterProximity = QDragMoveEvent_Wrapper.TabletEnterProximity;
QDragMoveEvent.TabletLeaveProximity = QDragMoveEvent_Wrapper.TabletLeaveProximity;
QDragMoveEvent.NonClientAreaMouseMove = QDragMoveEvent_Wrapper.NonClientAreaMouseMove;
QDragMoveEvent.NonClientAreaMouseButtonPress = QDragMoveEvent_Wrapper.NonClientAreaMouseButtonPress;
QDragMoveEvent.NonClientAreaMouseButtonRelease = QDragMoveEvent_Wrapper.NonClientAreaMouseButtonRelease;
QDragMoveEvent.NonClientAreaMouseButtonDblClick = QDragMoveEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QDragMoveEvent.MacSizeChange = QDragMoveEvent_Wrapper.MacSizeChange;
QDragMoveEvent.ContentsRectChange = QDragMoveEvent_Wrapper.ContentsRectChange;
QDragMoveEvent.MacGLWindowChange = QDragMoveEvent_Wrapper.MacGLWindowChange;
QDragMoveEvent.FutureCallOut = QDragMoveEvent_Wrapper.FutureCallOut;
QDragMoveEvent.GraphicsSceneResize = QDragMoveEvent_Wrapper.GraphicsSceneResize;
QDragMoveEvent.GraphicsSceneMove = QDragMoveEvent_Wrapper.GraphicsSceneMove;
QDragMoveEvent.CursorChange = QDragMoveEvent_Wrapper.CursorChange;
QDragMoveEvent.ToolTipChange = QDragMoveEvent_Wrapper.ToolTipChange;
QDragMoveEvent.NetworkReplyUpdated = QDragMoveEvent_Wrapper.NetworkReplyUpdated;
QDragMoveEvent.GrabMouse = QDragMoveEvent_Wrapper.GrabMouse;
QDragMoveEvent.UngrabMouse = QDragMoveEvent_Wrapper.UngrabMouse;
QDragMoveEvent.GrabKeyboard = QDragMoveEvent_Wrapper.GrabKeyboard;
QDragMoveEvent.UngrabKeyboard = QDragMoveEvent_Wrapper.UngrabKeyboard;
QDragMoveEvent.StateMachineSignal = QDragMoveEvent_Wrapper.StateMachineSignal;
QDragMoveEvent.StateMachineWrapped = QDragMoveEvent_Wrapper.StateMachineWrapped;
QDragMoveEvent.TouchBegin = QDragMoveEvent_Wrapper.TouchBegin;
QDragMoveEvent.TouchUpdate = QDragMoveEvent_Wrapper.TouchUpdate;
QDragMoveEvent.TouchEnd = QDragMoveEvent_Wrapper.TouchEnd;
QDragMoveEvent.NativeGesture = QDragMoveEvent_Wrapper.NativeGesture;
QDragMoveEvent.RequestSoftwareInputPanel = QDragMoveEvent_Wrapper.RequestSoftwareInputPanel;
QDragMoveEvent.CloseSoftwareInputPanel = QDragMoveEvent_Wrapper.CloseSoftwareInputPanel;
QDragMoveEvent.WinIdChange = QDragMoveEvent_Wrapper.WinIdChange;
QDragMoveEvent.Gesture = QDragMoveEvent_Wrapper.Gesture;
QDragMoveEvent.GestureOverride = QDragMoveEvent_Wrapper.GestureOverride;
QDragMoveEvent.ScrollPrepare = QDragMoveEvent_Wrapper.ScrollPrepare;
QDragMoveEvent.Scroll = QDragMoveEvent_Wrapper.Scroll;
QDragMoveEvent.Expose = QDragMoveEvent_Wrapper.Expose;
QDragMoveEvent.InputMethodQuery = QDragMoveEvent_Wrapper.InputMethodQuery;
QDragMoveEvent.OrientationChange = QDragMoveEvent_Wrapper.OrientationChange;
QDragMoveEvent.TouchCancel = QDragMoveEvent_Wrapper.TouchCancel;
QDragMoveEvent.ThemeChange = QDragMoveEvent_Wrapper.ThemeChange;
QDragMoveEvent.SockClose = QDragMoveEvent_Wrapper.SockClose;
QDragMoveEvent.PlatformPanel = QDragMoveEvent_Wrapper.PlatformPanel;
QDragMoveEvent.StyleAnimationUpdate = QDragMoveEvent_Wrapper.StyleAnimationUpdate;
QDragMoveEvent.ApplicationStateChange = QDragMoveEvent_Wrapper.ApplicationStateChange;
QDragMoveEvent.WindowChangeInternal = QDragMoveEvent_Wrapper.WindowChangeInternal;
QDragMoveEvent.ScreenChangeInternal = QDragMoveEvent_Wrapper.ScreenChangeInternal;
QDragMoveEvent.PlatformSurface = QDragMoveEvent_Wrapper.PlatformSurface;
QDragMoveEvent.Pointer = QDragMoveEvent_Wrapper.Pointer;
QDragMoveEvent.TabletTrackingChange = QDragMoveEvent_Wrapper.TabletTrackingChange;
QDragMoveEvent.User = QDragMoveEvent_Wrapper.User;
QDragMoveEvent.MaxUser = QDragMoveEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        QDragMoveEvent.registerEventType = function() 
          
        {
          //print("JS: QDragMoveEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QDragMoveEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDragMoveEvent);
  }

  
  else {
    
        print("QDragMoveEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDragMoveEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDragMoveEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    