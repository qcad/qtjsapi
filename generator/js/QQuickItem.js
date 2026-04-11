
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
              
                  copyProperties(this, wrapper, QQuickItem);
                
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
          
            copyProperties(this, wrapper, QQuickItem);
          

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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["childrenRectChanged(QRectF)"] = Object.getPrototypeOf(this).childrenRectChanged;
  
    this["baselineOffsetChanged(qreal)"] = Object.getPrototypeOf(this).baselineOffsetChanged;
  
    this["stateChanged(QString)"] = Object.getPrototypeOf(this).stateChanged;
  
    this["focusChanged(bool)"] = Object.getPrototypeOf(this).focusChanged;
  
    this["activeFocusChanged(bool)"] = Object.getPrototypeOf(this).activeFocusChanged;
  
    this["focusPolicyChanged(Qt::FocusPolicy)"] = Object.getPrototypeOf(this).focusPolicyChanged;
  
    this["activeFocusOnTabChanged(bool)"] = Object.getPrototypeOf(this).activeFocusOnTabChanged;
  
    this["parentChanged(QQuickItem*)"] = Object.getPrototypeOf(this).parentChanged;
  
    this["transformOriginChanged(QQuickItem::TransformOrigin)"] = Object.getPrototypeOf(this).transformOriginChanged;
  
    this["smoothChanged(bool)"] = Object.getPrototypeOf(this).smoothChanged;
  
    this["antialiasingChanged(bool)"] = Object.getPrototypeOf(this).antialiasingChanged;
  
    this["clipChanged(bool)"] = Object.getPrototypeOf(this).clipChanged;
  
            }
          
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
      

      // static functions:
      

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

      