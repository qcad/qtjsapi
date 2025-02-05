
      // auto generated
      //var self;

      // class constructor:
      function QDragLeaveEvent() {
        

        // should be QDragLeaveEvent_BaseJs.call(this, engine):
        //QDragLeaveEvent.prototype = new QDragLeaveEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDragLeaveEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QDragLeaveEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDragLeaveEvent_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDragLeaveEvent);
  }

  
  else {
    
        print("QDragLeaveEvent(): wrong number / type of arguments");
      
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

      //QDragLeaveEvent.prototype = new QDragLeaveEvent_BaseJs(engine);
      //QDragLeaveEvent.prototype = new QDragLeaveEvent_Wrapper(engine);
      QDragLeaveEvent.prototype = new Object();

      QDragLeaveEvent.prototype.toString = function() {
          //return "QDragLeaveEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDragLeaveEvent [JS]";
        };
      QDragLeaveEvent.getObjectType = function() {
        return RJSType_QDragLeaveEvent.getIdStatic();
      };

      QDragLeaveEvent.prototype.getObjectType = function() {
        return RJSType_QDragLeaveEvent.getIdStatic();
      };

      QDragLeaveEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDragLeaveEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QDragLeaveEvent.None = QDragLeaveEvent_Wrapper.None;
QDragLeaveEvent.Timer = QDragLeaveEvent_Wrapper.Timer;
QDragLeaveEvent.MouseButtonPress = QDragLeaveEvent_Wrapper.MouseButtonPress;
QDragLeaveEvent.MouseButtonRelease = QDragLeaveEvent_Wrapper.MouseButtonRelease;
QDragLeaveEvent.MouseButtonDblClick = QDragLeaveEvent_Wrapper.MouseButtonDblClick;
QDragLeaveEvent.MouseMove = QDragLeaveEvent_Wrapper.MouseMove;
QDragLeaveEvent.KeyPress = QDragLeaveEvent_Wrapper.KeyPress;
QDragLeaveEvent.KeyRelease = QDragLeaveEvent_Wrapper.KeyRelease;
QDragLeaveEvent.FocusIn = QDragLeaveEvent_Wrapper.FocusIn;
QDragLeaveEvent.FocusOut = QDragLeaveEvent_Wrapper.FocusOut;
QDragLeaveEvent.FocusAboutToChange = QDragLeaveEvent_Wrapper.FocusAboutToChange;
QDragLeaveEvent.Enter = QDragLeaveEvent_Wrapper.Enter;
QDragLeaveEvent.Leave = QDragLeaveEvent_Wrapper.Leave;
QDragLeaveEvent.Paint = QDragLeaveEvent_Wrapper.Paint;
QDragLeaveEvent.Move = QDragLeaveEvent_Wrapper.Move;
QDragLeaveEvent.Resize = QDragLeaveEvent_Wrapper.Resize;
QDragLeaveEvent.Create = QDragLeaveEvent_Wrapper.Create;
QDragLeaveEvent.Destroy = QDragLeaveEvent_Wrapper.Destroy;
QDragLeaveEvent.Show = QDragLeaveEvent_Wrapper.Show;
QDragLeaveEvent.Hide = QDragLeaveEvent_Wrapper.Hide;
QDragLeaveEvent.Close = QDragLeaveEvent_Wrapper.Close;
QDragLeaveEvent.Quit = QDragLeaveEvent_Wrapper.Quit;
QDragLeaveEvent.ParentChange = QDragLeaveEvent_Wrapper.ParentChange;
QDragLeaveEvent.ParentAboutToChange = QDragLeaveEvent_Wrapper.ParentAboutToChange;
QDragLeaveEvent.ThreadChange = QDragLeaveEvent_Wrapper.ThreadChange;
QDragLeaveEvent.WindowActivate = QDragLeaveEvent_Wrapper.WindowActivate;
QDragLeaveEvent.WindowDeactivate = QDragLeaveEvent_Wrapper.WindowDeactivate;
QDragLeaveEvent.ShowToParent = QDragLeaveEvent_Wrapper.ShowToParent;
QDragLeaveEvent.HideToParent = QDragLeaveEvent_Wrapper.HideToParent;
QDragLeaveEvent.Wheel = QDragLeaveEvent_Wrapper.Wheel;
QDragLeaveEvent.WindowTitleChange = QDragLeaveEvent_Wrapper.WindowTitleChange;
QDragLeaveEvent.WindowIconChange = QDragLeaveEvent_Wrapper.WindowIconChange;
QDragLeaveEvent.ApplicationWindowIconChange = QDragLeaveEvent_Wrapper.ApplicationWindowIconChange;
QDragLeaveEvent.ApplicationFontChange = QDragLeaveEvent_Wrapper.ApplicationFontChange;
QDragLeaveEvent.ApplicationLayoutDirectionChange = QDragLeaveEvent_Wrapper.ApplicationLayoutDirectionChange;
QDragLeaveEvent.ApplicationPaletteChange = QDragLeaveEvent_Wrapper.ApplicationPaletteChange;
QDragLeaveEvent.PaletteChange = QDragLeaveEvent_Wrapper.PaletteChange;
QDragLeaveEvent.Clipboard = QDragLeaveEvent_Wrapper.Clipboard;
QDragLeaveEvent.Speech = QDragLeaveEvent_Wrapper.Speech;
QDragLeaveEvent.MetaCall = QDragLeaveEvent_Wrapper.MetaCall;
QDragLeaveEvent.SockAct = QDragLeaveEvent_Wrapper.SockAct;
QDragLeaveEvent.WinEventAct = QDragLeaveEvent_Wrapper.WinEventAct;
QDragLeaveEvent.DeferredDelete = QDragLeaveEvent_Wrapper.DeferredDelete;
QDragLeaveEvent.DragEnter = QDragLeaveEvent_Wrapper.DragEnter;
QDragLeaveEvent.DragMove = QDragLeaveEvent_Wrapper.DragMove;
QDragLeaveEvent.DragLeave = QDragLeaveEvent_Wrapper.DragLeave;
QDragLeaveEvent.Drop = QDragLeaveEvent_Wrapper.Drop;
QDragLeaveEvent.DragResponse = QDragLeaveEvent_Wrapper.DragResponse;
QDragLeaveEvent.ChildAdded = QDragLeaveEvent_Wrapper.ChildAdded;
QDragLeaveEvent.ChildPolished = QDragLeaveEvent_Wrapper.ChildPolished;
QDragLeaveEvent.ChildRemoved = QDragLeaveEvent_Wrapper.ChildRemoved;
QDragLeaveEvent.ShowWindowRequest = QDragLeaveEvent_Wrapper.ShowWindowRequest;
QDragLeaveEvent.PolishRequest = QDragLeaveEvent_Wrapper.PolishRequest;
QDragLeaveEvent.Polish = QDragLeaveEvent_Wrapper.Polish;
QDragLeaveEvent.LayoutRequest = QDragLeaveEvent_Wrapper.LayoutRequest;
QDragLeaveEvent.UpdateRequest = QDragLeaveEvent_Wrapper.UpdateRequest;
QDragLeaveEvent.UpdateLater = QDragLeaveEvent_Wrapper.UpdateLater;
QDragLeaveEvent.EmbeddingControl = QDragLeaveEvent_Wrapper.EmbeddingControl;
QDragLeaveEvent.ActivateControl = QDragLeaveEvent_Wrapper.ActivateControl;
QDragLeaveEvent.DeactivateControl = QDragLeaveEvent_Wrapper.DeactivateControl;
QDragLeaveEvent.ContextMenu = QDragLeaveEvent_Wrapper.ContextMenu;
QDragLeaveEvent.InputMethod = QDragLeaveEvent_Wrapper.InputMethod;
QDragLeaveEvent.TabletMove = QDragLeaveEvent_Wrapper.TabletMove;
QDragLeaveEvent.LocaleChange = QDragLeaveEvent_Wrapper.LocaleChange;
QDragLeaveEvent.LanguageChange = QDragLeaveEvent_Wrapper.LanguageChange;
QDragLeaveEvent.LayoutDirectionChange = QDragLeaveEvent_Wrapper.LayoutDirectionChange;
QDragLeaveEvent.Style = QDragLeaveEvent_Wrapper.Style;
QDragLeaveEvent.TabletPress = QDragLeaveEvent_Wrapper.TabletPress;
QDragLeaveEvent.TabletRelease = QDragLeaveEvent_Wrapper.TabletRelease;
QDragLeaveEvent.OkRequest = QDragLeaveEvent_Wrapper.OkRequest;
QDragLeaveEvent.HelpRequest = QDragLeaveEvent_Wrapper.HelpRequest;
QDragLeaveEvent.IconDrag = QDragLeaveEvent_Wrapper.IconDrag;
QDragLeaveEvent.FontChange = QDragLeaveEvent_Wrapper.FontChange;
QDragLeaveEvent.EnabledChange = QDragLeaveEvent_Wrapper.EnabledChange;
QDragLeaveEvent.ActivationChange = QDragLeaveEvent_Wrapper.ActivationChange;
QDragLeaveEvent.StyleChange = QDragLeaveEvent_Wrapper.StyleChange;
QDragLeaveEvent.IconTextChange = QDragLeaveEvent_Wrapper.IconTextChange;
QDragLeaveEvent.ModifiedChange = QDragLeaveEvent_Wrapper.ModifiedChange;
QDragLeaveEvent.MouseTrackingChange = QDragLeaveEvent_Wrapper.MouseTrackingChange;
QDragLeaveEvent.WindowBlocked = QDragLeaveEvent_Wrapper.WindowBlocked;
QDragLeaveEvent.WindowUnblocked = QDragLeaveEvent_Wrapper.WindowUnblocked;
QDragLeaveEvent.WindowStateChange = QDragLeaveEvent_Wrapper.WindowStateChange;
QDragLeaveEvent.ReadOnlyChange = QDragLeaveEvent_Wrapper.ReadOnlyChange;
QDragLeaveEvent.ToolTip = QDragLeaveEvent_Wrapper.ToolTip;
QDragLeaveEvent.WhatsThis = QDragLeaveEvent_Wrapper.WhatsThis;
QDragLeaveEvent.StatusTip = QDragLeaveEvent_Wrapper.StatusTip;
QDragLeaveEvent.ActionChanged = QDragLeaveEvent_Wrapper.ActionChanged;
QDragLeaveEvent.ActionAdded = QDragLeaveEvent_Wrapper.ActionAdded;
QDragLeaveEvent.ActionRemoved = QDragLeaveEvent_Wrapper.ActionRemoved;
QDragLeaveEvent.FileOpen = QDragLeaveEvent_Wrapper.FileOpen;
QDragLeaveEvent.Shortcut = QDragLeaveEvent_Wrapper.Shortcut;
QDragLeaveEvent.ShortcutOverride = QDragLeaveEvent_Wrapper.ShortcutOverride;
QDragLeaveEvent.WhatsThisClicked = QDragLeaveEvent_Wrapper.WhatsThisClicked;
QDragLeaveEvent.ToolBarChange = QDragLeaveEvent_Wrapper.ToolBarChange;
QDragLeaveEvent.ApplicationActivate = QDragLeaveEvent_Wrapper.ApplicationActivate;
QDragLeaveEvent.ApplicationActivated = QDragLeaveEvent_Wrapper.ApplicationActivated;
QDragLeaveEvent.ApplicationDeactivate = QDragLeaveEvent_Wrapper.ApplicationDeactivate;
QDragLeaveEvent.ApplicationDeactivated = QDragLeaveEvent_Wrapper.ApplicationDeactivated;
QDragLeaveEvent.QueryWhatsThis = QDragLeaveEvent_Wrapper.QueryWhatsThis;
QDragLeaveEvent.EnterWhatsThisMode = QDragLeaveEvent_Wrapper.EnterWhatsThisMode;
QDragLeaveEvent.LeaveWhatsThisMode = QDragLeaveEvent_Wrapper.LeaveWhatsThisMode;
QDragLeaveEvent.ZOrderChange = QDragLeaveEvent_Wrapper.ZOrderChange;
QDragLeaveEvent.HoverEnter = QDragLeaveEvent_Wrapper.HoverEnter;
QDragLeaveEvent.HoverLeave = QDragLeaveEvent_Wrapper.HoverLeave;
QDragLeaveEvent.HoverMove = QDragLeaveEvent_Wrapper.HoverMove;
QDragLeaveEvent.AcceptDropsChange = QDragLeaveEvent_Wrapper.AcceptDropsChange;
QDragLeaveEvent.ZeroTimerEvent = QDragLeaveEvent_Wrapper.ZeroTimerEvent;
QDragLeaveEvent.GraphicsSceneMouseMove = QDragLeaveEvent_Wrapper.GraphicsSceneMouseMove;
QDragLeaveEvent.GraphicsSceneMousePress = QDragLeaveEvent_Wrapper.GraphicsSceneMousePress;
QDragLeaveEvent.GraphicsSceneMouseRelease = QDragLeaveEvent_Wrapper.GraphicsSceneMouseRelease;
QDragLeaveEvent.GraphicsSceneMouseDoubleClick = QDragLeaveEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QDragLeaveEvent.GraphicsSceneContextMenu = QDragLeaveEvent_Wrapper.GraphicsSceneContextMenu;
QDragLeaveEvent.GraphicsSceneHoverEnter = QDragLeaveEvent_Wrapper.GraphicsSceneHoverEnter;
QDragLeaveEvent.GraphicsSceneHoverMove = QDragLeaveEvent_Wrapper.GraphicsSceneHoverMove;
QDragLeaveEvent.GraphicsSceneHoverLeave = QDragLeaveEvent_Wrapper.GraphicsSceneHoverLeave;
QDragLeaveEvent.GraphicsSceneHelp = QDragLeaveEvent_Wrapper.GraphicsSceneHelp;
QDragLeaveEvent.GraphicsSceneDragEnter = QDragLeaveEvent_Wrapper.GraphicsSceneDragEnter;
QDragLeaveEvent.GraphicsSceneDragMove = QDragLeaveEvent_Wrapper.GraphicsSceneDragMove;
QDragLeaveEvent.GraphicsSceneDragLeave = QDragLeaveEvent_Wrapper.GraphicsSceneDragLeave;
QDragLeaveEvent.GraphicsSceneDrop = QDragLeaveEvent_Wrapper.GraphicsSceneDrop;
QDragLeaveEvent.GraphicsSceneWheel = QDragLeaveEvent_Wrapper.GraphicsSceneWheel;
QDragLeaveEvent.GraphicsSceneLeave = QDragLeaveEvent_Wrapper.GraphicsSceneLeave;
QDragLeaveEvent.KeyboardLayoutChange = QDragLeaveEvent_Wrapper.KeyboardLayoutChange;
QDragLeaveEvent.DynamicPropertyChange = QDragLeaveEvent_Wrapper.DynamicPropertyChange;
QDragLeaveEvent.TabletEnterProximity = QDragLeaveEvent_Wrapper.TabletEnterProximity;
QDragLeaveEvent.TabletLeaveProximity = QDragLeaveEvent_Wrapper.TabletLeaveProximity;
QDragLeaveEvent.NonClientAreaMouseMove = QDragLeaveEvent_Wrapper.NonClientAreaMouseMove;
QDragLeaveEvent.NonClientAreaMouseButtonPress = QDragLeaveEvent_Wrapper.NonClientAreaMouseButtonPress;
QDragLeaveEvent.NonClientAreaMouseButtonRelease = QDragLeaveEvent_Wrapper.NonClientAreaMouseButtonRelease;
QDragLeaveEvent.NonClientAreaMouseButtonDblClick = QDragLeaveEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QDragLeaveEvent.MacSizeChange = QDragLeaveEvent_Wrapper.MacSizeChange;
QDragLeaveEvent.ContentsRectChange = QDragLeaveEvent_Wrapper.ContentsRectChange;
QDragLeaveEvent.MacGLWindowChange = QDragLeaveEvent_Wrapper.MacGLWindowChange;
QDragLeaveEvent.FutureCallOut = QDragLeaveEvent_Wrapper.FutureCallOut;
QDragLeaveEvent.GraphicsSceneResize = QDragLeaveEvent_Wrapper.GraphicsSceneResize;
QDragLeaveEvent.GraphicsSceneMove = QDragLeaveEvent_Wrapper.GraphicsSceneMove;
QDragLeaveEvent.CursorChange = QDragLeaveEvent_Wrapper.CursorChange;
QDragLeaveEvent.ToolTipChange = QDragLeaveEvent_Wrapper.ToolTipChange;
QDragLeaveEvent.NetworkReplyUpdated = QDragLeaveEvent_Wrapper.NetworkReplyUpdated;
QDragLeaveEvent.GrabMouse = QDragLeaveEvent_Wrapper.GrabMouse;
QDragLeaveEvent.UngrabMouse = QDragLeaveEvent_Wrapper.UngrabMouse;
QDragLeaveEvent.GrabKeyboard = QDragLeaveEvent_Wrapper.GrabKeyboard;
QDragLeaveEvent.UngrabKeyboard = QDragLeaveEvent_Wrapper.UngrabKeyboard;
QDragLeaveEvent.StateMachineSignal = QDragLeaveEvent_Wrapper.StateMachineSignal;
QDragLeaveEvent.StateMachineWrapped = QDragLeaveEvent_Wrapper.StateMachineWrapped;
QDragLeaveEvent.TouchBegin = QDragLeaveEvent_Wrapper.TouchBegin;
QDragLeaveEvent.TouchUpdate = QDragLeaveEvent_Wrapper.TouchUpdate;
QDragLeaveEvent.TouchEnd = QDragLeaveEvent_Wrapper.TouchEnd;
QDragLeaveEvent.NativeGesture = QDragLeaveEvent_Wrapper.NativeGesture;
QDragLeaveEvent.RequestSoftwareInputPanel = QDragLeaveEvent_Wrapper.RequestSoftwareInputPanel;
QDragLeaveEvent.CloseSoftwareInputPanel = QDragLeaveEvent_Wrapper.CloseSoftwareInputPanel;
QDragLeaveEvent.WinIdChange = QDragLeaveEvent_Wrapper.WinIdChange;
QDragLeaveEvent.Gesture = QDragLeaveEvent_Wrapper.Gesture;
QDragLeaveEvent.GestureOverride = QDragLeaveEvent_Wrapper.GestureOverride;
QDragLeaveEvent.ScrollPrepare = QDragLeaveEvent_Wrapper.ScrollPrepare;
QDragLeaveEvent.Scroll = QDragLeaveEvent_Wrapper.Scroll;
QDragLeaveEvent.Expose = QDragLeaveEvent_Wrapper.Expose;
QDragLeaveEvent.InputMethodQuery = QDragLeaveEvent_Wrapper.InputMethodQuery;
QDragLeaveEvent.OrientationChange = QDragLeaveEvent_Wrapper.OrientationChange;
QDragLeaveEvent.TouchCancel = QDragLeaveEvent_Wrapper.TouchCancel;
QDragLeaveEvent.ThemeChange = QDragLeaveEvent_Wrapper.ThemeChange;
QDragLeaveEvent.SockClose = QDragLeaveEvent_Wrapper.SockClose;
QDragLeaveEvent.PlatformPanel = QDragLeaveEvent_Wrapper.PlatformPanel;
QDragLeaveEvent.StyleAnimationUpdate = QDragLeaveEvent_Wrapper.StyleAnimationUpdate;
QDragLeaveEvent.ApplicationStateChange = QDragLeaveEvent_Wrapper.ApplicationStateChange;
QDragLeaveEvent.WindowChangeInternal = QDragLeaveEvent_Wrapper.WindowChangeInternal;
QDragLeaveEvent.ScreenChangeInternal = QDragLeaveEvent_Wrapper.ScreenChangeInternal;
QDragLeaveEvent.PlatformSurface = QDragLeaveEvent_Wrapper.PlatformSurface;
QDragLeaveEvent.Pointer = QDragLeaveEvent_Wrapper.Pointer;
QDragLeaveEvent.TabletTrackingChange = QDragLeaveEvent_Wrapper.TabletTrackingChange;
QDragLeaveEvent.User = QDragLeaveEvent_Wrapper.User;
QDragLeaveEvent.MaxUser = QDragLeaveEvent_Wrapper.MaxUser;


      // functions:
      
        // function 
        QDragLeaveEvent.prototype.type = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.type");
          return this.__PROXY__.type(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.spontaneous = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.spontaneous");
          return this.__PROXY__.spontaneous(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.setAccepted = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.setAccepted");
          return this.__PROXY__.setAccepted(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.isAccepted = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.isAccepted");
          return this.__PROXY__.isAccepted(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.accept = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.accept");
          return this.__PROXY__.accept(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.ignore = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.ignore");
          return this.__PROXY__.ignore(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.isInputEvent = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.isInputEvent");
          return this.__PROXY__.isInputEvent(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.isPointerEvent = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.isPointerEvent");
          return this.__PROXY__.isPointerEvent(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.isSinglePointEvent = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.isSinglePointEvent");
          return this.__PROXY__.isSinglePointEvent(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.clone = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        QDragLeaveEvent.prototype.setSpontaneous = function(...args) 
          
        {
          //print("JS: QDragLeaveEvent.prototype.setSpontaneous");
          return this.__PROXY__.setSpontaneous(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDragLeaveEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDragLeaveEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDragLeaveEvent.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      