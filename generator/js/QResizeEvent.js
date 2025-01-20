
      // auto generated
      //var self;

      // class constructor:
      function QResizeEvent() {
        

        // should be QResizeEvent_BaseJs.call(this, engine):
        //QResizeEvent.prototype = new QResizeEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QResizeEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QResizeEvent);
                
            //}
          }
          else {
            qWarning("QResizeEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QResizeEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QResizeEvent);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QResizeEvent);
  }

  
  else {
    
        print("QResizeEvent(): wrong number / type of arguments");
      
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

      //QResizeEvent.prototype = new QResizeEvent_BaseJs(engine);
      //QResizeEvent.prototype = new QResizeEvent_Wrapper(engine);
      QResizeEvent.prototype = new Object();

      QResizeEvent.prototype.toString = function() {
          //return "QResizeEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QResizeEvent [JS]";
        };
      QResizeEvent.getObjectType = function() {
        return RJSType_QResizeEvent.getIdStatic();
      };

      QResizeEvent.prototype.getObjectType = function() {
        return RJSType_QResizeEvent.getIdStatic();
      };

      QResizeEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QResizeEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QResizeEvent.None = QResizeEvent_Wrapper.None;
QResizeEvent.Timer = QResizeEvent_Wrapper.Timer;
QResizeEvent.MouseButtonPress = QResizeEvent_Wrapper.MouseButtonPress;
QResizeEvent.MouseButtonRelease = QResizeEvent_Wrapper.MouseButtonRelease;
QResizeEvent.MouseButtonDblClick = QResizeEvent_Wrapper.MouseButtonDblClick;
QResizeEvent.MouseMove = QResizeEvent_Wrapper.MouseMove;
QResizeEvent.KeyPress = QResizeEvent_Wrapper.KeyPress;
QResizeEvent.KeyRelease = QResizeEvent_Wrapper.KeyRelease;
QResizeEvent.FocusIn = QResizeEvent_Wrapper.FocusIn;
QResizeEvent.FocusOut = QResizeEvent_Wrapper.FocusOut;
QResizeEvent.FocusAboutToChange = QResizeEvent_Wrapper.FocusAboutToChange;
QResizeEvent.Enter = QResizeEvent_Wrapper.Enter;
QResizeEvent.Leave = QResizeEvent_Wrapper.Leave;
QResizeEvent.Paint = QResizeEvent_Wrapper.Paint;
QResizeEvent.Move = QResizeEvent_Wrapper.Move;
QResizeEvent.Resize = QResizeEvent_Wrapper.Resize;
QResizeEvent.Create = QResizeEvent_Wrapper.Create;
QResizeEvent.Destroy = QResizeEvent_Wrapper.Destroy;
QResizeEvent.Show = QResizeEvent_Wrapper.Show;
QResizeEvent.Hide = QResizeEvent_Wrapper.Hide;
QResizeEvent.Close = QResizeEvent_Wrapper.Close;
QResizeEvent.Quit = QResizeEvent_Wrapper.Quit;
QResizeEvent.ParentChange = QResizeEvent_Wrapper.ParentChange;
QResizeEvent.ParentAboutToChange = QResizeEvent_Wrapper.ParentAboutToChange;
QResizeEvent.ThreadChange = QResizeEvent_Wrapper.ThreadChange;
QResizeEvent.WindowActivate = QResizeEvent_Wrapper.WindowActivate;
QResizeEvent.WindowDeactivate = QResizeEvent_Wrapper.WindowDeactivate;
QResizeEvent.ShowToParent = QResizeEvent_Wrapper.ShowToParent;
QResizeEvent.HideToParent = QResizeEvent_Wrapper.HideToParent;
QResizeEvent.Wheel = QResizeEvent_Wrapper.Wheel;
QResizeEvent.WindowTitleChange = QResizeEvent_Wrapper.WindowTitleChange;
QResizeEvent.WindowIconChange = QResizeEvent_Wrapper.WindowIconChange;
QResizeEvent.ApplicationWindowIconChange = QResizeEvent_Wrapper.ApplicationWindowIconChange;
QResizeEvent.ApplicationFontChange = QResizeEvent_Wrapper.ApplicationFontChange;
QResizeEvent.ApplicationLayoutDirectionChange = QResizeEvent_Wrapper.ApplicationLayoutDirectionChange;
QResizeEvent.ApplicationPaletteChange = QResizeEvent_Wrapper.ApplicationPaletteChange;
QResizeEvent.PaletteChange = QResizeEvent_Wrapper.PaletteChange;
QResizeEvent.Clipboard = QResizeEvent_Wrapper.Clipboard;
QResizeEvent.Speech = QResizeEvent_Wrapper.Speech;
QResizeEvent.MetaCall = QResizeEvent_Wrapper.MetaCall;
QResizeEvent.SockAct = QResizeEvent_Wrapper.SockAct;
QResizeEvent.WinEventAct = QResizeEvent_Wrapper.WinEventAct;
QResizeEvent.DeferredDelete = QResizeEvent_Wrapper.DeferredDelete;
QResizeEvent.DragEnter = QResizeEvent_Wrapper.DragEnter;
QResizeEvent.DragMove = QResizeEvent_Wrapper.DragMove;
QResizeEvent.DragLeave = QResizeEvent_Wrapper.DragLeave;
QResizeEvent.Drop = QResizeEvent_Wrapper.Drop;
QResizeEvent.DragResponse = QResizeEvent_Wrapper.DragResponse;
QResizeEvent.ChildAdded = QResizeEvent_Wrapper.ChildAdded;
QResizeEvent.ChildPolished = QResizeEvent_Wrapper.ChildPolished;
QResizeEvent.ChildRemoved = QResizeEvent_Wrapper.ChildRemoved;
QResizeEvent.ShowWindowRequest = QResizeEvent_Wrapper.ShowWindowRequest;
QResizeEvent.PolishRequest = QResizeEvent_Wrapper.PolishRequest;
QResizeEvent.Polish = QResizeEvent_Wrapper.Polish;
QResizeEvent.LayoutRequest = QResizeEvent_Wrapper.LayoutRequest;
QResizeEvent.UpdateRequest = QResizeEvent_Wrapper.UpdateRequest;
QResizeEvent.UpdateLater = QResizeEvent_Wrapper.UpdateLater;
QResizeEvent.EmbeddingControl = QResizeEvent_Wrapper.EmbeddingControl;
QResizeEvent.ActivateControl = QResizeEvent_Wrapper.ActivateControl;
QResizeEvent.DeactivateControl = QResizeEvent_Wrapper.DeactivateControl;
QResizeEvent.ContextMenu = QResizeEvent_Wrapper.ContextMenu;
QResizeEvent.InputMethod = QResizeEvent_Wrapper.InputMethod;
QResizeEvent.TabletMove = QResizeEvent_Wrapper.TabletMove;
QResizeEvent.LocaleChange = QResizeEvent_Wrapper.LocaleChange;
QResizeEvent.LanguageChange = QResizeEvent_Wrapper.LanguageChange;
QResizeEvent.LayoutDirectionChange = QResizeEvent_Wrapper.LayoutDirectionChange;
QResizeEvent.Style = QResizeEvent_Wrapper.Style;
QResizeEvent.TabletPress = QResizeEvent_Wrapper.TabletPress;
QResizeEvent.TabletRelease = QResizeEvent_Wrapper.TabletRelease;
QResizeEvent.OkRequest = QResizeEvent_Wrapper.OkRequest;
QResizeEvent.HelpRequest = QResizeEvent_Wrapper.HelpRequest;
QResizeEvent.IconDrag = QResizeEvent_Wrapper.IconDrag;
QResizeEvent.FontChange = QResizeEvent_Wrapper.FontChange;
QResizeEvent.EnabledChange = QResizeEvent_Wrapper.EnabledChange;
QResizeEvent.ActivationChange = QResizeEvent_Wrapper.ActivationChange;
QResizeEvent.StyleChange = QResizeEvent_Wrapper.StyleChange;
QResizeEvent.IconTextChange = QResizeEvent_Wrapper.IconTextChange;
QResizeEvent.ModifiedChange = QResizeEvent_Wrapper.ModifiedChange;
QResizeEvent.MouseTrackingChange = QResizeEvent_Wrapper.MouseTrackingChange;
QResizeEvent.WindowBlocked = QResizeEvent_Wrapper.WindowBlocked;
QResizeEvent.WindowUnblocked = QResizeEvent_Wrapper.WindowUnblocked;
QResizeEvent.WindowStateChange = QResizeEvent_Wrapper.WindowStateChange;
QResizeEvent.ReadOnlyChange = QResizeEvent_Wrapper.ReadOnlyChange;
QResizeEvent.ToolTip = QResizeEvent_Wrapper.ToolTip;
QResizeEvent.WhatsThis = QResizeEvent_Wrapper.WhatsThis;
QResizeEvent.StatusTip = QResizeEvent_Wrapper.StatusTip;
QResizeEvent.ActionChanged = QResizeEvent_Wrapper.ActionChanged;
QResizeEvent.ActionAdded = QResizeEvent_Wrapper.ActionAdded;
QResizeEvent.ActionRemoved = QResizeEvent_Wrapper.ActionRemoved;
QResizeEvent.FileOpen = QResizeEvent_Wrapper.FileOpen;
QResizeEvent.Shortcut = QResizeEvent_Wrapper.Shortcut;
QResizeEvent.ShortcutOverride = QResizeEvent_Wrapper.ShortcutOverride;
QResizeEvent.WhatsThisClicked = QResizeEvent_Wrapper.WhatsThisClicked;
QResizeEvent.ToolBarChange = QResizeEvent_Wrapper.ToolBarChange;
QResizeEvent.ApplicationActivate = QResizeEvent_Wrapper.ApplicationActivate;
QResizeEvent.ApplicationActivated = QResizeEvent_Wrapper.ApplicationActivated;
QResizeEvent.ApplicationDeactivate = QResizeEvent_Wrapper.ApplicationDeactivate;
QResizeEvent.ApplicationDeactivated = QResizeEvent_Wrapper.ApplicationDeactivated;
QResizeEvent.QueryWhatsThis = QResizeEvent_Wrapper.QueryWhatsThis;
QResizeEvent.EnterWhatsThisMode = QResizeEvent_Wrapper.EnterWhatsThisMode;
QResizeEvent.LeaveWhatsThisMode = QResizeEvent_Wrapper.LeaveWhatsThisMode;
QResizeEvent.ZOrderChange = QResizeEvent_Wrapper.ZOrderChange;
QResizeEvent.HoverEnter = QResizeEvent_Wrapper.HoverEnter;
QResizeEvent.HoverLeave = QResizeEvent_Wrapper.HoverLeave;
QResizeEvent.HoverMove = QResizeEvent_Wrapper.HoverMove;
QResizeEvent.AcceptDropsChange = QResizeEvent_Wrapper.AcceptDropsChange;
QResizeEvent.ZeroTimerEvent = QResizeEvent_Wrapper.ZeroTimerEvent;
QResizeEvent.GraphicsSceneMouseMove = QResizeEvent_Wrapper.GraphicsSceneMouseMove;
QResizeEvent.GraphicsSceneMousePress = QResizeEvent_Wrapper.GraphicsSceneMousePress;
QResizeEvent.GraphicsSceneMouseRelease = QResizeEvent_Wrapper.GraphicsSceneMouseRelease;
QResizeEvent.GraphicsSceneMouseDoubleClick = QResizeEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QResizeEvent.GraphicsSceneContextMenu = QResizeEvent_Wrapper.GraphicsSceneContextMenu;
QResizeEvent.GraphicsSceneHoverEnter = QResizeEvent_Wrapper.GraphicsSceneHoverEnter;
QResizeEvent.GraphicsSceneHoverMove = QResizeEvent_Wrapper.GraphicsSceneHoverMove;
QResizeEvent.GraphicsSceneHoverLeave = QResizeEvent_Wrapper.GraphicsSceneHoverLeave;
QResizeEvent.GraphicsSceneHelp = QResizeEvent_Wrapper.GraphicsSceneHelp;
QResizeEvent.GraphicsSceneDragEnter = QResizeEvent_Wrapper.GraphicsSceneDragEnter;
QResizeEvent.GraphicsSceneDragMove = QResizeEvent_Wrapper.GraphicsSceneDragMove;
QResizeEvent.GraphicsSceneDragLeave = QResizeEvent_Wrapper.GraphicsSceneDragLeave;
QResizeEvent.GraphicsSceneDrop = QResizeEvent_Wrapper.GraphicsSceneDrop;
QResizeEvent.GraphicsSceneWheel = QResizeEvent_Wrapper.GraphicsSceneWheel;
QResizeEvent.GraphicsSceneLeave = QResizeEvent_Wrapper.GraphicsSceneLeave;
QResizeEvent.KeyboardLayoutChange = QResizeEvent_Wrapper.KeyboardLayoutChange;
QResizeEvent.DynamicPropertyChange = QResizeEvent_Wrapper.DynamicPropertyChange;
QResizeEvent.TabletEnterProximity = QResizeEvent_Wrapper.TabletEnterProximity;
QResizeEvent.TabletLeaveProximity = QResizeEvent_Wrapper.TabletLeaveProximity;
QResizeEvent.NonClientAreaMouseMove = QResizeEvent_Wrapper.NonClientAreaMouseMove;
QResizeEvent.NonClientAreaMouseButtonPress = QResizeEvent_Wrapper.NonClientAreaMouseButtonPress;
QResizeEvent.NonClientAreaMouseButtonRelease = QResizeEvent_Wrapper.NonClientAreaMouseButtonRelease;
QResizeEvent.NonClientAreaMouseButtonDblClick = QResizeEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QResizeEvent.MacSizeChange = QResizeEvent_Wrapper.MacSizeChange;
QResizeEvent.ContentsRectChange = QResizeEvent_Wrapper.ContentsRectChange;
QResizeEvent.MacGLWindowChange = QResizeEvent_Wrapper.MacGLWindowChange;
QResizeEvent.FutureCallOut = QResizeEvent_Wrapper.FutureCallOut;
QResizeEvent.GraphicsSceneResize = QResizeEvent_Wrapper.GraphicsSceneResize;
QResizeEvent.GraphicsSceneMove = QResizeEvent_Wrapper.GraphicsSceneMove;
QResizeEvent.CursorChange = QResizeEvent_Wrapper.CursorChange;
QResizeEvent.ToolTipChange = QResizeEvent_Wrapper.ToolTipChange;
QResizeEvent.NetworkReplyUpdated = QResizeEvent_Wrapper.NetworkReplyUpdated;
QResizeEvent.GrabMouse = QResizeEvent_Wrapper.GrabMouse;
QResizeEvent.UngrabMouse = QResizeEvent_Wrapper.UngrabMouse;
QResizeEvent.GrabKeyboard = QResizeEvent_Wrapper.GrabKeyboard;
QResizeEvent.UngrabKeyboard = QResizeEvent_Wrapper.UngrabKeyboard;
QResizeEvent.StateMachineSignal = QResizeEvent_Wrapper.StateMachineSignal;
QResizeEvent.StateMachineWrapped = QResizeEvent_Wrapper.StateMachineWrapped;
QResizeEvent.TouchBegin = QResizeEvent_Wrapper.TouchBegin;
QResizeEvent.TouchUpdate = QResizeEvent_Wrapper.TouchUpdate;
QResizeEvent.TouchEnd = QResizeEvent_Wrapper.TouchEnd;
QResizeEvent.NativeGesture = QResizeEvent_Wrapper.NativeGesture;
QResizeEvent.RequestSoftwareInputPanel = QResizeEvent_Wrapper.RequestSoftwareInputPanel;
QResizeEvent.CloseSoftwareInputPanel = QResizeEvent_Wrapper.CloseSoftwareInputPanel;
QResizeEvent.WinIdChange = QResizeEvent_Wrapper.WinIdChange;
QResizeEvent.Gesture = QResizeEvent_Wrapper.Gesture;
QResizeEvent.GestureOverride = QResizeEvent_Wrapper.GestureOverride;
QResizeEvent.ScrollPrepare = QResizeEvent_Wrapper.ScrollPrepare;
QResizeEvent.Scroll = QResizeEvent_Wrapper.Scroll;
QResizeEvent.Expose = QResizeEvent_Wrapper.Expose;
QResizeEvent.InputMethodQuery = QResizeEvent_Wrapper.InputMethodQuery;
QResizeEvent.OrientationChange = QResizeEvent_Wrapper.OrientationChange;
QResizeEvent.TouchCancel = QResizeEvent_Wrapper.TouchCancel;
QResizeEvent.ThemeChange = QResizeEvent_Wrapper.ThemeChange;
QResizeEvent.SockClose = QResizeEvent_Wrapper.SockClose;
QResizeEvent.PlatformPanel = QResizeEvent_Wrapper.PlatformPanel;
QResizeEvent.StyleAnimationUpdate = QResizeEvent_Wrapper.StyleAnimationUpdate;
QResizeEvent.ApplicationStateChange = QResizeEvent_Wrapper.ApplicationStateChange;
QResizeEvent.WindowChangeInternal = QResizeEvent_Wrapper.WindowChangeInternal;
QResizeEvent.ScreenChangeInternal = QResizeEvent_Wrapper.ScreenChangeInternal;
QResizeEvent.PlatformSurface = QResizeEvent_Wrapper.PlatformSurface;
QResizeEvent.Pointer = QResizeEvent_Wrapper.Pointer;
QResizeEvent.TabletTrackingChange = QResizeEvent_Wrapper.TabletTrackingChange;
QResizeEvent.User = QResizeEvent_Wrapper.User;
QResizeEvent.MaxUser = QResizeEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QResizeEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QResizeEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      