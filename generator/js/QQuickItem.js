
      // auto generated
      //var self;

      // class constructor:
      function QQuickItem() {
        

        // should be QQuickItem_BaseJs.call(this, engine):
        //QQuickItem.prototype = new QQuickItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQuickItem.getIdStatic()))) {

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
            qWarning("QQuickItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QQuickItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQuickItem);
  }

  
  else {
    
        print("QQuickItem(): wrong number / type of arguments");
      
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

      //QQuickItem.prototype = new QQuickItem_BaseJs(engine);
      //QQuickItem.prototype = new QQuickItem_Wrapper(engine);
      QQuickItem.prototype = new Object();


      QQuickItem.prototype.toString = function() {
          //return "QQuickItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQuickItem [JS]";
        };
      QQuickItem.getObjectType = function() {
        return RJSType_QQuickItem.getIdStatic();
      };

      QQuickItem.prototype.getObjectType = function() {
        return RJSType_QQuickItem.getIdStatic();
      };

      QQuickItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQuickItem.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ItemChange
QQuickItem.ItemChildAddedChange = QQuickItem_Wrapper.ItemChildAddedChange;
QQuickItem.ItemChildRemovedChange = QQuickItem_Wrapper.ItemChildRemovedChange;
QQuickItem.ItemSceneChange = QQuickItem_Wrapper.ItemSceneChange;
QQuickItem.ItemVisibleHasChanged = QQuickItem_Wrapper.ItemVisibleHasChanged;
QQuickItem.ItemParentHasChanged = QQuickItem_Wrapper.ItemParentHasChanged;
QQuickItem.ItemOpacityHasChanged = QQuickItem_Wrapper.ItemOpacityHasChanged;
QQuickItem.ItemActiveFocusHasChanged = QQuickItem_Wrapper.ItemActiveFocusHasChanged;
QQuickItem.ItemRotationHasChanged = QQuickItem_Wrapper.ItemRotationHasChanged;
QQuickItem.ItemAntialiasingHasChanged = QQuickItem_Wrapper.ItemAntialiasingHasChanged;
QQuickItem.ItemDevicePixelRatioHasChanged = QQuickItem_Wrapper.ItemDevicePixelRatioHasChanged;
QQuickItem.ItemEnabledHasChanged = QQuickItem_Wrapper.ItemEnabledHasChanged;
QQuickItem.ItemScaleHasChanged = QQuickItem_Wrapper.ItemScaleHasChanged;
QQuickItem.ItemTransformHasChanged = QQuickItem_Wrapper.ItemTransformHasChanged;

  // enum: TransformOrigin
QQuickItem.TopLeft = QQuickItem_Wrapper.TopLeft;
QQuickItem.Top = QQuickItem_Wrapper.Top;
QQuickItem.TopRight = QQuickItem_Wrapper.TopRight;
QQuickItem.Left = QQuickItem_Wrapper.Left;
QQuickItem.Center = QQuickItem_Wrapper.Center;
QQuickItem.Right = QQuickItem_Wrapper.Right;
QQuickItem.BottomLeft = QQuickItem_Wrapper.BottomLeft;
QQuickItem.Bottom = QQuickItem_Wrapper.Bottom;
QQuickItem.BottomRight = QQuickItem_Wrapper.BottomRight;


      // functions:
      
        // function 
        QQuickItem.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QQuickItem.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QQuickItem.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QQuickItem.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QQuickItem.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QQuickItem.prototype.findChild = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QQuickItem.prototype.children = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setParent = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QQuickItem.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QQuickItem.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QQuickItem.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QQuickItem.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QQuickItem.prototype.property = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QQuickItem.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QQuickItem.prototype.parent = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QQuickItem.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QQuickItem.prototype.parentItem = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.parentItem");
          
              return this.__PROXY__.parentItem(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setParentItem = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setParentItem");
          
              return this.__PROXY__.setParentItem(...args);
            
        };
    
        // function 
        QQuickItem.prototype.stackBefore = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.stackBefore");
          
              return this.__PROXY__.stackBefore(...args);
            
        };
    
        // function 
        QQuickItem.prototype.stackAfter = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.stackAfter");
          
              return this.__PROXY__.stackAfter(...args);
            
        };
    
        // function 
        QQuickItem.prototype.childrenRect = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.childrenRect");
          
              return this.__PROXY__.childrenRect(...args);
            
        };
    
        // function 
        QQuickItem.prototype.clip = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.clip");
          
              return this.__PROXY__.clip(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setClip = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setClip");
          
              return this.__PROXY__.setClip(...args);
            
        };
    
        // function 
        QQuickItem.prototype.state = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.state");
          
              return this.__PROXY__.state(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setState = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setState");
          
              return this.__PROXY__.setState(...args);
            
        };
    
        // function 
        QQuickItem.prototype.baselineOffset = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.baselineOffset");
          
              return this.__PROXY__.baselineOffset(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setBaselineOffset = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setBaselineOffset");
          
              return this.__PROXY__.setBaselineOffset(...args);
            
        };
    
        // function 
        QQuickItem.prototype.x = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.x");
          
              return this.__PROXY__.x(...args);
            
        };
    
        // function 
        QQuickItem.prototype.y = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.y");
          
              return this.__PROXY__.y(...args);
            
        };
    
        // function 
        QQuickItem.prototype.position = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.position");
          
              return this.__PROXY__.position(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setX = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setX");
          
              return this.__PROXY__.setX(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setY = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setY");
          
              return this.__PROXY__.setY(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setPosition = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setPosition");
          
              return this.__PROXY__.setPosition(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setWidth");
          
              return this.__PROXY__.setWidth(...args);
            
        };
    
        // function 
        QQuickItem.prototype.resetWidth = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.resetWidth");
          
              return this.__PROXY__.resetWidth(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setImplicitWidth = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setImplicitWidth");
          
              return this.__PROXY__.setImplicitWidth(...args);
            
        };
    
        // function 
        QQuickItem.prototype.implicitWidth = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.implicitWidth");
          
              return this.__PROXY__.implicitWidth(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setHeight");
          
              return this.__PROXY__.setHeight(...args);
            
        };
    
        // function 
        QQuickItem.prototype.resetHeight = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.resetHeight");
          
              return this.__PROXY__.resetHeight(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setImplicitHeight = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setImplicitHeight");
          
              return this.__PROXY__.setImplicitHeight(...args);
            
        };
    
        // function 
        QQuickItem.prototype.implicitHeight = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.implicitHeight");
          
              return this.__PROXY__.implicitHeight(...args);
            
        };
    
        // function 
        QQuickItem.prototype.size = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setSize = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setSize");
          
              return this.__PROXY__.setSize(...args);
            
        };
    
        // function 
        QQuickItem.prototype.transformOrigin = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.transformOrigin");
          
              return this.__PROXY__.transformOrigin(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setTransformOrigin = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setTransformOrigin");
          
              return this.__PROXY__.setTransformOrigin(...args);
            
        };
    
        // function 
        QQuickItem.prototype.transformOriginPoint = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.transformOriginPoint");
          
              return this.__PROXY__.transformOriginPoint(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setTransformOriginPoint = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setTransformOriginPoint");
          
              return this.__PROXY__.setTransformOriginPoint(...args);
            
        };
    
        // function 
        QQuickItem.prototype.z = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.z");
          
              return this.__PROXY__.z(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setZ = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setZ");
          
              return this.__PROXY__.setZ(...args);
            
        };
    
        // function 
        QQuickItem.prototype.rotation = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.rotation");
          
              return this.__PROXY__.rotation(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setRotation = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setRotation");
          
              return this.__PROXY__.setRotation(...args);
            
        };
    
        // function 
        QQuickItem.prototype.scale = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setScale = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setScale");
          
              return this.__PROXY__.setScale(...args);
            
        };
    
        // function 
        QQuickItem.prototype.opacity = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.opacity");
          
              return this.__PROXY__.opacity(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setOpacity = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setOpacity");
          
              return this.__PROXY__.setOpacity(...args);
            
        };
    
        // function 
        QQuickItem.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QQuickItem.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QQuickItem.prototype.smooth = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.smooth");
          
              return this.__PROXY__.smooth(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setSmooth = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setSmooth");
          
              return this.__PROXY__.setSmooth(...args);
            
        };
    
        // function 
        QQuickItem.prototype.activeFocusOnTab = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.activeFocusOnTab");
          
              return this.__PROXY__.activeFocusOnTab(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setActiveFocusOnTab = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setActiveFocusOnTab");
          
              return this.__PROXY__.setActiveFocusOnTab(...args);
            
        };
    
        // function 
        QQuickItem.prototype.antialiasing = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.antialiasing");
          
              return this.__PROXY__.antialiasing(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setAntialiasing = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setAntialiasing");
          
              return this.__PROXY__.setAntialiasing(...args);
            
        };
    
        // function 
        QQuickItem.prototype.resetAntialiasing = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.resetAntialiasing");
          
              return this.__PROXY__.resetAntialiasing(...args);
            
        };
    
        // function 
        QQuickItem.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.boundingRect");
          
              return this.__PROXY__.boundingRect(...args);
            
        };
    
        // function 
        QQuickItem.prototype.clipRect = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.clipRect");
          
              return this.__PROXY__.clipRect(...args);
            
        };
    
        // function 
        QQuickItem.prototype.viewportItem = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.viewportItem");
          
              return this.__PROXY__.viewportItem(...args);
            
        };
    
        // function 
        QQuickItem.prototype.hasActiveFocus = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.hasActiveFocus");
          
              return this.__PROXY__.hasActiveFocus(...args);
            
        };
    
        // function 
        QQuickItem.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QQuickItem.prototype.isFocusScope = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.isFocusScope");
          
              return this.__PROXY__.isFocusScope(...args);
            
        };
    
        // function 
        QQuickItem.prototype.scopedFocusItem = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.scopedFocusItem");
          
              return this.__PROXY__.scopedFocusItem(...args);
            
        };
    
        // function 
        QQuickItem.prototype.focusPolicy = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.focusPolicy");
          
              return this.__PROXY__.focusPolicy(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QQuickItem.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QQuickItem.prototype.acceptedMouseButtons = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.acceptedMouseButtons");
          
              return this.__PROXY__.acceptedMouseButtons(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setAcceptedMouseButtons = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setAcceptedMouseButtons");
          
              return this.__PROXY__.setAcceptedMouseButtons(...args);
            
        };
    
        // function 
        QQuickItem.prototype.acceptHoverEvents = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.acceptHoverEvents");
          
              return this.__PROXY__.acceptHoverEvents(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setAcceptHoverEvents = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setAcceptHoverEvents");
          
              return this.__PROXY__.setAcceptHoverEvents(...args);
            
        };
    
        // function 
        QQuickItem.prototype.acceptTouchEvents = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.acceptTouchEvents");
          
              return this.__PROXY__.acceptTouchEvents(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setAcceptTouchEvents = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setAcceptTouchEvents");
          
              return this.__PROXY__.setAcceptTouchEvents(...args);
            
        };
    
        // function 
        QQuickItem.prototype.cursor = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.cursor");
          
              return this.__PROXY__.cursor(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QQuickItem.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QQuickItem.prototype.isUnderMouse = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.isUnderMouse");
          
              return this.__PROXY__.isUnderMouse(...args);
            
        };
    
        // function 
        QQuickItem.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QQuickItem.prototype.ungrabMouse = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.ungrabMouse");
          
              return this.__PROXY__.ungrabMouse(...args);
            
        };
    
        // function 
        QQuickItem.prototype.keepMouseGrab = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.keepMouseGrab");
          
              return this.__PROXY__.keepMouseGrab(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setKeepMouseGrab = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setKeepMouseGrab");
          
              return this.__PROXY__.setKeepMouseGrab(...args);
            
        };
    
        // function 
        QQuickItem.prototype.filtersChildMouseEvents = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.filtersChildMouseEvents");
          
              return this.__PROXY__.filtersChildMouseEvents(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setFiltersChildMouseEvents = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setFiltersChildMouseEvents");
          
              return this.__PROXY__.setFiltersChildMouseEvents(...args);
            
        };
    
        // function 
        QQuickItem.prototype.grabTouchPoints = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.grabTouchPoints");
          
              return this.__PROXY__.grabTouchPoints(...args);
            
        };
    
        // function 
        QQuickItem.prototype.ungrabTouchPoints = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.ungrabTouchPoints");
          
              return this.__PROXY__.ungrabTouchPoints(...args);
            
        };
    
        // function 
        QQuickItem.prototype.keepTouchGrab = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.keepTouchGrab");
          
              return this.__PROXY__.keepTouchGrab(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setKeepTouchGrab = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setKeepTouchGrab");
          
              return this.__PROXY__.setKeepTouchGrab(...args);
            
        };
    
        // function 
        QQuickItem.prototype.contains = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
    
        // function 
        QQuickItem.prototype.containmentMask = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.containmentMask");
          
              return this.__PROXY__.containmentMask(...args);
            
        };
    
        // function 
        QQuickItem.prototype.setContainmentMask = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.setContainmentMask");
          
              return this.__PROXY__.setContainmentMask(...args);
            
        };
    
        // function 
        QQuickItem.prototype.mapToScene = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.mapToScene");
          
              return this.__PROXY__.mapToScene(...args);
            
        };
    
        // function 
        QQuickItem.prototype.mapRectToItem = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.mapRectToItem");
          
              return this.__PROXY__.mapRectToItem(...args);
            
        };
    
        // function 
        QQuickItem.prototype.mapRectToScene = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.mapRectToScene");
          
              return this.__PROXY__.mapRectToScene(...args);
            
        };
    
        // function 
        QQuickItem.prototype.mapFromScene = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.mapFromScene");
          
              return this.__PROXY__.mapFromScene(...args);
            
        };
    
        // function 
        QQuickItem.prototype.mapRectFromItem = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.mapRectFromItem");
          
              return this.__PROXY__.mapRectFromItem(...args);
            
        };
    
        // function 
        QQuickItem.prototype.mapRectFromScene = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.mapRectFromScene");
          
              return this.__PROXY__.mapRectFromScene(...args);
            
        };
    
        // function 
        QQuickItem.prototype.polish = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.polish");
          
              return this.__PROXY__.polish(...args);
            
        };
    
        // function 
        QQuickItem.prototype.forceActiveFocus = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.forceActiveFocus");
          
              return this.__PROXY__.forceActiveFocus(...args);
            
        };
    
        // function 
        QQuickItem.prototype.nextItemInFocusChain = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.nextItemInFocusChain");
          
              return this.__PROXY__.nextItemInFocusChain(...args);
            
        };
    
        // function 
        QQuickItem.prototype.childAt = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QQuickItem.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QQuickItem.prototype.dumpItemTree = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.dumpItemTree");
          
              return this.__PROXY__.dumpItemTree(...args);
            
        };
    
        // function 
        QQuickItem.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QQuickItem.prototype.isTextureProvider = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.isTextureProvider");
          
              return this.__PROXY__.isTextureProvider(...args);
            
        };
    
        // function 
        QQuickItem.prototype.update = function(...args) 
          
        {
          //print("JS: QQuickItem.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QQuickItem.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickItem.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickItem.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'childrenRectChanged', {
            get: function() { return this.__PROXY__.childrenRectChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'childrenRectChanged(QRectF)', {
              get: function() { return this.__PROXY__.childrenRectChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'baselineOffsetChanged', {
            get: function() { return this.__PROXY__.baselineOffsetChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'baselineOffsetChanged(qreal)', {
              get: function() { return this.__PROXY__.baselineOffsetChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'stateChanged', {
            get: function() { return this.__PROXY__.stateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'stateChanged(QString)', {
              get: function() { return this.__PROXY__.stateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'focusChanged', {
            get: function() { return this.__PROXY__.focusChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'focusChanged(bool)', {
              get: function() { return this.__PROXY__.focusChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'activeFocusChanged', {
            get: function() { return this.__PROXY__.activeFocusChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'activeFocusChanged(bool)', {
              get: function() { return this.__PROXY__.activeFocusChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'focusPolicyChanged', {
            get: function() { return this.__PROXY__.focusPolicyChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'focusPolicyChanged(Qt::FocusPolicy)', {
              get: function() { return this.__PROXY__.focusPolicyChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'activeFocusOnTabChanged', {
            get: function() { return this.__PROXY__.activeFocusOnTabChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'activeFocusOnTabChanged(bool)', {
              get: function() { return this.__PROXY__.activeFocusOnTabChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'parentChanged', {
            get: function() { return this.__PROXY__.parentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'parentChanged(QQuickItem*)', {
              get: function() { return this.__PROXY__.parentChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'transformOriginChanged', {
            get: function() { return this.__PROXY__.transformOriginChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'transformOriginChanged(QQuickItem::TransformOrigin)', {
              get: function() { return this.__PROXY__.transformOriginChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'smoothChanged', {
            get: function() { return this.__PROXY__.smoothChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'smoothChanged(bool)', {
              get: function() { return this.__PROXY__.smoothChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'antialiasingChanged', {
            get: function() { return this.__PROXY__.antialiasingChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'antialiasingChanged(bool)', {
              get: function() { return this.__PROXY__.antialiasingChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'clipChanged', {
            get: function() { return this.__PROXY__.clipChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickItem.prototype, 'clipChanged(bool)', {
              get: function() { return this.__PROXY__.clipChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickItem.prototype, 'childrenChanged', {
            get: function() { return this.__PROXY__.childrenChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'opacityChanged', {
            get: function() { return this.__PROXY__.opacityChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'enabledChanged', {
            get: function() { return this.__PROXY__.enabledChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'visibleChanged', {
            get: function() { return this.__PROXY__.visibleChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'visibleChildrenChanged', {
            get: function() { return this.__PROXY__.visibleChildrenChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'rotationChanged', {
            get: function() { return this.__PROXY__.rotationChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'scaleChanged', {
            get: function() { return this.__PROXY__.scaleChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'xChanged', {
            get: function() { return this.__PROXY__.xChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'yChanged', {
            get: function() { return this.__PROXY__.yChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'widthChanged', {
            get: function() { return this.__PROXY__.widthChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'heightChanged', {
            get: function() { return this.__PROXY__.heightChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'zChanged', {
            get: function() { return this.__PROXY__.zChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'implicitWidthChanged', {
            get: function() { return this.__PROXY__.implicitWidthChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'implicitHeightChanged', {
            get: function() { return this.__PROXY__.implicitHeightChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'containmentMaskChanged', {
            get: function() { return this.__PROXY__.containmentMaskChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'paletteChanged', {
            get: function() { return this.__PROXY__.paletteChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickItem.prototype, 'paletteCreated', {
            get: function() { return this.__PROXY__.paletteCreated; },
            configurable: true
        });
        QQuickItem.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QQuickItem.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QQuickItem.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QQuickItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQuickItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QQuickItem.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      