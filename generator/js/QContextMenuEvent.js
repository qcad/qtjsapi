
      // auto generated
      //var self;

      // class constructor:
      function QContextMenuEvent() {
        

        // should be QContextMenuEvent_BaseJs.call(this, engine):
        //QContextMenuEvent.prototype = new QContextMenuEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QContextMenuEvent_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QContextMenuEvent);
            //}
          }
          else {
            qWarning("QContextMenuEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QContextMenuEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QContextMenuEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QContextMenuEvent);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QContextMenuEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QContextMenuEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QContextMenuEvent);
  }

  
  else {
    
        print("QContextMenuEvent(): wrong number / type of arguments");
      
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

      //QContextMenuEvent.prototype = new QContextMenuEvent_BaseJs(engine);
      //QContextMenuEvent.prototype = new QContextMenuEvent_Wrapper(engine);
      QContextMenuEvent.prototype = new Object();

      QContextMenuEvent.prototype.toString = function() {
          //return "QContextMenuEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QContextMenuEvent [JS]";
        };
      QContextMenuEvent.getObjectType = function() {
        
            return RJSType.QContextMenuEvent_Type;
          
      };

      QContextMenuEvent.prototype.getObjectType = function() {
        
            return RJSType.QContextMenuEvent_Type;
          
      };

      QContextMenuEvent.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QContextMenuEvent_Type:
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
          RJSType.QContextMenuEvent_Type, 
          
            RJSType.QEvent_Type
            ,
            RJSType.QInputEvent_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: Type
QContextMenuEvent.None = QContextMenuEvent_Wrapper.None;
QContextMenuEvent.Timer = QContextMenuEvent_Wrapper.Timer;
QContextMenuEvent.MouseButtonPress = QContextMenuEvent_Wrapper.MouseButtonPress;
QContextMenuEvent.MouseButtonRelease = QContextMenuEvent_Wrapper.MouseButtonRelease;
QContextMenuEvent.MouseButtonDblClick = QContextMenuEvent_Wrapper.MouseButtonDblClick;
QContextMenuEvent.MouseMove = QContextMenuEvent_Wrapper.MouseMove;
QContextMenuEvent.KeyPress = QContextMenuEvent_Wrapper.KeyPress;
QContextMenuEvent.KeyRelease = QContextMenuEvent_Wrapper.KeyRelease;
QContextMenuEvent.FocusIn = QContextMenuEvent_Wrapper.FocusIn;
QContextMenuEvent.FocusOut = QContextMenuEvent_Wrapper.FocusOut;
QContextMenuEvent.FocusAboutToChange = QContextMenuEvent_Wrapper.FocusAboutToChange;
QContextMenuEvent.Enter = QContextMenuEvent_Wrapper.Enter;
QContextMenuEvent.Leave = QContextMenuEvent_Wrapper.Leave;
QContextMenuEvent.Paint = QContextMenuEvent_Wrapper.Paint;
QContextMenuEvent.Move = QContextMenuEvent_Wrapper.Move;
QContextMenuEvent.Resize = QContextMenuEvent_Wrapper.Resize;
QContextMenuEvent.Create = QContextMenuEvent_Wrapper.Create;
QContextMenuEvent.Destroy = QContextMenuEvent_Wrapper.Destroy;
QContextMenuEvent.Show = QContextMenuEvent_Wrapper.Show;
QContextMenuEvent.Hide = QContextMenuEvent_Wrapper.Hide;
QContextMenuEvent.Close = QContextMenuEvent_Wrapper.Close;
QContextMenuEvent.Quit = QContextMenuEvent_Wrapper.Quit;
QContextMenuEvent.ParentChange = QContextMenuEvent_Wrapper.ParentChange;
QContextMenuEvent.ParentAboutToChange = QContextMenuEvent_Wrapper.ParentAboutToChange;
QContextMenuEvent.ThreadChange = QContextMenuEvent_Wrapper.ThreadChange;
QContextMenuEvent.WindowActivate = QContextMenuEvent_Wrapper.WindowActivate;
QContextMenuEvent.WindowDeactivate = QContextMenuEvent_Wrapper.WindowDeactivate;
QContextMenuEvent.ShowToParent = QContextMenuEvent_Wrapper.ShowToParent;
QContextMenuEvent.HideToParent = QContextMenuEvent_Wrapper.HideToParent;
QContextMenuEvent.Wheel = QContextMenuEvent_Wrapper.Wheel;
QContextMenuEvent.WindowTitleChange = QContextMenuEvent_Wrapper.WindowTitleChange;
QContextMenuEvent.WindowIconChange = QContextMenuEvent_Wrapper.WindowIconChange;
QContextMenuEvent.ApplicationWindowIconChange = QContextMenuEvent_Wrapper.ApplicationWindowIconChange;
QContextMenuEvent.ApplicationFontChange = QContextMenuEvent_Wrapper.ApplicationFontChange;
QContextMenuEvent.ApplicationLayoutDirectionChange = QContextMenuEvent_Wrapper.ApplicationLayoutDirectionChange;
QContextMenuEvent.ApplicationPaletteChange = QContextMenuEvent_Wrapper.ApplicationPaletteChange;
QContextMenuEvent.PaletteChange = QContextMenuEvent_Wrapper.PaletteChange;
QContextMenuEvent.Clipboard = QContextMenuEvent_Wrapper.Clipboard;
QContextMenuEvent.Speech = QContextMenuEvent_Wrapper.Speech;
QContextMenuEvent.MetaCall = QContextMenuEvent_Wrapper.MetaCall;
QContextMenuEvent.SockAct = QContextMenuEvent_Wrapper.SockAct;
QContextMenuEvent.WinEventAct = QContextMenuEvent_Wrapper.WinEventAct;
QContextMenuEvent.DeferredDelete = QContextMenuEvent_Wrapper.DeferredDelete;
QContextMenuEvent.DragEnter = QContextMenuEvent_Wrapper.DragEnter;
QContextMenuEvent.DragMove = QContextMenuEvent_Wrapper.DragMove;
QContextMenuEvent.DragLeave = QContextMenuEvent_Wrapper.DragLeave;
QContextMenuEvent.Drop = QContextMenuEvent_Wrapper.Drop;
QContextMenuEvent.DragResponse = QContextMenuEvent_Wrapper.DragResponse;
QContextMenuEvent.ChildAdded = QContextMenuEvent_Wrapper.ChildAdded;
QContextMenuEvent.ChildPolished = QContextMenuEvent_Wrapper.ChildPolished;
QContextMenuEvent.ChildRemoved = QContextMenuEvent_Wrapper.ChildRemoved;
QContextMenuEvent.ShowWindowRequest = QContextMenuEvent_Wrapper.ShowWindowRequest;
QContextMenuEvent.PolishRequest = QContextMenuEvent_Wrapper.PolishRequest;
QContextMenuEvent.Polish = QContextMenuEvent_Wrapper.Polish;
QContextMenuEvent.LayoutRequest = QContextMenuEvent_Wrapper.LayoutRequest;
QContextMenuEvent.UpdateRequest = QContextMenuEvent_Wrapper.UpdateRequest;
QContextMenuEvent.UpdateLater = QContextMenuEvent_Wrapper.UpdateLater;
QContextMenuEvent.EmbeddingControl = QContextMenuEvent_Wrapper.EmbeddingControl;
QContextMenuEvent.ActivateControl = QContextMenuEvent_Wrapper.ActivateControl;
QContextMenuEvent.DeactivateControl = QContextMenuEvent_Wrapper.DeactivateControl;
QContextMenuEvent.ContextMenu = QContextMenuEvent_Wrapper.ContextMenu;
QContextMenuEvent.InputMethod = QContextMenuEvent_Wrapper.InputMethod;
QContextMenuEvent.TabletMove = QContextMenuEvent_Wrapper.TabletMove;
QContextMenuEvent.LocaleChange = QContextMenuEvent_Wrapper.LocaleChange;
QContextMenuEvent.LanguageChange = QContextMenuEvent_Wrapper.LanguageChange;
QContextMenuEvent.LayoutDirectionChange = QContextMenuEvent_Wrapper.LayoutDirectionChange;
QContextMenuEvent.Style = QContextMenuEvent_Wrapper.Style;
QContextMenuEvent.TabletPress = QContextMenuEvent_Wrapper.TabletPress;
QContextMenuEvent.TabletRelease = QContextMenuEvent_Wrapper.TabletRelease;
QContextMenuEvent.OkRequest = QContextMenuEvent_Wrapper.OkRequest;
QContextMenuEvent.HelpRequest = QContextMenuEvent_Wrapper.HelpRequest;
QContextMenuEvent.IconDrag = QContextMenuEvent_Wrapper.IconDrag;
QContextMenuEvent.FontChange = QContextMenuEvent_Wrapper.FontChange;
QContextMenuEvent.EnabledChange = QContextMenuEvent_Wrapper.EnabledChange;
QContextMenuEvent.ActivationChange = QContextMenuEvent_Wrapper.ActivationChange;
QContextMenuEvent.StyleChange = QContextMenuEvent_Wrapper.StyleChange;
QContextMenuEvent.IconTextChange = QContextMenuEvent_Wrapper.IconTextChange;
QContextMenuEvent.ModifiedChange = QContextMenuEvent_Wrapper.ModifiedChange;
QContextMenuEvent.MouseTrackingChange = QContextMenuEvent_Wrapper.MouseTrackingChange;
QContextMenuEvent.WindowBlocked = QContextMenuEvent_Wrapper.WindowBlocked;
QContextMenuEvent.WindowUnblocked = QContextMenuEvent_Wrapper.WindowUnblocked;
QContextMenuEvent.WindowStateChange = QContextMenuEvent_Wrapper.WindowStateChange;
QContextMenuEvent.ReadOnlyChange = QContextMenuEvent_Wrapper.ReadOnlyChange;
QContextMenuEvent.ToolTip = QContextMenuEvent_Wrapper.ToolTip;
QContextMenuEvent.WhatsThis = QContextMenuEvent_Wrapper.WhatsThis;
QContextMenuEvent.StatusTip = QContextMenuEvent_Wrapper.StatusTip;
QContextMenuEvent.ActionChanged = QContextMenuEvent_Wrapper.ActionChanged;
QContextMenuEvent.ActionAdded = QContextMenuEvent_Wrapper.ActionAdded;
QContextMenuEvent.ActionRemoved = QContextMenuEvent_Wrapper.ActionRemoved;
QContextMenuEvent.FileOpen = QContextMenuEvent_Wrapper.FileOpen;
QContextMenuEvent.Shortcut = QContextMenuEvent_Wrapper.Shortcut;
QContextMenuEvent.ShortcutOverride = QContextMenuEvent_Wrapper.ShortcutOverride;
QContextMenuEvent.WhatsThisClicked = QContextMenuEvent_Wrapper.WhatsThisClicked;
QContextMenuEvent.ToolBarChange = QContextMenuEvent_Wrapper.ToolBarChange;
QContextMenuEvent.ApplicationActivate = QContextMenuEvent_Wrapper.ApplicationActivate;
QContextMenuEvent.ApplicationActivated = QContextMenuEvent_Wrapper.ApplicationActivated;
QContextMenuEvent.ApplicationDeactivate = QContextMenuEvent_Wrapper.ApplicationDeactivate;
QContextMenuEvent.ApplicationDeactivated = QContextMenuEvent_Wrapper.ApplicationDeactivated;
QContextMenuEvent.QueryWhatsThis = QContextMenuEvent_Wrapper.QueryWhatsThis;
QContextMenuEvent.EnterWhatsThisMode = QContextMenuEvent_Wrapper.EnterWhatsThisMode;
QContextMenuEvent.LeaveWhatsThisMode = QContextMenuEvent_Wrapper.LeaveWhatsThisMode;
QContextMenuEvent.ZOrderChange = QContextMenuEvent_Wrapper.ZOrderChange;
QContextMenuEvent.HoverEnter = QContextMenuEvent_Wrapper.HoverEnter;
QContextMenuEvent.HoverLeave = QContextMenuEvent_Wrapper.HoverLeave;
QContextMenuEvent.HoverMove = QContextMenuEvent_Wrapper.HoverMove;
QContextMenuEvent.AcceptDropsChange = QContextMenuEvent_Wrapper.AcceptDropsChange;
QContextMenuEvent.ZeroTimerEvent = QContextMenuEvent_Wrapper.ZeroTimerEvent;
QContextMenuEvent.GraphicsSceneMouseMove = QContextMenuEvent_Wrapper.GraphicsSceneMouseMove;
QContextMenuEvent.GraphicsSceneMousePress = QContextMenuEvent_Wrapper.GraphicsSceneMousePress;
QContextMenuEvent.GraphicsSceneMouseRelease = QContextMenuEvent_Wrapper.GraphicsSceneMouseRelease;
QContextMenuEvent.GraphicsSceneMouseDoubleClick = QContextMenuEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QContextMenuEvent.GraphicsSceneContextMenu = QContextMenuEvent_Wrapper.GraphicsSceneContextMenu;
QContextMenuEvent.GraphicsSceneHoverEnter = QContextMenuEvent_Wrapper.GraphicsSceneHoverEnter;
QContextMenuEvent.GraphicsSceneHoverMove = QContextMenuEvent_Wrapper.GraphicsSceneHoverMove;
QContextMenuEvent.GraphicsSceneHoverLeave = QContextMenuEvent_Wrapper.GraphicsSceneHoverLeave;
QContextMenuEvent.GraphicsSceneHelp = QContextMenuEvent_Wrapper.GraphicsSceneHelp;
QContextMenuEvent.GraphicsSceneDragEnter = QContextMenuEvent_Wrapper.GraphicsSceneDragEnter;
QContextMenuEvent.GraphicsSceneDragMove = QContextMenuEvent_Wrapper.GraphicsSceneDragMove;
QContextMenuEvent.GraphicsSceneDragLeave = QContextMenuEvent_Wrapper.GraphicsSceneDragLeave;
QContextMenuEvent.GraphicsSceneDrop = QContextMenuEvent_Wrapper.GraphicsSceneDrop;
QContextMenuEvent.GraphicsSceneWheel = QContextMenuEvent_Wrapper.GraphicsSceneWheel;
QContextMenuEvent.GraphicsSceneLeave = QContextMenuEvent_Wrapper.GraphicsSceneLeave;
QContextMenuEvent.KeyboardLayoutChange = QContextMenuEvent_Wrapper.KeyboardLayoutChange;
QContextMenuEvent.DynamicPropertyChange = QContextMenuEvent_Wrapper.DynamicPropertyChange;
QContextMenuEvent.TabletEnterProximity = QContextMenuEvent_Wrapper.TabletEnterProximity;
QContextMenuEvent.TabletLeaveProximity = QContextMenuEvent_Wrapper.TabletLeaveProximity;
QContextMenuEvent.NonClientAreaMouseMove = QContextMenuEvent_Wrapper.NonClientAreaMouseMove;
QContextMenuEvent.NonClientAreaMouseButtonPress = QContextMenuEvent_Wrapper.NonClientAreaMouseButtonPress;
QContextMenuEvent.NonClientAreaMouseButtonRelease = QContextMenuEvent_Wrapper.NonClientAreaMouseButtonRelease;
QContextMenuEvent.NonClientAreaMouseButtonDblClick = QContextMenuEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QContextMenuEvent.MacSizeChange = QContextMenuEvent_Wrapper.MacSizeChange;
QContextMenuEvent.ContentsRectChange = QContextMenuEvent_Wrapper.ContentsRectChange;
QContextMenuEvent.MacGLWindowChange = QContextMenuEvent_Wrapper.MacGLWindowChange;
QContextMenuEvent.FutureCallOut = QContextMenuEvent_Wrapper.FutureCallOut;
QContextMenuEvent.GraphicsSceneResize = QContextMenuEvent_Wrapper.GraphicsSceneResize;
QContextMenuEvent.GraphicsSceneMove = QContextMenuEvent_Wrapper.GraphicsSceneMove;
QContextMenuEvent.CursorChange = QContextMenuEvent_Wrapper.CursorChange;
QContextMenuEvent.ToolTipChange = QContextMenuEvent_Wrapper.ToolTipChange;
QContextMenuEvent.NetworkReplyUpdated = QContextMenuEvent_Wrapper.NetworkReplyUpdated;
QContextMenuEvent.GrabMouse = QContextMenuEvent_Wrapper.GrabMouse;
QContextMenuEvent.UngrabMouse = QContextMenuEvent_Wrapper.UngrabMouse;
QContextMenuEvent.GrabKeyboard = QContextMenuEvent_Wrapper.GrabKeyboard;
QContextMenuEvent.UngrabKeyboard = QContextMenuEvent_Wrapper.UngrabKeyboard;
QContextMenuEvent.StateMachineSignal = QContextMenuEvent_Wrapper.StateMachineSignal;
QContextMenuEvent.StateMachineWrapped = QContextMenuEvent_Wrapper.StateMachineWrapped;
QContextMenuEvent.TouchBegin = QContextMenuEvent_Wrapper.TouchBegin;
QContextMenuEvent.TouchUpdate = QContextMenuEvent_Wrapper.TouchUpdate;
QContextMenuEvent.TouchEnd = QContextMenuEvent_Wrapper.TouchEnd;
QContextMenuEvent.NativeGesture = QContextMenuEvent_Wrapper.NativeGesture;
QContextMenuEvent.RequestSoftwareInputPanel = QContextMenuEvent_Wrapper.RequestSoftwareInputPanel;
QContextMenuEvent.CloseSoftwareInputPanel = QContextMenuEvent_Wrapper.CloseSoftwareInputPanel;
QContextMenuEvent.WinIdChange = QContextMenuEvent_Wrapper.WinIdChange;
QContextMenuEvent.Gesture = QContextMenuEvent_Wrapper.Gesture;
QContextMenuEvent.GestureOverride = QContextMenuEvent_Wrapper.GestureOverride;
QContextMenuEvent.ScrollPrepare = QContextMenuEvent_Wrapper.ScrollPrepare;
QContextMenuEvent.Scroll = QContextMenuEvent_Wrapper.Scroll;
QContextMenuEvent.Expose = QContextMenuEvent_Wrapper.Expose;
QContextMenuEvent.InputMethodQuery = QContextMenuEvent_Wrapper.InputMethodQuery;
QContextMenuEvent.OrientationChange = QContextMenuEvent_Wrapper.OrientationChange;
QContextMenuEvent.TouchCancel = QContextMenuEvent_Wrapper.TouchCancel;
QContextMenuEvent.ThemeChange = QContextMenuEvent_Wrapper.ThemeChange;
QContextMenuEvent.SockClose = QContextMenuEvent_Wrapper.SockClose;
QContextMenuEvent.PlatformPanel = QContextMenuEvent_Wrapper.PlatformPanel;
QContextMenuEvent.StyleAnimationUpdate = QContextMenuEvent_Wrapper.StyleAnimationUpdate;
QContextMenuEvent.ApplicationStateChange = QContextMenuEvent_Wrapper.ApplicationStateChange;
QContextMenuEvent.WindowChangeInternal = QContextMenuEvent_Wrapper.WindowChangeInternal;
QContextMenuEvent.ScreenChangeInternal = QContextMenuEvent_Wrapper.ScreenChangeInternal;
QContextMenuEvent.PlatformSurface = QContextMenuEvent_Wrapper.PlatformSurface;
QContextMenuEvent.Pointer = QContextMenuEvent_Wrapper.Pointer;
QContextMenuEvent.TabletTrackingChange = QContextMenuEvent_Wrapper.TabletTrackingChange;
QContextMenuEvent.User = QContextMenuEvent_Wrapper.User;
QContextMenuEvent.MaxUser = QContextMenuEvent_Wrapper.MaxUser;

  // enum: Reason
QContextMenuEvent.Mouse = QContextMenuEvent_Wrapper.Mouse;
QContextMenuEvent.Keyboard = QContextMenuEvent_Wrapper.Keyboard;
QContextMenuEvent.Other = QContextMenuEvent_Wrapper.Other;


      // functions:
      

      // static functions:
      

        // static function 
        QContextMenuEvent.registerEventType = function() 
          
        {
          //print("JS: QContextMenuEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QContextMenuEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QContextMenuEvent);
  }

  
  else {
    
        print("QContextMenuEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QContextMenuEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QContextMenuEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    