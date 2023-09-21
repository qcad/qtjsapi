
      // auto generated
      //var self;

      // class constructor:
      function QKeyEvent() {
        

        // should be QKeyEvent_BaseJs.call(this, engine):
        //QKeyEvent.prototype = new QKeyEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QKeyEvent_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QKeyEvent);
            //}
          }
          else {
            qWarning("QKeyEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new QKeyEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QKeyEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QKeyEvent);
  }

  
  else {
    
        print("QKeyEvent(): wrong number / type of arguments");
      
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

      //QKeyEvent.prototype = new QKeyEvent_BaseJs(engine);
      //QKeyEvent.prototype = new QKeyEvent_Wrapper(engine);
      QKeyEvent.prototype = new Object();

      QKeyEvent.prototype.toString = function() {
          //return "QKeyEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QKeyEvent [JS]";
        };
      QKeyEvent.getObjectType = function() {
        
            return RJSType.QKeyEvent_Type;
          
      };

      QKeyEvent.prototype.getObjectType = function() {
        
            return RJSType.QKeyEvent_Type;
          
      };

      QKeyEvent.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QKeyEvent_Type:
              return true;
          
        case RJSType.QEvent_Type:
          return true;
        
        case RJSType.QInputEvent_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QKeyEvent_Type, 
          
            RJSType.QEvent_Type
            ,
            RJSType.QInputEvent_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: Type
QKeyEvent.None = QKeyEvent_Wrapper.None;
QKeyEvent.Timer = QKeyEvent_Wrapper.Timer;
QKeyEvent.MouseButtonPress = QKeyEvent_Wrapper.MouseButtonPress;
QKeyEvent.MouseButtonRelease = QKeyEvent_Wrapper.MouseButtonRelease;
QKeyEvent.MouseButtonDblClick = QKeyEvent_Wrapper.MouseButtonDblClick;
QKeyEvent.MouseMove = QKeyEvent_Wrapper.MouseMove;
QKeyEvent.KeyPress = QKeyEvent_Wrapper.KeyPress;
QKeyEvent.KeyRelease = QKeyEvent_Wrapper.KeyRelease;
QKeyEvent.FocusIn = QKeyEvent_Wrapper.FocusIn;
QKeyEvent.FocusOut = QKeyEvent_Wrapper.FocusOut;
QKeyEvent.FocusAboutToChange = QKeyEvent_Wrapper.FocusAboutToChange;
QKeyEvent.Enter = QKeyEvent_Wrapper.Enter;
QKeyEvent.Leave = QKeyEvent_Wrapper.Leave;
QKeyEvent.Paint = QKeyEvent_Wrapper.Paint;
QKeyEvent.Move = QKeyEvent_Wrapper.Move;
QKeyEvent.Resize = QKeyEvent_Wrapper.Resize;
QKeyEvent.Create = QKeyEvent_Wrapper.Create;
QKeyEvent.Destroy = QKeyEvent_Wrapper.Destroy;
QKeyEvent.Show = QKeyEvent_Wrapper.Show;
QKeyEvent.Hide = QKeyEvent_Wrapper.Hide;
QKeyEvent.Close = QKeyEvent_Wrapper.Close;
QKeyEvent.Quit = QKeyEvent_Wrapper.Quit;
QKeyEvent.ParentChange = QKeyEvent_Wrapper.ParentChange;
QKeyEvent.ParentAboutToChange = QKeyEvent_Wrapper.ParentAboutToChange;
QKeyEvent.ThreadChange = QKeyEvent_Wrapper.ThreadChange;
QKeyEvent.WindowActivate = QKeyEvent_Wrapper.WindowActivate;
QKeyEvent.WindowDeactivate = QKeyEvent_Wrapper.WindowDeactivate;
QKeyEvent.ShowToParent = QKeyEvent_Wrapper.ShowToParent;
QKeyEvent.HideToParent = QKeyEvent_Wrapper.HideToParent;
QKeyEvent.Wheel = QKeyEvent_Wrapper.Wheel;
QKeyEvent.WindowTitleChange = QKeyEvent_Wrapper.WindowTitleChange;
QKeyEvent.WindowIconChange = QKeyEvent_Wrapper.WindowIconChange;
QKeyEvent.ApplicationWindowIconChange = QKeyEvent_Wrapper.ApplicationWindowIconChange;
QKeyEvent.ApplicationFontChange = QKeyEvent_Wrapper.ApplicationFontChange;
QKeyEvent.ApplicationLayoutDirectionChange = QKeyEvent_Wrapper.ApplicationLayoutDirectionChange;
QKeyEvent.ApplicationPaletteChange = QKeyEvent_Wrapper.ApplicationPaletteChange;
QKeyEvent.PaletteChange = QKeyEvent_Wrapper.PaletteChange;
QKeyEvent.Clipboard = QKeyEvent_Wrapper.Clipboard;
QKeyEvent.Speech = QKeyEvent_Wrapper.Speech;
QKeyEvent.MetaCall = QKeyEvent_Wrapper.MetaCall;
QKeyEvent.SockAct = QKeyEvent_Wrapper.SockAct;
QKeyEvent.WinEventAct = QKeyEvent_Wrapper.WinEventAct;
QKeyEvent.DeferredDelete = QKeyEvent_Wrapper.DeferredDelete;
QKeyEvent.DragEnter = QKeyEvent_Wrapper.DragEnter;
QKeyEvent.DragMove = QKeyEvent_Wrapper.DragMove;
QKeyEvent.DragLeave = QKeyEvent_Wrapper.DragLeave;
QKeyEvent.Drop = QKeyEvent_Wrapper.Drop;
QKeyEvent.DragResponse = QKeyEvent_Wrapper.DragResponse;
QKeyEvent.ChildAdded = QKeyEvent_Wrapper.ChildAdded;
QKeyEvent.ChildPolished = QKeyEvent_Wrapper.ChildPolished;
QKeyEvent.ChildRemoved = QKeyEvent_Wrapper.ChildRemoved;
QKeyEvent.ShowWindowRequest = QKeyEvent_Wrapper.ShowWindowRequest;
QKeyEvent.PolishRequest = QKeyEvent_Wrapper.PolishRequest;
QKeyEvent.Polish = QKeyEvent_Wrapper.Polish;
QKeyEvent.LayoutRequest = QKeyEvent_Wrapper.LayoutRequest;
QKeyEvent.UpdateRequest = QKeyEvent_Wrapper.UpdateRequest;
QKeyEvent.UpdateLater = QKeyEvent_Wrapper.UpdateLater;
QKeyEvent.EmbeddingControl = QKeyEvent_Wrapper.EmbeddingControl;
QKeyEvent.ActivateControl = QKeyEvent_Wrapper.ActivateControl;
QKeyEvent.DeactivateControl = QKeyEvent_Wrapper.DeactivateControl;
QKeyEvent.ContextMenu = QKeyEvent_Wrapper.ContextMenu;
QKeyEvent.InputMethod = QKeyEvent_Wrapper.InputMethod;
QKeyEvent.TabletMove = QKeyEvent_Wrapper.TabletMove;
QKeyEvent.LocaleChange = QKeyEvent_Wrapper.LocaleChange;
QKeyEvent.LanguageChange = QKeyEvent_Wrapper.LanguageChange;
QKeyEvent.LayoutDirectionChange = QKeyEvent_Wrapper.LayoutDirectionChange;
QKeyEvent.Style = QKeyEvent_Wrapper.Style;
QKeyEvent.TabletPress = QKeyEvent_Wrapper.TabletPress;
QKeyEvent.TabletRelease = QKeyEvent_Wrapper.TabletRelease;
QKeyEvent.OkRequest = QKeyEvent_Wrapper.OkRequest;
QKeyEvent.HelpRequest = QKeyEvent_Wrapper.HelpRequest;
QKeyEvent.IconDrag = QKeyEvent_Wrapper.IconDrag;
QKeyEvent.FontChange = QKeyEvent_Wrapper.FontChange;
QKeyEvent.EnabledChange = QKeyEvent_Wrapper.EnabledChange;
QKeyEvent.ActivationChange = QKeyEvent_Wrapper.ActivationChange;
QKeyEvent.StyleChange = QKeyEvent_Wrapper.StyleChange;
QKeyEvent.IconTextChange = QKeyEvent_Wrapper.IconTextChange;
QKeyEvent.ModifiedChange = QKeyEvent_Wrapper.ModifiedChange;
QKeyEvent.MouseTrackingChange = QKeyEvent_Wrapper.MouseTrackingChange;
QKeyEvent.WindowBlocked = QKeyEvent_Wrapper.WindowBlocked;
QKeyEvent.WindowUnblocked = QKeyEvent_Wrapper.WindowUnblocked;
QKeyEvent.WindowStateChange = QKeyEvent_Wrapper.WindowStateChange;
QKeyEvent.ReadOnlyChange = QKeyEvent_Wrapper.ReadOnlyChange;
QKeyEvent.ToolTip = QKeyEvent_Wrapper.ToolTip;
QKeyEvent.WhatsThis = QKeyEvent_Wrapper.WhatsThis;
QKeyEvent.StatusTip = QKeyEvent_Wrapper.StatusTip;
QKeyEvent.ActionChanged = QKeyEvent_Wrapper.ActionChanged;
QKeyEvent.ActionAdded = QKeyEvent_Wrapper.ActionAdded;
QKeyEvent.ActionRemoved = QKeyEvent_Wrapper.ActionRemoved;
QKeyEvent.FileOpen = QKeyEvent_Wrapper.FileOpen;
QKeyEvent.Shortcut = QKeyEvent_Wrapper.Shortcut;
QKeyEvent.ShortcutOverride = QKeyEvent_Wrapper.ShortcutOverride;
QKeyEvent.WhatsThisClicked = QKeyEvent_Wrapper.WhatsThisClicked;
QKeyEvent.ToolBarChange = QKeyEvent_Wrapper.ToolBarChange;
QKeyEvent.ApplicationActivate = QKeyEvent_Wrapper.ApplicationActivate;
QKeyEvent.ApplicationActivated = QKeyEvent_Wrapper.ApplicationActivated;
QKeyEvent.ApplicationDeactivate = QKeyEvent_Wrapper.ApplicationDeactivate;
QKeyEvent.ApplicationDeactivated = QKeyEvent_Wrapper.ApplicationDeactivated;
QKeyEvent.QueryWhatsThis = QKeyEvent_Wrapper.QueryWhatsThis;
QKeyEvent.EnterWhatsThisMode = QKeyEvent_Wrapper.EnterWhatsThisMode;
QKeyEvent.LeaveWhatsThisMode = QKeyEvent_Wrapper.LeaveWhatsThisMode;
QKeyEvent.ZOrderChange = QKeyEvent_Wrapper.ZOrderChange;
QKeyEvent.HoverEnter = QKeyEvent_Wrapper.HoverEnter;
QKeyEvent.HoverLeave = QKeyEvent_Wrapper.HoverLeave;
QKeyEvent.HoverMove = QKeyEvent_Wrapper.HoverMove;
QKeyEvent.AcceptDropsChange = QKeyEvent_Wrapper.AcceptDropsChange;
QKeyEvent.ZeroTimerEvent = QKeyEvent_Wrapper.ZeroTimerEvent;
QKeyEvent.GraphicsSceneMouseMove = QKeyEvent_Wrapper.GraphicsSceneMouseMove;
QKeyEvent.GraphicsSceneMousePress = QKeyEvent_Wrapper.GraphicsSceneMousePress;
QKeyEvent.GraphicsSceneMouseRelease = QKeyEvent_Wrapper.GraphicsSceneMouseRelease;
QKeyEvent.GraphicsSceneMouseDoubleClick = QKeyEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QKeyEvent.GraphicsSceneContextMenu = QKeyEvent_Wrapper.GraphicsSceneContextMenu;
QKeyEvent.GraphicsSceneHoverEnter = QKeyEvent_Wrapper.GraphicsSceneHoverEnter;
QKeyEvent.GraphicsSceneHoverMove = QKeyEvent_Wrapper.GraphicsSceneHoverMove;
QKeyEvent.GraphicsSceneHoverLeave = QKeyEvent_Wrapper.GraphicsSceneHoverLeave;
QKeyEvent.GraphicsSceneHelp = QKeyEvent_Wrapper.GraphicsSceneHelp;
QKeyEvent.GraphicsSceneDragEnter = QKeyEvent_Wrapper.GraphicsSceneDragEnter;
QKeyEvent.GraphicsSceneDragMove = QKeyEvent_Wrapper.GraphicsSceneDragMove;
QKeyEvent.GraphicsSceneDragLeave = QKeyEvent_Wrapper.GraphicsSceneDragLeave;
QKeyEvent.GraphicsSceneDrop = QKeyEvent_Wrapper.GraphicsSceneDrop;
QKeyEvent.GraphicsSceneWheel = QKeyEvent_Wrapper.GraphicsSceneWheel;
QKeyEvent.GraphicsSceneLeave = QKeyEvent_Wrapper.GraphicsSceneLeave;
QKeyEvent.KeyboardLayoutChange = QKeyEvent_Wrapper.KeyboardLayoutChange;
QKeyEvent.DynamicPropertyChange = QKeyEvent_Wrapper.DynamicPropertyChange;
QKeyEvent.TabletEnterProximity = QKeyEvent_Wrapper.TabletEnterProximity;
QKeyEvent.TabletLeaveProximity = QKeyEvent_Wrapper.TabletLeaveProximity;
QKeyEvent.NonClientAreaMouseMove = QKeyEvent_Wrapper.NonClientAreaMouseMove;
QKeyEvent.NonClientAreaMouseButtonPress = QKeyEvent_Wrapper.NonClientAreaMouseButtonPress;
QKeyEvent.NonClientAreaMouseButtonRelease = QKeyEvent_Wrapper.NonClientAreaMouseButtonRelease;
QKeyEvent.NonClientAreaMouseButtonDblClick = QKeyEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QKeyEvent.MacSizeChange = QKeyEvent_Wrapper.MacSizeChange;
QKeyEvent.ContentsRectChange = QKeyEvent_Wrapper.ContentsRectChange;
QKeyEvent.MacGLWindowChange = QKeyEvent_Wrapper.MacGLWindowChange;
QKeyEvent.FutureCallOut = QKeyEvent_Wrapper.FutureCallOut;
QKeyEvent.GraphicsSceneResize = QKeyEvent_Wrapper.GraphicsSceneResize;
QKeyEvent.GraphicsSceneMove = QKeyEvent_Wrapper.GraphicsSceneMove;
QKeyEvent.CursorChange = QKeyEvent_Wrapper.CursorChange;
QKeyEvent.ToolTipChange = QKeyEvent_Wrapper.ToolTipChange;
QKeyEvent.NetworkReplyUpdated = QKeyEvent_Wrapper.NetworkReplyUpdated;
QKeyEvent.GrabMouse = QKeyEvent_Wrapper.GrabMouse;
QKeyEvent.UngrabMouse = QKeyEvent_Wrapper.UngrabMouse;
QKeyEvent.GrabKeyboard = QKeyEvent_Wrapper.GrabKeyboard;
QKeyEvent.UngrabKeyboard = QKeyEvent_Wrapper.UngrabKeyboard;
QKeyEvent.StateMachineSignal = QKeyEvent_Wrapper.StateMachineSignal;
QKeyEvent.StateMachineWrapped = QKeyEvent_Wrapper.StateMachineWrapped;
QKeyEvent.TouchBegin = QKeyEvent_Wrapper.TouchBegin;
QKeyEvent.TouchUpdate = QKeyEvent_Wrapper.TouchUpdate;
QKeyEvent.TouchEnd = QKeyEvent_Wrapper.TouchEnd;
QKeyEvent.NativeGesture = QKeyEvent_Wrapper.NativeGesture;
QKeyEvent.RequestSoftwareInputPanel = QKeyEvent_Wrapper.RequestSoftwareInputPanel;
QKeyEvent.CloseSoftwareInputPanel = QKeyEvent_Wrapper.CloseSoftwareInputPanel;
QKeyEvent.WinIdChange = QKeyEvent_Wrapper.WinIdChange;
QKeyEvent.Gesture = QKeyEvent_Wrapper.Gesture;
QKeyEvent.GestureOverride = QKeyEvent_Wrapper.GestureOverride;
QKeyEvent.ScrollPrepare = QKeyEvent_Wrapper.ScrollPrepare;
QKeyEvent.Scroll = QKeyEvent_Wrapper.Scroll;
QKeyEvent.Expose = QKeyEvent_Wrapper.Expose;
QKeyEvent.InputMethodQuery = QKeyEvent_Wrapper.InputMethodQuery;
QKeyEvent.OrientationChange = QKeyEvent_Wrapper.OrientationChange;
QKeyEvent.TouchCancel = QKeyEvent_Wrapper.TouchCancel;
QKeyEvent.ThemeChange = QKeyEvent_Wrapper.ThemeChange;
QKeyEvent.SockClose = QKeyEvent_Wrapper.SockClose;
QKeyEvent.PlatformPanel = QKeyEvent_Wrapper.PlatformPanel;
QKeyEvent.StyleAnimationUpdate = QKeyEvent_Wrapper.StyleAnimationUpdate;
QKeyEvent.ApplicationStateChange = QKeyEvent_Wrapper.ApplicationStateChange;
QKeyEvent.WindowChangeInternal = QKeyEvent_Wrapper.WindowChangeInternal;
QKeyEvent.ScreenChangeInternal = QKeyEvent_Wrapper.ScreenChangeInternal;
QKeyEvent.PlatformSurface = QKeyEvent_Wrapper.PlatformSurface;
QKeyEvent.Pointer = QKeyEvent_Wrapper.Pointer;
QKeyEvent.TabletTrackingChange = QKeyEvent_Wrapper.TabletTrackingChange;
QKeyEvent.User = QKeyEvent_Wrapper.User;
QKeyEvent.MaxUser = QKeyEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        QKeyEvent.registerEventType = function() 
          
        {
          //print("JS: QKeyEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QKeyEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QKeyEvent);
  }

  
  else {
    
        print("QKeyEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QKeyEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QKeyEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    