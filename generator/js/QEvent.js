
      // auto generated
      //var self;

      // class constructor:
      function QEvent() {
        

        // should be QEvent_BaseJs.call(this, engine):
        //QEvent.prototype = new QEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QEvent.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QEvent);
            //}
          }
          else {
            qWarning("QEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QEvent);
  }

  
  else {
    
        print("QEvent(): wrong number / type of arguments");
      
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

      //QEvent.prototype = new QEvent_BaseJs(engine);
      //QEvent.prototype = new QEvent_Wrapper(engine);
      QEvent.prototype = new Object();

      QEvent.prototype.toString = function() {
          //return "QEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QEvent [JS]";
        };
      QEvent.getObjectType = function() {
        
            return RJSType_QEvent.getIdStatic();
          
      };

      QEvent.prototype.getObjectType = function() {
        
            return RJSType_QEvent.getIdStatic();
          
      };

      QEvent.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QEvent.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      
  // enum: Type
QEvent.None = QEvent_Wrapper.None;
QEvent.Timer = QEvent_Wrapper.Timer;
QEvent.MouseButtonPress = QEvent_Wrapper.MouseButtonPress;
QEvent.MouseButtonRelease = QEvent_Wrapper.MouseButtonRelease;
QEvent.MouseButtonDblClick = QEvent_Wrapper.MouseButtonDblClick;
QEvent.MouseMove = QEvent_Wrapper.MouseMove;
QEvent.KeyPress = QEvent_Wrapper.KeyPress;
QEvent.KeyRelease = QEvent_Wrapper.KeyRelease;
QEvent.FocusIn = QEvent_Wrapper.FocusIn;
QEvent.FocusOut = QEvent_Wrapper.FocusOut;
QEvent.FocusAboutToChange = QEvent_Wrapper.FocusAboutToChange;
QEvent.Enter = QEvent_Wrapper.Enter;
QEvent.Leave = QEvent_Wrapper.Leave;
QEvent.Paint = QEvent_Wrapper.Paint;
QEvent.Move = QEvent_Wrapper.Move;
QEvent.Resize = QEvent_Wrapper.Resize;
QEvent.Create = QEvent_Wrapper.Create;
QEvent.Destroy = QEvent_Wrapper.Destroy;
QEvent.Show = QEvent_Wrapper.Show;
QEvent.Hide = QEvent_Wrapper.Hide;
QEvent.Close = QEvent_Wrapper.Close;
QEvent.Quit = QEvent_Wrapper.Quit;
QEvent.ParentChange = QEvent_Wrapper.ParentChange;
QEvent.ParentAboutToChange = QEvent_Wrapper.ParentAboutToChange;
QEvent.ThreadChange = QEvent_Wrapper.ThreadChange;
QEvent.WindowActivate = QEvent_Wrapper.WindowActivate;
QEvent.WindowDeactivate = QEvent_Wrapper.WindowDeactivate;
QEvent.ShowToParent = QEvent_Wrapper.ShowToParent;
QEvent.HideToParent = QEvent_Wrapper.HideToParent;
QEvent.Wheel = QEvent_Wrapper.Wheel;
QEvent.WindowTitleChange = QEvent_Wrapper.WindowTitleChange;
QEvent.WindowIconChange = QEvent_Wrapper.WindowIconChange;
QEvent.ApplicationWindowIconChange = QEvent_Wrapper.ApplicationWindowIconChange;
QEvent.ApplicationFontChange = QEvent_Wrapper.ApplicationFontChange;
QEvent.ApplicationLayoutDirectionChange = QEvent_Wrapper.ApplicationLayoutDirectionChange;
QEvent.ApplicationPaletteChange = QEvent_Wrapper.ApplicationPaletteChange;
QEvent.PaletteChange = QEvent_Wrapper.PaletteChange;
QEvent.Clipboard = QEvent_Wrapper.Clipboard;
QEvent.Speech = QEvent_Wrapper.Speech;
QEvent.MetaCall = QEvent_Wrapper.MetaCall;
QEvent.SockAct = QEvent_Wrapper.SockAct;
QEvent.WinEventAct = QEvent_Wrapper.WinEventAct;
QEvent.DeferredDelete = QEvent_Wrapper.DeferredDelete;
QEvent.DragEnter = QEvent_Wrapper.DragEnter;
QEvent.DragMove = QEvent_Wrapper.DragMove;
QEvent.DragLeave = QEvent_Wrapper.DragLeave;
QEvent.Drop = QEvent_Wrapper.Drop;
QEvent.DragResponse = QEvent_Wrapper.DragResponse;
QEvent.ChildAdded = QEvent_Wrapper.ChildAdded;
QEvent.ChildPolished = QEvent_Wrapper.ChildPolished;
QEvent.ChildRemoved = QEvent_Wrapper.ChildRemoved;
QEvent.ShowWindowRequest = QEvent_Wrapper.ShowWindowRequest;
QEvent.PolishRequest = QEvent_Wrapper.PolishRequest;
QEvent.Polish = QEvent_Wrapper.Polish;
QEvent.LayoutRequest = QEvent_Wrapper.LayoutRequest;
QEvent.UpdateRequest = QEvent_Wrapper.UpdateRequest;
QEvent.UpdateLater = QEvent_Wrapper.UpdateLater;
QEvent.EmbeddingControl = QEvent_Wrapper.EmbeddingControl;
QEvent.ActivateControl = QEvent_Wrapper.ActivateControl;
QEvent.DeactivateControl = QEvent_Wrapper.DeactivateControl;
QEvent.ContextMenu = QEvent_Wrapper.ContextMenu;
QEvent.InputMethod = QEvent_Wrapper.InputMethod;
QEvent.TabletMove = QEvent_Wrapper.TabletMove;
QEvent.LocaleChange = QEvent_Wrapper.LocaleChange;
QEvent.LanguageChange = QEvent_Wrapper.LanguageChange;
QEvent.LayoutDirectionChange = QEvent_Wrapper.LayoutDirectionChange;
QEvent.Style = QEvent_Wrapper.Style;
QEvent.TabletPress = QEvent_Wrapper.TabletPress;
QEvent.TabletRelease = QEvent_Wrapper.TabletRelease;
QEvent.OkRequest = QEvent_Wrapper.OkRequest;
QEvent.HelpRequest = QEvent_Wrapper.HelpRequest;
QEvent.IconDrag = QEvent_Wrapper.IconDrag;
QEvent.FontChange = QEvent_Wrapper.FontChange;
QEvent.EnabledChange = QEvent_Wrapper.EnabledChange;
QEvent.ActivationChange = QEvent_Wrapper.ActivationChange;
QEvent.StyleChange = QEvent_Wrapper.StyleChange;
QEvent.IconTextChange = QEvent_Wrapper.IconTextChange;
QEvent.ModifiedChange = QEvent_Wrapper.ModifiedChange;
QEvent.MouseTrackingChange = QEvent_Wrapper.MouseTrackingChange;
QEvent.WindowBlocked = QEvent_Wrapper.WindowBlocked;
QEvent.WindowUnblocked = QEvent_Wrapper.WindowUnblocked;
QEvent.WindowStateChange = QEvent_Wrapper.WindowStateChange;
QEvent.ReadOnlyChange = QEvent_Wrapper.ReadOnlyChange;
QEvent.ToolTip = QEvent_Wrapper.ToolTip;
QEvent.WhatsThis = QEvent_Wrapper.WhatsThis;
QEvent.StatusTip = QEvent_Wrapper.StatusTip;
QEvent.ActionChanged = QEvent_Wrapper.ActionChanged;
QEvent.ActionAdded = QEvent_Wrapper.ActionAdded;
QEvent.ActionRemoved = QEvent_Wrapper.ActionRemoved;
QEvent.FileOpen = QEvent_Wrapper.FileOpen;
QEvent.Shortcut = QEvent_Wrapper.Shortcut;
QEvent.ShortcutOverride = QEvent_Wrapper.ShortcutOverride;
QEvent.WhatsThisClicked = QEvent_Wrapper.WhatsThisClicked;
QEvent.ToolBarChange = QEvent_Wrapper.ToolBarChange;
QEvent.ApplicationActivate = QEvent_Wrapper.ApplicationActivate;
QEvent.ApplicationActivated = QEvent_Wrapper.ApplicationActivated;
QEvent.ApplicationDeactivate = QEvent_Wrapper.ApplicationDeactivate;
QEvent.ApplicationDeactivated = QEvent_Wrapper.ApplicationDeactivated;
QEvent.QueryWhatsThis = QEvent_Wrapper.QueryWhatsThis;
QEvent.EnterWhatsThisMode = QEvent_Wrapper.EnterWhatsThisMode;
QEvent.LeaveWhatsThisMode = QEvent_Wrapper.LeaveWhatsThisMode;
QEvent.ZOrderChange = QEvent_Wrapper.ZOrderChange;
QEvent.HoverEnter = QEvent_Wrapper.HoverEnter;
QEvent.HoverLeave = QEvent_Wrapper.HoverLeave;
QEvent.HoverMove = QEvent_Wrapper.HoverMove;
QEvent.AcceptDropsChange = QEvent_Wrapper.AcceptDropsChange;
QEvent.ZeroTimerEvent = QEvent_Wrapper.ZeroTimerEvent;
QEvent.GraphicsSceneMouseMove = QEvent_Wrapper.GraphicsSceneMouseMove;
QEvent.GraphicsSceneMousePress = QEvent_Wrapper.GraphicsSceneMousePress;
QEvent.GraphicsSceneMouseRelease = QEvent_Wrapper.GraphicsSceneMouseRelease;
QEvent.GraphicsSceneMouseDoubleClick = QEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QEvent.GraphicsSceneContextMenu = QEvent_Wrapper.GraphicsSceneContextMenu;
QEvent.GraphicsSceneHoverEnter = QEvent_Wrapper.GraphicsSceneHoverEnter;
QEvent.GraphicsSceneHoverMove = QEvent_Wrapper.GraphicsSceneHoverMove;
QEvent.GraphicsSceneHoverLeave = QEvent_Wrapper.GraphicsSceneHoverLeave;
QEvent.GraphicsSceneHelp = QEvent_Wrapper.GraphicsSceneHelp;
QEvent.GraphicsSceneDragEnter = QEvent_Wrapper.GraphicsSceneDragEnter;
QEvent.GraphicsSceneDragMove = QEvent_Wrapper.GraphicsSceneDragMove;
QEvent.GraphicsSceneDragLeave = QEvent_Wrapper.GraphicsSceneDragLeave;
QEvent.GraphicsSceneDrop = QEvent_Wrapper.GraphicsSceneDrop;
QEvent.GraphicsSceneWheel = QEvent_Wrapper.GraphicsSceneWheel;
QEvent.GraphicsSceneLeave = QEvent_Wrapper.GraphicsSceneLeave;
QEvent.KeyboardLayoutChange = QEvent_Wrapper.KeyboardLayoutChange;
QEvent.DynamicPropertyChange = QEvent_Wrapper.DynamicPropertyChange;
QEvent.TabletEnterProximity = QEvent_Wrapper.TabletEnterProximity;
QEvent.TabletLeaveProximity = QEvent_Wrapper.TabletLeaveProximity;
QEvent.NonClientAreaMouseMove = QEvent_Wrapper.NonClientAreaMouseMove;
QEvent.NonClientAreaMouseButtonPress = QEvent_Wrapper.NonClientAreaMouseButtonPress;
QEvent.NonClientAreaMouseButtonRelease = QEvent_Wrapper.NonClientAreaMouseButtonRelease;
QEvent.NonClientAreaMouseButtonDblClick = QEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QEvent.MacSizeChange = QEvent_Wrapper.MacSizeChange;
QEvent.ContentsRectChange = QEvent_Wrapper.ContentsRectChange;
QEvent.MacGLWindowChange = QEvent_Wrapper.MacGLWindowChange;
QEvent.FutureCallOut = QEvent_Wrapper.FutureCallOut;
QEvent.GraphicsSceneResize = QEvent_Wrapper.GraphicsSceneResize;
QEvent.GraphicsSceneMove = QEvent_Wrapper.GraphicsSceneMove;
QEvent.CursorChange = QEvent_Wrapper.CursorChange;
QEvent.ToolTipChange = QEvent_Wrapper.ToolTipChange;
QEvent.NetworkReplyUpdated = QEvent_Wrapper.NetworkReplyUpdated;
QEvent.GrabMouse = QEvent_Wrapper.GrabMouse;
QEvent.UngrabMouse = QEvent_Wrapper.UngrabMouse;
QEvent.GrabKeyboard = QEvent_Wrapper.GrabKeyboard;
QEvent.UngrabKeyboard = QEvent_Wrapper.UngrabKeyboard;
QEvent.StateMachineSignal = QEvent_Wrapper.StateMachineSignal;
QEvent.StateMachineWrapped = QEvent_Wrapper.StateMachineWrapped;
QEvent.TouchBegin = QEvent_Wrapper.TouchBegin;
QEvent.TouchUpdate = QEvent_Wrapper.TouchUpdate;
QEvent.TouchEnd = QEvent_Wrapper.TouchEnd;
QEvent.NativeGesture = QEvent_Wrapper.NativeGesture;
QEvent.RequestSoftwareInputPanel = QEvent_Wrapper.RequestSoftwareInputPanel;
QEvent.CloseSoftwareInputPanel = QEvent_Wrapper.CloseSoftwareInputPanel;
QEvent.WinIdChange = QEvent_Wrapper.WinIdChange;
QEvent.Gesture = QEvent_Wrapper.Gesture;
QEvent.GestureOverride = QEvent_Wrapper.GestureOverride;
QEvent.ScrollPrepare = QEvent_Wrapper.ScrollPrepare;
QEvent.Scroll = QEvent_Wrapper.Scroll;
QEvent.Expose = QEvent_Wrapper.Expose;
QEvent.InputMethodQuery = QEvent_Wrapper.InputMethodQuery;
QEvent.OrientationChange = QEvent_Wrapper.OrientationChange;
QEvent.TouchCancel = QEvent_Wrapper.TouchCancel;
QEvent.ThemeChange = QEvent_Wrapper.ThemeChange;
QEvent.SockClose = QEvent_Wrapper.SockClose;
QEvent.PlatformPanel = QEvent_Wrapper.PlatformPanel;
QEvent.StyleAnimationUpdate = QEvent_Wrapper.StyleAnimationUpdate;
QEvent.ApplicationStateChange = QEvent_Wrapper.ApplicationStateChange;
QEvent.WindowChangeInternal = QEvent_Wrapper.WindowChangeInternal;
QEvent.ScreenChangeInternal = QEvent_Wrapper.ScreenChangeInternal;
QEvent.PlatformSurface = QEvent_Wrapper.PlatformSurface;
QEvent.Pointer = QEvent_Wrapper.Pointer;
QEvent.TabletTrackingChange = QEvent_Wrapper.TabletTrackingChange;
QEvent.User = QEvent_Wrapper.User;
QEvent.MaxUser = QEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        QEvent.registerEventType = function() 
          
        {
          //print("JS: QEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QEvent);
  }

  
  else {
    
        print("QEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    