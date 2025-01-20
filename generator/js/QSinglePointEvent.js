
      // auto generated
      //var self;

      // class constructor:
      function QSinglePointEvent() {
        

        // should be QSinglePointEvent_BaseJs.call(this, engine):
        //QSinglePointEvent.prototype = new QSinglePointEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSinglePointEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSinglePointEvent);
                
            //}
          }
          else {
            qWarning("QSinglePointEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QSinglePointEvent.js: No constructor found for class QSinglePointEvent");
            
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

      //QSinglePointEvent.prototype = new QSinglePointEvent_BaseJs(engine);
      //QSinglePointEvent.prototype = new QSinglePointEvent_Wrapper(engine);
      QSinglePointEvent.prototype = new Object();

      QSinglePointEvent.prototype.toString = function() {
          //return "QSinglePointEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSinglePointEvent [JS]";
        };
      QSinglePointEvent.getObjectType = function() {
        return RJSType_QSinglePointEvent.getIdStatic();
      };

      QSinglePointEvent.prototype.getObjectType = function() {
        return RJSType_QSinglePointEvent.getIdStatic();
      };

      QSinglePointEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSinglePointEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPointerEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QSinglePointEvent.None = QSinglePointEvent_Wrapper.None;
QSinglePointEvent.Timer = QSinglePointEvent_Wrapper.Timer;
QSinglePointEvent.MouseButtonPress = QSinglePointEvent_Wrapper.MouseButtonPress;
QSinglePointEvent.MouseButtonRelease = QSinglePointEvent_Wrapper.MouseButtonRelease;
QSinglePointEvent.MouseButtonDblClick = QSinglePointEvent_Wrapper.MouseButtonDblClick;
QSinglePointEvent.MouseMove = QSinglePointEvent_Wrapper.MouseMove;
QSinglePointEvent.KeyPress = QSinglePointEvent_Wrapper.KeyPress;
QSinglePointEvent.KeyRelease = QSinglePointEvent_Wrapper.KeyRelease;
QSinglePointEvent.FocusIn = QSinglePointEvent_Wrapper.FocusIn;
QSinglePointEvent.FocusOut = QSinglePointEvent_Wrapper.FocusOut;
QSinglePointEvent.FocusAboutToChange = QSinglePointEvent_Wrapper.FocusAboutToChange;
QSinglePointEvent.Enter = QSinglePointEvent_Wrapper.Enter;
QSinglePointEvent.Leave = QSinglePointEvent_Wrapper.Leave;
QSinglePointEvent.Paint = QSinglePointEvent_Wrapper.Paint;
QSinglePointEvent.Move = QSinglePointEvent_Wrapper.Move;
QSinglePointEvent.Resize = QSinglePointEvent_Wrapper.Resize;
QSinglePointEvent.Create = QSinglePointEvent_Wrapper.Create;
QSinglePointEvent.Destroy = QSinglePointEvent_Wrapper.Destroy;
QSinglePointEvent.Show = QSinglePointEvent_Wrapper.Show;
QSinglePointEvent.Hide = QSinglePointEvent_Wrapper.Hide;
QSinglePointEvent.Close = QSinglePointEvent_Wrapper.Close;
QSinglePointEvent.Quit = QSinglePointEvent_Wrapper.Quit;
QSinglePointEvent.ParentChange = QSinglePointEvent_Wrapper.ParentChange;
QSinglePointEvent.ParentAboutToChange = QSinglePointEvent_Wrapper.ParentAboutToChange;
QSinglePointEvent.ThreadChange = QSinglePointEvent_Wrapper.ThreadChange;
QSinglePointEvent.WindowActivate = QSinglePointEvent_Wrapper.WindowActivate;
QSinglePointEvent.WindowDeactivate = QSinglePointEvent_Wrapper.WindowDeactivate;
QSinglePointEvent.ShowToParent = QSinglePointEvent_Wrapper.ShowToParent;
QSinglePointEvent.HideToParent = QSinglePointEvent_Wrapper.HideToParent;
QSinglePointEvent.Wheel = QSinglePointEvent_Wrapper.Wheel;
QSinglePointEvent.WindowTitleChange = QSinglePointEvent_Wrapper.WindowTitleChange;
QSinglePointEvent.WindowIconChange = QSinglePointEvent_Wrapper.WindowIconChange;
QSinglePointEvent.ApplicationWindowIconChange = QSinglePointEvent_Wrapper.ApplicationWindowIconChange;
QSinglePointEvent.ApplicationFontChange = QSinglePointEvent_Wrapper.ApplicationFontChange;
QSinglePointEvent.ApplicationLayoutDirectionChange = QSinglePointEvent_Wrapper.ApplicationLayoutDirectionChange;
QSinglePointEvent.ApplicationPaletteChange = QSinglePointEvent_Wrapper.ApplicationPaletteChange;
QSinglePointEvent.PaletteChange = QSinglePointEvent_Wrapper.PaletteChange;
QSinglePointEvent.Clipboard = QSinglePointEvent_Wrapper.Clipboard;
QSinglePointEvent.Speech = QSinglePointEvent_Wrapper.Speech;
QSinglePointEvent.MetaCall = QSinglePointEvent_Wrapper.MetaCall;
QSinglePointEvent.SockAct = QSinglePointEvent_Wrapper.SockAct;
QSinglePointEvent.WinEventAct = QSinglePointEvent_Wrapper.WinEventAct;
QSinglePointEvent.DeferredDelete = QSinglePointEvent_Wrapper.DeferredDelete;
QSinglePointEvent.DragEnter = QSinglePointEvent_Wrapper.DragEnter;
QSinglePointEvent.DragMove = QSinglePointEvent_Wrapper.DragMove;
QSinglePointEvent.DragLeave = QSinglePointEvent_Wrapper.DragLeave;
QSinglePointEvent.Drop = QSinglePointEvent_Wrapper.Drop;
QSinglePointEvent.DragResponse = QSinglePointEvent_Wrapper.DragResponse;
QSinglePointEvent.ChildAdded = QSinglePointEvent_Wrapper.ChildAdded;
QSinglePointEvent.ChildPolished = QSinglePointEvent_Wrapper.ChildPolished;
QSinglePointEvent.ChildRemoved = QSinglePointEvent_Wrapper.ChildRemoved;
QSinglePointEvent.ShowWindowRequest = QSinglePointEvent_Wrapper.ShowWindowRequest;
QSinglePointEvent.PolishRequest = QSinglePointEvent_Wrapper.PolishRequest;
QSinglePointEvent.Polish = QSinglePointEvent_Wrapper.Polish;
QSinglePointEvent.LayoutRequest = QSinglePointEvent_Wrapper.LayoutRequest;
QSinglePointEvent.UpdateRequest = QSinglePointEvent_Wrapper.UpdateRequest;
QSinglePointEvent.UpdateLater = QSinglePointEvent_Wrapper.UpdateLater;
QSinglePointEvent.EmbeddingControl = QSinglePointEvent_Wrapper.EmbeddingControl;
QSinglePointEvent.ActivateControl = QSinglePointEvent_Wrapper.ActivateControl;
QSinglePointEvent.DeactivateControl = QSinglePointEvent_Wrapper.DeactivateControl;
QSinglePointEvent.ContextMenu = QSinglePointEvent_Wrapper.ContextMenu;
QSinglePointEvent.InputMethod = QSinglePointEvent_Wrapper.InputMethod;
QSinglePointEvent.TabletMove = QSinglePointEvent_Wrapper.TabletMove;
QSinglePointEvent.LocaleChange = QSinglePointEvent_Wrapper.LocaleChange;
QSinglePointEvent.LanguageChange = QSinglePointEvent_Wrapper.LanguageChange;
QSinglePointEvent.LayoutDirectionChange = QSinglePointEvent_Wrapper.LayoutDirectionChange;
QSinglePointEvent.Style = QSinglePointEvent_Wrapper.Style;
QSinglePointEvent.TabletPress = QSinglePointEvent_Wrapper.TabletPress;
QSinglePointEvent.TabletRelease = QSinglePointEvent_Wrapper.TabletRelease;
QSinglePointEvent.OkRequest = QSinglePointEvent_Wrapper.OkRequest;
QSinglePointEvent.HelpRequest = QSinglePointEvent_Wrapper.HelpRequest;
QSinglePointEvent.IconDrag = QSinglePointEvent_Wrapper.IconDrag;
QSinglePointEvent.FontChange = QSinglePointEvent_Wrapper.FontChange;
QSinglePointEvent.EnabledChange = QSinglePointEvent_Wrapper.EnabledChange;
QSinglePointEvent.ActivationChange = QSinglePointEvent_Wrapper.ActivationChange;
QSinglePointEvent.StyleChange = QSinglePointEvent_Wrapper.StyleChange;
QSinglePointEvent.IconTextChange = QSinglePointEvent_Wrapper.IconTextChange;
QSinglePointEvent.ModifiedChange = QSinglePointEvent_Wrapper.ModifiedChange;
QSinglePointEvent.MouseTrackingChange = QSinglePointEvent_Wrapper.MouseTrackingChange;
QSinglePointEvent.WindowBlocked = QSinglePointEvent_Wrapper.WindowBlocked;
QSinglePointEvent.WindowUnblocked = QSinglePointEvent_Wrapper.WindowUnblocked;
QSinglePointEvent.WindowStateChange = QSinglePointEvent_Wrapper.WindowStateChange;
QSinglePointEvent.ReadOnlyChange = QSinglePointEvent_Wrapper.ReadOnlyChange;
QSinglePointEvent.ToolTip = QSinglePointEvent_Wrapper.ToolTip;
QSinglePointEvent.WhatsThis = QSinglePointEvent_Wrapper.WhatsThis;
QSinglePointEvent.StatusTip = QSinglePointEvent_Wrapper.StatusTip;
QSinglePointEvent.ActionChanged = QSinglePointEvent_Wrapper.ActionChanged;
QSinglePointEvent.ActionAdded = QSinglePointEvent_Wrapper.ActionAdded;
QSinglePointEvent.ActionRemoved = QSinglePointEvent_Wrapper.ActionRemoved;
QSinglePointEvent.FileOpen = QSinglePointEvent_Wrapper.FileOpen;
QSinglePointEvent.Shortcut = QSinglePointEvent_Wrapper.Shortcut;
QSinglePointEvent.ShortcutOverride = QSinglePointEvent_Wrapper.ShortcutOverride;
QSinglePointEvent.WhatsThisClicked = QSinglePointEvent_Wrapper.WhatsThisClicked;
QSinglePointEvent.ToolBarChange = QSinglePointEvent_Wrapper.ToolBarChange;
QSinglePointEvent.ApplicationActivate = QSinglePointEvent_Wrapper.ApplicationActivate;
QSinglePointEvent.ApplicationActivated = QSinglePointEvent_Wrapper.ApplicationActivated;
QSinglePointEvent.ApplicationDeactivate = QSinglePointEvent_Wrapper.ApplicationDeactivate;
QSinglePointEvent.ApplicationDeactivated = QSinglePointEvent_Wrapper.ApplicationDeactivated;
QSinglePointEvent.QueryWhatsThis = QSinglePointEvent_Wrapper.QueryWhatsThis;
QSinglePointEvent.EnterWhatsThisMode = QSinglePointEvent_Wrapper.EnterWhatsThisMode;
QSinglePointEvent.LeaveWhatsThisMode = QSinglePointEvent_Wrapper.LeaveWhatsThisMode;
QSinglePointEvent.ZOrderChange = QSinglePointEvent_Wrapper.ZOrderChange;
QSinglePointEvent.HoverEnter = QSinglePointEvent_Wrapper.HoverEnter;
QSinglePointEvent.HoverLeave = QSinglePointEvent_Wrapper.HoverLeave;
QSinglePointEvent.HoverMove = QSinglePointEvent_Wrapper.HoverMove;
QSinglePointEvent.AcceptDropsChange = QSinglePointEvent_Wrapper.AcceptDropsChange;
QSinglePointEvent.ZeroTimerEvent = QSinglePointEvent_Wrapper.ZeroTimerEvent;
QSinglePointEvent.GraphicsSceneMouseMove = QSinglePointEvent_Wrapper.GraphicsSceneMouseMove;
QSinglePointEvent.GraphicsSceneMousePress = QSinglePointEvent_Wrapper.GraphicsSceneMousePress;
QSinglePointEvent.GraphicsSceneMouseRelease = QSinglePointEvent_Wrapper.GraphicsSceneMouseRelease;
QSinglePointEvent.GraphicsSceneMouseDoubleClick = QSinglePointEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QSinglePointEvent.GraphicsSceneContextMenu = QSinglePointEvent_Wrapper.GraphicsSceneContextMenu;
QSinglePointEvent.GraphicsSceneHoverEnter = QSinglePointEvent_Wrapper.GraphicsSceneHoverEnter;
QSinglePointEvent.GraphicsSceneHoverMove = QSinglePointEvent_Wrapper.GraphicsSceneHoverMove;
QSinglePointEvent.GraphicsSceneHoverLeave = QSinglePointEvent_Wrapper.GraphicsSceneHoverLeave;
QSinglePointEvent.GraphicsSceneHelp = QSinglePointEvent_Wrapper.GraphicsSceneHelp;
QSinglePointEvent.GraphicsSceneDragEnter = QSinglePointEvent_Wrapper.GraphicsSceneDragEnter;
QSinglePointEvent.GraphicsSceneDragMove = QSinglePointEvent_Wrapper.GraphicsSceneDragMove;
QSinglePointEvent.GraphicsSceneDragLeave = QSinglePointEvent_Wrapper.GraphicsSceneDragLeave;
QSinglePointEvent.GraphicsSceneDrop = QSinglePointEvent_Wrapper.GraphicsSceneDrop;
QSinglePointEvent.GraphicsSceneWheel = QSinglePointEvent_Wrapper.GraphicsSceneWheel;
QSinglePointEvent.GraphicsSceneLeave = QSinglePointEvent_Wrapper.GraphicsSceneLeave;
QSinglePointEvent.KeyboardLayoutChange = QSinglePointEvent_Wrapper.KeyboardLayoutChange;
QSinglePointEvent.DynamicPropertyChange = QSinglePointEvent_Wrapper.DynamicPropertyChange;
QSinglePointEvent.TabletEnterProximity = QSinglePointEvent_Wrapper.TabletEnterProximity;
QSinglePointEvent.TabletLeaveProximity = QSinglePointEvent_Wrapper.TabletLeaveProximity;
QSinglePointEvent.NonClientAreaMouseMove = QSinglePointEvent_Wrapper.NonClientAreaMouseMove;
QSinglePointEvent.NonClientAreaMouseButtonPress = QSinglePointEvent_Wrapper.NonClientAreaMouseButtonPress;
QSinglePointEvent.NonClientAreaMouseButtonRelease = QSinglePointEvent_Wrapper.NonClientAreaMouseButtonRelease;
QSinglePointEvent.NonClientAreaMouseButtonDblClick = QSinglePointEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QSinglePointEvent.MacSizeChange = QSinglePointEvent_Wrapper.MacSizeChange;
QSinglePointEvent.ContentsRectChange = QSinglePointEvent_Wrapper.ContentsRectChange;
QSinglePointEvent.MacGLWindowChange = QSinglePointEvent_Wrapper.MacGLWindowChange;
QSinglePointEvent.FutureCallOut = QSinglePointEvent_Wrapper.FutureCallOut;
QSinglePointEvent.GraphicsSceneResize = QSinglePointEvent_Wrapper.GraphicsSceneResize;
QSinglePointEvent.GraphicsSceneMove = QSinglePointEvent_Wrapper.GraphicsSceneMove;
QSinglePointEvent.CursorChange = QSinglePointEvent_Wrapper.CursorChange;
QSinglePointEvent.ToolTipChange = QSinglePointEvent_Wrapper.ToolTipChange;
QSinglePointEvent.NetworkReplyUpdated = QSinglePointEvent_Wrapper.NetworkReplyUpdated;
QSinglePointEvent.GrabMouse = QSinglePointEvent_Wrapper.GrabMouse;
QSinglePointEvent.UngrabMouse = QSinglePointEvent_Wrapper.UngrabMouse;
QSinglePointEvent.GrabKeyboard = QSinglePointEvent_Wrapper.GrabKeyboard;
QSinglePointEvent.UngrabKeyboard = QSinglePointEvent_Wrapper.UngrabKeyboard;
QSinglePointEvent.StateMachineSignal = QSinglePointEvent_Wrapper.StateMachineSignal;
QSinglePointEvent.StateMachineWrapped = QSinglePointEvent_Wrapper.StateMachineWrapped;
QSinglePointEvent.TouchBegin = QSinglePointEvent_Wrapper.TouchBegin;
QSinglePointEvent.TouchUpdate = QSinglePointEvent_Wrapper.TouchUpdate;
QSinglePointEvent.TouchEnd = QSinglePointEvent_Wrapper.TouchEnd;
QSinglePointEvent.NativeGesture = QSinglePointEvent_Wrapper.NativeGesture;
QSinglePointEvent.RequestSoftwareInputPanel = QSinglePointEvent_Wrapper.RequestSoftwareInputPanel;
QSinglePointEvent.CloseSoftwareInputPanel = QSinglePointEvent_Wrapper.CloseSoftwareInputPanel;
QSinglePointEvent.WinIdChange = QSinglePointEvent_Wrapper.WinIdChange;
QSinglePointEvent.Gesture = QSinglePointEvent_Wrapper.Gesture;
QSinglePointEvent.GestureOverride = QSinglePointEvent_Wrapper.GestureOverride;
QSinglePointEvent.ScrollPrepare = QSinglePointEvent_Wrapper.ScrollPrepare;
QSinglePointEvent.Scroll = QSinglePointEvent_Wrapper.Scroll;
QSinglePointEvent.Expose = QSinglePointEvent_Wrapper.Expose;
QSinglePointEvent.InputMethodQuery = QSinglePointEvent_Wrapper.InputMethodQuery;
QSinglePointEvent.OrientationChange = QSinglePointEvent_Wrapper.OrientationChange;
QSinglePointEvent.TouchCancel = QSinglePointEvent_Wrapper.TouchCancel;
QSinglePointEvent.ThemeChange = QSinglePointEvent_Wrapper.ThemeChange;
QSinglePointEvent.SockClose = QSinglePointEvent_Wrapper.SockClose;
QSinglePointEvent.PlatformPanel = QSinglePointEvent_Wrapper.PlatformPanel;
QSinglePointEvent.StyleAnimationUpdate = QSinglePointEvent_Wrapper.StyleAnimationUpdate;
QSinglePointEvent.ApplicationStateChange = QSinglePointEvent_Wrapper.ApplicationStateChange;
QSinglePointEvent.WindowChangeInternal = QSinglePointEvent_Wrapper.WindowChangeInternal;
QSinglePointEvent.ScreenChangeInternal = QSinglePointEvent_Wrapper.ScreenChangeInternal;
QSinglePointEvent.PlatformSurface = QSinglePointEvent_Wrapper.PlatformSurface;
QSinglePointEvent.Pointer = QSinglePointEvent_Wrapper.Pointer;
QSinglePointEvent.TabletTrackingChange = QSinglePointEvent_Wrapper.TabletTrackingChange;
QSinglePointEvent.User = QSinglePointEvent_Wrapper.User;
QSinglePointEvent.MaxUser = QSinglePointEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSinglePointEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSinglePointEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      