
      // auto generated
      //var self;

      // class constructor:
      function QDropEvent() {
        

        // should be QDropEvent_BaseJs.call(this, engine):
        //QDropEvent.prototype = new QDropEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QDropEvent.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDropEvent);
            //}
          }
          else {
            qWarning("QDropEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 5 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new QDropEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDropEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDropEvent);
  }

  
  else {
    
        print("QDropEvent(): wrong number / type of arguments");
      
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

      //QDropEvent.prototype = new QDropEvent_BaseJs(engine);
      //QDropEvent.prototype = new QDropEvent_Wrapper(engine);
      QDropEvent.prototype = new Object();

      QDropEvent.prototype.toString = function() {
          //return "QDropEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDropEvent [JS]";
        };
      QDropEvent.getObjectType = function() {
        
            return RJSType_QDropEvent.getIdStatic();
          
      };

      QDropEvent.prototype.getObjectType = function() {
        
            return RJSType_QDropEvent.getIdStatic();
          
      };

      QDropEvent.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QDropEvent.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QDropEvent.None = QDropEvent_Wrapper.None;
QDropEvent.Timer = QDropEvent_Wrapper.Timer;
QDropEvent.MouseButtonPress = QDropEvent_Wrapper.MouseButtonPress;
QDropEvent.MouseButtonRelease = QDropEvent_Wrapper.MouseButtonRelease;
QDropEvent.MouseButtonDblClick = QDropEvent_Wrapper.MouseButtonDblClick;
QDropEvent.MouseMove = QDropEvent_Wrapper.MouseMove;
QDropEvent.KeyPress = QDropEvent_Wrapper.KeyPress;
QDropEvent.KeyRelease = QDropEvent_Wrapper.KeyRelease;
QDropEvent.FocusIn = QDropEvent_Wrapper.FocusIn;
QDropEvent.FocusOut = QDropEvent_Wrapper.FocusOut;
QDropEvent.FocusAboutToChange = QDropEvent_Wrapper.FocusAboutToChange;
QDropEvent.Enter = QDropEvent_Wrapper.Enter;
QDropEvent.Leave = QDropEvent_Wrapper.Leave;
QDropEvent.Paint = QDropEvent_Wrapper.Paint;
QDropEvent.Move = QDropEvent_Wrapper.Move;
QDropEvent.Resize = QDropEvent_Wrapper.Resize;
QDropEvent.Create = QDropEvent_Wrapper.Create;
QDropEvent.Destroy = QDropEvent_Wrapper.Destroy;
QDropEvent.Show = QDropEvent_Wrapper.Show;
QDropEvent.Hide = QDropEvent_Wrapper.Hide;
QDropEvent.Close = QDropEvent_Wrapper.Close;
QDropEvent.Quit = QDropEvent_Wrapper.Quit;
QDropEvent.ParentChange = QDropEvent_Wrapper.ParentChange;
QDropEvent.ParentAboutToChange = QDropEvent_Wrapper.ParentAboutToChange;
QDropEvent.ThreadChange = QDropEvent_Wrapper.ThreadChange;
QDropEvent.WindowActivate = QDropEvent_Wrapper.WindowActivate;
QDropEvent.WindowDeactivate = QDropEvent_Wrapper.WindowDeactivate;
QDropEvent.ShowToParent = QDropEvent_Wrapper.ShowToParent;
QDropEvent.HideToParent = QDropEvent_Wrapper.HideToParent;
QDropEvent.Wheel = QDropEvent_Wrapper.Wheel;
QDropEvent.WindowTitleChange = QDropEvent_Wrapper.WindowTitleChange;
QDropEvent.WindowIconChange = QDropEvent_Wrapper.WindowIconChange;
QDropEvent.ApplicationWindowIconChange = QDropEvent_Wrapper.ApplicationWindowIconChange;
QDropEvent.ApplicationFontChange = QDropEvent_Wrapper.ApplicationFontChange;
QDropEvent.ApplicationLayoutDirectionChange = QDropEvent_Wrapper.ApplicationLayoutDirectionChange;
QDropEvent.ApplicationPaletteChange = QDropEvent_Wrapper.ApplicationPaletteChange;
QDropEvent.PaletteChange = QDropEvent_Wrapper.PaletteChange;
QDropEvent.Clipboard = QDropEvent_Wrapper.Clipboard;
QDropEvent.Speech = QDropEvent_Wrapper.Speech;
QDropEvent.MetaCall = QDropEvent_Wrapper.MetaCall;
QDropEvent.SockAct = QDropEvent_Wrapper.SockAct;
QDropEvent.WinEventAct = QDropEvent_Wrapper.WinEventAct;
QDropEvent.DeferredDelete = QDropEvent_Wrapper.DeferredDelete;
QDropEvent.DragEnter = QDropEvent_Wrapper.DragEnter;
QDropEvent.DragMove = QDropEvent_Wrapper.DragMove;
QDropEvent.DragLeave = QDropEvent_Wrapper.DragLeave;
QDropEvent.Drop = QDropEvent_Wrapper.Drop;
QDropEvent.DragResponse = QDropEvent_Wrapper.DragResponse;
QDropEvent.ChildAdded = QDropEvent_Wrapper.ChildAdded;
QDropEvent.ChildPolished = QDropEvent_Wrapper.ChildPolished;
QDropEvent.ChildRemoved = QDropEvent_Wrapper.ChildRemoved;
QDropEvent.ShowWindowRequest = QDropEvent_Wrapper.ShowWindowRequest;
QDropEvent.PolishRequest = QDropEvent_Wrapper.PolishRequest;
QDropEvent.Polish = QDropEvent_Wrapper.Polish;
QDropEvent.LayoutRequest = QDropEvent_Wrapper.LayoutRequest;
QDropEvent.UpdateRequest = QDropEvent_Wrapper.UpdateRequest;
QDropEvent.UpdateLater = QDropEvent_Wrapper.UpdateLater;
QDropEvent.EmbeddingControl = QDropEvent_Wrapper.EmbeddingControl;
QDropEvent.ActivateControl = QDropEvent_Wrapper.ActivateControl;
QDropEvent.DeactivateControl = QDropEvent_Wrapper.DeactivateControl;
QDropEvent.ContextMenu = QDropEvent_Wrapper.ContextMenu;
QDropEvent.InputMethod = QDropEvent_Wrapper.InputMethod;
QDropEvent.TabletMove = QDropEvent_Wrapper.TabletMove;
QDropEvent.LocaleChange = QDropEvent_Wrapper.LocaleChange;
QDropEvent.LanguageChange = QDropEvent_Wrapper.LanguageChange;
QDropEvent.LayoutDirectionChange = QDropEvent_Wrapper.LayoutDirectionChange;
QDropEvent.Style = QDropEvent_Wrapper.Style;
QDropEvent.TabletPress = QDropEvent_Wrapper.TabletPress;
QDropEvent.TabletRelease = QDropEvent_Wrapper.TabletRelease;
QDropEvent.OkRequest = QDropEvent_Wrapper.OkRequest;
QDropEvent.HelpRequest = QDropEvent_Wrapper.HelpRequest;
QDropEvent.IconDrag = QDropEvent_Wrapper.IconDrag;
QDropEvent.FontChange = QDropEvent_Wrapper.FontChange;
QDropEvent.EnabledChange = QDropEvent_Wrapper.EnabledChange;
QDropEvent.ActivationChange = QDropEvent_Wrapper.ActivationChange;
QDropEvent.StyleChange = QDropEvent_Wrapper.StyleChange;
QDropEvent.IconTextChange = QDropEvent_Wrapper.IconTextChange;
QDropEvent.ModifiedChange = QDropEvent_Wrapper.ModifiedChange;
QDropEvent.MouseTrackingChange = QDropEvent_Wrapper.MouseTrackingChange;
QDropEvent.WindowBlocked = QDropEvent_Wrapper.WindowBlocked;
QDropEvent.WindowUnblocked = QDropEvent_Wrapper.WindowUnblocked;
QDropEvent.WindowStateChange = QDropEvent_Wrapper.WindowStateChange;
QDropEvent.ReadOnlyChange = QDropEvent_Wrapper.ReadOnlyChange;
QDropEvent.ToolTip = QDropEvent_Wrapper.ToolTip;
QDropEvent.WhatsThis = QDropEvent_Wrapper.WhatsThis;
QDropEvent.StatusTip = QDropEvent_Wrapper.StatusTip;
QDropEvent.ActionChanged = QDropEvent_Wrapper.ActionChanged;
QDropEvent.ActionAdded = QDropEvent_Wrapper.ActionAdded;
QDropEvent.ActionRemoved = QDropEvent_Wrapper.ActionRemoved;
QDropEvent.FileOpen = QDropEvent_Wrapper.FileOpen;
QDropEvent.Shortcut = QDropEvent_Wrapper.Shortcut;
QDropEvent.ShortcutOverride = QDropEvent_Wrapper.ShortcutOverride;
QDropEvent.WhatsThisClicked = QDropEvent_Wrapper.WhatsThisClicked;
QDropEvent.ToolBarChange = QDropEvent_Wrapper.ToolBarChange;
QDropEvent.ApplicationActivate = QDropEvent_Wrapper.ApplicationActivate;
QDropEvent.ApplicationActivated = QDropEvent_Wrapper.ApplicationActivated;
QDropEvent.ApplicationDeactivate = QDropEvent_Wrapper.ApplicationDeactivate;
QDropEvent.ApplicationDeactivated = QDropEvent_Wrapper.ApplicationDeactivated;
QDropEvent.QueryWhatsThis = QDropEvent_Wrapper.QueryWhatsThis;
QDropEvent.EnterWhatsThisMode = QDropEvent_Wrapper.EnterWhatsThisMode;
QDropEvent.LeaveWhatsThisMode = QDropEvent_Wrapper.LeaveWhatsThisMode;
QDropEvent.ZOrderChange = QDropEvent_Wrapper.ZOrderChange;
QDropEvent.HoverEnter = QDropEvent_Wrapper.HoverEnter;
QDropEvent.HoverLeave = QDropEvent_Wrapper.HoverLeave;
QDropEvent.HoverMove = QDropEvent_Wrapper.HoverMove;
QDropEvent.AcceptDropsChange = QDropEvent_Wrapper.AcceptDropsChange;
QDropEvent.ZeroTimerEvent = QDropEvent_Wrapper.ZeroTimerEvent;
QDropEvent.GraphicsSceneMouseMove = QDropEvent_Wrapper.GraphicsSceneMouseMove;
QDropEvent.GraphicsSceneMousePress = QDropEvent_Wrapper.GraphicsSceneMousePress;
QDropEvent.GraphicsSceneMouseRelease = QDropEvent_Wrapper.GraphicsSceneMouseRelease;
QDropEvent.GraphicsSceneMouseDoubleClick = QDropEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QDropEvent.GraphicsSceneContextMenu = QDropEvent_Wrapper.GraphicsSceneContextMenu;
QDropEvent.GraphicsSceneHoverEnter = QDropEvent_Wrapper.GraphicsSceneHoverEnter;
QDropEvent.GraphicsSceneHoverMove = QDropEvent_Wrapper.GraphicsSceneHoverMove;
QDropEvent.GraphicsSceneHoverLeave = QDropEvent_Wrapper.GraphicsSceneHoverLeave;
QDropEvent.GraphicsSceneHelp = QDropEvent_Wrapper.GraphicsSceneHelp;
QDropEvent.GraphicsSceneDragEnter = QDropEvent_Wrapper.GraphicsSceneDragEnter;
QDropEvent.GraphicsSceneDragMove = QDropEvent_Wrapper.GraphicsSceneDragMove;
QDropEvent.GraphicsSceneDragLeave = QDropEvent_Wrapper.GraphicsSceneDragLeave;
QDropEvent.GraphicsSceneDrop = QDropEvent_Wrapper.GraphicsSceneDrop;
QDropEvent.GraphicsSceneWheel = QDropEvent_Wrapper.GraphicsSceneWheel;
QDropEvent.GraphicsSceneLeave = QDropEvent_Wrapper.GraphicsSceneLeave;
QDropEvent.KeyboardLayoutChange = QDropEvent_Wrapper.KeyboardLayoutChange;
QDropEvent.DynamicPropertyChange = QDropEvent_Wrapper.DynamicPropertyChange;
QDropEvent.TabletEnterProximity = QDropEvent_Wrapper.TabletEnterProximity;
QDropEvent.TabletLeaveProximity = QDropEvent_Wrapper.TabletLeaveProximity;
QDropEvent.NonClientAreaMouseMove = QDropEvent_Wrapper.NonClientAreaMouseMove;
QDropEvent.NonClientAreaMouseButtonPress = QDropEvent_Wrapper.NonClientAreaMouseButtonPress;
QDropEvent.NonClientAreaMouseButtonRelease = QDropEvent_Wrapper.NonClientAreaMouseButtonRelease;
QDropEvent.NonClientAreaMouseButtonDblClick = QDropEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QDropEvent.MacSizeChange = QDropEvent_Wrapper.MacSizeChange;
QDropEvent.ContentsRectChange = QDropEvent_Wrapper.ContentsRectChange;
QDropEvent.MacGLWindowChange = QDropEvent_Wrapper.MacGLWindowChange;
QDropEvent.FutureCallOut = QDropEvent_Wrapper.FutureCallOut;
QDropEvent.GraphicsSceneResize = QDropEvent_Wrapper.GraphicsSceneResize;
QDropEvent.GraphicsSceneMove = QDropEvent_Wrapper.GraphicsSceneMove;
QDropEvent.CursorChange = QDropEvent_Wrapper.CursorChange;
QDropEvent.ToolTipChange = QDropEvent_Wrapper.ToolTipChange;
QDropEvent.NetworkReplyUpdated = QDropEvent_Wrapper.NetworkReplyUpdated;
QDropEvent.GrabMouse = QDropEvent_Wrapper.GrabMouse;
QDropEvent.UngrabMouse = QDropEvent_Wrapper.UngrabMouse;
QDropEvent.GrabKeyboard = QDropEvent_Wrapper.GrabKeyboard;
QDropEvent.UngrabKeyboard = QDropEvent_Wrapper.UngrabKeyboard;
QDropEvent.StateMachineSignal = QDropEvent_Wrapper.StateMachineSignal;
QDropEvent.StateMachineWrapped = QDropEvent_Wrapper.StateMachineWrapped;
QDropEvent.TouchBegin = QDropEvent_Wrapper.TouchBegin;
QDropEvent.TouchUpdate = QDropEvent_Wrapper.TouchUpdate;
QDropEvent.TouchEnd = QDropEvent_Wrapper.TouchEnd;
QDropEvent.NativeGesture = QDropEvent_Wrapper.NativeGesture;
QDropEvent.RequestSoftwareInputPanel = QDropEvent_Wrapper.RequestSoftwareInputPanel;
QDropEvent.CloseSoftwareInputPanel = QDropEvent_Wrapper.CloseSoftwareInputPanel;
QDropEvent.WinIdChange = QDropEvent_Wrapper.WinIdChange;
QDropEvent.Gesture = QDropEvent_Wrapper.Gesture;
QDropEvent.GestureOverride = QDropEvent_Wrapper.GestureOverride;
QDropEvent.ScrollPrepare = QDropEvent_Wrapper.ScrollPrepare;
QDropEvent.Scroll = QDropEvent_Wrapper.Scroll;
QDropEvent.Expose = QDropEvent_Wrapper.Expose;
QDropEvent.InputMethodQuery = QDropEvent_Wrapper.InputMethodQuery;
QDropEvent.OrientationChange = QDropEvent_Wrapper.OrientationChange;
QDropEvent.TouchCancel = QDropEvent_Wrapper.TouchCancel;
QDropEvent.ThemeChange = QDropEvent_Wrapper.ThemeChange;
QDropEvent.SockClose = QDropEvent_Wrapper.SockClose;
QDropEvent.PlatformPanel = QDropEvent_Wrapper.PlatformPanel;
QDropEvent.StyleAnimationUpdate = QDropEvent_Wrapper.StyleAnimationUpdate;
QDropEvent.ApplicationStateChange = QDropEvent_Wrapper.ApplicationStateChange;
QDropEvent.WindowChangeInternal = QDropEvent_Wrapper.WindowChangeInternal;
QDropEvent.ScreenChangeInternal = QDropEvent_Wrapper.ScreenChangeInternal;
QDropEvent.PlatformSurface = QDropEvent_Wrapper.PlatformSurface;
QDropEvent.Pointer = QDropEvent_Wrapper.Pointer;
QDropEvent.TabletTrackingChange = QDropEvent_Wrapper.TabletTrackingChange;
QDropEvent.User = QDropEvent_Wrapper.User;
QDropEvent.MaxUser = QDropEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        QDropEvent.registerEventType = function() 
          
        {
          //print("JS: QDropEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QDropEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDropEvent);
  }

  
  else {
    
        print("QDropEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDropEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDropEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    