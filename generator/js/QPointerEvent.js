
      // auto generated
      //var self;

      // class constructor:
      function QPointerEvent() {
        

        // should be QPointerEvent_BaseJs.call(this, engine):
        //QPointerEvent.prototype = new QPointerEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPointerEvent.getIdStatic()))) {

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
            qWarning("QPointerEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QPointerEvent.js: No constructor found for class QPointerEvent");
            
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

      //QPointerEvent.prototype = new QPointerEvent_BaseJs(engine);
      //QPointerEvent.prototype = new QPointerEvent_Wrapper(engine);
      QPointerEvent.prototype = new Object();

      QPointerEvent.prototype.toString = function() {
          //return "QPointerEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPointerEvent [JS]";
        };
      QPointerEvent.getObjectType = function() {
        return RJSType_QPointerEvent.getIdStatic();
      };

      QPointerEvent.prototype.getObjectType = function() {
        return RJSType_QPointerEvent.getIdStatic();
      };

      QPointerEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPointerEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QInputEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QPointerEvent.None = QPointerEvent_Wrapper.None;
QPointerEvent.Timer = QPointerEvent_Wrapper.Timer;
QPointerEvent.MouseButtonPress = QPointerEvent_Wrapper.MouseButtonPress;
QPointerEvent.MouseButtonRelease = QPointerEvent_Wrapper.MouseButtonRelease;
QPointerEvent.MouseButtonDblClick = QPointerEvent_Wrapper.MouseButtonDblClick;
QPointerEvent.MouseMove = QPointerEvent_Wrapper.MouseMove;
QPointerEvent.KeyPress = QPointerEvent_Wrapper.KeyPress;
QPointerEvent.KeyRelease = QPointerEvent_Wrapper.KeyRelease;
QPointerEvent.FocusIn = QPointerEvent_Wrapper.FocusIn;
QPointerEvent.FocusOut = QPointerEvent_Wrapper.FocusOut;
QPointerEvent.FocusAboutToChange = QPointerEvent_Wrapper.FocusAboutToChange;
QPointerEvent.Enter = QPointerEvent_Wrapper.Enter;
QPointerEvent.Leave = QPointerEvent_Wrapper.Leave;
QPointerEvent.Paint = QPointerEvent_Wrapper.Paint;
QPointerEvent.Move = QPointerEvent_Wrapper.Move;
QPointerEvent.Resize = QPointerEvent_Wrapper.Resize;
QPointerEvent.Create = QPointerEvent_Wrapper.Create;
QPointerEvent.Destroy = QPointerEvent_Wrapper.Destroy;
QPointerEvent.Show = QPointerEvent_Wrapper.Show;
QPointerEvent.Hide = QPointerEvent_Wrapper.Hide;
QPointerEvent.Close = QPointerEvent_Wrapper.Close;
QPointerEvent.Quit = QPointerEvent_Wrapper.Quit;
QPointerEvent.ParentChange = QPointerEvent_Wrapper.ParentChange;
QPointerEvent.ParentAboutToChange = QPointerEvent_Wrapper.ParentAboutToChange;
QPointerEvent.ThreadChange = QPointerEvent_Wrapper.ThreadChange;
QPointerEvent.WindowActivate = QPointerEvent_Wrapper.WindowActivate;
QPointerEvent.WindowDeactivate = QPointerEvent_Wrapper.WindowDeactivate;
QPointerEvent.ShowToParent = QPointerEvent_Wrapper.ShowToParent;
QPointerEvent.HideToParent = QPointerEvent_Wrapper.HideToParent;
QPointerEvent.Wheel = QPointerEvent_Wrapper.Wheel;
QPointerEvent.WindowTitleChange = QPointerEvent_Wrapper.WindowTitleChange;
QPointerEvent.WindowIconChange = QPointerEvent_Wrapper.WindowIconChange;
QPointerEvent.ApplicationWindowIconChange = QPointerEvent_Wrapper.ApplicationWindowIconChange;
QPointerEvent.ApplicationFontChange = QPointerEvent_Wrapper.ApplicationFontChange;
QPointerEvent.ApplicationLayoutDirectionChange = QPointerEvent_Wrapper.ApplicationLayoutDirectionChange;
QPointerEvent.ApplicationPaletteChange = QPointerEvent_Wrapper.ApplicationPaletteChange;
QPointerEvent.PaletteChange = QPointerEvent_Wrapper.PaletteChange;
QPointerEvent.Clipboard = QPointerEvent_Wrapper.Clipboard;
QPointerEvent.Speech = QPointerEvent_Wrapper.Speech;
QPointerEvent.MetaCall = QPointerEvent_Wrapper.MetaCall;
QPointerEvent.SockAct = QPointerEvent_Wrapper.SockAct;
QPointerEvent.WinEventAct = QPointerEvent_Wrapper.WinEventAct;
QPointerEvent.DeferredDelete = QPointerEvent_Wrapper.DeferredDelete;
QPointerEvent.DragEnter = QPointerEvent_Wrapper.DragEnter;
QPointerEvent.DragMove = QPointerEvent_Wrapper.DragMove;
QPointerEvent.DragLeave = QPointerEvent_Wrapper.DragLeave;
QPointerEvent.Drop = QPointerEvent_Wrapper.Drop;
QPointerEvent.DragResponse = QPointerEvent_Wrapper.DragResponse;
QPointerEvent.ChildAdded = QPointerEvent_Wrapper.ChildAdded;
QPointerEvent.ChildPolished = QPointerEvent_Wrapper.ChildPolished;
QPointerEvent.ChildRemoved = QPointerEvent_Wrapper.ChildRemoved;
QPointerEvent.ShowWindowRequest = QPointerEvent_Wrapper.ShowWindowRequest;
QPointerEvent.PolishRequest = QPointerEvent_Wrapper.PolishRequest;
QPointerEvent.Polish = QPointerEvent_Wrapper.Polish;
QPointerEvent.LayoutRequest = QPointerEvent_Wrapper.LayoutRequest;
QPointerEvent.UpdateRequest = QPointerEvent_Wrapper.UpdateRequest;
QPointerEvent.UpdateLater = QPointerEvent_Wrapper.UpdateLater;
QPointerEvent.EmbeddingControl = QPointerEvent_Wrapper.EmbeddingControl;
QPointerEvent.ActivateControl = QPointerEvent_Wrapper.ActivateControl;
QPointerEvent.DeactivateControl = QPointerEvent_Wrapper.DeactivateControl;
QPointerEvent.ContextMenu = QPointerEvent_Wrapper.ContextMenu;
QPointerEvent.InputMethod = QPointerEvent_Wrapper.InputMethod;
QPointerEvent.TabletMove = QPointerEvent_Wrapper.TabletMove;
QPointerEvent.LocaleChange = QPointerEvent_Wrapper.LocaleChange;
QPointerEvent.LanguageChange = QPointerEvent_Wrapper.LanguageChange;
QPointerEvent.LayoutDirectionChange = QPointerEvent_Wrapper.LayoutDirectionChange;
QPointerEvent.Style = QPointerEvent_Wrapper.Style;
QPointerEvent.TabletPress = QPointerEvent_Wrapper.TabletPress;
QPointerEvent.TabletRelease = QPointerEvent_Wrapper.TabletRelease;
QPointerEvent.OkRequest = QPointerEvent_Wrapper.OkRequest;
QPointerEvent.HelpRequest = QPointerEvent_Wrapper.HelpRequest;
QPointerEvent.IconDrag = QPointerEvent_Wrapper.IconDrag;
QPointerEvent.FontChange = QPointerEvent_Wrapper.FontChange;
QPointerEvent.EnabledChange = QPointerEvent_Wrapper.EnabledChange;
QPointerEvent.ActivationChange = QPointerEvent_Wrapper.ActivationChange;
QPointerEvent.StyleChange = QPointerEvent_Wrapper.StyleChange;
QPointerEvent.IconTextChange = QPointerEvent_Wrapper.IconTextChange;
QPointerEvent.ModifiedChange = QPointerEvent_Wrapper.ModifiedChange;
QPointerEvent.MouseTrackingChange = QPointerEvent_Wrapper.MouseTrackingChange;
QPointerEvent.WindowBlocked = QPointerEvent_Wrapper.WindowBlocked;
QPointerEvent.WindowUnblocked = QPointerEvent_Wrapper.WindowUnblocked;
QPointerEvent.WindowStateChange = QPointerEvent_Wrapper.WindowStateChange;
QPointerEvent.ReadOnlyChange = QPointerEvent_Wrapper.ReadOnlyChange;
QPointerEvent.ToolTip = QPointerEvent_Wrapper.ToolTip;
QPointerEvent.WhatsThis = QPointerEvent_Wrapper.WhatsThis;
QPointerEvent.StatusTip = QPointerEvent_Wrapper.StatusTip;
QPointerEvent.ActionChanged = QPointerEvent_Wrapper.ActionChanged;
QPointerEvent.ActionAdded = QPointerEvent_Wrapper.ActionAdded;
QPointerEvent.ActionRemoved = QPointerEvent_Wrapper.ActionRemoved;
QPointerEvent.FileOpen = QPointerEvent_Wrapper.FileOpen;
QPointerEvent.Shortcut = QPointerEvent_Wrapper.Shortcut;
QPointerEvent.ShortcutOverride = QPointerEvent_Wrapper.ShortcutOverride;
QPointerEvent.WhatsThisClicked = QPointerEvent_Wrapper.WhatsThisClicked;
QPointerEvent.ToolBarChange = QPointerEvent_Wrapper.ToolBarChange;
QPointerEvent.ApplicationActivate = QPointerEvent_Wrapper.ApplicationActivate;
QPointerEvent.ApplicationActivated = QPointerEvent_Wrapper.ApplicationActivated;
QPointerEvent.ApplicationDeactivate = QPointerEvent_Wrapper.ApplicationDeactivate;
QPointerEvent.ApplicationDeactivated = QPointerEvent_Wrapper.ApplicationDeactivated;
QPointerEvent.QueryWhatsThis = QPointerEvent_Wrapper.QueryWhatsThis;
QPointerEvent.EnterWhatsThisMode = QPointerEvent_Wrapper.EnterWhatsThisMode;
QPointerEvent.LeaveWhatsThisMode = QPointerEvent_Wrapper.LeaveWhatsThisMode;
QPointerEvent.ZOrderChange = QPointerEvent_Wrapper.ZOrderChange;
QPointerEvent.HoverEnter = QPointerEvent_Wrapper.HoverEnter;
QPointerEvent.HoverLeave = QPointerEvent_Wrapper.HoverLeave;
QPointerEvent.HoverMove = QPointerEvent_Wrapper.HoverMove;
QPointerEvent.AcceptDropsChange = QPointerEvent_Wrapper.AcceptDropsChange;
QPointerEvent.ZeroTimerEvent = QPointerEvent_Wrapper.ZeroTimerEvent;
QPointerEvent.GraphicsSceneMouseMove = QPointerEvent_Wrapper.GraphicsSceneMouseMove;
QPointerEvent.GraphicsSceneMousePress = QPointerEvent_Wrapper.GraphicsSceneMousePress;
QPointerEvent.GraphicsSceneMouseRelease = QPointerEvent_Wrapper.GraphicsSceneMouseRelease;
QPointerEvent.GraphicsSceneMouseDoubleClick = QPointerEvent_Wrapper.GraphicsSceneMouseDoubleClick;
QPointerEvent.GraphicsSceneContextMenu = QPointerEvent_Wrapper.GraphicsSceneContextMenu;
QPointerEvent.GraphicsSceneHoverEnter = QPointerEvent_Wrapper.GraphicsSceneHoverEnter;
QPointerEvent.GraphicsSceneHoverMove = QPointerEvent_Wrapper.GraphicsSceneHoverMove;
QPointerEvent.GraphicsSceneHoverLeave = QPointerEvent_Wrapper.GraphicsSceneHoverLeave;
QPointerEvent.GraphicsSceneHelp = QPointerEvent_Wrapper.GraphicsSceneHelp;
QPointerEvent.GraphicsSceneDragEnter = QPointerEvent_Wrapper.GraphicsSceneDragEnter;
QPointerEvent.GraphicsSceneDragMove = QPointerEvent_Wrapper.GraphicsSceneDragMove;
QPointerEvent.GraphicsSceneDragLeave = QPointerEvent_Wrapper.GraphicsSceneDragLeave;
QPointerEvent.GraphicsSceneDrop = QPointerEvent_Wrapper.GraphicsSceneDrop;
QPointerEvent.GraphicsSceneWheel = QPointerEvent_Wrapper.GraphicsSceneWheel;
QPointerEvent.GraphicsSceneLeave = QPointerEvent_Wrapper.GraphicsSceneLeave;
QPointerEvent.KeyboardLayoutChange = QPointerEvent_Wrapper.KeyboardLayoutChange;
QPointerEvent.DynamicPropertyChange = QPointerEvent_Wrapper.DynamicPropertyChange;
QPointerEvent.TabletEnterProximity = QPointerEvent_Wrapper.TabletEnterProximity;
QPointerEvent.TabletLeaveProximity = QPointerEvent_Wrapper.TabletLeaveProximity;
QPointerEvent.NonClientAreaMouseMove = QPointerEvent_Wrapper.NonClientAreaMouseMove;
QPointerEvent.NonClientAreaMouseButtonPress = QPointerEvent_Wrapper.NonClientAreaMouseButtonPress;
QPointerEvent.NonClientAreaMouseButtonRelease = QPointerEvent_Wrapper.NonClientAreaMouseButtonRelease;
QPointerEvent.NonClientAreaMouseButtonDblClick = QPointerEvent_Wrapper.NonClientAreaMouseButtonDblClick;
QPointerEvent.MacSizeChange = QPointerEvent_Wrapper.MacSizeChange;
QPointerEvent.ContentsRectChange = QPointerEvent_Wrapper.ContentsRectChange;
QPointerEvent.MacGLWindowChange = QPointerEvent_Wrapper.MacGLWindowChange;
QPointerEvent.FutureCallOut = QPointerEvent_Wrapper.FutureCallOut;
QPointerEvent.GraphicsSceneResize = QPointerEvent_Wrapper.GraphicsSceneResize;
QPointerEvent.GraphicsSceneMove = QPointerEvent_Wrapper.GraphicsSceneMove;
QPointerEvent.CursorChange = QPointerEvent_Wrapper.CursorChange;
QPointerEvent.ToolTipChange = QPointerEvent_Wrapper.ToolTipChange;
QPointerEvent.NetworkReplyUpdated = QPointerEvent_Wrapper.NetworkReplyUpdated;
QPointerEvent.GrabMouse = QPointerEvent_Wrapper.GrabMouse;
QPointerEvent.UngrabMouse = QPointerEvent_Wrapper.UngrabMouse;
QPointerEvent.GrabKeyboard = QPointerEvent_Wrapper.GrabKeyboard;
QPointerEvent.UngrabKeyboard = QPointerEvent_Wrapper.UngrabKeyboard;
QPointerEvent.StateMachineSignal = QPointerEvent_Wrapper.StateMachineSignal;
QPointerEvent.StateMachineWrapped = QPointerEvent_Wrapper.StateMachineWrapped;
QPointerEvent.TouchBegin = QPointerEvent_Wrapper.TouchBegin;
QPointerEvent.TouchUpdate = QPointerEvent_Wrapper.TouchUpdate;
QPointerEvent.TouchEnd = QPointerEvent_Wrapper.TouchEnd;
QPointerEvent.NativeGesture = QPointerEvent_Wrapper.NativeGesture;
QPointerEvent.RequestSoftwareInputPanel = QPointerEvent_Wrapper.RequestSoftwareInputPanel;
QPointerEvent.CloseSoftwareInputPanel = QPointerEvent_Wrapper.CloseSoftwareInputPanel;
QPointerEvent.WinIdChange = QPointerEvent_Wrapper.WinIdChange;
QPointerEvent.Gesture = QPointerEvent_Wrapper.Gesture;
QPointerEvent.GestureOverride = QPointerEvent_Wrapper.GestureOverride;
QPointerEvent.ScrollPrepare = QPointerEvent_Wrapper.ScrollPrepare;
QPointerEvent.Scroll = QPointerEvent_Wrapper.Scroll;
QPointerEvent.Expose = QPointerEvent_Wrapper.Expose;
QPointerEvent.InputMethodQuery = QPointerEvent_Wrapper.InputMethodQuery;
QPointerEvent.OrientationChange = QPointerEvent_Wrapper.OrientationChange;
QPointerEvent.TouchCancel = QPointerEvent_Wrapper.TouchCancel;
QPointerEvent.ThemeChange = QPointerEvent_Wrapper.ThemeChange;
QPointerEvent.SockClose = QPointerEvent_Wrapper.SockClose;
QPointerEvent.PlatformPanel = QPointerEvent_Wrapper.PlatformPanel;
QPointerEvent.StyleAnimationUpdate = QPointerEvent_Wrapper.StyleAnimationUpdate;
QPointerEvent.ApplicationStateChange = QPointerEvent_Wrapper.ApplicationStateChange;
QPointerEvent.WindowChangeInternal = QPointerEvent_Wrapper.WindowChangeInternal;
QPointerEvent.ScreenChangeInternal = QPointerEvent_Wrapper.ScreenChangeInternal;
QPointerEvent.PlatformSurface = QPointerEvent_Wrapper.PlatformSurface;
QPointerEvent.Pointer = QPointerEvent_Wrapper.Pointer;
QPointerEvent.TabletTrackingChange = QPointerEvent_Wrapper.TabletTrackingChange;
QPointerEvent.User = QPointerEvent_Wrapper.User;
QPointerEvent.MaxUser = QPointerEvent_Wrapper.MaxUser;


      // functions:
      
        // function 
        QPointerEvent.prototype.type = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.type");
          return this.__PROXY__.type(...args);
        };
    
        // function 
        QPointerEvent.prototype.spontaneous = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.spontaneous");
          return this.__PROXY__.spontaneous(...args);
        };
    
        // function 
        QPointerEvent.prototype.isAccepted = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.isAccepted");
          return this.__PROXY__.isAccepted(...args);
        };
    
        // function 
        QPointerEvent.prototype.accept = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.accept");
          return this.__PROXY__.accept(...args);
        };
    
        // function 
        QPointerEvent.prototype.ignore = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.ignore");
          return this.__PROXY__.ignore(...args);
        };
    
        // function 
        QPointerEvent.prototype.isInputEvent = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.isInputEvent");
          return this.__PROXY__.isInputEvent(...args);
        };
    
        // function 
        QPointerEvent.prototype.isPointerEvent = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.isPointerEvent");
          return this.__PROXY__.isPointerEvent(...args);
        };
    
        // function 
        QPointerEvent.prototype.isSinglePointEvent = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.isSinglePointEvent");
          return this.__PROXY__.isSinglePointEvent(...args);
        };
    
        // function 
        QPointerEvent.prototype.setSpontaneous = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.setSpontaneous");
          return this.__PROXY__.setSpontaneous(...args);
        };
    
        // function 
        QPointerEvent.prototype.modifiers = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.modifiers");
          return this.__PROXY__.modifiers(...args);
        };
    
        // function 
        QPointerEvent.prototype.setModifiers = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.setModifiers");
          return this.__PROXY__.setModifiers(...args);
        };
    
        // function 
        QPointerEvent.prototype.timestamp = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.timestamp");
          return this.__PROXY__.timestamp(...args);
        };
    
        // function 
        QPointerEvent.prototype.clone = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        QPointerEvent.prototype.setTimestamp = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.setTimestamp");
          return this.__PROXY__.setTimestamp(...args);
        };
    
        // function 
        QPointerEvent.prototype.pointCount = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.pointCount");
          return this.__PROXY__.pointCount(...args);
        };
    
        // function 
        QPointerEvent.prototype.point = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.point");
          return this.__PROXY__.point(...args);
        };
    
        // function 
        QPointerEvent.prototype.pointById = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.pointById");
          return this.__PROXY__.pointById(...args);
        };
    
        // function 
        QPointerEvent.prototype.allPointsGrabbed = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.allPointsGrabbed");
          return this.__PROXY__.allPointsGrabbed(...args);
        };
    
        // function 
        QPointerEvent.prototype.isBeginEvent = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.isBeginEvent");
          return this.__PROXY__.isBeginEvent(...args);
        };
    
        // function 
        QPointerEvent.prototype.isUpdateEvent = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.isUpdateEvent");
          return this.__PROXY__.isUpdateEvent(...args);
        };
    
        // function 
        QPointerEvent.prototype.isEndEvent = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.isEndEvent");
          return this.__PROXY__.isEndEvent(...args);
        };
    
        // function 
        QPointerEvent.prototype.allPointsAccepted = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.allPointsAccepted");
          return this.__PROXY__.allPointsAccepted(...args);
        };
    
        // function 
        QPointerEvent.prototype.setAccepted = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.setAccepted");
          return this.__PROXY__.setAccepted(...args);
        };
    
        // function 
        QPointerEvent.prototype.exclusiveGrabber = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.exclusiveGrabber");
          return this.__PROXY__.exclusiveGrabber(...args);
        };
    
        // function 
        QPointerEvent.prototype.setExclusiveGrabber = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.setExclusiveGrabber");
          return this.__PROXY__.setExclusiveGrabber(...args);
        };
    
        // function 
        QPointerEvent.prototype.clearPassiveGrabbers = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.clearPassiveGrabbers");
          return this.__PROXY__.clearPassiveGrabbers(...args);
        };
    
        // function 
        QPointerEvent.prototype.addPassiveGrabber = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.addPassiveGrabber");
          return this.__PROXY__.addPassiveGrabber(...args);
        };
    
        // function 
        QPointerEvent.prototype.removePassiveGrabber = function(...args) 
          
        {
          //print("JS: QPointerEvent.prototype.removePassiveGrabber");
          return this.__PROXY__.removePassiveGrabber(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPointerEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPointerEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPointerEvent.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      